"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LeadModal } from "@/components/site/lead-modal";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Why Mise", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[oklch(0.68_0.19_42)] to-[oklch(0.5_0.18_38)] shadow-warm">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4v16M5 12h6M15 4v16M19 4v16" />
        </svg>
      </span>
      <span className="text-[18px] font-semibold tracking-tight text-brand-espresso">
        Mise
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [demoOpen, setDemoOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "border border-black/[0.06] bg-white/80 shadow-premium backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-brand-espresso/70 transition-colors hover:bg-black/[0.03] hover:text-brand-espresso"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="group inline-flex items-center gap-1 rounded-full bg-brand-espresso px-4 py-2 text-[13.5px] font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[oklch(0.2_0.014_45)]"
          >
            Request demo
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-espresso md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-black/[0.06] bg-white/95 p-3 shadow-premium backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-brand-espresso/80 hover:bg-black/[0.03]"
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setDemoOpen(true);
                }}
                className="mt-2 rounded-xl bg-brand-espresso px-3 py-2.5 text-center text-[15px] font-semibold text-white"
              >
                Request demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </>
  );
}
