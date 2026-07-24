"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton, GhostButton } from "./primitives";
import { LeadModal } from "@/components/site/lead-modal";

export function FinalCTA() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section id="cta" className="relative py-6 lg:py-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0F2A26] via-[#0a1f1c] to-[#0F2A26] overflow-hidden noise-overlay">
          {/* Background product collage — blurred */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="absolute top-0 left-0 w-2/3 h-full">
              <img
                src="/pos-media/clinic/03-dashboard.png"
                alt=""
                className="w-full h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F2A26]" />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src="/pos-media/clinic/07-consultation-cockpit.png"
                alt=""
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F2A26]" />
            </div>
          </div>

          {/* Aurora glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-emerald-500/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-teal-400/20 blur-[120px] rounded-full" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }} />

          {/* Content */}
          <div className="relative px-4 py-7 sm:px-12 sm:py-14 lg:px-20 lg:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-pulse-ring" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
                </span>
                Available for new clinics
              </div>

              <h2 className="text-display text-white text-balance">
                Modernize your clinic with{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  one intelligent platform.
                </span>
              </h2>

              <p className="mt-3 text-[13px] sm:text-base lg:text-lg text-white/70 leading-relaxed text-pretty max-w-2xl mx-auto">
                Everything your clinic needs — from appointments to billing — beautifully connected in one secure system.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <PrimaryButton onClick={() => setDemoOpen(true)} size="lg" className="!bg-white !text-emerald-900 hover:!bg-emerald-50">
                  Book Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </PrimaryButton>
                <GhostButton href="#" size="lg" className="!bg-white/10 !border-white/20 !text-white hover:!bg-white/15 hover:!border-white/30">
                  Request Pricing
                </GhostButton>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-white/60 text-[11px] sm:text-sm">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="sm:w-3.5 sm:h-3.5"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  2-day onboarding
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="sm:w-3.5 sm:h-3.5"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Free data migration
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="sm:w-3.5 sm:h-3.5"><path d="M2 7l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Cancel anytime
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}
