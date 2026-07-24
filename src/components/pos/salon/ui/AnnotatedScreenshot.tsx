"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Hotspot {
  /** Horizontal position as a percentage of the image width (0–100). */
  x: number;
  /** Vertical position as a percentage of the image height (0–100). */
  y: number;
  /** Short label shown in uppercase inside the callout. */
  label: string;
  /** One-sentence explanation of this part of the system. */
  desc: string;
}

interface AnnotatedScreenshotProps {
  src: string;
  alt: string;
  hotspots: Hotspot[];
  url: string;
  className?: string;
}

/**
 * AnnotatedScreenshot — a browser-framed product screenshot overlaid with
 * interactive hotspot pins. Hover (desktop) or tap (mobile) a pin to reveal
 * a premium glass callout explaining that part of the system.
 *
 * The image is clipped to rounded corners, but the hotspot layer is allowed
 * to overflow so callouts near edges are never cut off.
 */
export function AnnotatedScreenshot({
  src,
  alt,
  hotspots = [],
  url,
  className,
}: AnnotatedScreenshotProps) {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-[#e6eaf1] bg-white shadow-float",
        className,
      )}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-3 rounded-t-2xl border-b border-[#e6eaf1] bg-[#f8fafc] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
          <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
          <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-[#6f7c95] ring-1 ring-[#e6eaf1]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4a9d7f]" />
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>

      {/* Image + hotspot layer */}
      <div className="relative">
        {/* Image — clipped to bottom corners */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-b-2xl">
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
          />
          {/* Subtle vignette so pins read clearly on any screenshot */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#141c2f]/0 via-[#141c2f]/0 to-[#141c2f]/5"
          />
        </div>

        {/* Hotspot layer — not clipped, so callouts can overflow cleanly */}
        <div className="pointer-events-none absolute inset-0">
          {hotspots.map((h, i) => {
            const isOpen = active === i;
            // Vertical: open below by default, above if pin sits low.
            const openUp = h.y > 58;
            // Horizontal: center on pin, but clamp toward the frame if near an edge.
            const horizClass =
              h.x < 22
                ? "left-0"
                : h.x > 78
                  ? "right-0"
                  : "left-1/2 -translate-x-1/2";
            return (
              <div
                key={i}
                className="pointer-events-auto absolute"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                {/* Pin button */}
                <button
                  type="button"
                  aria-label={`${h.label}: ${h.desc}`}
                  aria-expanded={isOpen}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(isOpen ? null : i)}
                  className="group relative flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#364258] focus-visible:ring-offset-2 focus-visible:ring-offset-white max-sm:before:absolute max-sm:before:-inset-2 max-sm:before:content-['']"
                >
                  {/* Pulsing sonar ring — draws attention when idle */}
                  {!isOpen && !reduce && (
                    <span
                      aria-hidden
                      className="animate-pulse-ring absolute inset-0 rounded-full bg-[#364258]/25"
                    />
                  )}
                  {/* Pin dot */}
                  <span
                    className={cn(
                      "relative flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold shadow-float transition-all duration-200",
                      isOpen
                        ? "scale-110 bg-[#141c2f] text-white ring-2 ring-white"
                        : "bg-white text-[#364258] ring-2 ring-[#364258] group-hover:ring-[#141c2f] group-hover:bg-[#141c2f] group-hover:text-white",
                    )}
                  >
                    {i + 1}
                  </span>
                </button>

                {/* Callout card */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={
                        reduce
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.92, y: openUp ? 6 : -6 }
                      }
                      animate={
                        reduce
                          ? { opacity: 1 }
                          : { opacity: 1, scale: 1, y: 0 }
                      }
                      exit={
                        reduce
                          ? { opacity: 0 }
                          : { opacity: 0, scale: 0.92, y: openUp ? 6 : -6 }
                      }
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "absolute z-30 w-40 rounded-xl border border-[#e6eaf1] bg-white/95 p-2.5 shadow-float backdrop-blur sm:w-48 sm:p-3",
                        horizClass,
                        openUp ? "bottom-full mb-3" : "top-full mt-3",
                      )}
                    >
                      {/* Tiny caret pointing at the pin */}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute h-2.5 w-2.5 rotate-45 border bg-white",
                          openUp
                            ? "bottom-[-5px] left-1/2 -translate-x-1/2 border-b border-r border-[#e6eaf1]"
                            : "top-[-5px] left-1/2 -translate-x-1/2 border-l border-t border-[#e6eaf1]",
                          h.x < 22 && "left-2 translate-x-0",
                          h.x > 78 && "left-auto right-2 translate-x-0",
                        )}
                      />
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#364258]" />
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#364258] sm:text-[11px]">
                          {h.label}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] leading-snug text-[#6f7c95] sm:text-[11px]">
                        {h.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Hint badge — fades out once a pin is opened */}
        <AnimatePresence>
          {active === null && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#364258] shadow-premium backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#364258] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#364258]" />
              </span>
              Hover pins to explore
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
