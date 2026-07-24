"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FolderTree, GitBranch, ToggleLeft, IndianRupee, Coins, TrendingUp } from "lucide-react";
import { SectionHeading, Reveal, staggerContainer, staggerItem, BrowserFrame } from "./primitives";

const highlights = [
  { icon: FolderTree, title: "Categories", desc: "Organise dishes into nested categories." },
  { icon: GitBranch, title: "Variants", desc: "Sizes, add-ons and modifiers per dish." },
  { icon: ToggleLeft, title: "Availability", desc: "86 an item instantly across all outlets." },
  { icon: IndianRupee, title: "Pricing", desc: "Per-outlet pricing with tax rules." },
  { icon: Coins, title: "Cost tracking", desc: "Ingredient-level cost on every dish." },
  { icon: TrendingUp, title: "Margins", desc: "Live margin shown next to every price." },
];

export function MenuShowcase() {
  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Screenshot (first on phone, right on desktop) */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,oklch(0.58_0.13_55/0.1),transparent_70%)] blur-2xl" />
              <BrowserFrame className="shadow-screenshot" url="app.mise.pos">
                <img
                  src="/pos-media/restaurant/07-menu.png"
                  alt="Menu management"
                  className="block w-full"
                />
              </BrowserFrame>
              {/* margin chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 -right-3 hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-2 shadow-premium backdrop-blur-xl sm:flex"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.95_0.04_150)] to-[oklch(0.9_0.06_150)] text-[oklch(0.5_0.14_150)]">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Avg. dish margin
                  </div>
                  <div className="text-[14px] font-semibold text-brand-espresso">68.4%</div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy (second on phone, left on desktop) */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              label="Menu management"
              labelIcon={<FolderTree className="h-3.5 w-3.5" />}
              title="Your menu, managed like a product catalog."
              description="Treat every dish like a product with variants, cost and margin. Update once and push to every outlet, printer and QR menu instantly."
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
