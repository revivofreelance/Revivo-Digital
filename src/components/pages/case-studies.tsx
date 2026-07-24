"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  AnimatedCounter,
  AuroraBackground,
  SectionHeading,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import { CASE_STUDIES } from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ---------------- Types ---------------- */
type CaseStudyMetric = {
  label: string;
  value: string;
  before: string;
};
type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  accent: string;
  image: string;
  summary: string;
  metrics: CaseStudyMetric[];
  approach: string;
  duration: string;
  deliverables: string;
};

/* ---------------- Local data ---------------- */
const AGGREGATE_STATS = [
  { value: 28, prefix: "", suffix: "", label: "Projects delivered", decimals: 0 },
  { value: 185, prefix: "", suffix: "%", label: "Avg lead growth", decimals: 0 },
  { value: 1.4, prefix: "", suffix: "s", label: "Avg load time", decimals: 1 },
  { value: 88, prefix: "", suffix: "%", label: "Client retention", decimals: 0 },
];

const WHAT_YOU_GET = [
  {
    icon: TrendingUp,
    title: "A website that pays for itself",
    desc: "Not a sunk cost — an investment that returns measurable revenue within the first 90 days of launch.",
  },
  {
    icon: Sparkles,
    title: "Measurable business outcomes",
    desc: "Leads, bookings, calls, revenue. Every project is tied to a number you actually care about.",
  },
  {
    icon: Check,
    title: "A partner, not a vendor",
    desc: "I think like a marketer and business owner, not just a developer. You get strategy, not just pixels.",
  },
];

/* ---------------- Browser mock (visual side of each case study) ---------------- */
function BrowserMock({
  accent,
  client,
}: {
  accent: string;
  client: string;
}) {
  const domain = client.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
  return (
    <div className="absolute inset-x-6 bottom-6 top-24 overflow-hidden rounded-xl border border-white/30 bg-white shadow-lift">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 hidden flex-1 truncate rounded-md bg-white px-2 py-0.5 text-[10px] text-slate-400 sm:block">
          {domain}
        </div>
      </div>
      <div className="p-4">
        <div className={cn("mb-3 h-2.5 w-20 rounded-full bg-gradient-to-r", accent)} />
        <div className="mb-1.5 h-2 w-3/4 rounded bg-slate-200" />
        <div className="mb-3 h-2 w-1/2 rounded bg-slate-200" />
        <div className="grid grid-cols-3 gap-2">
          <div className={cn("h-12 rounded-md bg-gradient-to-br", accent)} />
          <div className="h-12 rounded-md bg-slate-100" />
          <div className="h-12 rounded-md bg-slate-100" />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="h-5 w-16 rounded-full bg-slate-200" />
          <div className={cn("h-5 w-12 rounded-full bg-gradient-to-r", accent)} />
        </div>
      </div>
    </div>
  );
}

