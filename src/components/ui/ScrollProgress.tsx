"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline read-progress bar pinned to the top edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-accent/40 via-accent to-accent-bright"
    />
  );
}
