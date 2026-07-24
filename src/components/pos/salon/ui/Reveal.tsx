"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offset = 28;

const buildVariants = (direction: Direction, reduce: boolean): Variants => {
  const d = reduce ? 0 : offset;
  const map: Record<Direction, Variants> = {
    up: { hidden: { opacity: 0, y: d }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -d }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: d }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -d }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: {
      hidden: { opacity: 0, scale: reduce ? 1 : 0.94 },
      visible: { opacity: 1, scale: 1 },
    },
  };
  return map[direction];
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const reduce = !!useReducedMotion();
  const variants = buildVariants(direction, reduce);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for lists of items
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
}) {
  const reduce = !!useReducedMotion();
  const variants = buildVariants(direction, reduce);
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
