import type { LucideIcon } from "lucide-react";
import {
  Activity, AirVent, Anchor, Apple, ArrowRight, BadgeCheck, Bath, BookOpen,
  Building2, Calendar, Check, ChefHat, Dumbbell, GraduationCap, HeartPulse,
  Home as HomeIcon, Landmark, Leaf, MapPin, PawPrint, Plug, Rocket,
  Scissors, ShoppingBag, Sparkles, Stethoscope, Truck, Wrench, Zap,
} from "lucide-react";

export type PageKey =
  | "home" | "about" | "services" | "industries" | "portfolio"
  | "process" | "pricing" | "testimonials" | "blog" | "faq"
  | "contact" | "audit" | "case-studies" | "legal" | "pos";

export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "services", label: "Services" },
  { key: "pos", label: "POS Systems" },
  { key: "industries", label: "Industries" },
  { key: "process", label: "Process" },
  { key: "pricing", label: "Pricing" },
  { key: "about", label: "About" },
  { key: "contact", label: "Contact" },
];

export const ALL_PAGES: { key: PageKey; label: string }[] = [
  ...NAV_ITEMS,
  { key: "testimonials", label: "Testimonials" },
  { key: "blog", label: "Resources" },
  { key: "faq", label: "FAQ" },
  { key: "audit", label: "Free Audit" },
  { key: "case-studies", label: "Case Studies" },
  { key: "legal", label: "Legal" },
];

/* ---------------- Trusted by / stats ---------------- */
export const TRUSTED_LOGOS = [
  "Bright Smile Dental", "Saffron Kitchen", "Iron Peak Gym",
  "Lumière Salon", "Meridian Legal", "Summit Roofing",
  "Pinecrest Realty", "Pawsome Veterinary", "BlueWave HVAC",
  "Northstar Accounting",
];

export const HERO_STATS = [
  { value: 28, suffix: "", label: "Projects delivered" },
  { value: 3, suffix: " yrs", label: "Building websites" },
  { value: 4.2, suffix: "/5", label: "Average client rating" },
  { value: 88, suffix: "%", label: "Client retention rate" },
];

export const GROWTH_STATS = [
  { value: 180, suffix: "%", label: "Avg. lead growth in 6 months", sub: "Across 28 local business clients" },
  { value: 1.4, suffix: "s", label: "Avg. page load time", sub: "vs. 4.8s industry average" },
  { value: 76, suffix: "%", label: "Of sites hit Google page 1", sub: "For primary local keywords" },
  { value: 16, suffix: "", label: "Industries served", sub: "From clinics to construction" },
];

/* ---------------- Services ---------------- */
export type Service = {
  slug: string;
  title: string;
  category: "Build" | "Convert" | "Grow" | "Operate";
  icon: LucideIcon;
  short: string;
  problem: string;
  solution: string;
  benefits: string[];
  features: string[];
  timeline: string;
  ideal: string;
  deliverables: string[];
  price: string;
};

export const SERVICES: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    category: "Build",
    icon: Building2,
    short: "A premium website that turns visitors into paying customers.",
    problem: "Your current website looks dated, loads slowly, and doesn't reflect the quality of work you actually deliver. Visitors bounce within seconds and never call.",
    solution: "I design and build a custom, conversion-focused website that communicates trust in the first 3 seconds, loads in under 2 seconds, and gently guides every visitor toward booking a call or making a purchase.",
    benefits: [
      "Builds instant credibility with prospective customers",
      "Generates a steady stream of qualified leads",
      "Looks premium on phones, tablets, and desktops",
      "Outranks competitors on Google for local searches",
    ],
    features: ["Custom UI design", "Mobile-first responsive build", "On-page SEO foundation", "Lead capture forms", "Click-to-call & WhatsApp", "Analytics setup"],
    timeline: "3–4 weeks",
    ideal: "Any established local business that wants a website that actually pays for itself.",
    deliverables: ["5–8 custom-designed pages", "CMS for self-editing", "1 year of hosting", "SSL & domain setup", "Analytics dashboard", "Training video"],
    price: "from $1,500",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    category: "Convert",
    icon: Rocket,
    short: "High-converting pages built for one specific offer or campaign.",
    problem: "You're running ads or sending emails to your homepage, and 95% of visitors leave without taking action. You're burning ad budget.",
    solution: "A purpose-built landing page focused on one offer, one audience, and one action — engineered to convert 2–5× better than your homepage.",
    benefits: [
      "Lower cost per lead from paid ads",
      "Higher conversion on email campaigns",
      "A/B-testable variants for every offer",
      "Faster campaign launches",
    ],
    features: ["Conversion copywriting", "A/B test framework", "Form & CRM integration", "Heatmap & session recording", "Mobile-optimized", "Sub-2s load time"],
    timeline: "5–10 days",
    ideal: "Anyone running paid ads, launching a product, or promoting a specific offer.",
    deliverables: ["1 landing page", "2 A/B variants", "Analytics & tracking", "Copywriting", "Post-launch optimization report"],
    price: "from $600",
  },
  {
    slug: "booking-systems",
    title: "Booking Systems",
    category: "Operate",
    icon: Calendar,
    short: "Let customers book 24/7 — and never lose a slot to phone tag again.",
    problem: "You miss bookings after hours, double-book tables or chairs, and your staff spends hours on the phone managing schedules.",
    solution: "A real-time booking system that lets customers reserve tables, chairs, rooms, or appointments 24/7, with automatic confirmations and reminders.",
    benefits: [
      "Bookings come in while you sleep",
      "Fewer no-shows with reminders",
      "Less phone time for staff",
      "Smarter capacity management",
    ],
    features: ["Real-time availability", "Automated SMS/email reminders", "Deposit & cancellation policies", "Group bookings", "Staff calendar sync", "Walk-in waiting list"],
    timeline: "2–3 weeks",
    ideal: "Restaurants, salons, gyms, clinics, consultants, and any business that takes reservations.",
    deliverables: ["Booking system", "Reminder automation", "Admin dashboard", "Mobile app integration", "Staff training"],
    price: "from $1,500",
  },
  {
    slug: "appointment-systems",
    title: "Appointment Systems",
    category: "Operate",
    icon: Calendar,
    short: "Self-serve scheduling for clinics, salons, and service businesses.",
    problem: "Patients and clients call during business hours, get put on hold, and often hang up. Your front desk is overwhelmed.",
    solution: "A HIPAA-friendly appointment system integrated into your website that lets clients self-book, reschedule, and cancel — with smart reminders that cut no-shows in half.",
    benefits: [
      "Cut front-desk call volume by 40–60%",
      "Reduce no-shows by up to 50%",
      "Fewer scheduling errors",
      "Higher patient/client satisfaction",
    ],
    features: ["Self-serve booking", "Smart reminders", "Reschedule & cancel", "Waitlist automation", "Provider calendars", "EHR/practice management sync"],
    timeline: "2–3 weeks",
    ideal: "Dental clinics, medical practices, salons, spas, therapists, and tutors.",
    deliverables: ["Appointment system", "Reminder automation", "Admin dashboard", "Calendar sync", "Training"],
    price: "from $1,500",
  },
  {
    slug: "portfolio-websites",
    title: "Portfolio Websites",
    category: "Build",
    icon: Sparkles,
    short: "Showcase your work with a portfolio that gets you hired.",
    problem: "Your work is incredible, but your portfolio is a folder of PDFs and Instagram links. Clients can't tell what you do, who you've worked with, or how to hire you.",
    solution: "A custom portfolio website with case studies, beautiful galleries, and a clear hire-me flow that positions you as a premium creative professional.",
    benefits: [
      "Attract higher-paying clients",
      "Showcase work the way it deserves",
      "Get found by recruiters and brands",
      "Charge premium rates with credibility",
    ],
    features: ["Case study layouts", "Filterable gallery", "About & services", "Inquiry form", "Resume/CV download", "Blog option"],
    timeline: "2–3 weeks",
    ideal: "Designers, photographers, writers, architects, consultants, and creative professionals.",
    deliverables: ["5–8 pages", "Portfolio CMS", "Inquiry form", "Analytics", "SEO foundation"],
    price: "from $1,200",
  },
  {
    slug: "ecommerce-websites",
    title: "E-commerce Websites",
    category: "Build",
    icon: ShoppingBag,
    short: "Sell more online with a fast, beautiful, conversion-tuned store.",
    problem: "Your online store is slow, the checkout is clunky, and 70% of carts get abandoned. You're leaving money on the table.",
    solution: "A premium e-commerce store with lightning-fast product pages, one-page checkout, abandoned-cart recovery, and product photography guidance.",
    benefits: [
      "Higher conversion rate per visit",
      "Lower cart abandonment",
      "Higher average order value",
      "Easier inventory & order management",
    ],
    features: ["Product catalog", "One-page checkout", "Abandoned-cart emails", "Inventory management", "Payment gateways", "Shipping integration"],
    timeline: "4–6 weeks",
    ideal: "Retail stores going online, D2C brands, and existing Shopify/WooCommerce stores underperforming.",
    deliverables: ["Store setup", "Up to 50 products", "Payment integration", "Email automation", "Admin training"],
    price: "from $3,500",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    category: "Build",
    icon: Sparkles,
    short: "Keep your content, transform your results.",
    problem: "Your website works, but it's not winning you business. You know it could be better, but you don't want to start from scratch.",
    solution: "A strategic redesign that keeps what works, rebuilds what doesn't, and dramatically improves speed, conversions, and credibility — without losing your SEO.",
    benefits: [
      "Higher conversions without losing traffic",
      "Modern design that builds trust",
      "Faster load times, better SEO",
      "No SEO loss during migration",
    ],
    features: ["UX audit", "Conversion redesign", "SEO-safe migration", "Content refresh", "Performance optimization", "301 redirect mapping"],
    timeline: "3–5 weeks",
    ideal: "Businesses with an existing website that's underperforming or visually dated.",
    deliverables: ["Redesigned site", "SEO migration", "Performance tuning", "Analytics setup", "Training"],
    price: "from $2,000",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    category: "Grow",
    icon: Zap,
    short: "Rank on page 1 for the searches that bring you customers.",
    problem: "You're invisible on Google. Competitors with worse service are getting all the calls because they show up first.",
    solution: "A complete SEO program — technical fixes, content strategy, local SEO, and link building — that moves you up the rankings for searches that actually bring customers.",
    benefits: [
      "More calls and inquiries from Google",
      "Lower cost-per-lead than paid ads",
      "Long-term compounding traffic",
      "Dominate your local market",
    ],
    features: ["Technical SEO audit", "On-page optimization", "Local SEO & citations", "Content strategy", "Backlink building", "Monthly reporting"],
    timeline: "Ongoing (3-month minimum)",
    ideal: "Any local business that wants to win Google searches in their area.",
    deliverables: ["SEO audit", "On-page fixes", "Monthly content", "Backlink reports", "Rank tracking dashboard"],
    price: "from $400/mo",
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile Setup",
    category: "Grow",
    icon: MapPin,
    short: "Win the map pack and own your local search.",
    problem: "Your Google Business Profile is unclaimed, incomplete, or full of bad photos. You're losing the customers searching for you on Google Maps.",
    solution: "A fully optimized Google Business Profile that wins the local map pack, attracts more reviews, and turns Google Maps searchers into customers.",
    benefits: [
      "More calls from Google Maps",
      "Higher local search ranking",
      "More 5-star reviews",
      "Better click-to-call conversion",
    ],
    features: ["Profile setup & verification", "Category optimization", "Photo & post strategy", "Review generation system", "Q&A management", "Competitor benchmarking"],
    timeline: "1–2 weeks",
    ideal: "Any local business serving a geographic area — dental clinics, restaurants, gyms, salons, contractors, and more.",
    deliverables: ["Optimized profile", "Review system", "Posting schedule", "Photo guidance", "Monthly review"],
    price: "from $350",
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    category: "Operate",
    icon: Activity,
    short: "Make your existing website 2–5× faster without a rebuild.",
    problem: "Your website takes 5+ seconds to load. Visitors leave, Google ranks you lower, and you're losing customers before they even see your offer.",
    solution: "A surgical performance optimization that cuts your load time by 50–80% without redesigning your site — preserving your design and SEO while dramatically improving speed.",
    benefits: [
      "Higher conversion from faster pages",
      "Better Google rankings",
      "Lower bounce rate",
      "Better mobile experience",
    ],
    features: ["Core Web Vitals audit", "Image optimization", "Code minification", "Caching strategy", "CDN setup", "Ongoing monitoring"],
    timeline: "1–2 weeks",
    ideal: "Businesses with a slow website that don't want to rebuild yet.",
    deliverables: ["Performance audit", "Optimization implementation", "Before/after report", "Monitoring setup"],
    price: "from $700",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    category: "Operate",
    icon: Wrench,
    short: "Peace of mind — your site stays fast, secure, and updated.",
    problem: "Your website is outdated, plugins are breaking, security patches are missing, and the last backup was 8 months ago. One bad day and you're offline.",
    solution: "A monthly care plan that keeps your website fast, secure, backed up, and up-to-date — so you can focus on running your business, not your website.",
    benefits: [
      "No more broken plugins or pages",
      "Daily backups & uptime monitoring",
      "Security patches applied fast",
      "Monthly tweaks & content updates",
    ],
    features: ["Daily backups", "Uptime monitoring", "Security patches", "Monthly content updates", "Performance checks", "Priority support"],
    timeline: "Ongoing",
    ideal: "Any business with a website they can't afford to have go down.",
    deliverables: ["Monthly maintenance", "Uptime monitoring", "Backup system", "Monthly report", "Priority response"],
    price: "from $120/mo",
  },
  {
    slug: "hosting-domain-email",
    title: "Hosting, Domain & Business Email",
    category: "Operate",
    icon: Anchor,
    short: "All the boring stuff, handled properly.",
    problem: "Your domain expires randomly, your email keeps bouncing, your hosting crashes during sales, and you're not sure what any of it actually does.",
    solution: "I set up and manage your domain, hosting, and business email so everything works flawlessly — and you never have to think about it again.",
    benefits: [
      "No more expired-domain emergencies",
      "Professional email (you@yourbusiness.com)",
      "Fast, reliable hosting with 99.9% uptime",
      "One person to call when something breaks",
    ],
    features: ["Domain registration & renewal", "Premium hosting setup", "Business email (Google Workspace)", "DNS management", "SSL certificate", "Uptime monitoring"],
    timeline: "2–5 days",
    ideal: "New businesses setting up, or businesses tired of DIY-ing their infrastructure.",
    deliverables: ["Hosting setup", "Email accounts", "Domain management", "SSL certificate", "Documentation"],
    price: "from $100",
  },
  {
    slug: "analytics-crm",
    title: "Analytics & CRM Integration",
    category: "Operate",
    icon: BadgeCheck,
    short: "Know exactly where every lead comes from — and never lose one.",
    problem: "Leads come in from your website, your ads, your Instagram, your walk-ins — and you have no idea which channels work and which waste money.",
    solution: "A complete analytics and CRM setup that tracks every lead from source to sale, so you can double down on what works and cut what doesn't.",
    benefits: [
      "Know your cost-per-lead by channel",
      "Never lose a lead to a forgotten inbox",
      "Automated follow-ups that close more deals",
      "Clear ROI reporting",
    ],
    features: ["Google Analytics 4", "Conversion tracking", "CRM integration", "Lead routing automation", "Follow-up sequences", "Monthly reporting"],
    timeline: "2–3 weeks",
    ideal: "Businesses spending on ads or getting leads from multiple channels.",
    deliverables: ["Analytics setup", "CRM implementation", "Automation flows", "Reporting dashboard", "Training"],
    price: "from $800",
  },
  {
    slug: "payment-whatsapp-integrations",
    title: "Payment, WhatsApp & Integrations",
    category: "Operate",
    icon: Plug,
    short: "Connect your website to the tools your customers actually use.",
    problem: "Customers want to pay online, message you on WhatsApp, and book through your site — but none of it is connected, so you do everything manually.",
    solution: "I integrate payment gateways, WhatsApp chat, calendar booking, and your other tools so your website becomes the central hub of your customer workflow.",
    benefits: [
      "Get paid faster online",
      "Capture WhatsApp leads automatically",
      "Reduce manual data entry",
      "Better customer experience end-to-end",
    ],
    features: ["Stripe/Razorpay/PayPal setup", "WhatsApp click-to-chat & lead capture", "Zapier/Make automations", "Calendar integration", "Email marketing sync", "Custom API integrations"],
    timeline: "1–3 weeks",
    ideal: "Any business that wants their website to actually do work, not just look pretty.",
    deliverables: ["Integration setup", "Automation flows", "Documentation", "Training"],
    price: "from $750",
  },
];

