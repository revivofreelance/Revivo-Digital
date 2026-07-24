"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading, staggerContainer, staggerItem } from "./primitives";

const testimonials = [
  {
    quote:
      "We switched from a legacy POS and cut our order-to-kitchen time in half. The kitchen display alone paid for the move in a month.",
    name: "Aarav Mehta",
    role: "Owner, Saffron & Smoke",
    type: "Fine Dining",
    accent: "from-[oklch(0.68_0.19_42)] to-[oklch(0.52_0.18_38)]",
  },
  {
    quote:
      "My baristas learned it in a single shift. The order screen is so fast we get through the morning rush without a queue.",
    name: "Leah Okafor",
    role: "Founder, Daybreak Coffee",
    type: "Café",
    accent: "from-[oklch(0.58_0.13_55)] to-[oklch(0.45_0.1_50)]",
  },
  {
    quote:
      "Running three cloud kitchens from one dashboard changed everything. Margins are visible per dish — I finally know what to push.",
    name: "Rohan Iyer",
    role: "Operator, Three Bowl Kitchen",
    type: "Cloud Kitchen",
    accent: "from-[oklch(0.55_0.16_55)] to-[oklch(0.4_0.12_50)]",
  },
  {
    quote:
      "The waitlist is genuinely hospitality-forward. Guests get a text, we seat faster, and nobody feels forgotten.",
    name: "Sofia Marchetti",
    role: "Manager, Nonna's Table",
    type: "Restaurant",
    accent: "from-[oklch(0.6_0.12_60)] to-[oklch(0.45_0.1_55)]",
  },
  {
    quote:
      "Offline support saved us during a network outage. We kept taking orders and everything synced the moment we reconnected.",
    name: "Daniel Park",
    role: "Owner, Park's Diner",
    type: "QSR",
    accent: "from-[oklch(0.5_0.14_50)] to-[oklch(0.38_0.12_45)]",
  },
  {
    quote:
      "It just looks beautiful. Customers comment on it. That sounds small until you realise how much trust a polished screen builds.",
    name: "Priya Nair",
    role: "Co-founder, Crust & Co.",
    type: "Bakery",
    accent: "from-[oklch(0.62_0.15_45)] to-[oklch(0.48_0.13_40)]",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Loved by operators"
          labelIcon={<Star className="h-3.5 w-3.5" />}
          title="The people who run real restaurants."
          description="From single-location cafés to multi-outlet cloud kitchens — operators choose Mise because it just works, beautifully."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium sm:p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.19_42/0.08),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <Quote className="h-5 w-5 text-brand-orange/30 sm:h-6 sm:w-6" />
              <blockquote className="relative mt-2 flex-1 text-[13px] leading-relaxed text-brand-espresso/85 sm:mt-3 sm:text-[14.5px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2.5 border-t border-black/[0.05] pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-[13px] font-semibold text-white sm:h-10 sm:w-10 sm:text-[14px]`}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold tracking-tight text-brand-espresso sm:text-[13.5px]">
                    {t.name}
                  </div>
                  <div className="text-[11.5px] text-muted-foreground sm:text-[12px]">{t.role}</div>
                </div>
                <span className="rounded-full bg-[oklch(0.96_0.006_70)] px-2 py-0.5 text-[10.5px] font-medium text-brand-espresso/60 sm:px-2.5 sm:py-1 sm:text-[10.5px]">
                  {t.type}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
