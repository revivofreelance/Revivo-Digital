// Lead / enquiry submission → Google Apps Script → Google Sheets + email.
//
// ────────────────────────────────────────────────────────────────────────────
// ONE-TIME SETUP
//   1. Deploy the script in /google-apps-script as a Web App (access: "Anyone").
//   2. Paste its Web App URL below, OR set NEXT_PUBLIC_FORMS_ENDPOINT in .env.
//   Full step-by-step: google-apps-script/README.md
// ────────────────────────────────────────────────────────────────────────────

// Next.js inlines `process.env.NEXT_PUBLIC_*` as a string literal at build time.
// Declared locally so this lean project doesn't need @types/node for one ref.
declare const process: { env: Record<string, string | undefined> };

const FORMS_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMS_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbx7ih7z1hiLExuLwkkCteJsxnn5hHr58UgZbefW9S-L5vdZ0gwSOk--tOJYfxDCEy4-/exec";

// ── Client-side abuse limits (per browser/device) ───────────────────────────
// First line of defence: stops a real visitor (or a casual spammer using the
// site) from firing off many submissions. The Apps Script enforces its own
// limits too, so this can't be bypassed just by editing the page.
const RL_COOLDOWN_MS = 8_000;   // minimum gap between two sends
const RL_MAX_PER_HOUR = 8;      // max sends from this device per rolling hour
const RL_HISTORY_KEY = "revivo_submits_v1";
const RL_DEVICE_KEY = "revivo_device_id";

export type LeadPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  business?: string;
  website?: string;
  message?: string;
  intent?: string;
  source?: string;
  _gotcha?: string; // honeypot — must stay empty for a real human
};

/** Thrown when the visitor is sending too fast / too often (message is shown to them). */
export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
  }
}

/** True once a real Apps Script URL has been configured. */
export function isFormsConfigured(): boolean {
  return /^https:\/\//.test(FORMS_ENDPOINT) && !FORMS_ENDPOINT.includes("PASTE_YOUR");
}

/** Pull the standard lead fields out of an uncontrolled <form>. */
export function formToLead(
  form: HTMLFormElement,
  extra?: Partial<LeadPayload>,
): LeadPayload {
  const fd = new FormData(form);
  const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();
  return {
    firstName: get("firstName"),
    lastName: get("lastName"),
    email: get("email"),
    phone: get("phone"),
    business: get("business"),
    website: get("website"),
    // the message box is named "message" on most forms, "concern" on the audit form
    message: get("message") || get("concern"),
    _gotcha: get("_gotcha"),
    ...extra,
  };
}

/** Turn a failed submit into a user-friendly message (rate-limit vs generic). */
export function submitErrorMessage(err: unknown, fallback: string): string {
  return err instanceof RateLimitError ? err.message : fallback;
}

/** A stable per-device id kept in localStorage — lets the server throttle too. */
function getDeviceId(): string {
  if (typeof localStorage === "undefined") return "server";
  try {
    let id = localStorage.getItem(RL_DEVICE_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(RL_DEVICE_KEY, id);
    }
    return id;
  } catch {
    return "nostorage";
  }
}

function readHistory(): number[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const now = Date.now();
    return (JSON.parse(localStorage.getItem(RL_HISTORY_KEY) || "[]") as number[]).filter(
      (t) => now - t < 3_600_000,
    );
  } catch {
    return [];
  }
}

function writeHistory(times: number[]): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(RL_HISTORY_KEY, JSON.stringify(times));
  } catch {
    /* storage full / disabled — ignore */
  }
}

/** Throws RateLimitError if this device is sending too fast or too often. */
function enforceClientRateLimit(): void {
  const now = Date.now();
  const times = readHistory();
  const last = times.length ? times[times.length - 1] : 0;
  if (now - last < RL_COOLDOWN_MS) {
    throw new RateLimitError(
      "You just sent a message — please wait a few seconds before sending another.",
    );
  }
  if (times.length >= RL_MAX_PER_HOUR) {
    throw new RateLimitError(
      "You've sent several messages recently. Please try again later, or email directly.",
    );
  }
}

/**
 * Send a lead to Google Sheets.
 *
 * Uses a `no-cors` POST because Apps Script web apps don't return CORS headers.
 * The request still reaches the script (the row is saved and the email is sent) —
 * we simply can't read the response, so callers show success optimistically.
 * A genuine network failure (offline, bad URL) still rejects this promise.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!isFormsConfigured()) {
    throw new Error(
      "Contact form is not configured. Set NEXT_PUBLIC_FORMS_ENDPOINT or edit src/lib/forms.ts.",
    );
  }

  enforceClientRateLimit();

  // Record the send up-front so rapid double-clicks hit the cooldown too.
  const stamp = Date.now();
  writeHistory([...readHistory(), stamp]);

  const body = JSON.stringify({
    ...payload,
    deviceId: getDeviceId(),
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  });

  try {
    await fetch(FORMS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      // text/plain keeps this a "simple" request so the browser skips the CORS
      // preflight (which Apps Script can't answer). Apps Script reads the JSON
      // string from e.postData.contents.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body,
    });
  } catch (err) {
    // A genuine network failure shouldn't count against the visitor's limit.
    writeHistory(readHistory().filter((t) => t !== stamp));
    throw err;
  }
}
