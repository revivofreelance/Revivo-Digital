"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import { Check, X } from "lucide-react";

const rows = [
  { traditional: "Paper records & files", ours: "Digital records, instantly searchable" },
  { traditional: "Separate software for billing, EMR, pharmacy", ours: "One platform, every workflow" },
  { traditional: "Manual billing & calculations", ours: "Automated, GST-ready invoicing" },
  { traditional: "No follow-ups — patients just vanish", ours: "Smart recall engine brings them back" },
  { traditional: "Basic dashboard or none", ours: "Real-time analytics across every KPI" },
  { traditional: "Internet goes down = clinic stops", ours: "Offline-first, syncs when online" },
  { traditional: "Patient data scattered across machines", ours: "Encrypted, centralised, audit-logged" },
];

export function ComparisonSection() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          size="sm"
          eyebrow="Why Clinics Switch"
          title={
            <>
              Traditional clinic software vs.{" "}
              <span className="text-gradient-emerald">ClinicOS.</span>
            </>
          }
          description="Most legacy tools were built for compliance, not for humans. ClinicOS was built for the people who actually use it every day."
        />

        <div className="mt-5 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6 mb-3">
            {/* Traditional header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-rose-50 text-rose-700 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2">
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.4} />
                <span className="hidden sm:inline">Traditional </span>Clinic Software
              </div>
              <p className="text-[11px] sm:text-sm text-muted-foreground hidden sm:block">The old way of running a clinic</p>
            </div>
            {/* Ours header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.4} />
                ClinicOS Platform
              </div>
              <p className="text-[11px] sm:text-sm text-muted-foreground hidden sm:block">The way clinics should be run</p>
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            {rows.map((r, i) => (
              <motion.div
                key={r.traditional}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6 items-stretch"
              >
                <div className="flex items-start gap-2 p-2.5 sm:p-3.5 lg:p-4 rounded-lg sm:rounded-xl bg-rose-50/40 border border-rose-100/60">
                  <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-600" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-rose-900/80 leading-snug">{r.traditional}</p>
                </div>
                <div className="flex items-start gap-2 p-2.5 sm:p-3.5 lg:p-4 rounded-lg sm:rounded-xl bg-emerald-50/60 border border-emerald-200/60 shadow-premium">
                  <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-emerald-900 font-medium leading-snug">{r.ours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
