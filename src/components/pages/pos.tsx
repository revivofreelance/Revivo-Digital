"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  Reveal,
  Stagger,
  StaggerItem,
  SectionHeading,
} from "@/components/site/primitives";
import { PageShell, PageHero } from "@/components/site/page-shell";
import { CTASection } from "@/components/site/cta-section";
import { POS_PRODUCTS } from "@/lib/site-data";
import type { PageKey, PosProduct } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/* ---------------- Product card ---------------- */
function ProductCard({ product, index }: { product: PosProduct; index: number }) {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:rounded-3xl"
    >
      {/* Preview image */}
      <div className={cn("relative aspect-[16/10] overflow-hidden bg-gradient-to-br", product.accent)}>
        <img
          loading="lazy"
          decoding="async"
          src={product.image}
          alt={`${product.name} product screenshot`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 shadow-soft backdrop-blur sm:left-5 sm:top-5 sm:h-11 sm:w-11">
          <Icon className="h-4 w-4 text-navy sm:h-5 sm:w-5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-7">
        <h3 className="font-display text-lg font-bold text-navy sm:text-2xl">{product.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-grape sm:text-sm">
          {product.tagline}
        </p>
        <p className="mt-2.5 text-pretty text-xs text-slate-600 sm:mt-3 sm:text-sm">
          {product.description}
        </p>

        <ul className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-700 sm:text-sm">
              <span className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-grape/10 text-grape">
                <Check className="h-2.5 w-2.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
        >
          Explore {product.name}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ============================ POS OVERVIEW PAGE ============================ */
export function PosPage({
  onNavigate,
  onCTA,
}: {
  onNavigate: (page: PageKey) => void;
  onCTA: () => void;
}) {
  return (
    <PageShell>
      {/* Hero */}
      <PageHero
        eyebrow="In-house products"
        title={
          <>
            We don&apos;t just build websites.{" "}
            <span className="text-gradient-purple">We build POS systems.</span>
          </>
        }
        subtitle="Three full point-of-sale platforms, designed and built in-house for clinics, restaurants and salons. Every screen below is a live product — not a mockup."
      />

      {/* Product grid */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {POS_PRODUCTS.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why we build our own products */}
      <section className="px-4 py-3 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Why it matters"
              title="Built by the same team that builds your website."
              subtitle="Designing full operating systems for real businesses — not just marketing pages — means we understand the entire customer journey: from the first Google search to the till at checkout."
              className="mx-auto"
            />
          </Reveal>

          <Stagger className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {[
              {
                title: "Full-stack thinking",
                body: "We design the booking flow, the checkout screen and the website that sends customers there — all as one connected system.",
              },
              {
                title: "Real operational depth",
                body: "Inventory, staff commissions, live queues, kitchen displays — the details that only show up after months of actual use.",
              },
              {
                title: "Same craft, every layer",
                body: "The polish you see on your homepage is the same polish that goes into the software your front desk uses every day.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-4 sm:rounded-2xl sm:p-6">
                  <h3 className="text-sm font-bold text-navy sm:text-base">{item.title}</h3>
                  <p className="mt-1.5 text-pretty text-xs text-slate-600 sm:mt-2 sm:text-sm">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        onCTA={onCTA}
        onSecondary={() => onNavigate("portfolio")}
        secondary="See more of our work"
        title="Need a POS system of your own?"
        subtitle="Whether it's a customized version of one of these or something built from scratch for your business, let's talk about what you need."
      />
    </PageShell>
  );
}
