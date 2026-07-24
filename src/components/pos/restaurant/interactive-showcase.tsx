"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, type MotionValue } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import { BrowserFrame } from "./primitives";

const steps = [
  {
    tag: "Step 01",
    title: "See your whole business at a glance",
    desc: "Live revenue, orders, covers and profit — updated in real time. Spot trends the moment they happen, not at end of day.",
    shot: "/pos-media/restaurant/02-dashboard.png",
    points: ["Real-time revenue & profit", "Hourly order trends", "Top performers & alerts"],
  },
  {
    tag: "Step 02",
    title: "Take orders in seconds, not minutes",
    desc: "Category navigation, quick picks and live search let your staff build any order instantly — even during the rush.",
    shot: "/pos-media/restaurant/01-new-order.png",
    points: ["One-tap category browsing", "Smart dish search", "Modifiers & notes built-in"],
  },
  {
    tag: "Step 03",
    title: "Run a calm, organised kitchen",
    desc: "Every ticket flows to the kitchen display with timers and clear status. New, preparing, ready, served — everyone knows what to do next.",
    shot: "/pos-media/restaurant/03-kitchen-display.png",
    points: ["Live ticket routing", "Prep timers & alerts", "One-tap status updates"],
  },
  {
    tag: "Step 04",
    title: "Control your menu like a product catalog",
    desc: "Categories, variants, availability, pricing, cost and margins — all editable in one place. Push changes to every outlet instantly.",
    shot: "/pos-media/restaurant/07-menu.png",
    points: ["Variants & add-ons", "86 items in one tap", "Live margin & cost tracking"],
  },
  {
    tag: "Step 05",
    title: "Turn the wait into a great first impression",
    desc: "Smart waitlist with estimated wait times, SMS notifications and one-tap table assignment. Guests feel cared for before they sit down.",
    shot: "/pos-media/restaurant/06-waitlist.png",
    points: ["Live estimated wait times", "Automatic guest notifications", "One-tap table assignment"],
  },
];

const TOTAL = steps.length;

function Layer({
  progress,
  index,
  src,
  alt,
}: {
  progress: MotionValue<number>;
  index: number;
  src: string;
  alt: string;
}) {
  const opacity = useTransform(progress, (p) => {
    const seg = 1 / TOTAL;
    const center = index * seg + seg / 2;
    const dist = Math.abs(p - center) / seg;
    return dist < 0.5 ? 1 : Math.max(0, 1 - (dist - 0.5) * 4);
  });
  const scale = useTransform(progress, (p) => {
    const seg = 1 / TOTAL;
    const center = index * seg + seg / 2;
    const dist = Math.abs(p - center) / seg;
    return 1 - dist * 0.04;
  });
  const y = useTransform(progress, (p) => {
    const seg = 1 / TOTAL;
    const center = index * seg + seg / 2;
    const dist = (p - center) / seg;
    return dist * 30;
  });

  return (
    <motion.div
      style={{ opacity, scale, y, transformStyle: "preserve-3d" }}
      className="absolute inset-0"
    >
      <BrowserFrame className="h-full w-full" url="app.mise.pos">
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
      </BrowserFrame>
    </motion.div>
  );
}

export function InteractiveShowcase() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = React.useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(TOTAL - 1, Math.floor(p * TOTAL));
    setActive(idx);
  });

  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="showcase" className="relative py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.14em] text-brand-espresso/70 shadow-sm">
            Interactive tour
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-brand-espresso sm:text-4xl md:text-[2.85rem]">
            Scroll through the entire platform.
          </h2>
          <p className="flex items-center gap-2 text-[14px] text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce text-brand-orange" />
            Keep scrolling — the product follows you.
          </p>
        </div>
      </div>

      {/* Sticky scroll stage */}
      <div ref={ref} className="relative mt-12" style={{ height: `${TOTAL * 90}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left — text */}
            <div className="relative order-2 lg:order-1">
              {/* progress rail */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-black/[0.06] lg:block">
                <motion.div className="absolute left-0 top-0 w-px bg-brand-orange" style={{ height: railHeight }} />
              </div>

              <div className="lg:pl-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                        {steps[active].tag}
                      </span>
                      <span className="h-px flex-1 bg-black/[0.08]" />
                      <span className="text-[12px] font-medium text-muted-foreground">
                        {active + 1} / {TOTAL}
                      </span>
                    </div>
                    <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] text-brand-espresso sm:text-[1.9rem]">
                      {steps[active].title}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                      {steps[active].desc}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {steps[active].points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-[14px] text-brand-espresso/80">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[oklch(0.96_0.04_55)] text-brand-orange">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right — screenshot stage */}
            <div className="relative order-1 h-[300px] sm:h-[440px] lg:order-2 lg:h-[560px]">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_center,oklch(0.68_0.19_42/0.12),transparent_65%)] blur-2xl" />
              <div className="relative h-full w-full" style={{ perspective: "1600px" }}>
                {steps.map((s, i) => (
                  <Layer key={s.tag} progress={scrollYProgress} index={i} src={s.shot} alt={s.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
