"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, ArrowRight, Calendar, Clock, MessageCircle, Mail, Phone,
  FileText, Sparkles, Zap, Shield, Users, GitBranch, LifeBuoy, BookOpen,
  Search, PenTool, Layout, Code, Bug, Rocket, GraduationCap,
  ChevronLeft, ChevronRight, Target, Lightbulb,
} from "lucide-react";
import {
  Reveal, Stagger, StaggerItem, SectionHeading, PremiumButton,
  AuroraBackground,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { PROCESS_STEPS } from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProcessPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  return (
    <PageShell>
      <PageHero
        eyebrow="How we'll work"
        title={
          <>
            A process that{" "}
            <span className="text-gradient-purple">ships on time, every time.</span>
          </>
        }
        subtitle="Every project follows the same battle-tested 9-step process. No surprises, no scope creep, no missed deadlines. Each phase has a clear scope, fixed timeline, and concrete deliverables — you always know what's happening, what's next, and what you're paying for."
      />

      <TimelineSection />
      <WhatYouGet />
      <Communication />
      <TimelineSummary onCTA={onCTA} />
    </PageShell>
  );
}

/* ============================ TIMELINE — INTERACTIVE EXPLORER ============================ */

const STEP_ICONS = [Search, Target, Layout, PenTool, Code, Bug, Rocket, GraduationCap, LifeBuoy];
const PHASE_COLORS = [
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-500 to-purple-500",
  "from-blue-500 to-indigo-500",
  "from-cyan-500 to-sky-500",
  "from-violet-500 to-purple-500",
  "from-orange-500 to-amber-600",
  "from-emerald-600 to-green-700",
];

