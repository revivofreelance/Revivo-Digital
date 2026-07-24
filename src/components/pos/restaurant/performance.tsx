"use client";

import * as React from "react";
import { animate, useInView, motion } from "framer-motion";
import { Zap, ShieldCheck, Timer, CreditCard, BookOpen, CloudUpload } from "lucide-react";

function Counter({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Zap, value: <Counter to={1000} suffix="+" />, label: "Orders per day", sub: "handled per outlet" },
  { icon: ShieldCheck, value: <Counter to={99.9} decimals={1} suffix="%" />, label: "Uptime", sub: "enterprise SLA" },
  { icon: Timer, value: <Counter to={1} prefix="<" suffix="s" />, label: "Billing time", sub: "settle any check" },
  { icon: CreditCard, value: "Multiple", label: "Payment methods", sub: "cards, UPI, wallets, cash" },
  { icon: BookOpen, value: "Unlimited", label: "Menu items", sub: "variants & outlets" },
  { icon: CloudUpload, value: "Always", label: "Cloud sync", sub: "offline-ready" },
];

export function Performance() {
  return (
    <section className="relative overflow-hidden py-7 sm:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.975_0.005_70)] to-background" />
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.14em] text-brand-espresso/70 shadow-sm">
              Performance
            </span>
            <h2 className="mt-4 text-balance text-[1.5rem] font-semibold leading-[1.12] tracking-[-0.02em] text-brand-espresso sm:text-4xl md:text-[2.85rem] md:leading-[1.05]">
              Built to handle the rush.
              <br /> And the quiet.
            </h2>
            <p className="mt-4 max-w-md text-[12.5px] leading-relaxed text-muted-foreground sm:text-base">
              Engineered for speed and reliability. Whether it&apos;s a Saturday night
              slam or a quiet Tuesday lunch, Mise stays fast, stable and online.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-xl border border-black/[0.06] bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-2xl sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.19_42/0.1),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.96_0.03_55)] to-[oklch(0.92_0.05_45)] text-brand-orange">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="relative mt-3 text-[22px] font-semibold tracking-tight text-brand-espresso sm:mt-4 sm:text-[30px]">
                    {s.value}
                  </div>
                  <div className="relative mt-0.5 text-[12px] font-semibold text-brand-espresso/80 sm:mt-1 sm:text-[13px]">
                    {s.label}
                  </div>
                  <div className="relative text-[11.5px] text-muted-foreground">{s.sub}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
