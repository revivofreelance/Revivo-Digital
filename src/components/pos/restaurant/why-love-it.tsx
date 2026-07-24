"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { X, Check, Sparkles } from "lucide-react";
import { SectionHeading, Reveal } from "./primitives";

const traditional = [
  "Clunky, outdated interface",
  "Slow, crash-prone software",
  "On-premise only — no remote access",
  "Painful to set up and learn",
  "Disjointed add-ons for every feature",
  "End-of-day reporting only",
  "Hard to scale across outlets",
];

const ours = [
  "Clean, modern, intuitive design",
  "Sub-second billing, rock-solid",
  "Cloud-first — manage from anywhere",
  "Set up in minutes, learn in an hour",
  "Twenty-one tools, one platform",
  "Real-time analytics, always live",
  "Scale to unlimited outlets instantly",
];

export function WhyLoveIt() {
  return (
    <section id="why" className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Why restaurants love it"
          labelIcon={<Sparkles className="h-3.5 w-3.5" />}
          title="The end of clunky, crash-prone POS software."
          description="Restaurant owners have tolerated legacy POS for decades. Mise is what happens when modern product design meets real hospitality operations."
        />

        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-3 sm:gap-5 md:grid-cols-2">
          {/* Traditional */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-[oklch(0.965_0.004_70)] p-3.5 sm:rounded-3xl sm:p-7">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-muted-foreground shadow-sm sm:h-10 sm:w-10 sm:rounded-xl">
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                    Legacy
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-tight text-brand-espresso/70 sm:text-[18px]">
                    Traditional POS
                  </h3>
                </div>
              </div>
              <ul className="mt-3 space-y-2 sm:mt-6 sm:space-y-3.5">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[12.5px] text-muted-foreground sm:gap-3 sm:text-[14px]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white text-muted-foreground/60 shadow-sm sm:h-5 sm:w-5">
                      <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Ours */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-orange/20 bg-white p-3.5 shadow-premium-lg sm:rounded-3xl sm:p-7">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.19_42/0.14),transparent_70%)] blur-xl" />
              <div className="relative flex items-center gap-2.5 sm:gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.68_0.19_42)] to-[oklch(0.52_0.18_38)] text-white shadow-warm sm:h-10 sm:w-10 sm:rounded-xl">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange sm:text-[11px]">
                    Mise
                  </div>
                  <h3 className="text-[14px] font-semibold tracking-tight text-brand-espresso sm:text-[18px]">
                    The modern way
                  </h3>
                </div>
              </div>
              <ul className="relative mt-3 space-y-2 sm:mt-6 sm:space-y-3.5">
                {ours.map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                    className="flex items-start gap-2 text-[12.5px] font-medium text-brand-espresso sm:gap-3 sm:text-[14px]"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[oklch(0.95_0.05_55)] text-brand-orange sm:h-5 sm:w-5">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
