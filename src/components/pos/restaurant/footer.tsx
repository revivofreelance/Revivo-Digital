"use client";

import { Logo } from "./navbar";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-black/[0.06] bg-[oklch(0.975_0.005_70)]">
      <div className="mx-auto max-w-6xl px-5 py-5 sm:py-8">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-[12.5px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
            The modern restaurant platform. Ordering, kitchen, inventory, billing,
            analytics and customers — beautifully unified.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {["twitter", "linkedin", "instagram", "youtube"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-brand-espresso/60 transition-colors hover:text-brand-orange sm:h-9 sm:w-9"
              >
                <span className="h-3 w-3 rounded-sm bg-current opacity-70 sm:h-3.5 sm:w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] pt-4 sm:flex-row sm:gap-4">
          <p className="text-[11.5px] text-muted-foreground sm:text-[12.5px]">
            © {new Date().getFullYear()} Mise. Crafted for modern hospitality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11.5px] text-muted-foreground sm:gap-5 sm:text-[12.5px]">
            <a href="#" className="transition-colors hover:text-brand-espresso max-sm:py-2">Privacy</a>
            <a href="#" className="transition-colors hover:text-brand-espresso max-sm:py-2">Terms</a>
            <a href="#" className="transition-colors hover:text-brand-espresso max-sm:py-2">Security</a>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[oklch(0.55_0.14_150)]" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
