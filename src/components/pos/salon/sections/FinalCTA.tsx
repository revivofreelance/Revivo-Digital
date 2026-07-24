"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SHOTS } from "../data";
import { Reveal } from "../ui/Reveal";
import { LeadModal } from "@/components/site/lead-modal";

export function FinalCTA() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#141c2f] py-5 sm:py-14"
    >
      {/* Background product screenshots — decorative, very low opacity */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        {/* Dashboard — large, top right */}
        { }
        <img
          src={SHOTS.dashboard}
          alt=""
          aria-hidden="true"
          className="absolute -right-32 -top-24 w-[640px] max-w-none opacity-[0.08] blur-2xl"
        />
        {/* POS — bottom left */}
        { }
        <img
          src={SHOTS.pos}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-[560px] max-w-none opacity-[0.07] blur-2xl"
        />
        {/* Calendar — mid right floating */}
        { }
        <img
          src={SHOTS.calendar}
          alt=""
          aria-hidden="true"
          className="absolute right-10 top-1/2 hidden w-[360px] max-w-none -translate-y-1/2 opacity-[0.06] blur-2xl lg:block"
        />
        {/* Reports — bottom right */}
        { }
        <img
          src={SHOTS.reports}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-24 right-1/4 hidden w-[320px] max-w-none opacity-[0.05] blur-2xl lg:block"
        />

        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(54,66,88,0.55),transparent_70%)] blur-3xl" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(74,157,127,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,146,74,0.14),transparent_70%)] blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Navy gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141c2f]/60 via-[#141c2f]/40 to-[#141c2f]/80" />
      </div>

      {/* Top glow border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal direction="fade" duration={0.5}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1.5 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#c9924a]" strokeWidth={1.75} />
            Start today
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.06} duration={0.7}>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white text-balance sm:mt-6 sm:text-4xl md:text-5xl md:leading-[1.08]">
            Ready to Transform Your Salon?
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.13} duration={0.7}>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#9aa6bd] text-pretty sm:mt-6 sm:text-lg">
            Run appointments, clients, checkout, inventory, memberships,
            payroll, and reporting from one beautifully designed platform.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2} duration={0.7}>
          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
            <motion.button
              type="button"
              onClick={() => setDemoOpen(true)}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#141c2f] shadow-float transition-all hover:bg-[#f8fafc] hover:shadow-glow sm:w-auto sm:px-7 sm:py-3.5"
            >
              Book Demo
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </motion.button>
          </div>
        </Reveal>

        <Reveal direction="fade" delay={0.3} duration={0.6}>
          <p className="mt-6 text-sm text-[#9aa6bd] sm:mt-8">
            Guided onboarding included · Cancel anytime
          </p>
        </Reveal>
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}
