"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Play, Pause } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { POS_PRODUCTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const CYCLE_MS = 3800;

/**
 * Interactive overview of the three in-house POS products.
 *
 * Two levels of switching: pick a product, then step through its real screens.
 * The screen reel auto-advances while on-screen and stops for good the moment
 * the visitor takes over, so it demos itself without hijacking interaction.
 */
export function PosShowcase() {
  const [productIdx, setProductIdx] = useState(0);
  const [screenIdx, setScreenIdx] = useState(0);
  const [userDriving, setUserDriving] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });
  const reduceMotion = useReducedMotion();

  const product = POS_PRODUCTS[productIdx];
  const screens = product.screens;
  const screen = screens[screenIdx];
  const playing = inView && !userDriving && !reduceMotion;

  // Auto-advance the screen reel. Only while visible, and never after takeover.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setScreenIdx((i) => (i + 1) % screens.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [playing, screens.length]);

  const pickProduct = (i: number) => {
    setUserDriving(true);
    setProductIdx(i);
    setScreenIdx(0);
  };
  const pickScreen = (i: number) => {
    setUserDriving(true);
    setScreenIdx(i);
  };
  // Warm the next image so switching feels instant rather than flashing empty.
  const prefetch = (src: string) => {
    const img = new window.Image();
    img.src = src;
  };

  return (
    <section className="relative overflow-hidden px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-grape/10 blur-3xl"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="In-house products"
          title={
            <>
              We don&apos;t just build websites.{" "}
              <span className="text-gradient-purple">We build POS systems.</span>
            </>
          }
          subtitle="Three complete point-of-sale platforms, designed and built in-house. Every screen below is a real product — click through them."
        />

        {/* ---- Level 1: product switcher ---- */}
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="POS products"
            className="mt-3 flex gap-1.5 sm:mt-6 sm:gap-2.5"
          >
            {POS_PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              const active = i === productIdx;
              return (
                <button
                  key={p.slug}
                  role="tab"
                  aria-selected={active}
                  aria-controls="pos-screen-panel"
                  onClick={() => pickProduct(i)}
                  onMouseEnter={() => prefetch(p.screens[0].src)}
                  className={cn(
                    // px-1.5/gap-1 buys the ~8px that keeps "Clinic OS" and
                    // "Aura POS" on one line inside a 320px-wide third.
                    // Equal thirds only on phones, where they fill the row; at
                    // desktop widths flex-1 balloons each pill to ~420px.
                    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border px-1.5 py-2.5 text-[11px] font-semibold transition-all duration-300 max-sm:flex-1 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm",
                    active
                      ? "border-transparent bg-navy text-white shadow-lift"
                      : "border-slate-200 bg-white text-slate-600 hover:border-grape/40 hover:text-navy",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7 sm:rounded-lg",
                      p.accent,
                    )}
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                  {p.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-2.5 grid gap-2.5 sm:mt-6 sm:gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          {/* ---- The screen itself, in browser chrome ---- */}
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink shadow-lift sm:rounded-2xl">
              {/* chrome bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-2.5 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
                <div className="flex gap-1 sm:gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                </div>
                <div className="mx-auto inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-0.5 text-[9px] font-medium text-slate-400 ring-1 ring-white/10 sm:px-3 sm:py-1 sm:text-[11px]">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 sm:h-1.5 sm:w-1.5" />
                  {`app.${product.name.toLowerCase().replace(/\s+/g, "")}.com`}
                </div>
                <span className="w-6 sm:w-12" />
              </div>

              {/* screenshot — fixed ratio box so swapping never shifts layout */}
              <div
                id="pos-screen-panel"
                role="tabpanel"
                className="relative aspect-[16/10] bg-ink"
              >
                <AnimatePresence mode="sync">
                  <motion.img
                    key={screen.src}
                    src={screen.src}
                    alt={`${product.name} — ${screen.label} screen`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              {/* ---- Level 2: screen reel ----
                  5 labels wrap to a lone orphan chip on one narrow line, so on
                  mobile lay them out as a 3-col grid: the play button takes the
                  6th cell and the two rows come out exactly full. */}
              <div className="flex flex-wrap items-center gap-1 border-t border-white/10 bg-white/5 px-2 py-2 max-sm:grid max-sm:grid-cols-3 sm:gap-1.5 sm:px-3 sm:py-2.5">
                {screens.map((s, i) => (
                  <button
                    key={s.src}
                    onClick={() => pickScreen(i)}
                    onMouseEnter={() => prefetch(s.src)}
                    aria-current={i === screenIdx}
                    className={cn(
                      "rounded-full px-2 py-1.5 text-[10px] font-semibold transition-all duration-300 max-sm:py-2.5 sm:px-3 sm:py-2 sm:text-xs",
                      i === screenIdx
                        ? "bg-white text-navy"
                        : "text-slate-400 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {s.label}
                  </button>
                ))}
                {/* play state — also the manual resume affordance */}
                <button
                  onClick={() => setUserDriving((d) => !d)}
                  aria-label={playing ? "Pause screen tour" : "Play screen tour"}
                  className="ml-auto inline-flex items-center justify-center gap-1 rounded-full px-2 py-1.5 text-[10px] font-medium text-slate-400 transition-colors hover:text-white max-sm:ml-0 max-sm:py-2.5 sm:py-2 sm:text-xs"
                >
                  {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                  <span className="tabular-nums">
                    {screenIdx + 1}/{screens.length}
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          {/* ---- Product detail ---- */}
          <Reveal delay={0.16}>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-2xl sm:p-6">
              <h3 className="font-display text-base font-bold text-navy sm:text-2xl">
                {product.name}
              </h3>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-grape sm:mt-1 sm:text-sm">
                {product.tagline}
              </p>
              <p className="mt-2 text-pretty text-[11px] leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                {product.description}
              </p>

              <ul className="mt-2.5 grid grid-cols-2 gap-x-2 gap-y-1.5 sm:mt-5 sm:grid-cols-1 sm:gap-2">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-1.5 text-[11px] text-slate-700 sm:items-center sm:gap-2 sm:text-sm"
                  >
                    <span className="mt-0.5 inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-grape/10 text-grape sm:mt-0 sm:h-4 sm:w-4">
                      <Check className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal max-sm:w-full sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
              >
                Explore the full {product.name} page
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
