"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Bell, Armchair, ListOrdered } from "lucide-react";
import { SectionHeading, Reveal, staggerContainer, staggerItem, BrowserFrame } from "./primitives";

const highlights = [
  {
    icon: Clock,
    title: "Estimated waiting",
    desc: "Smart wait-time estimates based on live table turnover.",
  },
  {
    icon: Bell,
    title: "Automatic notifications",
    desc: "Guests get an SMS the moment their table is ready.",
  },
  {
    icon: Armchair,
    title: "Table assignment",
    desc: "Assign a free table to the next guest in one tap.",
  },
  {
    icon: ListOrdered,
    title: "Queue management",
    desc: "Reorder, prioritise and manage walk-ins gracefully.",
  },
];

export function WaitlistShowcase() {
  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Screenshot */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,oklch(0.68_0.19_42/0.1),transparent_70%)] blur-2xl" />
              <BrowserFrame className="shadow-screenshot" url="app.mise.pos">
                <img
                  src="/pos-media/restaurant/06-waitlist.png"
                  alt="Waitlist management"
                  className="block w-full"
                />
              </BrowserFrame>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              label="Waitlist"
              labelIcon={<Clock className="h-3.5 w-3.5" />}
              title="Turn the wait into a great first impression."
              description="A queue done well is hospitality. Mise keeps guests informed and seated faster — so the wait feels like part of the experience, not a frustration."
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3"
            >
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    variants={staggerItem}
                    className="group flex flex-col rounded-xl border border-black/[0.06] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-premium sm:p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-espresso transition-colors group-hover:text-brand-orange sm:h-9 sm:w-9">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={1.9} />
                    </div>
                    <h3 className="mt-2 text-[12.5px] font-semibold tracking-tight text-brand-espresso sm:text-[14px]">
                      {h.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-[12px] sm:leading-relaxed">
                      {h.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
