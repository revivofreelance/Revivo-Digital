import { Navbar } from "@/components/pos/restaurant/navbar";
import { Hero } from "@/components/pos/restaurant/hero";
import { TrustedBy } from "@/components/pos/restaurant/trusted-by";
import { ProductOverview } from "@/components/pos/restaurant/product-overview";
import { DashboardShowcase } from "@/components/pos/restaurant/dashboard-showcase";
import { NewOrderShowcase } from "@/components/pos/restaurant/new-order-showcase";
import { KitchenShowcase } from "@/components/pos/restaurant/kitchen-showcase";
import { WaitlistShowcase } from "@/components/pos/restaurant/waitlist-showcase";
import { MenuShowcase } from "@/components/pos/restaurant/menu-showcase";
import { MoreScreens } from "@/components/pos/restaurant/more-screens";
import { FeatureGrid } from "@/components/pos/restaurant/feature-grid";
import { RestaurantWorkflow } from "@/components/pos/restaurant/restaurant-workflow";
import { WhyLoveIt } from "@/components/pos/restaurant/why-love-it";
import { Performance } from "@/components/pos/restaurant/performance";
import { FAQ } from "@/components/pos/restaurant/faq";
import { FinalCTA } from "@/components/pos/restaurant/final-cta";
import { Footer } from "@/components/pos/restaurant/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <ProductOverview />
        <DashboardShowcase />
        <NewOrderShowcase />
        <KitchenShowcase />
        <WaitlistShowcase />
        <MenuShowcase />
        <MoreScreens />
        <FeatureGrid />
        <RestaurantWorkflow />
        <WhyLoveIt />
        <Performance />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