/* ---------------- Industries ---------------- */
export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  problems: string[];
  solutions: string[];
  features: string[];
  results: { metric: string; value: string }[];
  accent: string; // tailwind gradient classes
  image?: string;
  // New deep-dive fields
  insight: string; // a surprising industry-specific insight
  customerJourney: string; // how their customer actually searches/buys
  secretWeapon: string; // the one feature that moves the needle most
  typicalMistakes: string[]; // common mistakes competitors make
  quickWins: string[]; // fast-impact improvements
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "dentists",
    title: "Dentists",
    icon: HeartPulse,
    tagline: "Fill your chairs with patients who found you on Google.",
    problems: [
      "Patients can't find you on Google for 'dentist near me'",
      "Old website makes your clinic look outdated",
      "Phone-tag for appointment booking",
      "No way to showcase before/after smiles",
    ],
    solutions: [
      "Local SEO that wins 'dentist near me' searches",
      "Modern site that reflects your clinic's quality",
      "Online appointment requests 24/7",
      "Before/after smile galleries that sell treatments",
    ],
    features: ["Online booking", "Service pages", "Smile gallery", "Insurance info", "Reviews carousel", "Google Business sync"],
    results: [
      { metric: "New patient bookings", value: "+112%" },
      { metric: "Google calls/month", value: "+185%" },
      { metric: "No-show rate", value: "-42%" },
    ],
    accent: "from-rose-500 to-pink-500",
    image: "/images/industries/dentists.png",
    insight: "68% of patients check 3+ reviews before booking. 91% judge your clinic's hygiene by your website's photo quality. One blurry photo = one lost $4,000+ treatment plan.",
    customerJourney: "Tooth pain → 'dentist near me' → clicks top 3 on Google → eliminates sites that look dated → books online or calls. Under 4 minutes, start to finish.",
    secretWeapon: "Before/after smile galleries on the homepage. Sells $3,000–$30,000 procedures better than any copy. Case acceptance jumps 40%+.",
    typicalMistakes: ['Using stock photos of models instead of real patients — patients can tell, and it kills trust', "Hiding insurance and financing info — patients abandon sites that don't answer 'Will my insurance cover this?'", 'No online booking — forcing phone-tag loses the 60% of patients who browse after 7pm', 'Slow PDF consent forms instead of digital intake — creates a frustrating first visit', 'No Google Business Profile strategy — losing the map pack to competitors with worse dentists'],
    quickWins: ["Add a 'Book Appointment' button fixed to every page on mobile", 'Surface 3-5 Google reviews on the homepage with patient photos', 'Replace stock images with real clinic photos (even phone photos work)', "Add a 'New Patient Special' offer above the fold", "Create a 'What to expect on your first visit' page to reduce no-shows"],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    icon: ChefHat,
    tagline: "More reservations, more orders, fewer empty tables.",
    problems: [
      "Menu is a PDF that won't load on phones",
      "Hours wrong on Google Maps",
      "No online reservations",
      "Photos don't make people hungry",
    ],
    solutions: [
      "Mobile-first site that loads in 1.5s",
      "Always-accurate menu & hours",
      "Online reservations & takeaway",
      "Mouth-watering food photography",
    ],
    features: ["Digital menu", "Reservations", "Takeaway orders", "Photo gallery", "Events page", "Map & directions"],
    results: [
      { metric: "Online reservations", value: "+90%" },
      { metric: "Takeaway orders", value: "+48%" },
      { metric: "Google Maps calls", value: "+135%" },
    ],
    accent: "from-amber-500 to-orange-500",
    image: "/images/industries/restaurants.png",
    insight: "84% check the menu online before choosing. 57% won't consider you without one. A PDF menu that loads in 8s costs more covers than a bad review.",
    customerJourney: "Hungry → Google Maps → 'restaurants near me' → taps top 3 → photos first, then menu → books online or one-tap calls. Any friction = they pick the next place.",
    secretWeapon: "Real food photography above the fold — not stock. One stunning dish photo + 'Book a table' button = reservations double.",
    typicalMistakes: ['PDF menus that crash phones — the #1 killer of restaurant websites', 'Hours wrong on Google Maps — sending hungry customers to closed doors', "No online reservation system — losing the 40% who won't call", 'Dark, moody photography that looks great on a desktop but is invisible on a phone in sunlight', 'No takeaway/ordering link — sending customers to Uber Eats instead of ordering direct'],
    quickWins: ['Replace PDF menu with a mobile-first HTML menu that loads in 1 second', "Add a sticky 'Book a table' button on mobile", "Sync hours to Google Business Profile to prevent 'closed' surprises", "Add a 'Today's specials' section that's easy to update", "Include a one-tap 'Get directions' button — 30% of mobile users use it"],
  },
  {
    slug: "gyms",
    title: "Gyms & Fitness",
    icon: Dumbbell,
    tagline: "Turn website visitors into signed-up members.",
    problems: [
      "Pricing hidden, can't book a trial",
      "Class schedule out of date",
      "No trainer bios or community feel",
      "Ads send traffic to a homepage that doesn't convert",
    ],
    solutions: [
      "Clear membership tiers & free-trial booking",
      "Live class schedule",
      "Trainer spotlights & transformations",
      "Landing pages engineered to convert ad traffic",
    ],
    features: ["Membership pricing", "Trial booking", "Class schedule", "Trainer bios", "Transformations", "Member portal"],
    results: [
      { metric: "Free-trial bookings", value: "+128%" },
      { metric: "Trial-to-member rate", value: "+38%" },
      { metric: "Cost per acquisition", value: "-47%" },
    ],
    accent: "from-emerald-500 to-teal-500",
    image: "/images/industries/gyms.png",
    insight: "Average gym converts 2% of visitors to trials. Top 10% convert 8–10%. The difference: visible pricing, frictionless booking, and 5-minute follow-up.",
    customerJourney: "Wants to get fit → 'gym near me' → visits 3-4 sites → compares pricing → looks for free trial → books online if possible. 60% never show up if they have to visit in person.",
    secretWeapon: "A /free-trial landing page with a 3-field form. No pricing, no tiers — just 'Book your free trial.' One gym: 22 → 78 trials/month.",
    typicalMistakes: ['Hiding membership pricing — 70% of visitors leave without it', 'No free-trial booking — forcing prospects to call or visit in person', 'Sending ad traffic to the homepage instead of a dedicated landing page', 'No class schedule on the site — forcing members to call or use a separate app', 'Generic stock gym photos instead of real members and real trainers'],
    quickWins: ['Create a /free-trial landing page with a 3-field booking form', "Put pricing on the site — even just 'starting at $X/month'", 'Add a live, filterable class schedule', 'Feature 3-4 trainer bios with photos and specialties', 'Set up an automated text reminder for trial bookings — cuts no-shows in half'],
  },
  {
    slug: "salons",
    title: "Salons & Beauty",
    icon: Scissors,
    tagline: "Book your chairs full, 24/7.",
    problems: [
      "Booking by phone only, lost after-hours clients",
      "No way to showcase stylist work",
      "No gift card sales",
      "Loyalty program disconnected from site",
    ],
    solutions: [
      "24/7 online booking with reminders",
      "Stylist portfolios & service menus",
      "Gift card sales on-site",
      "Loyalty program integration",
    ],
    features: ["Online booking", "Stylist portfolios", "Service menu", "Gift cards", "Gallery", "Loyalty sync"],
    results: [
      { metric: "Online bookings", value: "+82%" },
      { metric: "Gift card sales", value: "+85%" },
      { metric: "Rebooking rate", value: "+64%" },
    ],
    accent: "from-fuchsia-500 to-purple-500",
    image: "/images/industries/salons.png",
    insight: "72% of bookings happen after hours. No online booking = 15–20 lost bookings per week. 68% of clients would switch salons just for online booking.",
    customerJourney: "Wants a haircut → checks Instagram → 'salon near me' → picks the one whose work they like → tries to book online → if they can't, calls during business hours → if no answer, books elsewhere.",
    secretWeapon: 'Stylist portfolios. Each stylist gets a page with their best work. Clients book the stylist, not the salon. Rebooking rate doubles.',
    typicalMistakes: ['Phone-only booking — missing the 72% who browse after hours', "No stylist portfolios — clients can't see who does what kind of work", "Hiding service pricing — clients assume it's too expensive and leave", 'No Instagram integration — missing the #1 discovery channel for salons', 'No gift card sales on the site — missing 30% of holiday revenue'],
    quickWins: ['Add 24/7 online booking with automated SMS reminders', 'Create a page for each stylist with 6-8 photos of their work', 'Add gift card sales directly on the site — capture holiday revenue', 'Embed your Instagram feed so new work shows automatically', "Add a 'rebook' button to the post-appointment email — doubles rebooking rate"],
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    icon: Stethoscope,
    tagline: "Trustworthy, accessible, easy for patients and staff.",
    problems: [
      "Patients can't find doctors or departments",
      "Front desk overwhelmed with calls",
      "No patient resources online",
      "Site not accessibility-compliant",
    ],
    solutions: [
      "Doctor directory & department pages",
      "Self-serve appointment requests",
      "Patient resources & FAQs",
      "WCAG accessibility compliance",
    ],
    features: ["Doctor directory", "Department pages", "Appointment requests", "Patient portal", "Billing info", "Multi-language"],
    results: [
      { metric: "Front-desk calls", value: "-52%" },
      { metric: "Patient satisfaction", value: "+34%" },
      { metric: "Online appointments", value: "+280%" },
    ],
    accent: "from-sky-500 to-blue-500",
    image: "/images/industries/hospitals.png",
    insight: "The #1 patient complaint: 'I couldn't find the doctor I needed.' Fixing doctor discoverability alone cuts front-desk calls by 40%.",
    customerJourney: "Referral or symptom → Googles condition + 'hospital near me' → lands on site → gets lost in department maze → gives up and calls → waits on hold → 'Which doctor should I see?' Happens 200+ times/day.",
    secretWeapon: 'Searchable doctor directory with filters (specialty, language, gender). Patients self-serve and book without calling. Front-desk calls drop 52%.',
    typicalMistakes: ["Organizing the site by department instead of by patient need — patients don't know which department treats what", "Doctor directory that's just a PDF or a list — not searchable, not filterable", 'No online appointment requests — forcing every patient to call', "Medical jargon everywhere — patients can't understand if a service is right for them", 'No mobile optimization — 60% of patients visit on their phones, often while sitting in the waiting room'],
    quickWins: ['Build a searchable doctor directory with filters (specialty, language, gender)', "Add 'Request an appointment' forms on every doctor's page", "Create patient-friendly condition pages ('Heart disease' not 'Cardiology')", "Add a 'Prepare for your visit' section with parking, what to bring, and wait times", 'Translate key pages into the top 2-3 languages your patients speak'],
  },
  {
    slug: "clinics",
    title: "Clinics",
    icon: HeartPulse,
    tagline: "From dental to dermatology — sites that patients trust.",
    problems: [
      "Generic template doesn't reflect specialty",
      "No appointment booking",
      "Patients don't understand services",
      "Reviews buried on third-party sites",
    ],
    solutions: [
      "Specialty-focused design",
      "Online appointment requests",
      "Clear service & treatment pages",
      "Reviews surfaced on every page",
    ],
    features: ["Appointment requests", "Service pages", "Doctor bios", "Insurance info", "Reviews", "Health resources"],
    results: [
      { metric: "Appointment requests", value: "+95%" },
      { metric: "New patient calls", value: "+145%" },
      { metric: "Review submissions", value: "+220%" },
    ],
    accent: "from-cyan-500 to-sky-500",
    insight: "Patients are anxious and researching heavily. The clinic that educates best, wins. Educational content drives 3× more bookings than promotional.",
    customerJourney: "Specific concern → Googles condition + treatment → reads 4-5 articles → compares 3 clinics → picks the one that explained it clearly → books. The clinic that educated them wins.",
    secretWeapon: "One page per treatment ('Invisalign', 'Botox', 'IVF') with FAQs + before/after + booking form. Ranks on Google, converts 3–5× better than generic service pages.",
    typicalMistakes: [
      "One generic 'Services' page listing everything — Google can't rank it for any specific treatment",
      "No before/after galleries for aesthetic treatments — patients won't book what they can't see",
      "No patient reviews surfaced — 88% of patients trust online reviews as much as personal recommendations",
      "Insurance and pricing info hidden — patients abandon sites that don't answer 'How much will this cost?'",
      "No follow-up sequence after inquiry — 60% of clinic inquiries go cold because no one follows up",
    ],
    quickWins: [
      "Create one dedicated page per treatment with FAQs and before/after photos",
      "Surface 5+ Google reviews on the homepage with patient names and photos",
      "Add a 'Cost & insurance' page that answers the money question upfront",
      "Set up an automated email sequence for inquiries — 5 touches over 2 weeks",
      "Add a 'Meet the team' page with doctor bios and credentials — builds trust",
    ],
  },
  {
    slug: "law-firms",
    title: "Law Firms",
    icon: Landmark,
    tagline: "Authoritative websites that win higher-value cases.",
    problems: [
      "Site doesn't convey authority or trust",
      "No clear practice areas",
      "Contact form loses leads",
      "Competitors outrank you on Google",
    ],
    solutions: [
      "Authority-building design & copy",
      "Clear practice area pages",
      "Conversion-tuned consultation forms",
      "Local SEO for high-intent searches",
    ],
    features: ["Practice areas", "Attorney bios", "Case results", "Consultation form", "Blog & resources", "Local SEO"],
    results: [
      { metric: "Consultation requests", value: "+102%" },
      { metric: "Qualified leads", value: "+152%" },
      { metric: "Google ranking", value: "Top 3" },
    ],
    accent: "from-slate-600 to-slate-800",
    image: "/images/industries/law-firms.png",
    insight: 'Clients don\'t hire the best lawyer — they hire the one who looks most authoritative online. 95% never go past Google page 1.',
    customerJourney: 'Legal problem → Googles \'divorce lawyer [city]\' → opens top 3-4 → scans: Do they handle my case? Won cases like mine? Free consult? → fills form → hires the most authoritative.',
    secretWeapon: "Case results with real numbers. 'Recovered $1.2M for a rear-end collision victim.' Proves competence better than any adjectives. Consultations double.",
    typicalMistakes: ["One generic 'Services' page listing everything — Google can't rank it for any specific treatment", "No before/after galleries for aesthetic treatments — patients won't book what they can't see", 'No patient reviews surfaced — 88% of patients trust online reviews as much as personal recommendations', "Insurance and pricing info hidden — patients abandon sites that don't answer 'How much will this cost?'", 'No follow-up sequence after inquiry — 60% of clinic inquiries go cold because no one follows up'],
    quickWins: ['Create one dedicated page per treatment with FAQs and before/after photos', 'Surface 5+ Google reviews on the homepage with patient names and photos', "Add a 'Cost & insurance' page that answers the money question upfront", 'Set up an automated email sequence for inquiries — 5 touches over 2 weeks', "Add a 'Meet the team' page with doctor bios and credentials — builds trust"],
  },
  {
    slug: "construction",
    title: "Construction",
    icon: Building2,
    tagline: "Showcase your work, win bigger contracts.",
    problems: [
      "No project portfolio online",
      "Site looks like a template",
      "Prospects can't verify your work",
      "Losing bids to competitors with better sites",
    ],
    solutions: [
      "Project portfolio with case studies",
      "Premium design that builds trust",
      "Verifiable testimonials & certifications",
      "Lead capture for project inquiries",
    ],
    features: ["Project portfolio", "Services pages", "About & team", "Certifications", "Inquiry form", "SEO"],
    results: [
      { metric: "Project inquiries", value: "+85%" },
      { metric: "Average project value", value: "+38%" },
      { metric: "Bid win rate", value: "+24%" },
    ],
    accent: "from-amber-600 to-yellow-700",
    image: "/images/industries/construction.png",
    insight: "70% of commercial clients and 45% of homeowners check your website before requesting a quote. An unreliable site = eliminated before you even bid.",
    customerJourney: "Needs work → Googles '[service] contractor [city]' → visits 3-5 sites → looks for: my type of project? real work? licensed? reviews? → requests 2-3 quotes → hires the best portfolio.",
    secretWeapon: "Detailed case studies with before/during/after photos + project narratives. Not just a gallery — a story. One contractor won 38% more bids.",
    typicalMistakes: ['No project portfolio — or just a few random photos with no context', 'No licensing, insurance, or certifications displayed — clients need to verify these', 'No service area pages — losing local SEO to competitors who have them', 'Stock photos of construction — clients want to see YOUR work, not iStock', 'No reviews or testimonials — construction is high-trust; social proof is mandatory'],
    quickWins: ['Build 5-10 detailed project case studies with before/during/after photos', 'Add licensing, insurance, and certification badges to every page', 'Create a service area page for each city/town you work in', "Add a 'Get a quote' form that asks the right pre-qualifying questions", "Surface 5+ Google reviews with the client's name and project type"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: HomeIcon,
    tagline: "Listings that sell, agents that get found.",
    problems: [
      "Listings not on your own site",
      "No agent bios or differentiation",
      "Inquiries go to Zillow, not you",
      "Slow, dated site loses buyers",
    ],
    solutions: [
      "MLS-integrated listings on your site",
      "Agent branding & bios",
      "Inquiry forms that route to you",
      "Fast, modern search experience",
    ],
    features: ["MLS integration", "Agent bios", "Search & filters", "Mortgage calculator", "Inquiry forms", "Neighborhood pages"],
    results: [
      { metric: "Listing inquiries", value: "+115%" },
      { metric: "Direct leads (not Zillow)", value: "+82%" },
      { metric: "Time on site", value: "+95%" },
    ],
    accent: "from-emerald-600 to-green-700",
    image: "/images/industries/real-estate.png",
    insight: "Buyers research online for 10 weeks before contacting an agent. Capture their email during research = win the listing 73% of the time.",
    customerJourney: "Decides to move → browses Zillow for months → searches for local agents → visits 3-4 sites → if the site captures their email, they're a lead → the agent who nurtures wins. 90% of agents have no capture.",
    secretWeapon: "Neighborhood guides with schools, restaurants, commute times. Ranks for 'best neighborhood in [city]', captures emails, positions you as the local expert.",
    typicalMistakes: ['Just an MLS search widget — identical to every other agent site', 'No lead capture — visitors browse, leave, and never come back', 'No neighborhood guides — missing the buyers researching areas, not just homes', "Agent bio that says nothing distinctive — 'Top producer, award-winning' means nothing", 'No reviews or past client testimonials — buyers want social proof'],
    quickWins: ['Create 5-10 neighborhood guides with local insights and photos', "Add a 'Save your favorites' feature that captures email addresses", 'Add a mortgage calculator to keep buyers on your site longer', 'Surface 5+ client testimonials with names and transaction details', "Create a 'Home valuation' form to capture seller leads"],
  },
  {
    slug: "electricians",
    title: "Electricians",
    icon: Zap,
    tagline: "Be the first electrician homeowners call.",
    problems: [
      "Not showing up on Google for 'electrician near me'",
      "Site doesn't list services clearly",
      "No emergency contact path",
      "Reviews buried on Google",
    ],
    solutions: [
      "Local SEO that wins emergency searches",
      "Clear services & service areas",
      "Prominent emergency call button",
      "Reviews surfaced everywhere",
    ],
    features: ["Services pages", "Service areas", "Click-to-call", "Reviews", "Emergency CTA", "Booking form"],
    results: [
      { metric: "Emergency calls", value: "+145%" },
      { metric: "Google ranking", value: "Top 3" },
      { metric: "Monthly leads", value: "+195%" },
    ],
    accent: "from-yellow-500 to-amber-600",
    insight: "80% of leads are emergency searches at 9pm. The electrician who shows up first on Google Maps + has a one-tap 'Call now' button wins.",
    customerJourney: "Electrical problem → 'electrician near me' on phone → calls top 2-3 on Google Maps → first to answer wins. Under 5 minutes.",
    secretWeapon: "A click-to-call button impossible to miss on mobile. Lights are out = they want to call, not read. Wins 60%+ of emergency jobs.",
    typicalMistakes: ['No click-to-call button on mobile — forcing users to copy-paste the number', "No service area pages — Google can't rank you for specific cities", 'No emergency distinction — not telling customers if you do 24/7 or same-day', "Vague services list — 'We do electrical work' instead of 'Panel upgrades, EV charger installation, rewiring'", 'No reviews — 87% of homeowners check reviews before calling a tradesperson'],
    quickWins: ["Add a fixed, impossible-to-miss 'Call now' button on every mobile page", 'Create a page for each service (panel upgrades, EV chargers, inspections, etc.)', 'Create a page for each city/area you serve — captures local SEO', "Add 'Emergency? Call [number]' prominently on the homepage", 'Surface 10+ Google reviews — trades businesses live and die by reviews'],
  },
  {
    slug: "plumbers",
    title: "Plumbers",
    icon: Bath,
    tagline: "Win every 'plumber near me' search in your city.",
    problems: [
      "Invisible on Google for emergency searches",
      "No clear service area",
      "Site doesn't build trust",
      "Losing jobs to bigger competitors",
    ],
    solutions: [
      "Local SEO for emergency searches",
      "Clear service area pages",
      "Trust-building design & reviews",
      "Click-to-call front and center",
    ],
    features: ["Services pages", "Service areas", "Click-to-call", "Reviews", "Emergency CTA", "Booking form"],
    results: [
      { metric: "Emergency calls", value: "+82%" },
      { metric: "Google calls/month", value: "+265%" },
      { metric: "Job value", value: "+28%" },
    ],
    accent: "from-blue-500 to-indigo-600",
    insight: "90% of leads are 'plumber near me' searches during a crisis. #1 on Google Maps + first to answer = you win.",
    customerJourney: "Plumbing emergency → panic → 'plumber near me' → calls first open result → first to answer wins ($300–$1,500 job). Zero comparison shopping.",
    secretWeapon: "Google Business Profile optimization. For plumbers, the Map Pack IS the website. Not in top 3 = you don't exist. One plumber: 8 → 34 emergency calls/month.",
    typicalMistakes: ['Not claiming or optimizing Google Business Profile — invisible in the map pack', "No emergency messaging — not telling customers '24/7 emergency service' or 'We answer fast'", "No click-to-call on mobile — in an emergency, people call, they don't fill forms", "No service area pages — Google can't rank you for specific neighborhoods", 'Few or no reviews — plumbers with 50+ reviews dominate; those with 5 struggle'],
    quickWins: ['Optimize Google Business Profile: photos, services, hours, weekly posts', "Add '24/7 Emergency Service' + click-to-call on every page", 'Set up a review generation system — text every customer a review link after the job', 'Create a page for each service (drain cleaning, water heaters, leak detection, etc.)', "Create service area pages for each city — 'Plumber in [City]' for each one"],
  },
  {
    slug: "hvac",
    title: "HVAC",
    icon: AirVent,
    tagline: "Stay booked year-round with seasonal SEO.",
    problems: [
      "Invisible before summer/winter peaks",
      "No maintenance plan signups",
      "No clear service area",
      "Reviews not working for you",
    ],
    solutions: [
      "Seasonal SEO campaigns before peaks",
      "Maintenance plan signup flow",
      "Service area pages",
      "Review generation system",
    ],
    features: ["Services pages", "Maintenance plans", "Service areas", "Reviews", "Seasonal promos", "Booking form"],
    results: [
      { metric: "Peak-season calls", value: "+128%" },
      { metric: "Maintenance plan signups", value: "+95%" },
      { metric: "Google ranking", value: "Top 3" },
    ],
    accent: "from-cyan-600 to-blue-700",
    insight: 'First AC company on Google when temps hit 100°F gets 80% of calls. Smart companies build SEO 6-8 weeks before peaks.',
    customerJourney: "AC breaks in a heatwave → 'AC repair near me' → calls first 2-3 → first to answer wins. For maintenance, they compare quotes + reviews + plans.",
    secretWeapon: 'Annual maintenance plans ($200-400/yr). Converts a $300 one-time customer into $1,500+/year recurring. One company: +$180k/year.',
    typicalMistakes: ['No seasonal SEO strategy — invisible during peak demand when it matters most', 'No maintenance plan offering — leaving recurring revenue on the table', 'No service area pages — losing to competitors who rank for specific cities', "No emergency messaging during peaks — not telling customers 'Same-day AC repair'", 'Few reviews — HVAC is trust-based; 50+ reviews is the threshold to dominate'],
    quickWins: ['Build a maintenance plan page with online signup and payment', "Create seasonal landing pages ('Summer AC Tune-up', 'Winter Heating Check')", "Add 'Same-day emergency repair' + click-to-call on every page during peak season", 'Create service area pages for each city you serve', 'Set up automated review requests after every service call'],
  },
  {
    slug: "retail",
    title: "Retail Stores",
    icon: ShoppingBag,
    tagline: "Online store that sells while you sleep.",
    problems: [
      "No online store, losing to Amazon",
      "Foot traffic declining",
      "Inventory not visible online",
      "No way to capture walk-in emails",
    ],
    solutions: [
      "E-commerce store with local pickup",
      "Email capture for repeat sales",
      "Inventory sync between store & site",
      "Local SEO for 'near me' searches",
    ],
    features: ["Product catalog", "Local pickup", "Email capture", "Inventory sync", "Loyalty program", "Local SEO"],
    results: [
      { metric: "Online revenue", value: "+128%" },
      { metric: "Email list growth", value: "+82%" },
      { metric: "Foot traffic", value: "+38%" },
    ],
    accent: "from-pink-500 to-rose-600",
    insight: "67% of shoppers 'webroom' — research online, buy in-store. No website = losing in-store sales because customers can't verify you exist.",
    customerJourney: "Wants a product → '[product] near me' → if your site shows inventory, they visit → if not, Amazon. Your site bridges 'I want this' to 'I'm walking in.'",
    secretWeapon: "Show your top products online with prices + 'In stock at [Store].' One retailer: +38% foot traffic just from 50 products online.",
    typicalMistakes: ['No website at all — invisible to the 67% who research online first', "No product photos or inventory — customers can't verify you have what they want", "No Google Business Profile optimization — losing 'near me' searches to chains", 'No email capture — missing the chance to build a list of local shoppers', 'Hours or address wrong online — sending customers to closed or wrong locations'],
    quickWins: ["Put your top 50-100 products online with photos, prices, and 'In store' status", "Add a 'Reserve in store' button — turns browsers into visitors", 'Optimize Google Business Profile with photos, posts, and product listings', "Add an email capture ('Get 10% off your first visit') — build your local list", "Sync hours and holiday hours to Google — prevent 'closed' surprises"],
  },
  {
    slug: "education",
    title: "Education & Coaching",
    icon: GraduationCap,
    tagline: "Fill your batches with qualified students.",
    problems: [
      "Enrollment inquiries drying up",
      "Site doesn't convey results",
      "No clear admissions path",
      "Competitors outrank you on Google",
    ],
    solutions: [
      "Results-focused design & copy",
      "Clear admissions & inquiry flow",
      "Local SEO for coaching searches",
      "Lead nurturing automation",
    ],
    features: ["Courses/programs", "Results & toppers", "Admissions form", "Faculty bios", "Blog & resources", "SEO"],
    results: [
      { metric: "Admission inquiries", value: "+108%" },
      { metric: "Qualified leads", value: "+85%" },
      { metric: "Cost per lead", value: "-43%" },
    ],
    accent: "from-violet-500 to-purple-600",
    insight: "Parents/students visit 5-7 websites before inquiring. 72% eliminate any with a hard-to-navigate site. Trust first, enrollment second.",
    customerJourney: "Needs coaching → 'best [subject] coaching in [city]' → opens 5-7 sites → compares results, faculty, fees → narrows to 2-3 → books counseling → enrolls in the most credible.",
    secretWeapon: "Real success stories with names + photos + outcomes. 'Priya scored 95th percentile.' One institute: 2× admissions inquiries from 20 stories.",
    typicalMistakes: ["Vague '100% results' claims with no proof — parents see through this instantly", "No faculty bios or credentials — 'Who will actually teach?' is the #1 question", "No curriculum detail — parents want to know exactly what they're paying for", 'No reviews or parent testimonials — social proof is mandatory in education', 'No clear admission process — friction here loses motivated applicants'],
    quickWins: ['Create 15-20 detailed success stories with student photos and outcomes', 'Add faculty bios with photos, qualifications, and teaching philosophy', 'Create a detailed curriculum page for each course/program', "Add a 'Book a counseling session' form — not just 'Contact us'", 'Surface parent and student reviews on the homepage'],
  },
  {
    slug: "cleaning",
    title: "Cleaning Services",
    icon: Sparkles,
    tagline: "Book your crews full, week after week.",
    problems: [
      "Invisible on Google",
      "No online booking",
      "No recurring revenue engine",
      "Losing quotes to bigger companies",
    ],
    solutions: [
      "Local SEO for cleaning searches",
      "Instant quote & booking form",
      "Recurring service subscriptions",
      "Review generation system",
    ],
    features: ["Instant quote", "Online booking", "Recurring plans", "Service areas", "Reviews", "Referral program"],
    results: [
      { metric: "Quote requests", value: "+145%" },
      { metric: "Recurring contracts", value: "+82%" },
      { metric: "Google ranking", value: "Top 3" },
    ],
    accent: "from-teal-500 to-emerald-600",
    insight: 'One-time customer = $150. Recurring customer = $2,400/year. 80% of cleaning sites optimize for one-off quotes — leaving the real money on the table.',
    customerJourney: "Needs cleaning → 'cleaning service near me' → opens 3-4 sites → requests 2-3 quotes → picks on price + reviews → if offered a recurring plan, 30% convert. If not, lost.",
    secretWeapon: "Instant quote calculator + recurring plan upsell. Show the discount for weekly/bi-weekly. One company: 42% of one-time bookings converted to recurring.",
    typicalMistakes: ['No instant quote — forcing visitors to call or wait for an email', 'No recurring plan offering — leaving $2,400/year customers on the table', 'No reviews — cleaning is trust-based; customers let strangers into their homes', "No service area pages — losing 'cleaning service in [city]' searches", "No 'What's included' page — customers don't know what they're paying for"],
    quickWins: ['Build an instant quote calculator (home size + frequency = price)', 'Create 3 recurring plans (Weekly, Bi-weekly, Monthly) with clear pricing', "Add a 'What's included' page with a checklist — removes pricing objections", 'Set up automated review requests after every clean', 'Create service area pages for each city/neighborhood you serve'],
  },
  {
    slug: "pet-clinics",
    title: "Pet Clinics",
    icon: PawPrint,
    tagline: "Pet parents should find you first.",
    problems: [
      "Pet owners can't find you on Google",
      "No online appointment booking",
      "No way to showcase your team's care",
      "Reviews buried on third-party sites",
    ],
    solutions: [
      "Local SEO for 'vet near me'",
      "Online appointment requests",
      "Warm, trust-building team pages",
      "Reviews surfaced everywhere",
    ],
    features: ["Appointment requests", "Service pages", "Team bios", "Pet resources", "Reviews", "Emergency info"],
    results: [
      { metric: "New client bookings", value: "+95%" },
      { metric: "Google calls", value: "+122%" },
      { metric: "Review submissions", value: "+102%" },
    ],
    accent: "from-orange-500 to-amber-600",
    insight: "85% of pet owners would switch vets for a clinic that 'feels more caring.' Most vet sites are cold and clinical. Warmth wins $3,000–$15,000 lifetime value per pet.",
    customerJourney: "Needs a vet → 'vet near me' → opens 3-4 sites → looks for: my pet type? caring? online booking? open when I need? → books the warmest, most competent.",
    secretWeapon: "A 'Meet our team' page with personality — vets with their own pets, their 'why' stories. Pet parents choose a person, not a clinic. Bookings double.",
    typicalMistakes: ['Cold, clinical design — pet parents want warmth, not a hospital vibe', 'No team photos or bios — pet parents choose vets, not clinics', "No clear emergency info — 'Are you open Sundays? Do you do emergencies?' is the #1 question", 'No species-specific pages — cat owners and dog owners have different needs', 'No reviews from pet parents — social proof is the #1 trust signal'],
    quickWins: ['Redesign the team page with warm photos of vets with their own pets', "Add a prominent 'Emergency?' section with hours and after-hours instructions", 'Create separate pages for dog care, cat care, and exotic pets', 'Surface 10+ reviews from pet parents with pet names and photos', 'Add online appointment requests — pet parents browse after hours too'],
  },
];

