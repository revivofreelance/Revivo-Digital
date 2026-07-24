"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn("pt-12 sm:pt-16", className)}
    >
      {children}
    </motion.main>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-1 pt-5 sm:px-6 sm:pb-6 sm:pt-12 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-aurora-soft" />
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-grape/15 bg-grape/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-grape sm:px-3.5 sm:py-1.5 sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-grape animate-pulse" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 text-balance text-3xl font-bold tracking-tight text-navy sm:mt-3 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-2xl text-pretty text-sm text-slate-600 sm:mt-3 sm:text-lg md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
