"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Shield,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  SectionHeading,
  PremiumButton,
  AuroraBackground,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { submitLead, formToLead, submitErrorMessage } from "@/lib/forms";
import { toast } from "sonner";
import {
  AUDIT_CHECKS,
  AUDIT_STEPS,
  TESTIMONIALS,
} from "@/lib/site-data";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------------- Reusable field ---------------- */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:mb-1.5 sm:text-xs"
      >
        {label} {required && <span className="text-cta">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-2 focus:ring-grape/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:focus:ring-4"
      />
      {hint && <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">{hint}</p>}
    </div>
  );
}

/* ---------------- What you'll get deliverables ---------------- */
const DELIVERABLES = [
  "15-minute Loom video walkthrough",
  "30-point written PDF report",
  "Prioritized action plan",
  "Competitor benchmarking",
  "30-min call to discuss",
];

/* ---------------- Audit FAQ strip ---------------- */
const AUDIT_FAQS = [
  {
    q: "Is it really free?",
    a: "Yes — 100% free, no obligation. I do this because it's the best way for me to demonstrate value before we ever talk about working together. You get a real audit, real findings, and real recommendations — even if we never do business together.",
  },
  {
    q: "How long does it take?",
    a: "3–4 days from when you submit. I run each audit manually — no automated reports — so it takes a little time. You'll get an email the moment your audit is ready with a link to the Loom video and the PDF report.",
  },
  {
    q: "What do you need from me?",
    a: "Just your website URL and a few details about your business — what you do, who your customers are, and what your biggest concern is. That's it. No access to your backend, no logins, no setup. The audit is done entirely from the outside, like a customer would experience it.",
  },
  {
    q: "Will you try to sell me something?",
    a: "I'll show you what's wrong and how to fix it. If it makes sense for us to work together, I'll mention it — but the audit itself is genuinely free, the recommendations are actionable on your own, and there's zero pressure. Many people take the audit and never hire me. That's fine.",
  },
];

