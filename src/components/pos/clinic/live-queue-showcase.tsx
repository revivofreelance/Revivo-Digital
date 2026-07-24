"use client";

import { motion } from "framer-motion";
import { SectionHeading, HoverCallout } from "./primitives";
import { UserPlus, Ticket, Stethoscope, ClipboardList, Receipt, CheckCircle2 } from "lucide-react";

const queueSteps = [
  { icon: UserPlus, label: "Patient arrives", desc: "Reception checks in" },
  { icon: Ticket, label: "Token assigned", desc: "Auto-numbered" },
  { icon: Stethoscope, label: "Doctor calls", desc: "Queue updates live" },
  { icon: ClipboardList, label: "Consultation", desc: "SOAP + Rx captured" },
  { icon: Receipt, label: "Billing", desc: "Invoice generated" },
  { icon: CheckCircle2, label: "Completed", desc: "Follow-up set" },
];

export function LiveQueueShowcase() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left — copy + workflow */}
          <div className="lg:col-span-5 order-2 lg:order-1 min-w-0">
            <SectionHeading
              eyebrow="Live Queue"
              align="left"
              title={
                <>
                  Watch a patient flow{" "}
                  <span className="text-gradient-emerald">from arrival to discharge.</span>
                </>
              }
              description="The token queue is the heartbeat of a busy clinic. ClinicOS keeps every step — from front desk to billing — in sync, in real-time."
            />

            {/* Vertical workflow */}
            <div className="mt-5 relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-200" />
              <div className="space-y-2">
                {queueSteps.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="relative flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="relative z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-emerald-200 shadow-premium flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                      <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" strokeWidth={1.6} />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-700 text-white text-[8px] sm:text-[9px] font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 bg-white border border-black/[0.06] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3">
                      <p className="font-medium text-[12.5px] sm:text-sm text-foreground leading-tight">{s.label}</p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                    </div>
                    {/* Animated pulse dot for active step */}
                    {i === 2 && (
                      <span className="absolute right-3 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Today Queue screenshot */}
          <div className="lg:col-span-7 order-1 lg:order-2 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-200/30 to-teal-100/20 blur-3xl -z-10 rounded-[2rem]" />

              {/* Browser frame */}
              <div className="browser-frame">
                <div className="browser-bar flex items-center gap-3 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-white/70 border border-black/[0.04] text-[11px] text-muted-foreground font-mono">
                      app.clinicos.io/today
                    </div>
                  </div>
                  <div className="w-12" />
                </div>
                <div className="relative bg-white overflow-hidden">
                  <img
                    src="/pos-media/clinic/02-today-live-queue.png"
                    alt="Today live queue with patient tokens and live doctor workload"
                    className="w-full h-auto block"
                    loading="lazy"
                  />

                  {/* Interactive hover callouts */}
                  <HoverCallout
                    label="Today's KPIs"
                    description="Money collected, patients seen, and appointments today — all in one glance."
                    top="12%"
                    left="20%"
                    variant="emerald"
                  />
                  <HoverCallout
                    label="Live token queue"
                    description="Patients waiting right now, in order. Updates instantly as they're called in."
                    top="38%"
                    left="68%"
                    align="left"
                    variant="teal"
                  />
                  <HoverCallout
                    label="Now serving"
                    description="Which token number is with the doctor right now. Patients know when it's their turn."
                    top="55%"
                    left="30%"
                    variant="amber"
                  />
                  <HoverCallout
                    label="Doctor workload"
                    description="How many patients each doctor is seeing. Spot who's overloaded."
                    top="74%"
                    left="68%"
                    align="left"
                    variant="emerald"
                  />

                  {/* Live overlay badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 flex items-center gap-2 shadow-premium"
                  >
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-pulse-ring" />
                      <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-600" />
                    </span>
                    <span className="text-[11px] font-medium text-foreground">Live · 14 in queue</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
