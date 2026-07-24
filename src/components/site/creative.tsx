"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Zap, TrendingUp, X, Check,
  Star, MousePointerClick, Eye, Phone, Calendar, AlertCircle,
  Search, PenTool, Layout, Code, Bug, Rocket, GraduationCap, LifeBuoy,
  ChevronLeft, ChevronRight, Clock, Target, Lightbulb,
} from "lucide-react";
import { Reveal, AnimatedCounter, PremiumButton } from "./primitives";
import { cn } from "@/lib/utils";

/* ============================================================
   1. MARQUEE BANNER — bold scrolling text band
   ============================================================ */
export function MarqueeBanner({
  items = [
    "Premium Web Design",
    "Conversion Focused",
    "Local Business Expert",
    "Built to Perform",
    "SEO Ready",
    "Lightning Fast",
  ],
  dark = false,
}: {
  items?: string[];
  dark?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden py-5",
        dark ? "bg-navy text-white" : "bg-navy text-white"
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-extrabold tracking-tight sm:text-2xl sm:text-3xl">
              {item}
            </span>
            <Sparkles className="h-5 w-5 shrink-0 text-cta" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   2. MANIFESTO — bold declaration section with oversized type
   ============================================================ */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const words = [
    "Your", "website", "is", "not", "a", "brochure.",
    "It's", "your", "best", "salesperson —",
    "working", "24/7,",
    "never", "calls", "in", "sick,",
    "never", "asks", "for", "a", "raise.",
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-aurora-soft" />
      <div className="mx-auto max-w-5xl">
        <motion.div style={{ opacity }}>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-grape/15 bg-grape/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-grape">
              <span className="h-1.5 w-1.5 rounded-full bg-grape animate-pulse" /> The philosophy
            </div>
          </Reveal>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 sm:mt-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "font-display text-base font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
                  word.includes("salesperson") || word.includes("24/7,") || word.includes("raise.")
                    ? "text-gradient-purple"
                    : "text-navy"
                )}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-2xl text-pretty text-xs text-slate-600 sm:mt-10 sm:text-lg sm:text-xl">
              Most freelancers build websites. I build <span className="font-semibold text-navy">business assets</span> — engineered to bring you more calls, more bookings, and more revenue. Every pixel, every line of code, every word of copy serves one purpose: <span className="font-semibold text-grape">growing your business.</span>
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   3. PROBLEM SECTION — "Most websites are broken" provocation
   ============================================================ */
export function ProblemSection() {
  const problems = [
    { icon: Eye, title: "Invisible on Google", desc: "Customers search for what you do — and find your competitors instead." },
    { icon: MousePointerClick, title: "Visitors bounce", desc: "Slow, confusing sites lose 70% of visitors in the first 8 seconds." },
    { icon: Phone, title: "No way to book", desc: "Customers want to act now. Phone-tag and contact forms kill the momentum." },
    { icon: AlertCircle, title: "Looks outdated", desc: "A cheap website makes your business look cheap — no matter how good your work is." },
  ];

  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-grape/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-300 sm:px-3.5 sm:py-1.5 sm:text-xs">
            <AlertCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> The hard truth
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-2 max-w-3xl text-balance text-xl font-extrabold tracking-tight sm:mt-5 sm:text-5xl md:text-6xl">
            Your website is <span className="text-rose-400">costing you customers</span> every single day.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 max-w-2xl text-pretty text-sm text-slate-300 sm:mt-5 sm:text-lg">
            Not because it's "bad" — but because it was built to look pretty, not to perform. Here's what's quietly bleeding your business:
          </p>
        </Reveal>

        <div className="mt-1 grid grid-cols-2 gap-1.5 sm:gap-5 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur sm:rounded-2xl sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/30 hover:bg-white/10">
                <div className="absolute right-2 top-2 font-display text-2xl font-extrabold text-white/5 sm:right-4 sm:top-4 sm:text-5xl">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-lg sm:h-12 sm:w-12 sm:rounded-xl">
                    <p.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-2 font-display text-xs font-bold leading-tight text-white sm:mt-4 sm:text-lg">{p.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-400 sm:mt-2 sm:text-sm sm:leading-relaxed line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-2 flex flex-col items-center justify-between gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-grape/20 via-royal/20 to-grape/20 p-3 backdrop-blur sm:mt-2 sm:flex-row sm:gap-4 sm:rounded-2xl sm:p-8">
            <p className="text-pretty text-sm font-semibold text-white sm:text-lg sm:text-xl">
              The good news? <span className="text-cta">This is fixable.</span>
            </p>
            <PremiumButton size="lg" variant="cta" icon={<ArrowRight className="h-4 w-4" />}>
              Fix my website
            </PremiumButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   4. BIG NUMBER — full-bleed oversized stat moment
   ============================================================ */
export function BigNumber({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-royal to-grape px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-grape/40 blur-3xl animate-aurora" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cta/20 blur-3xl animate-aurora" style={{ animationDelay: "4s" }} />
      </div>
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <TrendingUp className="h-3.5 w-3.5 text-cta" /> The result
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-3 font-display text-5xl font-extrabold tracking-tighter text-white sm:mt-6 sm:text-8xl md:text-9xl lg:text-[10rem]">
            <AnimatedCounter
              value={value}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
              duration={2.5}
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-balance text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {label}
          </p>
        </Reveal>
        {sublabel && (
          <Reveal delay={0.25}>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-slate-300">
              {sublabel}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   5. BEFORE/AFTER SLIDER — interactive comparison
   ============================================================ */
export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  };

  const beforeStats = [
    { label: "Monthly leads", value: "8" },
    { label: "Load time", value: "5.8s" },
    { label: "Google rank", value: "Page 3" },
    { label: "Conversion", value: "0.8%" },
  ];
  const afterStats = [
    { label: "Monthly leads", value: "31" },
    { label: "Load time", value: "1.4s" },
    { label: "Google rank", value: "Top 3" },
    { label: "Conversion", value: "4.2%" },
  ];

  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-grape/15 bg-grape/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-grape">
              <Sparkles className="h-3.5 w-3.5" /> The transformation
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Drag to see the <span className="text-gradient-purple">difference.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-slate-600">
              Same business. Same location. Same services. The only thing that changed was the website.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 sm:mt-12">
            <div
              ref={containerRef}
              className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-3xl border border-slate-200 shadow-lift select-none"
              onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              onClick={(e) => handleMove(e.clientX)}
            >
              {/* After (full) */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                      After
                    </span>
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {afterStats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/15 p-3 backdrop-blur">
                        <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">{s.value}</div>
                        <div className="text-[11px] font-medium text-white/80 sm:text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Before (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800" />
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-rose-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-200 backdrop-blur">
                      Before
                    </span>
                    <X className="h-6 w-6 text-rose-300" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {beforeStats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/10 p-3 backdrop-blur">
                        <div className="font-display text-2xl font-extrabold text-rose-300 sm:text-3xl">{s.value}</div>
                        <div className="text-[11px] font-medium text-slate-400 sm:text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white shadow-lg"
                style={{ left: `${position}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lift">
                  <div className="flex items-center gap-0.5 text-navy">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">
              ← Drag the slider left and right →
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   6. SCARCITY BANNER — urgency for navbar top
   ============================================================ */
export function ScarcityBanner({ onCTA }: { onCTA: () => void }) {
  return (
    <div className="relative z-[60] bg-cta-gradient px-4 py-2 text-center text-sm font-semibold text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Only 2 project slots left for this month
        </span>
        <span className="hidden h-3 w-px bg-white/40 sm:block" />
        <button onClick={onCTA} className="underline underline-offset-2 hover:no-underline">
          Claim yours →
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   7. LOGO GRID — premium trusted-by with hover spotlight
   ============================================================ */
export function LogoGrid({ logos }: { logos: string[] }) {
  return (
    <section className="border-y border-slate-100 bg-white py-5 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Trusted by 28 local businesses across 16 industries
        </p>
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:mt-8 sm:grid-cols-3 lg:grid-cols-5">
          {logos.slice(0, 10).map((logo, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="group grid h-16 place-items-center bg-white transition-colors hover:bg-grape/5 sm:h-24">
                <span className="font-display text-lg font-bold text-slate-400 transition-colors group-hover:text-navy">
                  {logo}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. PROCESS EXPLORER — rich, interactive, detailed
   ============================================================ */
const STEP_ICONS = [Search, Target, Layout, PenTool, Code, Bug, Rocket, GraduationCap, LifeBuoy];
const STEP_COLORS = [
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

export function ProcessTabs({
  steps,
}: {
  steps: { n: string; title: string; duration: string; description: string; deliverables: string[] }[];
}) {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const Icon = STEP_ICONS[active] || Search;
  const accent = STEP_COLORS[active] || STEP_COLORS[0];
  const progress = ((active + 1) / steps.length) * 100;

  const goNext = () => setActive((p) => Math.min(p + 1, steps.length - 1));
  const goPrev = () => setActive((p) => Math.max(p - 1, 0));

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-mist to-white px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" />
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-grape/15 bg-grape/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-grape">
              <Zap className="h-3.5 w-3.5" /> How it works
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
              A process that <span className="text-gradient-purple">ships on time.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
              Every project follows the same battle-tested 9-step process. No surprises, no scope creep, no missed deadlines. Click through each step to see exactly what happens.
            </p>
          </Reveal>
        </div>

        {/* Progress bar */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-10">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Step {active + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className={cn("h-full rounded-full bg-gradient-to-r", accent)}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-2 grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Step list — vertical timeline with rail */}
          <div className="relative">
            {/* Vertical gradient rail */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-grape/30 via-royal/30 to-cta/30 lg:left-6" />

            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {steps.map((step, i) => {
                const StepIcon = STEP_ICONS[i] || Search;
                const isActive = active === i;
                const isPast = i < active;
                return (
                  <button
                    key={step.n}
                    onClick={() => setActive(i)}
                    className="group relative flex shrink-0 items-center gap-3 rounded-2xl p-2.5 text-left transition-all duration-300 hover:bg-white/60 lg:w-full"
                  >
                    {/* Node on the rail */}
                    <div className={cn(
                      "relative grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all duration-300",
                      isActive
                        ? cn("bg-gradient-to-br text-white shadow-lg scale-110", STEP_COLORS[i])
                        : isPast
                        ? "bg-emerald-500 text-white"
                        : "bg-white border-2 border-slate-200 text-slate-400 group-hover:border-grape/40"
                    )}>
                      {isPast ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <StepIcon className="h-5 w-5" />
                      )}
                      {isActive && (
                        <span className={cn("absolute -inset-1 rounded-xl bg-gradient-to-br opacity-30 blur-md -z-10", STEP_COLORS[i])} />
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

          {/* Step detail panel */}
          <div className="relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift"
            >
              {/* Top gradient banner */}
              <div className={cn("relative overflow-hidden bg-gradient-to-br px-4 py-5 sm:px-9 sm:py-10", accent)}>
                <div className="absolute inset-0 bg-grid-dark opacity-20" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/30 sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-3xl font-extrabold text-white/30 sm:text-5xl">{current.n}</span>
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur sm:px-3 sm:py-1 sm:text-xs">
                          {current.duration}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-9">
                <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
                  {current.description}
                </p>

                {/* Deliverables */}
                <div className="mt-5 sm:mt-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Check className="h-4 w-4 text-emerald-500" /> Deliverables
                  </div>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {current.deliverables.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 px-3.5 py-2.5"
                      >
                        <div className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br text-white", accent)}>
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-medium text-navy">{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* What you get + what I need */}
                <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      <Lightbulb className="h-4 w-4" /> What you get
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
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
                  <div className="rounded-2xl border border-grape-100 bg-grape/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-grape">
                      <Target className="h-4 w-4" /> What I need from you
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
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
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-7 sm:pt-5">
                  <button
                    onClick={goPrev}
                    disabled={active === 0}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                      active === 0
                        ? "cursor-not-allowed text-slate-300"
                        : "text-navy hover:bg-slate-100"
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </button>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
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
                    disabled={active === steps.length - 1}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                      active === steps.length - 1
                        ? "cursor-not-allowed text-slate-300"
                        : cn("text-white bg-gradient-to-r hover:shadow-lg", accent)
                    )}
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
