"use client";

import { ArrowRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { NAV_ITEMS, ALL_PAGES, type PageKey } from "@/lib/site-data";
import { PremiumButton } from "./primitives";

export function Footer({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  const handleNav = (page: PageKey) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-slate-300">
      {/* Aurora wash */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-grape/30 blur-3xl" />
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-cta/15 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA strip */}
        <div className="grid gap-4 border-b border-white/10 py-8 sm:py-14 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3.5 w-3.5 text-cta" /> Ready when you are
            </div>
            <h2 className="mt-2.5 text-balance text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
              Let&apos;s build a website that <span className="text-gradient-cta">brings you more customers.</span>
            </h2>
            <p className="mt-2 max-w-xl text-pretty text-slate-300 max-sm:text-sm sm:mt-3">
              Free 30-minute consultation. No pressure, no jargon. You leave the call with a clear plan — even if we don&apos;t end up working together.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <PremiumButton size="lg" onClick={onCTA} icon={<ArrowRight className="h-4 w-4" />}>
              Book Free Consultation
            </PremiumButton>
            <a
              href="mailto:revivodigitals@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white max-sm:py-2 md:justify-end"
            >
              <Mail className="h-4 w-4" /> revivodigitals@gmail.com
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-4 py-6 sm:gap-6 sm:py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand — spans full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <button onClick={() => handleNav("home")} className="flex items-center gap-3 sm:gap-4">
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 sm:h-12 sm:w-12">
                <span className="absolute inset-0 bg-gradient-to-br from-grape via-royal to-navy opacity-80" />
                <span className="relative font-display text-xl font-extrabold text-white sm:text-2xl">R</span>
              </span>
              <div className="flex flex-col items-start gap-0.5 leading-none sm:gap-1">
                <span className="font-display text-sm font-bold text-white sm:text-lg">Revivo</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.18em]">Brings your customers back</span>
              </div>
            </button>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400 sm:mt-5 sm:text-sm">
              Independent freelance software engineer building premium digital experiences for local businesses. Based in Bengaluru, working worldwide.
            </p>
          </div>

          {/* Pages — left column */}
          <div className="text-left">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.18em]">Explore</h3>
            <ul className="mt-2 space-y-0 sm:mt-4 sm:space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleNav(item.key)}
                    className="text-xs text-slate-300 transition-colors hover:text-white max-sm:block max-sm:w-full max-sm:py-2 max-sm:text-left sm:text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More — second column; left-aligned to match Explore beside it */}
          <div className="flex flex-col items-start">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.18em]">More</h3>
            <ul className="mt-2 space-y-0 text-left sm:mt-4 sm:space-y-2.5 sm:text-left">
              {ALL_PAGES.filter((p) => !NAV_ITEMS.find((n) => n.key === p.key)).map((item) => (
                <li key={item.key} className="text-left sm:text-left">
                  <button
                    onClick={() => handleNav(item.key)}
                    className="text-xs text-slate-300 transition-colors hover:text-white max-sm:block max-sm:w-full max-sm:py-2 max-sm:text-left sm:text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.18em]">Get in touch</h3>
            <ul className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-4 sm:grid-cols-1 sm:gap-3">
              <li className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cta sm:h-4 sm:w-4" />
                <a href="mailto:revivodigitals@gmail.com" className="hover:text-white max-sm:inline-block max-sm:py-2">revivodigitals@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cta sm:h-4 sm:w-4" />
                <span>Indiranagar, Bengaluru, India</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-300 sm:text-sm">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cta sm:h-4 sm:w-4" />
                <span>Mon–Fri, 9am–7pm IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-4 text-[11px] text-slate-400 sm:gap-3 sm:py-6 sm:text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Revivo. Crafted with care. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav("legal")} className="hover:text-white max-sm:py-2">Privacy</button>
            <button onClick={() => handleNav("legal")} className="hover:text-white max-sm:py-2">Terms</button>
            <button onClick={() => handleNav("legal")} className="hover:text-white max-sm:py-2">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
