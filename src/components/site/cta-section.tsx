"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { PremiumButton, Reveal, AuroraBackground } from "./primitives";

export function CTASection({
  title,
  subtitle,
  cta = "Let's talk",
  secondary,
  onCTA,
  onSecondary,
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  secondary?: string;
  onCTA: () => void;
  onSecondary?: () => void;
}) {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy px-4 py-5 shadow-lift sm:px-5 sm:py-8 sm:rounded-[2rem] sm:px-12 sm:py-14">
            <AuroraBackground />
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
                <Sparkles className="h-3 w-3 text-cta sm:h-3.5 sm:w-3.5" /> Let&apos;s build something premium
              </div>
              <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
                {title || <>A website that <span className="text-gradient-cta">pays for itself</span> in 90 days.</>}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-slate-300 sm:mt-4 sm:text-base">
                {subtitle || "Free 30-minute consultation. No pressure, no jargon. You leave with a clear plan — even if we don't end up working together."}
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                <PremiumButton size="lg" onClick={onCTA} icon={<ArrowRight className="h-4 w-4" />}>
                  {cta}
                </PremiumButton>
                {secondary && onSecondary && (
                  <PremiumButton variant="outline" size="lg" onClick={onSecondary} className="border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/40">
                    {secondary}
                  </PremiumButton>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
