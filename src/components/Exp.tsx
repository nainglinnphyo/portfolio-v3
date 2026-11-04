"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SubExp from "./SubExp";
import { exp } from "@/utils/exp";

/**
 * Experience timeline. One hairline rail runs the height of the list and
 * fills in step with the scroll position of that list, so the reader always
 * knows how far through the history they are.
 */
export default function Exp() {
  const list = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: list,
    offset: ["start 72%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const glowOpacity = useTransform(fill, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const glowTop = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <section className="space-y-8 max-sm:space-y-6">
      <div ref={list} className="relative">
        {/* Rail: track + scroll-linked fill + a travelling highlight */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-line/70"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-transparent"
        />
        <motion.span
          aria-hidden="true"
          style={{ top: glowTop, opacity: glowOpacity }}
          className="absolute left-0 h-10 w-px -translate-x-[0.5px] bg-accent-bright blur-[2px]"
        />

        <div className="space-y-12 max-sm:space-y-10">
          {exp.map((e) => (
            <SubExp
              key={`${e.company}-${e.title}`}
              company={e.company}
              current={e.current}
              jd={e.jd}
              title={e.title}
              workDate={e.workDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
