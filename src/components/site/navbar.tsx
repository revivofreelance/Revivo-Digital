"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, ArrowRight } from "lucide-react";
import { NAV_ITEMS, type PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { PremiumButton, Magnetic } from "./primitives";

export function Navbar({
  current,
  onNavigate,
  onCTA,
}: {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (page: PageKey) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between sm:h-16 lg:h-18">
          {/* Logo — extreme left */}
          <button
            onClick={() => handleNav("home")}
            className="group flex shrink-0 items-center gap-2.5 sm:gap-4 focus:outline-none"
            aria-label="Go to home"
          >
            <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-navy text-white shadow-lift sm:h-12 sm:w-12">
              <span className="absolute inset-0 bg-gradient-to-br from-grape via-royal to-navy opacity-90" />
              <span className="relative font-display text-xl font-extrabold tracking-tight sm:text-2xl">R</span>
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cta animate-pulse" />
            </span>
            <div className="flex flex-col items-start gap-0.5 leading-none sm:gap-1">
              <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-navy sm:text-lg">
                Revivo
              </span>
              <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.18em] lg:text-[9px] lg:tracking-[0.1em] xl:text-xs xl:tracking-[0.18em]">
                Brings your customers back
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex lg:gap-0.5 xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 lg:px-2.5 lg:text-[13px] xl:px-4 xl:text-sm",
                  current === item.key
                    ? "text-navy"
                    : "text-slate-600 hover:text-navy"
                )}
              >
                {current === item.key && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-grape/10 ring-1 ring-grape/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Magnetic className="hidden md:block" strength={0.25}>
              <PremiumButton
                size="sm"
                onClick={onCTA}
                icon={<ArrowRight className="h-4 w-4" />}
                className="lg:px-3 lg:py-1.5 lg:text-xs xl:px-4 xl:py-2 xl:text-sm"
              >
                Free Consultation
              </PremiumButton>
            </Magnetic>
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/70 backdrop-blur transition-colors hover:bg-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 overflow-hidden lg:hidden"
            >
              <div className="glass-card rounded-2xl p-3 shadow-lift">
                <div className="grid grid-cols-2 gap-1">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNav(item.key)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                        current === item.key
                          ? "bg-grape/10 text-grape"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="mt-2 grid gap-2 border-t border-slate-200/70 pt-3">
                  <PremiumButton size="md" onClick={() => { onCTA(); setMobileOpen(false); }} className="w-full">
                    Book Free Consultation
                  </PremiumButton>
                  <a
                    href="mailto:revivodigitals@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-3 py-2.5 text-xs font-semibold text-navy hover:bg-slate-50 sm:px-5 sm:text-sm"
                  >
                    <Mail className="h-4 w-4" /> revivodigitals@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
