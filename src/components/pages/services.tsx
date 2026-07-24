"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Rocket, Plus,
  TrendingUp, Wrench, Building2, Clock, Target, Package, BadgeDollarSign,
  Lightbulb, FlaskConical, Hammer, Search, LayoutTemplate, X,
} from "lucide-react";
import {
  Reveal, PremiumButton,
  AuroraBackground, Eyebrow,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { SERVICES } from "@/lib/site-data";
import type { PageKey, Service } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Category metadata                                                  */
/* ------------------------------------------------------------------ */
type Cat = "All" | "Build" | "Convert" | "Grow" | "Operate";

const CATEGORIES: { key: Cat; label: string; icon: typeof Building2; blurb: string }[] = [
  { key: "All", label: "All services", icon: Sparkles, blurb: "Everything, end-to-end" },
  { key: "Build", label: "Build", icon: Building2, blurb: "Websites that earn trust" },
  { key: "Convert", label: "Convert", icon: Rocket, blurb: "Pages engineered to sell" },
  { key: "Grow", label: "Grow", icon: TrendingUp, blurb: "SEO & local visibility" },
  { key: "Operate", label: "Operate", icon: Wrench, blurb: "Systems & peace of mind" },
];

function countFor(cat: Cat) {
  if (cat === "All") return SERVICES.length;
  return SERVICES.filter((s) => s.category === cat).length;
}

const PROCESS_PHASES = [
  { icon: Search, title: "Audit", blurb: "I dig into your business, customers, and competitors to find what's holding you back." },
  { icon: LayoutTemplate, title: "Design", blurb: "We shape a premium, conversion-first experience around your brand and goals." },
  { icon: Hammer, title: "Build", blurb: "I engineer a fast, secure, scalable website — and integrate every system you need." },
  { icon: TrendingUp, title: "Grow", blurb: "SEO, content, and continuous optimization compound your results month over month." },
];

/* ------------------------------------------------------------------ */
/* Main page                                                          */
/* ------------------------------------------------------------------ */
export function ServicesPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  const [active, setActive] = useState<Cat>("All");
  const [selected, setSelected] = useState<Service | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active)),
    [active]
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="What I build"
        title={
          <>
            The building blocks of your{" "}
            <span className="text-gradient-purple">digital presence.</span>
          </>
        }
        subtitle="These are the services I deliver — from custom websites to booking systems, SEO, and ongoing growth. Looking for solutions tailored to your specific business type? Check the Industries page."
      />

      {/* Category summary strip */}
      <CategorySummary active={active} setActive={setActive} />

      {/* Sticky filter bar */}
      <FilterBar active={active} setActive={setActive} />

      {/* Services grid */}
      <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-8 sm:gap-4">
            <div>
              <Reveal>
                <h3 className="font-display text-base font-bold tracking-tight text-navy sm:text-2xl sm:text-3xl">
                  {active === "All"
                    ? "All 14 services"
                    : `${CATEGORIES.find((c) => c.key === active)?.label} services`}
                </h3>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-1 text-xs text-slate-500 sm:mt-1.5 sm:text-sm">
                  {active === "All"
                    ? "Browse the full menu. Tap any service for the complete breakdown."
                    : `${countFor(active)} services in this category.`}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-500 sm:inline-flex">
                <Sparkles className="h-3.5 w-3.5 text-grape" />
                Click any card for full details
              </div>
            </Reveal>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 gap-1.5 sm:gap-5 lg:grid-cols-3">
                {filtered.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ServiceCard service={s} onOpen={() => setSelected(s)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Empty state (defensive) */}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-center sm:p-12">
              <p className="text-sm text-slate-500">No services in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process strip */}
      <ProcessStrip />

      {/* CTA */}
      <CTASection
        onCTA={onCTA}
        cta="Start with a service"
        onSecondary={() => onNavigate("pricing")}
        secondary="See pricing"
      />

      {/* Detail dialog */}
      <ServiceDialog
        service={selected}
        onClose={() => setSelected(null)}
        onCTA={onCTA}
        onNavigate={onNavigate}
      />
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Category summary strip — quick visual overview                     */
/* ------------------------------------------------------------------ */
function CategorySummary({
  active,
  setActive,
}: {
  active: Cat;
  setActive: (c: Cat) => void;
}) {
  const cards = CATEGORIES.filter((c) => c.key !== "All");
  return (
    <section className="relative px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {cards.map((c, i) => {
            const isActive = active === c.key;
            return (
              <Reveal key={c.key} delay={i * 0.05}>
                <button
                  onClick={() => setActive(isActive ? "All" : c.key)}
                  className={cn(
                    "group relative w-full overflow-hidden rounded-xl border p-2.5 text-left transition-all duration-300 sm:rounded-2xl sm:p-5",
                    isActive
                      ? "border-grape/30 bg-gradient-to-br from-grape/10 to-royal/10 shadow-soft"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-lg text-white transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-xl",
                        categoryGradient(c.key)
                      )}
                    >
                      <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="font-display text-lg font-extrabold text-navy sm:text-2xl">
                      {countFor(c.key)}
                    </span>
                  </div>
                  <h4 className="mt-2 font-display text-[11px] font-bold uppercase tracking-wider text-navy sm:mt-3 sm:text-sm">
                    {c.label}
                  </h4>
                  <p className="mt-0.5 hidden text-xs leading-relaxed text-slate-500 sm:mt-1 sm:block">{c.blurb}</p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky filter bar                                                  */
/* ------------------------------------------------------------------ */
function FilterBar({
  active,
  setActive,
}: {
  active: Cat;
  setActive: (c: Cat) => void;
}) {
  return (
    <div className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-1.5 overflow-x-auto rounded-full border border-slate-200 bg-white/85 p-1 shadow-soft backdrop-blur-md [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-2 sm:p-1.5">
          {CATEGORIES.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-2.5 text-xs font-medium transition-all sm:gap-2 sm:px-4 sm:py-2 sm:text-sm",
                  isActive
                    ? "bg-navy text-white shadow-soft"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-grape/30 hover:text-navy"
                )}
              >
                <c.icon className={cn("h-3 w-3 sm:h-3.5 sm:w-3.5", isActive ? "text-cta" : "text-grape")} />
                {c.label}
                <span
                  className={cn(
                    "ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold sm:text-[10px]",
                    isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
                  )}
                >
                  {countFor(c.key)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service card                                                       */
/* ------------------------------------------------------------------ */
function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: () => void;
}) {
  const Icon = service.icon;
  return (
    <button
      onClick={onOpen}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6"
    >
      {/* Hover glow blob */}
      <div className="pointer-events-none absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-gradient-to-br from-grape/10 to-royal/10 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 sm:block" />

      <div className="relative flex items-start justify-between">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-white shadow-soft sm:h-11 sm:w-11 sm:rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider sm:px-2.5 sm:py-1 sm:text-[10px]",
            categoryChip(service.category)
          )}
        >
          {service.category}
        </span>
      </div>

      <h3 className="relative mt-2 font-display text-xs font-bold leading-tight text-navy sm:mt-4 sm:text-lg">
        {service.title}
      </h3>
      <p className="relative mt-1 flex-1 text-[11px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
        {service.short}
      </p>

      {/* Footer row */}
      <div className="relative mt-2 flex items-center justify-between border-t border-slate-100 pt-2 sm:mt-5 sm:pt-4">
        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 sm:gap-1.5 sm:text-xs">
          <Clock className="h-3 w-3 text-grape sm:h-3.5 sm:w-3.5" />
          {service.timeline}
        </div>
        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 sm:text-xs">
          <span className="text-grape">{service.price}</span>
        </div>
      </div>

      <div className="relative mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-grape sm:mt-3 sm:text-sm">
        View details
        <Plus className="h-3 w-3 transition-transform duration-300 group-hover:rotate-90 sm:h-3.5 sm:w-3.5" />
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Service detail dialog                                              */
/* ------------------------------------------------------------------ */
function ServiceDialog({
  service,
  onClose,
  onCTA,
  onNavigate,
}: {
  service: Service | null;
  onClose: () => void;
  onCTA: () => void;
  onNavigate: (p: PageKey) => void;
}) {
  const Icon = service?.icon ?? Sparkles;
  return (
    <Dialog open={!!service} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[88vh] w-full overflow-y-auto overflow-x-hidden rounded-2xl border-0 p-0 sm:max-w-2xl"
      >
        {service && (
          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-50 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-all hover:bg-white/30 sm:h-9 sm:w-9 sm:right-4 sm:top-4"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Decorative top banner */}
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
                    {service.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs text-slate-300 sm:mt-1.5 sm:text-sm">
                    {service.short}
                  </DialogDescription>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider sm:px-2.5 sm:py-1 sm:text-[10px]",
                        categoryChip(service.category)
                      )}
                    >
                      {service.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:px-2.5 sm:py-1 sm:text-[10px]">
                      <Clock className="h-2.5 w-2.5 text-cta sm:h-3 sm:w-3" /> {service.timeline}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cta sm:px-2.5 sm:py-1 sm:text-[10px]">
                      <BadgeDollarSign className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {service.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 px-3 py-4 sm:space-y-6 sm:px-8 sm:py-7">
              {/* Problem */}
              <DetailBlock icon={Lightbulb} label="The problem" tone="warn">
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{service.problem}</p>
              </DetailBlock>

              {/* Solution */}
              <DetailBlock icon={FlaskConical} label="The solution" tone="grape">
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{service.solution}</p>
              </DetailBlock>

              {/* 2-col: Benefits + Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-5">
                <DetailBlock icon={Check} label="Benefits" tone="green">
                  <ul className="space-y-1.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                        <span className="leading-snug sm:leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>

                <DetailBlock icon={Zap} label="Features" tone="navy">
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-[11px] text-slate-600 sm:gap-2 sm:text-sm">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-grape sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                        <span className="leading-snug sm:leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              </div>

              {/* 2-col: Timeline + Ideal client */}
              <div className="grid grid-cols-2 gap-2 sm:gap-5">
                <DetailBlock icon={Clock} label="Timeline" tone="navy">
                  <p className="text-[11px] font-semibold text-navy sm:text-sm sm:font-semibold">{service.timeline}</p>
                </DetailBlock>
                <DetailBlock icon={Target} label="Ideal client" tone="grape">
                  <p className="text-[11px] leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{service.ideal}</p>
                </DetailBlock>
              </div>

              {/* Deliverables */}
              <DetailBlock icon={Package} label="Deliverables" tone="navy">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      <Check className="h-2.5 w-2.5 text-emerald-500 sm:h-3 sm:w-3" />
                      {d}
                    </span>
                  ))}
                </div>
              </DetailBlock>

              {/* Price highlight */}
              <div className="relative overflow-hidden rounded-xl border border-grape/20 bg-gradient-to-br from-grape/10 to-royal/10 p-3 sm:rounded-2xl sm:p-5">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-grape sm:text-xs">
                      Investment
                    </div>
                    <div className="mt-0.5 font-display text-lg font-extrabold text-navy sm:mt-1 sm:text-2xl">
                      {service.price}
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-500 sm:mt-1 sm:text-xs">
                      Fixed-price. You own everything. No surprises.
                    </p>
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
                    onNavigate("contact");
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

function DetailBlock({
  icon: Icon,
  label,
  tone,
  children,
}: {
  icon: typeof Lightbulb;
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
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-navy sm:text-xs">{label}</h4>
      </div>
      <div className="pl-0.5 sm:pl-1">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process strip                                                      */
/* ------------------------------------------------------------------ */
function ProcessStrip() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <AuroraBackground />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
              How it works
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 text-balance font-display text-xl font-bold tracking-tight sm:mt-5 sm:text-4xl md:text-5xl">
              A clear path from <span className="text-gradient-cta">audit to growth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-xl text-pretty text-xs text-slate-300 sm:mt-4 sm:text-base">
              Four phases. One senior engineer. No handoffs, no agencies, no jargon.
            </p>
          </Reveal>
        </div>

        <div className="mt-1 grid grid-cols-2 gap-1.5 sm:gap-4 lg:grid-cols-4">
          {PROCESS_PHASES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 sm:rounded-2xl sm:p-6">
                <div className="absolute right-2 top-2 font-display text-2xl font-extrabold text-white/5 sm:right-3 sm:top-3 sm:text-5xl">
                  0{i + 1}
                </div>
                <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape to-royal text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl">
                  <p.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <h3 className="relative mt-2 font-display text-xs font-bold leading-tight text-white sm:mt-4 sm:text-lg">
                  {p.title}
                </h3>
                <p className="relative mt-0.5 text-[11px] leading-snug text-slate-300 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {p.blurb}
                </p>
                {i < PROCESS_PHASES.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/20 lg:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing teaser                                                     */
/* ------------------------------------------------------------------ */
function PricingTeaser({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-12">
            {/* Decorative gradient blob */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-grape/15 to-royal/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-br from-cta/10 to-grape/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-5 sm:gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <Eyebrow>Transparent pricing</Eyebrow>
                <h3 className="mt-4 text-balance font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                  Not sure what you need?{" "}
                  <span className="text-gradient-purple">Compare 4 transparent pricing tiers.</span>
                </h3>
                <p className="mt-3 text-pretty text-sm text-slate-600 sm:text-base">
                  From a one-off landing page to a full growth retainer — every package is
                  fixed-price, clearly scoped, and built to pay for itself.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:mt-5 sm:gap-x-5">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-500" /> Fixed-price
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-500" /> You own everything
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-500" /> No long-term contracts
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row lg:flex-col">
                <PremiumButton
                  size="lg"
                  onClick={() => onNavigate("pricing")}
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  See pricing tiers
                </PremiumButton>
                <PremiumButton
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("process")}
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  See the process
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
/* Helpers                                                            */
/* ------------------------------------------------------------------ */
function categoryGradient(cat: Cat): string {
  switch (cat) {
    case "Build":
      return "bg-gradient-to-br from-navy to-royal";
    case "Convert":
      return "bg-gradient-to-br from-cta to-amber-500";
    case "Grow":
      return "bg-gradient-to-br from-emerald-500 to-teal-600";
    case "Operate":
      return "bg-gradient-to-br from-slate-700 to-slate-900";
    default:
      return "bg-gradient-to-br from-grape to-royal";
  }
}

function categoryChip(cat: Service["category"]): string {
  switch (cat) {
    case "Build":
      return "bg-navy/10 text-navy";
    case "Convert":
      return "bg-cta/10 text-cta";
    case "Grow":
      return "bg-emerald-500/10 text-emerald-600";
    case "Operate":
      return "bg-slate-700/10 text-slate-700";
    default:
      return "bg-grape/10 text-grape";
  }
}
