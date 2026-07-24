import { SectionHeading } from "../ui/SectionHeading";
import { ProductShowcase, type ShowcaseItem } from "./ProductShowcase";

const SHOWCASES: ShowcaseItem[] = [
  {
    eyebrow: "Calendar",
    title: "Smart appointment scheduling",
    description:
      "See your whole day across stylists, rooms, and chairs. Drag to reschedule, color-code services, and let Aura prevent double-booking automatically.",
    bullets: [
      "Drag-and-drop rescheduling",
      "Multi-stylist and multi-room views",
      "Daily, weekly, and agenda modes",
      "Automatic conflict prevention",
      "Walk-in and waitlist integration",
    ],
    shot: "calendar",
    url: "app.aurapos.com/calendar",
    hotspots: [
      { x: 12, y: 45, label: "Stylist columns", desc: "Each stylist gets their own lane — see the whole team at a glance." },
      { x: 50, y: 28, label: "Drag to reschedule", desc: "Grab any appointment and drop it into a new slot. Conflicts are blocked automatically." },
      { x: 83, y: 60, label: "Live availability", desc: "Open slots highlight in real time so you can fill gaps instantly." },
    ],
  },
  {
    eyebrow: "POS Checkout",
    title: "Fast, complete service billing",
    description:
      "Ring up services, retail, memberships, and tips in a single transaction. Split payments, gift cards, and cash — all in under a second.",
    bullets: [
      "Services and retail in one ticket",
      "Split payments and multi-tender",
      "Gift card redemption",
      "Automatic tip calculation",
      "Cash drawer management",
    ],
    shot: "pos",
    url: "app.aurapos.com/checkout",
    hotspots: [
      { x: 28, y: 52, label: "Service cart", desc: "Add services, retail, and memberships to one ticket in any order." },
      { x: 68, y: 32, label: "Smart totals", desc: "Tax, tips, and discounts calculated automatically as you ring up." },
      { x: 88, y: 72, label: "Split payments", desc: "Cash, card, gift card, and wallet — combine any tenders in one checkout." },
    ],
  },
  {
    eyebrow: "Client Management",
    title: "A living profile for every client",
    description:
      "Visit history, spend, membership tier, notes, and preferences — so every visit feels personal and every stylist is in the know.",
    bullets: [
      "Full visit and spend history",
      "Membership and package status",
      "Loyalty tiers and rewards",
      "Private notes and preferences",
      "Direct communication tools",
    ],
    shot: "clients",
    url: "app.aurapos.com/clients",
    hotspots: [
      { x: 15, y: 42, label: "Client directory", desc: "Searchable by name, phone, or membership tier — find anyone in a keystroke." },
      { x: 54, y: 30, label: "Visit timeline", desc: "Every appointment, spend, and note in one chronological feed." },
      { x: 82, y: 64, label: "Lifetime value", desc: "Total spend and retention metrics surface automatically per client." },
    ],
  },
  {
    eyebrow: "Inventory",
    title: "Retail and professional stock, mastered",
    description:
      "Real-time stock levels, automatic deductions on sale, low-stock alerts, and supplier purchase orders — never run out mid-service again.",
    bullets: [
      "Live stock levels by location",
      "Automatic deduction on sale",
      "Low-stock alerts and reorder points",
      "Supplier purchase orders",
      "Separate retail and professional tracking",
    ],
    shot: "inventory",
    url: "app.aurapos.com/inventory",
    hotspots: [
      { x: 20, y: 44, label: "Live stock levels", desc: "Quantities update the moment a product sells at the POS." },
      { x: 60, y: 30, label: "Low-stock alerts", desc: "Items below their reorder point flag instantly so you never run out." },
      { x: 86, y: 64, label: "Supplier orders", desc: "Generate purchase orders and track deliveries against stock." },
    ],
  },
  {
    eyebrow: "Memberships & Packages",
    title: "Recurring revenue, on autopilot",
    description:
      "Sell monthly memberships and multi-session packages. Track remaining sessions, apply benefits, and automate renewals without lifting a finger.",
    bullets: [
      "Monthly membership plans",
      "Multi-session packages",
      "Automatic benefit application",
      "Session tracking and redemption",
      "Automated renewal management",
    ],
    shot: "memberships",
    url: "app.aurapos.com/memberships",
    hotspots: [
      { x: 18, y: 42, label: "Active plans", desc: "Every recurring membership and its status in one clean ledger." },
      { x: 55, y: 32, label: "Session tracking", desc: "Remaining sessions count down automatically as clients redeem." },
      { x: 84, y: 62, label: "Auto-renewals", desc: "Renewals charge and apply benefits without any manual follow-up." },
    ],
  },
  {
    eyebrow: "Commissions & Payroll",
    title: "Staff earnings, calculated automatically",
    description:
      "Service commissions, product commissions, tips, and hourly pay — calculated automatically on every sale and export-ready for payroll.",
    bullets: [
      "Tiered and service-based commissions",
      "Product commission tracking",
      "Tip distribution and splits",
      "Real-time earnings logs",
      "Payroll-ready exports",
    ],
    shot: "commissions",
    url: "app.aurapos.com/commissions",
    hotspots: [
      { x: 16, y: 42, label: "Earnings log", desc: "Every sale's commission lands in real time — no end-of-month math." },
      { x: 52, y: 30, label: "Tip splits", desc: "Tips distribute to the right stylists automatically per your rules." },
      { x: 86, y: 60, label: "Payroll export", desc: "One click exports a clean, payroll-ready summary every cycle." },
    ],
  },
  {
    eyebrow: "Reports & Analytics",
    title: "Business intelligence, always current",
    description:
      "Revenue trends, service performance, staff productivity, retention, and profitability — exportable and always current, the moment you need it.",
    bullets: [
      "Revenue and profitability trends",
      "Service and staff performance",
      "Client retention analytics",
      "P&L and tax-ready exports",
      "Cross-location comparison",
    ],
    shot: "reports",
    url: "app.aurapos.com/reports",
    hotspots: [
      { x: 20, y: 44, label: "Revenue trends", desc: "Daily, weekly, and monthly revenue visualized at a glance." },
      { x: 58, y: 30, label: "Staff performance", desc: "Per-stylist revenue, utilization, and productivity compared side by side." },
      { x: 86, y: 62, label: "Profitability", desc: "Costs and margins roll up into a true profit view by location." },
    ],
  },
];

/**
 * Composed "Product Tour" section — renders 7 alternating ProductShowcase
 * blocks beneath a centered SectionHeading.
 */
export function ProductShowcases() {
  return (
    <section
      id="showcase-details"
      className="relative overflow-hidden bg-white py-4 sm:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Tour"
          title="Every screen, crafted for operators."
          subtitle="From the first booking to the final report, every surface in Aura POS is built with depth and clarity — for the people who actually run the floor."
          align="center"
        />

        <div className="mt-4 space-y-6 sm:mt-6 sm:space-y-8 lg:space-y-10">
          {SHOWCASES.map((item, index) => (
            <ProductShowcase key={item.shot} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