export function AuditPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead(formToLead(e.currentTarget, { source: "audit-request", intent: "audit" }));
      setSubmitted(true);
    } catch (err) {
      toast.error(submitErrorMessage(err, "Sorry — your request didn't send. Please email revivodigitals@gmail.com directly."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Free Website Audit"
        title={
          <>
            Get a free 30-point audit{" "}
            <span className="text-gradient-purple">of your website.</span>
          </>
        }
        subtitle="I'll personally review your website across speed, SEO, design, and conversion — then send you a 15-minute Loom video and a written PDF report. No cost, no obligation, no catch."
      />

      {/* Hero trust strip */}
      <section className="px-4 pb-3 sm:px-6 sm:pb-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 sm:gap-x-6 sm:gap-y-2 sm:text-xs">
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> $499 value, yours free
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Delivered in 3–4 days
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> No obligation, no pressure
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- What's included ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid grid-cols-2 gap-1.5 sm:gap-5 lg:grid-cols-3" stagger={0.06}>
            {AUDIT_CHECKS.map((check) => {
              const Icon = check.icon;
              return (
                <StaggerItem key={check.title}>
                  <div className="group h-full rounded-xl border border-slate-200 bg-white p-2.5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-purple-gradient text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:rounded-xl">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="mt-2.5 font-display text-xs font-bold text-navy sm:mt-5 sm:text-base">
                      {check.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                      {check.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            center
            eyebrow="How it works"
            title={
              <>
                From URL to action plan in{" "}
                <span className="text-gradient-purple">four steps.</span>
              </>
            }
            subtitle="A simple, transparent process. You always know what's happening and what's coming next."
          />
          <div className="grid grid-cols-2 gap-1.5 sm:gap-6 lg:grid-cols-4">
            {AUDIT_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative h-full">
                  {/* Connector arrow */}
                  {i < AUDIT_STEPS.length - 1 && (
                    <div className="absolute -right-3 top-9 z-10 hidden h-6 w-6 place-items-center md:grid">
                      <ArrowRight className="h-5 w-5 text-grape/40" />
                    </div>
                  )}
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-2.5 shadow-soft sm:rounded-2xl sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-display text-xl font-extrabold text-gradient-purple sm:text-3xl">
                        {step.step}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-grape/30 to-transparent" />
                    </div>
                    <h3 className="mt-2 font-display text-xs font-bold text-navy sm:mt-4 sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- What you'll get card ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy p-4 text-white shadow-lift sm:rounded-[2rem] sm:p-12">
              <AuroraBackground />
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:items-center sm:gap-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cta/30 bg-cta/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cta sm:px-3.5 sm:py-1.5 sm:text-xs">
                    <Sparkles className="h-3 w-3" /> $499 value, yours free
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold tracking-tight sm:mt-5 sm:text-3xl">
                    What you&apos;ll walk away with.
                  </h2>
                  <p className="mt-2 max-w-md text-xs text-slate-300 sm:mt-3 sm:text-base">
                    Five concrete deliverables — every one of them genuinely useful, whether or not we ever work together.
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {DELIVERABLES.map((d, i) => (
                    <div
                      key={d}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10 sm:gap-3 sm:rounded-2xl sm:p-4"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cta-gradient text-white sm:h-9 sm:w-9">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>
                      <span className="text-xs font-semibold text-white sm:text-sm">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Audit form ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lift sm:rounded-3xl sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center px-3 py-7 text-center sm:px-6 sm:py-14">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-glow-purple sm:h-16 sm:w-16">
                    <Check className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy sm:mt-6 sm:text-2xl">
                    Got it! I&apos;ll have your audit ready in 3–4 days.
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">— Revivo</p>
                  <p className="mt-3 max-w-md text-xs text-slate-600 sm:mt-4 sm:text-sm">
                    I&apos;ve received your audit request and will personally review your website across all 30 dimensions. You&apos;ll get an email the moment your Loom video and PDF report are ready.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row">
                    <PremiumButton
                      variant="navy"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another site
                    </PremiumButton>
                    <PremiumButton
                      variant="outline"
                      size="md"
                      onClick={() => onNavigate("home")}
                    >
                      Back to home
                    </PremiumButton>
                  </div>
                </div>
              ) : (
                <>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-grape/15 bg-grape/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-grape sm:px-3 sm:text-xs">
                    <Sparkles className="h-3 w-3" /> Free · No obligation
                  </div>
                  <h2 className="mt-2 font-display text-base font-bold tracking-tight text-navy sm:mt-3 sm:text-2xl">
                    Request your free audit
                  </h2>
                  <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                    Takes 2 minutes. I&apos;ll have your audit ready in 3–4 days.
                  </p>

                  <form className="mt-4 space-y-3 sm:mt-7 sm:space-y-4" onSubmit={handleSubmit}>
                    {/* honeypot: hidden from people, bots fill it and are dropped */}
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
                      <Field
                        label="First name"
                        name="firstName"
                        placeholder="Priya"
                        required
                      />
                      <Field
                        label="Last name"
                        name="lastName"
                        placeholder="Sharma"
                        required
                      />
                    </div>
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="priya@clinic.com"
                      required
                    />
                    <Field
                      label="WhatsApp (optional)"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                    />
                    <Field
                      label="Website URL"
                      name="website"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      required
                      hint="The full URL of the website you want audited."
                    />
                    <Field
                      label="Business name"
                      name="business"
                      placeholder="Bright Smile Dental"
                    />
                    <div>
                      <label
                        htmlFor="concern"
                        className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:mb-1.5 sm:text-xs"
                      >
                        What&apos;s your biggest concern about your website?{" "}
                        <span className="text-cta">*</span>
                      </label>
                      <textarea
                        id="concern"
                        name="concern"
                        rows={3}
                        required
                        placeholder="e.g. Not enough leads, slow load time, doesn't rank on Google, looks outdated..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-2 focus:ring-grape/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:focus:ring-4"
                      />
                    </div>

                    <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 sm:rounded-xl sm:px-3.5 sm:py-3">
                      <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                      <p className="text-[11px] text-slate-500 sm:text-xs">
                        Your details are safe. I&apos;ll only use them to deliver your audit — never spam, never shared.
                      </p>
                    </div>

                    <PremiumButton
                      size="lg"
                      className="w-full"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      {loading ? "Sending..." : "Get My Free Audit"}
                    </PremiumButton>

                    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-400 sm:gap-x-4 sm:gap-y-1.5 sm:text-xs">
                      <span className="inline-flex items-center gap-1">
                        <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Delivered in 3–4 days
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> No obligation
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Real human analysis
                      </span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Social proof ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            center
            eyebrow="Social proof"
            title={
              <>
                Clients who started with{" "}
                <span className="text-gradient-purple">a free audit.</span>
              </>
            }
            subtitle="Every one of these business owners came to me through a free audit. Here's what happened next."
          />
          <Stagger className="grid grid-cols-2 gap-1.5 sm:gap-6 lg:grid-cols-3" stagger={0.08}>
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <StaggerItem key={t.name}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-grape/30 hover:shadow-lift sm:rounded-2xl sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-3 w-3 sm:h-4 sm:w-4",
                            i < t.rating
                              ? "fill-cta text-cta"
                              : "fill-slate-200 text-slate-200"
                          )}
                        />
                      ))}
                    </div>
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

      {/* ---------------- FAQ strip ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            center
            eyebrow="Quick answers"
            title={
              <>
                You probably want to know{" "}
                <span className="text-gradient-purple">these things.</span>
              </>
            }
          />
          <div className="mt-4 space-y-2 sm:mt-10 sm:space-y-3">
            {AUDIT_FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`audit-q-${i}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 transition-colors sm:rounded-2xl sm:px-5 data-[state=open]:border-grape/30 data-[state=open]:shadow-soft border-b"
                  >
                    <AccordionTrigger className="py-3 text-left font-display text-xs font-bold text-navy hover:no-underline sm:py-5 sm:text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 text-[11px] leading-relaxed text-slate-600 sm:pb-5 sm:text-sm sm:leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
