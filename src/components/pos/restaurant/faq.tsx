"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./primitives";

const faqs = [
  {
    q: "How long does it take to set up Mise?",
    a: "Most restaurants are live within a day. Import your menu, connect your printers and payment terminal, and your staff can start taking orders. Our onboarding team handles the heavy lifting with you.",
  },
  {
    q: "Do I need a constant internet connection?",
    a: "No. Mise is offline-first. You can keep taking orders, sending tickets to the kitchen and settling bills during a network outage. Everything syncs to the cloud automatically the moment you reconnect.",
  },
  {
    q: "Can I manage multiple outlets from one account?",
    a: "Yes. Mise is built multi-outlet from the ground up. Manage menus, pricing, inventory, staff and reports across every location from a single dashboard, with per-outlet permissions and reporting.",
  },
  {
    q: "What hardware do I need?",
    a: "Mise runs on any modern tablet, laptop or POS terminal. We support major thermal printers, kitchen displays, barcode scanners and card terminals — bring your own, or buy a ready-made kit from us.",
  },
  {
    q: "Which payment methods are supported?",
    a: "Cards, UPI, mobile wallets, cash, split payments and combinations of all of them. We integrate with leading payment aggregators so settlement is instant and reconciled automatically.",
  },
  {
    q: "How does pricing work?",
    a: "Simple, transparent per-outlet subscription with no per-transaction surprises. Every feature is included — no add-on fees for the tools you actually need. Book a demo and we'll tailor a quote.",
  },
  {
    q: "Can I migrate my existing menu and data?",
    a: "Absolutely. Import your menu via CSV or let our team migrate it for you. We also help move your customer database and historical sales so you start with context, not a blank slate.",
  },
  {
    q: "Is my business data secure?",
    a: "Yes. Data is encrypted in transit and at rest, access is controlled by granular roles, and we follow SOC 2-aligned practices. You can export or delete your data at any time — it's yours.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          label="FAQ"
          title="Questions, answered."
          description="Everything you need to know before you book a demo. Still curious? Our team is one message away."
        />

        <div className="mt-6">
          <Accordion type="single" collapsible className="flex flex-col gap-2.5 sm:gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-black/[0.06] bg-white px-4 shadow-sm data-[state=open]:shadow-premium sm:rounded-2xl sm:px-5"
              >
                <AccordionTrigger className="py-4 text-left text-[13.5px] font-semibold tracking-tight text-brand-espresso hover:no-underline sm:py-5 sm:text-[15px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[13px] leading-relaxed text-muted-foreground sm:pb-5 sm:text-[14px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