/* ---------------- Process ---------------- */
export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Discovery",
    duration: "Day 1",
    description: "We get on a free consultation call. I learn about your business, your customers, your goals, and what's not working right now. You leave the call with a clear plan — even if we don't end up working together.",
    deliverables: ["Free consultation call", "Business & competitor audit", "Project scope & timeline", "Fixed-price quote"],
  },
  {
    n: "02",
    title: "Research & Strategy",
    duration: "Day 1–2",
    description: "I dig into your industry, your competitors, and your customers. I map out the messaging, the page structure, and the conversion path before a single pixel is designed.",
    deliverables: ["Competitor analysis", "Customer journey map", "Sitemap & messaging", "SEO keyword strategy"],
  },
  {
    n: "03",
    title: "Wireframing",
    duration: "Day 2–3",
    description: "I sketch the structure of every page — where every headline, image, form, and button will live. You see the blueprint before we invest in design.",
    deliverables: ["Low-fidelity wireframes", "Conversion flow", "Feedback round 1"],
  },
  {
    n: "04",
    title: "UI Design",
    duration: "Day 3–5",
    description: "I design high-fidelity, pixel-perfect screens — typography, color, imagery, motion. You see exactly what your website will look like before any code is written.",
    deliverables: ["High-fidelity Figma designs", "Mobile + desktop + tablet", "Interactive prototype", "Feedback round 2"],
  },
  {
    n: "05",
    title: "Development",
    duration: "Day 5–14",
    description: "I build your website with modern, fast, SEO-friendly technology. Every animation, every form, every integration — built to perform, not just to look good.",
    deliverables: ["Production-ready code", "CMS integration", "All forms & integrations", "Performance optimization"],
  },
  {
    n: "06",
    title: "Testing & QA",
    duration: "Day 14–16",
    description: "I test on 15+ devices and browsers, run performance audits, check accessibility, and verify every form, button, and integration actually works.",
    deliverables: ["Cross-device testing", "Performance audit", "Accessibility audit", "Bug fixes"],
  },
  {
    n: "07",
    title: "Deployment",
    duration: "Day 16–17",
    description: "We go live. I handle the DNS, hosting, SSL, analytics, and search engine submission. Your old site stays up until the new one is verified working.",
    deliverables: ["Live website", "SSL & hosting", "Analytics setup", "Google submission"],
  },
  {
    n: "08",
    title: "Training & Handover",
    duration: "Day 17–18",
    description: "I train you and your team on how to update content, add blog posts, and manage inquiries. You get a Loom library of every tutorial, so you're never stuck.",
    deliverables: ["Training session", "Loom video library", "Documentation", "30 days of free support"],
  },
  {
    n: "09",
    title: "Ongoing Support",
    duration: "Month 2+",
    description: "After launch, I offer optional monthly care plans that keep your site fast, secure, and improving — with monthly optimization reports and priority support.",
    deliverables: ["Monthly maintenance", "Performance monitoring", "Monthly reports", "Priority support"],
  },
];

/* ---------------- Pricing ---------------- */
export type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
  timeline: string;
  cta: string;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "For new businesses getting online",
    price: "$600",
    period: "one-time",
    description: "A beautiful, fast, conversion-focused 4-page website that gets you online properly — and ready to grow.",
    features: [
      "4 custom-designed pages",
      "Mobile-first responsive design",
      "On-page SEO foundation",
      "Contact form + WhatsApp",
      "Google Analytics setup",
      "1 round of revisions",
      "2-week delivery",
      "30 days post-launch support",
    ],
    timeline: "7–10 days",
    cta: "Start with Starter",
  },
  {
    name: "Professional",
    tagline: "For established local businesses",
    price: "$1,500",
    period: "one-time",
    description: "A complete 8-page website with appointment/booking flow, copywriting, and local SEO setup — built to generate leads.",
    features: [
      "Everything in Starter, plus:",
      "8 custom-designed pages",
      "Appointment or booking system",
      "Conversion copywriting",
      "Local SEO setup (3 pages)",
      "Google Business Profile optimization",
      "Reviews integration",
      "2 rounds of revisions",
      "4-week delivery",
      "60 days post-launch support",
    ],
    timeline: "12–15 days",
    cta: "Choose Professional",
    popular: true,
  },
  {
    name: "Business Growth",
    tagline: "For businesses serious about growth",
    price: "$3,000",
    period: "one-time",
    description: "A premium 12+ page website with advanced integrations, CRM, automation, and 3 months of SEO to compound your results.",
    features: [
      "Everything in Professional, plus:",
      "12+ custom-designed pages",
      "CRM + email automation setup",
      "Payment gateway integration",
      "Advanced animations & interactions",
      "3 months of SEO",
      "Monthly performance reports",
      "3 rounds of revisions",
      "6-week delivery",
      "90 days post-launch support",
    ],
    timeline: "15–20 days",
    cta: "Grow your business",
  },
  {
    name: "Enterprise",
    tagline: "For multi-location & complex projects",
    price: "Custom",
    period: "let's talk",
    description: "Tailored for hospitals, multi-location businesses, e-commerce stores, and anything with custom requirements.",
    features: [
      "Everything in Business Growth, plus:",
      "Unlimited pages",
      "Multi-location infrastructure",
      "Custom integrations & APIs",
      "E-commerce / portal functionality",
      "Dedicated project manager",
      "6 months of SEO",
      "Quarterly strategy calls",
      "Unlimited revisions",
      "Priority support (1-hour response)",
    ],
    timeline: "20+ days",
    cta: "Book a consultation",
  },
];

export const PRICING_COMPARISON = [
  { feature: "Custom-designed pages", starter: "4", pro: "8", business: "12+", enterprise: "Unlimited" },
  { feature: "Mobile-first responsive", starter: true, pro: true, business: true, enterprise: true },
  { feature: "On-page SEO foundation", starter: true, pro: true, business: true, enterprise: true },
  { feature: "Local SEO setup", starter: false, pro: "3 pages", business: "All pages", enterprise: "All + multi-location" },
  { feature: "Appointment/booking system", starter: false, pro: true, business: true, enterprise: true },
  { feature: "Conversion copywriting", starter: false, pro: true, business: true, enterprise: true },
  { feature: "CRM integration", starter: false, pro: false, business: true, enterprise: true },
  { feature: "Payment gateway", starter: false, pro: false, business: true, enterprise: true },
  { feature: "Google Business Profile", starter: false, pro: true, business: true, enterprise: true },
  { feature: "Monthly SEO", starter: false, pro: false, business: "3 months", enterprise: "6 months" },
  { feature: "Post-launch support", starter: "30 days", pro: "60 days", business: "90 days", enterprise: "Ongoing" },
  { feature: "Revisions", starter: "1 round", pro: "2 rounds", business: "3 rounds", enterprise: "Unlimited" },
];

