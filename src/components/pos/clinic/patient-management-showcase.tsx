"use client";

import { motion } from "framer-motion";
import { SectionHeading, HoverCallout } from "./primitives";
import { Users, Search, ShieldCheck, Tag, Zap, Clock } from "lucide-react";

const features = [
  { icon: Users, title: "UHID", desc: "Every patient gets a unique health ID — never duplicated, never lost." },
  { icon: Search, title: "Smart search", desc: "Search by name, phone, UHID or tag. Results in <1 sec." },
  { icon: ShieldCheck, title: "Insurance & TPA", desc: "Policy numbers, pre-auth status and TPA name inline." },
  { icon: Tag, title: "Tags", desc: "Tag VIPs, chronic patients, or trial participants — your rules." },
  { icon: Zap, title: "Quick access", desc: "Book, bill, consult or recall right from the row." },
  { icon: Clock, title: "Medical history", desc: "Past visits, vitals trend, allergies — one click away." },
];

const annotations = [
  {
    label: "UHID",
    description:
      "Each patient gets a unique ID. Find them instantly, even years later.",
    top: "16%",
    left: "10%",
    align: "right" as const,
    variant: "emerald" as const,
  },
  {
    label: "Smart search",
    description:
      "Search by name, phone, or ID. Results appear as you type — in less than a second.",
    top: "10%",
    left: "55%",
    align: "right" as const,
    variant: "teal" as const,
  },
  {
    label: "Insurance info",
    description:
      "Patient's insurance and TPA shown here. No need to dig through files.",
    top: "32%",
    left: "76%",
    align: "left" as const,
    variant: "amber" as const,
  },
  {
    label: "Patient tags",
    description:
      "Mark VIPs, chronic patients, or anyone who needs special attention.",
    top: "55%",
    left: "8%",
    align: "right" as const,
    variant: "emerald" as const,
  },
  {
    label: "Quick actions",
    description:
      "Book, bill, or consult right from here. No extra clicks.",
    top: "68%",
    left: "82%",
    align: "left" as const,
    variant: "teal" as const,
  },
  {
    label: "Medical history",
    description:
      "Last visit, vitals, and notes — all visible without opening the patient's full file.",
    top: "85%",
    left: "30%",
    align: "right" as const,
    variant: "emerald" as const,
  },
];

export function PatientManagementShowcase() {
  return (
    <section className="relative py-6 lg:py-10 bg-gradient-to-b from-background to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Management"
          title={
            <>
              Every patient.{" "}
              <span className="text-gradient-emerald">One row, fully searchable.</span>
            </>
          }
          description="A clean, dense patient list that your reception team will actually love. Hover any hotspot to see what each part of the screen does."
        />

        <div className="mt-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-br from-emerald-200/30 to-transparent blur-3xl -z-10 rounded-[2rem]" />

            <div className="browser-frame">
              <div className="browser-bar flex items-center gap-3 px-4 py-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/70 border border-black/[0.04] text-[11px] text-muted-foreground font-mono">
                    app.clinicos.io/patients
                  </div>
                </div>
                <div className="w-12" />
              </div>
              <div className="relative bg-white overflow-hidden">
                <img
                  src="/pos-media/clinic/04-patients-list.png"
                  alt="Patient list with UHID, search, insurance, tags and quick access"
                  className="w-full h-auto block"
                  loading="lazy"
                />

                {/* Interactive hover callouts */}
                {annotations.map((a) => (
                  <HoverCallout
                    key={a.label}
                    label={a.label}
                    description={a.description}
                    top={a.top}
                    left={a.left}
                    align={a.align}
                    variant={a.variant}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Below — features grid */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-white border border-black/[0.06] rounded-lg sm:rounded-xl p-2.5 sm:p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <f.icon className="w-3.5 h-3.5 text-emerald-700" strokeWidth={1.8} />
                  <p className="font-medium text-[12px] sm:text-[14px] text-foreground leading-tight">{f.title}</p>
                </div>
                <p className="mt-0.5 text-[11px] sm:text-[12.5px] text-muted-foreground leading-snug line-clamp-2 sm:line-clamp-none">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
