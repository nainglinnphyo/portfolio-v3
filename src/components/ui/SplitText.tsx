"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /** Per-character delay. */
  step?: number;
  delay?: number;
  by?: "char" | "word";
};

/**
 * Kinetic type. Each glyph arrives on its own spring, so the headline
 * assembles instead of fading. Assistive tech gets one visually-hidden copy
 * of the real string; every animated glyph is aria-hidden, so the headline
 * is never spelled out letter by letter.
 */
export default function SplitText({
  text,
  className,
  step = 0.028,
  delay = 0,
  by = "char",
}: Props) {
  const units = by === "word" ? text.split(" ") : Array.from(text);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          aria-hidden="true"
          className="inline-block whitespace-pre will-change-transform"
          initial={{ opacity: 0, y: "0.5em", rotateX: -70, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * step,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {unit === " " ? " " : unit}
          {by === "word" && i < units.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
