"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileBarChart, Armchair, Users, ArrowUpRight } from "lucide-react";
import { SectionHeading, staggerContainer, staggerItem, BrowserFrame } from "./primitives";

const screens = [
  {
    icon: FileBarChart,
    shot: "/pos-media/restaurant/04-reports.png",
    title: "Reports",
    desc: "Deep, exportable business reports — sales, taxes, staff performance and more, ready when you need them.",
  },
  {
    icon: Armchair,
    shot: "/pos-media/restaurant/05-tables-floor.png",
    title: "Floor view",
    desc: "A live, visual floor plan showing every table's status at a glance — seated, billing, vacant, reserved.",
  },
  {
    icon: Users,
    shot: "/pos-media/restaurant/08-customers.png",
    title: "Customers",
    desc: "A rich guest database with visit history, lifetime spend, preferences and notes — your regulars, remembered.",
  },
];

export function MoreScreens() {
  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="And there's more"
          title="Every screen, designed with the same care."
          description="The same craft you see in ordering and the kitchen extends to every corner of the platform — reports, your floor and your customers."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {screens.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative overflow-hidden border-b border-black/[0.05]">
                  <div className="absolute -inset-4 -z-0 bg-[radial-gradient(circle_at_center,oklch(0.68_0.19_42/0.08),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <BrowserFrame url="app.mise.pos" className="rounded-none border-0 shadow-none">
                    <img
                      src={s.shot}
                      alt={s.title}
                      className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </BrowserFrame>
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-espresso transition-colors group-hover:text-brand-orange sm:h-9 sm:w-9">
                        <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={1.9} />
                      </span>
                      <h3 className="text-[14px] font-semibold tracking-tight text-brand-espresso sm:text-[15px]">
                        {s.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[13px]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
