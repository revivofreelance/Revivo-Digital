"use client";

import {
  ArrowRight, Check, X, Star, Zap, Rocket, Cpu, Target, Code, Palette, Mail,
} from "lucide-react";
import {
  Reveal, Stagger, StaggerItem,
  SectionHeading, PremiumButton,
} from "@/components/site/primitives";
import { CTASection } from "@/components/site/cta-section";
import { PageShell, PageHero } from "@/components/site/page-shell";
import {
  VALUES,
  TECH_STACK, PROCESS_STEPS, INDUSTRIES,
} from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function AboutPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            I build websites that{" "}
            <span className="text-gradient-purple">build businesses.</span>
          </>
        }
        subtitle="Revivo is an independent studio that helps local businesses turn their website into their best salesperson. No agency overhead, no junior developers, no templates. Just senior craft, end-to-end."
      />

      <Story />
      <Mission />
      <Philosophy />
      <ValuesGrid />
      <DifferentSection />
      <ProcessStrip onNavigate={onNavigate} />
      <IndustriesChips onNavigate={onNavigate} />
      <TechStack />
      <CTASection
        onCTA={onCTA}
        cta="Get in touch"
        onSecondary={() => onNavigate("process")}
        secondary="See how I work"
        title="Let's see if we're a fit."
        subtitle="Free 30-minute consultation. We'll talk about your business and whether I can genuinely help. No pressure, no pitch."
      />
    </PageShell>
  );
}

/* ============================ STORY ============================ */
function Story() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-5 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: monogram portrait */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lift sm:rounded-3xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/about/workspace.png"
                  alt="Revivo creative developer workspace"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/20" />
                {/* glow blobs — hidden on mobile to avoid overflow */}
                <div className="pointer-events-none absolute -top-20 -left-10 hidden h-64 w-64 rounded-full bg-grape/40 blur-3xl sm:block" />
                <div className="pointer-events-none absolute -bottom-20 -right-10 hidden h-64 w-64 rounded-full bg-cta/20 blur-3xl sm:block" />

                <div className="relative grid h-full place-items-end p-4 sm:p-8">
                  <div className="w-full">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur sm:px-3.5 sm:py-1.5 sm:text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                      Revivo
                    </div>
                    <div className="mt-2 font-display text-lg font-extrabold tracking-tight text-white sm:mt-3 sm:text-2xl">
                      Independent Software Engineer
                    </div>
                    <div className="mt-0.5 text-xs text-white/70 sm:mt-1 sm:text-sm">
                      Working worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards — compact on mobile */}
              <div className="absolute -left-2 top-6 rounded-xl border border-white/70 bg-white/90 p-2 shadow-lift backdrop-blur animate-float-slow sm:-left-6 sm:top-8 sm:rounded-2xl sm:p-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-grape to-royal text-white sm:h-9 sm:w-9 sm:rounded-lg">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-extrabold text-navy sm:text-base">3 yrs</div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-[10px]">Building</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-1/3 rounded-xl border border-white/70 bg-white/90 p-2 shadow-lift backdrop-blur animate-float-medium sm:-right-6 sm:rounded-2xl sm:p-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-cta to-cta-soft text-white sm:h-9 sm:w-9 sm:rounded-lg">
                    <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-extrabold text-navy sm:text-base">28 projects</div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-[10px]">Shipped</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/4 rounded-xl border border-white/70 bg-white/90 p-2 shadow-lift backdrop-blur animate-float-slow sm:-bottom-4 sm:left-1/3 sm:rounded-2xl sm:p-3" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex">
                    {[0,1,2,3,4].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-cta text-cta sm:h-3.5 sm:w-3.5" />
                    ))}
                  </div>
                  <div className="font-display text-xs font-extrabold text-navy sm:text-base">4.2★</div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-[10px]">Rated</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: story copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-grape/15 bg-grape/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-grape sm:px-3.5 sm:py-1.5 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-grape animate-pulse" />
                My Story
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-xl font-bold tracking-tight text-navy sm:mt-5 sm:text-4xl md:text-5xl">
                From product engineer to{" "}
                <span className="text-gradient-purple">local business ally.</span>
              </h2>
            </Reveal>

            <div className="mt-4 space-y-3 sm:mt-7 sm:space-y-5">
              <Reveal delay={0.1}>
                <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
                  I started writing code professionally in 2019, building products at a couple of software companies. I shipped dashboards, internal tools, and customer-facing apps used by thousands of people. The work was good — well-paid, technically interesting, and surrounded by smart teammates. But over time I noticed something that bugged me. Every time a friend with a small business asked me to look at their website, I'd find the same thing: a slow, templated, generic site that was actively costing them customers. The local dentist, the neighborhood restaurant, the gym down the road — all being underserved by an industry that had decided small budgets weren't worth real craft.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
                  Most of those businesses had been sold a $2,000 WordPress theme by someone who called themselves a "web designer" on Instagram. The theme came with 80 plugins they didn't need, a homepage that took 7 seconds to load, and a contact form that quietly stopped working six months in. When the owner called the designer back, the number was disconnected. I saw this happen over and over — to dentists, plumbers, salons, lawyers, gyms. Smart, hardworking people being taken advantage of because they didn't know what "good" looked like. After the fifth time helping a friend salvage a broken site, I decided to stop fixing other people's messes and start building the right thing from scratch.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg">
                  So in 2022 I left my product job and went independent. I took a pay cut, said no to agency subcontracting work, and decided I'd only build websites for local businesses — but I'd build them the same way I built products at my last job. Senior engineer on every project. Real custom design, not themes. Performance budgets. Accessibility audits. Conversion strategy. No outsourcing, no juniors learning on the client's dime. Three years later, I've shipped 28 websites and built a business entirely on referrals. I'm still a one-person studio — and I plan to keep it that way.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ MISSION ============================ */
