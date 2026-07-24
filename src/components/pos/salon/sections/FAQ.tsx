"use client";

import { ArrowRight } from "lucide-react";
import { FAQS } from "../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          subtitle="Everything you need to know about Aura POS before you switch. Can't find your question? Our team is one message away."
        />

        <Reveal direction="up" delay={0.1} duration={0.7} className="mt-4 sm:mt-6">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-xl border border-[#e6eaf1] bg-white px-0 shadow-premium last:border-b sm:rounded-2xl"
                >
                  <AccordionTrigger className="rounded-xl px-4 py-3.5 text-left text-[13px] font-medium text-[#141c2f] hover:bg-[#f8fafc] hover:no-underline sm:rounded-2xl sm:px-6 sm:py-5 sm:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3.5 text-xs leading-relaxed text-[#6f7c95] sm:px-6 sm:pb-5 sm:text-[15px]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions CTA */}
            <div className="mt-4 flex flex-col items-center justify-between gap-3 rounded-xl border border-[#e6eaf1] bg-[#f8fafc] px-4 py-4 sm:mt-5 sm:flex-row sm:rounded-2xl sm:px-8 sm:py-5">
              <div className="text-center sm:text-left">
                <div className="text-[13px] font-semibold text-[#141c2f] sm:text-sm">
                  Still have questions?
                </div>
                <div className="mt-0.5 text-xs text-[#6f7c95] sm:mt-1 sm:text-sm">
                  Talk to our team — we usually reply within an hour.
                </div>
              </div>
              <a
                href="#cta"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#141c2f] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#364258] hover:shadow-float sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
              >
                Talk to us
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