/* ---------------- Single case study card ---------------- */
function CaseStudyBlock({
  cs,
  index,
  onView,
}: {
  cs: CaseStudy;
  index: number;
  onView: () => void;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <button
        onClick={onView}
        className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-3xl"
      >
        {/* Image header */}
        <div className={cn("relative aspect-[16/9] overflow-hidden", cs.accent)}>
          <img
            loading="lazy"
            decoding="async"
            src={cs.image}
            alt={`${cs.client} website preview`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur sm:text-xs">
              <Sparkles className="h-3 w-3" /> {cs.industry}
            </div>
            <div className="font-display text-xl font-extrabold text-white sm:text-3xl">
              {cs.client}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6">
          <h3 className="font-display text-base font-bold tracking-tight text-navy sm:text-xl">
            {cs.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
            {cs.summary}
          </p>

          {/* Metrics */}
          <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-50 p-2 text-center sm:rounded-xl sm:p-3">
                <div className={cn("font-display text-sm font-extrabold bg-gradient-to-br bg-clip-text text-transparent sm:text-xl", cs.accent)}>
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11px] font-medium text-slate-500 sm:text-[11px]">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> {cs.duration}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-grape transition-transform group-hover:translate-x-0.5 sm:text-sm">
              View details <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

/* ---------------- Case study detail dialog ---------------- */
function CaseStudyDialog({
  cs,
  onOpenChange,
  onCTA,
}: {
  cs: CaseStudy | null;
  onOpenChange: (open: boolean) => void;
  onCTA: () => void;
}) {
  return (
    <Dialog open={cs !== null} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[88vh] gap-0 overflow-hidden rounded-2xl border-0 p-0 sm:max-w-3xl sm:rounded-3xl"
      >
        {cs && (
          <div className="max-h-[88vh] overflow-y-auto premium-scroll">
            {/* Banner */}
            <div
              className={cn(
                "relative overflow-hidden bg-gradient-to-br p-4 sm:p-10",
                cs.accent
              )}
            >
              <div className="absolute inset-0 bg-grid-dark opacity-20" />
              <div className="relative">
                <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
                  {cs.industry}
                </div>
                <div className="mt-2 font-display text-base font-extrabold text-white sm:mt-3 sm:text-2xl sm:text-3xl">
                  {cs.client}
                </div>
                <h2 className="mt-1 max-w-2xl text-balance font-display text-xs font-bold text-white/95 sm:mt-2 sm:text-xl sm:text-2xl">
                  {cs.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 sm:p-8">
              <DialogTitle className="sr-only">{cs.title}</DialogTitle>
              <DialogDescription className="sr-only">{cs.summary}</DialogDescription>

              {/* Overview row */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-4 lg:grid-cols-3">
                {[
                  { label: "Industry", value: cs.industry },
                  { label: "Duration", value: cs.duration },
                  { label: "Approach", value: cs.approach },
                ].map((o) => (
                  <div key={o.label} className="rounded-lg bg-mist p-2.5 sm:rounded-xl sm:p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                      {o.label}
                    </div>
                    <div className="mt-0.5 text-[11px] font-semibold text-navy sm:mt-1 sm:text-sm">
                      {o.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="mt-3 sm:mt-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                  Deliverables
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-2">
                  {cs.deliverables.split(",").map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 sm:px-3 sm:py-1 sm:text-xs"
                    >
                      <Check className="h-2.5 w-2.5 text-emerald-600 sm:h-3 sm:w-3" /> {d.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="mt-4 sm:mt-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                  Overview
                </div>
                <p className="mt-1.5 text-pretty text-[11px] leading-relaxed text-slate-700 sm:mt-2 sm:text-sm sm:text-base">
                  {cs.summary}
                </p>
              </div>

              {/* Metrics table */}
              <div className="mt-4 sm:mt-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                  Results
                </div>
                <div className="mt-1.5 overflow-hidden rounded-lg border border-slate-200 sm:mt-2 sm:rounded-2xl">
                  <div className="grid grid-cols-3 bg-mist text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                    <div className="px-2 py-1.5 sm:px-4 sm:py-2.5">Metric</div>
                    <div className="px-2 py-1.5 sm:px-4 sm:py-2.5">Before</div>
                    <div className="px-2 py-1.5 sm:px-4 sm:py-2.5">Current</div>
                  </div>
                  {cs.metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={cn(
                        "grid grid-cols-3 border-t border-slate-100 text-[11px] sm:text-sm",
                        i % 2 === 1 && "bg-slate-50/60"
                      )}
                    >
                      <div className="px-2 py-2 font-semibold text-navy sm:px-4 sm:py-3">
                        {m.label}
                      </div>
                      <div className="px-2 py-2 text-slate-500 sm:px-4 sm:py-3">
                        {m.before ?? "—"}
                      </div>
                      <div className="px-2 py-2 font-bold text-gradient-purple sm:px-4 sm:py-3">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br from-navy to-grape p-4 text-center sm:mt-8 sm:gap-3 sm:rounded-2xl sm:p-6 sm:flex-row sm:text-left">
                <Sparkles className="h-5 w-5 shrink-0 text-cta sm:h-7 sm:w-7" />
                <div className="flex-1">
                  <div className="font-display text-xs font-bold text-white sm:text-base">
                    Want results like these?
                  </div>
                  <div className="text-[11px] text-white/70 sm:text-sm">
                    Let&apos;s build your case study next.
                  </div>
                </div>
                <PremiumButton
                  variant="cta"
                  size="sm"
                  onClick={() => {
                    onOpenChange(false);
                    onCTA();
                  }}
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Get results
                </PremiumButton>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- Page ---------------- */
export function CaseStudiesPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <PageShell>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Measurable business outcomes.{" "}
            <span className="text-gradient-purple">
              Not just pretty screenshots.
            </span>
          </>
        }
        subtitle="Long-form success stories showing exactly how local businesses transformed their online presence — and their revenue — with a premium website."
      />

      {/* ---------------- Aggregate results band ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy px-4 py-8 shadow-lift sm:rounded-[2rem] sm:px-12 sm:py-16">
              <AuroraBackground />
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                {AGGREGATE_STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-extrabold text-white sm:text-4xl sm:text-5xl">
                      <AnimatedCounter
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        decimals={s.decimals}
                      />
                    </div>
                    <div className="mt-1.5 text-[11px] font-semibold text-white/70 sm:mt-2 sm:text-sm">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Case studies grid ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="Success stories"
            title={
              <>
                Real businesses. <span className="text-gradient-purple">Real numbers.</span>
              </>
            }
            subtitle="Four long-form case studies showing the strategy, the build, and the measurable business outcomes."
          />
          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyBlock
                key={cs.slug}
                cs={cs as CaseStudy}
                index={i}
                onView={() => setActive(cs as CaseStudy)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- What you'll get band ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="The promise"
            title={
              <>
                When you work with me,{" "}
                <span className="text-gradient-purple">you get...</span>
              </>
            }
          />
          <Stagger className="grid grid-cols-2 gap-1.5 sm:gap-6 lg:grid-cols-3" stagger={0.08}>
            {WHAT_YOU_GET.map((w) => (
              <StaggerItem key={w.title}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-7">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-grape to-royal text-white shadow-glow-purple sm:h-12 sm:w-12 sm:rounded-xl">
                    <w.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-2.5 font-display text-xs font-bold text-navy sm:mt-4 sm:text-lg">
                    {w.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                    {w.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CaseStudyDialog
        cs={active}
        onOpenChange={(o) => !o && setActive(null)}
        onCTA={onCTA}
      />

      <CTASection
        onCTA={onCTA}
        cta="Get results like these"
        onSecondary={() => onNavigate("services")}
        secondary="Browse services"
        title="Your case study could be next."
        subtitle="Tell me about your business and I'll show you what's possible — with real numbers, not vague promises."
      />
    </PageShell>
  );
}