function Mission() {
  const missions = [
    {
      icon: Target,
      title: "Make premium web design accessible to local businesses",
      description: "A great website shouldn't be a luxury reserved for funded startups. Every local business deserves a site that loads fast, looks premium, and converts visitors into paying customers — without a $50k agency invoice.",
    },
    {
      icon: Rocket,
      title: "Treat your website like a business asset, not a brochure",
      description: "Your website's job isn't to look pretty in a portfolio. It's to generate bookings, calls, and revenue. I build with that goal first, and aesthetics second.",
    },
    {
      icon: Mail,
      title: "Be the engineer who actually replies to your emails",
      description: "No project managers, no ticket queues, no \"we'll get back to you in 48 hours.\" When you have a problem, you email me, and I fix it. The same person who built your site is the one maintaining it.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mist px-4 py-5 sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          center
          eyebrow="My Mission"
          title={<>Why I do this <span className="text-gradient-purple">work.</span></>}
          subtitle="I'm not trying to be the biggest web studio out there. I'm trying to be the most trusted engineer a local business owner will ever work with. Here's what drives every project I take on."
        />

        <Stagger className="mt-2 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-6" stagger={0.08}>
          {missions.map((m) => (
            <StaggerItem key={m.title}>
              <div className="group relative flex h-full items-start gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-soft transition-all sm:block sm:rounded-3xl sm:p-8 duration-300 hover:-translate-y-1.5 hover:border-grape/30 hover:shadow-lift">
                <div className="absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-grape/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-grape/10 sm:block" />
                <div className="relative shrink-0">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-grape to-royal text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                    <m.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold leading-snug text-navy sm:mt-5 sm:text-lg">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                    {m.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ PHILOSOPHY ============================ */
function Philosophy() {
  const designPhilosophy = [
    "Clarity beats cleverness every time. If a visitor has to think about what your site is asking them to do, the design has already failed — no matter how impressive it looks.",
    "Hierarchy is the whole job. Every page needs one clear primary action, two secondary actions, and a visual order that guides the eye from headline to CTA without competing for attention.",
    "Mobile-first is non-negotiable. 70%+ of your visitors are on a phone, so I design the phone experience first and enhance for desktop — never the other way around.",
    "Decoration should earn its place. Gradients, animations, and visual flourishes only go in if they serve a purpose: guiding attention, building trust, or making a moment feel premium.",
    "Whitespace is a feature, not wasted space. Breathing room around your content is what separates a premium site from a cluttered one — and what makes your message feel confident.",
  ];

  const devPhilosophy = [
    "Speed is a feature, not an afterthought. I ship every site with sub-2-second load times, optimized images, and code-split bundles — because a 1-second delay quietly kills 7% of your conversions.",
    "Accessibility isn't optional, it's table stakes. Every site I build meets WCAG AA standards — keyboard navigation, screen-reader labels, color contrast — so you reach 100% of your potential customers, not 85%.",
    "Code that lasts longer than our contract. I write clean, documented, framework-standard code so any developer in the world can pick up where I left off. No proprietary lock-in, no mystery spaghetti.",
    "Forms, payments, and integrations should just work. I test every form submission, every checkout, every webhook end-to-end before launch — because a broken contact form on a local business site is a quiet emergency.",
    "Security and uptime are built in, not bolted on. SSL, automated backups, uptime monitoring, and dependency updates are standard on every project — not upsells.",
  ];

  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="My Philosophy"
          title={<>How I think about <span className="text-gradient-purple">the craft.</span></>}
          subtitle="Two sides of the same coin. Design is how it feels. Development is how it performs. Both have to be excellent — or neither matters."
        />

        <Reveal delay={0.1}>
          <div className="mt-2 grid gap-2 rounded-xl bg-mist p-2 sm:mt-4 sm:gap-6 sm:rounded-3xl sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-10">
            <PhilosophyCard
              icon={Palette}
              title="Design Philosophy"
              accent="from-grape to-royal"
              points={designPhilosophy}
            />
            <PhilosophyCard
              icon={Code}
              title="Development Philosophy"
              accent="from-cta to-cta-soft"
              points={devPhilosophy}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhilosophyCard({
  icon: Icon,
  title,
  accent,
  points,
}: {
  icon: React.ElementType;
  title: string;
  accent: string;
  points: string[];
}) {
  return (
    <div className="h-full rounded-lg border border-white bg-white p-3 shadow-soft sm:rounded-3xl sm:p-7 sm:p-8">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br text-white shadow-soft sm:h-12 sm:w-12 sm:rounded-2xl", accent)}>
          <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
        </div>
        <h3 className="font-display text-sm font-bold text-navy sm:text-xl">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2.5 sm:mt-6 sm:space-y-4">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2 sm:gap-3">
            <span className={cn("mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br text-white sm:mt-1 sm:h-5 sm:w-5", accent)}>
              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
            </span>
            <span className="text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================ VALUES GRID ============================ */
function ValuesGrid() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="What I value"
          title={<>Principles I won't <span className="text-gradient-purple">compromise on.</span></>}
          subtitle="Four values that shape every decision I make — from which projects I take on to how I quote them to how I support them after launch."
        />

        <Stagger className="mt-2 grid grid-cols-1 gap-2 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4" stagger={0.07}>
          {VALUES.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group relative flex h-full items-start gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition-all sm:block sm:rounded-2xl sm:p-7 duration-300 hover:-translate-y-1.5 hover:border-grape/30 hover:shadow-lift">
                <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full bg-grape/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-grape/10 sm:block" />
                <div className="relative shrink-0">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-grape to-royal text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl">
                    <v.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div className="relative min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold text-navy sm:mt-5 sm:text-lg">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">{v.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ WHAT MAKES ME DIFFERENT ============================ */
function DifferentSection() {
  const negatives = [
    "Junior developers do the actual work while the senior \"partner\" is in sales calls",
    "Template-slinging: same WordPress theme recycled across 50 client sites",
    "Vanishes after final payment — your \"support contact\" becomes an unmonitored inbox",
    "Scope creep, surprise invoices, and a final bill 40% higher than the quote",
    "Optimizes for portfolio screenshots, not for your bookings or revenue",
  ];

  const positives = [
    "I'm the senior engineer on every project — design, code, and deployment, all me",
    "Custom-designed and hand-coded from scratch — no two sites I build look alike",
    "30 days of free post-launch support, then optional care plans — I'm around for years",
    "Fixed-price quotes with the full scope in writing — no surprise invoices, ever",
    "Optimizes for your business outcomes: bookings, calls, and revenue — not screenshots",
  ];

  return (
    <section className="relative overflow-hidden bg-navy px-4 py-3 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-grape/30 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:px-3.5 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
              The difference
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-2 max-w-3xl text-balance text-xl font-bold tracking-tight sm:mt-5 sm:text-4xl md:text-5xl">
              What working with me <span className="text-gradient-cta">actually looks like.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-2 max-w-2xl text-pretty text-xs text-slate-300 sm:mt-4 sm:text-base">
              Most freelancers and agencies talk a big game. Here's the honest, side-by-side comparison.
            </p>
          </Reveal>
        </div>

        {/* Single column comparison — mobile only, full width */}
        <div className="mt-3 space-y-2 lg:hidden">
          {negatives.map((n, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="space-y-1.5">
                {/* Negative — full width */}
                <div className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-700/60 text-slate-400">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-xs leading-relaxed text-slate-400">{n}</span>
                </div>
                {/* Positive — full width */}
                <div className="flex items-start gap-2.5 rounded-lg border border-grape/20 bg-gradient-to-br from-grape/10 to-transparent px-3 py-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta-gradient text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-xs font-medium leading-relaxed text-white">{positives[i]}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop side-by-side view */}
        <div className="mt-6 hidden gap-4 lg:grid lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-slate-400">
                <X className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-300">Most freelancers &amp; agencies</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {negatives.map((n, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-700/60 text-slate-400">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-400">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-grape/30 bg-gradient-to-br from-grape/15 via-royal/10 to-transparent p-7 backdrop-blur">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cta/20 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta-gradient text-white shadow-glow-cta">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Working with me</h3>
            </div>
            <ul className="relative mt-6 space-y-4">
              {positives.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta-gradient text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-white">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ PROCESS STRIP ============================ */
function ProcessStrip({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const steps = PROCESS_STEPS.slice(0, 5);
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="How it works"
            title={<>A process that <span className="text-gradient-purple">ships on time.</span></>}
            subtitle="Every project follows the same battle-tested 9-step process. Here's the first five — the part that takes us from first call to design sign-off."
          />
          <Reveal delay={0.1}>
            <PremiumButton variant="outline" size="md" onClick={() => onNavigate("process")} icon={<ArrowRight className="h-4 w-4" />}>
              Full process
            </PremiumButton>
          </Reveal>
        </div>

        <Stagger className="mt-2 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" stagger={0.06}>
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6">
                <div className="absolute -right-2 -top-2 font-display text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-grape/10 sm:-right-4 sm:-top-4 sm:text-6xl">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-grape sm:text-[10px]">
                    {s.duration}
                  </div>
                  <h3 className="mt-1 font-display text-xs font-bold leading-snug text-navy sm:text-base">{s.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-xs line-clamp-3 sm:line-clamp-none">{s.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ============================ INDUSTRIES CHIPS ============================ */
function IndustriesChips({ onNavigate }: { onNavigate: (p: PageKey) => void }) {
  const items = INDUSTRIES.slice(0, 12);
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          center
          eyebrow="Industries I understand"
          title={<>16 industries. <span className="text-gradient-purple">One engineer.</span></>}
          subtitle="Every industry has its own language, its own customers, and its own conversion triggers. I've spent eight years learning them. A quick sample:"
        />

        <Reveal delay={0.1}>
          <div className="mt-2 flex flex-wrap justify-center gap-2 sm:gap-3">
            {items.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => onNavigate("industries")}
                className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-grape/30 hover:shadow-lift sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className={cn("grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br text-white sm:h-7 sm:w-7", ind.accent)}>
                  <ind.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </span>
                {ind.title}
                <ArrowRight className="h-3 w-3 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-grape sm:h-3.5 sm:w-3.5" />
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 text-center sm:mt-10">
          <Reveal delay={0.15}>
            <PremiumButton variant="navy" size="md" onClick={() => onNavigate("industries")} icon={<ArrowRight className="h-4 w-4" />}>
              See all industries
            </PremiumButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================ CERTIFICATIONS & ACHIEVEMENTS (removed) ============================ */

/* ============================ TECH STACK ============================ */
function TechStack() {
  return (
    <section className="relative px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          center
          eyebrow="Under the hood"
          title={<>Tools I <span className="text-gradient-purple">use.</span></>}
          subtitle="Frontend, backend, database, payments, APIs, analytics — the full stack. You care about bookings and revenue. I care about the tech. That's the division of labor."
        />

        <Reveal delay={0.1}>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-5">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className="group flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-3 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:px-4 sm:py-5 sm:gap-2"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 text-grape ring-1 ring-slate-200/60 transition-all duration-300 group-hover:from-grape/10 group-hover:to-royal/10 group-hover:text-grape sm:h-10 sm:w-10 sm:rounded-xl">
                  <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold text-navy sm:text-sm">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500 sm:text-[10px]">{t.category}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ STATS BAND (removed) ============================ */
