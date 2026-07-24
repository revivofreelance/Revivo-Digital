// Central content + asset registry for the Aura POS landing page.

export const SHOTS = {
  login: "/pos-media/salon/00-login.png",
  dashboard: "/pos-media/salon/01-dashboard.png",
  calendar: "/pos-media/salon/02-calendar.png",
  pos: "/pos-media/salon/03-pos-checkout.png",
  clients: "/pos-media/salon/04-clients.png",
  inventory: "/pos-media/salon/05-inventory.png",
  reports: "/pos-media/salon/06-reports.png",
  commissions: "/pos-media/salon/07-commissions.png",
  services: "/pos-media/salon/08-services.png",
  memberships: "/pos-media/salon/09-memberships.png",
} as const;

export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Why Aura", href: "#why" },
  { label: "Pricing", href: "#cta" },
  { label: "FAQ", href: "#faq" },
];

export const INDUSTRIES = [
  { name: "Hair Salons", icon: "scissors" },
  { name: "Beauty Salons", icon: "sparkles" },
  { name: "Luxury Spas", icon: "flower" },
  { name: "Wellness Centers", icon: "heart" },
  { name: "Tattoo Studios", icon: "pen" },
  { name: "Nail Salons", icon: "hand" },
  { name: "Barbershops", icon: "razor" },
  { name: "Skin Clinics", icon: "skin" },
  { name: "Massage Studios", icon: "leaf" },
  { name: "Multi-location Chains", icon: "building" },
];

export const WORKFLOW = [
  { step: "Client Books", shot: "calendar", desc: "Online or walk-in — every booking flows into one smart calendar." },
  { step: "Calendar", shot: "calendar", desc: "Drag-and-drop scheduling across stylists, rooms, and chairs." },
  { step: "Check-in", shot: "clients", desc: "Arrival alerts, waitlist promotion, and service notes in one tap." },
  { step: "POS Checkout", shot: "pos", desc: "Services, retail, memberships, tips, and split payments in seconds." },
  { step: "Inventory", shot: "inventory", desc: "Retail and professional stock auto-deducts on every sale." },
  { step: "Membership", shot: "memberships", desc: "Sessions redeemed, benefits applied, renewals tracked automatically." },
  { step: "Payroll", shot: "commissions", desc: "Commissions, tips, and earnings calculated in real time." },
  { step: "Analytics", shot: "reports", desc: "Live revenue, retention, and profitability across every location." },
];

export const FEATURES = [
  { title: "Smart Calendar", desc: "Multi-stylist, drag-and-drop scheduling with availability intelligence.", icon: "calendar" },
  { title: "Walk-ins", desc: "Capture spontaneous visits without disrupting your booked day.", icon: "user-plus" },
  { title: "POS Checkout", desc: "Fast, beautiful billing for services, retail, and gift cards.", icon: "credit-card" },
  { title: "Client CRM", desc: "Visit history, preferences, notes, and loyalty in one profile.", icon: "users" },
  { title: "Memberships", desc: "Recurring plans that build predictable monthly revenue.", icon: "badge" },
  { title: "Gift Cards", desc: "Sell, track, and redeem digital and physical gift cards.", icon: "gift" },
  { title: "Inventory", desc: "Stock levels, purchase orders, and low-stock alerts.", icon: "package" },
  { title: "Staff Scheduling", desc: "Shifts, roles, and availability managed alongside bookings.", icon: "calendar-clock" },
  { title: "Commissions", desc: "Tiered, service-based, and product commissions automated.", icon: "percent" },
  { title: "Payroll", desc: "Earnings, tips, and forecasts export-ready every cycle.", icon: "wallet" },
  { title: "Multi-location", desc: "One dashboard for every branch, with per-location controls.", icon: "building" },
  { title: "Service Catalog", desc: "Pricing, duration, and resources for every service you offer.", icon: "list" },
  { title: "Packages", desc: "Bundle services into curated packages clients love.", icon: "box" },
  { title: "Retail Sales", desc: "Sell products alongside services with full SKU tracking.", icon: "shopping-bag" },
  { title: "Analytics", desc: "Revenue, retention, and demand insights in real time.", icon: "bar-chart" },
  { title: "Reports", desc: "P&L, staff performance, and tax-ready exports.", icon: "file-text" },
  { title: "Cash Drawer", desc: "Shift open, close, and reconciliation built in.", icon: "safe" },
  { title: "Waitlist", desc: "Auto-fill cancellations from your intelligent waitlist.", icon: "clock" },
  { title: "Role Permissions", desc: "Granular access for owners, managers, and front desk.", icon: "shield" },
  { title: "Offline Support", desc: "Keep booking and billing even when the internet drops.", icon: "wifi-off" },
];

