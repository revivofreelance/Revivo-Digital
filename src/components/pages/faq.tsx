"use client";

import { useState } from "react";
import {
  Mail,
  Calendar,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  SectionHeading,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { FAQS } from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const [activeCat, setActiveCat] = useState(0);
  const active = FAQS[activeCat];

  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers before <span className="text-gradient-purple">you ask.</span>
          </>
        }
        subtitle="Everything you might want to know before reaching out. Can't find your question? Just send me a message — I reply to every one personally within 24 hours."
      />

      {/* ---------------- Category nav ---------------- */}
      <section className="px-4 pb-3 sm:px-6 sm:pb-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
              {FAQS.map((cat, i) => {
                const Icon = cat.icon;
                const isActive = i === activeCat;
                return (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCat(i)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[11px] font-semibold transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm",
                      isActive
                        ? "bg-navy text-white shadow-soft"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-grape/30 hover:text-navy"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 transition-colors sm:h-4 sm:w-4",
                        isActive ? "text-cta" : "text-grape/70"
                      )}
                    />
                    {cat.category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ accordions ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5 sm:mb-8 sm:gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-purple-gradient text-white shadow-glow-purple sm:h-11 sm:w-11 sm:rounded-xl">
              <active.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-grape sm:text-xs">
                {active.category}
              </div>
              <div className="text-[11px] text-slate-500 sm:text-sm">
                {active.questions.length} questions
              </div>
            </div>
          </div>

          <Stagger key={activeCat} className="space-y-2 sm:space-y-3" stagger={0.06}>
            {active.questions.map((item, i) => (
              <StaggerItem key={item.q}>
                <Reveal delay={i * 0.05} y={14}>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value={`q-${i}`}
                      className={cn(
                        "rounded-lg border border-slate-200 bg-white px-3 transition-colors sm:rounded-2xl sm:px-5",
                        "data-[state=open]:border-grape/30 data-[state=open]:shadow-soft",
                        "border-b"
                      )}
                    >
                      <AccordionTrigger className="py-3 text-left font-display text-xs font-bold text-navy hover:no-underline sm:py-5 sm:text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 text-[11px] leading-relaxed text-slate-600 sm:pb-5 sm:text-sm sm:leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Reveal>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Still have questions band ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            center
            eyebrow="Still curious"
            title={
              <>
                Didn&apos;t find <span className="text-gradient-purple">your answer?</span>
              </>
            }
            subtitle="Two quick ways to reach me. I read every message personally — no bots, no autoresponders, no waiting in a queue."
          />
          <div className="mx-auto mt-3 grid max-w-3xl gap-2.5 sm:mt-4 sm:gap-6 sm:grid-cols-2">
            <Reveal>
              <button
                onClick={() => onNavigate("contact")}
                className="group flex h-full w-full flex-col items-start gap-2.5 rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:gap-4 sm:rounded-3xl sm:p-7"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-purple-gradient text-white shadow-glow-purple sm:h-12 sm:w-12 sm:rounded-xl">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-navy sm:text-lg">
                    Send a message
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-600 sm:mt-1.5 sm:text-sm">
                    Fill out the contact form and I&apos;ll reply within 24 hours — usually much faster during business hours.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-grape transition-transform group-hover:translate-x-0.5 sm:gap-1.5 sm:text-sm">
                  Open contact form <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
            <Reveal delay={0.08}>
              <button
                onClick={onCTA}
                className="group flex h-full w-full flex-col items-start gap-2.5 rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:gap-4 sm:rounded-3xl sm:p-7"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cta-gradient text-white shadow-glow-cta sm:h-12 sm:w-12 sm:rounded-xl">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-navy sm:text-lg">
                    Book a call
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-600 sm:mt-1.5 sm:text-sm">
                    Grab a free 30-minute slot. We&apos;ll talk through your project, your goals, and what&apos;s possible — zero pressure.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-grape transition-transform group-hover:translate-x-0.5 sm:gap-1.5 sm:text-sm">
                  See available times <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </button>
            </Reveal>
          </div>

          {/* Trust strip */}
          <Reveal delay={0.12}>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500 sm:mt-10 sm:gap-x-6 sm:gap-y-2 sm:text-xs">
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Personal replies, always
              </span>
              <span className="inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-grape sm:h-3.5 sm:w-3.5" /> No bots or autoresponders
              </span>
              <span className="inline-flex items-center gap-1">
                <ArrowRight className="h-3 w-3 text-cta sm:h-3.5 sm:w-3.5" /> Reply within 24 hours
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
