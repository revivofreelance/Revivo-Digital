"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Sparkles,
  Zap,
  TrendingUp,
  Eye,
  AlertCircle,
  Lightbulb,
  Package,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  AnimatedCounter,
  PremiumButton,
  AuroraBackground,
  Eyebrow,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { INDUSTRIES } from "@/lib/site-data";
import type { PageKey, Industry } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Aggregate stats for the navy band                                   */
/* ------------------------------------------------------------------ */
const AGGREGATE_STATS: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
}[] = [
  { value: 16, suffix: "", label: "Industries served" },
  { value: 28, suffix: "", label: "Projects shipped" },
  { value: 4.2, suffix: "/5", decimals: 1, label: "Client rating" },
  { value: 88, suffix: "%", label: "Retention rate" },
];

/* ------------------------------------------------------------------ */
/* Main page                                                           */
/* ------------------------------------------------------------------ */
export function IndustriesPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <PageShell>
      <PageHero
        eyebrow="Who I build for"
        title={
          <>
            Solutions tailored to{" "}
            <span className="text-gradient-purple">your industry.</span>
          </>
        }
        subtitle="Every industry has different customers, different problems, and different keywords. Click yours to see the specific features, strategies, and results I deliver for businesses like yours."
      />

      {/* Industries grid */}
      <IndustriesGrid onSelect={setSelected} />

      {/* "Not sure if I serve your industry?" comparison band */}
      <NotSureBand onNavigate={onNavigate} />

      {/* Stats strip */}
      <StatsStrip />

      {/* Closing CTA */}
      <CTASection
        onCTA={onCTA}
        cta="Build for my industry"
        onSecondary={() => onNavigate("services")}
        secondary="Browse all services"
      />

      {/* Industry detail dialog */}
      <IndustryDialog
        industry={selected}
        onClose={() => setSelected(null)}
        onCTA={onCTA}
      />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Industries grid                                                     */
/* ------------------------------------------------------------------ */
function IndustriesGrid({ onSelect }: { onSelect: (i: Industry) => void }) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Grid */}
        <Stagger
          className="grid grid-cols-2 gap-1.5 sm:gap-5 lg:grid-cols-3"
          stagger={0.05}
        >
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard
                industry={industry}
                onOpen={() => onSelect(industry)}
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Helper note */}
        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-slate-500 sm:mt-10 sm:gap-2 sm:text-xs">
            <Sparkles className="h-3 w-3 text-grape sm:h-3.5 sm:w-3.5" />
            <span>
              Don&apos;t see your industry? I&apos;ve built for many more —
              just ask.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Industry card                                                       */