function TimelineSection() {
  const [active, setActive] = useState(0);
  const current = PROCESS_STEPS[active];
  const Icon = STEP_ICONS[active] || Search;
  const accent = PHASE_COLORS[active] || PHASE_COLORS[0];
  const progress = ((active + 1) / PROCESS_STEPS.length) * 100;

  const goNext = () => setActive((p) => Math.min(p + 1, PROCESS_STEPS.length - 1));
  const goPrev = () => setActive((p) => Math.max(p - 1, 0));

  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Progress bar */}
        <div className="mb-3 sm:mb-6">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 sm:text-xs">
            <span>Step {active + 1} of {PROCESS_STEPS.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100 sm:mt-2 sm:h-2">
            <motion.div
              className={cn("h-full rounded-full bg-gradient-to-r", accent)}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:gap-6">
          {/* Step navigator — horizontal scroll on mobile, vertical on desktop */}
          <div className="relative w-full overflow-hidden lg:overflow-visible">
            {/* Vertical gradient rail - desktop only */}
            <div className="absolute left-6 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-grape/30 via-royal/30 to-cta/30 lg:block" />
            {/* Horizontal scroll on mobile - constrained to parent width */}
            <div className="flex w-full gap-2 overflow-x-auto pb-2 no-scrollbar lg:flex-col lg:overflow-visible lg:pb-0">
              {PROCESS_STEPS.map((step, i) => {
                const StepIcon = STEP_ICONS[i] || Search;
                const isActive = active === i;
                const isPast = i < active;
                return (
                  <button
                    key={step.n}
                    onClick={() => setActive(i)}
                    className="group relative flex shrink-0 items-center gap-2 rounded-xl p-1.5 text-left transition-all hover:bg-white/60 lg:w-full lg:gap-3 lg:rounded-2xl lg:p-2"
                  >
                    <div className={cn(
                      "relative grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-all duration-300 lg:h-12 lg:w-12 lg:rounded-xl",
                      isActive
                        ? cn("bg-gradient-to-br text-white shadow-lg scale-110", PHASE_COLORS[i])
                        : isPast
                        ? "bg-emerald-500 text-white"
                        : "bg-white border-2 border-slate-200 text-slate-400 group-hover:border-grape/40"
                    )}>
                      {isPast ? <Check className="h-4 w-4 lg:h-5 lg:w-5" /> : <StepIcon className="h-4 w-4 lg:h-5 lg:w-5" />}
                      {isActive && (
                        <span className={cn("absolute -inset-1 rounded-lg bg-gradient-to-br opacity-30 blur-md -z-10 lg:rounded-xl", PHASE_COLORS[i])} />
                      )}
                    </div>
                    <div className="hidden lg:block">
                      <div className={cn(
                        "font-display text-sm font-bold transition-colors",
                        isActive ? "text-navy" : isPast ? "text-emerald-600" : "text-slate-500"
                      )}>
                        {step.title}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="h-3 w-3" /> {step.duration}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel — animated, rich */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift sm:rounded-3xl"
              >
                {/* Top gradient banner */}
                <div className={cn("relative overflow-hidden bg-gradient-to-br px-4 py-4 sm:px-8 sm:py-8", accent)}>
                  <div className="absolute inset-0 bg-grid-dark opacity-20" />
                  <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur ring-1 ring-white/30 sm:h-16 sm:w-16 sm:rounded-2xl">
                        <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-2xl font-extrabold text-white/30 sm:text-4xl">{current.n}</span>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
                            {current.duration}
                          </span>
                        </div>
                        <h3 className="mt-0.5 font-display text-lg font-bold text-white sm:mt-1 sm:text-3xl">
                          {current.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-3 sm:p-8">
                  <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
                    {current.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                      <Check className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4" /> Deliverables
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2">
                      {current.deliverables.map((d, i) => (
                        <motion.div
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                          className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/50 px-2.5 py-2 sm:rounded-xl sm:px-3.5 sm:py-2.5 sm:gap-2.5"
                        >
                          <div className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br text-white sm:h-6 sm:w-6", accent)}>
                            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          </div>
                          <span className="text-xs font-medium text-navy sm:text-sm">{d}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* What you get + What I need */}
                  <div className="mt-1 grid grid-cols-2 gap-1.5 sm:mt-6 sm:gap-4">
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 sm:rounded-2xl sm:p-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700 sm:text-xs sm:gap-2">
                        <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> What you get
                      </div>
                      <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                        {active === 0 && "A clear plan and fixed-price quote — yours to keep even if we don't work together."}
                        {active === 1 && "A documented strategy that aligns your website with your business goals."}
                        {active === 2 && "A blueprint of every page, approved before any design work begins."}
                        {active === 3 && "Pixel-perfect designs you can click through, approve, and get excited about."}
                        {active === 4 && "A fast, SEO-ready website that works flawlessly on every device."}
                        {active === 5 && "Confidence that every button, form, and integration actually works."}
                        {active === 6 && "A live website with zero downtime and full analytics tracking."}
                        {active === 7 && "The knowledge and tools to manage your site with confidence."}
                        {active === 8 && "Ongoing partnership, optimization, and priority support whenever you need it."}
                      </p>
                    </div>
                    <div className="rounded-xl border border-grape/15 bg-grape/5 p-2.5 sm:rounded-2xl sm:p-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-grape sm:text-xs sm:gap-2">
                        <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> What I need
                      </div>
                      <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                        {active === 0 && "30 minutes on a call and any questions you have about your business."}
                        {active === 1 && "Access to your existing analytics, brand assets, and customer insights."}
                        {active === 2 && "Feedback on the structure — does this flow match how your customers think?"}
                        {active === 3 && "Feedback on the designs — 2 rounds of revisions included."}
                        {active === 4 && "Patience — this is where the magic happens. Content and logos if you have them."}
                        {active === 5 && "A few minutes to test on your own devices and report anything weird."}
                        {active === 6 && "DNS access (or permission to coordinate with whoever manages it)."}
                        {active === 7 && "You and your team for a 90-minute training call."}
                        {active === 8 && "Nothing — just reach out whenever you need help or want to improve something."}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3 sm:mt-6 sm:pt-5">
                    <button
                      onClick={goPrev}
                      disabled={active === 0}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-2.5 text-xs font-semibold transition-all sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm",
                        active === 0 ? "cursor-not-allowed text-slate-300" : "text-navy hover:bg-slate-100"
                      )}
                    >
                      <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Prev
                    </button>
                    <div className="flex gap-1 sm:gap-1.5">
                      {PROCESS_STEPS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={cn(
                            // mobile: invisible pseudo pad turns the 8px pill into a 40px tap target
                            "h-2 rounded-full transition-all duration-300 max-sm:relative max-sm:before:absolute max-sm:before:-inset-x-1 max-sm:before:-inset-y-4 max-sm:before:content-['']",
                            active === i ? cn("w-8 bg-gradient-to-r", accent) : "w-2 bg-slate-300 hover:bg-slate-400"
                          )}
                          aria-label={`Go to step ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={goNext}
                      disabled={active === PROCESS_STEPS.length - 1}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-2.5 text-xs font-semibold transition-all sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm",
                        active === PROCESS_STEPS.length - 1
                          ? "cursor-not-allowed text-slate-300"
                          : cn("text-white bg-gradient-to-r hover:shadow-lg", accent)
                      )}
                    >
                      Next <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ WHAT YOU GET ============================ */
const INCLUDES = [
  {
    icon: FileText,
    title: "Fixed-price quote",
    description: "One number, agreed upfront. No hourly billing surprises, no invoices for 'extra' meetings.",
  },
  {
    icon: Users,
    title: "Direct access to me",
    description: "No account managers, no offshore teams. You talk to the person actually building your site.",
  },
  {
    icon: Calendar,
    title: "Weekly progress check-ins",
    description: "A short demo every week. You see what's been built, what's next, and what you need to decide.",
  },
  {
    icon: GitBranch,
    title: "Source files & ownership",
    description: "All Figma files, code, and assets are yours. You're never locked in to working with me.",
  },
  {
    icon: LifeBuoy,
    title: "30–90 days post-launch support",
    description: "Bugs, tweaks, small changes — on the house. You're not abandoned the day after launch.",
  },
  {
    icon: BookOpen,
    title: "Training & documentation",
    description: "Loom videos and a written guide so your team can update content without calling a developer.",
  },
];

function WhatYouGet() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <AuroraBackground />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
              <Sparkles className="h-3 w-3 text-cta sm:h-3.5 sm:w-3.5" />
              Always included
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 text-balance text-xl font-bold tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
              Every project includes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 max-w-xl text-pretty text-xs text-slate-300 sm:mt-4 sm:text-base">
              Regardless of which plan you choose, these six things are baked into every engagement. No upsells, no asterisks.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-5 lg:grid-cols-3" stagger={0.06}>
          {INCLUDES.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:rounded-2xl sm:p-6">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape/30 to-royal/20 ring-1 ring-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
                  <item.icon className="h-4 w-4 text-white sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-2 font-display text-xs font-bold leading-tight text-white sm:mt-4 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-slate-300 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ COMMUNICATION ============================ */
const TOUCHPOINTS = [
  { icon: Phone, label: "Kickoff call (60 min)", note: "After deposit — we align on goals, scope, and success metrics." },
  { icon: Calendar, label: "Weekly progress demo (30 min)", note: "Live walkthrough of what shipped that week + what's next." },
  { icon: MessageCircle, label: "Async updates via WhatsApp/Email", note: "Questions, screenshots, quick decisions — no scheduling needed." },
  { icon: FileText, label: "Feedback rounds in Figma", note: "Comments directly on the designs. Two structured feedback rounds." },
  { icon: Phone, label: "Launch training call (90 min)", note: "Walk-through of editing content, managing inquiries, and analytics." },
];

const RESPONSE_TIMES = [
  { icon: Mail, channel: "Email", commitment: "Within 4 hours", note: "Business hours, Mon–Fri" },
  { icon: MessageCircle, channel: "WhatsApp", commitment: "Within 1 hour", note: "Business hours, Mon–Fri" },
  { icon: Zap, channel: "Urgent issues", commitment: "Same day", note: "Site down, broken checkout, etc." },
  { icon: Shield, channel: "Non-urgent", commitment: "Within 24 hours", note: "Tweaks, questions, ideas" },
];

function Communication() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Communication"
          title={
            <>
              You'll always know{" "}
              <span className="text-gradient-purple">what's happening.</span>
            </>
          }
          subtitle="No chasing. No 'I'll get back to you next week'. Clear touchpoints and response-time commitments, set on day one."
        />

        <div className="mt-2 grid grid-cols-2 gap-2 sm:gap-6 lg:gap-8">
          {/* Left: touchpoints */}
          <Reveal className="col-span-2 lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-2xl sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 hidden h-48 w-48 rounded-full bg-grape/5 blur-3xl sm:block" />
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-grape/10 sm:h-11 sm:w-11 sm:rounded-xl">
                  <MessageCircle className="h-4 w-4 text-grape sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-display text-sm font-bold text-navy sm:text-2xl">
                  How we'll communicate
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                Five structured touchpoints across the project — plus the freedom to message anytime.
              </p>

              <ul className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-6 sm:gap-3">
                {TOUCHPOINTS.map((t) => (
                  <li
                    key={t.label}
                    className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-mist/40 p-2 sm:flex-row sm:items-start sm:gap-4 sm:rounded-xl sm:p-4"
                  >
                    <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white text-grape shadow-soft sm:h-9 sm:w-9 sm:rounded-lg">
                      <t.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-navy sm:text-sm">{t.label}</div>
                      <div className="mt-0.5 hidden text-xs leading-relaxed text-slate-600 sm:block">
                        {t.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: response times */}
          <Reveal delay={0.1} className="col-span-2 lg:col-span-1">
            <div className="relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-2xl sm:p-8">
              <div className="pointer-events-none absolute -left-20 -bottom-20 hidden h-48 w-48 rounded-full bg-cta/5 blur-3xl sm:block" />
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cta/10 sm:h-11 sm:w-11 sm:rounded-xl">
                  <Clock className="h-4 w-4 text-cta sm:h-5 sm:w-5" />
                </div>
                <h3 className="font-display text-sm font-bold text-navy sm:text-2xl">
                  Response time commitments
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                Predictable replies mean predictable progress.
              </p>

              <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-2 sm:gap-3">
                {RESPONSE_TIMES.map((r) => (
                  <div
                    key={r.channel}
                    className="group relative overflow-hidden rounded-lg border border-slate-100 bg-gradient-to-br from-white to-mist/40 p-2 sm:rounded-xl sm:p-5"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2.5">
                      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-grape/10 text-grape sm:h-8 sm:w-8 sm:rounded-lg">
                        <r.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-xs sm:tracking-[0.14em]">
                        {r.channel}
                      </span>
                    </div>
                    <div className="mt-1.5 font-display text-sm font-bold text-navy sm:mt-3 sm:text-xl">
                      {r.commitment}
                    </div>
                    <div className="mt-0.5 hidden text-xs text-slate-500 sm:mt-1 sm:block">{r.note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-start gap-1.5 rounded-lg bg-grape/5 p-2 text-[11px] text-slate-600 sm:mt-5 sm:gap-2 sm:p-3 sm:text-xs">
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-grape sm:h-3.5 sm:w-3.5" />
                <span>
                  Response times are part of the contract. If I miss them consistently, you get a credit.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================ TIMELINE SUMMARY ============================ */
const PLAN_TIMELINES = [
  {
    plan: "Starter",
    duration: "7–10 days",
    note: "Single-page or small landing site",
    accent: "from-grape/15 to-grape/5",
  },
  {
    plan: "Professional",
    duration: "12–15 days",
    note: "Multi-page marketing site",
    accent: "from-royal/15 to-royal/5",
    popular: true,
  },
  {
    plan: "Business Growth",
    duration: "15–20 days",
    note: "Full site + CMS + integrations",
    accent: "from-cta/15 to-cta/5",
  },
  {
    plan: "Enterprise",
    duration: "20+ days",
    note: "Custom platform & advanced features",
    accent: "from-navy/15 to-navy/5",
  },
];

function TimelineSummary({ onCTA }: { onCTA: () => void }) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Total project duration"
          title={
            <>
              How long until{" "}
              <span className="text-gradient-purple">you go live?</span>
            </>
          }
          subtitle="Timelines scale with scope. Here's the typical range for each plan — confirmed on the kickoff call once I know your goals."
        />

        <Stagger className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-4 lg:grid-cols-4" stagger={0.07}>
          {PLAN_TIMELINES.map((p) => (
            <StaggerItem key={p.plan}>
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-xl border bg-white p-2.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-2xl sm:p-6",
                  p.popular ? "border-grape/40 ring-1 ring-grape/20" : "border-slate-200 hover:border-grape/30"
                )}
              >
                {p.popular && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-cta-gradient px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:right-4 sm:top-4 sm:px-2.5 sm:text-[10px]">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Popular
                  </span>
                )}
                <div className={cn("grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br sm:h-12 sm:w-12 sm:rounded-xl", p.accent)}>
                  <Clock className="h-4 w-4 text-navy sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-2 font-display text-xs font-bold text-navy sm:mt-4 sm:text-base">
                  {p.plan}
                </h3>
                <div className="mt-0.5 font-display text-lg font-extrabold text-gradient-purple sm:mt-1 sm:text-3xl">
                  {p.duration}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-600 sm:mt-2 sm:text-xs sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {p.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-3 flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 bg-mist/40 p-3 text-center sm:mt-10 sm:flex-row sm:gap-6 sm:rounded-2xl sm:p-6 sm:text-left">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-navy sm:gap-2 sm:text-sm">
              <Calendar className="h-3.5 w-3.5 text-grape sm:h-4 sm:w-4" />
              Need it faster?
            </div>
            <p className="text-[11px] text-slate-600 sm:text-sm">
              Rush delivery is available on Starter and Professional plans. Book a call and mention your deadline — I'll tell you straight whether it's doable.
            </p>
            <PremiumButton
              size="sm"
              variant="navy"
              onClick={onCTA}
              icon={<ArrowRight className="h-3.5 w-3.5" />}
              className="shrink-0"
            >
              Book a call
            </PremiumButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
