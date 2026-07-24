"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  DoorOpen,
  ClipboardList,
  ChefHat,
  Soup,
  Utensils,
  CreditCard,
  FileBarChart,
  Users,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, staggerContainer, staggerItem } from "./primitives";

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: DoorOpen, title: "Walk-in", desc: "Guest is greeted, seated at a table or added to the smart waitlist." },
  { icon: ClipboardList, title: "Order", desc: "Staff builds the order with categories, modifiers and live search." },
  { icon: ChefHat, title: "Kitchen", desc: "Ticket routes instantly to the kitchen display with a prep timer." },
  { icon: Soup, title: "Prepare", desc: "Cooks prepare with clear status cues and live countdown timers." },
  { icon: Utensils, title: "Serve", desc: "Marked ready, plated and served to the guest's table." },
  { icon: CreditCard, title: "Payment", desc: "Split, discount and settle the bill in under a second." },
  { icon: FileBarChart, title: "Reports", desc: "Sales, tax and profit sync to live reports in real time." },
  { icon: Users, title: "Guest log", desc: "Visit, spend and preferences saved to the customer database." },
  { icon: Repeat, title: "Return", desc: "On the next visit the guest is recognised and delighted again." },
];

export function RestaurantWorkflow() {
  return (
    <section className="relative overflow-hidden py-7 sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[oklch(0.975_0.005_70)]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="The full journey"
          title="One connected journey, from walk-in to next visit."
          description="Mise turns a series of disconnected tasks into one seamless loop. Every step feeds the next — so a guest's second visit is even better than their first."
        />

        {/* Desktop: horizontal connected flow that fits the viewport width */}
        <div className="relative mt-6 hidden lg:block">
          {/* connecting line */}
          <div className="absolute left-[5%] right-[5%] top-[26px] h-px bg-gradient-to-r from-transparent via-brand-orange/25 to-transparent" />
          <div className="grid grid-cols-9 gap-2">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-black/[0.06] bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-warm">
                    <Icon className="h-5 w-5 text-brand-espresso transition-colors group-hover:text-brand-orange" strokeWidth={1.9} />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-espresso text-[9px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[13px] font-semibold tracking-tight text-brand-espresso">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/tablet: vertical connected timeline (unique, compact, no cards) */}
        <div className="mt-6 lg:hidden">
          <motion.ol
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-60px" }}
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
                  className="group relative flex items-start gap-3.5 pb-3.5 last:pb-0"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.06] bg-white text-brand-espresso shadow-sm transition-all duration-300 group-hover:border-brand-orange/30 group-hover:text-brand-orange">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-espresso text-[9px] font-semibold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="text-[13.5px] font-semibold tracking-tight text-brand-espresso">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
