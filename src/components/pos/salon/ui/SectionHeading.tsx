import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal direction="fade" duration={0.5}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6eaf1] bg-[#f8fafc] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#364258] sm:px-3 sm:py-1 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#364258]" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.05} duration={0.65}>
        <h2
          className={cn(
            "text-2xl font-semibold tracking-tight text-[#141c2f] text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]",
            align === "center" ? "max-w-3xl" : "max-w-2xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.12} duration={0.65}>
          <p
            className={cn(
              "text-sm leading-relaxed text-[#6f7c95] text-pretty sm:text-lg",
              align === "center" ? "max-w-2xl" : "max-w-xl",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
