"use client";

import { motion } from "framer-motion";
import { SectionHeading, HoverCallout, FloatingSectionCard } from "./primitives";
import { TrendingUp, CalendarClock, Users, Stethoscope, IndianRupee, Activity, MousePointerClick } from "lucide-react";

const floatingKPIs = [
  {
    icon: IndianRupee,
    label: "Today's Revenue",
    value: "₹ 1,84,250",
    sub: "+12.4% vs yesterday",
    className: "top-4 -left-2 sm:-left-8 lg:-left-12",
    delay: 0.2,
  },
  {
    icon: CalendarClock,
    label: "Appointments",
    value: "147",
    sub: "92 fulfilled · 8 no-show",
    className: "top-12 -right-2 sm:-right-8 lg:-right-12",
    delay: 0.35,
  },
  {
    icon: Users,
    label: "Patient Waiting",
    value: "6",
    sub: "Avg wait 8 min",
    className: "bottom-32 -left-2 sm:-left-10 lg:-left-16",
    delay: 0.5,
  },
  {
    icon: Stethoscope,
    label: "Doctors Available",
    value: "9 / 12",
    sub: "3 on break",
    className: "bottom-12 -right-2 sm:-right-6 lg:-right-12",
    delay: 0.65,
  },
  {
    icon: TrendingUp,
    label: "Revenue Trend",
    value: "+24%",
    sub: "vs last month",
    className: "top-1/2 -left-2 sm:-left-12 lg:-left-20",
    delay: 0.8,
  },
  {
    icon: Activity,
    label: "Department Load",
    value: "OPD · 64%",
    sub: "Cardio · 22%",
    className: "top-1/3 -right-2 sm:-right-12 lg:-right-20",
    delay: 0.95,
  },
];

export function ExecutiveShowcase() {
  return (
    <section className="relative py-6 lg:py-10 bg-gradient-to-b from-background via-emerald-50/40 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Executive Dashboard"
          title={
            <>
              The whole clinic.{" "}
              <span className="text-gradient-emerald">In one glance.</span>
            </>
          }
          description="Built for owners and administrators who need to know what's happening — right now, this week, this month — without digging through reports."
        />

        <div className="relative mt-6 mx-auto max-w-5xl">
          {/* Background glow */}
          <div className="absolute -inset-x-12 -inset-y-8 bg-gradient-to-br from-emerald-200/40 via-teal-100/30 to-transparent blur-3xl -z-10 rounded-[3rem]" />

          {/* Floating hint card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -left-2 sm:-left-12 top-8 z-30 hidden lg:block"
          >
            <FloatingSectionCard
              icon={<MousePointerClick className="w-3.5 h-3.5" strokeWidth={1.8} />}
              label="Interactive"
              text="Hover any hotspot on the dashboard to learn what's there. Every screenshot below works the same way."
            />
          </motion.div>

          {/* Monitor mockup with dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="relative rounded-2xl bg-[#1a2b28] p-3 shadow-premium-lg">
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <img
                    src="/pos-media/clinic/03-dashboard.png"
                    alt="Executive dashboard with revenue, appointments, department load and KPIs"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  {/* Interactive hover callouts */}
                  <HoverCallout
                    label="Revenue KPIs"
                    description="See today's money collected. Updates the moment a bill is paid."
                    top="14%"
                    left="22%"
                    variant="emerald"
                  />
                  <HoverCallout
                    label="Appointments"
                    description="How many patients visited today. Spot busy days at a glance."
                    top="14%"
                    left="68%"
                    align="left"
                    variant="teal"
                  />
                  <HoverCallout
                    label="Quick filters"
                    description="Switch between today, this week, or this month in one click."
                    top="38%"
                    left="50%"
                    variant="amber"
                  />
                  <HoverCallout
                    label="Department load"
                    description="Which specialty is busiest right now. Plan doctor shifts better."
                    top="62%"
                    left="30%"
                    variant="emerald"
                  />
                  <HoverCallout
                    label="Trends chart"
                    description="Compare revenue over time. See if your clinic is growing or slowing."
                    top="62%"
                    left="74%"
                    align="left"
                    variant="teal"
                  />
                  <HoverCallout
                    label="Patient count"
                    description="Total patients seen. A simple number that tells you how busy you were."
                    top="86%"
                    left="40%"
                    variant="amber"
                  />
                </div>
              </div>
              <div className="mx-auto w-32 h-5 bg-gradient-to-b from-[#1a2b28] to-[#0F2A26] rounded-b-2xl -mt-1 hidden sm:block" />
              <div className="mx-auto w-48 h-1.5 bg-[#0F2A26] rounded-full mt-1 hidden sm:block" />
            </div>
          </motion.div>

          {/* Floating KPI cards */}
          {floatingKPIs.map((kpi) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: kpi.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute ${kpi.className} z-20 hidden sm:block`}
            >
              <div className="glass rounded-2xl px-4 py-3 shadow-premium min-w-[160px] animate-float-medium">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <kpi.icon className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {kpi.label}
                  </span>
                </div>
                <p className="text-lg font-semibold text-foreground leading-tight">{kpi.value}</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">{kpi.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Below — what you can do */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 lg:gap-3 max-w-5xl mx-auto">
          {[
            { icon: IndianRupee, title: "Live revenue", desc: "Per-doctor, per-department, per-mode." },
            { icon: CalendarClock, title: "Appointment trends", desc: "Footfall, no-show rate, conversion." },
            { icon: Stethoscope, title: "Department load", desc: "See which specialty is over-stretched." },
            { icon: TrendingUp, title: "Owner-grade KPIs", desc: "ARPU, retention, repeat rate, ARPA." },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <b.icon className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{b.title}</p>
              </div>
              <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
