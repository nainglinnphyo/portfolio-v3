"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds before this element starts once it enters the viewport. */
  delay?: number;
  /** Stagger direct children instead of animating as one block. */
  stagger?: number;
  as?: keyof typeof TAGS;
  className?: string;
  y?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* Created once at module scope. Calling motion(tag) during render would
   produce a new component type each pass and remount the children. */
const TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  header: motion.header,
} as const;

/**
 * Scroll-triggered entrance: a short rise with a blur burn-off.
 * Collapses to a plain fade under `prefers-reduced-motion` (handled centrally
 * by MotionConfig). `whileInView` with `once` means no layout shift and no
 * repeated work on scroll-back.
 */
export default function Reveal({
  children,
  delay = 0,
  stagger,
  as = "div",
  className,
  y = 22,
}: Props) {
  const MotionTag = TAGS[as];

  /* No reduced-motion branch here on purpose: `MotionConfig reducedMotion="user"`
     in app/providers.tsx strips the transform half of these variants, and
     branching on a media query during render is what caused the hydration
     mismatch this file used to throw. */
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        delay,
        ease: EASE,
        ...(stagger ? { staggerChildren: stagger, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Child of a `Reveal` that has `stagger` set. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE } },
};
