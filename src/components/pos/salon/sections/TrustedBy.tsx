import { INDUSTRIES } from "../data";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

/**
 * TrustedBy — subtle marquee of the 10 industries Aura serves.
 * Pure-CSS marquee (animate-marquee + duplicated list) inside a mask-fade-x
 * track so the edges fade softly. Light, calm, enterprise feel.
 */
export function TrustedBy() {
  // Duplicate the list so the marquee loops seamlessly (50% translate).
  const loop = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section
      id="trusted"
      aria-labelledby="trusted-heading"
      className="border-y border-[#e6eaf1] bg-[#f8fafc] py-4 sm:py-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered label */}
        <Reveal direction="up" duration={0.6}>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f7c95]">
              <span className="h-px w-6 bg-[#cdd5e3]" />
              Built for the entire beauty &amp; wellness industry
              <span className="h-px w-6 bg-[#cdd5e3]" />
            </span>
            <h2
              id="trusted-heading"
              className="mt-4 text-xl font-semibold tracking-tight text-[#141c2f] text-balance sm:text-3xl"
            >
              Trusted by every kind of beauty business
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-[#6f7c95] text-pretty sm:mt-3 sm:text-base">
              From a single-chair barbershop to a multi-city spa chain — one
              platform, configured for the way you work.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mask-fade-x relative mt-4 overflow-hidden sm:mt-5">
        <div className="flex w-max animate-marquee items-center gap-3 pl-3">
          {loop.map((industry, i) => (
            <div
              key={`${industry.name}-${i}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e6eaf1] bg-white px-3.5 py-1.5 shadow-premium transition-colors duration-300 hover:border-[#cdd5e3] hover:bg-[#f8fafc] sm:px-5 sm:py-2.5"
            >
              <Icon
                name={industry.icon}
                className="h-4 w-4 text-[#364258] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.75}
              />
              <span className="text-xs font-medium tracking-tight text-[#141c2f] sm:text-sm">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