/* ------------------------------------------------------------------ */
function IndustryCard({
  industry,
  onOpen,
}: {
  industry: Industry;
  onOpen: () => void;
}) {
  const Icon = industry.icon;
  return (
    <button
      onClick={onOpen}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 text-left sm:rounded-2xl sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift"
    >
      {/* Hover glow blob */}
      <div
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30 sm:block",
          industry.accent
        )}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={cn(
            "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 sm:h-14 sm:w-14 sm:rounded-2xl",
            industry.accent
          )}
        >
          <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:px-2.5 sm:py-1 sm:text-[10px]">
          <TrendingUp className="h-2.5 w-2.5 text-grape sm:h-3 sm:w-3" />
          {industry.results[0]?.value ?? "+%"}
        </span>
      </div>

      <h3 className="relative mt-2 font-display text-sm font-bold leading-tight text-navy sm:mt-5 sm:text-xl">
        {industry.title}
      </h3>
      <p className="relative mt-1 flex-1 text-[11px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
        {industry.tagline}
      </p>

      {/* Feature chips preview */}
      <div className="relative mt-2 hidden flex-wrap gap-1.5 sm:flex">
        {industry.features.slice(0, 3).map((f) => (
          <span
            key={f}
            className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
          >
            {f}
          </span>
        ))}
        {industry.features.length > 3 && (
          <span className="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold text-grape">
            +{industry.features.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="relative mt-2 flex items-center justify-between border-t border-slate-100 pt-2 sm:mt-5 sm:pt-4">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-grape sm:text-sm">
          View details
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
        </span>
        <span className="hidden items-center gap-1 text-[11px] font-medium text-slate-400 sm:inline-flex">
          <Zap className="h-3 w-3 text-grape/60" />
          {industry.results.length} key metrics
        </span>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Industry detail dialog                                              */
/* ------------------------------------------------------------------ */
/* Parse customer journey into steps (split by → arrow)                */
/* ------------------------------------------------------------------ */
function parseJourney(journey: string): string[] {
  return journey
    .split("→")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/* ------------------------------------------------------------------ */
/* Timeline results — what happens after launch (per industry)         */
/* ------------------------------------------------------------------ */
const TIMELINE_RESULTS: Record<string, { week1: string; month1: string; month3: string }> = {
  dentists: {
    week1: "Site live, Google indexed, first new patient bookings come in",
    month1: "+40% appointment requests, reviews start climbing",
    month3: "Page 1 for 'dentist near me', chairs consistently full",
  },
  restaurants: {
    week1: "Online reservations start coming in on day one",
    month1: "Double the nightly bookings, fewer phone calls",
    month3: "Top of Google Maps, takeaway orders up 50%+",
  },
  gyms: {
    week1: "Free-trial bookings start flowing from the site",
    month1: "Trial-to-member conversion up 30%+",
    month3: "Cost per acquisition cut in half, members rolling in",
  },
  salons: {
    week1: "24/7 online booking goes live, first after-hours bookings",
    month1: "Front-desk calls cut in half, rebooking rate climbing",
    month3: "Chairs booked 2+ weeks out, gift card sales rolling",
  },
  hospitals: {
    week1: "Doctor directory live, appointment requests start",
    month1: "Front-desk calls down 30%, patients self-serving",
    month3: "Patient satisfaction up, calls cut in half",
  },
  clinics: {
    week1: "Treatment pages ranking, consultation requests start",
    month1: "Inquiries doubled, reviews surfacing on Google",
    month3: "Top 3 for key treatments, calendar consistently full",
  },
  "law-firms": {
    week1: "Case results page live, consultation forms coming in",
    month1: "2× more consultation requests, qualified leads up",
    month3: "Top 3 on Google for practice areas, higher-value cases",
  },
  construction: {
    week1: "Project portfolio live, inquiry form starts working",
    month1: "More project inquiries, bigger bids coming in",
    month3: "Winning 25%+ more bids, higher project values",
  },
  "real-estate": {
    week1: "Neighborhood guides live, first leads captured",
    month1: "Email list growing, buyer inquiries increasing",
    month3: "73% of captured leads converting to clients",
  },
  electricians: {
    week1: "Click-to-call live, emergency calls start coming",
    month1: "Top 3 on Google Maps, calls up 100%+",
    month3: "Fully booked, turning away low-value jobs",
  },
  plumbers: {
    week1: "Google Business Profile optimized, calls start flooding",
    month1: "3× more emergency calls, top of map pack",
    month3: "Dominating 'plumber near me', steady call volume",
  },
  hvac: {
    week1: "Maintenance plan page live, first signups",
    month1: "Recurring revenue starts, tune-ups scheduled",
    month3: "$5k+/month recurring, pre-season pipeline full",
  },
  retail: {
    week1: "Products online, 'reserve in store' working",
    month1: "Foot traffic up 20%+, email list growing",
    month3: "38% more walk-ins, online-to-store sales rolling",
  },
  education: {
    week1: "Success stories live, counseling requests start",
    month1: "Admissions inquiries doubled, parents engaged",
    month3: "2× more enrollments, batches filling faster",
  },
  cleaning: {
    week1: "Instant quote calculator live, first bookings",
    month1: "30% of one-time jobs converting to recurring",
    month3: "$10k+/month recurring revenue, steady schedule",
  },
  "pet-clinics": {
    week1: "Warm team page live, new client bookings start",
    month1: "New client bookings doubled, reviews climbing",
    month3: "Fully booked 2 weeks out, pet parents referring friends",
  },
};

function getTimelineResult(slug: string, period: "week1" | "month1" | "month3"): string {
  const results = TIMELINE_RESULTS[slug];
  if (!results) return "Results start compounding";
  return results[period];
}

/* ------------------------------------------------------------------ */
/* INDUSTRY FLASH CARD DIALOG                                          */
/* ------------------------------------------------------------------ */
function IndustryDialog({
  industry,
  onClose,
  onCTA,
}: {
  industry: Industry | null;
  onClose: () => void;
  onCTA: () => void;
}) {
  const Icon = industry?.icon ?? Sparkles;

  return (
    <Dialog open={!!industry} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[88vh] w-full overflow-y-auto overflow-x-hidden rounded-2xl border-0 p-0 sm:max-w-2xl"
      >
        {industry && (
          <div className="relative">
            {/* Close button */}
            <button
              onClick={() => onClose()}
              aria-label="Close"
              className="absolute right-3 top-3 z-50 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-all hover:bg-white/30 sm:h-9 sm:w-9 sm:right-4 sm:top-4"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Decorative top banner — matches services dialog */}
            <div className="relative overflow-hidden bg-navy px-3 py-4 sm:px-8 sm:py-8">
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-grape/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 left-1/3 hidden h-32 w-32 rounded-full bg-cta/20 blur-3xl sm:block" />
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-grape to-royal text-white shadow-glow-purple sm:h-12 sm:w-12 sm:rounded-xl">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1 pr-8">
                  <DialogTitle className="font-display text-base font-bold text-white sm:text-2xl">
                    {industry.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs text-slate-300 sm:mt-1.5 sm:text-sm">
                    {industry.tagline}
                  </DialogDescription>
                  {/* Results badges */}
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {industry.results.map((r) => (
                      <span
                        key={r.metric}
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cta sm:px-2.5 sm:py-1 sm:text-[10px]"
                      >
                        <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {r.value} {r.metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Body — clean DetailBlock pattern like services dialog */}
            <div className="space-y-4 px-3 py-4 sm:space-y-6 sm:px-8 sm:py-7">
              {/* The Insight */}
              <DetailBlock icon={Lightbulb} label="The Insight" tone="warn">
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{industry.insight}</p>
              </DetailBlock>

              {/* Secret Weapon */}
              <DetailBlock icon={Zap} label="Secret Weapon" tone="grape">
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{industry.secretWeapon}</p>
              </DetailBlock>

              {/* Customer Journey */}
              <DetailBlock icon={Eye} label="How Customers Find You" tone="navy">
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{industry.customerJourney}</p>
              </DetailBlock>

              {/* 2-col: Problems + Solutions (transformation) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                <DetailBlock icon={X} label="Common Problems" tone="warn">
                  <ul className="space-y-1.5">
                    {industry.problems.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <X className="mt-0.5 h-3 w-3 shrink-0 text-rose-400 sm:h-4 sm:w-4" strokeWidth={2.5} />
                        <span className="leading-snug sm:leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock icon={Check} label="What I Deliver" tone="green">
                  <ul className="space-y-1.5">
                    {industry.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                        <span className="leading-snug sm:leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              </div>

              {/* 2-col: Typical Mistakes + Quick Wins */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
                <DetailBlock icon={AlertCircle} label="Typical Mistakes" tone="warn">
                  <ul className="space-y-1.5">
                    {industry.typicalMistakes.slice(0, 4).map((m) => (
                      <li key={m} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-400 sm:mt-2" />
                        <span className="leading-snug sm:leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock icon={Sparkles} label="Quick Wins" tone="grape">
                  <ul className="space-y-1.5">
                    {industry.quickWins.slice(0, 4).map((q) => (
                      <li key={q} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-grape sm:mt-2" />
                        <span className="leading-snug sm:leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              </div>

              {/* Features */}
              <DetailBlock icon={Package} label="Features Included" tone="navy">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {industry.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      <Check className="h-2.5 w-2.5 text-emerald-500 sm:h-3 sm:w-3" />
                      {f}
                    </span>
                  ))}
                </div>
              </DetailBlock>

              {/* Results timeline — what happens after launch */}
              <DetailBlock icon={TrendingUp} label="What Happens After We Launch" tone="green">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center sm:p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">Week 1</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-navy sm:text-xs sm:leading-tight">
                      {getTimelineResult(industry.slug, "week1")}
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center sm:p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">Month 1</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-navy sm:text-xs sm:leading-tight">
                      {getTimelineResult(industry.slug, "month1")}
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-center sm:p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">Month 3</div>
                    <div className="mt-1 text-[11px] font-medium leading-tight text-navy sm:text-xs sm:leading-tight">
                      {getTimelineResult(industry.slug, "month3")}
                    </div>
                  </div>
                </div>
              </DetailBlock>

              {/* Price + CTA */}
              <div className="relative overflow-hidden rounded-xl border border-grape/20 bg-gradient-to-br from-grape/10 to-royal/10 p-3 sm:rounded-2xl sm:p-5">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-grape sm:text-xs">
                      Build for {industry.title}
                    </div>
                    <div className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                      Free 30-min consultation · Fixed-price quote
                    </div>
                  </div>
                  <PremiumButton
                    size="sm"
                    onClick={() => {
                      onClose();
                      onCTA();
                    }}
                    icon={<ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                  >
                    Start this project
                  </PremiumButton>
                </div>
              </div>

              {/* Footer actions */}
              <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:gap-3 sm:pt-5">
                <p className="text-[11px] text-slate-500 sm:text-xs">
                  Not sure if this is the right fit? Let&apos;s talk it through.
                </p>
                <PremiumButton
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    onClose();
                    onCTA();
                  }}
                  icon={<ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                >
                  Talk to me first
                </PremiumButton>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/* Detail block helper (matches services.tsx tone system)              */
/* ------------------------------------------------------------------ */
function DetailBlock({
  icon: Icon,
  label,
  tone,
  children,
}: {
  icon: typeof Sparkles;
  label: string;
  tone: "warn" | "grape" | "green" | "navy";
  children: React.ReactNode;
}) {
  const toneCls = {
    warn: "text-amber-500 bg-amber-50",
    grape: "text-grape bg-grape/10",
    green: "text-emerald-500 bg-emerald-50",
    navy: "text-navy bg-navy/5",
  }[tone];

  return (
    <div>
      <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2.5 sm:gap-2">
        <span className={cn("grid h-6 w-6 place-items-center rounded-md sm:h-7 sm:w-7 sm:rounded-lg", toneCls)}>
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </span>
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy sm:text-xs">
          {label}
        </h4>
      </div>
      <div className="pl-0.5 sm:pl-1">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* "Not sure if I serve your industry?" band                           */
/* ------------------------------------------------------------------ */
function NotSureBand({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <section className="relative overflow-hidden px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-aurora-soft" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-soft backdrop-blur sm:rounded-[2rem] sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-48 w-48 rounded-full bg-grape/10 blur-3xl sm:block" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 hidden h-48 w-48 rounded-full bg-royal/10 blur-3xl sm:block" />
            <div className="relative flex flex-col items-center justify-between gap-4 text-center sm:gap-6 md:flex-row md:text-left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-grape/15 bg-grape/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-grape sm:px-3.5 sm:py-1.5 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-grape animate-pulse" />
                  Not on the list?
                </div>
                <h3 className="mt-2 text-balance font-display text-base font-bold tracking-tight text-navy sm:mt-4 sm:text-2xl sm:text-3xl">
                  Not sure if I serve your industry?
                </h3>
                <p className="mt-2 text-pretty text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm sm:text-base">
                  The 16 industries above are the ones I build for most often,
                  but the playbook transfers. If you serve customers, take
                  bookings, or get found on Google — I can build you a website
                  that grows your business. Just ask.
                </p>
              </div>
              <div className="shrink-0">
                <PremiumButton
                  size="lg"
                  variant="navy"
                  onClick={() => onNavigate("contact")}
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Just ask — chances are I do
                </PremiumButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats strip — navy band with AnimatedCounter                        */
/* ------------------------------------------------------------------ */
function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
              By the numbers
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-balance text-xl font-bold tracking-tight sm:mt-5 sm:text-3xl sm:text-4xl md:text-5xl">
              The work, <span className="text-gradient-cta">quantified.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 text-pretty text-xs text-slate-300 sm:mt-4 sm:text-base">
              Across every industry I serve, the pattern holds: a premium,
              fast, conversion-focused website compounds. Here&apos;s the
              aggregate picture.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-8 sm:gap-5 lg:grid-cols-4"
          stagger={0.08}
        >
          {AGGREGATE_STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 sm:rounded-2xl sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 hidden h-20 w-20 rounded-full bg-grape/20 blur-2xl transition-opacity duration-500 group-hover:opacity-150 sm:block" />
                <div className="relative font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl sm:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <div className="relative mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300 sm:mt-2 sm:text-xs sm:text-sm">
                  {s.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