export const PRODUCT_STORY = [
  { id: "dashboard", title: "Dashboard", subtitle: "Business overview", shot: "dashboard", desc: "Every KPI that matters — revenue, bookings, occupancy, and goals — in one calm, scannable view the moment you sign in." },
  { id: "calendar", title: "Calendar", subtitle: "Smart appointment scheduling", shot: "calendar", desc: "See your whole day across stylists and rooms. Drag to reschedule, color-code services, and let Aura prevent double-booking automatically." },
  { id: "pos", title: "POS Checkout", subtitle: "Fast service billing", shot: "pos", desc: "Ring up services, retail, memberships, and tips in a single transaction. Split payments, gift cards, and cash — all in under a second." },
  { id: "clients", title: "Client Management", subtitle: "Customer history and loyalty", shot: "clients", desc: "A living profile for every client: visit history, spend, membership tier, notes, and preferences — so every visit feels personal." },
  { id: "inventory", title: "Inventory", subtitle: "Retail and professional stock", shot: "inventory", desc: "Real-time stock levels, automatic deductions on sale, low-stock alerts, and supplier purchase orders — never run out mid-service." },
  { id: "services", title: "Services & Pricing", subtitle: "Manage service catalog", shot: "services", desc: "Define every service with duration, price, required resources, and commission rules. Update once, sync everywhere." },
  { id: "memberships", title: "Memberships & Packages", subtitle: "Recurring revenue", shot: "memberships", desc: "Sell monthly memberships and multi-session packages. Track remaining sessions, apply benefits, and automate renewals." },
  { id: "commissions", title: "Commissions & Payroll", subtitle: "Staff earnings", shot: "commissions", desc: "Service commissions, product commissions, tips, and hourly pay — calculated automatically and export-ready for payroll." },
  { id: "reports", title: "Reports & Analytics", subtitle: "Business intelligence", shot: "reports", desc: "Revenue trends, service performance, staff productivity, retention, and profitability — exportable and always current." },
];

export const COMPARISON = [
  { traditional: "Manual scheduling on paper or chat", aura: "Smart drag-and-drop calendar with conflict prevention" },
  { traditional: "Paper client cards and memory", aura: "Intelligent CRM with full visit and spend history" },
  { traditional: "Separate booking, billing, and inventory tools", aura: "One unified platform for every operation" },
  { traditional: "Basic invoicing and manual totals", aura: "Complete POS with split payments and tips" },
  { traditional: "Spreadsheets for payroll and commissions", aura: "Automated commissions and payroll exports" },
  { traditional: "No visibility into performance", aura: "Real-time analytics and profitability reporting" },
];

export const KPIS = [
  { label: "Revenue Today", value: 18420, prefix: "$", suffix: "", desc: "+12.4% vs last week" },
  { label: "Bookings", value: 142, prefix: "", suffix: "", desc: "38 completed today" },
  { label: "Occupancy", value: 87, prefix: "", suffix: "%", desc: "Across 12 chairs" },
  { label: "Client Growth", value: 24, prefix: "+", suffix: "%", desc: "New clients this month" },
  { label: "Daily Goal", value: 92, prefix: "", suffix: "%", desc: "Of $20K target reached" },
  { label: "Avg. Ticket", value: 64, prefix: "$", suffix: "", desc: "Per service this week" },
  { label: "Staff On Duty", value: 9, prefix: "", suffix: "", desc: "Of 14 scheduled" },
];

export const FAQS = [
  {
    q: "Is Aura POS built for single locations or multi-location chains?",
    a: "Both. A single salon gets a focused, powerful workspace, while chains get per-location controls, unified client profiles, and cross-location reporting — all from one login. You can start with one location and add branches anytime without migrating data.",
  },
  {
    q: "Which types of businesses is Aura POS designed for?",
    a: "Hair salons, beauty salons, luxury spas, wellness centers, tattoo studios, nail salons, barbershops, skin clinics, massage studios, and multi-location chains. The platform adapts to your service catalog, resources, and workflow — not the other way around.",
  },
  {
    q: "Can I sell memberships and packages, not just single services?",
    a: "Yes. Memberships create predictable recurring revenue with automatic renewals and benefit tracking. Packages let you bundle services into curated offerings, with session counting and redemption built directly into checkout.",
  },
  {
    q: "How does payroll and commission handling work?",
    a: "Commissions are calculated automatically on every sale — tiered, service-based, or product-based, plus tip distribution. Earnings logs update in real time, and every cycle exports cleanly for payroll processing. No more end-of-month spreadsheets.",
  },
  {
    q: "Does Aura POS work offline?",
    a: "Yes. Booking and checkout keep working even when your internet drops. Data syncs automatically the moment connectivity returns, so you never lose a sale or a booking to a network outage.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Most salons are fully operational within a day. Import your service catalog, add your staff, connect your clients, and you're ready to book and bill. Guided onboarding and a demo walk-through are included with every plan.",
  },
  {
    q: "Can clients book online themselves?",
    a: "Absolutely. Every Aura account includes a client-facing booking flow that syncs live with your calendar — no double-booking, no phone tag. Walk-ins, online bookings, and phone bookings all land in the same smart calendar.",
  },
  {
    q: "What about inventory and retail sales?",
    a: "Full inventory management is built in: stock levels, low-stock alerts, supplier purchase orders, and automatic deductions on every retail sale. Professional and retail products are tracked separately, so you always know what's on your shelves.",
  },
];
