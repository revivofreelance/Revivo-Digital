import { Header } from "@/components/pos/salon/sections/Header";
import { Hero } from "@/components/pos/salon/sections/Hero";
import { TrustedBy } from "@/components/pos/salon/sections/TrustedBy";
import { Workflow } from "@/components/pos/salon/sections/Workflow";
import { FeatureGrid } from "@/components/pos/salon/sections/FeatureGrid";
import { DashboardShowcase } from "@/components/pos/salon/sections/DashboardShowcase";
import { ProductShowcases } from "@/components/pos/salon/sections/ProductShowcases";
import { Comparison } from "@/components/pos/salon/sections/Comparison";
import { FAQ } from "@/components/pos/salon/sections/FAQ";
import { FinalCTA } from "@/components/pos/salon/sections/FinalCTA";
import { Footer } from "@/components/pos/salon/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Workflow />
        <DashboardShowcase />
        <ProductShowcases />
        <FeatureGrid />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
