"use client";

import { motion } from "framer-motion";
import { SectionHeading, HoverCallout } from "./primitives";
import {
  Stethoscope,
  FileText,
  Receipt,
  BellRing,
  Lock,
  CalendarClock,
} from "lucide-react";
import type { ReactNode } from "react";

/* ---------------------------- Login ---------------------------- */

const loginHighlights = [
  { title: "Offline-first", desc: "Clinic keeps running without internet." },
  { title: "Secure auth", desc: "Encrypted credentials, session timeout." },
  { title: "Role-based", desc: "Doctor, receptionist, admin, pharmacist." },
  { title: "Encrypted workspace", desc: "AES-256 at rest, TLS in transit." },
];

export function LoginShowcase() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-1 lg:order-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/01-login.png"
                alt="Secure clinic login screen with role-based access"
                url="app.clinicos.io/login"
              >
                <HoverCallout
                  label="Simple sign-in"
                  description="Staff log in with their phone or email. No complicated steps."
                  top="32%"
                  left="50%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Pick your role"
                  description="Doctor, receptionist, or admin — each sees only what they need."
                  top="55%"
                  left="50%"
                  variant="teal"
                />
                <HoverCallout
                  label="Works offline"
                  description="Login works even without internet. Syncs the moment you're back online."
                  top="78%"
                  left="50%"
                  variant="amber"
                />
                <HoverCallout
                  label="Forgot password?"
                  description="Reset via SMS in seconds. No need to call IT support."
                  top="92%"
                  left="50%"
                  variant="emerald"
                />
              </BrowserShot>
            </motion.div>
          </div>
          <div className="lg:col-span-5 order-2 lg:order-2 min-w-0">
            <SectionHeading
              eyebrow="Login Experience"
              align="left"
              title={<>Start the day in <span className="text-gradient-emerald">seconds.</span></>}
              description="Staff sign in fast, work offline if needed, and every action is logged against their role. Built for the realities of Indian clinic connectivity."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {loginHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Consultation ---------------------------- */

const consultationHighlights = [
  { title: "Vitals", desc: "BP, pulse, temp, SpO₂, height, weight — captured in seconds." },
  { title: "SOAP notes", desc: "Structured subjective, objective, assessment, plan." },
  { title: "Diagnosis", desc: "ICD-10 lookup with auto-complete and history." },
  { title: "Prescriptions", desc: "Drug database with dosage & interaction alerts." },
  { title: "Clinical notes", desc: "Free-text and templates side by side." },
  { title: "Patient timeline", desc: "Past encounters, vitals trend, allergies — never switch tabs." },
];

export function ConsultationShowcase() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-1 lg:order-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/07-consultation-cockpit.png"
                alt="Doctor consultation cockpit with vitals, SOAP notes, diagnosis and prescription"
                url="app.clinicos.io/consult"
              >
                <HoverCallout
                  label="Patient info"
                  description="Who you're seeing, their age, and why they came in today."
                  top="12%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Vitals"
                  description="BP, pulse, temperature, weight — captured in seconds by the nurse."
                  top="28%"
                  left="14%"
                  variant="teal"
                />
                <HoverCallout
                  label="SOAP notes"
                  description="Write what the patient said, what you found, your diagnosis, and the plan."
                  top="28%"
                  left="58%"
                  align="left"
                  variant="amber"
                />
                <HoverCallout
                  label="Diagnosis"
                  description="Pick from ICD-10 list. Saves typing and standardises records."
                  top="58%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Prescription"
                  description="Type a few letters, pick the drug. Dosage and allergy checks happen automatically."
                  top="68%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Save & next"
                  description="Finish the consult and call the next patient in one click."
                  top="90%"
                  left="50%"
                  variant="amber"
                />
              </BrowserShot>
            </motion.div>
          </div>
          <div className="lg:col-span-5 order-2 lg:order-2 min-w-0">
            <SectionHeading
              eyebrow="Consultation"
              align="left"
              title={<>An intelligent <span className="text-gradient-emerald">doctor's workspace.</span></>}
              description="A calm cockpit designed with practising doctors — everything you need during a consult, nothing you don't."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {consultationHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Stethoscope className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Patient Profile ---------------------------- */

const profileHighlights = [
  { title: "Allergies", desc: "Drug & food alerts surfaced before every prescription." },
  { title: "Insurance", desc: "Policy, TPA, pre-auth status in one place." },
  { title: "Medical timeline", desc: "Every encounter, chronological, searchable." },
  { title: "Current medication", desc: "Active Rx with start date & refills." },
  { title: "Emergency contact", desc: "Family contact & relationship for crisis moments." },
  { title: "Health history", desc: "Chronic conditions, surgeries, family history." },
];

export function PatientProfileShowcase() {
  return (
    <section className="relative py-6 lg:py-10 bg-gradient-to-b from-emerald-50/30 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 min-w-0">
            <SectionHeading
              eyebrow="Patient Profile"
              align="left"
              title={<>A secure digital record. <br/> For every patient.</>}
              description="A 360° view of the patient — clinically rich, beautifully organised and instantly accessible at the point of care."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {profileHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-teal-100/30 to-emerald-200/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/08-patient-details.png"
                alt="Patient profile drawer with allergies, insurance, medical timeline and vitals"
                url="app.clinicos.io/patient/profile"
              >
                <HoverCallout
                  label="Who's this?"
                  description="Photo, name, age, gender — the basics, in one glance."
                  top="12%"
                  left="55%"
                  align="left"
                  variant="emerald"
                />
                <HoverCallout
                  label="Allergies"
                  description="Drug and food allergies shown here. Stops bad prescriptions before they happen."
                  top="28%"
                  left="55%"
                  align="left"
                  variant="amber"
                />
                <HoverCallout
                  label="Insurance"
                  description="Policy number, TPA, what's covered — clear and simple."
                  top="44%"
                  left="55%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Visit timeline"
                  description="Every visit, in order. See when they came, what was done, what was prescribed."
                  top="62%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Current meds"
                  description="What they're taking right now. Avoids duplicate prescriptions."
                  top="78%"
                  left="55%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Emergency contact"
                  description="Family member to call if something goes wrong."
                  top="92%"
                  left="50%"
                  variant="amber"
                />
              </BrowserShot>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Billing ---------------------------- */

const billingHighlights = [
  { title: "Invoices", desc: "GST-ready, itemised, branded with your clinic." },
  { title: "Split payments", desc: "Cash + UPI + card in one transaction." },
  { title: "Insurance claims", desc: "TPA pre-auth, submission & tracking." },
  { title: "Outstanding balance", desc: "Auto-tracked across visits." },
  { title: "Refunds", desc: "Partial or full, with audit trail." },
  { title: "Payment history", desc: "Every transaction, instantly exportable." },
];

export function BillingShowcase() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-1 lg:order-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/10-billing.png"
                alt="Billing screen with invoices, split payments, insurance claims and outstanding balance"
                url="app.clinicos.io/billing"
              >
                <HoverCallout
                  label="Invoice list"
                  description="Every bill raised today, with status — paid, pending, or part-paid."
                  top="16%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Itemised bill"
                  description="Consultation, lab, pharmacy — each line clear. Patient sees exactly what they pay for."
                  top="32%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Split payment"
                  description="Patient paying partly by cash, partly by UPI? No problem. Both recorded."
                  top="50%"
                  left="14%"
                  variant="amber"
                />
                <HoverCallout
                  label="Insurance claim"
                  description="Send claim to TPA in one click. Track approval status without phone calls."
                  top="68%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Outstanding"
                  description="Money still owed by patient. Auto-reminded until cleared."
                  top="68%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Print / share"
                  description="Print invoice or send on WhatsApp in one tap. Patient gets it instantly."
                  top="90%"
                  left="50%"
                  variant="amber"
                />
              </BrowserShot>
            </motion.div>
          </div>
          <div className="lg:col-span-5 order-2 lg:order-2 min-w-0">
            <SectionHeading
              eyebrow="Billing"
              align="left"
              title={<>Billing that doesn't <span className="text-gradient-emerald">break your flow.</span></>}
              description="From a quick walk-in charge to a multi-line insurance claim, every payment scenario is handled in one screen."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {billingHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Receipt className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Recall & Follow-up ---------------------------- */

const recallHighlights = [
  { title: "Patients due", desc: "List of patients whose next visit is due this week." },
  { title: "Overdue recalls", desc: "Auto-flagged patients who've slipped through." },
  { title: "One-click booking", desc: "Confirm a follow-up appointment in a single tap." },
  { title: "SMS reminders", desc: "Automated SMS / WhatsApp to patient's phone." },
  { title: "Patient retention", desc: "Bring lapsed patients back into the clinic." },
  { title: "Automated follow-ups", desc: "Set once, runs forever per care plan." },
];

export function RecallShowcase() {
  return (
    <section className="relative py-6 lg:py-10 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 min-w-0">
            <SectionHeading
              eyebrow="Recall & Follow-up"
              align="left"
              title={<>Never lose a patient <span className="text-gradient-emerald">to leakage.</span></>}
              description="The recall engine quietly works in the background — surfacing who's due, sending reminders, and giving your reception team a one-click path to rebooking."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {recallHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <BellRing className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/09-pharmacy-pos.png"
                alt="Recall and follow-up screen with patients due, overdue recalls and one-click booking"
                url="app.clinicos.io/recalls"
              >
                <HoverCallout
                  label="Who's due?"
                  description="Patients who should come back this week. Sorted by urgency."
                  top="18%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Overdue"
                  description="Patients who missed their follow-up. Red = needs attention now."
                  top="18%"
                  left="58%"
                  align="left"
                  variant="amber"
                />
                <HoverCallout
                  label="Last visit"
                  description="When they last came in. Helps you decide how urgent the recall is."
                  top="42%"
                  left="14%"
                  variant="teal"
                />
                <HoverCallout
                  label="One-click book"
                  description="Send appointment link via SMS. Patient confirms, slot is booked."
                  top="58%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="SMS / WhatsApp"
                  description="Reminder sent automatically. Patient replies to confirm or reschedule."
                  top="68%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Brought back"
                  description="Money recovered from patients who came back because of recalls. Real ROI."
                  top="88%"
                  left="50%"
                  variant="amber"
                />
              </BrowserShot>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Appointments ---------------------------- */

const appointmentHighlights = [
  { title: "Doctor schedule", desc: "Per-doctor calendar with availability slots." },
  { title: "Token queue", desc: "Auto-numbered tokens tied to appointments." },
  { title: "Calendar view", desc: "Day, week and month views with drag-to-reschedule." },
  { title: "Status tracking", desc: "Booked → checked-in → in-consult → completed." },
  { title: "Smart conflict alerts", desc: "Never double-book a doctor or room." },
  { title: "Recurring appointments", desc: "Chronic care and therapy schedules." },
];

export function AppointmentsShowcase() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-1 lg:order-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />
              <BrowserShot
                src="/pos-media/clinic/14-appointments.png"
                alt="Appointment management with doctor schedule, token queue and calendar view"
                url="app.clinicos.io/appointments"
              >
                <HoverCallout
                  label="Today's calendar"
                  description="See every appointment for today, by doctor, in one view."
                  top="16%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Doctor schedule"
                  description="Which doctor is available when. Drag-and-drop to reschedule."
                  top="16%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Token number"
                  description="Each patient gets a token. Display it on the waiting-room screen."
                  top="38%"
                  left="14%"
                  variant="amber"
                />
                <HoverCallout
                  label="Status"
                  description="Booked, checked-in, in-consult, done — reception always knows where each patient is."
                  top="58%"
                  left="14%"
                  variant="emerald"
                />
                <HoverCallout
                  label="Conflict alert"
                  description="Tries to double-book? System stops it before the appointment is saved."
                  top="68%"
                  left="58%"
                  align="left"
                  variant="teal"
                />
                <HoverCallout
                  label="Walk-ins too"
                  description="Walk-in patient? Add them on the fly. Token assigned automatically."
                  top="90%"
                  left="50%"
                  variant="amber"
                />
              </BrowserShot>
            </motion.div>
          </div>
          <div className="lg:col-span-5 order-2 lg:order-2 min-w-0">
            <SectionHeading
              eyebrow="Appointments"
              align="left"
              title={<>Scheduling that <span className="text-gradient-emerald">never double-books.</span></>}
              description="Doctor calendars, token queues, day/week/month views and live status — reception has full control without the chaos."
            />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              {appointmentHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CalendarClock className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                    <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{h.title}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- shared BrowserShot ---------------------------- */

function BrowserShot({
  src,
  alt,
  url,
  children,
}: {
  src: string;
  alt: string;
  url: string;
  children?: ReactNode;
}) {
  return (
    <div className="browser-frame">
      <div className="browser-bar flex items-center gap-3 px-4 py-3">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-md bg-white/70 border border-black/[0.04] text-[11px] text-muted-foreground font-mono">
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>
      <div className="relative bg-white overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        {children}
      </div>
    </div>
  );
}
