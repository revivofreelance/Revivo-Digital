import { Check, X } from "lucide-react";
import { COMPARISON } from "../data";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

export function Comparison() {
  return (
    <section id="why" className="relative overflow-hidden py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Aura"
          title="Why salon owners choose Aura POS."
          subtitle="The difference between surviving the day and running a business that grows itself. Here's what changes when you switch."
        />

        <Reveal direction="up" delay={0.1} duration={0.7} className="mt-4 sm:mt-6">
          <div className="overflow-hidden rounded-2xl border border-[#e6eaf1] bg-white shadow-premium">
            {/* Header row */}
            <div className="grid grid-cols-2 border-b border-[#e6eaf1]">
              <div className="flex items-center gap-2 px-3 py-3 sm:px-8 sm:py-6 sm:gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1f3f8] ring-1 ring-inset ring-[#e6eaf1] sm:h-9 sm:w-9 sm:rounded-xl">
                  <X className="h-3 w-3 text-[#6f7c95] sm:h-4 sm:w-4" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6f7c95] sm:text-xs">
                    Traditional
                  </div>
                  <div className="text-xs font-semibold text-[#364258] sm:text-base">
                    Software
                  </div>
                </div>
              </div>
              <div className="relative flex items-center gap-2 bg-[#f8fafc] px-3 py-3 sm:px-8 sm:py-6 sm:gap-3">
                <span className="absolute inset-y-0 left-0 w-px bg-[#364258]" />
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8f3ee] ring-1 ring-inset ring-[#cfe4d8] sm:h-9 sm:w-9 sm:rounded-xl">
                  <Check className="h-3 w-3 text-[#4a9d7f] sm:h-4 sm:w-4" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4a9d7f] sm:text-xs">
                    Aura POS
                  </div>
                  <div className="text-xs font-semibold text-[#141c2f] sm:text-base">
                    The Modern Platform
                  </div>
                </div>
              </div>
            </div>

            {/* Rows */}
            <RevealGroup stagger={0.07} amount={0.15}>
              {COMPARISON.map((row, i) => (
                <RevealItem
                  key={i}
                  direction="up"
                  className="grid grid-cols-2 border-t border-[#e6eaf1] first:border-t-0"
                >
                  {/* Traditional cell */}
                  <div className="flex items-start gap-2 px-3 py-3 sm:px-8 sm:py-6 sm:gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1f3f8] ring-1 ring-inset ring-[#e6eaf1] sm:h-6 sm:w-6">
                      <X className="h-2.5 w-2.5 text-[#6f7c95] sm:h-3 sm:w-3" strokeWidth={2.25} />
                    </span>
                    <p className="text-xs leading-snug text-[#6f7c95] sm:text-[15px] sm:leading-relaxed">
                      {row.traditional}
                    </p>
                  </div>
                  {/* Aura cell */}
                  <div className="relative flex items-start gap-2 bg-[#f8fafc] px-3 py-3 sm:px-8 sm:py-6 sm:gap-3">
                    <span className="absolute inset-y-0 left-0 w-px bg-[#364258]" />
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f3ee] ring-1 ring-inset ring-[#cfe4d8] sm:h-6 sm:w-6">
                      <Check className="h-2.5 w-2.5 text-[#4a9d7f] sm:h-3 sm:w-3" strokeWidth={2.25} />
                    </span>
                    <p className="text-xs font-medium leading-snug text-[#141c2f] sm:text-[15px] sm:leading-relaxed">
                      {row.aura}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        {/* Footnote */}
        <Reveal direction="fade" delay={0.2} duration={0.6}>
          <p className="mt-4 text-center text-xs text-[#6f7c95] sm:mt-6 sm:text-sm">
            Built for owners who refuse to run their salon on sticky notes and
            spreadsheets.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
