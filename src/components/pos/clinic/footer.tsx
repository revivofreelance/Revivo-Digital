"use client";

export function Footer() {
  return (
    <footer className="relative bg-[#0a1f1c] text-white pt-8 pb-6 overflow-hidden">
      {/* Soft top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="pb-6 border-b border-white/10">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_4px_12px_rgba(5,150,105,0.3)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-[18px] sm:h-[18px]">
                <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-[15px] sm:text-[17px] tracking-tight">
              Clinic<span className="text-emerald-400">OS</span>
            </span>
          </a>
          <p className="mt-3 sm:mt-4 text-[12.5px] sm:text-[14px] text-white/60 leading-relaxed max-w-md">
            The modern operating system for clinics. One intelligent platform for appointments, EMR, billing, pharmacy and analytics.
          </p>
        </div>

        {/* Bottom — legal */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>© {new Date().getFullYear()} ClinicOS. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors max-sm:py-2">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors max-sm:py-2">Terms</a>
            <a href="#" className="hover:text-white/70 transition-colors max-sm:py-2">Security</a>
            <a href="#" className="hover:text-white/70 transition-colors max-sm:py-2">DPA</a>
          </div>
          <div className="flex items-center gap-3">
            {/* Social */}
            {[
              { label: "X", path: "M3 3l8 8 8-8M3 21l8-8 8 8" },
              { label: "in", path: "M4 4v16M4 4h.01M9 10v10M9 10v3a3 3 0 016 0v3" },
              { label: "ig", path: "M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-white/[0.12] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Watermark */}
        <div className="mt-6 -mb-2 text-center">
          <p className="text-[5rem] sm:text-[12rem] lg:text-[16rem] font-semibold leading-none tracking-tighter bg-gradient-to-b from-white/[0.04] to-transparent bg-clip-text text-transparent select-none">
            ClinicOS
          </p>
        </div>
      </div>
    </footer>
  );
}
