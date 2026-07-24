"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import {
  UserPlus,
  CalendarClock,
  Stethoscope,
  FileText,
  Receipt,
  CalendarCheck,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  { icon: UserPlus, name: "Patient Registration", desc: "Walk-in or pre-registered — UHID issued in seconds." },
  { icon: CalendarClock, name: "Appointment Scheduling", desc: "Doctor calendars, tokens, and smart re-routing." },
  { icon: Stethoscope, name: "Doctor Consultation", desc: "Vitals, SOAP notes, diagnosis and prescription in one screen." },
  { icon: FileText, name: "Prescription", desc: "Drug database, dosage checks, digital Rx to patient." },
  { icon: Receipt, name: "Billing", desc: "Itemised invoices, insurance, split payments and refunds." },
  { icon: CalendarCheck, name: "Follow-up", desc: "Schedule recalls and never lose a patient to leakage." },
  { icon: BarChart3, name: "Analytics", desc: "Revenue, footfall, doctor load — live and historical." },
  { icon: TrendingUp, name: "Growth", desc: "Compare branches, find leaks, and double down on what works." },
];

export function WorkflowTimeline() {
  return (
    <section id="workflows" className="relative py-6 lg:py-10 bg-gradient-to-b from-emerald-50/40 via-background to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="One Platform. Every Workflow."
          title={
            <>
              From walk-in to growth —{" "}
              <span className="text-gradient-emerald">all connected.</span>
            </>
          }
          description="No more juggling five different tools. Every step of the patient journey flows into the next, with zero double entry."
        />

        {/* Horizontal scrolling workflow on large screens */}
        <div className="mt-10 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[58px] left-8 right-8 h-px bg-gradient-to-r from-emerald-300/0 via-emerald-400/60 to-emerald-300/0" />

            <div className="grid grid-cols-8 gap-2">
              {steps.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-black/[0.06] shadow-premium flex items-center justify-center group-hover:shadow-card-hover group-hover:border-emerald-300 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-emerald-700" strokeWidth={1.6} />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-[13.5px] text-foreground leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-[11.5px] text-muted-foreground leading-relaxed px-1">
                    {s.desc}
                  </p>

                  {/* Arrow between nodes */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-12 -right-1 w-3 h-3 text-emerald-500/70 hidden xl:block">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="mt-5 lg:hidden">
          <div className="relative pl-10">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-emerald-300/60" />
            <div className="space-y-2">
              {steps.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-9 h-9 rounded-lg bg-white border border-black/[0.06] shadow-premium flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-emerald-700" strokeWidth={1.6} />
                  </div>
                  <div className="bg-white border border-black/[0.06] rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-semibold text-[12.5px] text-foreground leading-tight">{s.name}</h3>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
