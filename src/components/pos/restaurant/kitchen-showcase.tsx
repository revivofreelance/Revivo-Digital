"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BellRing, Flame, CheckCircle2, Utensils, Clock } from "lucide-react";
import { SectionHeading, Reveal, BrowserFrame } from "./primitives";

const stages = [
  {
    icon: BellRing,
    title: "New orders",
    desc: "Tickets land instantly the moment they're sent.",
    accent: "from-[oklch(0.68_0.19_42/0.12)] to-transparent",
    color: "text-brand-orange",
  },
  {
    icon: Flame,
    title: "Preparing",
    desc: "Chef accepts and the prep timer starts counting.",
    accent: "from-[oklch(0.7_0.16_55/0.12)] to-transparent",
    color: "text-[oklch(0.55_0.16_55)]",
  },
  {
    icon: CheckCircle2,
    title: "Ready",
    desc: "A clear visual cue — food is ready to plate.",
    accent: "from-[oklch(0.6_0.12_150/0.1)] to-transparent",
    color: "text-[oklch(0.5_0.14_150)]",
  },
  {
    icon: Utensils,
    title: "Served",
    desc: "Mark served and the ticket archives cleanly.",
    accent: "from-[oklch(0.5_0.05_250/0.08)] to-transparent",
    color: "text-[oklch(0.45_0.05_250)]",
  },
];

export function KitchenShowcase() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % stages.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          label="Kitchen display"
          labelIcon={<Flame className="h-3.5 w-3.5" />}
          title="A kitchen that runs itself calmly."
          description="Every order flows through four clear stages. Timers, colour cues and one-tap status keep the whole line in sync — even on your busiest night."
        />

        <div className="mt-6 grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Screenshot (first on phone, right on desktop) */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,oklch(0.55_0.16_55/0.1),transparent_70%)] blur-2xl" />
              <BrowserFrame className="shadow-screenshot" url="app.mise.pos">
                <img
                  src="/pos-media/restaurant/03-kitchen-display.png"
                  alt="Kitchen display system"
                  className="block w-full"
                />
              </BrowserFrame>
              <AnimatePresence>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -right-3 top-[14%] hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3 py-2 shadow-premium backdrop-blur-xl sm:flex"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.04_55)] to-[oklch(0.92_0.06_45)] text-brand-orange">
                    {(() => {
                      const Icon = stages[active].icon;
                      return <Icon className="h-4 w-4" />;
                    })()}
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      Now showing
                    </div>
                    <div className="text-[13px] font-semibold text-brand-espresso">
                      {stages[active].title}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Workflow (second on phone, left on desktop) */}
          <Reveal className="order-2 lg:order-1">
            <div>
              {/* Mobile: compact 2-column grid */}
              <div className="grid grid-cols-2 gap-2.5 lg:hidden">
                {stages.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  return (
                    <div
                      key={s.title}
                      className={`relative flex flex-col rounded-xl border p-3 transition-all duration-500 ${
                        isActive
                          ? "border-black/[0.1] bg-white shadow-premium"
                          : "border-black/[0.05] bg-white/60"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-500 ${
                          isActive
                            ? "border-transparent bg-white shadow-sm"
                            : "border-black/[0.06] bg-[oklch(0.95_0.01_70)]"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${isActive ? s.color : "text-muted-foreground"}`} />
                      </div>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                          0{i + 1}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
                        )}
                      </div>
                      <h3 className="mt-0.5 text-[12.5px] font-semibold tracking-tight text-brand-espresso">
                        {s.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              {/* Desktop: full stage list */}
              <div className="hidden space-y-3 lg:block">
                {stages.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === active;
                  const isDone = i < active;
                  return (
                    <div
                      key={s.title}
                      className={`relative flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                        isActive
                          ? "border-black/[0.1] bg-white shadow-premium"
                          : "border-black/[0.05] bg-white/50"
                      }`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r ${s.accent} opacity-0 transition-opacity duration-500 ${
                          isActive ? "opacity-100" : ""
                        }`}
                      />
                      <div
                        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                          isActive
                            ? "border-transparent bg-white shadow-sm"
                            : isDone
                              ? "border-black/[0.06] bg-[oklch(0.95_0.01_70)]"
                              : "border-black/[0.06] bg-white"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? s.color : "text-muted-foreground"}`} />
                        {isActive && (
                          <span className="pointer-events-none absolute -inset-1 rounded-2xl ring-1 ring-brand-orange/30" />
                        )}
                      </div>
                      <div className="relative min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                            Stage 0{i + 1}
                          </span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/10 px-2 py-0.5 text-[10px] font-semibold text-brand-orange">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
                              Live
                            </span>
                          )}
                        </div>
                        <h3 className="mt-0.5 text-[15px] font-semibold tracking-tight text-brand-espresso">
                          {s.title}
                        </h3>
                        <p className="text-[12.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed border-black/[0.1] bg-[oklch(0.97_0.005_70)] px-3 py-2.5 text-[11.5px] text-muted-foreground sm:px-4 sm:py-3 sm:text-[12.5px]">
                <Clock className="h-4 w-4 shrink-0 text-brand-orange" />
                Average ticket moves through the line in{" "}
                <span className="font-semibold text-brand-espresso">9 min 42 sec</span>.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
