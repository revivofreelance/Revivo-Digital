"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Reveal — fade + translate on scroll into view                     */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "span" | "li" | "section" | "h2" | "p";
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger container + item                                          */
/* ------------------------------------------------------------------ */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  SectionLabel — eyebrow / kicker                                   */
/* ------------------------------------------------------------------ */
export function SectionLabel({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-[12.5px] font-medium tracking-wide text-brand-espresso/70 backdrop-blur-sm shadow-sm",
        className,
      )}
    >
      {icon && <span className="text-brand-orange">{icon}</span>}
      <span className="uppercase tracking-[0.14em]">{children}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeading                                                    */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  labelIcon,
  className,
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  labelIcon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:gap-5",
        align === "center"
          ? "items-center text-center mx-auto max-w-2xl"
          : "items-center text-center lg:items-start lg:text-left",
        className,
      )}
    >
      {label && (
        <Reveal>
          <SectionLabel icon={labelIcon}>{label}</SectionLabel>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="text-balance text-[1.5rem] font-semibold leading-[1.12] tracking-[-0.02em] text-brand-espresso sm:text-4xl md:text-[2.85rem] md:leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="text-pretty text-[12.5px] leading-relaxed text-muted-foreground sm:text-base md:text-[17px] md:leading-relaxed mx-auto max-w-xl lg:mx-0">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screenshot — consistent styling for product images               */
/* ------------------------------------------------------------------ */
export function Screenshot({
  src,
  alt,
  className,
  imgClassName,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-card", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover object-top", imgClassName)}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  BrowserFrame — elegant window chrome around a screenshot         */
/* ------------------------------------------------------------------ */
export function BrowserFrame({
  children,
  className,
  url = "app.mise.pos",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/[0.06] bg-card shadow-screenshot",
        className,
      )}
    >
      {/* Top chrome */}
      <div className="flex items-center gap-2 border-b border-black/[0.05] bg-gradient-to-b from-[oklch(0.975_0.005_70)] to-[oklch(0.96_0.006_70)] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.18_30)]/80" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.12_70)]/80" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.6_0.1_140)]/70" />
        </div>
        <div className="ml-3 hidden flex-1 items-center sm:flex">
          <div className="flex items-center gap-2 rounded-md border border-black/[0.05] bg-white/70 px-3 py-1 text-[11px] text-muted-foreground">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            {url}
          </div>
        </div>
      </div>
      <div className="relative bg-white">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MacBookFrame — premium laptop mockup                             */
/* ------------------------------------------------------------------ */
export function MacBookFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Screen */}
      <div className="relative rounded-[18px] border border-black/10 bg-[oklch(0.18_0.01_50)] p-[10px] shadow-premium-lg">
        <div className="relative overflow-hidden rounded-[10px] bg-white">
          {/* camera notch */}
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[6px] w-[60px] -translate-x-1/2 rounded-b-md bg-[oklch(0.12_0.01_50)]" />
          {children}
        </div>
      </div>
      {/* Hinge + base */}
      <div className="relative mx-auto h-[14px] w-[112%] -translate-x-[5.3%] rounded-b-[14px] rounded-t-[4px] bg-gradient-to-b from-[oklch(0.42_0.01_50)] to-[oklch(0.28_0.01_50)] shadow-[0_8px_24px_-8px_oklch(0.2_0.01_50/0.4)]">
        <div className="absolute left-1/2 top-[3px] h-[5px] w-[16%] -translate-x-1/2 rounded-full bg-[oklch(0.18_0.01_50)]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GradientButton — primary CTA with warm gradient + sheen          */
/* ------------------------------------------------------------------ */
export function GradientButton({
  children,
  className,
  href = "#",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[14.5px] font-semibold text-white shadow-warm transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0",
    className,
  );
  const inner = (
    <>
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.68_0.19_42)] to-[oklch(0.52_0.18_38)]"
        aria-hidden
      />
      {children}
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  GhostButton — secondary outline button                           */
/* ------------------------------------------------------------------ */
export function GhostButton({
  children,
  className,
  href = "#",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-[14.5px] font-semibold text-brand-espresso backdrop-blur-sm transition-all duration-300 hover:border-black/15 hover:bg-white hover:shadow-sm",
    className,
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  FloatingStatCard — small metric chip used in dashboard section   */
/* ------------------------------------------------------------------ */
export function FloatingStatCard({
  label,
  value,
  delta,
  icon,
  className,
  delay = 0,
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute z-20 hidden items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/90 p-3 pr-4 shadow-premium backdrop-blur-xl sm:flex",
        className,
      )}
    >
      {icon && (
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-orange">
          {icon}
        </div>
      )}
      <div className="leading-tight">
        <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-[17px] font-semibold tracking-tight text-brand-espresso">
            {value}
          </span>
          {delta && (
            <span className="text-[11px] font-semibold text-[oklch(0.5_0.14_150)]">{delta}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  useParallax — subtle pointer parallax                              */
/* ------------------------------------------------------------------ */
export function useParallax(strength = 20) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setOffset({ x: dx * strength, y: dy * strength });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength]);

  return { ref, offset };
}
