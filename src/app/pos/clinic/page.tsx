import { Navbar } from "@/components/pos/clinic/navbar";
import { Hero } from "@/components/pos/clinic/hero";
import { BuiltForEveryClinic } from "@/components/pos/clinic/built-for-clinics";
import { WorkflowTimeline } from "@/components/pos/clinic/workflow-timeline";
import { PowerfulFeatures } from "@/components/pos/clinic/powerful-features";
import { ExecutiveShowcase } from "@/components/pos/clinic/executive-showcase";
import { LiveQueueShowcase } from "@/components/pos/clinic/live-queue-showcase";
import { PatientManagementShowcase } from "@/components/pos/clinic/patient-management-showcase";
import {
  LoginShowcase,
  ConsultationShowcase,
  PatientProfileShowcase,
  BillingShowcase,
  RecallShowcase,
  AppointmentsShowcase,
} from "@/components/pos/clinic/deep-dives";
import { SecurityCompliance } from "@/components/pos/clinic/security-compliance";
import { ComparisonSection } from "@/components/pos/clinic/comparison";
import { FAQ } from "@/components/pos/clinic/faq";
import { FinalCTA } from "@/components/pos/clinic/final-cta";
import { Footer } from "@/components/pos/clinic/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <BuiltForEveryClinic />
        <WorkflowTimeline />
        {/* Executive Dashboard first — the headline showcase */}
        <ExecutiveShowcase />
        {/* Screen-by-screen showcase — every screenshot gets its own dedicated section */}
        <LiveQueueShowcase />
        <PatientManagementShowcase />
        <AppointmentsShowcase />
        <ConsultationShowcase />
        <PatientProfileShowcase />
        <BillingShowcase />
        <RecallShowcase />
        <LoginShowcase />
        {/* Powerful features after the product tour */}
        <PowerfulFeatures />
        <SecurityCompliance />
        <ComparisonSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