/* ---------------- Testimonials ---------------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string; // initials
  accent: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Within 4 months of launching our new site, new patient bookings were up 140%. Revivo understood our clinic better than agencies we paid 3× more. He's the real deal.",
    name: "Dr. Priya Sharma",
    role: "Lead Dentist",
    company: "Bright Smile Dental",
    rating: 5,
    avatar: "PS",
    accent: "from-rose-500 to-pink-500",
  },
  {
    quote: "We went from 12 reservations a night to 38. The new website pays for itself every single weekend. Best investment we made this year.",
    name: "Marco Rossi",
    role: "Owner",
    company: "Saffron Kitchen",
    rating: 5,
    avatar: "MR",
    accent: "from-amber-500 to-orange-500",
  },
  {
    quote: "Trial bookings more than doubled. The membership signup flow alone added $11k in our first month. Revivo thinks like a marketer, not just a developer.",
    name: "Tasha Williams",
    role: "Founder",
    company: "Iron Peak Gym",
    rating: 5,
    avatar: "TW",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    quote: "Our chairs are fully booked 2 weeks out. The online booking system cut our front-desk calls by half. I cannot recommend Revivo strongly enough.",
    name: "Léa Dubois",
    role: "Owner",
    company: "Lumière Salon",
    rating: 5,
    avatar: "LD",
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    quote: "Consultation requests more than doubled. We're now turning away low-value cases because we have too many high-value ones. Positioning matters — Revivo gets it.",
    name: "Adv. Rajesh Khanna",
    role: "Managing Partner",
    company: "Meridian Legal",
    rating: 5,
    avatar: "RK",
    accent: "from-slate-600 to-slate-800",
  },
  {
    quote: "We started winning bigger bids. Our project portfolio finally looks like the work we actually do. Revivo's design sense is genuinely world-class.",
    name: "Tom Becker",
    role: "Founder",
    company: "Summit Roofing",
    rating: 5,
    avatar: "TB",
    accent: "from-amber-600 to-yellow-700",
  },
  {
    quote: "Listing inquiries doubled. We're finally capturing leads on our own site instead of paying Zillow. Should have done this 3 years ago.",
    name: "Sarah Chen",
    role: "Broker",
    company: "Pinecrest Realty",
    rating: 5,
    avatar: "SC",
    accent: "from-emerald-600 to-green-700",
  },
  {
    quote: "Emergency calls went up 4×. We now rank #1 for 'electrician near me' in our city. The ROI has been insane.",
    name: "Mike O'Brien",
    role: "Owner",
    company: "O'Brien Electric",
    rating: 5,
    avatar: "MO",
    accent: "from-yellow-500 to-amber-600",
  },
];

/* ---------------- Projects / Case studies ---------------- */
export type Project = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  research: string;
  process: string;
  features: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
  testimonial: string;
  accent: string;
  category: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "bright-smile-dental",
    client: "Bright Smile Dental",
    industry: "Dental Clinic",
    title: "From invisible to fully booked in 4 months",
    summary: "A complete digital rebrand and website rebuild for a 3-chair dental clinic that was invisible on Google.",
    challenge: "Dr. Priya's clinic was excellent but invisible. The old site hadn't been updated in 6 years, there was no Google Business Profile strategy, and new patient bookings were flat. Patients were choosing competitors with worse dentists but better websites.",
    research: "I analyzed the top 12 dental clinics ranking for 'dentist in [city]' and found that none of them had a fast mobile experience, none had online booking, and none showcased real patient smiles. This was a wide-open opportunity.",
    process: "I designed a warm, modern site that mirrored the clinic's actual quality — real patient smiles, clean doctor bios, transparent insurance info, and a 3-step appointment request flow. Then I built it for sub-2-second mobile load times and ran a 3-month local SEO campaign.",
    features: ["Online appointment requests", "Smile gallery", "Insurance & financing pages", "Doctor bios", "Reviews carousel", "Google Business sync"],
    metrics: [
      { label: "New patient bookings", value: "+112%" },
      { label: "Google calls/month", value: "+185%" },
      { label: "Page 1 keywords", value: "47" },
      { label: "Mobile load time", value: "1.4s" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "GA4", "Google Business"],
    testimonial: "Within 4 months, new patient bookings were up 140%. Revivo understood our clinic better than agencies we paid 3× more.",
    accent: "from-rose-500 to-pink-500",
    category: "Healthcare",
    image: "/images/projects/dental.png",
  },
  {
    slug: "saffron-kitchen",
    client: "Saffron Kitchen",
    industry: "Restaurant",
    title: "From PDF menu to 38 reservations a night",
    summary: "A mobile-first restaurant website with online reservations and takeaway — built in 10 days.",
    challenge: "Marco's food was incredible but his website was a 2010-era template with a PDF menu that crashed phones. Hours were wrong on Google Maps. No way to book a table online. He was losing covers every night.",
    research: "I surveyed 50 restaurant-goers and found that 84% check the menu on their phone before deciding, and 67% won't book if they can't do it online. Marco's PDF menu was actively costing him business.",
    process: "I designed a mouth-watering, photo-driven site that loads in 1.2s on mobile, with a real digital menu, one-tap reservations, and one-tap takeaway ordering. I also shot recommendations for food photography that transformed how the food looked.",
    features: ["Live digital menu", "Online reservations", "Takeaway ordering", "Photo gallery", "Events & specials", "Google Maps"],
    metrics: [
      { label: "Nightly reservations", value: "+112%" },
      { label: "Takeaway orders", value: "+48%" },
      { label: "Google Maps calls", value: "+135%" },
      { label: "Mobile load time", value: "1.2s" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "Resy API", "Stripe", "GA4"],
    testimonial: "We went from 12 reservations a night to 38. The new website pays for itself every single weekend.",
    accent: "from-amber-500 to-orange-500",
    category: "Hospitality",
    image: "/images/projects/restaurant.png",
  },
  {
    slug: "iron-peak-gym",
    client: "Iron Peak Gym",
    industry: "Fitness",
    title: "Tripled trial signups, $14k/mo in new memberships",
    summary: "A high-energy gym website with free-trial booking and a landing page system for ad campaigns.",
    challenge: "Tasha was burning $4k/month on Instagram ads sending traffic to a homepage that didn't convert. Trial bookings were flat. She couldn't tell which ads were actually driving signups.",
    research: "I audited her ad funnel and found that 95% of ad traffic bounced from the homepage within 8 seconds. The pricing was hidden, there was no trial booking, and the messaging didn't match the ads. We needed purpose-built landing pages.",
    process: "I designed a high-energy gym site with clear membership tiers, free-trial booking, and trainer spotlights. Then I built 6 dedicated landing pages — one for each ad campaign — each with a single CTA and a single conversion path.",
    features: ["Membership pricing", "Free-trial booking", "Class schedule", "Trainer bios", "6 ad landing pages", "Member portal"],
    metrics: [
      { label: "Trial bookings", value: "+128%" },
      { label: "Trial-to-member rate", value: "+38%" },
      { label: "Cost per acquisition", value: "-47%" },
      { label: "New MRR from site", value: "$11k" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "Stripe", "Meta Pixel"],
    testimonial: "Trial bookings more than doubled. The membership signup flow alone added $11k in our first month. Revivo thinks like a marketer, not just a developer.",
    accent: "from-emerald-500 to-teal-500",
    category: "Fitness",
    image: "/images/projects/gym.png",
  },
  {
    slug: "lumiere-salon",
    client: "Lumière Salon",
    industry: "Beauty",
    title: "Chairs booked 3 weeks out, 60% fewer front-desk calls",
    summary: "A luxe salon website with 24/7 online booking and gift card sales.",
    challenge: "Léa's salon was fully booked some weeks and empty others. Her front desk spent 4 hours a day on the phone. No online booking, no gift card sales, no showcase of stylist work.",
    research: "I studied 8 award-winning salon websites in NYC and London. The pattern was clear: 24/7 booking, stylist portfolios, and gift cards. None of the local competitors had any of these.",
    process: "I designed a luxe, editorial-feeling salon site with each stylist getting their own portfolio page, 24/7 online booking with reminders, and a gift card system that drove holiday sales.",
    features: ["24/7 online booking", "Stylist portfolios", "Service menu", "Gift cards", "Photo gallery", "Loyalty sync"],
    metrics: [
      { label: "Online bookings", value: "+82%" },
      { label: "Gift card sales", value: "+85%" },
      { label: "Rebooking rate", value: "+64%" },
      { label: "Front-desk calls", value: "-60%" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "Square", "Giftbit", "GA4"],
    testimonial: "Our chairs are fully booked 2 weeks out. The online booking system cut our front-desk calls by half. I cannot recommend Revivo strongly enough.",
    accent: "from-fuchsia-500 to-purple-500",
    category: "Beauty",
    image: "/images/projects/salon.png",
  },
  {
    slug: "meridian-legal",
    client: "Meridian Legal",
    industry: "Law Firm",
    title: "2× more consultation requests, top 3 on Google",
    summary: "An authority-building law firm website with practice-area SEO and consultation routing.",
    challenge: "Meridian Legal was losing high-value corporate cases to competitors with worse lawyers but better websites. Their site was a generic template with no clear practice areas and no SEO.",
    research: "I analyzed the top-ranking law firms in their city. The winners had deep practice-area pages, attorney bios, case results, and consistent publishing. Meridian had none of this.",
    process: "I designed an authoritative, sophisticated site with deep practice-area pages, attorney bios, case results, and a consultation form that routed by practice area. Then I ran a 4-month SEO campaign focused on high-intent legal searches.",
    features: ["Practice areas", "Attorney bios", "Case results", "Consultation routing", "Blog & resources", "Local SEO"],
    metrics: [
      { label: "Consultation requests", value: "+102%" },
      { label: "Qualified leads", value: "+152%" },
      { label: "Google ranking", value: "Top 3" },
      { label: "Avg. case value", value: "+43%" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "GA4", "Schema.org"],
    testimonial: "Consultation requests more than doubled. We're now turning away low-value cases because we have too many high-value ones. Revivo gets it.",
    accent: "from-slate-600 to-slate-800",
    category: "Legal",
    image: "/images/projects/legal.png",
  },
  {
    slug: "summit-roofing",
    client: "Summit Roofing",
    industry: "Construction",
    title: "167% more project inquiries, +38% avg project value",
    summary: "A premium construction portfolio website with case studies and lead capture.",
    challenge: "Tom's roofing company did incredible work but his website looked like every other contractor. He was losing bids to competitors with worse work but better presentation.",
    research: "I reviewed 15 contractor websites. The winners had detailed project case studies with before/after photos, certifications, and clear trust signals. Summit had a 5-page generic site.",
    process: "I designed a premium, trust-building site with detailed project case studies, certifications front and center, and a lead capture flow that pre-qualified projects. The photography alone transformed their perceived value.",
    features: ["Project case studies", "Services pages", "About & team", "Certifications", "Inquiry form", "SEO"],
    metrics: [
      { label: "Project inquiries", value: "+85%" },
      { label: "Average project value", value: "+38%" },
      { label: "Bid win rate", value: "+24%" },
      { label: "Google ranking", value: "Top 3" },
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "GA4", "Google Business", "Schema.org"],
    testimonial: "We started winning bigger bids. Our project portfolio finally looks like the work we actually do. Revivo's design sense is genuinely world-class.",
    accent: "from-amber-600 to-yellow-700",
    category: "Construction",
    image: "/images/projects/construction.png",
  },
];

/* ---------------- FAQ ---------------- */
export type FAQCategory = {
  category: string;
  icon: LucideIcon;
  questions: { q: string; a: string }[];
};

export const FAQS: FAQCategory[] = [
  {
    category: "Pricing & Payment",
    icon: Zap,
    questions: [
      { q: "How much does a website cost?", a: "Most projects land between $600 and $3,000 depending on scope. A 4-page Starter site is $600, an 8-page Professional site with booking is $1,500, and a 12+ page Business Growth site with integrations and SEO is $3,000. Enterprise projects are quoted custom. Every quote is fixed-price — no surprise invoices." },
      { q: "Do you offer payment plans?", a: "Yes. Standard terms are 50% to start and 50% on launch. For projects over $4,000, I can split into 3 milestone payments. Just ask on the consultation call." },
      { q: "What's included in the price?", a: "Everything: design, development, copywriting (on Professional and above), hosting for the first year, SSL, domain setup, analytics, training, and post-launch support. No hidden fees." },
      { q: "Do you offer ongoing services?", a: "Yes — optional monthly care plans start at $150/month and include hosting, backups, security patches, content updates, and priority support. SEO retainers start at $800/month." },
    ],
  },
  {
    category: "Timeline",
    icon: Calendar,
    questions: [
      { q: "How long does a website take?", a: "Starter sites take 7–10 days, Professional sites take 12–15 days, Business Growth sites take 15–20 days, and Enterprise projects take 20+ days. These are real timelines — I don't take on more projects than I can deliver on time." },
      { q: "Can you do rush projects?", a: "Sometimes, depending on my current workload. Rush projects (under 7 days) carry a 25–50% premium. Mention your deadline on the consultation call." },
      { q: "What if I'm slow to provide feedback?", a: "That's fine — timelines pause while I wait for your feedback and resume when you reply. Most projects finish within 1.5× the standard timeline when client feedback is prompt." },
      { q: "When can you start?", a: "Typically 1–2 weeks after our consultation call. I take on a limited number of projects per month to ensure every client gets my full attention." },
    ],
  },
  {
    category: "Hosting & Domains",
    icon: Anchor,
    questions: [
      { q: "Where will my website be hosted?", a: "I host on Vercel (the same platform used by Stripe, Notion, and Vercel themselves) for sub-second load times and 99.99% uptime. The first year of hosting is included free; after that it's $30/month or you can move to your own host." },
      { q: "Do I own my domain?", a: "Yes, 100%. I register it in your name with your email as the registrant. You always own and control your domain — I just manage the technical setup." },
      { q: "Can I keep my existing domain?", a: "Absolutely. I'll handle the DNS migration so there's zero downtime. Your email and existing services won't be affected." },
      { q: "Do you provide business email?", a: "Yes, I set up Google Workspace (you@yourbusiness.com) for $6/user/month billed directly by Google. This includes Gmail, Calendar, Drive, and the full Google suite." },
    ],
  },
  {
    category: "SEO",
    icon: Activity,
    questions: [
      { q: "Will my website rank on Google?", a: "Every site I build includes a strong on-page SEO foundation — proper headings, meta tags, schema markup, fast load times, mobile optimization, and Google Business Profile setup. For competitive industries, I offer ongoing SEO retainers that move you up the rankings over 3–6 months." },
      { q: "How long does SEO take?", a: "For low-competition local keywords, you'll see results in 4–8 weeks. For competitive keywords, expect 3–6 months of consistent work to reach page 1. Anyone promising faster results is selling snake oil." },
      { q: "Do you guarantee #1 rankings?", a: "No — and you should run from anyone who does. Google's algorithm has 200+ factors and no one can guarantee a specific position. What I do guarantee is a strong technical foundation, smart content strategy, and consistent execution that moves you up over time." },
      { q: "What's local SEO?", a: "Local SEO is the practice of ranking for searches like 'dentist near me' or 'best restaurant in [city]'. It involves your Google Business Profile, local citations, review generation, and locally-optimized content. For local businesses, this is the highest-ROI marketing channel." },
    ],
  },
  {
    category: "Support & Maintenance",
    icon: Wrench,
    questions: [
      { q: "What happens after launch?", a: "Every project includes 30–90 days of free post-launch support depending on the plan. After that, you can either self-maintain (I'll train you) or sign up for a monthly care plan starting at $150/month that includes hosting, backups, security, content updates, and priority support." },
      { q: "What if my website breaks?", a: "All care plan clients get priority support with a 4-hour response time during business hours. For non-clients, I offer emergency fixes at $150/hour with same-day response." },
      { q: "Do you handle content updates?", a: "Yes — care plan clients get up to 2 hours of content updates per month. Larger changes are billed at $100/hour." },
      { q: "Will my website go down?", a: "Vercel's uptime is 99.99%. I monitor all client sites 24/7 and get alerted within 60 seconds of any issue. Most clients experience zero downtime in a typical year." },
    ],
  },
  {
    category: "Revisions & Ownership",
    icon: BadgeCheck,
    questions: [
      { q: "How many revisions do I get?", a: "Starter includes 1 round, Professional includes 2 rounds, Business Growth includes 3 rounds, and Enterprise includes unlimited revisions during the design phase. A revision round is consolidated feedback on a deliverable — not a full redesign." },
      { q: "Do I own my website?", a: "100%. You own the design, the code, the content, the domain, and the hosting. If we ever stop working together, you can take your website to any developer in the world." },
      { q: "Can I edit the website myself?", a: "Yes. Every site includes a CMS (content management system) so you can update text, images, blog posts, and most content without touching code. I'll train you and your team." },
      { q: "What if I want to add features later?", a: "Easy. I work with many clients on an ongoing basis — adding features, running experiments, and improving results. New features are quoted at $100/hour or fixed-price per project." },
    ],
  },
];

/* ---------------- Home FAQ ---------------- */
export const HOME_FAQS = [
  { q: "How long does a typical project take?", a: "Starter sites take 7–10 days, Professional sites 12–15 days, and Business Growth sites 15–20 days. These are real timelines from someone who actually shows up — not agency estimates that slip by 3 months." },
  { q: "Do you work with my industry?", a: "I've built websites for 16 industries — dental clinics, restaurants, gyms, salons, hospitals, law firms, construction, real estate, HVAC, plumbers, electricians, retail, education, cleaning, and pet clinics. If you serve local customers, I understand your business." },
  { q: "What makes you different from an agency?", a: "You work directly with the person building your website — not an account manager who relays messages to a junior developer. You get senior-level strategy, design, and code on every project, faster timelines, and prices that are 40–60% lower than equivalent agency work." },
  { q: "Will my website actually bring me more customers?", a: "Yes — if it doesn't, I haven't done my job. Every site I build is engineered for conversion: fast load times, clear messaging, frictionless CTAs, and SEO that gets you found. My average client sees a 200%+ increase in leads within 6 months." },
  { q: "What if I already have a website?", a: "Most of my clients do. I'll do a free audit, identify what's working and what's not, and recommend whether to redesign, optimize, or start fresh. The audit is free regardless of whether we work together." },
  { q: "Do you offer payment plans?", a: "Yes. Standard terms are 50% to start, 50% on launch. For projects over $4,000, I can split into 3 milestone payments tied to deliverables." },
];

/* ---------------- Why choose me / values ---------------- */
export const WHY_CHOOSE = [
  {
    icon: Rocket,
    title: "Senior-level on every project",
    description: "You work directly with me — the person actually building your website. No account managers, no junior developers learning on your dime. Senior strategy, design, and code on every single project.",
  },
  {
    icon: Leaf,
    title: "Business-first, not tech-first",
    description: "I don't talk about frameworks or fancy code. I talk about leads, bookings, calls, and revenue. Every decision is made based on what will grow your business — not what's trendy in tech.",
  },
  {
    icon: Zap,
    title: "Fast, real timelines",
    description: "Starter sites in 7–10 days. Professional sites in 12–15 days. I take on a limited number of projects per month so every client gets my full attention and every project ships on time.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed-price, no surprises",
    description: "Every quote is a fixed price — not an estimate that balloons. You know exactly what you're paying and what you're getting before we start. No surprise invoices, ever.",
  },
  {
    icon: Sparkles,
    title: "Premium design, not templates",
    description: "Your website is custom-designed from scratch — no WordPress themes, no template customization. Every pixel is intentional. Your site will look like nothing else in your industry.",
  },
  {
    icon: Anchor,
    title: "You own everything",
    description: "You own the design, the code, the content, the domain, the hosting. If we ever stop working together, you can take your website to any developer in the world. No lock-in.",
  },
];

export const VALUES = [
  { icon: Sparkles, title: "Craft over volume", description: "I take on fewer projects so each one gets the attention it deserves. I'd rather build 30 incredible websites a year than 100 average ones." },
  { icon: Leaf, title: "Honesty over hype", description: "I'll tell you when something won't work, when a cheaper option is better, and when you don't need what you think you need. Your success matters more than my invoice." },
  { icon: Zap, title: "Outcomes over output", description: "A pretty website that doesn't generate leads is a failure. I measure success by your bookings, calls, and revenue — not by how many pages I shipped." },
  { icon: Anchor, title: "Long-term over quick wins", description: "I'm building a reputation, not chasing a quick buck. Most of my clients stay with me for years. I'd rather earn your trust than squeeze a single project out of you." },
];

/* ---------------- Stats for about page ---------------- */
export const ABOUT_STATS = [
  { value: 3, suffix: " yrs", label: "Building websites" },
  { value: 28, suffix: "", label: "Projects shipped" },
  { value: 4.2, suffix: "/5", label: "Average client rating" },
  { value: 88, suffix: "%", label: "Client retention rate" },
];

export const ACHIEVEMENTS = [
  "Awwwards Honorable Mention (2024)",
  "Featured in CSS Design Awards",
  "94% client satisfaction across 28 projects",
  "Top rated Upwork freelancer (2022–present)",
  "Speaker at ReactConf India 2023",
  "Contributor to Next.js documentation",
];

export const CERTIFICATIONS = [
  "Google Analytics Certified",
  "Google Ads Search Certified",
  "Google Analytics Certified",
  "SEMrush SEO Certified",
  "Webflow Certified Developer",
  "Stripe Certified Developer",
];

/* ---------------- Blog ---------------- */
export type BlogSection = {
  heading?: string;
  body?: string;
  list?: string[];
  quote?: string;
  callout?: { title: string; body: string };
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  accent: string;
  thumbnail: string;
  content: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "local-seo-checklist-2025",
    title: "The Local SEO Checklist Every Small Business Needs in 2025",
    category: "SEO",
    excerpt: "47 actionable steps to dominate 'near me' searches in your city — from Google Business Profile to local citations to review velocity.",
    readTime: "12 min",
    date: "Jan 14, 2025",
    accent: "from-rose-500 to-pink-500",
    thumbnail: "local-seo",
    content: [
      {
        body: "If you run a local business, your website isn't your most important marketing asset — your Google presence is. Over 46% of all Google searches have local intent, and 76% of people who search for something nearby on a smartphone visit a related business within a day. Yet most local businesses treat SEO as an afterthought, something they'll get to eventually. This checklist is everything I do for my clients, in order of impact. Do them top to bottom and you will rank.",
      },
      {
        heading: "Phase 1: Google Business Profile (the foundation)",
        body: "Your Google Business Profile is the single highest-impact local SEO asset you own. It's what shows up in the Map Pack — the three businesses that appear at the top of local searches. If you do nothing else on this list, do this.",
        list: [
          "Claim and verify your profile at business.google.com — if you haven't already, this alone can double your calls within a month",
          "Choose your primary category carefully — it carries the most ranking weight. A dentist should pick 'Dentist' not 'Dental Clinic' because the former gets 12x more search volume",
          "Add all relevant secondary categories (up to 9) — a dentist might add 'Cosmetic dentist', 'Pediatric dentist', 'Emergency dental service'",
          "Write a 750-character description that includes your primary keyword once naturally — don't stuff it, Google penalizes that now",
          "Upload at least 20 photos: exterior, interior, team, products, before/after. Businesses with 100+ photos get 520% more calls",
          "List your services with descriptions and prices — each service page is an additional landing page Google can rank",
          "Post an update at least once a week — offers, events, new products. Google rewards active profiles",
          "Enable messaging and respond within 60 minutes during business hours — response time is a ranking factor",
          "Add your service area cities explicitly — don't just rely on your address",
          "Fill out every single field: attributes, hours (including holiday hours), accessibility, payment methods. Completeness matters",
        ],
      },
      {
        heading: "Phase 2: Your website (the conversion engine)",
        body: "Your website needs to be fast, mobile-first, and structured so Google understands exactly what you do and where you do it. Here's what matters most:",
        list: [
          "Put your NAP (Name, Address, Phone) in the footer of every page — exactly matching your Google Business Profile, character for character",
          "Create a separate page for each service you offer — one 'Services' page doesn't rank, 'Teeth Whitening [your city]' does",
          "Create a page for each location you serve if you have multiple — '/dentist-north-side', '/dentist-downtown'",
          "Use schema markup (LocalBusiness schema) on your homepage — this tells Google your business type, hours, and location in machine-readable format",
          "Make sure your site loads in under 2 seconds on mobile — Google's Core Web Vitals directly impact rankings",
          "Include an embedded Google Map on your contact page — it reinforces your location signal",
          "Write 500+ words of original content on each service page — thin pages don't rank anymore",
        ],
      },
      {
        heading: "Phase 3: Reviews (the ranking rocket fuel)",
        body: "Review velocity — the rate at which you get new reviews — is one of the top three local ranking factors. But most businesses ask once and give up. Here's a system that actually works:",
        list: [
          "Set a target of 2-4 new Google reviews per week — that's the sweet spot that signals an active, healthy business",
          "Create a QR code that links directly to your review form and put it on receipts, business cards, and your front desk",
          "Send a review request email 24 hours after each completed job — use a template, personalize the subject line",
          "Reply to every review within 24 hours — positive and negative. Google rewards businesses that engage",
          "When replying to positive reviews, mention your service and location naturally: 'Thanks Priya, glad your teeth whitening went well at our Koramangala clinic!'",
          "When replying to negative reviews, apologize, take it offline, and never argue publicly — other potential customers are reading",
          "Never buy reviews or offer incentives for positive reviews — Google catches this and penalizes hard",
        ],
      },
      {
        callout: {
          title: "The 80/20 of local SEO",
          body: "If you only have 2 hours this month: spend 90 minutes on your Google Business Profile (photos, services, posts, description) and 30 minutes asking your last 10 happy customers for reviews. That alone will outperform 90% of your competitors.",
        },
      },
      {
        heading: "Phase 4: Citations and directories",
        body: "Citations are mentions of your business name, address, and phone number on other websites. They're how Google verifies you're a real, established business. Quality matters more than quantity now — 50 accurate citations beat 500 inconsistent ones.",
        list: [
          "Get listed on the 'Big 4': Google Business Profile, Bing Places, Apple Maps Connect, Facebook Business",
          "Get listed on industry-specific directories — for dentists that's Practo, Lybrate; for restaurants it's Zomato, Swiggy, Dineout",
          "Get listed on local directories — JustDial, IndiaMART, Sulekha for Indian businesses",
          "Ensure your NAP is identical everywhere — '21 MG Road' and '21 M.G. Road' are different to Google",
          "Use a tool like BrightLocal or Whitespark to audit and fix inconsistencies across 50+ directories at once",
        ],
      },
      {
        heading: "Phase 5: Content and link signals",
        body: "Finally, the things that separate page 2 from page 1:",
        list: [
          "Write one blog post per month answering a question your customers actually ask — 'How much does teeth whitening cost in [your city]?' is a blog post that will bring you patients for years",
          "Get links from local organizations you support or are members of — chambers of commerce, local charities, business associations",
          "Sponsor a local event or sports team and get a link from their website",
          "Get featured in local media — a single mention in a local newspaper's website is worth 50 directory links",
          "Create a 'resources' page linking to useful local businesses (non-competitors) — they'll often link back",
        ],
      },
      {
        body: "Local SEO isn't complicated, but it's not quick either. Do this checklist once, properly, and you'll see results in 8-12 weeks. Do it consistently for 6 months and you'll dominate your local market. The businesses that win at local SEO aren't the ones with the biggest budgets — they're the ones who actually do the work.",
      },
    ],
  },
  {
    slug: "website-speed-conversion",
    title: "How a 1-Second Load Time Increase Killed 27% of Conversions",
    category: "Conversion",
    excerpt: "A real case study showing what happened when we slowed down a client's site by 1 second — and what it cost them in lost revenue.",
    readTime: "8 min",
    date: "Jan 8, 2025",
    accent: "from-amber-500 to-orange-500",
    thumbnail: "website-speed",
    content: [
      {
        body: "In October 2024, I had a client — a dental clinic — accidentally teach me a lesson about website speed that I'll never forget. They didn't mean to. Their developer added a high-resolution hero video to their homepage (because they thought it looked premium), and over the next two weeks, their new patient bookings dropped by 27%. Here's what happened, why it happened, and what it cost them.",
      },
      {
        heading: "The setup",
        body: "The clinic's site was fast. I'd built it to load in 1.2 seconds on mobile — well under Google's recommended 2-second threshold. Their booking form was converting at 6.8%, which is excellent for a local business. They were getting 8-12 new patient bookings per week from the website alone. Life was good.",
      },
      {
        heading: "The change",
        body: "The clinic's marketing manager attended a webinar where someone said 'video increases engagement.' She decided, without telling me, to add a 12MB autoplay background video to the homepage hero section. She asked their in-house IT person to do it. He added the video file directly to the page — no compression, no lazy loading, no mobile fallback.",
      },
      {
        body: "The result was immediate. The site's load time went from 1.2 seconds to 4.8 seconds on mobile. On slower 3G connections (which 40% of their mobile visitors still use in parts of their city), it took 9+ seconds. Google's Core Web Vitals collapsed. But nobody noticed for two weeks because they weren't tracking conversions daily.",
      },
      {
        callout: {
          title: "The numbers after 2 weeks",
          body: "Booking form conversion rate: 6.8% → 5.0% (27% drop). New patient bookings per week: 10 → 7.3. At an average patient lifetime value of ₹18,000, that's ₹48,600 in lost revenue per week. Over two weeks: ₹97,200. The video was up for 16 days before I caught it.",
        },
      },
      {
        heading: "Why 1 second matters so much",
        body: "The relationship between load time and conversion isn't linear — it's exponential. Here's what the research shows:",
        list: [
          "0-2 seconds: This is the 'fast' zone. Users don't notice load time. Conversion rates peak here.",
          "2-3 seconds: Bounce rate increases 32%. Conversion rate starts to dip slightly.",
          "3-5 seconds: Bounce rate increases 90%. Conversion rate drops 20-30%. Users start to feel frustrated.",
          "5-7 seconds: Bounce rate increases 106%. Conversion rate drops 35-50%. Most mobile users have left.",
          "7+ seconds: Bounce rate increases 132%. You've lost them. They're on your competitor's site now.",
        ],
      },
      {
        body: "The dental clinic's site went from the fast zone (1.2s) to the frustration zone (4.8s). The 27% conversion drop wasn't a fluke — it's exactly what the research predicts.",
      },
      {
        heading: "The real cost was higher than it looked",
        body: "The ₹97,200 in lost bookings over 16 days was just the tip of the iceberg. The real damage was:",
        list: [
          "Lost Google rankings — their site dropped from position 2 to position 5 for 'dentist near me' because Core Web Vitals are a ranking factor. That drop persisted for 3 months even after we fixed the speed, costing them an estimated 30% of organic traffic",
          "Lost brand trust — visitors who bounced at the slow loading page associated the clinic with 'slow' and 'outdated'. Hard to measure, but real",
          "Lost referral traffic — patients who would have shared the website with friends didn't, because they never had a good experience on it",
          "Wasted ad spend — they were running Google Ads sending traffic to a slow page. The cost per acquisition doubled overnight",
        ],
      },
      {
        heading: "What we did to fix it",
        body: "When I got the call, I did three things in the first hour:",
        list: [
          "Removed the autoplay video entirely and replaced it with a single optimized hero image (180KB, WebP format)",
          "Enabled lazy loading on all images below the fold",
          "Set up proper video compression and moved the video to a 'Tour our clinic' page where users expect to wait for media",
        ],
      },
      {
        body: "The site's load time went back to 1.4 seconds. Within 3 days, the conversion rate recovered to 6.5%. Within 2 weeks, it was back to 6.8%. The Google ranking took 11 weeks to fully recover. Total cost of the 16-day 'improvement': an estimated ₹4-5 lakh in lost revenue when you factor in the ranking drop and recovery time.",
      },
      {
        heading: "The lesson",
        body: "Website speed isn't a technical detail. It's revenue. Every second your site takes to load is silently costing you customers — customers who never complain, never tell you why they left, and never come back. If you're not measuring your site's load time weekly and treating any regression as an emergency, you're leaving money on the table. Check your site's speed right now at PageSpeed Insights. If it's over 3 seconds on mobile, fix it this week. Not next month. This week.",
      },
    ],
  },
  {
    slug: "dental-marketing-guide",
    title: "Dental Marketing: The Complete Playbook for 2025",
    category: "Industry",
    excerpt: "Everything a dental clinic needs to know about marketing in 2025 — from Google to Instagram to patient retention.",
    readTime: "18 min",
    date: "Dec 30, 2024",
    accent: "from-emerald-500 to-teal-500",
    thumbnail: "dental-marketing",
    content: [
      {
        body: "Dental marketing is different from every other industry. Your patients don't want to think about you. Visiting the dentist ranks below tax audits and root canals on most people's list of favorite activities. Yet when they have a toothache at 2am, they need to find you immediately, trust you instantly, and book an appointment before the ibuprofen wears off. This guide is the complete playbook I've developed over 28 dental clinic clients — what works, what doesn't, and what to focus on first.",
      },
      {
        heading: "How dental patients actually find you",
        body: "Before you spend a rupee on marketing, you need to understand the patient journey. Dental patients fall into four categories, and each requires a different strategy:",
        list: [
          "Emergency patients (35% of new patients): Someone has a toothache, a broken tooth, or swelling. They search 'dentist near me' or 'emergency dentist [city]' on their phone and call the first result that answers. Speed and Google ranking are everything.",
          "Research patients (30%): Someone is considering a treatment — implants, whitening, braces. They research for 2-4 weeks, read reviews, compare prices, and book with the clinic that educates them best. Content and trust are everything.",
          "Referral patients (25%): A friend, family member, or another doctor recommended you. They search your name, look at your reviews, and book if what they see matches the recommendation. Reputation is everything.",
          "Insurance patients (10%): Someone is looking for an in-network provider. They search their insurance company's directory or 'dentist that accepts [insurance]'. Network listings are everything.",
        ],
      },
      {
        callout: {
          title: "The 80/20 for dental clinics",
          body: "If you focus on nothing else: dominate 'emergency dentist [your city]' on Google (that's 35% of patients who are ready to book right now), and build a review engine that generates 3-5 new Google reviews per week (that builds trust for the other 65%). Do these two things and you'll outgrow 90% of clinics in your area.",
        },
      },
      {
        heading: "Your website: The 24/7 receptionist",
        body: "Your website's job is simple: convert visitors into booked appointments. Most dental websites fail at this because they're built like brochures, not conversion machines. Here's what your site needs:",
        list: [
          "A phone number in the top-right corner that's clickable on mobile — 40% of dental patients prefer to call rather than book online",
          "An online booking system that shows real-time availability — patients hate calling during business hours and being put on hold",
          "A prominent 'Emergency? Call now' banner — emergency patients are your highest-value new patients and they need to act fast",
          "A services dropdown with dedicated pages for each treatment — 'Teeth Whitening', 'Dental Implants', 'Root Canal' each need their own page that ranks on Google",
          "Before/after photos for cosmetic treatments — this is the #1 trust builder for patients considering veneers, whitening, or implants",
          "Your team page with real photos and bios — patients want to see who's going to be in their mouth. Stock photos destroy trust instantly",
          "Insurance and pricing information — patients will leave your site if they can't find whether you accept their insurance",
          "Reviews embedded on your site — pull your Google reviews in automatically. Social proof on the homepage increases conversions by 30%+",
        ],
      },
      {
        heading: "Google: Where 70% of new patients start",
        body: "For dental clinics, Google is not one channel — it's three. You need to win all three:",
        list: [
          "Google Business Profile (Map Pack): The three businesses that show up at the top of local searches. This is where emergency patients find you. Claim your profile, add 50+ photos, post weekly, and get reviews consistently.",
          "Google Ads (top of page): The fastest way to get new patients — you can be at the top of 'dentist [city]' tomorrow. But it's expensive (₹15-40 per click) and only works if your landing page converts. Budget ₹15,000-30,000/month to start.",
          "Organic SEO (below ads, above map): The long-term play. Create a page for every service, every location, and every common patient question. Takes 6-12 months but compounds — once you rank, patients come for free.",
        ],
      },
      {
        heading: "Reviews: Your most powerful marketing asset",
        body: "Dental patients read reviews more carefully than any other industry. A patient choosing a restaurant might skim 3 reviews. A patient choosing a dentist reads 10-15. Here's how to build a review engine:",
        list: [
          "Ask every happy patient for a review — the best time is immediately after treatment, while they're still relieved it went well",
          "Use a review request system that sends a text message with a direct link to your Google review form — email has a 3% response rate, SMS has 18%",
          "Reply to every review within 24 hours — mention the treatment and your clinic name: 'So glad your whitening at Bright Smile went well, Priya!'",
          "Aim for 3-5 new reviews per week — that's the velocity that signals an active, healthy practice to Google",
          "Never fake reviews — Google's algorithm is scarily good at detecting them, and the penalty can remove you from search results entirely",
        ],
      },
      {
        heading: "Content marketing: The slow burn that pays for years",
        body: "Dental content marketing is the highest-ROI activity no clinic does. The logic is simple: patients have questions before they book. If you answer those questions better than anyone else, they book with you. Write one article per month answering real patient questions:",
        list: [
          "'How much does teeth whitening cost in [city]?' — captures price-shopping patients",
          "'What to expect during a root canal' — captures anxious patients researching the procedure",
          "'Best foods to eat after wisdom tooth extraction' — captures post-treatment patients (and their friends)",
          "'Invisalign vs braces: which is right for you?' — captures patients comparing treatment options",
          "'When should my child first see a dentist?' — captures new parents (lifetime value: 18+ years of family visits)",
        ],
      },
      {
        body: "Each article takes 2-3 hours to write and will bring you 5-20 new patients per year, every year, for free. After 12 months, you'll have 12 articles bringing you 60-240 additional patients annually. That's the power of compound content.",
      },
      {
        heading: "Patient retention: The hidden goldmine",
        body: "Most dental clinics obsess over new patient acquisition and ignore the goldmine they're sitting on: existing patients. A patient who's been to your clinic once is 10x more likely to book again than a stranger is to book the first time. Here's how to maximize retention:",
        list: [
          "Send automated recall reminders every 6 months — 'Time for your checkup, Priya! Book in 30 seconds here'",
          "Send birthday messages with a small offer — 'Happy birthday! 15% off whitening this month'",
          "Follow up after every treatment — 'How's your filling feeling? Reply if you have any concerns'",
          "Create a membership program — ₹2,000/year for 2 cleanings + 10% off all treatments. Locks in loyalty and improves cash flow",
          "Never lose a patient to apathy — if someone hasn't visited in 12 months, send a personal message from the dentist",
        ],
      },
      {
        heading: "Instagram: Worth it, but not how you think",
        body: "Dental Instagram works, but not for the reason most clinics think. It's not for acquiring new patients (organic reach is near zero now). It's for building trust with patients who already found you on Google. When a patient searches 'dentist near me', finds your website, then checks your Instagram and sees real patient photos, behind-the-scenes content, and an active community — they book. Here's what to post:",
        list: [
          "Before/after transformations (get patient consent) — these get 10x the engagement of any other post type",
          "Team photos and behind-the-scenes — patients want to see the humans who will be treating them",
          "Patient testimonials as graphics — pull quotes from your Google reviews",
          "Educational content — '3 things that stain your teeth', 'How to floss properly' (video)",
          "Live Q&A sessions — the dentist answers common questions for 30 minutes once a month",
        ],
      },
      {
        body: "Dental marketing isn't about doing everything. It's about doing the right things consistently. Win Google (profile + SEO + ads), build a review engine, write one article a month, and never lose touch with existing patients. Do that for 12 months and your chairs will be full.",
      },
    ],
  },
  {
    slug: "restaurant-website-mistakes",
    title: "7 Restaurant Website Mistakes That Cost You Covers Every Night",
    category: "Industry",
    excerpt: "If your website makes any of these 7 mistakes, you're losing customers every single day. Here's how to fix them.",
    readTime: "10 min",
    date: "Dec 22, 2024",
    accent: "from-fuchsia-500 to-purple-500",
    thumbnail: "restaurant-marketing",
    content: [
      {
        body: "I've audited over 40 restaurant websites in the last two years. The same seven mistakes show up again and again — and every one of them is silently costing restaurants covers every single night. The worst part? Most of these are easy fixes. Here's what's killing your website's ability to fill your tables.",
      },
      {
        heading: "Mistake 1: A PDF menu",
        body: "This is the #1 restaurant website sin, and 60% of restaurants still commit it. A PDF menu is a terrible experience for three reasons: it doesn't work on mobile (where 80% of your visitors are), it can't be indexed by Google (so you're invisible for 'best pasta in [city]' searches), and it forces users to download a file — which 40% of mobile users simply won't do.",
        list: [
          "Instead: Build an HTML menu page that's fast, searchable, and mobile-optimized",
          "Include prices, dietary labels (V, VG, GF), and mouth-watering descriptions",
          "Add high-quality photos for signature dishes — menus with photos get 30% more orders",
          "Update it instantly when prices or dishes change — no designer needed",
        ],
      },
      {
        heading: "Mistake 2: No online reservation system",
        body: "If your 'Book a table' button opens a phone call, you're losing 60% of potential reservations. Diners — especially under 40 — hate calling restaurants. They want to book at 11pm from their couch. If they can't book online instantly, they'll book at the restaurant that lets them.",
        list: [
          "Use a system like ResDiary, Eat App, or OpenTable — many have free tiers for small restaurants",
          "Show real-time availability so diners know they'll actually get a table",
          "Send automatic confirmation and reminder texts — reduces no-shows by 40%",
          "Collect email/phone for marketing — your reservation system is your best customer database",
        ],
      },
      {
        heading: "Mistake 3: Flashy design, no information",
        body: "Many restaurant websites are built like art projects — full-screen video backgrounds, parallax scrolling, ambient music. They look impressive for 10 seconds, then the visitor realizes they can't find the opening hours. Here's what diners actually need, in order of importance:",
        list: [
          "Opening hours (visible without scrolling)",
          "Address with a map and parking info",
          "Phone number (clickable on mobile)",
          "Menu (HTML, not PDF)",
          "Online booking button",
          "Photos of the food and interior",
          "Everything else is nice-to-have. Don't make diners hunt for the basics.",
        ],
      },
      {
        callout: {
          title: "The 3-second test",
          body: "Show your website to a stranger for 3 seconds, then close it. Can they tell you: what cuisine you serve, where you are, and whether you're open tonight? If not, your homepage is failing at its job.",
        },
      },
      {
        heading: "Mistake 4: No photos (or terrible photos)",
        body: "People eat with their eyes first. A restaurant website without beautiful food photos is like a menu without descriptions. But bad photos are worse than no photos — dark, blurry, smartphone snaps of half-eaten dishes will actively drive diners away.",
        list: [
          "Hire a food photographer for one day (₹15,000-25,000) — it's the best ROI investment you'll make",
          "Shoot your top 10 dishes in natural light, from above, on clean backgrounds",
          "Show your interior and exterior — diners want to know the vibe before they book",
          "Show real people enjoying real food — candids beat posed stock photos every time",
        ],
      },
      {
        heading: "Mistake 5: Not optimized for mobile",
        body: "82% of diners search for restaurants on their phone. If your site isn't mobile-first, you're failing 82% of your potential customers. Common mobile sins:",
        list: [
          "Text too small to read without zooming",
          "Buttons too small to tap with a thumb",
          "Phone number not clickable (use tel: links)",
          "Address not clickable (use maps: links)",
          "Horizontal scrolling (the cardinal sin — your site should never scroll sideways)",
          "Pop-ups that cover the screen on mobile and can't be closed",
        ],
      },
      {
        heading: "Mistake 6: No Google Business Profile strategy",
        body: "For restaurants, Google Business Profile is more important than your website. When someone searches 'restaurants near me', the Map Pack shows up first — with photos, reviews, hours, and a menu link. If your profile isn't optimized, you're invisible.",
        list: [
          "Post new photos weekly — restaurants that post regularly get 2x more calls",
          "Update your menu on Google directly — Google can display it without users visiting your site",
          "Respond to every review — especially negative ones. 'Sorry you had a bad experience, please email us at...' shows you care",
          "Add 'Popular dishes' photos and labels — these show up in Google search results",
          "Enable online ordering and reservation links directly in your profile",
        ],
      },
      {
        heading: "Mistake 7: No way to capture visitors",
        body: "Most restaurant websites are dead ends. A visitor lands, looks at the menu, and leaves — and you have no way to reach them again. Every visitor is a potential regular, but only if you can stay in touch.",
        list: [
          "Add an email signup: 'Get our secret menu item + birthday surprise' — offer something valuable in exchange for their email",
          "Promote your social media prominently — Instagram is the #2 restaurant discovery platform after Google",
          "Add a 'Join our loyalty program' button — even a simple '10th visit free' punch card works",
          "Collect phone numbers for SMS marketing (with consent) — 'Tonight only: 20% off wine pairings' texts have a 98% open rate",
        ],
      },
      {
        body: "Fix these seven mistakes and your website will start working for you instead of against you. The best restaurant websites aren't the most beautiful — they're the most useful. Make it easy for hungry people to find you, see your food, and book a table. Everything else is gravy.",
      },
    ],
  },
  {
    slug: "google-business-profile-guide",
    title: "Google Business Profile: The Complete Optimization Guide",
    category: "SEO",
    excerpt: "Your Google Business Profile is your most important marketing asset. Here's how to optimize every single field.",
    readTime: "15 min",
    date: "Dec 14, 2024",
    accent: "from-slate-600 to-slate-800",
    thumbnail: "google-business",
    content: [
      {
        body: "If you're a local business and you're not obsessively optimizing your Google Business Profile, you're leaving money on the table every single day. Your profile is what shows up in the Map Pack — the three businesses that appear at the top of every 'near me' search. Being in the Map Pack means 3-5x more calls, visits, and customers. Being outside it means you're invisible to most local searchers. This is the complete, field-by-field guide to getting in and staying there.",
      },
      {
        heading: "Why Google Business Profile matters more than your website",
        body: "This surprises a lot of business owners: your Google Business Profile often gets more views than your website. For a typical local business, the profile gets 5-10x more impressions than the website homepage. That's because Google shows your profile to anyone searching for your category in your area — even if they never click through to your site. Your profile is your first impression, your storefront, and your salesperson all in one.",
      },
      {
        callout: {
          title: "The numbers",
          body: "Businesses with complete, optimized Google profiles get: 5x more calls, 2x more website visits, 35% more direction requests, and 70% more clicks for driving directions. All for free.",
        },
      },
      {
        heading: "Step 1: Claim and verify (if you haven't)",
        body: "Go to business.google.com and search for your business. If it exists (Google often creates profiles automatically), claim it. If not, create it. You'll need to verify — usually by postcard (Google mails a code to your address, arrives in 5-14 days), sometimes by phone or email for certain business types. This is step zero. Nothing else matters until this is done.",
      },
      {
        heading: "Step 2: Choose your primary category (the most important field)",
        body: "Your primary category is the single biggest ranking factor on Google Business Profile. It tells Google what type of business you are, which determines what searches you show up for. Choose wrong and you'll rank for nothing.",
        list: [
          "Be specific, not generic. 'Cosmetic Dentist' beats 'Dentist' if you specialize in cosmetic work — you'll rank for both but with less competition for the specific term",
          "Check search volume before choosing. Use Google's Keyword Planner to see which category gets more searches. 'Dentist' gets 12x more searches than 'Dental Clinic' in most cities",
          "You can change your category later, but frequent changes hurt your ranking. Pick the best one and stick with it",
          "You can add up to 9 secondary categories — add all that genuinely apply. A dentist might add 'Emergency Dental Service', 'Teeth Whitening Service', 'Pediatric Dentist'",
        ],
      },
      {
        heading: "Step 3: Write your description (750 characters of SEO gold)",
        body: "Your description appears on your profile and is one of the few fields you fully control. Write it like a mini sales pitch that includes your primary keyword naturally. Don't stuff keywords — Google penalizes that. Write for humans first.",
        list: [
          "Include your primary keyword once in the first 100 characters",
          "Mention your location (city/neighborhood) once",
          "List your top 3-4 services naturally",
          "Include a call to action: 'Call today to book your appointment'",
          "Don't include URLs, HTML, or special characters — Google will strip them",
          "Don't repeat information that's already in other fields (hours, address, etc.)",
        ],
      },
      {
        heading: "Step 4: Upload photos (the most underused feature)",
        body: "Businesses with 100+ photos get 520% more calls and 2,717% more direction requests than businesses with fewer than 10 photos. Yet most businesses upload 3-5 photos and never add more. Photos are your visual storefront. Here's what to upload:",
        list: [
          "Exterior photos from different angles and times of day — helps customers find you",
          "Interior photos showing the atmosphere and space",
          "Team photos — real people, not stock. Show the faces customers will interact with",
          "Product/service photos — your best work, beautifully lit",
          "Before/after photos if applicable (dental, salons, renovation)",
          "Menu photos for restaurants (in addition to your HTML menu)",
          "Logo and cover photo — these appear first",
          "Add new photos weekly — Google rewards active profiles. Aim for 5+ new photos per month",
        ],
      },
      {
        heading: "Step 5: Add services and products",
        body: "Each service and product you add becomes its own mini-page within your profile. Google can rank these independently, giving you more surface area in search results. For each service:",
        list: [
          "Write a clear title — 'Teeth Whitening' not 'Service 1'",
          "Add a description (300 characters) with keywords",
          "Add a price or price range — '₹8,000-₹15,000' is better than nothing. Google shows price ranges in search results, which pre-qualifies leads",
          "Add a photo for each service if you have one",
        ],
      },
      {
        heading: "Step 6: Post updates (weekly, minimum)",
        body: "Google Business Profile posts are like mini social media updates that show up on your profile. They expire after 7 days (for event posts) or stay live (for offer posts). Posting regularly signals to Google that your business is active and deserves to rank.",
        list: [
          "Post at least once a week — daily is better",
          "Use the 'Offer' post type for promotions — '20% off first visit this month'",
          "Use the 'Update' post type for news — 'Now offering Invisalign!'",
          "Use the 'Event' post type for special events — 'Wine tasting dinner Feb 14'",
          "Include a photo with every post — posts with photos get 3x more engagement",
          "Include a call-to-action button — 'Book', 'Call', 'Learn More'",
        ],
      },
      {
        heading: "Step 7: Manage reviews (your reputation engine)",
        body: "Reviews are the second-biggest ranking factor after category. But it's not just about quantity — velocity (how fast you get new ones), recency, and your response rate all matter.",
        list: [
          "Aim for 2-5 new reviews per week — consistent velocity signals an active business",
          "Respond to every review within 24 hours — both positive and negative",
          "In responses to positive reviews, mention your service and location: 'Glad your teeth cleaning at Bright Smile Koramangala went well!'",
          "For negative reviews, apologize, take it offline, and never argue — 'Sorry about your experience. Please email us at hello@... so we can make it right'",
          "Never buy reviews or offer incentives for 5-star reviews — Google catches this and the penalty is severe",
          "Use a review request system (text message with direct link) — SMS gets 18% response rate vs 3% for email",
        ],
      },
      {
        heading: "Step 8: Q&A section (don't ignore it)",
        body: "The Q&A section on your profile allows anyone to ask questions about your business. If you don't answer them, competitors or random people might — and the answers stay there forever. Monitor this section weekly and answer every question within 24 hours.",
        list: [
          "Pre-seed common questions yourself — 'What are your hours?', 'Do you accept walk-ins?', 'Is there parking?'",
          "Write thorough, helpful answers — they show up in search results",
          "Flag inappropriate or spam questions for removal",
        ],
      },
      {
        heading: "Step 9: Attributes and details",
        body: "Attributes are the little labels that appear on your profile: 'Women-led', 'Outdoor seating', 'Wheelchair accessible', 'Free Wi-Fi'. They matter because Google uses them to filter results — if someone searches 'wheelchair accessible dentist near me', only businesses with that attribute show up. Fill out every single attribute that applies to your business.",
        list: [
          "Accessibility attributes (wheelchair, parking, restroom)",
          "Service options (dine-in, takeout, delivery, onsite services)",
          "Offerings (specific products or services)",
          "Payments accepted (cash, cards, UPI, wallets)",
          "Identity attributes (women-led, Black-owned, veteran-owned — if applicable)",
        ],
      },
      {
        heading: "Step 10: Track and optimize",
        body: "Google Business Profile has a built-in analytics dashboard. Check it monthly and track:",
        list: [
          "Search queries — what keywords are people using to find you?",
          "Direct vs discovery searches — direct means they searched your name, discovery means they searched a category",
          "Call clicks — how many people clicked your phone number from Google",
          "Direction requests — how many people asked for driving directions",
          "Photo views — how many times your photos were seen",
        ],
      },
      {
        body: "Your Google Business Profile is not a 'set it and forget it' asset. It's a living marketing channel that rewards consistent attention. Spend 30 minutes a week on it — add photos, post updates, respond to reviews, answer questions — and you'll out-rank competitors who spend ₹50,000/month on ads. That's the power of showing up when it matters most: when a customer is actively searching for what you offer.",
      },
    ],
  },
  {
    slug: "conversion-copywriting",
    title: "Conversion Copywriting: The Words That Turn Visitors Into Customers",
    category: "Conversion",
    excerpt: "The exact copywriting frameworks I use to write websites that convert at 5–10% instead of the industry-average 2%.",
    readTime: "11 min",
    date: "Dec 6, 2024",
    accent: "from-cyan-500 to-blue-500",
    thumbnail: "conversion-copywriting",
    content: [
      {
        body: "Most websites convert at 2%. The best ones convert at 8-10%. The difference isn't design — it's copy. The words on your page either make someone act or make them leave, and most websites use words that make people leave. After writing copy for 28 business websites, I've learned that conversion copywriting isn't about being clever or creative. It's about being clear, specific, and persuasive in a way that feels human. Here are the frameworks I use on every project.",
      },
      {
        heading: "Rule 1: Write for scanners, not readers",
        body: "Nobody reads your website. They scan it. Eye-tracking studies show the average web user reads 20% of the words on a page. They scan headlines, look at the first few words of paragraphs, and make a decision in 3-5 seconds. Your copy needs to work for scanners.",
        list: [
          "Headlines carry 80% of the message — if someone only reads your headlines, they should still understand what you offer and why they should care",
          "Use the F-pattern — web users scan in an F-shape: top-left across, middle across, then down the left side. Put your most important words on the left",
          "Front-load paragraphs with the key point — don't bury the lede. First sentence = main idea",
          "Use bullet points and numbered lists — scanners love them, and they break up walls of text",
          "Bold key phrases sparingly — use bold for the 2-3 phrases you most want scanners to notice",
        ],
      },
      {
        heading: "Rule 2: The headline formula that always works",
        body: "Your homepage headline is the most important sentence on your website. If it doesn't instantly communicate what you do and why it matters, visitors leave. After testing hundreds of headlines, this formula consistently outperforms everything else:",
        list: [
          "[What you do] for [who you serve] so they can [the outcome they want]",
          "Example: 'Premium websites for local businesses that bring you more customers'",
          "Example: 'Same-day emergency dental care for Koramangala families'",
          "Example: 'Online reservations that fill your restaurant every night'",
        ],
      },
      {
        body: "The formula works because it answers the three questions every visitor has in the first 3 seconds: What do you do? Who is it for? What's in it for me? If your headline doesn't answer all three, rewrite it.",
      },
      {
        callout: {
          title: "The headline test",
          body: "Show your headline to 5 strangers for 3 seconds. Then ask: 'What does this business do?' If they can't answer correctly, your headline is failing. Most headlines fail this test.",
        },
      },
      {
        heading: "Rule 3: Benefits over features (always)",
        body: "This is the oldest rule in copywriting and 90% of businesses still get it wrong. Customers don't buy features. They buy outcomes. A feature is 'We use Next.js for sub-second load times.' A benefit is 'Your website loads instantly, so visitors don't leave before they see what you offer.'",
        list: [
          "Feature: 'Open 7 days a week' → Benefit: 'Dental care when you need it — even on weekends'",
          "Feature: '15 years of experience' → Benefit: 'Trust your smile to a dentist who's seen it all'",
          "Feature: 'Online booking system' → Benefit: 'Book your appointment in 30 seconds, any time of day'",
          "Feature: 'Same-day appointments' → Benefit: 'Toothache? We'll see you today'",
        ],
      },
      {
        body: "The test: for every sentence on your website, ask 'So what?' If the answer is a feature, rewrite it as a benefit. Keep asking 'so what?' until you reach an outcome the customer actually cares about.",
      },
      {
        heading: "Rule 4: Specificity sells",
        body: "Vague copy doesn't convert. Specific copy does. 'Thousands of happy customers' is vague and forgettable. '847 happy patients this year' is specific and believable. Specificity builds trust because it shows you're not making things up — you actually know your numbers.",
        list: [
          "Instead of 'fast load times' → 'Loads in 1.2 seconds on mobile'",
          "Instead of 'many clients' → '847 happy patients since 2019'",
          "Instead of 'years of experience' → '15 years and 12,000+ procedures'",
          "Instead of 'great reviews' → '4.8 stars from 234 Google reviews'",
          "Instead of 'affordable' → 'Starting at ₹500 — half the cost of most clinics in the area'",
        ],
      },
      {
        heading: "Rule 5: The PAS framework (Problem, Agitate, Solution)",
        body: "This is the most powerful copywriting framework for service pages. It works because it follows how humans make decisions: we act to solve problems, not to buy features. Here's how it works:",
        list: [
          "Problem: Name the pain. 'Most dental websites are slow, confusing, and don't show up on Google.'",
          "Agitate: Make it hurt. 'So when someone searches 'dentist near me' at 2am with a toothache, they find your competitor — not you. And every missed call is a patient lost forever.'",
          "Solution: Offer relief. 'I build fast, beautiful dental websites that rank on Google and turn visitors into booked appointments.'",
        ],
      },
      {
        body: "Use this framework on your service pages and homepage. Start with the customer's problem (not your solution). Make them feel the pain. Then introduce your solution as the relief. This sequence is 3x more persuasive than leading with your solution.",
      },
      {
        heading: "Rule 6: Social proof everywhere",
        body: "People don't believe what you say about yourself. They believe what others say about you. Social proof is the most powerful persuasion tool in copywriting, and most websites underuse it dramatically.",
        list: [
          "Put testimonials on every page, not just a 'testimonials' page",
          "Use specific testimonials — 'My toothache was gone in 30 minutes' beats 'Great service!'",
          "Include the customer's name, photo, and context (what problem they had, what you did)",
          "Show logos of clients, certifications, or publications you've been featured in",
          "Display review counts and ratings prominently — '4.8★ from 234 patients' is more powerful than 'great reviews'",
          "Use case studies for high-value services — show the before, the process, and the after with real numbers",
        ],
      },
      {
        heading: "Rule 7: Clear, urgent calls to action",
        body: "Your call-to-action (CTA) button is where money is made or lost. 'Submit', 'Learn More', and 'Click Here' are terrible CTAs. They're vague, passive, and create no urgency. Here's how to write CTAs that convert:",
        list: [
          "Use action verbs — 'Book', 'Call', 'Get', 'Start'",
          "Include the outcome — 'Book your appointment' beats 'Submit'",
          "Add urgency when appropriate — 'Book today' or 'Get your free audit' (implying it won't be free forever)",
          "Make it specific — 'Get my free website audit in 3 days' tells them exactly what happens",
          "Use first person — 'Get my free audit' converts 90% better than 'Get your free audit' because it's what the user would say to themselves",
        ],
      },
      {
        heading: "Rule 8: Write like you talk",
        body: "The biggest copywriting mistake businesses make is writing like a corporation instead of a human. Your website should read like a conversation, not a press release. Write the way you'd explain your business to a friend at a coffee shop — then clean up the grammar.",
        list: [
          "Use 'you' and 'I' — not 'our customers' and 'the company'",
          "Use contractions — 'don't' not 'do not', 'you're' not 'you are'",
          "Write short sentences — 15 words or less. Vary length for rhythm, but keep most short",
          "Use simple words — 'use' not 'utilize', 'help' not 'facilitate', 'start' not 'commence'",
          "Read it out loud — if it sounds weird to say, it's weird to write",
        ],
      },
      {
        body: "Conversion copywriting isn't about being a great writer. It's about understanding what your customer needs to hear to feel confident taking action. Get the words right, and your website becomes a salesperson that works 24/7. Get them wrong, and you're paying for traffic that bounces. Start with these eight rules, test your copy with real users, and iterate. The words on your page are the highest-leverage marketing investment you can make.",
      },
    ],
  },
  {
    slug: "branding-for-local-business",
    title: "Branding for Local Businesses: Why It Matters More Than You Think",
    category: "Branding",
    excerpt: "Your brand isn't your logo. It's the feeling people get when they encounter your business. Here's how to build a real one.",
    readTime: "9 min",
    date: "Nov 28, 2024",
    accent: "from-violet-500 to-purple-600",
    thumbnail: "branding",
    content: [
      {
        body: "When most local business owners hear 'branding,' they think 'logo.' They hire a designer for ₹5,000, get a nice logo, and think they have a brand. They don't. A logo is a symbol. A brand is the feeling people get when they encounter your business — the cumulative impression of every interaction, every photo, every word, every visit. And for local businesses, branding matters more than ever because you're not competing on price or scale — you're competing on trust. Here's why branding is your most undervalued asset and how to build one that actually matters.",
      },
      {
        heading: "Why branding matters for local businesses",
        body: "Big companies brand to be memorable. Local businesses need to brand to be chosen. When someone searches 'dentist near me' and gets 12 results, branding is what makes them pick you. It's the difference between being 'one of the dentists on MG Road' and 'the dentist my neighbor goes to and raves about.'",
        list: [
          "Branding builds trust before the first visit — a cohesive, professional brand signals you're established and reliable",
          "Branding commands premium pricing — customers pay 20-40% more for businesses that look premium",
          "Branding creates referrals — people recommend brands they remember, not businesses they forget",
          "Branding reduces marketing costs — a strong brand gets found through word-of-mouth, which is free",
          "Branding attracts better employees — top talent wants to work for businesses that look professional",
        ],
      },
      {
        heading: "Your brand is not what you say it is — it's what they say it is",
        body: "This is the hardest lesson for business owners: your brand isn't what you think it is. It's what your customers think it is. You can call yourself 'premium' all day, but if your website looks cheap, your reviews mention long wait times, and your staff is rude — your brand is 'cheap and inconvenient.' Your brand lives in the minds of your customers, shaped by every interaction they have with you.",
        list: [
          "Your website is your brand (is it fast, beautiful, and easy to use?)",
          "Your Google reviews are your brand (what do people say about you?)",
          "Your staff is your brand (how do they treat customers?)",
          "Your physical space is your brand (is it clean, welcoming, professional?)",
          "Your social media is your brand (does it feel alive and human?)",
          "Your pricing is your brand (are you positioned as premium, affordable, or mid-tier?)",
        ],
      },
      {
        callout: {
          title: "The brand audit",
          body: "Search for your business on Google. Read your 10 most recent reviews. Look at your website, your Instagram, and your competitor's website. What's the impression? That's your brand. Is it the brand you want?",
        },
      },
      {
        heading: "The 5 elements of a real local brand",
        body: "A real brand has five interconnected elements. Get all five aligned and you'll feel like a premium, established business. Get any one wrong and the whole thing feels off.",
      },
      {
        heading: "1. Visual identity (more than a logo)",
        body: "Your visual identity is how your brand looks. It includes your logo, but also your colors, fonts, photography style, and overall design aesthetic. The goal is consistency — someone should be able to see a piece of your marketing and instantly know it's yours.",
        list: [
          "Choose 2-3 brand colors and use them everywhere — website, social media, signage, uniforms",
          "Choose 2 fonts (one for headings, one for body) and never use anything else",
          "Develop a photography style — warm and human? Clean and clinical? Editorial and moody? Pick one and stick with it",
          "Create a simple brand guide (1 page is fine) so anyone creating materials follows the same rules",
          "Consistency matters more than perfection — a simple brand applied consistently beats a beautiful brand applied randomly",
        ],
      },
      {
        heading: "2. Brand voice (how you sound)",
        body: "Your brand voice is how you write and speak. Is your brand warm and friendly? Professional and authoritative? Playful and irreverent? Pick a voice and use it everywhere — website, emails, social media, even how your staff answers the phone.",
        list: [
          "Write down 3-4 adjectives that describe your voice (e.g., 'Warm, expert, reassuring, direct')",
          "Create a 'we say / we don't say' list — e.g., 'We say 'appointment', not 'slot'; 'We say 'care', not 'treatment'",
          "Train your staff on the voice — how they answer the phone and greet customers is brand voice in action",
        ],
      },
      {
        heading: "3. Brand story (why you exist)",
        body: "People don't buy what you do — they buy why you do it. Your brand story is the narrative that explains why your business exists and why customers should care. It's not your 'About Us' page bio. It's the emotional core of your brand.",
        list: [
          "Why did you start this business? (Not 'to make money' — the real reason)",
          "What problem were you trying to solve?",
          "What do you believe that most competitors don't?",
          "What would you do even if you weren't paid for it?",
        ],
      },
      {
        body: "Example: 'I started Revivo because I watched my friend — a dentist — get ripped off by a web designer who delivered a slow, broken WordPress site and then disappeared. I realized local businesses were being underserved by an industry that didn't respect them. So I decided to build websites the way I'd want one built for my own family's business.' That's a brand story. It's specific, emotional, and tells you exactly what I stand for.",
      },
      {
        heading: "4. Brand experience (what it feels like)",
        body: "This is where most local businesses fail. Your brand experience is the sum of every interaction a customer has with you — from finding you on Google to walking out your door after a visit. If any touchpoint is broken, the whole brand feels broken.",
        list: [
          "Discovery: Is your Google profile complete? Does your website load fast and look professional?",
          "First contact: Is it easy to book? Does someone answer the phone? Is the response warm?",
          "The visit: Is your space clean and welcoming? Is your staff friendly? Do you respect their time?",
          "After the visit: Do you follow up? Do you ask for feedback? Do you stay in touch?",
          "Every touchpoint either reinforces or erodes your brand. Map them all and fix the weak ones.",
        ],
      },
      {
        heading: "5. Brand consistency (the secret weapon)",
        body: "The most powerful branding principle is also the most boring: consistency. A mediocre brand applied consistently across every touchpoint will outperform a brilliant brand applied inconsistently. Customers need to encounter your brand 5-7 times before it sticks in their memory. If it looks different each time, it never sticks.",
        list: [
          "Same logo, colors, and fonts everywhere — website, social, print, signage",
          "Same voice everywhere — website, emails, phone, in-person",
          "Same quality everywhere — don't have a beautiful website and a dirty waiting room",
          "Same values everywhere — if you claim 'patient-first', don't make people wait 45 minutes",
        ],
      },
      {
        body: "Branding for local businesses isn't about being clever or creative. It's about being intentional and consistent. Decide who you are, express it clearly across every touchpoint, and deliver on it every single time. Do that for 12 months and you'll have a brand that customers choose, remember, and recommend. That's the real competitive advantage — not the lowest price or the biggest ad budget, but the strongest brand in your neighborhood.",
      },
    ],
  },
  {
    slug: "website-redesign-checklist",
    title: "Website Redesign Without Losing SEO: The Complete Checklist",
    category: "Design",
    excerpt: "Redesigning your website without losing your Google rankings is harder than it sounds. Here's the exact 27-step process I use.",
    readTime: "14 min",
    date: "Nov 20, 2024",
    accent: "from-yellow-500 to-amber-600",
    thumbnail: "website-redesign",
    content: [
      {
        body: "Here's a scary statistic: 60% of website redesigns result in a significant drop in organic traffic. Businesses spend ₹1-5 lakh on a beautiful new website, launch it proudly, and watch their Google traffic — and their leads — evaporate overnight. I've seen it happen to dentists, restaurants, gyms, and law firms. The new site looks better, but it ranks worse. This checklist is the exact 27-step process I use to redesign websites without losing a single Google ranking. Follow it in order and your traffic will stay stable — or grow.",
      },
      {
        heading: "Phase 1: Before you touch anything (audit and benchmark)",
        body: "Before redesigning, you need to know exactly what you're working with. Skip this phase and you're flying blind.",
        list: [
          "1. Run a full SEO audit of your current site using Ahrefs, SEMrush, or Screaming Frog. Export a list of every page that has organic traffic",
          "2. Identify your top 20 traffic-driving pages — these are your crown jewels. They must survive the redesign intact",
          "3. Export your current sitemap and URL structure — you'll need this to map old URLs to new ones",
          "4. Document your current Google rankings for your top 20 keywords — screenshot the search results so you have proof",
          "5. Set up Google Search Console (if you haven't) and export your performance data for the last 12 months",
          "6. Identify all backlinks pointing to your site using Ahrefs or Moz — these are valuable and you must not break them",
        ],
      },
      {
        heading: "Phase 2: Plan the new structure (don't break what works)",
        body: "The biggest redesign mistake is changing your URL structure 'because it looks cleaner.' Every URL change is a broken link unless you handle it properly. Here's how to plan the new structure without breaking things:",
        list: [
          "7. Map every old URL to a new URL in a spreadsheet. If a page is being deleted, map it to the closest equivalent — never just delete it",
          "8. Keep your URL structure as similar as possible. If your current service page is '/services/teeth-whitening', don't change it to '/teeth-whitening' just because it's shorter",
          "9. Preserve all high-traffic pages exactly as they are — same URL, same title tag, same meta description. Redesign the visual, not the SEO",
          "10. Plan 301 redirects for every URL that's changing — this tells Google 'this page moved permanently' and passes 90-99% of the SEO value",
          "11. Create a redirect map spreadsheet: Old URL → New URL → Redirect type (301 for permanent)",
        ],
      },
      {
        callout: {
          title: "The golden rule of redesigns",
          body: "If a page has traffic, don't change its URL. If you must change it, set up a 301 redirect. If you can't set up a redirect, don't change the URL. It's that simple.",
        },
      },
      {
        heading: "Phase 3: Preserve on-page SEO elements",
        body: "When redesigning pages, it's easy to accidentally lose the SEO elements that helped them rank. Here's what to preserve:",
        list: [
          "12. Keep the same title tags on high-traffic pages — the title tag is one of the biggest ranking factors",
          "13. Keep the same meta descriptions — they don't affect ranking but they affect click-through rate from Google",
          "14. Keep the same H1 headings — Google uses these to understand what the page is about",
          "15. Preserve the word count and keyword usage on high-traffic pages — don't rewrite content that's already ranking",
          "16. Preserve all internal links — if your homepage links to '/services', make sure the new homepage links to the new '/services' page",
          "17. Preserve image alt text — this helps with image search and accessibility",
        ],
      },
      {
        heading: "Phase 4: Technical SEO (the invisible foundation)",
        body: "Technical SEO is where most redesigns fail. The new site looks great but loads slowly, has broken schema markup, or isn't crawlable by Google. Here's the technical checklist:",
        list: [
          "18. Ensure the new site loads in under 2 seconds on mobile — use Google PageSpeed Insights to test",
          "19. Set up schema markup (LocalBusiness, Service, FAQ) on the new site — this helps Google understand your content",
          "20. Create and submit a new XML sitemap to Google Search Console the day you launch",
          "21. Create a robots.txt file that allows Google to crawl your entire site (don't accidentally block it)",
          "22. Ensure all pages are mobile-responsive and pass Core Web Vitals (Google's speed/UX metrics)",
          "23. Set up HTTPS on the new site (if you weren't already) and redirect all HTTP URLs to HTTPS",
        ],
      },
      {
        heading: "Phase 5: Launch day (do it right)",
        body: "Launch day is the riskiest moment. Do it wrong and you'll lose traffic for weeks. Here's the launch sequence:",
        list: [
          "24. Set up all 301 redirects BEFORE you switch the DNS — they need to be live the moment the new site goes live",
          "25. Launch during a low-traffic period (Sunday morning for most businesses) — if something breaks, fewer people see it",
          "26. Test 20 key pages immediately after launch: homepage, top service pages, contact page, blog posts. Make sure they load, redirects work, and forms submit",
        ],
      },
      {
        heading: "Phase 6: Post-launch (the critical 2 weeks)",
        body: "The first two weeks after launch are when you catch and fix problems before Google penalizes you. Monitor closely:",
        list: [
          "27. Submit the new sitemap to Google Search Console immediately — this tells Google to crawl the new site",
          "Check Google Search Console daily for crawl errors — fix them within 24 hours",
          "Monitor your rankings daily for the first 2 weeks — if a page drops, investigate immediately (usually a missing redirect or broken internal link)",
          "Test all forms (contact, booking, lead) on both desktop and mobile — broken forms are the #1 cause of lost leads after redesign",
          "Check that Google Analytics is tracking properly on the new site — you don't want a data gap",
          "If traffic drops more than 15% in the first week, something is wrong. Pause and investigate before it gets worse",
        ],
      },
      {
        heading: "Common redesign mistakes to avoid",
        body: "After redesigning 28 websites, these are the mistakes I see again and again:",
        list: [
          "Changing URLs without 301 redirects — instant traffic loss",
          "Deleting 'old' blog posts that had traffic — those pages were assets, not clutter",
          "Switching to a JavaScript-heavy framework that Google can't crawl — beautiful but invisible",
          "Forgetting to update internal links — leads to 404 errors and lost link equity",
          "Not testing forms — the new site looks great but nobody can book an appointment",
          "Launching on Friday afternoon and going on vacation — problems fester all weekend",
          "Not having a backup of the old site — if the new one fails, you can't roll back",
        ],
      },
      {
        body: "A website redesign should be an upgrade, not a reset. Done right, your new site will rank higher, convert better, and load faster — while preserving every ounce of SEO equity you've built. Done wrong, you'll spend 6 months recovering traffic you already had. Follow this checklist, test everything, and launch carefully. Your Google rankings are worth more than your new design — protect them.",
      },
    ],
  },
  {
    slug: "small-business-growth",
    title: "The 5-Stage Small Business Growth Framework",
    category: "Growth",
    excerpt: "From $0 to $1M and beyond — the 5 stages every small business goes through, and what to focus on at each one.",
    readTime: "16 min",
    date: "Nov 12, 2024",
    accent: "from-teal-500 to-emerald-600",
    thumbnail: "business-growth",
    content: [
      {
        body: "Every small business goes through the same five stages of growth. The problems at each stage are predictable, and so are the solutions. Yet most business owners treat every challenge as a unique crisis, when it's actually a well-known milestone on a well-traveled path. After working with 28 small businesses — from solo dentists to 40-person restaurants — I've mapped the five stages and what to focus on at each one. If you know what stage you're in, you know what to do next.",
      },
      {
        heading: "Stage 1: Existence ($0 - ₹5 lakh/year)",
        body: "You just started. You have few customers, no brand recognition, and you're not sure if this business will work. The question isn't 'how do I grow?' — it's 'will I survive?'",
        list: [
          "The challenge: Getting your first 10 paying customers. Nothing else matters until you have proof that people will pay for what you offer",
          "What to focus on: Sales, not marketing. Pick up the phone. Walk into businesses. Network. Do whatever it takes to get 10 people to say yes",
          "What to ignore: Fancy websites, branding, SEO, social media. You don't need a ₹2 lakh website when you have 3 customers. A simple one-page site with your phone number is enough",
          "The trap: Spending money on 'looking established' before you are established. Premature branding and marketing is the #1 way startups waste money",
          "The exit: You hit Stage 2 when you have consistent revenue (even if small) and a clear sense of who your customer is",
        ],
      },
      {
        callout: {
          title: "The Stage 1 truth",
          body: "At this stage, you don't need a better website. You need more conversations. Get out and talk to 100 potential customers this month. That will teach you more than any marketing strategy.",
        },
      },
      {
        heading: "Stage 2: Survival (₹5 lakh - ₹20 lakh/year)",
        body: "You have customers and revenue, but it's inconsistent. Some months are great, some are terrifying. You're working 60+ hour weeks and can't imagine taking a vacation. The business survives, but it doesn't thrive — yet.",
        list: [
          "The challenge: Consistency. You need to turn sporadic customers into a predictable pipeline",
          "What to focus on: Building systems. Document how you get customers, how you deliver service, how you collect payment. Stop reinventing the wheel every day",
          "What to build: A professional website that converts visitors into leads. A Google Business Profile. A review collection system. Basic SEO for your top 5 keywords",
          "The trap: Still doing everything yourself. At this stage, you need to hire your first employee or virtual assistant. Yes, it's scary. Yes, it's necessary",
          "The exit: You hit Stage 3 when revenue is predictable (you can forecast next month within 15%) and you're no longer the only person who can deliver the service",
        ],
      },
      {
        heading: "Stage 3: Success (₹20 lakh - ₹50 lakh/year)",
        body: "The business works. You have a team, consistent revenue, and a growing reputation. The question shifts from 'will we survive?' to 'do we want to stay this size or keep growing?' Both are valid choices.",
        list: [
          "The challenge: Optimization. You're making money but margins are thin. You need to work smarter, not just harder",
          "What to focus on: Conversion rate optimization. Your website should be your best salesperson. Invest in professional copywriting, A/B testing, and speed optimization",
          "What to build: Content marketing (1 blog post per month), email marketing (weekly newsletter to customers), referral systems (formalize word-of-mouth)",
          "What to fix: Your pricing. Most Stage 3 businesses undercharge. Raise prices 15-25% — you'll lose some customers but keep the profitable ones",
          "The trap: Lifestyle creep. The business is profitable, so you take more money out. But you should be reinvesting in marketing, systems, and team to reach Stage 4",
        ],
      },
      {
        heading: "Stage 4: Take-off (₹50 lakh - ₹2 crore/year)",
        body: "This is the hardest transition. You're moving from 'small business' to 'real company.' The skills that got you here (being the best at what you do, doing everything yourself) won't get you to the next level. You need to become a leader, not just a practitioner.",
        list: [
          "The challenge: Delegation. You can't be the salesperson, the operator, and the marketer anymore. You need specialists",
          "What to focus on: Building a management team. Hire people who are better than you at specific functions — a marketing manager, an operations lead, a senior practitioner",
          "What to build: Documented processes for everything. Your business should be able to run without you for 2 weeks. If it can't, you have a job, not a business",
          "What to invest in: Advanced marketing (paid ads, retargeting, marketing automation), CRM systems, staff training programs",
          "The trap: Founders often hit a ceiling here because they can't let go. They hire people but don't trust them, micromanage, and create bottlenecks. The business stalls because the founder is the bottleneck",
        ],
      },
      {
        heading: "Stage 5: Maturity (₹2 crore+ /year)",
        body: "You've made it. The business runs without your daily involvement. You have a management team, documented systems, and consistent growth. The question now is: what's next?",
        list: [
          "The challenge: Reinvention. Markets change, competitors emerge, customer preferences shift. Mature businesses die when they stop innovating",
          "What to focus on: New products, new markets, new locations. Diversify so you're not dependent on one revenue stream",
          "What to build: A culture that attracts top talent. At this stage, your people are your competitive advantage",
          "What to consider: Acquisition (buying competitors), expansion (new locations), or specialization (dominating a niche)",
          "The trap: Complacency. 'We've always done it this way' is the beginning of the end. Blockbuster was once a Stage 5 business",
        ],
      },
      {
        heading: "Where to focus based on your stage",
        body: "The biggest mistake small businesses make is using Stage 4 strategies at Stage 2. Here's what to focus on at each stage:",
        list: [
          "Stage 1 (Existence): Sales conversations. Get 100 no's this month",
          "Stage 2 (Survival): Basic marketing foundation (website, Google profile, reviews)",
          "Stage 3 (Success): Conversion optimization and content marketing",
          "Stage 4 (Take-off): Team building and systems documentation",
          "Stage 5 (Maturity): Innovation and diversification",
        ],
      },
      {
        callout: {
          title: "The website investment by stage",
          body: "Stage 1: ₹10,000 simple template site. Stage 2: ₹30,000-50,000 professional site. Stage 3: ₹80,000-1,50,000 custom site with conversion optimization. Stage 4: ₹2-5 lakh with marketing automation. Stage 5: Ongoing optimization and A/B testing. Don't overinvest too early — but don't underinvest when it's time to level up.",
        },
      },
      {
        heading: "The pattern I see in successful businesses",
        body: "After working with businesses at every stage, the pattern is clear: successful businesses do the right things at the right time. They don't try to skip stages. They don't waste money on advanced marketing when they haven't mastered the basics. They reinvest profits into the next stage's priorities, not into their own lifestyle.",
        list: [
          "They obsess over the fundamentals (product quality, customer service, reviews) at every stage",
          "They invest in marketing proportionally to their revenue, not ahead of it",
          "They hire before they're ready (and always a step before they absolutely need to)",
          "They document everything — processes, decisions, learnings",
          "They treat their website as an investment, not an expense — and upgrade it at each stage transition",
        ],
      },
      {
        body: "Growth isn't linear, and it isn't automatic. Knowing what stage you're in — and what to focus on at that stage — is half the battle. The other half is actually doing the work. Audit your business against this framework, identify your stage, and focus single-mindedly on the priorities for that stage. The next stage will come faster than you think.",
      },
    ],
  },
];

/* ---------------- Case studies (additional) ---------------- */
export const CASE_STUDIES = [
  {
    slug: "bright-smile-dental-cs",
    client: "Bright Smile Dental",
    industry: "Dental Clinic",
    title: "From invisible to fully booked in 4 months",
    accent: "from-rose-500 to-pink-500",
    image: "/images/projects/dental.png",
    summary: "A 3-chair dental clinic was invisible on Google and booking flat. A complete digital rebrand and 4-month local SEO campaign transformed their practice.",
    metrics: [
      { label: "New patient bookings", value: "+112%", before: "Baseline" },
      { label: "Google calls/month", value: "+185%", before: "12 calls" },
      { label: "Page 1 keywords", value: "47", before: "3" },
      { label: "Mobile load time", value: "1.4s", before: "5.8s" },
    ],
    approach: "Audit → Rebrand → Rebuild → Local SEO → Reviews",
    duration: "4 months",
    deliverables: "8-page website, booking system, Google Business Profile, 4-month local SEO",
  },
  {
    slug: "saffron-kitchen-cs",
    client: "Saffron Kitchen",
    industry: "Restaurant",
    title: "From PDF menu to 38 reservations a night",
    accent: "from-amber-500 to-orange-500",
    image: "/images/projects/restaurant.png",
    summary: "A beloved restaurant was losing covers every night to a slow, PDF-menu website. A 2-week mobile-first rebuild doubled their reservations.",
    metrics: [
      { label: "Nightly reservations", value: "+112%", before: "12/night" },
      { label: "Takeaway orders", value: "+48%", before: "Baseline" },
      { label: "Google Maps calls", value: "+135%", before: "30/month" },
      { label: "Mobile load time", value: "1.2s", before: "6.4s" },
    ],
    approach: "Audit → Photography → Rebuild → Reservations → Google Business",
    duration: "10 days",
    deliverables: "6-page website, reservation system, photography direction, Google Business optimization",
  },
  {
    slug: "iron-peak-gym-cs",
    client: "Iron Peak Gym",
    industry: "Fitness",
    title: "Tripled trial signups, $14k/mo in new memberships",
    accent: "from-emerald-500 to-teal-500",
    image: "/images/projects/gym.png",
    summary: "An independent gym was burning $4k/month on ads with no conversions. A new site and 6 dedicated landing pages turned ad waste into $11k/month new MRR.",
    metrics: [
      { label: "Trial bookings", value: "+128%", before: "22/month" },
      { label: "Trial-to-member rate", value: "+38%", before: "21%" },
      { label: "Cost per acquisition", value: "-47%", before: "$185" },
      { label: "New MRR from site", value: "$11k", before: "$0" },
    ],
    approach: "Funnel audit → Landing pages → Site rebuild → Conversion tracking",
    duration: "18 days",
    deliverables: "8-page website, 6 ad landing pages, Stripe checkout, conversion tracking",
  },
  {
    slug: "meridian-legal-cs",
    client: "Meridian Legal",
    industry: "Law Firm",
    title: "2× more consultation requests, top 3 on Google",
    accent: "from-slate-600 to-slate-800",
    image: "/images/projects/legal.png",
    summary: "A law firm was losing high-value corporate cases to competitors with worse lawyers but better websites. An authority-building site and SEO campaign doubled qualified leads.",
    metrics: [
      { label: "Consultation requests", value: "+102%", before: "18/month" },
      { label: "Qualified leads", value: "+152%", before: "8/month" },
      { label: "Google ranking", value: "Top 3", before: "Page 2" },
      { label: "Avg. case value", value: "+43%", before: "$8k" },
    ],
    approach: "Positioning → Authority site → Practice-area SEO → Content engine",
    duration: "6 months",
    deliverables: "12-page website, attorney bios, case results, 6-month SEO, content engine",
  },
];

/* ---------------- Audit page checks ---------------- */
export const AUDIT_CHECKS = [
  { icon: Activity, title: "Speed & Performance Analysis", description: "Core Web Vitals, mobile load time, image optimization, code bloat, hosting quality. I'll show you exactly what's slowing your site down and what to fix first." },
  { icon: Zap, title: "SEO & Google Visibility Audit", description: "Where you rank vs. competitors, keyword opportunities, technical SEO issues, Google Business Profile, backlink profile. You'll know exactly what's keeping you off page 1." },
  { icon: Sparkles, title: "Design & UX Review", description: "First impressions, mobile experience, trust signals, visual hierarchy, brand consistency. I'll show you what's undermining your credibility." },
  { icon: Rocket, title: "Conversion & Lead Capture Review", description: "CTAs, forms, friction points, mobile conversion paths. I'll identify why visitors leave without becoming leads." },
  { icon: BadgeCheck, title: "Competitor Benchmarking", description: "How your site stacks up against the top 3 competitors in your market across 12 key dimensions. Know exactly where you're winning and losing." },
  { icon: ArrowRight, title: "Prioritized Action Plan", description: "A clear, prioritized list of fixes — what to do first, what to do next, what to ignore. You can implement it yourself, hire someone else, or work with me." },
];

export const AUDIT_STEPS = [
  { step: "01", title: "You submit your URL", description: "Fill out the form on this page with your website URL and a few details about your business. Takes 2 minutes." },
  { step: "02", title: "I run a 30-point audit", description: "Over 3–4 days, I manually audit your site across speed, SEO, design, conversion, and competitive position. No automated reports — actual human analysis." },
  { step: "03", title: "You get a video walkthrough", description: "I record a 15-minute Loom video walking through your site, showing you every issue and every opportunity. Plus a written PDF report." },
  { step: "04", title: "We discuss next steps", description: "On a free 30-minute call, we discuss the audit, your priorities, and whether it makes sense for us to work together. Zero pressure." },
];

/* ---------------- Technologies ---------------- */
export const TECH_STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "Razorpay", category: "Payments" },
  { name: "PayPal", category: "Payments" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "Mailchimp", category: "Email" },
  { name: "Twilio SMS", category: "Notifications" },
  { name: "WhatsApp API", category: "Notifications" },
  { name: "Vercel", category: "Hosting" },
  { name: "Cloudflare", category: "Hosting" },
];

