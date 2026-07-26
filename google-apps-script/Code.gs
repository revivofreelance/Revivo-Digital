/**
 * Revivo — website enquiry backend (Google Apps Script, 100% free)
 * ---------------------------------------------------------------------------
 * Receives form submissions from the website, appends them to a Google Sheet
 * (with a timestamp), emails you a notification, and optionally sends the
 * visitor an auto-reply.
 *
 * Quick setup:
 *   1. Create a Google Sheet → Extensions → Apps Script.
 *   2. Paste this file, set NOTIFY_EMAIL below.
 *   3. Run `testSetup` once from the editor to authorize + verify the Sheet.
 *   4. Deploy → New deployment → Web app → Execute as: Me,
 *      Who has access: Anyone → Deploy → copy the Web app URL.
 *   5. Put that URL in src/lib/forms.ts (FORMS_ENDPOINT) or in
 *      NEXT_PUBLIC_FORMS_ENDPOINT.
 *
 * Re-deploying later: use Manage deployments → edit the EXISTING deployment →
 * Version: New version. That keeps the same URL. "New deployment" mints a new
 * URL and silently breaks the site until forms.ts is updated to match.
 */

// ======================= SETTINGS =======================
var NOTIFY_EMAIL   = "revivodigitals@gmail.com"; // where you receive enquiries
var SEND_AUTOREPLY = true;                            // email the visitor a confirmation
var BUSINESS_NAME  = "Revivo";                        // used in emails
var SHEET_NAME     = "Enquiries";                     // tab name inside the Sheet

// Your Google Sheet's ID — the long code in its URL between /d/ and /edit:
//   https://docs.google.com/spreadsheets/d/THIS_LONG_CODE_IS_THE_ID/edit
// REQUIRED when this script is standalone (created at script.google.com).
// Leave it "" only if the script lives INSIDE the Sheet (Extensions → Apps Script).
var SHEET_ID       = "";

// Abuse protection. Apps Script can't see the visitor's IP, so we throttle by
// the device id the browser sends, plus a global per-minute flood cap.
var RATE_COOLDOWN_SEC   = 8;   // min seconds between sends from one device
var RATE_MAX_PER_HOUR   = 10;  // max sends per device per hour
var RATE_MAX_PER_MINUTE = 20;  // global cap across everyone per minute
// ========================================================

