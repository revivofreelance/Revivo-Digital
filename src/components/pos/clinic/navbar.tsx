"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "./primitives";
import { LeadModal } from "@/components/site/lead-modal";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflows", href: "#workflows" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Customers", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full transition-all duration-500",
            scrolled
              ? "glass shadow-premium px-5 py-2.5"
              : "bg-transparent px-5 py-3"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-[0_4px_12px_rgba(5,150,105,0.3)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
            </div>
            <span className="font-semibold text-[17px] tracking-tight text-foreground">
              Clinic<span className="text-emerald-700">OS</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-black/[0.03]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <PrimaryButton onClick={() => setDemoOpen(true)} size="sm">
              Book Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </PrimaryButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={cn("block w-5 h-0.5 bg-foreground transition-all", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 bg-foreground transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-foreground transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-premium">
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/[0.04] rounded-lg"
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-border my-2" />
              <PrimaryButton
                onClick={() => {
                  setMobileOpen(false);
                  setDemoOpen(true);
                }}
                className="w-full mt-1"
              >
                Book Demo
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </header>
  );
}