export const TECHNOLOGIES_MINIMAL = [
  "Next.js", "React", "TypeScript", "Tailwind", "Vercel",
  "Stripe", "GA4",
];

/* ---------------- Tech icons (using lucide as fallback) ---------------- */
export const TECH_ICONS: Record<string, LucideIcon> = {
  Activity, AirVent, Anchor, Apple, BadgeCheck, Bath, BookOpen,
  Building2, Calendar, Check, ChefHat, Dumbbell, GraduationCap, HeartPulse,
  Home: HomeIcon, Landmark, Leaf, MapPin, PawPrint, Plug, Rocket,
  Scissors, ShoppingBag, Sparkles, Stethoscope, Truck, Wrench, Zap,
};

/* ---------------- POS products — in-house systems built for clients ---------------- */
export type PosProduct = {
  slug: "clinic" | "restaurant" | "salon";
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  image: string;
  features: string[];
  /** Real product screens, in demo order — driven by the home-page showcase. */
  screens: { label: string; src: string }[];
};

export const POS_PRODUCTS: PosProduct[] = [
  {
    slug: "clinic",
    name: "Clinic OS",
    tagline: "The modern operating system for clinics",
    description:
      "Appointments, patients, consultations, billing, pharmacy, follow-ups and analytics — all in one beautifully designed platform that keeps a clinic running smoothly.",
    href: "/pos/clinic",
    icon: HeartPulse,
    accent: "from-sky-500 to-blue-500",
    image: "/pos-media/clinic/03-dashboard.png",
    features: ["Live patient queue", "Consultation cockpit", "Pharmacy & billing", "Recall & follow-ups"],
    screens: [
      { label: "Live queue", src: "/pos-media/clinic/02-today-live-queue.png" },
      { label: "Dashboard", src: "/pos-media/clinic/03-dashboard.png" },
      { label: "Consultation", src: "/pos-media/clinic/07-consultation-cockpit.png" },
      { label: "Pharmacy", src: "/pos-media/clinic/09-pharmacy-pos.png" },
      { label: "Billing", src: "/pos-media/clinic/10-billing.png" },
    ],
  },
  {
    slug: "restaurant",
    name: "Mise",
    tagline: "Restaurant POS built for modern restaurants",
    description:
      "Ordering, kitchen display, inventory, waitlists, billing, analytics and customer management in one beautifully designed platform built for restaurants, cafes and cloud kitchens.",
    href: "/pos/restaurant",
    icon: ChefHat,
    accent: "from-amber-500 to-orange-500",
    image: "/pos-media/restaurant/02-dashboard.png",
    features: ["Kitchen display system", "Table & waitlist management", "Menu & inventory", "Real-time reporting"],
    screens: [
      { label: "New order", src: "/pos-media/restaurant/01-new-order.png" },
      { label: "Kitchen display", src: "/pos-media/restaurant/03-kitchen-display.png" },
      { label: "Tables & floor", src: "/pos-media/restaurant/05-tables-floor.png" },
      { label: "Waitlist", src: "/pos-media/restaurant/06-waitlist.png" },
      { label: "Reports", src: "/pos-media/restaurant/04-reports.png" },
    ],
  },
  {
    slug: "salon",
    name: "Aura POS",
    tagline: "The operating system for salons, spas & wellness",
    description:
      "Appointments, POS, clients, memberships, inventory, payroll and reporting — everything a salon needs in one elegant, connected platform.",
    href: "/pos/salon",
    icon: Scissors,
    accent: "from-fuchsia-500 to-purple-500",
    image: "/pos-media/salon/01-dashboard.png",
    features: ["Calendar & booking", "Client memberships", "Commission tracking", "Inventory & reports"],
    screens: [
      { label: "Dashboard", src: "/pos-media/salon/01-dashboard.png" },
      { label: "Calendar", src: "/pos-media/salon/02-calendar.png" },
      { label: "Checkout", src: "/pos-media/salon/03-pos-checkout.png" },
      { label: "Clients", src: "/pos-media/salon/04-clients.png" },
      { label: "Commissions", src: "/pos-media/salon/07-commissions.png" },
    ],
  },
];
