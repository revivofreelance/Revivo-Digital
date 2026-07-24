"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  IndianRupee,
  LayoutGrid,
  BarChart3,
  Trophy,
  BellRing,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, Reveal, FloatingStatCard } from "./primitives";

/* ------------------------------------------------------------------ */
/*  Hotspot — pulsing dot with a glass tooltip on hover/focus         */
/* ------------------------------------------------------------------ */
type Side = "right" | "left" | "top" | "bottom";

const sideClass: Record<Side, string> = {
  right: "left-[20px] top-1/2 -translate-y-1/2",
  left: "right-[20px] top-1/2 -translate-y-1/2",
  top: "bottom-[20px] left-1/2 -translate-x-1/2",
  bottom: "top-[20px] left-1/2 -translate-x-1/2",
};

function Hotspot({
  x,
  y,
  side,
  icon: Icon,
  title,
  desc,
}: {
  x: number;
  y: number;
  side: Side;
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  const [active, setActive] = React.useState(false);

  return (
    <div
      className="pointer-events-auto absolute z-30"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <button
        type="button"
        aria-label={title}
        className="relative flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full max-sm:before:absolute max-sm:before:-inset-2.5 max-sm:before:content-['']"
      >
        {/* pulse */}
        <span className="absolute inset-0 m-auto h-3 w-3 origin-center rounded-full bg-brand-orange/40 [animation:hotspot-ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
        {/* dot */}
        <span className="relative h-3 w-3 rounded-full bg-brand-orange ring-[3px] ring-white shadow-[0_2px_8px_oklch(0.628_0.193_41/0.5)] transition-transform duration-300 group-hover:scale-110" />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: side === "top" ? 6 : -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: side === "top" ? 6 : -4 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute w-[calc(100vw-3rem)] max-w-[15rem] rounded-2xl border border-black/[0.07] bg-white/95 p-3 shadow-premium backdrop-blur-xl sm:w-56 sm:p-3.5 ${sideClass[side]}`}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.04_55)] to-[oklch(0.9_0.06_45)] text-brand-orange">
                <Icon className="h-4 w-4" strokeWidth={1.9} />
              </span>
              <span className="text-[13px] font-semibold tracking-tight text-brand-espresso">
                {title}
              </span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const hotspots = [
  {
    x: 17,
    y: 33,
    side: "right" as Side,
    icon: IndianRupee,
    title: "Live KPI cards",
    desc: "Revenue, orders, covers and profit — recalculated in real time as sales land.",
  },
  {
    x: 80,
    y: 31,
    side: "left" as Side,
    icon: LayoutGrid,
    title: "Quick actions",
    desc: "Jump straight into a new order, run a report or edit the menu without leaving home.",
  },
  {
    x: 48,
    y: 60,
    side: "top" as Side,
    icon: BarChart3,
    title: "Sales trends",
    desc: "Hourly revenue and covers visualised live, so you spot the rush before it peaks.",
  },
  {
    x: 30,
    y: 82,
    side: "right" as Side,
    icon: Trophy,
    title: "Top performers",
    desc: "Best-selling dishes and categories ranked automatically across the day.",
  },
  {
    x: 73,
    y: 80,
    side: "left" as Side,
    icon: BellRing,
    title: "Smart alerts",
    desc: "Low-stock and 86'd items surface instantly — never sell what you can't fulfil.",
  },
];

export function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden py-7 sm:py-10">
      {/* warm ambient bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.58_0.13_55/0.08),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Analytics dashboard"
          labelIcon={<TrendingUp className="h-3.5 w-3.5" />}
          title="Your restaurant, on one beautiful screen."
          description="Stop waiting for end-of-day reports. Revenue, profit, covers and growth — all live, all in one place, the moment they happen."
        />

        <Reveal>
          <p className="mt-4 flex items-center justify-center gap-2 text-[12.5px] font-medium text-muted-foreground">
            <MousePointerClick className="h-3.5 w-3.5 text-brand-orange" />
            Hover the markers on the dashboard to explore each action
          </p>
        </Reveal>

        <div className="relative mx-auto mt-6 max-w-4xl">
          {/* Two floating accent cards for context */}
          <FloatingStatCard
            label="Today's revenue"
            value="₹1,84,920"
            delta="+18.4%"
            icon={<IndianRupee className="h-4.5 w-4.5" />}
            className="-left-2 top-[4%] sm:-left-12"
            delay={0.1}
          />
          <FloatingStatCard
            label="Growth"
            value="28.1%"
            delta="MoM"
            icon={<TrendingUp className="h-4.5 w-4.5" />}
            className="-right-2 bottom-[8%] sm:-right-14"
            delay={0.2}
          />

          {/* MacBook with interactive hotspots */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto"
          >
            {/* Screen */}
            <div className="relative rounded-[18px] border border-black/10 bg-[oklch(0.18_0.01_50)] p-[10px] shadow-premium-lg">
              {/* screen container — overflow visible so tooltips can escape */}
              <div className="relative">
                {/* camera notch */}
                <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[6px] w-[60px] -translate-x-1/2 rounded-b-md bg-[oklch(0.12_0.01_50)]" />
                {/* image clip */}
                <div className="relative overflow-hidden rounded-[10px] bg-white">
                  <img
                    src="/pos-media/restaurant/02-dashboard.png"
                    alt="Mise analytics dashboard"
                    className="block w-full"
                  />
                </div>
                {/* hotspots overlay — matches the image box, allows tooltip overflow */}
                <div className="pointer-events-none absolute inset-0">
                  {hotspots.map((h) => (
                    <Hotspot key={h.title} {...h} />
                  ))}
                </div>
              </div>
            </div>
            {/* Hinge + base */}
            <div className="relative mx-auto h-[14px] w-[112%] -translate-x-[5.3%] rounded-b-[14px] rounded-t-[4px] bg-gradient-to-b from-[oklch(0.42_0.01_50)] to-[oklch(0.28_0.01_50)] shadow-[0_8px_24px_-8px_oklch(0.2_0.01_50/0.4)]">
              <div className="absolute left-1/2 top-[3px] h-[5px] w-[16%] -translate-x-1/2 rounded-full bg-[oklch(0.18_0.01_50)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