/** Handles form POSTs from the website. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000); // avoid two submissions writing the same row
  } catch (err) {
    return json_({ result: "error", message: "busy, try again" });
  }

  try {
    var data = parseBody_(e);

    // Simple spam guard: ignore submissions where the honeypot is filled.
    if (data._gotcha) return json_({ result: "ignored" });

    // Rate limiting: per-device cooldown + hourly cap, plus a global flood cap.
    var limited = checkRateLimit_(data);
    if (limited) return json_({ result: "rate_limited", reason: limited });

    var now = new Date();

    // The Sheet write is the fragile step (wrong SHEET_ID, renamed tab, revoked
    // permission, quota) and the email is the one you actually rely on — so a
    // Sheet failure must never stop the email. The site posts with `no-cors`
    // and cannot read our response, so anything thrown here would otherwise
    // lose the enquiry with the visitor still seeing "message sent".
    var saveError = "";
    try {
      getSheet_().appendRow([
        now,
        data.firstName || "",
        data.lastName  || "",
        data.email     || "",
        data.phone     || "",
        data.business  || "",
        data.website   || "",
        data.message   || "",
        data.intent    || "",
        data.source    || "",
        data.pageUrl   || "",
        data.userAgent || ""
      ]);
    } catch (err) {
      saveError = String(err);
    }

    sendNotification_(data, now, saveError);
    if (SEND_AUTOREPLY && isEmail_(data.email)) {
      try { sendAutoReply_(data); } catch (err) { /* never fail the save on auto-reply */ }
    }

    return json_(
      saveError
        ? { result: "success", warning: "not_saved_to_sheet", message: saveError }
        : { result: "success" }
    );
  } catch (err) {
    return json_({ result: "error", message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Health check — open the Web app URL in a browser to confirm it's live. */
function doGet() {
  return json_({ result: "ok", message: BUSINESS_NAME + " enquiry endpoint is live." });
}

/**
 * Run this ONCE from the editor (select testSetup → Run) after setting SHEET_ID.
 * It authorizes the Sheet permission and writes a test row so you can confirm
 * the connection works before deploying.
 */
function testSetup() {
  var sheet = getSheet_();
  sheet.appendRow([
    new Date(), "Test", "Setup", "test@example.com", "", "", "",
    "If you can see this row, the Sheet connection works. You can delete it.",
    "editor-test", "testSetup", "", ""
  ]);
  Logger.log("OK — wrote a test row to: " + sheet.getParent().getUrl());
}

/**
 * Run this once from the editor to confirm email delivery on its own, without
 * involving the Sheet or the deployment. If this lands in your inbox, the mail
 * half is fine and any remaining problem is the Sheet or the Web app URL.
 */
function testEmail() {
  MailApp.sendEmail(
    NOTIFY_EMAIL,
    "[" + BUSINESS_NAME + "] test email from Apps Script",
    "If you're reading this, MailApp works and NOTIFY_EMAIL is correct.\n\n" +
    "Remaining daily email quota: " + MailApp.getRemainingDailyQuota() + "\n"
  );
  Logger.log("Sent to " + NOTIFY_EMAIL + ". Remaining quota: " + MailApp.getRemainingDailyQuota());
}

/* --------------------------- helpers --------------------------- */

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (err) { /* fall through */ }
  }
  return (e && e.parameter) || {};
}

/**
 * Returns null if allowed, or a reason string if the submission should be
 * rejected. Uses CacheService (shared across executions) and runs inside the
 * doPost lock, so the read-modify-write is safe.
 */
function checkRateLimit_(data) {
  var cache = CacheService.getScriptCache();
  var now = Date.now();

  // Global flood cap first: a rejected submission shouldn't burn the device's
  // hourly quota as well.
  var gkey = "rl_glob_" + Math.floor(now / 60000);
  var gcount = parseInt(cache.get(gkey) || "0", 10) + 1;
  cache.put(gkey, String(gcount), 120);
  if (gcount > RATE_MAX_PER_MINUTE) return "global-flood";

  // Per-device: cooldown + hourly cap (device id comes from the browser).
  var fp = String(data.deviceId || data.email || "anon").substring(0, 90);
  var dkey = "rl_dev_" + fp;
  var hist = [];
  try { hist = JSON.parse(cache.get(dkey) || "[]"); } catch (e) { hist = []; }
  hist = hist.filter(function (t) { return now - t < 3600000; });
  var last = hist.length ? hist[hist.length - 1] : 0;
  if (now - last < RATE_COOLDOWN_SEC * 1000) return "cooldown";
  if (hist.length >= RATE_MAX_PER_HOUR) return "hourly-cap";
  hist.push(now);
  cache.put(dkey, JSON.stringify(hist), 3600);

  return null;
}

function getSheet_() {
  var ss = SHEET_ID
    ? SpreadsheetApp.openById(SHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error(
      "No spreadsheet found. Set SHEET_ID at the top of this script to your " +
      "Google Sheet's ID (the code in its URL between /d/ and /edit)."
    );
  }
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp", "First name", "Last name", "Email", "WhatsApp / Phone",
      "Business", "Website", "Message", "Intent", "Source", "Page URL", "User agent"
    ]);
    sheet.getRange(1, 1, 1, 12).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendNotification_(data, now, saveError) {
  var name = ((data.firstName || "") + " " + (data.lastName || "")).trim() || "Someone";
  var subject = "New enquiry from " + name + (data.business ? " (" + data.business + ")" : "");
  if (saveError) subject = "[NOT SAVED] " + subject;

  var body = "";
  if (saveError) {
    // Put this first: the enquiry only exists in this email, so it must be
    // obvious that the Sheet needs fixing before the next one arrives.
    body +=
      "WARNING: this enquiry could NOT be written to the Google Sheet, so this\n" +
      "email is the only copy. Fix the Sheet connection, then check SHEET_ID.\n" +
      "Error: " + saveError + "\n\n" +
      "----------------------------------------\n\n";
  }

  body +=
    "You've received a new enquiry via your website.\n\n" +
    "Name:     " + name + "\n" +
    "Email:    " + (data.email    || "—") + "\n" +
    "WhatsApp: " + (data.phone    || "—") + "\n" +
    "Business: " + (data.business || "—") + "\n" +
    "Website:  " + (data.website  || "—") + "\n" +
    "Intent:   " + (data.intent   || "—") + "\n" +
    "Source:   " + (data.source   || "—") + "\n" +
    "Time:     " + now + "\n\n" +
    "Message:\n" + (data.message || "—") + "\n";

  var options = { name: BUSINESS_NAME + " Website" };
  if (isEmail_(data.email)) options.replyTo = data.email; // reply goes straight to the visitor
  MailApp.sendEmail(NOTIFY_EMAIL, subject, body, options);
}

function sendAutoReply_(data) {
  var first = data.firstName || "there";

  var subject = "Thanks for reaching out to " + BUSINESS_NAME;

  var body =
    "Hi " + first + ",\n\n" +
    "Thanks for getting in touch.\n\n" +
    "I've received your message and I'll personally reply within 24 hours (usually much sooner during business hours).\n\n" +
    "No generic replies. No pressure. Just an honest response tailored to your business.\n\n" +
    "Talk soon,\n" +
    BUSINESS_NAME + "\n" +
    NOTIFY_EMAIL;

  MailApp.sendEmail(data.email, subject, body, {
    name: BUSINESS_NAME
  });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function isEmail_(s) {
  return typeof s === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}
