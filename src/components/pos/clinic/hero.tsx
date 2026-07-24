"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton, GhostButton } from "./primitives";
import { LeadModal } from "@/components/site/lead-modal";

/**
 * Hero — Apple keynote style layered product collage.
 * The screenshots float in perspective with soft shadows and gentle motion.
 */
export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section className="relative pt-16 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-12 overflow-hidden bg-aurora">
      {/* Background grid + radial fade */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />

      {/* Top soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 text-xs font-medium mb-6"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-600" />
              </span>
              Trusted by modern clinics across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-balance text-foreground"
            >
              The Modern <span className="text-gradient-emerald">Operating System</span> for Clinics.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[13.5px] sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0"
            >
              Appointments, patients, consultations, billing, pharmacy, follow-ups and analytics — all in one beautifully designed platform that keeps your clinic running smoothly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 flex flex-col sm:flex-row gap-2 justify-center lg:justify-start"
            >
              <PrimaryButton onClick={() => setDemoOpen(true)} size="md">
                Book Demo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </PrimaryButton>
              <GhostButton href="#product" size="md">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2.5v9l7-4.5-7-4.5z" fill="currentColor"/>
                </svg>
                Watch Product Tour
              </GhostButton>
            </motion.div>

            {/* Value props row — no inflated stats, just honest benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 justify-center lg:justify-start text-muted-foreground"
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-600"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[11px] sm:text-sm">Offline-first</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-600"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[11px] sm:text-sm">HIPAA-ready</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-600"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[11px] sm:text-sm">2-day onboarding</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT — floating product collage */}
          <div className="lg:col-span-7 relative overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] sm:h-[540px] lg:h-[600px] perspective-2000"
            >
              {/* Back layer — Executive Dashboard, large, slightly tilted */}
              <FloatingCard
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] max-w-[520px] z-10"
                rotate="rotateY(-8deg) rotateX(2deg) rotateZ(-1.5deg)"
                depth={0}
                delay={0.5}
                shadow="shadow-float"
              >
                <img
                  src="/pos-media/clinic/03-dashboard.png"
                  alt="Executive Dashboard showing revenue, appointments, department load and KPIs"
                  className="w-full h-auto block rounded-t-xl"
                  loading="eager"
                />
                <div className="px-3 py-2 bg-[#f5f7f7] border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">Executive Dashboard</span>
                  <span className="text-[10px] text-emerald-700 font-mono">● Live</span>
                </div>
              </FloatingCard>

              {/* Mid layer left — Patient list */}
              <FloatingCard
                className="absolute left-0 sm:left-2 top-8 w-[42%] sm:w-[40%] max-w-[280px] z-20"
                rotate="rotateY(12deg) rotateX(4deg) rotateZ(-4deg)"
                depth={1}
                delay={0.7}
                shadow="shadow-float"
              >
                <img
                  src="/pos-media/clinic/04-patients-list.png"
                  alt="Patient Management list with UHID, search and tags"
                  className="w-full h-auto block rounded-t-xl"
                />
                <div className="px-3 py-1.5 bg-[#f5f7f7] border-t border-black/[0.06]">
                  <span className="text-[10px] font-mono text-muted-foreground">Patients</span>
                </div>
              </FloatingCard>

              {/* Mid layer right — Consultation cockpit */}
              <FloatingCard
                className="absolute right-0 sm:right-0 top-4 w-[44%] sm:w-[42%] max-w-[300px] z-30"
                rotate="rotateY(-12deg) rotateX(4deg) rotateZ(3deg)"
                depth={2}
                delay={0.85}
                shadow="shadow-float"
              >
                <img
                  src="/pos-media/clinic/07-consultation-cockpit.png"
                  alt="Doctor Consultation workspace with SOAP notes, vitals and prescription"
                  className="w-full h-auto block rounded-t-xl"
                />
                <div className="px-3 py-1.5 bg-[#f5f7f7] border-t border-black/[0.06]">
                  <span className="text-[10px] font-mono text-muted-foreground">Consultation</span>
                </div>
              </FloatingCard>

              {/* Front floating card — Today Live Queue, smaller, glassy */}
              <FloatingCard
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[52%] sm:w-[48%] z-40"
                rotate="rotateY(0deg) rotateX(8deg) rotateZ(-1deg)"
                depth={3}
                delay={1}
                shadow="shadow-float"
              >
                <img
                  src="/pos-media/clinic/02-today-live-queue.png"
                  alt="Today live queue with patient tokens and doctor workload"
                  className="w-full h-auto block rounded-t-xl"
                />
                <div className="px-3 py-1.5 bg-[#f5f7f7] border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">Today Queue</span>
                  <span className="text-[10px] font-mono text-emerald-700">14 in queue</span>
                </div>
              </FloatingCard>

              {/* Floating KPI pill — top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-2 left-2 sm:-left-6 z-50"
              >
                <div className="glass rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-premium animate-float-slow">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3 3 6-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Today Revenue</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">₹ 1,84,250</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating KPI pill — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-12 right-2 sm:-right-6 z-50"
              >
                <div className="glass rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-premium animate-float-medium">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="5" stroke="#0d9488" strokeWidth="1.5"/>
                        <path d="M7 4v3l2 2" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Avg Wait</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">8 min</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating mini status pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.55 }}
                className="absolute top-1/3 right-2 sm:-right-10 z-50"
              >
                <div className="glass rounded-full px-3 py-1.5 shadow-premium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] sm:text-[11px] font-medium text-foreground">Offline-ready sync</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}

function FloatingCard({
  children,
  className,
  rotate,
  depth = 0,
  delay = 0,
  shadow = "shadow-premium",
}: {
  children: React.ReactNode;
  className: string;
  rotate: string;
  depth?: number;
  delay?: number;
  shadow?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: "preserve-3d", transform: rotate }}
      className={`${className} ${shadow} rounded-xl bg-white border border-black/[0.05] overflow-hidden`}
    >
      {children}
    </motion.div>
  );
}
