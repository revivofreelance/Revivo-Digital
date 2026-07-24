"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Bone,
  Syringe,
  Activity,
  Building2,
  Hospital,
  Microscope,
  Network,
} from "lucide-react";

const clinics = [
  { icon: Stethoscope, name: "General Practice", desc: "Multi-doctor clinics with daily walk-ins" },
  { icon: HeartPulse, name: "Dental Clinics", desc: "Chair-side charting & treatment plans" },
  { icon: Baby, name: "Pediatric Clinics", desc: "Immunisation tracking & growth charts" },
  { icon: Activity, name: "Dermatology", desc: "Image-based case progress & follow-ups" },
  { icon: Bone, name: "Orthopedics", desc: "Procedure notes and rehab scheduling" },
  { icon: Syringe, name: "Gynecology", desc: "Antenatal workflows and lab integration" },
  { icon: HeartPulse, name: "Physiotherapy", desc: "Session packages & outcome tracking" },
  { icon: Building2, name: "Multi-speciality", desc: "Department-aware routing & billing" },
  { icon: Hospital, name: "Day Care Centers", desc: "Procedure check-in to discharge" },
  { icon: Microscope, name: "Diagnostic Centers", desc: "Sample tracking and report delivery" },
  { icon: Network, name: "Healthcare Chains", desc: "Multi-branch dashboards & roll-ups" },
];

export function BuiltForEveryClinic() {
  return (
    <section className="relative py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built For Every Clinic"
          title={
            <>
              One platform.{" "}
              <span className="text-gradient-emerald">Every specialty.</span>
            </>
          }
          description="From single-doctor practices to multi-city healthcare chains, ClinicOS adapts to your workflow without forcing you to change how you practise."
        />

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {clinics.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-black/[0.06] rounded-xl sm:rounded-2xl p-3 sm:p-5 hover-lift hover:shadow-card-hover hover:border-emerald-200/60"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-emerald-100 transition-colors">
                <c.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-emerald-700" strokeWidth={1.6} />
              </div>
              <h3 className="font-semibold text-[12.5px] sm:text-[15px] text-foreground leading-tight">{c.name}</h3>
              <p className="mt-1 text-[11px] sm:text-[13px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">
                {c.desc}
              </p>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-emerald-600/0 group-hover:ring-emerald-600/10 transition" />
            </motion.div>
          ))}

          {/* Card 12 — "and more" */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-gradient-to-br from-emerald-700 to-teal-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-white overflow-hidden hover-lift"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/15 flex items-center justify-center mb-2 sm:mb-4">
                <span className="text-base sm:text-lg font-semibold">+</span>
              </div>
              <h3 className="font-semibold text-[12.5px] sm:text-[15px] leading-tight">And many more</h3>
              <p className="mt-1 text-[11px] sm:text-[13px] text-white/80 leading-snug line-clamp-2 sm:line-clamp-none">
                If you run a clinic, ClinicOS runs with you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
