"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is ClinicOS suitable for a single-doctor clinic?",
    a: "Absolutely. ClinicOS scales from a single-doctor clinic to a multi-speciality chain. The single-doctor plan includes the same modules — appointments, EMR, billing, recalls — without per-feature gating. You can start small and grow without migrating.",
  },
  {
    q: "Does it really work without internet?",
    a: "Yes. ClinicOS is built on an offline-first architecture. Your front desk, doctors and pharmacy continue to work normally during an internet outage. Once connectivity returns, every change syncs to the cloud automatically with conflict-free replication.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most single-clinic practices are live within 2 working days. Multi-branch chains typically take 5–7 days including staff training, data migration and configuration. Our team handles data import from your existing system at no extra cost.",
  },
  {
    q: "Can I migrate from my existing software?",
    a: "Yes. We support migration from common Indian and global HMS systems including CSV imports, Excel uploads and direct database imports. Our onboarding team handles the migration end-to-end and validates the data before go-live.",
  },
  {
    q: "Is patient data secure and compliant?",
    a: "ClinicOS uses AES-256 encryption at rest and TLS 1.3 in transit. Access is role-based and every action is captured in an immutable audit log. The architecture is HIPAA-aligned, NABH-ready and aligned with India's DPDP Act 2023.",
  },
  {
    q: "Do you support insurance and TPA workflows?",
    a: "Yes. Billing includes pre-authorisation, claim submission, partial claim tracking, TPA-wise ageing and reconciliation. We support major Indian TPAs out of the box and can add new ones on request.",
  },
  {
    q: "Can I use it on my tablet or iPad?",
    a: "Yes. ClinicOS is fully responsive and works on any modern browser — desktop, laptop, tablet or iPad. Many doctors use their iPad during consults while reception uses a desktop.",
  },
  {
    q: "What about support and training?",
    a: "Every plan includes free onboarding training for your staff. Ongoing support is available via in-app chat, WhatsApp and phone. Multi-branch chains get a dedicated account manager and quarterly business reviews.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is per clinic per month, with tiered plans based on doctor count and module access. There are no per-patient or per-appointment fees. Annual subscriptions get a discount. Book a demo to receive a tailored quote.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-6 lg:py-10 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-emerald">answered.</span>
            </>
          }
          description="Everything you need to know before booking a demo. Still have questions? Just ask during the demo — we love them."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-5 max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-black/[0.06] rounded-xl px-3.5 sm:px-5 data-[state=open]:shadow-premium data-[state=open]:border-emerald-200/60 transition-all"
              >
                <AccordionTrigger className="text-left font-medium text-[13px] sm:text-[14.5px] text-foreground hover:no-underline py-3 sm:py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[12px] sm:text-[13.5px] text-muted-foreground leading-relaxed pb-3 sm:pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
