import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Browser chrome wrapper that frames a screenshot like a premium product shot.
 * Used throughout the landing page to present real Aura POS screenshots.
 */
interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
  url?: string;
  showBar?: boolean;
}

export function BrowserFrame({
  children,
  className,
  url = "app.aurapos.com",
  showBar = true,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#e6eaf1] bg-white shadow-premium",
        className,
      )}
    >
      {showBar && (
        <div className="flex items-center gap-3 border-b border-[#e6eaf1] bg-[#f8fafc] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
            <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
            <span className="h-3 w-3 rounded-full bg-[#e6eaf1]" />
          </div>
          <div className="mx-auto flex w-full max-w-xs items-center justify-center">
            <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-[#6f7c95] ring-1 ring-[#e6eaf1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9d7f]" />
              {url}
            </div>
          </div>
          <div className="w-12" />
        </div>
      )}
      <div className="relative bg-white">{children}</div>
    </div>
  );
}

/**
 * Desktop monitor mockup — wraps a screenshot as if displayed on a premium display.
 */
interface MonitorFrameProps {
  children: ReactNode;
  className?: string;
}

export function MonitorFrame({ children, className }: MonitorFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {/* The screen */}
      <div className="relative overflow-hidden rounded-2xl border border-[#1e2a44] bg-[#141c2f] p-2 shadow-float">
        <div className="overflow-hidden rounded-xl border border-[#1e2a44] bg-white">
          {children}
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto mt-3 h-5 w-24 rounded-b-lg bg-gradient-to-b from-[#cdd5e3] to-[#e6eaf1]" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-[#e6eaf1]" />
    </div>
  );
}

/**
 * A small floating screenshot card — used in layered hero compositions.
 */
interface FloatingShotProps {
  src: string;
  alt: string;
  className?: string;
  float?: "none" | "slow" | "normal";
  priority?: boolean;
}

export function FloatingShot({
  src,
  alt,
  className,
  float = "none",
  priority,
}: FloatingShotProps) {
  const floatClass =
    float === "normal"
      ? "animate-float"
      : float === "slow"
        ? "animate-float-slow"
        : "";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[#e6eaf1] bg-white shadow-premium",
        floatClass,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="block h-full w-full object-cover object-top"
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
