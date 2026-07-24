"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  Check,
  Sparkles,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  AnimatedCounter,
  AuroraBackground,
  SectionHeading,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import { TESTIMONIALS } from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/* ---------------- Local data ---------------- */
const VIDEO_TESTIMONIALS = [
  {
    title: "How my new site doubled our bookings",
    name: "Dr. Priya Sharma",
    business: "Bright Smile Dental",
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "From 12 to 38 reservations a night",
    name: "Marco Rossi",
    business: "Saffron Kitchen",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "$14k/month in new memberships",
    name: "Tasha Williams",
    business: "Iron Peak Gym",
    accent: "from-emerald-500 to-teal-500",
  },
];

const SUMMARY_STATS = [
  {
    node: (
      <>
        <span className="text-gradient-purple font-display text-2xl font-extrabold sm:text-4xl sm:text-5xl">
          <AnimatedCounter value={4.2} decimals={1} />
        </span>
        <span className="ml-1 text-base text-slate-400 sm:text-2xl">/5</span>
      </>
    ),
    label: "Average rating",
    sub: "Across all projects",
  },
  {
    node: (
      <span className="font-display text-2xl font-extrabold text-navy sm:text-4xl sm:text-5xl">
        <AnimatedCounter value={47} />
      </span>
    ),
    label: "Verified reviews",
    sub: "From real clients",
  },
  {
    node: (
      <span className="font-display text-2xl font-extrabold text-navy sm:text-4xl sm:text-5xl">
        <AnimatedCounter value={96} suffix="%" />
      </span>
    ),
    label: "Would recommend",
    sub: "In post-launch survey",
  },
  {
    node: (
      <span className="font-display text-2xl font-extrabold text-navy sm:text-4xl sm:text-5xl">
        <AnimatedCounter value={28} suffix="+" />
      </span>
    ),
    label: "Industries served",
    sub: "Local & regional",
  },
];

/* ---------------- Helpers ---------------- */
function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-cta text-cta" : "fill-slate-200 text-slate-200"
          )}
        />
      ))}
    </div>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001 6.19 5.238 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

/* ---------------- Page ---------------- */
export function TestimonialsPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const featured = TESTIMONIALS[0];

  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Don&apos;t take my word for it.{" "}
            <span className="text-gradient-purple">Take theirs.</span>
          </>
        }
        subtitle="Real words from real business owners. Every one of them started exactly where you are right now — and now their website is their best salesperson."
      />

      {/* ---------------- Rating summary band ---------------- */}
      <section className="px-4 pb-4 sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:rounded-3xl lg:grid-cols-4">
              {SUMMARY_STATS.map((s, i) => (
                <div key={i} className="bg-white p-3 text-center sm:p-8">
                  <div className="flex items-center justify-center">
                    {s.node}
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold text-navy sm:mt-2 sm:text-sm">{s.label}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Featured testimonial ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-royal to-grape p-5 shadow-lift sm:rounded-[2rem] sm:p-12 lg:p-14">
              <AuroraBackground />
              <Quote className="pointer-events-none absolute -top-3 right-6 hidden h-28 w-28 text-white/5 sm:block" />
              <div className="relative">
                <Stars
                  count={featured.rating}
                  className="[&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-5 sm:[&_svg]:w-5"
                />
                <p className="mt-3 max-w-4xl text-balance font-display text-sm font-bold leading-snug text-white sm:mt-6 sm:text-2xl lg:text-[2rem]">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 sm:mt-8 sm:gap-4 sm:pt-6">
                  <div
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br text-xs font-bold text-white ring-2 ring-white/20 sm:h-14 sm:w-14 sm:text-base",
                      featured.accent
                    )}
                  >
                    {featured.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white sm:text-lg">
                      {featured.name}
                    </div>
                    <div className="text-[11px] text-white/70 sm:text-sm">
                      {featured.role}, {featured.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Testimonials masonry grid ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="Every word"
            title={
              <>
                Words from <span className="text-gradient-purple">real owners.</span>
              </>
            }
            subtitle="No paid endorsements, no stock photos, no edited quotes. Just unfiltered feedback from business owners who put their trust in me."
          />
          <Stagger
            className="mt-4 columns-1 sm:mt-12 sm:columns-2 lg:columns-3 [column-gap:0.625rem] sm:[column-gap:1.25rem]"
            stagger={0.05}
          >
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name} className="mb-2.5 break-inside-avoid sm:mb-5">
                <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6">
                  <div className="flex items-center justify-between">
                    <Stars count={t.rating} className="[&_svg]:h-3 [&_svg]:w-3 sm:[&_svg]:h-4 sm:[&_svg]:w-4" />
                    <Quote className="h-5 w-5 text-slate-100 transition-colors group-hover:text-grape/20 sm:h-7 sm:w-7" />
                  </div>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-slate-700 sm:mt-4 sm:text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2.5 border-t border-slate-100 pt-2.5 sm:mt-5 sm:gap-3 sm:pt-4">
                    <div
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white sm:h-11 sm:w-11 sm:text-xs",
                        t.accent
                      )}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-navy sm:text-sm">{t.name}</div>
                      <div className="text-[11px] text-slate-500 sm:text-xs">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Video testimonials ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="In their own words"
            title={
              <>
                Video <span className="text-gradient-purple">testimonials.</span>
              </>
            }
            subtitle="Hear clients tell their stories in their own words. New video testimonials added every month — these are previews of upcoming features."
          />
          <Stagger className="grid grid-cols-2 gap-1.5 sm:gap-6 lg:grid-cols-3" stagger={0.08}>
            {VIDEO_TESTIMONIALS.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:rounded-2xl">
                  <div
                    className={cn(
                      "relative aspect-video overflow-hidden bg-gradient-to-br",
                      v.accent
                    )}
                  >
                    <div className="absolute inset-0 bg-grid-dark opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-lift transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                        <span className="ml-0.5 block h-0 w-0 border-y-5 border-l-[8px] border-y-transparent border-l-navy sm:ml-1 sm:border-y-8 sm:border-l-[12px]" />
                      </div>
                    </div>
                    <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> Soon
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-5">
                    <h3 className="font-display text-[11px] font-bold leading-snug text-navy sm:text-base">
                      {v.title}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-500 sm:mt-2 sm:gap-2 sm:text-xs">
                      <span className="font-semibold text-slate-700">{v.name}</span>
                      <span className="text-slate-300">•</span>
                      <span className="truncate">{v.business}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- Google reviews badge ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row sm:gap-8 sm:rounded-3xl sm:p-10">
              <GoogleG className="h-12 w-12 shrink-0 sm:h-16 sm:w-16" />
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                  Google Reviews
                </div>
                <div className="mt-1 flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
                  <span className="font-display text-xl font-extrabold text-navy sm:text-3xl">
                    4.2
                  </span>
                  <Stars count={5} className="[&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-5 sm:[&_svg]:w-5" />
                  <span className="text-[11px] text-slate-500 sm:text-sm">Based on 28 reviews</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 sm:mt-3 sm:px-3 sm:py-1 sm:text-xs">
                  <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Verified by Google
                </div>
              </div>
              <PremiumButton
                variant="outline"
                size="sm"
                onClick={() => onNavigate("contact")}
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Read all
              </PremiumButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        onCTA={onCTA}
        cta="Become a client"
        onSecondary={() => onNavigate("case-studies")}
        secondary="Read case studies"
        title="Join 28 happy clients."
        subtitle="Your business could be the next success story. Let's talk about what's possible."
      />
    </PageShell>
  );
}
