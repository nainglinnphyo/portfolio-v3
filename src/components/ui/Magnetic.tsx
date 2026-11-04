"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Maximum pull in px. */
  strength?: number;
  className?: string;
};

/** A control that leans toward the cursor and springs back on leave. */
export default function Magnetic({ children, strength = 10, className }: Props) {
  const reduced = useReducedMotion();
  const config = { stiffness: 260, damping: 18, mass: 0.4 };
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  const onMove = (event: MouseEvent<HTMLSpanElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.span>
  );
}
