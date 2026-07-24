"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Coffee,
  Cloud,
  Wine,
  Cookie,
  ChefHat,
  Store,
  Building2,
} from "lucide-react";

const venues = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Coffee, label: "Cafés" },
  { icon: Cloud, label: "Cloud Kitchens" },
  { icon: Wine, label: "Bars" },
  { icon: Cookie, label: "Bakeries" },
  { icon: ChefHat, label: "Fine Dining" },
  { icon: Store, label: "QSR" },
  { icon: Building2, label: "Food Courts" },
];

export function TrustedBy() {
  const row = [...venues, ...venues];
  return (
    <section className="relative border-y border-black/[0.05] bg-[oklch(0.975_0.005_70)] py-6">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Built for every kind of hospitality business
        </p>

        <div className="relative mt-4 overflow-hidden mask-radial-faded">
          <div className="flex w-max animate-marquee items-center gap-3">
            {row.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white/80 px-5 py-2.5 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-brand-orange" />
                  <span className="text-[14px] font-semibold tracking-tight text-brand-espresso/80">
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
