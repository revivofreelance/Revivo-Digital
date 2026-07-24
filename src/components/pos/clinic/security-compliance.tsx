"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Cloud,
  DatabaseBackup,
  RefreshCw,
  EyeOff,
  ScrollText,
  Award,
  ShieldCheck as NabhBadge,
} from "lucide-react";

const trust = [
  { icon: ShieldCheck, name: "HIPAA Ready", desc: "Compliance-aligned architecture for health data." },
  { icon: Lock, name: "Encrypted Records", desc: "AES-256 at rest, TLS 1.3 in transit." },
  { icon: KeyRound, name: "Role-based Access", desc: "Granular RBAC down to the field." },
  { icon: Cloud, name: "Offline-first", desc: "Runs without internet; syncs when online." },
  { icon: DatabaseBackup, name: "Automatic Backup", desc: "Hourly snapshots, 30-day retention." },
  { icon: RefreshCw, name: "Secure Sync", desc: "Conflict-free multi-device replication." },
  { icon: EyeOff, name: "Data Privacy", desc: "Your data is yours. We never sell it." },
  { icon: ScrollText, name: "Audit Logs", desc: "Every action is logged, immutable." },
  { icon: NabhBadge, name: "NABH Ready", desc: "Designed with NABH documentation in mind." },
  { icon: Lock, name: "End-to-end Encryption", desc: "From device to database, encrypted." },
];

export function SecurityCompliance() {
  return (
    <section id="security" className="relative py-6 lg:py-10 bg-gradient-to-b from-[#0F2A26] via-[#0a1f1c] to-[#0F2A26] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/15 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-eyebrow text-emerald-400/80">
            <span className="w-6 h-px bg-emerald-400/40" />
            Security & Compliance
            <span className="w-6 h-px bg-emerald-400/40" />
          </div>
          <h2 className="text-display-sm mt-5 text-balance text-white">
            Built for healthcare.{" "}
            <span className="text-emerald-400">Secured like a bank.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed text-pretty">
            Every layer of ClinicOS is designed with patient data protection in mind — from the device your staff uses, to the cloud that backs it up.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3">
          {trust.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05 }}
              className="group relative bg-white/[0.04] border border-white/10 rounded-lg sm:rounded-2xl p-2.5 sm:p-5 hover:bg-white/[0.07] transition-colors backdrop-blur-sm"
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/15 flex items-center justify-center mb-1.5 sm:mb-3 group-hover:bg-emerald-500/25 transition-colors">
                <t.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-400" strokeWidth={1.6} />
              </div>
              <h3 className="font-medium text-[11px] sm:text-[14px] text-white leading-tight">{t.name}</h3>
              <p className="mt-0.5 sm:mt-1.5 text-[11px] sm:text-[12px] text-white/60 leading-snug line-clamp-2 sm:line-clamp-none">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="text-center text-eyebrow text-white/50 mb-4">Compliance & Standards</p>
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-12">
            {[
              { name: "HIPAA", sub: "Ready" },
              { name: "NABH", sub: "Ready" },
              { name: "ISO 27001", sub: "Aligned" },
              { name: "GDPR", sub: "Aligned" },
              { name: "DPDP Act", sub: "India 2023" },
            ].map((b) => (
              <div key={b.name} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-1.5 sm:mb-2">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400" strokeWidth={1.4} />
                </div>
                <p className="text-[12px] sm:text-sm font-semibold text-white leading-tight">{b.name}</p>
                <p className="text-[11px] sm:text-[11px] text-white/50">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
