"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, Sparkles, Calendar, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { PremiumButton } from "./primitives";
import { toast } from "sonner";
import { submitLead, formToLead, submitErrorMessage } from "@/lib/forms";

export type LeadIntent = "consultation" | "audit" | "project" | "general";

export function LeadModal({
  open,
  onClose,
  intent = "consultation",
}: {
  open: boolean;
  onClose: () => void;
  intent?: LeadIntent;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const titles: Record<LeadIntent, { title: string; sub: string; cta: string }> = {
    consultation: {
      title: "Book your free consultation",
      sub: "30 minutes. No pressure. You leave with a clear plan — even if we don't work together.",
      cta: "Book My Free Consultation",
    },
    audit: {
      title: "Get your free website audit",
      sub: "A 30-point audit covering speed, SEO, design, and conversion. Delivered as a Loom video + PDF report in 3–4 days.",
      cta: "Request My Free Audit",
    },
    project: {
      title: "Start your project",
      sub: "Tell me about your project. I'll reply within 24 hours with next steps and a fixed-price quote.",
      cta: "Send Project Brief",
    },
    general: {
      title: "Get in touch",
      sub: "Questions, ideas, or just want to say hi? I read every message and reply within 24 hours.",
      cta: "Send Message",
    },
  };
  const config = titles[intent];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitLead(formToLead(e.currentTarget, { source: "lead-modal", intent }));
      setSubmitted(true);
      toast.success("Thanks! I'll be in touch within 24 hours.");
    } catch (err) {
      toast.error(submitErrorMessage(err, "Sorry — that didn't send. Please email revivodigitals@gmail.com directly."));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-grape via-royal to-cta" />

            <button
              onClick={handleClose}
              className="absolute right-4 top-5 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-navy"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="px-6 py-10 text-center sm:px-10 sm:py-16">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-glow-purple sm:h-16 sm:w-16">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy sm:mt-6 sm:text-2xl">You&apos;re all set!</h3>
                <p className="mt-2 text-slate-600">
                  I&apos;ve received your request and will personally reply within 24 hours. Talk soon.
                </p>
                <div className="mt-6 sm:mt-8">
                  <PremiumButton variant="navy" size="md" onClick={handleClose}>
                    Close
                  </PremiumButton>
                </div>
              </div>
            ) : (
              <div className="max-h-[88vh] overflow-y-auto px-6 py-7 sm:px-10 sm:py-9 premium-scroll">
                <div className="inline-flex items-center gap-2 rounded-full border border-grape/15 bg-grape/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-grape">
                  <Sparkles className="h-3 w-3" /> Free · No obligation
                </div>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  {config.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{config.sub}</p>

                <form className="mt-4 space-y-3 sm:mt-6 sm:space-y-4" onSubmit={handleSubmit}>
                  {/* honeypot: hidden from people, bots fill it and are dropped */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First name" name="firstName" placeholder="Priya" required />
                    <Field label="Last name" name="lastName" placeholder="Sharma" required />
                  </div>
                  <Field label="Email" name="email" type="email" placeholder="priya@clinic.com" required />
                  <Field label="Phone (optional)" name="phone" type="tel" placeholder="+91 98765 43210" />
                  <Field label="Business name" name="business" placeholder="Bright Smile Dental" />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What can I help with?
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell me about your business and what you're looking for..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-4 focus:ring-grape/10"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <p className="text-xs text-slate-500">
                      Your details are safe. I&apos;ll only use them to reply to your request — never spam, never shared.
                    </p>
                  </div>

                  <PremiumButton size="lg" className="w-full" icon={<ArrowRight className="h-4 w-4" />}>
                    {loading ? "Sending..." : config.cta}
                  </PremiumButton>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Reply in 24h</span>
                    <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> No spam</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label} {required && <span className="text-cta">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-all focus:border-grape focus:bg-white focus:outline-none focus:ring-4 focus:ring-grape/10"
      />
    </div>
  );
}
