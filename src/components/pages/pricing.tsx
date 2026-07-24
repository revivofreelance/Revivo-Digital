"use client";

import { useState } from "react";
import {
  ArrowRight, Check, Crown, Rocket, ShieldCheck, Sparkles, Star, X, Zap,
} from "lucide-react";
import {
  Reveal, Stagger, StaggerItem, SectionHeading, PremiumButton, AuroraBackground,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import {
  PLANS, PRICING_COMPARISON,
} from "@/lib/site-data";
import type { PageKey, Plan } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

/* ----------------------------- Helpers ----------------------------- */

const PLAN_ICONS: Record<string, typeof Zap> = {
  Starter: Zap,
  Professional: Star,
  "Business Growth": Rocket,
  Enterprise: Crown,
};

function isHeadingLine(feature: string) {
  return /^Everything in/i.test(feature.trim());
}

function ComparisonCell({ value, popular }: { value: boolean | string; popular?: boolean }) {
  if (value === true) {
    return (
      <span className={cn(
        "inline-flex h-5 w-5 items-center justify-center rounded-full sm:h-7 sm:w-7",
        popular ? "bg-grape/15" : "bg-emerald-100",
      )}>
        <Check className={cn("h-3 w-3 sm:h-4 sm:w-4", popular ? "text-grape" : "text-emerald-600")} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 sm:h-7 sm:w-7">
        <X className="h-2.5 w-2.5 text-slate-400 sm:h-3.5 sm:w-3.5" />
      </span>
    );
  }
  return (
    <span className={cn(
      "text-xs font-semibold sm:text-sm",
      popular ? "text-grape" : "text-navy",
    )}>
      {value}
    </span>
  );
}

/* ----------------------------- Pricing card ----------------------------- */

function PricingCard({
  plan, onCTA, onNavigate,
}: {
  plan: Plan;
  onCTA: () => void;
  onNavigate: (p: PageKey) => void;
}) {
  const Icon = PLAN_ICONS[plan.name] ?? Sparkles;
  const popular = plan.popular === true;
  const isEnterprise = plan.name === "Enterprise";

  const ctaVariant: "cta" | "outline" = popular ? "cta" : "outline";
  const handleCta = isEnterprise ? () => onNavigate("contact") : onCTA;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl p-2.5 transition-all duration-300 sm:rounded-3xl sm:p-7",
        popular
          ? "bg-gradient-to-br from-navy via-royal to-grape text-white shadow-glow-purple ring-2 ring-grape lg:scale-105"
          : "border border-slate-200 bg-white hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift",
      )}
    >
      {/* Decorative blob */}
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 rounded-full blur-2xl transition-opacity sm:block",
          popular ? "bg-white/10" : "bg-grape/5",
        )}
      />

      {popular && (
        <div className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-cta-gradient px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow-cta sm:mb-3 sm:px-3 sm:py-1 sm:text-[10px]">
          <Star className="h-2.5 w-2.5 fill-white text-white sm:h-3 sm:w-3" />
          Most Popular
        </div>
      )}

      <div className="relative">
        {/* Icon + name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center rounded-lg shadow-soft sm:h-11 sm:w-11 sm:rounded-xl",
              popular
                ? "bg-white/15 text-white ring-1 ring-white/25"
                : "bg-gradient-to-br from-navy to-royal text-white",
            )}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <h3 className={cn("font-display text-xs font-bold sm:text-xl", popular ? "text-white" : "text-navy")}>
              {plan.name}
            </h3>
            <p className={cn("text-[11px] sm:text-xs", popular ? "text-white/70" : "text-slate-500")}>
              {plan.tagline}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-1.5 flex items-baseline gap-1 sm:gap-2">
          <span className={cn(
            "font-display text-lg font-extrabold tracking-tight sm:text-4xl",
            popular ? "text-white" : "text-navy",
          )}>
            {plan.price}
          </span>
          <span className={cn("text-[11px] sm:text-sm", popular ? "text-white/70" : "text-slate-500")}>
            {plan.period}
          </span>
        </div>

        {/* Description */}
        <p className={cn(
          "mt-1.5 text-[11px] leading-snug sm:mt-3 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none",
          popular ? "text-white/80" : "text-slate-600",
        )}>
          {plan.description}
        </p>

        {/* Divider */}
        <div className={cn(
          "my-2 h-px w-full sm:my-6",
          popular ? "bg-white/15" : "bg-slate-200",
        )} />

        {/* Features */}
        <ul className="space-y-1 sm:space-y-3">
          {plan.features.map((feature, i) => {
            if (isHeadingLine(feature)) {
              return (
                <li
                  key={i}
                  className={cn(
                    "pt-0.5 text-[11px] font-bold uppercase tracking-wider sm:pt-1 sm:text-xs",
                    popular ? "text-cta" : "text-grape",
                  )}
                >
                  {feature}
                </li>
              );
            }
            return (
              <li key={i} className="flex items-start gap-1 sm:gap-2.5">
                <span
                  className={cn(
                    "mt-0.5 grid h-3 w-3 shrink-0 place-items-center rounded-full sm:h-4 sm:w-4",
                    popular ? "bg-white/15" : "bg-emerald-100",
                  )}
                >
                  <Check className={cn("h-1.5 w-1.5 sm:h-2.5 sm:w-2.5", popular ? "text-white" : "text-emerald-600")} />
                </span>
                <span className={cn(
                  "text-[11px] leading-snug sm:text-sm",
                  popular ? "text-white/90" : "text-slate-700",
                )}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Timeline */}
        <div className={cn(
          "mt-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold sm:mt-6 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs",
          popular ? "bg-white/10 text-white/80" : "bg-slate-100 text-slate-600",
        )}>
          <Sparkles className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
          {plan.timeline}
        </div>
      </div>

      {/* CTA */}
      <div className="relative mt-3 pt-0.5 sm:mt-7 sm:pt-1">
        <PremiumButton
          variant={ctaVariant}
          size="sm"
          onClick={handleCta}
          icon={<ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
          className={cn(
            "w-full",
            popular ? "" : "border-slate-300 text-navy hover:border-grape hover:bg-white",
          )}
        >
          {plan.cta}
        </PremiumButton>
      </div>
    </div>
  );
}

/* ----------------------------- Pricing cards section ----------------------------- */

function PricingCards({ onCTA, onNavigate }: { onCTA: () => void; onNavigate: (p: PageKey) => void; }) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Stagger
          className="grid grid-cols-2 gap-1.5 sm:gap-5 lg:grid-cols-4 lg:items-start"
          stagger={0.08}
        >
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <PricingCard plan={plan} onCTA={onCTA} onNavigate={onNavigate} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-4 text-center text-[11px] text-slate-500 sm:mt-8 sm:text-sm">
            All plans include free hosting &amp; SSL for the first year. Prices in USD.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Essentials band ----------------------------- */

const ESSENTIALS = [
  {
    icon: Sparkles,
    title: "Custom design (no templates)",
    description: "Every pixel is designed for your brand and your customers. No theme tweaks, no lookalikes.",
  },
  {
    icon: Zap,
    title: "Mobile-first responsive",
    description: "Built for the 70% of your visitors on phones first, then elegantly scaled up to desktop.",
  },
  {
    icon: Rocket,
    title: "On-page SEO foundation",
    description: "Technical SEO, meta tags, schema markup, and clean semantic HTML on every single page.",
  },
  {
    icon: ArrowRight,
    title: "Analytics setup",
    description: "GA4, conversion tracking, and goal funnels configured so you can measure what matters.",
  },
  {
    icon: Check,
    title: "Training & documentation",
    description: "A 1-hour walkthrough and a written guide so you can update content confidently on your own.",
  },
  {
    icon: ShieldCheck,
    title: "Source files & ownership",
    description: "You own 100% of the design files, code, and accounts. No vendor lock-in, ever.",
  },
];

function EssentialsBand() {
  return (
    <section className="relative bg-mist px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Always included"
          title={<>Every project includes <span className="text-gradient-purple">these essentials.</span></>}
          subtitle="No matter which tier you choose, these six things come standard. They're the foundation of a website that actually works for your business."
        />

        <Stagger className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-5 lg:grid-cols-3" stagger={0.07}>
          {ESSENTIALS.map((e) => (
            <StaggerItem key={e.title}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6">
                <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full bg-grape/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-grape/10 sm:block" />
                <div className="relative">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape/10 to-royal/10 text-grape ring-1 ring-grape/15 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 sm:rounded-xl">
                    <e.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="mt-2 font-display text-xs font-bold leading-tight text-navy sm:mt-4 sm:text-base">{e.title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">{e.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ----------------------------- Comparison table (desktop) ----------------------------- */

const COMPARISON_COLUMNS = [
  { key: "starter", label: "Starter", price: "$600" },
  { key: "pro", label: "Professional", price: "$1,500", popular: true },
  { key: "business", label: "Business Growth", price: "$3,000" },
  { key: "enterprise", label: "Enterprise", price: "Custom" },
] as const;

function ComparisonTableDesktop() {
  return (
    <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft md:block">
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="border-b border-slate-200 hover:bg-transparent">
              <TableHead className="sticky left-0 z-10 h-16 bg-white/80 px-5 backdrop-blur">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Compare features</span>
              </TableHead>
              {COMPARISON_COLUMNS.map((col) => (
                <TableHead
                  key={col.key}
                  className={cn(
                    "h-16 px-4 text-center align-bottom",
                    col.popular && "bg-grape/5 border-x border-grape/15",
                  )}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <span className={cn("font-display text-sm font-bold", col.popular ? "text-grape" : "text-navy")}>
                      {col.label}
                    </span>
                    <span className="text-xs text-slate-500">{col.price}</span>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {PRICING_COMPARISON.map((row, idx) => (
              <TableRow
                key={row.feature}
                className={cn(
                  "border-b border-slate-100 hover:bg-transparent",
                  idx % 2 === 1 ? "bg-slate-50/50" : "bg-white",
                )}
              >
                <TableCell className="sticky left-0 z-10 px-5 py-3.5 text-sm font-medium text-navy">
                  {row.feature}
                </TableCell>
                {COMPARISON_COLUMNS.map((col) => {
                  const value = row[col.key as "starter" | "pro" | "business" | "enterprise"];
                  return (
                    <TableCell
                      key={col.key}
                      className={cn(
                        "px-4 py-3.5 text-center align-middle",
                        col.popular && "bg-grape/5 border-x border-grape/15",
                      )}
                    >
                      <div className="flex justify-center">
                        <ComparisonCell value={value} popular={col.popular} />
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

/* ----------------------------- Comparison (mobile stacked) ----------------------------- */

function ComparisonMobile() {
  return (
    <div className="space-y-2.5 md:hidden">
      {COMPARISON_COLUMNS.map((col) => {
        const popular = col.popular === true;
        return (
          <div
            key={col.key}
            className={cn(
              "overflow-hidden rounded-xl border bg-white p-3 sm:rounded-2xl sm:p-5",
              popular ? "border-grape/30 shadow-soft ring-1 ring-grape/20" : "border-slate-200",
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h3 className={cn("font-display text-sm font-bold sm:text-lg", popular ? "text-grape" : "text-navy")}>
                    {col.label}
                  </h3>
                  {popular && (
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-grape/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-grape sm:px-2 sm:text-[10px]">
                      <Star className="h-2 w-2 fill-grape text-grape sm:h-2.5 sm:w-2.5" /> Popular
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 sm:text-xs">{col.price}</p>
              </div>
            </div>

            <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
              {PRICING_COMPARISON.map((row) => {
                const value = row[col.key as "starter" | "pro" | "business" | "enterprise"];
                return (
                  <li key={row.feature} className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1.5 last:border-b-0 last:pb-0 sm:gap-3 sm:pb-2.5">
                    <span className="text-[11px] text-slate-600 sm:text-sm">{row.feature}</span>
                    <span className="shrink-0">
                      <ComparisonCell value={value} popular={popular} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function ComparisonSection() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Side by side"
          title={<>Compare <span className="text-gradient-purple">every feature.</span></>}
          subtitle="A detailed breakdown of what's included in each tier. When in doubt, the Professional plan is the right choice for 80% of local businesses."
        />

        <Reveal delay={0.1}>
          <div className="mt-4 sm:mt-12">
            <ComparisonTableDesktop />
            <ComparisonMobile />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 text-center text-[11px] text-slate-500 sm:mt-6 sm:text-xs">
            Need something that doesn&apos;t fit neatly into a tier? <button onClick={() => {}} className="font-semibold text-grape underline-offset-2 hover:underline max-sm:py-2">Let&apos;s build a custom plan.</button>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */

const PRICING_FAQS = [
  {
    q: "What's included in the price?",
    a: "Everything needed to launch: custom design, responsive development, conversion copywriting (on Professional and above), on-page SEO, hosting and SSL for the first year, Google Analytics setup, mobile optimization, 1–3 rounds of revisions (depending on tier), post-launch support, and a 1-hour training walkthrough. There are no hidden fees — the price you see is the price you pay.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Standard terms are 50% upfront and 50% on launch. For projects over $4,000 (Business Growth and Enterprise), I offer a 3-milestone plan: 40% kickoff, 30% design approval, 30% launch. For larger engagements, I'm happy to structure monthly payments — just ask.",
  },
  {
    q: "Are there any ongoing costs?",
    a: "After the first year, hosting renews at $240/year ($20/month) and includes SSL, CDN, daily backups, and security monitoring. Domain renewal is typically $15/year. Maintenance plans are optional and start at $99/month. There are no mandatory recurring fees — you own everything outright.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every plan includes free post-launch support: 30 days on Starter, 60 days on Professional, and 90 days on Business Growth. Enterprise gets ongoing priority support. After that window, small tweaks are billed at $100/hour, or you can opt into a monthly care plan that bundles proactive maintenance, updates, and a set number of revision hours at a better rate.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, during the design phase. If you're not happy with the design direction in the first 30 days, you get a full refund — no questions asked. Once development begins and code is being written, refunds aren't available because the work has already been done. I scope carefully upfront to make sure this never becomes an issue.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Many clients start with Starter or Professional and upgrade as their business grows. You only pay the difference between your current plan and the new one — no penalties, no restart fees. I'll also credit any unused revision rounds and support time toward the upgraded plan.",
  },
];

function FAQSection() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          center
          eyebrow="Pricing questions"
          title={<>Answers before <span className="text-gradient-purple">you ask.</span></>}
          subtitle="The six pricing questions I hear most often on consultation calls. If yours isn't here, just ask me directly — I answer every email myself."
        />
        <Reveal delay={0.1}>
          <div className="mt-4 sm:mt-10">
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {PRICING_FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-lg border border-slate-200 bg-white px-3 transition-colors sm:rounded-2xl sm:px-5 data-[state=open]:border-grape/30 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="py-3 text-left font-display text-xs font-bold text-navy hover:no-underline sm:py-5 sm:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 text-[11px] leading-relaxed text-slate-600 sm:pb-5 sm:text-sm sm:leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Guarantee band ----------------------------- */

function GuaranteeBand({ onCTA }: { onCTA: () => void }) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 px-3 py-4 shadow-lift sm:rounded-[2rem] sm:px-12 sm:py-14">
            {/* Decorative grid + blob */}
            <div className="absolute inset-0 bg-grid-dark opacity-20" />
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full bg-white/10 blur-3xl sm:block" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 hidden h-64 w-64 rounded-full bg-teal-300/20 blur-3xl sm:block" />

            <div className="relative flex flex-col items-start gap-3 sm:gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-2.5 sm:gap-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/15 text-white ring-1 ring-white/25 backdrop-blur sm:h-14 sm:w-14 sm:rounded-2xl">
                  <ShieldCheck className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur sm:px-3 sm:py-1 sm:text-[10px]">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Risk-free start
                  </div>
                  <h2 className="mt-1.5 font-display text-sm font-bold tracking-tight text-white sm:mt-3 sm:text-3xl">
                    30-day design-phase guarantee
                  </h2>
                  <p className="mt-1 text-[11px] leading-snug text-emerald-50 sm:mt-2 sm:text-base sm:leading-relaxed">
                    If you&apos;re not happy with the design direction in the first 30 days, you get a full refund. No questions asked.
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-end sm:self-auto">
                <PremiumButton
                  variant="outline"
                  size="sm"
                  onClick={onCTA}
                  icon={<ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                  className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-emerald-700 hover:border-white"
                >
                  Start risk-free
                </PremiumButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Page ----------------------------- */

export function PricingPage({
  onNavigate, onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title={<>Transparent pricing. <span className="text-gradient-purple">No surprises.</span></>}
        subtitle="Fixed-price quotes on every project. You know exactly what you're paying and what you're getting before we start. Pick the tier that fits, or book a free consultation and I'll recommend the right one."
      />

      <PricingCards onCTA={onCTA} onNavigate={onNavigate} />
      <EssentialsBand />
      <ComparisonSection />
      <FAQSection />
      <GuaranteeBand onCTA={onCTA} />
    </PageShell>
  );
}
