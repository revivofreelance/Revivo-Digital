"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Check } from "lucide-react";
import { GradientButton } from "./primitives";
import { LeadModal } from "@/components/site/lead-modal";

const SHOTS = [
  "/pos-media/restaurant/02-dashboard.png",
  "/pos-media/restaurant/01-new-order.png",
  "/pos-media/restaurant/03-kitchen-display.png",
  "/pos-media/restaurant/06-waitlist.png",
  "/pos-media/restaurant/07-menu.png",
];

export function FinalCTA() {
  const [demoOpen, setDemoOpen] = React.useState(false);
  return (
    <section id="cta" className="relative px-3 py-6 sm:px-5 sm:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/[0.08] bg-[oklch(0.2_0.012_45)] px-5 py-10 shadow-premium-lg sm:px-10 sm:py-14">
        {/* Blurred screenshots background */}
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.16]">
          <div className="absolute left-[-4%] top-[-10%] h-[55%] w-[40%] rotate-[-8deg] overflow-hidden rounded-2xl blur-md">
            <img src={SHOTS[0]} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-[-6%] top-[-6%] h-[50%] w-[38%] rotate-[7deg] overflow-hidden rounded-2xl blur-md">
            <img src={SHOTS[1]} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[-12%] left-[8%] h-[50%] w-[34%] rotate-[5deg] overflow-hidden rounded-2xl blur-md">
            <img src={SHOTS[2]} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[-10%] right-[10%] h-[48%] w-[32%] rotate-[-6deg] overflow-hidden rounded-2xl blur-md">
            <img src={SHOTS[3]} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* warm glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.68_0.19_42/0.32),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute inset-0 -z-0 bg-grid opacity-[0.04]" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.8_0.15_60)]" />
            Get started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-[1.65rem] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl md:text-[3.4rem] md:leading-[1.04]"
          >
            Ready to modernize
            <br /> your restaurant?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-lg text-pretty text-[14px] leading-relaxed text-white/70 sm:text-[16px]"
          >
            Book a personalised demo and see your menu, floor and kitchen running on
            Mise in under 30 minutes. No commitment, no pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <GradientButton onClick={() => setDemoOpen(true)} className="px-5 py-3 text-[13.5px] sm:px-7 sm:py-3.5 sm:text-[15px]">
              <Calendar className="h-4 w-4" />
              Book demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11.5px] text-white/55 sm:text-[13px]"
          >
            {["No credit card required", "Live in under a day", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[oklch(0.75_0.15_60)]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}
