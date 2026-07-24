export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#141c2f] text-[#e6eaf1]">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#364258]/60 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-[#364258]/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Brand */}
        <div className="py-2 lg:py-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#141c2f] sm:h-8 sm:w-8">
              <span className="text-xs font-bold tracking-tight sm:text-sm">A</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white sm:text-[15px]">
              Aura POS
            </span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-[#9aa6bd] sm:mt-4 sm:text-sm">
            The operating system for salons, spas, and wellness businesses.
            Everything connected, beautifully.
          </p>
          <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
            {["X", "in", "IG", "YT"].map((s) => (
              <a
                key={s}
                href="#cta"
                aria-label={s}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[11px] font-medium text-[#9aa6bd] transition-colors hover:border-white/20 hover:text-white sm:h-9 sm:w-9 sm:text-xs"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row sm:gap-4 sm:pt-8">
          <p className="text-[11px] text-[#9aa6bd] sm:text-xs">
            © {new Date().getFullYear()} Aura POS. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-[#9aa6bd] sm:gap-6 sm:text-xs">
            <a href="#cta" className="transition-colors hover:text-white max-sm:py-2">Privacy</a>
            <a href="#cta" className="transition-colors hover:text-white max-sm:py-2">Terms</a>
            <a href="#cta" className="transition-colors hover:text-white max-sm:py-2">Security</a>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9d7f]" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
