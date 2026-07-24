"use client";

import { KPIS, SHOTS } from "../data";
import { MonitorFrame } from "../ui/Frames";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { cn } from "@/lib/utils";

type Kpi = (typeof KPIS)[number];

interface KpiCardProps {
  kpi: Kpi;
  float?: "normal" | "slow";
  className?: string;
}

/**
 * Small floating KPI card — premium, minimal, numeric.
 * The float animation lives on this element; the entrance animation is
 * handled by a wrapping <Reveal>, so transforms never conflict.
 */
function KpiCard({ kpi, float = "normal", className }: KpiCardProps) {
  const floatClass = float === "slow" ? "animate-float-slow" : "animate-float";
  return (
    <div
      className={cn(
        "w-full rounded-xl border border-[#E6EAF1] bg-white px-3 py-2.5 shadow-float sm:w-[152px] sm:px-4 sm:py-3",
        floatClass,
        className,
      )}
    >
      <div className="text-[11px] font-medium uppercase tracking-wide text-[#6F7C95] sm:text-[11px]">
        {kpi.label}
      </div>
      <div className="mt-1 text-lg font-semibold tracking-tight text-[#141C2F] tabular-nums sm:text-xl">
        <AnimatedCounter
          value={kpi.value}
          prefix={kpi.prefix}
          suffix={kpi.suffix}
        />
      </div>
      <div className="mt-0.5 text-[11px] leading-snug text-[#6F7C95] sm:text-[11px]">
        {kpi.desc}
      </div>
    </div>
  );
}

/**
 * Floating positions for the 7 KPI cards around the monitor.
 * On <lg, all cards collapse into a simple grid below the monitor.
 * Offsets scale up at xl/2xl so cards sit further out on wider viewports.
 */
const FLOAT_POSITIONS: { className: string; float: "normal" | "slow" }[] = [
  // 0 — Revenue Today — top-left
  {
    className:
      "lg:absolute lg:top-[3%] lg:-left-8 xl:-left-16 2xl:-left-20 lg:z-20",
    float: "slow",
  },
  // 1 — Bookings — top-right
  {
    className:
      "lg:absolute lg:top-[3%] lg:-right-8 xl:-right-16 2xl:-right-20 lg:z-20",
    float: "normal",
  },
  // 2 — Occupancy — top-center, hovering above the monitor bezel
  {
    className:
      "lg:absolute lg:-top-7 lg:left-1/2 lg:-translate-x-1/2 lg:z-20",
    float: "slow",
  },
  // 3 — Client Growth — mid-left
  {
    className:
      "lg:absolute lg:top-[42%] lg:-left-10 xl:-left-20 2xl:-left-24 lg:-translate-y-1/2 lg:z-20",
    float: "normal",
  },
  // 4 — Daily Goal — mid-right
  {
    className:
      "lg:absolute lg:top-[42%] lg:-right-10 xl:-right-20 2xl:-right-24 lg:-translate-y-1/2 lg:z-20",
    float: "slow",
  },
  // 5 — Avg. Ticket — bottom-left (kept above the stand)
  {
    className:
      "lg:absolute lg:bottom-[16%] lg:-left-8 xl:-left-16 2xl:-left-20 lg:z-20",
    float: "normal",
  },
  // 6 — Staff On Duty — bottom-right
  {
    className:
      "lg:absolute lg:bottom-[16%] lg:-right-8 xl:-right-16 2xl:-right-20 lg:z-20",
    float: "slow",
  },
];

export function DashboardShowcase() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-white py-4 sm:py-8"
    >
      {/* Subtle radial glow behind the monitor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8FAFC] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eef1f7] opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Command Center"
          title="Your salon, at a glance."
          subtitle="A live snapshot of revenue, bookings, occupancy, and staff the moment you sign in. No dashboards to build, no reports to run — just signal."
          align="center"
        />

        {/* Monitor + floating KPIs */}
        <div className="relative mt-4 lg:mt-8">
          {/* Outer relative wrapper — holds the monitor + absolutely positioned KPI cards */}
          <div className="relative mx-auto max-w-4xl">
            {/* The monitor */}
            <Reveal
              direction="scale"
              duration={0.85}
              delay={0.05}
              className="relative z-10"
            >
              <MonitorFrame>
                <div className="relative aspect-[16/10] overflow-hidden">
                  { }
                  <img
                    src={SHOTS.dashboard}
                    alt="Aura POS dashboard — revenue, bookings, occupancy, and goals in one calm view"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </MonitorFrame>
            </Reveal>

            {/* Floating KPI cards — lg+ only */}
            {KPIS.map((kpi, i) => {
              const pos = FLOAT_POSITIONS[i];
              return (
                <div key={kpi.label} className={cn("hidden", pos.className)}>
                  <Reveal
                    direction="scale"
                    delay={0.35 + i * 0.08}
                    duration={0.6}
                  >
                    <KpiCard kpi={kpi} float={pos.float} />
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet — KPIs in a 2-col grid below the monitor */}
          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-4 lg:hidden">
            {KPIS.map((kpi, i) => (
              <Reveal
                key={kpi.label}
                direction="up"
                delay={i * 0.04}
                duration={0.5}
              >
                <KpiCard kpi={kpi} float="normal" className="w-full" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <Reveal direction="fade" delay={0.2}>
          <p className="mt-4 text-center text-xs text-[#6F7C95] sm:mt-6 sm:text-sm">
            Every metric updates in real time — across every device and every location.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
