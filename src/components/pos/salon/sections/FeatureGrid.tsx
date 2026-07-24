import { FEATURES } from "../data";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F8FAFC] py-4 sm:py-8"
    >
      {/* Subtle background — faint grid + soft top fade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything your salon needs, in one place."
          subtitle="Twenty-plus deeply connected tools — scheduling, checkout, clients, inventory, payroll, and analytics — that work as a single, calm system."
          align="center"
        />

        <RevealGroup
          stagger={0.05}
          amount={0.1}
          className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {FEATURES.map((feature) => (
            <RevealItem key={feature.title}>
              <article
                className="group relative h-full rounded-xl border border-[#E6EAF1] bg-white p-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#CDD5E3] hover:shadow-premium sm:rounded-2xl sm:p-6"
              >
                {/* Icon container */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8FAFC] ring-1 ring-inset ring-[#E6EAF1] transition-colors duration-300 group-hover:bg-white sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon
                    name={feature.icon}
                    className="h-4 w-4 text-[#364258] sm:h-5 sm:w-5"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title + description */}
                <h3 className="mt-2 text-[13px] font-semibold tracking-tight text-[#141C2F] sm:mt-4 sm:text-[15px]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-[#6F7C95] sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  {feature.desc}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Footer note */}
        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center sm:mt-5 sm:flex-row sm:gap-6">
          <p className="text-xs text-[#6F7C95] sm:text-sm">
            Every feature works online and offline — across single or multi-location.
          </p>
          <a
            href="#showcase"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#141C2F] transition-colors hover:text-[#364258] max-sm:py-2"
          >
            See it in action
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
