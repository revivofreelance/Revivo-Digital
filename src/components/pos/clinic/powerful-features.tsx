"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import {
  CalendarClock,
  UserPlus,
  FileHeart,
  Stethoscope,
  Pill,
  ClipboardList,
  Activity,
  Receipt,
  ShieldCheck,
  FlaskConical,
  ScanLine,
  Package,
  Clock,
  Lock,
  Cloud,
  BellRing,
  RefreshCw,
  Users,
  MessageSquare,
  Printer,
} from "lucide-react";

const features = [
  { icon: CalendarClock, name: "Appointment Scheduling", desc: "Per-doctor calendars with smart token queue." },
  { icon: UserPlus, name: "Patient Registration", desc: "Walk-in or pre-registered with auto UHID." },
  { icon: FileHeart, name: "Electronic Medical Records", desc: "Encounter-grade records for every visit." },
  { icon: Stethoscope, name: "Doctor Consultation", desc: "One workspace for the entire consult." },
  { icon: Pill, name: "Digital Prescriptions", desc: "Drug database with dosage & allergy checks." },
  { icon: ClipboardList, name: "SOAP Notes", desc: "Structured subjective, objective, assessment, plan." },
  { icon: Activity, name: "Vitals Management", desc: "BP, pulse, temp, SpO₂, height, weight." },
  { icon: Receipt, name: "Billing & Invoicing", desc: "GST-ready, itemised, split-mode payments." },
  { icon: ShieldCheck, name: "Insurance Support", desc: "TPA workflow with pre-auth & claims." },
  { icon: FlaskConical, name: "Laboratory Integration", desc: "Sample tracking and report delivery." },
  { icon: ScanLine, name: "Radiology", desc: "Image attachments & radiologist notes." },
  { icon: Package, name: "Pharmacy POS", desc: "Walk-in sales, stock and expiry tracking." },
  { icon: Package, name: "Inventory", desc: "Batch-level stock with reorder alerts." },
  { icon: Clock, name: "Patient Timeline", desc: "Every encounter, in chronological order." },
  { icon: Lock, name: "Role Permissions", desc: "Granular RBAC for every staff member." },
  { icon: Activity, name: "Analytics", desc: "Real-time KPIs and historical trends." },
  { icon: Cloud, name: "Offline-first", desc: "Runs without internet, syncs when online." },
  { icon: RefreshCw, name: "Cloud Sync", desc: "Encrypted multi-device sync." },
  { icon: BellRing, name: "Follow-up Automation", desc: "Auto-trigger SMS / WhatsApp recalls." },
  { icon: RefreshCw, name: "Recall Engine", desc: "Reactivation lists for lapsed patients." },
  { icon: Users, name: "Queue Management", desc: "Live token board for the waiting room." },
  { icon: MessageSquare, name: "Patient Communication", desc: "SMS, WhatsApp & email in one inbox." },
  { icon: Printer, name: "Print & Export", desc: "Invoices, Rx, reports — one click." },
];

export function PowerfulFeatures() {
  return (
    <section id="features" className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Powerful Features"
          title={
            <>
              Twenty-four modules.{" "}
              <span className="text-gradient-emerald">One login.</span>
            </>
          }
          description="Everything a modern clinic needs — built in, not bolted on. No more stitching together five vendors and hoping they don't break."
        />

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-black/[0.06] rounded-lg sm:rounded-2xl p-2.5 sm:p-5 hover-lift hover:shadow-card-hover hover:border-emerald-200/60"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-1.5 sm:mb-3.5 group-hover:bg-emerald-100 transition-colors">
                <f.icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-emerald-700" strokeWidth={1.6} />
              </div>
              <h3 className="font-medium text-[11.5px] sm:text-[14px] text-foreground leading-tight">{f.name}</h3>
              <p className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">
                {f.desc}
              </p>
            </motion.div>
          ))}

          {/* Stat card — sized to match the grid rhythm */}
          <div className="relative bg-gradient-to-br from-emerald-700 to-teal-800 rounded-lg sm:rounded-2xl p-2.5 sm:p-5 text-white overflow-hidden hover-lift">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-white/15 flex items-center justify-center mb-1.5 sm:mb-3.5">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="sm:w-4 sm:h-4">
                  <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-medium text-[11.5px] sm:text-[14px] leading-tight">24+ modules integrated</p>
              <p className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-[12.5px] text-white/70 leading-snug line-clamp-2 sm:line-clamp-none">
                And more added every quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
