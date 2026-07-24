"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SHOTS } from "../data";
import { Reveal } from "../ui/Reveal";
import {
  AnnotatedScreenshot,
  type Hotspot,
} from "../ui/AnnotatedScreenshot";

/**
 * A single product showcase block — a screenshot paired with descriptive copy.
 *
 * MOBILE reading order (intentional):
 *   1. Eyebrow + Title  (heading leads the reader in)
 *   2. Screenshot        (the visual, with interactive hotspot pins)
 *   3. Description + bullets  (the detail)
 *
 * DESKTOP: a clean two-column grid — text (heading + detail) in one column,
 * screenshot in the other, alternating left/right by index. No row-span gaps.
 */
export interface ShowcaseItem {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  /** Key into the SHOTS registry (e.g. "calendar", "pos"). */
  shot: string;
  /** Browser-chrome URL shown above the framed screenshot. */
  url: string;
  /** Interactive hotspot annotations layered over the screenshot. */
  hotspots: Hotspot[];
}

export interface ProductShowcaseProps {
  item: ShowcaseItem;
  /** 0-based position; controls left/right alternation on desktop. */
  index: number;
}

export function ProductShowcase({ item, index }: ProductShowcaseProps) {
  const isEven = index % 2 === 0;

  // Resolve the screenshot source from the SHOTS registry, with a safe fallback.
  const shotSrc =
    (SHOTS as Record<string, string>)[item.shot] ?? SHOTS.dashboard;

  // Direction semantics (see Reveal.tsx):
  //   direction="right" → starts at x:-offset, slides right (enters from left)
  //   direction="left"  → starts at x:+offset, slides left  (enters from right)
  const textDirection = isEven ? "right" : "left";
  const shotDirection = isEven ? "left" : "right";

  // ---- Shared content blocks (rendered in different wrappers for mobile/desktop) ----

  const headingBlock = (
    <>
      {/* Eyebrow with a short horizontal line */}
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-[#364258]/30" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#364258]">
          {item.eyebrow}
        </span>
      </div>
      <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight text-[#141c2f] sm:mt-4 sm:text-3xl">
        {item.title}
      </h3>
    </>
  );

  const shotBlock = (direction: "left" | "right") => (
    <Reveal direction={direction} duration={0.75} amount={0.25} className="relative">
      <div className="relative">
        {/* Decorative soft-gray glow behind the frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#f8fafc] blur-3xl"
        />
        <AnnotatedScreenshot
          src={shotSrc}
          alt={`${item.eyebrow} — ${item.title}`}
          url={item.url}
          hotspots={item.hotspots}
        />
      </div>
    </Reveal>
  );

  const detailBlock = (direction: "left" | "right") => (
    <Reveal direction={direction} duration={0.7} amount={0.3} className="flex flex-col">
      <p className="max-w-xl text-pretty text-sm leading-relaxed text-[#6f7c95] sm:text-base">
        {item.description}
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3">
        {item.bullets.map((bullet, i) => (
          <Reveal
            key={bullet}
            direction="up"
            duration={0.5}
            delay={0.12 + i * 0.06}
            amount={0.2}
          >
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#f0f5f1]">
                <Check className="h-3 w-3 text-[#4a9d7f]" strokeWidth={2.5} />
              </span>
              <span className="text-xs font-medium text-[#141c2f] sm:text-sm">
                {bullet}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Reveal>
  );

  return (
    <>
      {/* ===== Mobile: heading → screenshot → detail ===== */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div>{headingBlock}</div>
        {shotBlock(shotDirection)}
        {detailBlock(textDirection)}
      </div>

      {/* ===== Desktop: two-column grid, text column + screenshot column ===== */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Text column — heading + detail stacked together (no row-span gap) */}
        <div className={cn("flex flex-col", isEven ? "lg:order-1" : "lg:order-2")}>
          <Reveal direction={textDirection} duration={0.7} amount={0.3}>
            {headingBlock}
            <div className="mt-4">
              {/* detail content flows directly under heading with a small gap */}
              <p className="max-w-xl text-pretty text-base leading-relaxed text-[#6f7c95]">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {item.bullets.map((bullet, i) => (
                  <Reveal
                    key={bullet}
                    direction="up"
                    duration={0.5}
                    delay={0.12 + i * 0.06}
                    amount={0.2}
                  >
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#f0f5f1]">
                        <Check className="h-3 w-3 text-[#4a9d7f]" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-[#141c2f]">
                        {bullet}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Screenshot column */}
        <div className={cn(isEven ? "lg:order-2" : "lg:order-1")}>
          {shotBlock(shotDirection)}
        </div>
      </div>
    </>
  );
}
