import { ChevronRight } from "lucide-react";
import { WORKFLOW } from "../data";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/**
 * Workflow — the connected salon operational pipeline.
 * A horizontal flow of eight numbered steps showing how a day moves from the
 * first booking to the final report. No screenshots (those live in the
 * showcase below) — just a clean, scannable pipeline.
 *
 * Mobile: 2-col grid. sm+: 4-col grid. lg+: single 8-col row.
 */
export function Workflow() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-heading"
      className="relative overflow-hidden bg-[#f8fafc] py-4 sm:py-8"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#e6eaf1] to-transparent" />
        <div className="absolute left-1/2 top-24 h-[300px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="One Platform"
          title={
            <span id="platform-heading">
              One platform. Every salon operation.
            </span>
          }
          subtitle="From the first booking to the final report, Aura connects every step of your day — so nothing slips through the cracks and nothing lives in a separate tool."
        />

        {/* Horizontal flow pipeline */}
        <RevealGroup
          className="mt-4 sm:mt-6"
          stagger={0.05}
        >
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8 lg:gap-3">
            {WORKFLOW.map((step, i) => {
              const isLast = i === WORKFLOW.length - 1;
              return (
                <RevealItem
                  key={step.step}
                  className="min-w-0"
                >
                  <div className="group relative flex h-full flex-col rounded-xl border border-[#e6eaf1] bg-white p-2.5 shadow-premium transition-all duration-300 hover:border-[#cdd5e3] hover:shadow-float sm:p-4">
                    {/* Header: number badge + flow chevron */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-6 items-center rounded-md bg-[#f8fafc] px-2 text-[11px] font-semibold tracking-[0.14em] text-[#364258] ring-1 ring-[#e6eaf1] sm:h-8 sm:rounded-lg sm:px-2.5 sm:text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {!isLast && (
                        <ChevronRight
                          className="h-4 w-4 text-[#cdd5e3] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#364258]"
                          strokeWidth={1.75}
                        />
                      )}
                    </div>

                    {/* Step name + description */}
                    <h3 className="mt-2 text-xs font-semibold tracking-tight text-[#141c2f] sm:mt-3 sm:text-sm">
                      {step.step}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug text-[#6f7c95] line-clamp-2 sm:mt-1.5 sm:text-xs sm:line-clamp-3">
                      {step.desc}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </RevealGroup>

        {/* Footer note */}
        <RevealItem className="mt-4 flex justify-center sm:mt-5" direction="fade">
          <p className="text-xs text-[#6f7c95] sm:text-sm">
            Eight connected steps. One unified record for every appointment,
            dollar, and client.
          </p>
        </RevealItem>
      </div>
    </section>
  );
}
