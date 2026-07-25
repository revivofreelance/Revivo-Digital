"use client";

import {
  AnimatePresence, motion, useInView, useMotionValue,
  useReducedMotion, useScroll, useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Reveal: scroll-triggered fade/slide up ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Stagger: container with staggered children ---------------- */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- AnimatedCounter ---------------- */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const animate = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------------- Magnetic: button that subtly follows cursor ---------------- */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- ScrollProgress: reading bar pinned under the navbar ---------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-grape via-royal to-cta"
    />
  );
}

/* ---------------- Spotlight: radial glow that tracks the cursor ---------------- */
export function Spotlight({
  children,
  className,
  size = 460,
  color = "rgba(124, 58, 237, 0.16)",
}: {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn("relative", className)}
      style={{ ["--spot-size" as string]: `${size}px`, ["--spot-color" as string]: color }}
    >
      {!reduce && (
        <div
          aria-hidden
          className={cn(
            "spotlight-layer pointer-events-none absolute inset-0 z-0 transition-opacity duration-500",
            active ? "opacity-100" : "opacity-0",
          )}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ---------------- Tilt: card that leans toward the cursor ---------------- */
export function Tilt({
  children,
  className,
  max = 8,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={cn("h-full [transform-style:preserve-3d]", className)}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- RotatingWord: headline word that cycles ---------------- */
export function RotatingWord({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  // Reserve the width of the longest word so the headline never reflows mid-cycle.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={cn("relative inline-grid", className)}>
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ opacity: 0, y: "0.4em", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.4em", filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap text-left"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ---------------- AuroraBackground: animated gradient blobs ---------------- */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-grape/20 blur-3xl animate-aurora" />
      <div className="absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-royal/20 blur-3xl animate-aurora" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-cta/10 blur-3xl animate-aurora" style={{ animationDelay: "8s" }} />
    </div>
  );
}

/* ---------------- Eyebrow: small label above headings ---------------- */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full border border-grape/15 bg-grape/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-grape sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-grape animate-pulse" />
      {children}
    </div>
  );
}

/* ---------------- SectionHeading: reusable eyebrow + title + subtitle ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  // Centring is desktop-only: consumers put left-aligned cards or copy directly
  // below, so a centred heading reads as misalignment in one narrow column.
  return (
    <div className={cn(center && "mx-auto text-center max-sm:text-left", "max-w-2xl", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={center ? "mx-auto max-sm:mx-0" : ""}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      {/* Mobile type is a size down from desktop's: every section pays for this
          heading, so ~40px saved here is ~400px off the phone page. */}
      <Reveal delay={0.05}>
        <h2 className="mt-1.5 text-balance text-xl font-bold tracking-tight text-navy max-sm:leading-[1.15] sm:mt-3 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={cn("mt-1.5 text-pretty text-[13px] text-slate-600 max-sm:leading-snug sm:mt-3 sm:text-lg", center && "mx-auto max-sm:mx-0")}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- PremiumButton: reusable CTA ---------------- */
export function PremiumButton({
  children,
  onClick,
  variant = "cta",
  size = "lg",
  className,
  icon,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "cta" | "navy" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-grape/40 focus-visible:ring-offset-2";
  const sizes = {
    sm: "px-3.5 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2.5 text-xs sm:px-5 sm:text-sm",
    lg: "px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base",
  };
  const variants = {
    cta: "bg-cta-gradient text-white shadow-glow-cta hover:shadow-[0_30px_70px_-20px_rgba(249,115,22,0.65)] hover:-translate-y-0.5",
    navy: "bg-navy text-white shadow-lift hover:bg-ink hover:-translate-y-0.5",
    outline: "border border-slate-300 bg-white/70 text-navy backdrop-blur hover:border-grape hover:bg-white hover:-translate-y-0.5",
    ghost: "text-navy hover:bg-slate-100",
  };

  const cls = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {variant === "cta" && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -inset-y-4 -left-2 w-12 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[180%]" />
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
