"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Browser frame mockup — premium macOS Safari/Chrome style chrome.
 */
export function BrowserFrame({
  children,
  className,
  url = "app.clinicos.io",
  showToolbar = true,
}: {
  children: ReactNode;
  className?: string;
  url?: string;
  showToolbar?: boolean;
}) {
  return (
    <div className={cn("browser-frame", className)}>
      {showToolbar && (
        <div className="browser-bar flex items-center gap-3 px-4 py-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-90" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-90" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] opacity-90" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white/70 border border-black/[0.04] text-[11px] text-muted-foreground font-mono min-w-[200px] justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50">
                <path d="M3 4.5a2 2 0 114 0v.5a.5.5 0 001 0V4.5a3 3 0 10-6 0v1.5H2a1 1 0 00-1 1V8a1 1 0 001 1h5a1 1 0 001-1V6a1 1 0 00-1-1H3V4.5z" fill="currentColor"/>
              </svg>
              <span>{url}</span>
            </div>
          </div>
          <div className="w-12" />
        </div>
      )}
      <div className="relative bg-white overflow-hidden">{children}</div>
    </div>
  );
}

/**
 * Desktop monitor mockup — for executive dashboard / large screens.
 */
export function MonitorFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative rounded-2xl bg-[#1a2b28] p-3 shadow-premium-lg">
        <div className="rounded-xl overflow-hidden bg-white">{children}</div>
      </div>
      <div className="mx-auto w-32 h-5 bg-gradient-to-b from-[#1a2b28] to-[#0F2A26] rounded-b-2xl -mt-1" />
      <div className="mx-auto w-48 h-1.5 bg-[#0F2A26] rounded-full mt-1" />
    </div>
  );
}

/**
 * Tablet mockup — portrait iPad style.
 */
export function TabletFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-[28px] bg-[#0F2A26] p-2 shadow-premium-lg">
        <div className="rounded-[20px] overflow-hidden bg-white">{children}</div>
      </div>
    </div>
  );
}

/**
 * Eyebrow label — small uppercase label above headings.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow text-emerald-700/80",
        className
      )}
    >
      <span className="w-6 h-px bg-emerald-600/40" />
      {children}
    </div>
  );
}

/**
 * Section heading block.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  size = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  size?: "default" | "sm";
  className?: string;
}) {
  const titleClass =
    size === "sm" ? "text-headline mt-3" : "text-display-sm mt-4";
  const descClass =
    size === "sm"
      ? "mt-2 text-[12.5px] lg:text-base text-muted-foreground leading-relaxed text-pretty"
      : "mt-2.5 text-[12.5px] sm:text-[14px] lg:text-lg text-muted-foreground leading-relaxed text-pretty";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={cn(titleClass, "text-balance text-foreground")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            descClass,
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * CTA button — primary emerald.
 */
export function PrimaryButton({
  children,
  className,
  href = "#",
  size = "md",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-base",
  };
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "bg-emerald-700 text-white shadow-[0_4px_14px_rgba(5,150,105,0.35)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.45)]",
    "transition-all duration-300 hover:-translate-y-0.5",
    sizes[size],
    className
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

/**
 * Secondary CTA — ghost glass.
 */
export function GhostButton({
  children,
  className,
  href = "#",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-12 px-6 text-base",
  };
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "bg-white text-foreground border border-black/[0.08] hover:border-emerald-600/30 hover:bg-emerald-50/40",
        "transition-all duration-300 hover:-translate-y-0.5",
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
}

/**
 * HoverCallout — premium interactive hotspot placed on top of a screenshot.
 * On hover (or tap on mobile), a glass popover appears explaining what's at that position.
 *
 * Position with absolute + top/left % relative to the screenshot container.
 */
export function HoverCallout({
  label,
  description,
  top,
  left,
  align = "right",
  variant = "emerald",
  delay = 0,
}: {
  label: string;
  description: string;
  top: string;
  left: string;
  align?: "left" | "right";
  variant?: "emerald" | "teal" | "amber";
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  const colors = {
    emerald: "bg-emerald-600 ring-emerald-600/20",
    teal: "bg-teal-600 ring-teal-600/20",
    amber: "bg-amber-500 ring-amber-500/20",
  };
  const dotColor = colors[variant];

  return (
    <div
      className="absolute z-30 group hidden lg:block"
      style={{ top, left }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Hotspot dot */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative block w-4 h-4"
        aria-label={label}
      >
        <span className={cn("absolute inset-0 rounded-full ring-4", dotColor)} />
        <span className={cn("absolute inset-0 rounded-full animate-pulse-ring opacity-60", dotColor)} />
        <span className="absolute -inset-1 rounded-full border border-white/60" />
      </button>

      {/* Popover card */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-60 transition-all duration-300",
          align === "right" ? "left-7" : "right-7",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="glass rounded-2xl p-3.5 shadow-premium">
          <div className="flex items-center gap-1.5 mb-1">
            <span className={cn("w-1.5 h-1.5 rounded-full", dotColor)} />
            <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-medium">
              {label}
            </span>
          </div>
          <p className="text-[12.5px] text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>
        {/* connector */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-5 h-px bg-emerald-600/40",
            align === "right" ? "-left-5" : "-right-5"
          )}
        />
      </div>
    </div>
  );
}

/**
 * FloatingSectionCard — small glass info card floating next to a section heading
 * to provide a quick "About this section" blurb.
 */
export function FloatingSectionCard({
  icon,
  label,
  text,
  className,
}: {
  icon?: ReactNode;
  label: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl px-4 py-3 shadow-premium max-w-xs",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        {icon && (
          <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
            {icon}
          </div>
        )}
        <span className="text-eyebrow text-emerald-700">{label}</span>
      </div>
      <p className="text-[12.5px] text-foreground/75 leading-relaxed">{text}</p>
    </div>
  );
}
