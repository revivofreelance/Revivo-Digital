"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  LayoutGrid,
  SplitSquareHorizontal,
  ChefHat,
  BookOpen,
  ListOrdered,
  Boxes,
  FileBarChart,
  Users,
  CalendarCheck,
  Percent,
  CreditCard,
  Receipt,
  Building2,
  ShieldCheck,
  WifiOff,
  CloudUpload,
  Printer,
  QrCode,
  Calculator,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, staggerContainer, staggerItem } from "./primitives";

type Feature = { icon: LucideIcon; title: string; desc: string };

const features: Feature[] = [
  { icon: Zap, title: "Fast Billing", desc: "Settle any check in under a second." },
  { icon: LayoutGrid, title: "Table Management", desc: "Visual floor plan with live status." },
  { icon: SplitSquareHorizontal, title: "Split Payments", desc: "Split by item, seat or share." },
  { icon: ChefHat, title: "Kitchen Display", desc: "Route tickets with timers & status." },
  { icon: BookOpen, title: "Menu Management", desc: "Variants, pricing & availability." },
  { icon: ListOrdered, title: "Waitlist", desc: "Smart queue with wait estimates." },
  { icon: Boxes, title: "Inventory", desc: "Track stock across every outlet." },
  { icon: FileBarChart, title: "Reports", desc: "Deep, exportable business reports." },
  { icon: Users, title: "Customer Database", desc: "Visits, spend & preferences per guest." },
  { icon: CalendarCheck, title: "Reservations", desc: "Bookings, deposits & reminders." },
  { icon: Percent, title: "Discount Engine", desc: "Rules-based promos & combos." },
  { icon: CreditCard, title: "Multiple Payments", desc: "Cards, UPI, cash, wallet & more." },
  { icon: Receipt, title: "Tax Handling", desc: "GST, VAT & item-level taxes automated." },
  { icon: Building2, title: "Multi Outlet", desc: "One account, many locations." },
  { icon: ShieldCheck, title: "Role Management", desc: "Granular roles & permissions." },
  { icon: WifiOff, title: "Offline Support", desc: "Keep selling when the network drops." },
  { icon: CloudUpload, title: "Cloud Sync", desc: "Auto-sync the moment you reconnect." },
  { icon: Printer, title: "Printer Integration", desc: "KOT, bill & kitchen printers supported." },
  { icon: QrCode, title: "QR Ordering", desc: "Scan, order & pay from the table." },
  { icon: Calculator, title: "Recipe Costing", desc: "Know your margin on every dish." },
  { icon: TrendingUp, title: "Sales Analytics", desc: "Trends, forecasts & top sellers." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Everything included"
          title="Twenty-one capabilities. Zero add-ons."
          description="Most POS platforms charge extra for the features you actually need. Mise ships with every essential built in — beautifully integrated, not bolted on."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-xl border border-black/[0.06] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.1] hover:shadow-premium sm:rounded-2xl sm:p-5"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.19_42/0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-espresso transition-colors duration-300 group-hover:text-brand-orange sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={1.9} />
                </div>
                <h3 className="relative mt-3 text-[12.5px] font-semibold tracking-tight text-brand-espresso sm:mt-4 sm:text-[14.5px]">
                  {f.title}
                </h3>
                <p className="relative mt-0.5 text-[11px] leading-snug text-muted-foreground sm:mt-1 sm:text-[12.5px] sm:leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
