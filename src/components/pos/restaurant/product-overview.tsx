"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  ChefHat,
  Boxes,
  Receipt,
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";
import { SectionHeading, staggerContainer, staggerItem } from "./primitives";

const steps = [
  { icon: ClipboardList, title: "Ordering", desc: "Take orders in seconds with categories, quick picks and live search." },
  { icon: ChefHat, title: "Kitchen", desc: "Route tickets to the kitchen display with timers and status flow." },
  { icon: Boxes, title: "Inventory", desc: "Track stock, recipes and cost margins across every outlet." },
  { icon: Receipt, title: "Billing", desc: "Split, discount and settle bills in under a second." },
  { icon: BarChart3, title: "Analytics", desc: "Live revenue, profit and growth analytics on one dashboard." },
  { icon: Users, title: "Customers", desc: "Build a rich guest database with visits, spend and preferences." },
  { icon: TrendingUp, title: "Growth", desc: "Turn first-time guests into regulars with waitlists and loyalty." },
];

export function ProductOverview() {
  return (
    <section id="platform" className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="One platform"
          title={
            <>
              One platform.
              <br className="hidden sm:block" /> Every restaurant operation.
            </>
          }
          description="From the first order to the final report — every workflow lives in one beautifully connected system. No more tab-switching. No more disconnected tools."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 sm:mt-8"
        >
          {/* Desktop: connected horizontal flow (no images) */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[7%] right-[7%] top-[34px] h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
            <div className="grid grid-cols-7 gap-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.title} variants={staggerItem} className="group flex flex-col items-center">
                    <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-black/[0.06] bg-white shadow-premium transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-warm">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(0.68_0.19_42/0.08)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <Icon className="h-6 w-6 text-brand-espresso transition-colors group-hover:text-brand-orange" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-espresso text-[10px] font-semibold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-brand-espresso">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-center text-[12.5px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile / tablet: vertical connected timeline (unique, compact, no cards) */}
          <div className="lg:hidden">
            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative mx-auto max-w-md"
            >
              {/* vertical connector line */}
              <span className="pointer-events-none absolute left-[19px] top-[22px] bottom-[22px] w-px bg-gradient-to-b from-brand-orange/40 via-brand-orange/15 to-transparent" />
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.li
                    key={s.title}
                    variants={staggerItem}
                    className="group relative flex items-start gap-3.5 pb-4 last:pb-0"
                  >
                    {/* node */}
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.06] bg-white text-brand-espresso shadow-sm transition-all duration-300 group-hover:border-brand-orange/30 group-hover:text-brand-orange">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-espresso text-[9px] font-semibold text-white">
                        {i + 1}
                      </span>
                    </span>
                    {/* text */}
                    <div className="min-w-0 flex-1 pt-1">
                      <h3 className="text-[14px] font-semibold tracking-tight text-brand-espresso">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
