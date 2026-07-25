"use client";

import { useState } from "react";
import {
  Mail,
  Clock,
  ArrowRight,
  Check,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  PremiumButton,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { submitLead, formToLead, submitErrorMessage } from "@/lib/forms";
import { toast } from "sonner";

/* ---------------- Reusable field ---------------- */
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
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
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-2 focus:ring-grape/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:focus:ring-4"
      />
    </div>
  );
}

export function ContactPage({
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
      await submitLead(formToLead(e.currentTarget, { source: "contact-page", intent: "message" }));
      setSubmitted(true);
    } catch (err) {
      toast.error(submitErrorMessage(err, "Sorry — your message didn't send. Please email revivodigitals@gmail.com directly."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="text-gradient-purple">your business.</span>
          </>
        }
        subtitle="The fastest way to reach me is the form below. I read every message personally and reply within 24 hours — usually much faster during business hours."
      />

      {/* ---------------- Two-column contact ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-[1.3fr_1fr]">
            {/* LEFT: Contact form */}
            <Reveal>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:rounded-3xl sm:p-7">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center px-3 py-7 text-center sm:px-6 sm:py-16">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-glow-purple sm:h-16 sm:w-16">
                      <Check className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy sm:mt-6 sm:text-2xl">
                      Thanks! I&apos;ll reply within 24 hours.
                    </h3>
                    <p className="mt-2 max-w-sm text-xs text-slate-600 sm:text-sm">
                      Your message just landed in my inbox. I read every one personally — expect a reply soon, often within a few hours during business hours.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                      <PremiumButton
                        variant="navy"
                        size="md"
                        onClick={() => setSubmitted(false)}
                      >
                        Send another message
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
                      <Sparkles className="h-3 w-3" /> Send a message
                    </div>
                    <h2 className="mt-2 font-display text-base font-bold tracking-tight text-navy sm:mt-3 sm:text-2xl">
                      Tell me about your project
                    </h2>
                    <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                      Fill out the form and I&apos;ll personally reply within 24 hours with next steps.
                    </p>

                    <form className="mt-4 space-y-3 sm:mt-7 sm:space-y-4" onSubmit={handleSubmit}>
                      {/* honeypot: hidden from people, bots fill it and are dropped */}
                      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field
                          label="First name"
                          name="firstName"
                          placeholder="Priya"
                          required
                          autoComplete="given-name"
                        />
                        <Field
                          label="Last name"
                          name="lastName"
                          placeholder="Sharma"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="priya@clinic.com"
                        required
                        autoComplete="email"
                      />
                      <Field
                        label="Phone (optional)"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                      <Field
                        label="Business name"
                        name="business"
                        placeholder="Bright Smile Dental"
                        autoComplete="organization"
                      />
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:mb-1.5 sm:text-xs"
                        >
                          What can I help with? <span className="text-cta">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          required
                          placeholder="Tell me about your business, your goals, and what you're looking for..."
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-2 focus:ring-grape/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:focus:ring-4"
                        />
                      </div>

                      <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 sm:rounded-xl sm:px-3.5 sm:py-3">
                        <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500 sm:h-4 sm:w-4" />
                        <p className="text-[11px] text-slate-500 sm:text-xs">
                          Your details are safe. I&apos;ll only use them to reply to your request — never spam, never shared.
                        </p>
                      </div>

                      <PremiumButton
                        size="lg"
                        className="w-full"
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </PremiumButton>

                      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-400 sm:gap-x-4 sm:gap-y-1.5 sm:text-xs">
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Reply within 24h
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> No spam, ever
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3 w-3 text-emerald-500 sm:h-3.5 sm:w-3.5" /> Your details stay private
                        </span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* RIGHT: Contact info column */}
            <div>
              <Stagger className="space-y-4 sm:space-y-6" stagger={0.07}>
                {/* Response time card */}
                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-3xl sm:p-7">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12 sm:rounded-xl">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm font-bold text-navy sm:text-base">
                          I reply within 24 hours
                        </h3>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:mt-1.5 sm:text-sm">
                          Usually within 2–4 hours during business hours (9am–7pm IST, Mon–Fri).
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Direct contact card */}
                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-3xl sm:p-7">
                    <h3 className="font-display text-sm font-bold text-navy sm:text-base">
                      Direct contact
                    </h3>
                    <ul className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-4">
                      <li>
                        <a
                          href="mailto:revivodigitals@gmail.com"
                          className="group flex items-center gap-2.5 text-xs text-slate-600 transition-colors hover:text-navy sm:gap-3.5 sm:text-sm"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-grape/10 text-grape transition-colors group-hover:bg-grape group-hover:text-white sm:h-10 sm:w-10">
                            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </span>
                          <span>
                            <span className="block text-[11px] text-slate-400 sm:text-xs">Email</span>
                            revivodigitals@gmail.com
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>

                {/* Business hours card */}
                <StaggerItem>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft sm:rounded-3xl sm:p-7">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-grape sm:h-4 sm:w-4" />
                      <h3 className="font-display text-sm font-bold text-navy sm:text-base">
                        Business hours
                      </h3>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs sm:mt-5 sm:space-y-3 sm:text-sm">
                      <li className="flex items-center justify-between">
                        <span className="text-slate-500">Mon – Fri</span>
                        <span className="font-semibold text-navy">9am – 7pm IST</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-slate-500">Saturday</span>
                        <span className="font-semibold text-navy">10am – 2pm IST</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-slate-500">Sunday</span>
                        <span className="font-semibold text-slate-400">Closed</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Closing band ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-soft sm:rounded-3xl sm:p-10">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-purple-gradient text-white shadow-glow-purple sm:h-12 sm:w-12 sm:rounded-xl">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-navy sm:mt-5 sm:text-2xl">
                Prefer email?
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 sm:mt-2 sm:text-sm">
                Send me a note any time. I read every email personally and reply within 24 hours.
              </p>
              <div className="mt-3 sm:mt-5">
                <a
                  href="mailto:revivodigitals@gmail.com"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-grape transition-colors hover:text-navy max-sm:py-2 sm:gap-2 sm:text-lg"
                >
                  revivodigitals@gmail.com
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
