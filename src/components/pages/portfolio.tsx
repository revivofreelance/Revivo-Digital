"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Quote,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  Wrench,
} from "lucide-react";
import {
  Reveal,
  AnimatedCounter,
  AuroraBackground,
  SectionHeading,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import { PROJECTS } from "@/lib/site-data";
import type { PageKey, Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ---------------- Stats strip data ---------------- */
const PORTFOLIO_STATS = [
  { value: 28, prefix: "", suffix: "", decimals: 0, label: "Projects delivered" },
  { value: 3, prefix: "", suffix: " yrs", decimals: 0, label: "Experience" },
  { value: 4.2, prefix: "", suffix: "/5", decimals: 1, label: "Client rating" },
  { value: 88, prefix: "", suffix: "%", decimals: 0, label: "Retention rate" },
];

/* ---------------- Case study dialog ---------------- */
function CaseStudyDialog({
  project,
  onOpenChange,
  onCTA,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
  onCTA: () => void;
}) {
  return (
    <Dialog open={project !== null} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-w-3xl gap-0 overflow-hidden rounded-2xl border-0 p-0 sm:max-w-3xl sm:rounded-3xl"
      >
        {project && (
          <div className="max-h-[88vh] overflow-y-auto premium-scroll">
            {/* Accessibility helpers */}
            <DialogTitle className="sr-only">{project.title}</DialogTitle>
            <DialogDescription className="sr-only">{project.summary}</DialogDescription>

            {/* Banner */}
            <div
              className={cn(
                "relative overflow-hidden bg-gradient-to-br px-4 py-5 sm:px-10 sm:py-12",
                project.accent,
              )}
            >
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              {/* Close button */}
              <button
                onClick={() => onOpenChange(false)}
                aria-label="Close case study"
                className="absolute right-3 top-3 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all hover:bg-white/30 hover:scale-105 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  {project.industry}
                </div>
                <h2 className="mt-2 text-balance text-base font-bold tracking-tight text-white sm:mt-4 sm:text-2xl sm:text-3xl">
                  {project.title}
                </h2>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:mt-2 sm:text-sm">
                  {project.client}
                </div>
                <p className="mt-2 max-w-2xl text-pretty text-[11px] text-white/90 sm:mt-3 sm:text-sm sm:text-base">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-4 p-4 sm:space-y-8 sm:p-10">
              {/* Overview */}
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <OverviewItem label="Client" value={project.client} />
                <OverviewItem label="Industry" value={project.industry} />
                <OverviewItem label="Category" value={project.category} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-grape sm:text-xs">
                    Tech stack
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-600 sm:px-2.5 sm:py-1 sm:text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <InsightBlock
                icon={<Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                iconColor="text-rose-600"
                heading="The Challenge"
                body={project.challenge}
                className="border-rose-100 bg-rose-50"
              />

              {/* Research & Insight */}
              <InsightBlock
                icon={<Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                iconColor="text-blue-600"
                heading="Research & Insight"
                body={project.research}
                className="border-blue-100 bg-blue-50"
              />

              {/* The Process */}
              <InsightBlock
                icon={<Wrench className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                iconColor="text-emerald-600"
                heading="The Process"
                body={project.process}
                className="border-emerald-100 bg-emerald-50"
              />

              {/* Features */}
              <div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-grape sm:h-4 sm:w-4" />
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-navy sm:text-sm">
                    Features Delivered
                  </h3>
                </div>
                <div className="mt-2 grid gap-1.5 sm:grid-cols-2 sm:gap-2">
                  {project.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-700 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      <span className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-grape/10 text-grape sm:h-5 sm:w-5">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-grape sm:h-4 sm:w-4" />
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-navy sm:text-sm">Results</h3>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-mist p-2.5 text-center shadow-soft sm:rounded-2xl sm:p-4"
                    >
                      <div className="font-display text-base font-extrabold text-gradient-purple sm:text-2xl sm:text-3xl">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-slate-500 sm:mt-1 sm:text-[11px]">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="relative overflow-hidden rounded-xl border border-grape/15 bg-gradient-to-br from-white to-mist p-3 sm:rounded-2xl sm:p-8">
                <Quote className="absolute -right-2 -top-2 hidden h-20 w-20 text-grape/10 sm:block" />
                <div className="relative">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-grape sm:text-xs">
                    Client Testimonial
                  </div>
                  <blockquote className="mt-2 text-pretty text-xs font-medium leading-relaxed text-navy sm:mt-3 sm:text-lg sm:text-xl">
                    <span className="text-gradient-purple">&ldquo;</span>
                    {project.testimonial}
                    <span className="text-gradient-purple">&rdquo;</span>
                  </blockquote>
                  <div className="mt-2 text-[11px] font-semibold text-slate-600 sm:mt-4 sm:text-sm">
                    — {project.client}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-2 rounded-xl bg-navy px-4 py-5 text-center sm:flex-row sm:justify-between sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-8 sm:text-left">
                <div>
                  <div className="text-xs font-bold text-white sm:text-base">
                    Want results like these for your business?
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-300 sm:mt-1 sm:text-sm">
                    Let&apos;s talk about what&apos;s possible.
                  </div>
                </div>
                <PremiumButton
                  variant="cta"
                  onClick={() => {
                    onOpenChange(false);
                    onCTA();
                  }}
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Start a project
                </PremiumButton>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function OverviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-grape sm:text-xs">{label}</div>
      <div className="mt-1 text-xs font-semibold text-navy sm:mt-1.5 sm:text-sm">{value}</div>
    </div>
  );
}

function InsightBlock({
  icon,
  iconColor,
  heading,
  body,
  className,
}: {
  icon: React.ReactNode;
  iconColor: string;
  heading: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border p-3 sm:rounded-2xl sm:p-5 sm:p-6", className)}>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className={cn("inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 sm:h-7 sm:w-7", iconColor)}>
          {icon}
        </span>
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-navy sm:text-sm">{heading}</h3>
      </div>
      <p className="mt-2 text-pretty text-[11px] leading-relaxed text-slate-700 sm:mt-3 sm:text-sm">{body}</p>
    </div>
  );
}

/* ---------------- Project card ---------------- */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative block h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:rounded-3xl"
    >
      {/* Visual top */}
      <div className={cn("relative aspect-[16/10] overflow-hidden", project.accent)}>
        <img
          loading="lazy"
          decoding="async"
          src={project.image}
          alt={`${project.client} website preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-2.5 text-white sm:p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
              {project.category}
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-8 sm:w-8">
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-2.5 sm:p-6">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-grape sm:text-xs">
          {project.client}
        </div>
        <h3 className="mt-0.5 font-display text-xs font-bold text-navy sm:mt-1 sm:text-xl">{project.title}</h3>
        <p className="mt-1 text-[11px] text-slate-600 sm:mt-2 sm:text-sm line-clamp-2 sm:line-clamp-none">{project.summary}</p>

        {/* Metric strip */}
        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2 sm:mt-5 sm:gap-3 sm:pt-5">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <div className="font-display text-base font-extrabold text-gradient-purple sm:text-2xl">
                {m.value}
              </div>
              <div className="text-[11px] text-slate-500 sm:text-[11px]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}

/* ============================ PORTFOLIO PAGE ============================ */
export function PortfolioPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  const [category, setCategory] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  // Derive categories from PROJECTS, preserving first-seen order
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = category === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  return (
    <PageShell>
      {/* Hero */}
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Real businesses. <span className="text-gradient-purple">Real results.</span>
          </>
        }
        subtitle="A selection of recent projects. Every one shipped on time, on budget, and delivered measurable business outcomes — not just pretty screenshots."
      />

      {/* Filter + Grid */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filter bar */}
          <Reveal>
            <div className="flex flex-wrap gap-1.5 justify-center sm:gap-2">
              {categories.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "rounded-full px-3 py-2.5 text-[11px] font-semibold transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm",
                      active
                        ? "bg-navy text-white shadow-soft"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-grape/30 hover:text-navy",
                    )}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Projects grid — key forces remount on filter change so animations re-trigger */}
          <div className="mt-3 grid gap-2 sm:mt-2 sm:gap-6 lg:grid-cols-2">
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={p} onOpen={setSelected} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-6 text-center text-slate-500 sm:mt-12">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy px-4 py-8 shadow-lift sm:rounded-[2rem] sm:px-12 sm:py-16">
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <AuroraBackground />
              <div className="relative grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                {PORTFOLIO_STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-4xl sm:text-5xl">
                      <AnimatedCounter
                        value={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        decimals={s.decimals}
                      />
                    </div>
                    <div className="mt-1.5 text-[11px] font-medium text-slate-300 sm:mt-2 sm:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        onCTA={onCTA}
        onSecondary={() => onNavigate("case-studies")}
        secondary="Read full case studies"
        title="Your project could be next."
        subtitle="Tell me about your business and I'll show you exactly what's possible."
      />

      {/* Case study dialog */}
      <CaseStudyDialog
        project={selected}
        onOpenChange={(o) => !o && setSelected(null)}
        onCTA={onCTA}
      />
    </PageShell>
  );
}
