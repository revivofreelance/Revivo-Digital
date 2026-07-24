"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { GradientButton, GhostButton, useParallax } from "./primitives";
import { LeadModal } from "@/components/site/lead-modal";

const SHOTS = {
  dashboard: "/pos-media/restaurant/02-dashboard.png",
  newOrder: "/pos-media/restaurant/01-new-order.png",
  kitchen: "/pos-media/restaurant/03-kitchen-display.png",
};

function LayerCard({
  src,
  alt,
  className,
  rotateY = 0,
  rotateX = 0,
  z = 0,
  float = "slow",
  delay = 0,
  shadowClass = "shadow-screenshot",
}: {
  src: string;
  alt: string;
  className?: string;
  rotateY?: number;
  rotateX?: number;
  z?: number;
  float?: "slow" | "medium" | "none";
  delay?: number;
  shadowClass?: string;
}) {
  const floatClass =
    float === "slow" ? "animate-float-slow" : float === "medium" ? "animate-float-medium" : "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
      style={{ rotateY, rotateX, z, transformStyle: "preserve-3d" }}
    >
      <div className={`relative ${floatClass}`}>
        <div className={`overflow-hidden rounded-xl border border-black/[0.07] bg-white ${shadowClass}`}>
          <img src={src} alt={alt} className="block h-full w-full object-cover object-top" />
        </div>
        {/* glass reflection */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(125deg, oklch(1 0 0 / 0.32) 0%, oklch(1 0 0 / 0.06) 24%, transparent 46%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { ref, offset } = useParallax(reduce ? 0 : 12);
  const [demoOpen, setDemoOpen] = React.useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial-faded opacity-60" />
        <div className="absolute left-1/2 top-[-8%] h-[540px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.68_0.19_42/0.18),transparent_60%)] blur-2xl" />
        <div className="absolute right-[6%] top-[18%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.13_55/0.12),transparent_65%)] blur-2xl" />
        <div className="absolute left-[2%] bottom-[6%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.12_70/0.1),transparent_65%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-5 pb-8 text-center lg:grid-cols-[1.04fr_1fr] lg:gap-6 lg:pb-12 lg:text-left">
        {/* Left — copy */}
        <div className="relative z-10 mx-auto max-w-xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3 py-1.5 text-[12px] font-medium text-brand-espresso/70 shadow-sm backdrop-blur-sm"
          >
            <span className="flex -space-x-1.5">
              <span className="h-4 w-4 rounded-full bg-[oklch(0.68_0.19_42)]" />
              <span className="h-4 w-4 rounded-full bg-[oklch(0.58_0.13_55)]" />
              <span className="h-4 w-4 rounded-full bg-[oklch(0.45_0.04_50)]" />
            </span>
            <span className="uppercase tracking-[0.14em]">The modern restaurant platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-brand-espresso sm:text-6xl lg:text-[4.1rem] lg:leading-[0.98]"
          >
            Restaurant POS built for{" "}
            <span className="text-gradient-warm">modern</span> restaurants.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-lg text-pretty text-[13.5px] leading-relaxed text-muted-foreground sm:text-[17.5px]"
          >
            Everything from ordering, kitchen operations, inventory, waitlists, billing,
            analytics and customer management — in one beautifully designed platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
          >
            <GradientButton onClick={() => setDemoOpen(true)} className="px-5 py-3 text-[13.5px] sm:px-7 sm:py-3.5 sm:text-[15px]">
              Request demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </GradientButton>
            <GhostButton href="#showcase" className="px-5 py-3 text-[13.5px] sm:px-6 sm:py-3.5 sm:text-[15px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-espresso text-white">
                <Play className="h-2.5 w-2.5 translate-x-px fill-current" />
              </span>
              Watch product tour
            </GhostButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted-foreground sm:text-[13px] lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-orange" />
              SOC 2 ready · Offline-first
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-orange" />
              Sub-second billing
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 text-brand-orange" />
              4.9/5 from 1,200+ owners
            </span>
          </motion.div>
        </div>

        {/* Right — floating layered showcase */}
        {/* Mobile: clean single full-width screenshot (symmetric, no empty right space) */}
        <div className="relative lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-screenshot"
          >
            <img
              src={SHOTS.dashboard}
              alt="Restaurant analytics dashboard"
              className="block w-full"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(125deg, oklch(1 0 0 / 0.22) 0%, oklch(1 0 0 / 0.04) 24%, transparent 46%)",
              }}
            />
          </motion.div>
          {/* floating revenue chip */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border border-black/[0.06] bg-white/95 px-3.5 py-2.5 shadow-premium backdrop-blur-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.04_55)] to-[oklch(0.9_0.06_45)] text-brand-orange">
              <Zap className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-[10.5px] font-medium uppercase tracking-wide text-muted-foreground">
                Today&apos;s revenue
              </div>
              <div className="text-[15px] font-semibold tracking-tight text-brand-espresso">
                ₹1,84,920
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop: clean composed showcase — focal dashboard + two tilted accents + glass chips */}
        <div
          ref={ref}
          className="relative hidden h-[560px] lg:block"
          style={{ perspective: "1800px" }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              rotateY: offset.x * 0.35,
              rotateX: -offset.y * 0.35,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Soft grounding glow */}
            <div className="absolute bottom-[2%] left-1/2 h-[110px] w-[72%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,oklch(0.5_0.16_45/0.2),transparent_70%)] blur-2xl" />

            {/* Back-left accent — New Order, gently tilted, sits behind */}
            <LayerCard
              src={SHOTS.newOrder}
              alt="New Order screen"
              delay={0.32}
              float="slow"
              className="left-[-3%] top-[14%] w-[40%]"
              rotateY={18}
              rotateX={4}
              z={-80}
              shadowClass="shadow-premium-lg"
            />

            {/* Back-right accent — Kitchen, gently tilted, sits behind */}
            <LayerCard
              src={SHOTS.kitchen}
              alt="Kitchen Display System"
              delay={0.4}
              float="medium"
              className="right-[-3%] top-[16%] w-[40%]"
              rotateY={-18}
              rotateX={4}
              z={-80}
              shadowClass="shadow-premium-lg"
            />

            {/* Focal — Dashboard, front center, slight tilt */}
            <LayerCard
              src={SHOTS.dashboard}
              alt="Restaurant analytics dashboard"
              delay={0.15}
              float="slow"
              className="left-1/2 top-[8%] w-[62%] -translate-x-1/2"
              rotateY={-2}
              rotateX={1}
              z={60}
              shadowClass="shadow-premium-lg"
            />

            {/* Floating glass stat chip — anchors to dashboard top-right */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-[14%] top-[2%] z-40 hidden items-center gap-2.5 rounded-2xl border border-black/[0.06] bg-white/90 px-3.5 py-2.5 shadow-premium backdrop-blur-xl lg:flex"
              style={{ rotateY: -6, rotateX: 2, z: 180, transformStyle: "preserve-3d" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.04_55)] to-[oklch(0.9_0.06_45)] text-brand-orange">
                <Zap className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[10.5px] font-medium uppercase tracking-wide text-muted-foreground">
                  Today&apos;s revenue
                </div>
                <div className="text-[15px] font-semibold tracking-tight text-brand-espresso">
                  ₹1,84,920
                </div>
              </div>
            </motion.div>

            {/* Floating glass stat chip — anchors to dashboard bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[2%] left-[16%] z-40 hidden items-center gap-2.5 rounded-2xl border border-black/[0.06] bg-white/90 px-3.5 py-2.5 shadow-premium backdrop-blur-xl lg:flex"
              style={{ rotateY: 6, rotateX: -2, z: 180, transformStyle: "preserve-3d" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.95_0.04_150)] to-[oklch(0.9_0.06_150)] text-[oklch(0.5_0.14_150)]">
                <Star className="h-4 w-4 fill-current" />
              </span>
              <div className="leading-tight">
                <div className="text-[10.5px] font-medium uppercase tracking-wide text-muted-foreground">
                  Avg. rating
                </div>
                <div className="text-[15px] font-semibold tracking-tight text-brand-espresso">
                  4.9 / 5.0
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}
