"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Search, MousePointerClick, CreditCard, Armchair, ListChecks } from "lucide-react";
import { SectionHeading, Reveal, staggerContainer, staggerItem, BrowserFrame } from "./primitives";

const callouts = [
  {
    icon: LayoutGrid,
    title: "Category navigation",
    desc: "Switch between food, drinks and desserts with a single tap.",
  },
  {
    icon: Search,
    title: "Live dish search",
    desc: "Find any item instantly — even mid-rush.",
  },
  {
    icon: MousePointerClick,
    title: "Quick picks",
    desc: "One-tap access to your most-ordered dishes.",
  },
  {
    icon: ListChecks,
    title: "Order panel",
    desc: "Review, edit modifiers and send to kitchen in seconds.",
  },
  {
    icon: Armchair,
    title: "Table selection",
    desc: "Assign orders to tables with a live floor view.",
  },
  {
    icon: CreditCard,
    title: "Payment flow",
    desc: "Split, discount and settle without leaving the screen.",
  },
];

export function NewOrderShowcase() {
  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="left"
          label="New order"
          labelIcon={<MousePointerClick className="h-3.5 w-3.5" />}
          title={
            <>
              An order screen your staff
              <br className="hidden sm:block" /> will actually enjoy using.
            </>
          }
          description="Designed for speed during the rush. Every element is within a thumb's reach, so a new server is productive on day one — no training required."
          className="max-w-2xl"
        />

        <div className="mt-6 grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* Screenshot */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,oklch(0.68_0.19_42/0.1),transparent_70%)] blur-2xl" />
              <BrowserFrame className="shadow-screenshot" url="app.mise.pos">
                <img
                  src="/pos-media/restaurant/01-new-order.png"
                  alt="New order screen"
                  className="block w-full"
                />
              </BrowserFrame>
              {/* subtle floating accent chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-2 shadow-premium backdrop-blur-xl sm:flex"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.04_55)] to-[oklch(0.92_0.06_45)] text-brand-orange">
                  <ListChecks className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Avg. order time
                  </div>
                  <div className="text-[14px] font-semibold text-brand-espresso">38 seconds</div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Callouts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2"
          >
            {callouts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  className="group relative flex flex-col rounded-xl border border-black/[0.06] bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-premium sm:p-4"
                >
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-espresso transition-colors group-hover:text-brand-orange sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.9} />
                  </div>
                  <div className="mt-2 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-brand-orange sm:text-[10px]">0{i + 1}</span>
                      <h3 className="text-[12px] font-semibold tracking-tight text-brand-espresso sm:text-[14.5px]">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-[12.5px] sm:leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
