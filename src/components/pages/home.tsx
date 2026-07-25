"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Star, Phone, MessageCircle, Calendar,
  Check, Sparkles, Zap, ShieldCheck, TrendingUp, MousePointerClick,
  Rocket, Quote,
} from "lucide-react";
import {
  Reveal, Stagger, StaggerItem, AnimatedCounter, Magnetic,
  AuroraBackground, SectionHeading, PremiumButton,
  ScrollProgress, Spotlight, Tilt, RotatingWord,
} from "@/components/site/primitives";
import { CTASection } from "@/components/site/cta-section";
import { PosShowcase } from "@/components/site/pos-showcase";
import { PageShell } from "@/components/site/page-shell";
import {
  MarqueeBanner, Manifesto, ProblemSection,
} from "@/components/site/creative";
import {
  TRUSTED_LOGOS, HERO_STATS, GROWTH_STATS, SERVICES, INDUSTRIES,
  WHY_CHOOSE, PROJECTS, TESTIMONIALS, HOME_FAQS, PROCESS_STEPS,
} from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export function HomePage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  return (
    <PageShell className="pt-0">
      <ScrollProgress />

      {/* ACT 1: The Hook — grab attention immediately */}
      <Hero onNavigate={onNavigate} onCTA={onCTA} />
      <MarqueeBanner />
      <TrustedBy />

      {/* ACT 2: The Problem — agitate the pain */}
      <ProblemSection />

      {/* ACT 3: The Philosophy — declare the approach */}
      <Manifesto />

      {/* ACT 4: The Solution — services & industries */}
      <ServicesOverview onNavigate={onNavigate} />

      {/* In-house products — the capability proof behind the service list */}
      <PosShowcase />

      <IndustriesPreview onNavigate={onNavigate} />

      {/* ACT 5: The Transformation — show the proof */}
      <FeaturedProjects onNavigate={onNavigate} />

      {/* ACT 6: Why Me — differentiate */}
      <WhyChoose />

      {/* ACT 7: Social Proof — testimonials */}
      <TestimonialsPreview onNavigate={onNavigate} />

      {/* ACT 8: The Close — FAQ + CTA */}
      <HomeFAQ />
      <CTASection
        onCTA={onCTA}
        cta="Start your project"
        onSecondary={() => onNavigate("case-studies")}
        secondary="View My Work"
      />
    </PageShell>
  );
}

