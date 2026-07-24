"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data";
import { cn } from "@/lib/utils";
import { LeadModal } from "@/components/site/lead-modal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled && "h-14",
        )}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#141c2f] text-white">
            <span className="text-sm font-bold tracking-tight">A</span>
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#141c2f]">
            Aura<span className="text-[#6f7c95]"> POS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#6f7c95] transition-colors hover:bg-[#f8fafc] hover:text-[#141c2f]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="group inline-flex items-center gap-1.5 rounded-lg bg-[#141c2f] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#364258] hover:shadow-premium"
          >
            Book a Demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#141c2f] transition-colors hover:bg-[#f8fafc] lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Scroll progress bar / glass background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-full border-b transition-all duration-300",
          scrolled
            ? "border-[#e6eaf1] bg-white/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <span className="text-[15px] font-semibold tracking-tight text-[#141c2f]">
                Aura<span className="text-[#6f7c95]"> POS</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[#141c2f] hover:bg-[#f8fafc]"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
            <motion.nav
              className="flex flex-col gap-1 px-4 pt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl px-4 py-3.5 text-lg font-medium text-[#141c2f] hover:bg-[#f8fafc]"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setDemoOpen(true);
                  }}
                  className="rounded-xl bg-[#141c2f] px-4 py-3.5 text-center text-base font-medium text-white"
                >
                  Book a Demo
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      <LeadModal open={demoOpen} onClose={() => setDemoOpen(false)} intent="project" />
    </header>
  );
}
