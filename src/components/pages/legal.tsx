"use client";

import { useState } from "react";
import {
  Mail,
  Shield,
  FileText,
  Cookie,
  ArrowRight,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import type { PageKey } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/* ---------------- Legal content types ---------------- */
type LegalSection = { id: string; heading: string; body: string };
type LegalDoc = {
  id: "privacy" | "terms" | "cookie";
  label: string;
  updated: string;
  intro: string;
  icon: typeof Shield;
  sections: LegalSection[];
};

/* ---------------- Privacy Policy ---------------- */
const PRIVACY: LegalDoc = {
  id: "privacy",
  label: "Privacy Policy",
  updated: "Last updated: November 1, 2024",
  icon: Shield,
  intro:
    "This Privacy Policy explains how Revivo (\"I\", \"me\", or \"my\") collects, uses, and protects your information when you visit this website or any of my client websites I maintain on your behalf. I believe in radical transparency — your data is yours, and I treat it that way. If you have any questions after reading this, just email me and I'll personally reply.",
  sections: [
    {
      id: "collect",
      heading: "Information I collect",
      body: "I collect only the information you voluntarily provide when you fill out a contact form, request a free audit, or email me directly. This typically includes your name, email address, phone number, business name, and whatever you write in your message. I do not use hidden tracking pixels, browser fingerprinting, or third-party data brokers to enrich your profile. Website analytics are collected anonymously in aggregate using privacy-friendly tools — I see that \"someone in Bengaluru visited my pricing page,\" not who that someone is.",
    },
    {
      id: "use",
      heading: "How I use your information",
      body: "I use your information for one purpose: to reply to your inquiry and, if we end up working together, to deliver the services you hired me for. That includes sending you proposals, invoices, project updates, and the occasional follow-up to check in. I will never send you unsolicited marketing email, sell your data to anyone, or use your information to build an advertising profile. If I ever add a genuine newsletter (with real, useful content), it will be strictly opt-in with one-click unsubscribe.",
    },
    {
      id: "sharing",
      heading: "Information sharing",
      body: "I do not sell, rent, or trade your personal information — ever. The only third parties who may handle your data are the tools I use to run my business: my email provider (to send you replies), my invoicing tool (to bill you if we work together), and my hosting provider (Vercel, for serving this website). Each of these vendors has their own privacy controls and is contractually bound to handle data responsibly. I never share your information with anyone for marketing purposes.",
    },
    {
      id: "security",
      heading: "Data security",
      body: "I take security seriously. All form submissions are encrypted in transit via HTTPS. Your data is stored in access-controlled systems protected by hardware-key authentication. I do not store credit card details — all payments are processed by Stripe, which is PCI-DSS compliant. While no system is perfectly secure, I follow industry best practices and would promptly notify you (and the relevant authorities) in the unlikely event of a data breach affecting your information.",
    },
    {
      id: "rights",
      heading: "Your rights",
      body: "Depending on where you live (especially if you're in the EU, UK, or California), you may have specific rights regarding your personal data. These include the right to access the data I hold about you, the right to request correction or deletion, the right to object to processing, and the right to data portability. To exercise any of these rights, just email me at revivodigitals@gmail.com — I'll verify your identity and respond within 30 days, usually much faster.",
    },
    {
      id: "retention",
      heading: "Data retention",
      body: "I retain your information only as long as necessary to fulfill the purposes described above. If we never work together, I delete your inquiry data after 24 months. If we do work together, I retain project records (invoices, contracts, deliverables) for 7 years to comply with tax and legal requirements, then securely delete them. You can request earlier deletion at any time, subject to legal retention obligations.",
    },
    {
      id: "transfers",
      heading: "International transfers",
      body: "I'm based in India, but I work with clients worldwide. Your data may be processed on servers located in the United States, the European Union, or other jurisdictions as part of normal service delivery (for example, when I send you an email through a US-based email provider). I only use vendors who provide adequate safeguards for international data transfers, such as Standard Contractual Clauses or equivalent legal mechanisms.",
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: "I may update this Privacy Policy from time to time to reflect changes in my practices, technologies, or legal requirements. When I do, I'll update the \"Last updated\" date at the top of this page. For material changes that affect how I handle your data, I'll also notify you directly by email if you've been in touch in the previous 12 months. I encourage you to review this page periodically.",
    },
    {
      id: "contact",
      heading: "Contact",
      body: "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please email me at revivodigitals@gmail.com. I read every email personally and reply within 24 hours, usually much faster. If you're not satisfied with my response, you have the right to lodge a complaint with your local data protection authority.",
    },
  ],
};

/* ---------------- Terms & Conditions ---------------- */
const TERMS: LegalDoc = {
  id: "terms",
  label: "Terms & Conditions",
  updated: "Last updated: November 1, 2024",
  icon: FileText,
  intro:
    "These Terms & Conditions govern any project, service, or engagement between you (\"you\", \"the client\") and Revivo (\"I\", \"me\", \"the service provider\"). By hiring me, requesting a proposal, or paying an invoice, you agree to these terms. They're written in plain English on purpose — I want us both to know exactly what we're agreeing to before we start working together. If anything is unclear, just ask.",
  sections: [
    {
      id: "acceptance",
      heading: "Acceptance of terms",
      body: "By engaging my services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions in their entirety. If you do not agree with any part of these terms, you should not engage my services. These terms supersede any prior agreements or understandings, whether written or oral, between us. Any custom terms agreed in a signed proposal or contract will take precedence over these standard terms in case of conflict.",
    },
    {
      id: "services",
      heading: "Services description",
      body: "I design, develop, and maintain websites and related digital products for local and regional businesses. Specific deliverables, scope, and pricing for your project will be detailed in a separate written proposal or statement of work. The proposal, once accepted by you in writing (including by email), becomes a binding part of our agreement. Any work outside the agreed scope will be quoted separately and billed at my standard hourly rate of $100/hour unless otherwise agreed.",
    },
    {
      id: "scope",
      heading: "Project scope & deliverables",
      body: "Project scope is defined in the accepted proposal and includes the specific pages, features, integrations, and services described therein. Custom illustrations, stock photography, premium fonts, third-party integrations, and ongoing marketing services are not included unless explicitly listed. If you request additional work during the project, I'll provide a written change order with revised pricing and timeline before starting. No out-of-scope work will be billed without your prior written approval.",
    },
    {
      id: "payment",
      heading: "Payment terms",
      body: "Standard payment terms are 50% of the total project fee due at project kickoff to reserve your slot, and the remaining 50% due prior to website launch. For projects over $4,000, I can split payments into three milestone installments tied to deliverables. All invoices are due within 7 days of issue and can be paid by bank transfer, credit card, or UPI. Late payments may incur a 1.5% monthly interest charge. Refunds for work already completed are issued at my discretion based on percentage complete.",
    },
    {
      id: "timeline",
      heading: "Timeline & delivery",
      body: "Project timelines are estimates based on current workload and are stated in the proposal. While I commit to delivering within the agreed timeline, delays caused by late client feedback, missing content, or third-party dependencies (domain registrars, payment processors, etc.) may extend the delivery date. I'll always communicate any expected delays as soon as I become aware of them. Timelines pause while waiting for client feedback and resume when you reply.",
    },
    {
      id: "revisions",
      heading: "Revisions & changes",
      body: "Each plan includes a specific number of revision rounds as outlined in your proposal. A revision round is consolidated feedback on a single deliverable — not a complete redesign. Additional revision rounds beyond what's included are billed at $100/hour. Major scope changes (new pages, new features, fundamentally different design direction) are quoted as separate change orders. I aim to make every revision meaningful and to get things right as efficiently as possible.",
    },
    {
      id: "ip",
      heading: "Intellectual property",
      body: "Upon receipt of full payment, you own 100% of the design, code, content, and other deliverables created specifically for your project — including all intellectual property rights. I retain the right to display your project in my portfolio and to describe the work in case studies, unless you've explicitly requested confidentiality in writing. I retain ownership of any pre-existing frameworks, tools, or components used across multiple projects, though you receive a perpetual license to use them within your project.",
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      body: "I treat all client information — business strategy, customer data, financial details, login credentials — as strictly confidential. I will not disclose any confidential information to third parties without your written consent, except as required by law. Any access credentials you share with me will be stored in an encrypted password manager and shared only with members of your team on a need-to-know basis. This confidentiality obligation survives termination of our engagement.",
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      body: "My total liability for any claim arising from my services is limited to the total amount you paid me for the project in question. I am not liable for indirect, incidental, consequential, or punitive damages, including loss of profits, loss of data, or business interruption. I am not responsible for issues caused by third-party services (hosting providers, payment processors, API providers) or by changes you make to the website after handoff. I carry professional liability insurance for added peace of mind.",
    },
    {
      id: "termination",
      heading: "Termination",
      body: "Either party may terminate the engagement with 14 days' written notice. If you terminate after work has begun, you are liable for payment of all work completed up to the termination date, including any non-refundable third-party costs incurred on your behalf. If I terminate for cause (non-payment, breach of terms, abusive behavior), all unpaid invoices become immediately due. Upon termination, I will deliver all work completed up to that point and transfer ownership of any deliverables you have paid for.",
    },
    {
      id: "law",
      heading: "Governing law",
      body: "These Terms & Conditions are governed by the laws of India. Any disputes arising from or relating to our engagement will be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India. Before initiating legal proceedings, both parties agree to attempt good-faith mediation. If you are located outside India, you agree that any necessary legal proceedings will be conducted remotely where possible to minimize inconvenience.",
    },
    {
      id: "contact",
      heading: "Contact",
      body: "If you have any questions about these Terms & Conditions, please email me at revivodigitals@gmail.com. I'm happy to walk you through any clause, discuss custom terms for your project, or clarify anything that seems unclear. It's important to me that we both feel confident and aligned before starting any work together.",
    },
  ],
};

/* ---------------- Cookie Policy ---------------- */
const COOKIES: LegalDoc = {
  id: "cookie",
  label: "Cookie Policy",
  updated: "Last updated: November 1, 2024",
  icon: Cookie,
  intro:
    "This Cookie Policy explains how I use cookies and similar technologies on this website. I take a minimal approach to cookies — I use only what's strictly necessary to make the site work, plus a small amount of anonymous analytics to understand which content is helpful. I don't use cookies for advertising, cross-site tracking, or building profiles about you. This policy explains exactly what I do and don't use.",
  sections: [
    {
      id: "what",
      heading: "What are cookies",
      body: "Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences over time, making your experience smoother and more personalized. Cookies are widely used across the web and are not inherently harmful — but they can be used in ways that compromise privacy, which is why I'm transparent about exactly which cookies I set and why. You can control or delete cookies at any time through your browser settings.",
    },
    {
      id: "how",
      heading: "How I use cookies",
      body: "I use cookies for two purposes only: (1) to make essential site features work, like remembering your dark/light mode preference or that you've closed a notification banner, and (2) to collect anonymous analytics in aggregate so I can understand which articles people read and which pages they find useful. I do not use cookies to identify you personally, target you with ads, or track you across other websites. Every cookie I set has a specific, limited purpose.",
    },
    {
      id: "types",
      heading: "Types of cookies I use",
      body: "I use three categories of cookies. Strictly necessary cookies keep the site functioning — these can't be disabled. Preference cookies remember your settings (theme, dismissed banners) and expire after 30 days. Analytics cookies collect anonymous usage data through a privacy-friendly tool and expire after 14 months. I do not use marketing or advertising cookies of any kind. A full list of specific cookies, their names, and durations is available on request.",
    },
    {
      id: "third-party",
      heading: "Third-party cookies",
      body: "This website uses a minimal set of third-party services that may set their own cookies. These include my hosting provider (Vercel) for site performance and a privacy-friendly analytics tool (Plausible or Fathom) for usage statistics. I've deliberately chosen tools that don't track you across other websites, don't sell your data, and comply with GDPR and CCPA. I do not embed social media widgets, advertising networks, or any other third-party services that would compromise your privacy.",
    },
    {
      id: "managing",
      heading: "Managing cookies",
      body: "You have full control over cookies. Most browsers allow you to refuse cookies or alert you when cookies are being sent — check your browser's help documentation for instructions. Note that disabling strictly necessary cookies may affect site functionality. If you'd like to opt out of analytics cookies specifically, you can do so through the privacy preferences panel on this site. Disabling cookies doesn't prevent you from using this website — it just means I won't be able to remember your preferences between visits.",
    },
    {
      id: "updates",
      heading: "Updates to this policy",
      body: "I may update this Cookie Policy if I add new features that require new cookies, change analytics providers, or need to comply with new regulations. When I make changes, I'll update the \"Last updated\" date at the top of this page. For significant changes — like adding a new category of cookie — I'll also display a brief notification on the site. I encourage you to review this page periodically to stay informed about how I use cookies.",
    },
    {
      id: "contact",
      heading: "Contact",
      body: "If you have any questions about this Cookie Policy, want a full list of specific cookies I use, or would like to request that I delete any cookie data associated with your browser, please email me at revivodigitals@gmail.com. I'll personally reply within 24 hours and am happy to provide any additional detail you need.",
    },
  ],
};

const DOCS = [PRIVACY, TERMS, COOKIES];

/* ---------------- Section renderer ---------------- */
function LegalDocView({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl">
      <Reveal>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:rounded-3xl sm:p-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-purple-gradient text-white shadow-glow-purple sm:h-11 sm:w-11 sm:rounded-xl">
              <doc.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-navy sm:text-lg sm:text-2xl">
                {doc.label}
              </h2>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px] sm:text-xs">
                {doc.updated}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:mt-4 sm:text-sm sm:mt-6 sm:text-[15px]">
            {doc.intro}
          </p>

          <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-8">
            {doc.sections.map((section) => (
              <section key={section.id} id={`${doc.id}-${section.id}`} className="scroll-mt-28">
                <h3 className="font-display text-xs font-bold text-navy sm:text-sm sm:text-lg">
                  {section.heading}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-[15px]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Doc footer */}
          <div className="mt-6 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:mt-10 sm:gap-3 sm:rounded-2xl sm:p-4">
            <Mail className="h-3.5 w-3.5 shrink-0 text-grape sm:h-4 sm:w-4" />
            <p className="text-[11px] text-slate-600 sm:text-sm">
              Questions? Email{" "}
              <a
                href="mailto:revivodigitals@gmail.com"
                className="font-semibold text-grape hover:underline"
              >
                revivodigitals@gmail.com
              </a>{" "}
              for a personal reply within 24 hours.
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

/* ---------------- Quick nav sidebar ---------------- */
function QuickNav({ doc }: { doc: LegalDoc }) {
  return (
    <aside className="hidden lg:block">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          On this page
        </div>
        <ul className="mt-3 space-y-1.5">
          {doc.sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${doc.id}-${s.id}`}
                className="block rounded-lg px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-grape/5 hover:text-grape"
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function LegalPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (p: PageKey) => void;
  onCTA: () => void;
}) {
  const [active, setActive] = useState<"privacy" | "terms" | "cookie">("privacy");
  const activeDoc = DOCS.find((d) => d.id === active)!;

  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Legal <span className="text-gradient-purple">documentation.</span>
          </>
        }
        subtitle="The fine print, in plain English. I believe in transparency — these documents explain exactly how I handle your data, your project, and your privacy."
      />

      {/* ---------------- Tab switcher ---------------- */}
      <section className="px-4 pb-4 sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Tabs
              value={active}
              onValueChange={(v) => setActive(v as typeof active)}
              className="w-full"
            >
              <TabsList className="flex w-full justify-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-soft max-sm:h-auto sm:gap-1.5 sm:p-1.5">
                {DOCS.map((doc) => {
                  const Icon = doc.icon;
                  const isActive = active === doc.id;
                  return (
                    <TabsTrigger
                      key={doc.id}
                      value={doc.id}
                      className={cn(
                        "inline-flex flex-1 items-center justify-center gap-1 rounded-full px-2 py-2.5 text-[11px] font-semibold transition-all max-sm:h-auto max-[374px]:px-1 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm",
                        isActive
                          ? "data-[state=active]:bg-navy text-white shadow-soft"
                          : "text-slate-600 hover:text-navy"
                      )}
                    >
                      <Icon className="h-3 w-3 max-sm:hidden sm:h-4 sm:w-4" />
                      {doc.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {/* ---------------- Tab content ---------------- */}
              {DOCS.map((doc) => (
                <TabsContent key={doc.id} value={doc.id} className="mt-6 sm:mt-10">
                  <LegalDocView doc={doc} />
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Contact band ---------------- */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-navy p-5 text-center shadow-lift sm:rounded-3xl sm:p-12">
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative">
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-cta-gradient text-white shadow-glow-cta sm:h-12 sm:w-12 sm:rounded-xl">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h2 className="mt-3 font-display text-base font-bold text-white sm:mt-5 sm:text-2xl">
                  Questions about these documents?
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-xs text-slate-300 sm:mt-3 sm:text-base">
                  Email{" "}
                  <a
                    href="mailto:revivodigitals@gmail.com"
                    className="font-semibold text-cta hover:underline"
                  >
                    revivodigitals@gmail.com
                  </a>{" "}
                  and I&apos;ll personally reply within 24 hours.
                </p>

                <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                  <a href="mailto:revivodigitals@gmail.com">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cta-gradient px-4 py-2 text-xs font-semibold text-white shadow-glow-cta transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3.5 sm:text-base">
                      Email me <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </a>
                  <button
                    onClick={onCTA}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-base"
                  >
                    Book a call
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-400 sm:mt-7 sm:gap-x-6 sm:gap-y-2 sm:text-xs">
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400 sm:h-3.5 sm:w-3.5" /> Personal reply in 24h
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400 sm:h-3.5 sm:w-3.5" /> No legal jargon
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-400 sm:h-3.5 sm:w-3.5" /> Plain English, always
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