/* ============================ HERO ============================ */
function Hero({ onNavigate, onCTA }: { onNavigate: (p: PageKey) => void; onCTA: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[86vh] overflow-hidden bg-aurora pb-6 pt-16 sm:min-h-screen sm:pb-20 sm:pt-28 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <AuroraBackground />

      <Spotlight className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" size={620}>
        <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left: copy */}
          <motion.div style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-grape/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-grape backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-grape/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-grape" />
              </span>
              Available for 2 new projects this month
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build a website that brings you{" "}
              <span className="relative inline-block">
                <RotatingWord
                  className="text-gradient-purple"
                  words={["more customers.", "more bookings.", "more phone calls.", "more revenue."]}
                />
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
                    d="M2 9C50 4 100 2 150 4C200 6 250 8 298 4"
                    stroke="url(#g1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#7c3aed" />
                      <stop offset="0.5" stopColor="#4f46e5" />
                      <stop offset="1" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-xl text-pretty text-sm text-slate-600 sm:mt-6 sm:text-lg md:text-xl"
            >
              Revivo is an independent studio that designs and builds premium websites for local businesses. More leads, more bookings, more calls — not just a prettier homepage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3 sm:mt-8"
            >
              {/* Magnetic is inline-block, so the button inside it won't stretch like its
                  unwrapped sibling does in the stacked mobile column — match them explicitly. */}
              <Magnetic strength={0.3} className="max-sm:w-full">
                <PremiumButton size="lg" onClick={onCTA} icon={<ArrowRight className="h-4 w-4" />} className="max-sm:w-full">
                  Book Free Consultation
                </PremiumButton>
              </Magnetic>
              <PremiumButton
                size="lg"
                variant="outline"
                onClick={() => onNavigate("case-studies")}
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                View My Work
              </PremiumButton>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 sm:mt-6 sm:gap-x-6 sm:gap-y-3 sm:text-sm"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                  ))}
                </div>
                <span className="font-semibold text-navy">4.2/5</span>
                <span className="text-slate-500">from 28 clients</span>
              </div>
              <span className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Fixed-price · You own everything</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: visual stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <HeroVisual y1={y1} y2={y2} />
          </motion.div>
        </div>

        {/* Hero stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-white/70 p-3 backdrop-blur sm:mt-16 sm:grid-cols-4 sm:gap-6 sm:rounded-2xl sm:p-8"
        >
          {HERO_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl sm:text-4xl">
                <AnimatedCounter value={s.value} prefix={s.prefix || ""} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </div>
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </Spotlight>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-300/80 p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-grape"
          />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function HeroVisual({ y1, y2 }: { y1: any; y2: any }) {
  return (
    <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-md lg:block">
      {/* Browser mockup */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-1/2 top-4 w-[88%] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/60 bg-white shadow-lift"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/70 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white px-2 py-1 text-[10px] text-slate-400">
            brightsmiledental.com
          </div>
        </div>
        <div className="relative p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-md bg-gradient-to-br from-rose-400 to-pink-500" />
              <div className="h-2 w-16 rounded bg-slate-200" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded bg-slate-200" />
              <div className="h-2 w-8 rounded bg-slate-200" />
              <div className="h-5 w-14 rounded-full bg-cta-gradient" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 w-3/4 rounded bg-slate-800" />
            <div className="h-3 w-1/2 rounded bg-gradient-to-r from-grape to-royal" />
            <div className="h-2 w-full rounded bg-slate-100" />
            <div className="h-2 w-5/6 rounded bg-slate-100" />
          </div>
          <div className="mt-2 flex gap-2">
            <div className="h-7 w-24 rounded-full bg-cta-gradient" />
            <div className="h-7 w-20 rounded-full border border-slate-200" />
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0,1,2].map((i) => (
              <div key={i} className="rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-2">
                <div className="h-8 rounded-md bg-gradient-to-br from-grape/30 to-royal/30" />
                <div className="mt-1.5 h-1.5 w-3/4 rounded bg-slate-200" />
                <div className="mt-1 h-1.5 w-1/2 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Phone mockup */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-2 -left-2 w-32 sm:w-40"
      >
        <div className="overflow-hidden rounded-[2rem] border-[6px] border-navy bg-navy shadow-lift">
          <div className="relative aspect-[9/18] overflow-hidden bg-gradient-to-br from-grape via-royal to-navy">
            <div className="absolute inset-x-0 top-0 h-5 flex justify-center">
              <div className="mt-1 h-1 w-12 rounded-full bg-black/40" />
            </div>
            <div className="px-3 pt-7">
              <div className="text-[10px] font-semibold text-white/70">BRIGHT SMILE</div>
              <div className="mt-1 text-base font-bold leading-tight text-white">
                Book your<br />appointment
              </div>
              <div className="mt-2 rounded-lg bg-white/10 p-2 backdrop-blur">
                <div className="h-1.5 w-12 rounded bg-white/40" />
                <div className="mt-1 h-1.5 w-16 rounded bg-white/20" />
              </div>
              <div className="mt-2 rounded-full bg-cta-gradient px-3 py-1.5 text-center text-[10px] font-bold text-white">
                Book Now
              </div>
              <div className="mt-2 space-y-1.5">
                {[0,1,2].map((i) => (
                  <div key={i} className="rounded-md bg-white/10 p-1.5">
                    <div className="h-1.5 w-3/4 rounded bg-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating card: booking */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute -right-2 top-6 w-44 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-lift backdrop-blur animate-float-slow"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100">
            <Calendar className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">New booking</div>
            <div className="text-xs font-bold text-navy">+218% this month</div>
          </div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
          />
        </div>
      </motion.div>

      {/* Floating card: rating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -right-4 bottom-16 w-40 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-lift backdrop-blur animate-float-medium"
      >
        <div className="flex items-center gap-1">
          {[0,1,2,3,4].map((i) => (
            <Star key={i} className="h-3 w-3 fill-cta text-cta" />
          ))}
        </div>
        <div className="mt-1.5 text-xs font-bold text-navy">4.2 average rating</div>
        <div className="text-[10px] text-slate-500">from 28 happy clients</div>
      </motion.div>

      {/* Floating card: speed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute -left-4 top-1/2 w-36 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-lift backdrop-blur animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-cta" />
          <div className="text-xs font-bold text-navy">1.2s load</div>
        </div>
        <div className="mt-1.5 text-[10px] text-slate-500">vs. 4.8s industry avg</div>
      </motion.div>
    </div>
  );
}

/* ============================ TRUSTED BY ============================ */
function TrustedBy() {
  const items = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];
  return (
    <section className="border-y border-slate-100 bg-white py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
          Trusted by 28 local businesses across 16 industries
        </p>
        <div className="relative mt-4 overflow-hidden mask-fade-x sm:mt-7">
          <div className="flex w-max animate-marquee items-center gap-6 sm:gap-12">
            {items.map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 whitespace-nowrap text-sm font-display font-bold text-slate-400/70 transition-colors hover:text-navy sm:gap-2 sm:text-lg"
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ SERVICES OVERVIEW ============================ */
// Illustrative funnel for the hero tile's mock browser — a picture of what the
// card promises ("turns visitors into paying customers"), not client figures.
const HERO_FUNNEL = [
  { label: "Visitors", value: "1,240", w: "w-full" },
  { label: "Enquiries", value: "168", w: "w-[62%]" },
  { label: "Booked jobs", value: "94", w: "w-[34%]" },
] as const;

function ServicesOverview({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const top = SERVICES.slice(0, 8);
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What I do"
            title={<>Everything your business needs <span className="text-gradient-purple">to win online.</span></>}
            subtitle="From a premium business website to booking systems, SEO, and ongoing growth — one partner, end-to-end."
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
          <Reveal delay={0.1}>
            <PremiumButton variant="outline" size="md" onClick={() => onNavigate("services")} icon={<ArrowRight className="h-4 w-4" />} className="border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10">
              All 14 services
            </PremiumButton>
          </Reveal>
        </div>

        <Stagger className="mt-2 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-5 lg:auto-rows-fr lg:grid-cols-4" stagger={0.06}>
          {top.map((s, i) => {
            // Bento rhythm: the first card owns a 2×2 block, card 7 runs wide.
            const hero = i === 0;
            const wide = i === 6;
            // The bento is tuned for the 4-col desktop grid. On the 2-col mobile grid a
            // mid-list col-span-2 orphans its neighbours into half-empty rows, so drop it
            // there and instead let the last card fill the row when the tail count is odd.
            const tail = i === top.length - 1 && (top.length - 1) % 2 === 1;
            return (
              <StaggerItem
                key={s.slug}
                className={cn(
                  hero && "col-span-2 lg:row-span-2",
                  wide && "col-span-2 max-sm:col-span-1",
                  tail && "max-sm:col-span-2",
                )}
              >
                <Spotlight className="h-full overflow-hidden rounded-xl sm:rounded-2xl" size={320}>
                  <button
                    onClick={() => onNavigate("services")}
                    className={cn(
                      "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border p-2.5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-2xl sm:p-6",
                      // On the navy band a bg-navy hero card would vanish into the
                      // section, so the hero gets a lit gradient surface and the
                      // siblings a plain glass one.
                      hero
                        ? "border-grape/30 bg-gradient-to-br from-grape/25 via-royal/20 to-transparent text-white hover:border-grape/60"
                        : "border-white/10 bg-white/5 text-white backdrop-blur hover:border-grape/40 hover:bg-white/10",
                    )}
                  >
                    {hero && <div className="absolute inset-0 bg-grid-dark opacity-40" />}
                    <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full bg-grape/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-grape/10 sm:block" />
                    <div className="relative flex h-full flex-col">
                      <div
                        className={cn(
                          "grid place-items-center rounded-lg text-white shadow-soft transition-transform duration-300 group-hover:scale-110 sm:rounded-xl",
                          hero
                            ? "h-10 w-10 bg-cta-gradient sm:h-14 sm:w-14"
                            : "h-8 w-8 bg-gradient-to-br from-grape to-royal sm:h-11 sm:w-11",
                        )}
                      >
                        <s.icon className={cn("h-4 w-4", hero ? "sm:h-7 sm:w-7" : "sm:h-5 sm:w-5")} />
                      </div>
                      <div className="mt-1.5 hidden items-center gap-2 sm:flex">
                        <span className={cn("text-[10px] font-bold uppercase tracking-wider", hero ? "text-cta" : "text-violet-300")}>
                          {s.category}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "mt-1 font-display font-bold leading-tight",
                          hero ? "text-sm text-white sm:text-3xl" : "text-xs text-white sm:text-lg",
                        )}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-0.5 leading-snug sm:mt-1 sm:leading-relaxed",
                          hero
                            ? "max-w-md text-[11px] text-slate-300 sm:text-base"
                            : "line-clamp-2 text-[11px] text-slate-400 sm:line-clamp-none sm:text-sm",
                        )}
                      >
                        {s.short}
                      </p>

                      {/* The hero tile owns a 2×2 block, which leaves ~400px of dead
                          space below the copy at lg. Fill it with a mock of the site
                          the card is selling. Desktop-only: on mobile the tile is
                          short already and filler would just re-bloat it. */}
                      {hero && (
                        <div aria-hidden className="mt-6 hidden lg:block">
                          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur transition-colors duration-500 group-hover:border-grape/30">
                            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2.5">
                              <span className="h-2 w-2 rounded-full bg-white/20" />
                              <span className="h-2 w-2 rounded-full bg-white/20" />
                              <span className="h-2 w-2 rounded-full bg-white/20" />
                              <span className="mx-auto inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-400 ring-1 ring-white/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                yourbusiness.com
                              </span>
                              <span className="w-10" />
                            </div>
                            <div className="space-y-3.5 px-4 py-4">
                              {HERO_FUNNEL.map((f) => (
                                <div key={f.label}>
                                  <div className="flex items-baseline justify-between">
                                    <span className="text-[11px] font-medium text-slate-400">{f.label}</span>
                                    <span className="font-display text-sm font-bold text-white">{f.value}</span>
                                  </div>
                                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                                    <div
                                      className={cn(
                                        "h-full rounded-full bg-cta-gradient transition-transform duration-700 ease-out",
                                        f.w,
                                      )}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center gap-1.5 border-t border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] text-slate-400">
                              <TrendingUp className="h-3.5 w-3.5 text-cta" />
                              Every page built around one job: the next enquiry.
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        className={cn(
                          "mt-2 inline-flex items-center gap-1 text-[11px] font-semibold sm:mt-4 sm:text-sm",
                          hero ? "mt-auto text-cta" : "text-violet-300",
                        )}
                      >
                        Learn more
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                      </div>
                    </div>
                  </button>
                </Spotlight>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ INDUSTRIES PREVIEW ============================ */
function IndustriesPreview({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const top = INDUSTRIES.slice(0, 8);
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-grape/30 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" /> Industries I serve
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-xl font-bold tracking-tight sm:mt-5 sm:text-3xl md:text-5xl">
                I understand <span className="text-gradient-cta">your business</span>, not just your website.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-2 max-w-xl text-xs text-slate-300 sm:mt-4 sm:text-base">
                16 industries served. I know the problems your customers have, the keywords they search for, and the features that turn them into paying clients.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <PremiumButton variant="outline" size="md" onClick={() => onNavigate("industries")} icon={<ArrowRight className="h-4 w-4" />} className="border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/40">
              All 16 industries
            </PremiumButton>
          </Reveal>
        </div>

        <IndustryPicker industries={top} onNavigate={onNavigate} />
      </div>
    </section>
  );
}

/* Pick an industry, the panel below rewrites itself with that industry's pain and fix. */
function IndustryPicker({
  industries,
  onNavigate,
}: {
  industries: typeof INDUSTRIES;
  onNavigate: (p: PageKey) => void;
}) {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <div className="mt-4 sm:mt-8">
      {/* Selector rail */}
      <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:gap-2">
        {industries.map((item, i) => (
          <button
            key={item.slug}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={cn(
              "relative shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm",
              i === active
                ? "border-transparent text-navy"
                : "border-white/15 text-slate-300 hover:border-white/40 hover:text-white",
            )}
          >
            {i === active && (
              <motion.span
                layoutId="industry-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-1.5">
              <item.icon className="h-3.5 w-3.5" />
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:mt-5 sm:rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={ind.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 p-4 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_1.1fr]"
          >
            <div>
              <div className={cn("grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-soft sm:h-14 sm:w-14", ind.accent)}>
                <ind.icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-white sm:mt-5 sm:text-2xl">{ind.title}</h3>
              <p className="mt-1.5 text-xs text-slate-300 sm:mt-2 sm:text-base">{ind.tagline}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {ind.results.slice(0, 3).map((r) => (
                  <div key={r.metric} className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">
                    <div className="font-display text-sm font-extrabold text-gradient-cta sm:text-xl">{r.value}</div>
                    <div className="mt-0.5 text-[11px] leading-tight text-slate-400 sm:text-[11px]">{r.metric}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate("industries")}
                className="group mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cta max-sm:py-2 sm:mt-6 sm:text-sm"
              >
                See the full {ind.title.toLowerCase()} playbook
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Pain → fix */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-xl border border-red-400/20 bg-red-500/5 p-3 sm:rounded-2xl sm:p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-300 sm:text-xs">
                  What&apos;s costing you
                </div>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
                  {ind.problems.slice(0, 3).map((p) => (
                    <li key={p} className="flex gap-1.5 text-[11px] leading-snug text-slate-300 sm:text-xs">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-3 sm:rounded-2xl sm:p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300 sm:text-xs">
                  What I build instead
                </div>
                <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
                  {ind.solutions.slice(0, 3).map((s) => (
                    <li key={s} className="flex gap-1.5 text-[11px] leading-snug text-slate-300 sm:text-xs">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ============================ WHY CHOOSE ============================ */
function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Why work with me"
          title={<>The difference between a website and a <span className="text-gradient-purple">business asset.</span></>}
          subtitle="Six things you get working with me that you won't find at an agency or on Upwork."
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />
        <Stagger className="grid grid-cols-2 gap-2 sm:gap-5 lg:grid-cols-3" stagger={0.07}>
          {WHY_CHOOSE.map((w, i) => (
            <StaggerItem key={w.title}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-grape/40 hover:bg-white/10 hover:shadow-lift sm:rounded-2xl sm:p-7">
                <div className="absolute right-2 top-2 font-display text-2xl font-extrabold text-white/5 transition-colors group-hover:text-grape/20 sm:right-4 sm:top-4 sm:text-5xl">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-grape/30 to-royal/30 text-violet-200 ring-1 ring-grape/30 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl">
                    <w.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-2 font-display text-xs font-bold leading-tight text-white sm:mt-5 sm:text-lg">{w.title}</h3>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-400 sm:mt-1 sm:text-sm sm:leading-relaxed">{w.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ FEATURED PROJECTS ============================ */
function FeaturedProjects({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const top = PROJECTS.slice(0, 3);
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title={<>Real businesses. <span className="text-gradient-purple">Real results.</span></>}
            subtitle="A few recent projects. Every one shipped on time, on budget, and delivered measurable business outcomes."
          />
          <Reveal delay={0.1}>
            <PremiumButton variant="outline" size="md" onClick={() => onNavigate("case-studies")} icon={<ArrowRight className="h-4 w-4" />}>
              View all case studies
            </PremiumButton>
          </Reveal>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {top.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <Tilt max={5}>
              <button
                onClick={() => onNavigate("case-studies")}
                className="group relative block h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-left sm:rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                {/* Visual top — horizontal layout on mobile */}
                <div className="flex sm:block">
                  <div className={cn("relative aspect-[16/10] w-2/5 shrink-0 overflow-hidden sm:w-full", p.accent)}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={p.image}
                      alt={`${p.client} website preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent sm:from-navy/80" />
                    <div className="relative flex h-full flex-col justify-between p-2.5 text-white sm:p-6">
                      <span className="hidden rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur sm:inline-block">
                        {p.industry}
                      </span>
                      <span className="rounded bg-white/20 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider backdrop-blur sm:hidden">
                        {p.industry}
                      </span>
                    </div>
                  </div>

                  {/* Body — next to image on mobile, below on desktop */}
                  <div className="flex flex-1 flex-col justify-between p-2.5 sm:hidden">
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-grape">{p.client}</div>
                      <h3 className="mt-0.5 font-display text-xs font-bold leading-tight text-navy">{p.title}</h3>
                      <p className="mt-1 text-[10px] leading-snug text-slate-600 line-clamp-2">{p.summary}</p>
                    </div>
                    <div className="mt-2 flex gap-3 border-t border-slate-100 pt-1.5">
                      {p.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="font-display text-sm font-extrabold text-gradient-purple">{m.value}</div>
                          <div className="text-[8px] text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body — desktop only */}
                <div className="hidden p-6 sm:block">
                  <div className="text-xs font-semibold uppercase tracking-wider text-grape">{p.client}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-2xl font-extrabold text-gradient-purple">{m.value}</div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ GROWTH STATS (removed — replaced by BigNumber + BeforeAfterSlider) ============================ */

/* ============================ PROCESS TIMELINE (removed — replaced by ProcessTabs) ============================ */

/* ============================ TESTIMONIALS PREVIEW ============================ */
function TestimonialsPreview({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const top = TESTIMONIALS.slice(0, 6);
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Client love"
            title={<>Don&apos;t take my word for it. <span className="text-gradient-purple">Take theirs.</span></>}
            subtitle="Real words from real business owners. Every one of them started exactly where you are right now."
          />
          <Reveal delay={0.1}>
            <PremiumButton variant="outline" size="md" onClick={() => onNavigate("testimonials")} icon={<ArrowRight className="h-4 w-4" />}>
              All testimonials
            </PremiumButton>
          </Reveal>
        </div>

      </div>

      {/* Two rows drifting in opposite directions — hover anywhere to freeze and read */}
      <div className="pause-hover mt-4 space-y-2 sm:mt-8 sm:space-y-4">
        <TestimonialRow items={top.slice(0, 3)} />
        <TestimonialRow items={top.slice(3, 6)} reverse />
      </div>
    </section>
  );
}

function TestimonialRow({ items, reverse }: { items: typeof TESTIMONIALS; reverse?: boolean }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className={cn("flex w-max gap-2 sm:gap-5", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="group relative w-[72vw] shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition-colors hover:border-grape/30 sm:w-[380px] sm:rounded-2xl sm:p-6"
          >
            <Quote className="absolute right-2 top-2 h-5 w-5 text-slate-100 transition-colors group-hover:text-grape/20 sm:right-5 sm:top-5 sm:h-8 sm:w-8" />
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-3 w-3 fill-cta text-cta sm:h-4 sm:w-4" />
              ))}
            </div>
            <p className="mt-2 text-[11px] leading-snug text-slate-700 sm:mt-4 sm:text-sm sm:leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-2 sm:mt-5 sm:gap-3 sm:pt-4">
              <div className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white sm:h-10 sm:w-10 sm:text-xs", t.accent)}>
                {t.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-navy sm:text-sm">{t.name}</div>
                <div className="text-[11px] text-slate-500 sm:text-xs">{t.role}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================ HOME FAQ ============================ */
function HomeFAQ() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          center
          eyebrow="Questions"
          title={<>Answers before <span className="text-gradient-purple">you ask.</span></>}
          subtitle="The most common questions I get on consultation calls. If yours isn't here, just ask me directly."
        />
        <Reveal delay={0.1}>
          <div className="mt-2 sm:mt-8">
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {HOME_FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 transition-colors sm:px-5 data-[state=open]:border-grape/30 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="py-3 text-left font-display text-xs font-bold text-navy hover:no-underline sm:py-5 sm:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-3 text-xs leading-relaxed text-slate-600 sm:pb-5 sm:text-sm sm:leading-relaxed">
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
