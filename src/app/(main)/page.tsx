"use client";

import { useEffect, useState, useCallback, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { LeadModal, type LeadIntent } from "@/components/site/lead-modal";
import type { PageKey } from "@/lib/site-data";

// Home is the landing page — import it eagerly so the first paint is instant.
import { HomePage } from "@/components/pages/home";

// Every other page is code-split into its own chunk, so a first-time visitor
// only downloads the home page's JavaScript. The chunks are prefetched during
// browser idle time (see effect below), so navigating stays instant and the
// fade transition is unchanged.
const AboutPage = dynamic(() => import("@/components/pages/about").then((m) => m.AboutPage));
const ServicesPage = dynamic(() => import("@/components/pages/services").then((m) => m.ServicesPage));
const PosPage = dynamic(() => import("@/components/pages/pos").then((m) => m.PosPage));
const IndustriesPage = dynamic(() => import("@/components/pages/industries").then((m) => m.IndustriesPage));
const PortfolioPage = dynamic(() => import("@/components/pages/portfolio").then((m) => m.PortfolioPage));
const ProcessPage = dynamic(() => import("@/components/pages/process").then((m) => m.ProcessPage));
const PricingPage = dynamic(() => import("@/components/pages/pricing").then((m) => m.PricingPage));
const TestimonialsPage = dynamic(() => import("@/components/pages/testimonials").then((m) => m.TestimonialsPage));
const BlogPage = dynamic(() => import("@/components/pages/blog").then((m) => m.BlogPage));
const FAQPage = dynamic(() => import("@/components/pages/faq").then((m) => m.FAQPage));
const ContactPage = dynamic(() => import("@/components/pages/contact").then((m) => m.ContactPage));
const AuditPage = dynamic(() => import("@/components/pages/audit").then((m) => m.AuditPage));
const CaseStudiesPage = dynamic(() => import("@/components/pages/case-studies").then((m) => m.CaseStudiesPage));
const LegalPage = dynamic(() => import("@/components/pages/legal").then((m) => m.LegalPage));

// Warm every code-split chunk in the background so a click never waits on a
// network download — the module is already cached by the time it's needed.
function prefetchPages() {
  void import("@/components/pages/about");
  void import("@/components/pages/services");
  void import("@/components/pages/pos");
  void import("@/components/pages/industries");
  void import("@/components/pages/portfolio");
  void import("@/components/pages/process");
  void import("@/components/pages/pricing");
  void import("@/components/pages/testimonials");
  void import("@/components/pages/blog");
  void import("@/components/pages/faq");
  void import("@/components/pages/contact");
  void import("@/components/pages/audit");
  void import("@/components/pages/case-studies");
  void import("@/components/pages/legal");
}

const VALID_PAGES: PageKey[] = [
  "home", "about", "services", "pos", "industries", "portfolio",
  "process", "pricing", "testimonials", "blog", "faq",
  "contact", "audit", "case-studies", "legal",
];

function getInitialPage(): PageKey {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash.replace("#/", "").replace("#", "");
  if (hash && VALID_PAGES.includes(hash as PageKey)) {
    return hash as PageKey;
  }
  return "home";
}

export default function Home() {
  const [page, setPage] = useState<PageKey>("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [intent, setIntent] = useState<LeadIntent>("consultation");
  const didInit = useRef(false);

  // Read deep-link hash on first client mount + listen for hashchange
  useEffect(() => {
    const applyHash = () => {
      const next = getInitialPage();
      setPage((prev) => (prev === next ? prev : next));
    };
    if (!didInit.current) {
      didInit.current = true;
      applyHash();
    }
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Prefetch the other pages once the browser is idle, so navigation is instant.
  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(prefetchPages, { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(prefetchPages, 1200);
    return () => clearTimeout(t);
  }, []);

  // Keep URL hash in sync with current page
  useEffect(() => {
    if (page === "home") {
      history.replaceState(null, "", window.location.pathname);
    } else {
      history.replaceState(null, "", `#/${page}`);
    }
  }, [page]);

  const navigate = useCallback((p: PageKey) => {
    setPage(p);
  }, []);

  const openModal = useCallback((i: LeadIntent = "consultation") => {
    setIntent(i);
    setModalOpen(true);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "about": return <AboutPage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "services": return <ServicesPage onNavigate={navigate} onCTA={() => openModal("project")} />;
      case "pos": return <PosPage onNavigate={navigate} onCTA={() => openModal("project")} />;
      case "industries": return <IndustriesPage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "portfolio": return <PortfolioPage onNavigate={navigate} onCTA={() => openModal("project")} />;
      case "process": return <ProcessPage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "pricing": return <PricingPage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "testimonials": return <TestimonialsPage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
      case "blog": return <BlogPage onNavigate={navigate} onCTA={() => openModal("general")} />;
      case "faq": return <FAQPage onNavigate={navigate} onCTA={() => openModal("general")} />;
      case "contact": return <ContactPage onNavigate={navigate} onCTA={() => openModal("general")} />;
      case "audit": return <AuditPage onNavigate={navigate} onCTA={() => openModal("audit")} />;
      case "case-studies": return <CaseStudiesPage onNavigate={navigate} onCTA={() => openModal("project")} />;
      case "legal": return <LegalPage onNavigate={navigate} onCTA={() => openModal("general")} />;
      default: return <HomePage onNavigate={navigate} onCTA={() => openModal("consultation")} />;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white">
      <Navbar current={page} onNavigate={navigate} onCTA={() => openModal("consultation")} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          <Suspense fallback={<div className="min-h-screen" />}>
            {renderPage()}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={navigate} onCTA={() => openModal("consultation")} />

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        intent={intent}
      />
    </div>
  );
}
