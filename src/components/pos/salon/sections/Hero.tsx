"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SHOTS } from "../data";
import { BrowserFrame } from "../ui/Frames";
import { LeadModal } from "@/components/site/lead-modal";

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-4 sm:pt-28 lg:pt-32 lg:pb-8">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#f8fafc] blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-[#eef1f7] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left — copy — centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#e6eaf1] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#364258] shadow-premium backdrop-blur"
            >
              <span className="flex h-1.5 w-1.5">
                <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-[#4a9d7f] opacity-75" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a9d7f]" />
              </span>
              The operating system for modern salons
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-[#141c2f] text-balance sm:mt-6 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02] lg:text-left"
            >
              Run Your Entire Salon{" "}
              <span className="relative whitespace-nowrap">
                From One
              </span>{" "}
              <span className="text-[#6f7c95]">Beautiful Platform.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 max-w-xl text-sm leading-relaxed text-[#6f7c95] text-pretty sm:mt-6 sm:text-lg lg:text-left"
            >
              Appointments, POS, clients, memberships, inventory, payroll, reporting,
              and business intelligence — everything your salon needs in one elegant
              operating system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 flex w-full flex-col items-center gap-2.5 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3 lg:justify-start"
            >
              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#141c2f] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#364258] hover:shadow-float sm:px-6 sm:py-3.5"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
              <a
                href="#showcase"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#e6eaf1] bg-white px-5 py-3 text-sm font-semibold text-[#141c2f] transition-all hover:border-[#cdd5e3] hover:bg-[#f8fafc] sm:px-6 sm:py-3.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f8fafc] ring-1 ring-[#e6eaf1] transition-colors group-hover:bg-white">
                  <Play className="h-2.5 w-2.5 fill-[#141c2f] text-[#141c2f]" />
                </span>
                Watch Product Tour
              </a>
            </motion.div>

          </div>

          {/* Right — floating layered screenshots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[640px] lg:mx-0"
            style={{ perspective: "1800px" }}
          >
            {/* Glow behind */}
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#f8fafc] via-transparent to-[#eef1f7] blur-2xl" />

            {/* Main dashboard — perspective tilt */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotateY: 8, rotateX: 4 }}
              animate={{ opacity: 1, y: 0, rotateY: -4, rotateX: 2 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative z-20"
            >
              <BrowserFrame url="app.aurapos.com/dashboard" className="shadow-glow">
                <div className="relative aspect-[16/11] overflow-hidden">
                  { }
                  <img
                    src={SHOTS.dashboard}
                    alt="Aura POS dashboard showing revenue, bookings, and occupancy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </BrowserFrame>
            </motion.div>

            {/* Floating: Calendar — top right */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-2 -top-3 z-30 w-28 rounded-xl border border-[#e6eaf1] bg-white p-1.5 shadow-float animate-float sm:-right-8 sm:-top-6 sm:w-52 sm:p-2 lg:-right-12"
            >
              <div className="overflow-hidden rounded-lg">
                { }
                <img
                  src={SHOTS.calendar}
                  alt="Aura POS smart calendar"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-1.5 px-1 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a9d7f]" />
                <span className="text-[10px] font-medium text-[#6f7c95]">Calendar synced</span>
              </div>
            </motion.div>

            {/* Floating: POS — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-2 z-30 w-32 rounded-xl border border-[#e6eaf1] bg-white p-1.5 shadow-float animate-float-slow sm:-left-8 sm:-bottom-10 sm:w-56 sm:p-2 lg:-left-12"
            >
              <div className="overflow-hidden rounded-lg">
                { }
                <img
                  src={SHOTS.pos}
                  alt="Aura POS checkout screen"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-1.5 px-1 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#364258]" />
                <span className="text-[10px] font-medium text-[#6f7c95]">Checkout &lt; 1s</span>
              </div>
            </motion.div>

            {/* Floating: KPI pill — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-3 top-16 z-30 hidden rounded-xl border border-[#e6eaf1] bg-white/90 px-3.5 py-2.5 shadow-float backdrop-blur sm:block lg:-left-6"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f5f1]">
                  <span className="text-sm">↗</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#141c2f]">+$18,420</div>
                  <div className="text-[10px] text-[#6f7c95]">Revenue today</div>
                </div>
              </div>
            </motion.div>

            {/* Floating: Clients — bottom right (hidden on small) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 right-8 z-30 hidden w-32 rounded-xl border border-[#e6eaf1] bg-white p-1.5 shadow-float lg:block"
            >
              <div className="overflow-hidden rounded-lg">
                { }
                <img
                  src={SHOTS.clients}
                  alt="Aura POS client management"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </section>
  );
}
