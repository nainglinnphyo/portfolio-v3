"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Per-route entrance. Keying on the pathname remounts the subtree on
 * navigation, so the animation replays without the exit-animation
 * bookkeeping `AnimatePresence` needs in the App Router.
 *
 * Transform-only, so reduced motion (via MotionConfig) leaves a plain fade.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
