"use client";

import { motion } from "framer-motion";

type Props = {
  index: string;
  title: string;
  hint?: string;
};

/** `01 — Experience___` with a rule that draws itself in on scroll. */
export default function SectionHeading({ index, title, hint }: Props) {

  return (
    <div className="flex items-end gap-4">
      <div className="flex items-baseline gap-3">
        <span className="text-xs tabular-nums text-accent">{index}</span>
        <h2 className="text-lg font-bold tracking-tightest max-sm:text-base">
          {title}
          <span className="text-accent motion-safe:animate-caret">_</span>
        </h2>
      </div>

      <motion.span
        aria-hidden="true"
        className="mb-[0.45rem] h-px flex-1 origin-left bg-gradient-to-r from-line to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {hint ? (
        <span className="mb-[0.1rem] text-xs text-muted max-sm:hidden">{hint}</span>
      ) : null}
    </div>
  );
}
