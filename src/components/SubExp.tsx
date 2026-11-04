"use client";

import { motion } from "framer-motion";
import { SiPluscodes } from "react-icons/si";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SubExp({ company, jd, title, workDate }: JobDescription) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
      }}
      className="group relative pl-8 max-sm:pl-6"
    >
      {/* Rail marker — the crosshair motif, scaled up on entry */}
      <motion.span
        aria-hidden="true"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: EASE } },
        }}
        className="absolute left-0 top-[0.55rem] flex h-3 w-3 -translate-x-[0.37rem] items-center justify-center"
      >
        <span className="absolute h-3 w-px bg-line" />
        <span className="absolute h-px w-3 bg-line" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
      </motion.span>

      <motion.header
        variants={{
          hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: EASE },
          },
        }}
        className="space-y-0.5"
      >
        <p className="text-sm text-muted">{title}</p>
        <h3 className="text-lg font-bold tracking-tightest max-sm:text-base">
          {company}
        </h3>
        <p className="text-xs tabular-nums text-accent">{workDate}</p>
      </motion.header>

      <ul className="mt-4 space-y-2.5">
        {jd.map((line) => (
          <motion.li
            key={line}
            variants={{
              hidden: { opacity: 0, x: -8 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
            }}
            className="flex gap-4 text-sm leading-relaxed text-muted max-sm:gap-3"
          >
            <SiPluscodes
              aria-hidden="true"
              className="mt-[0.3rem] shrink-0 text-accent/70"
            />
            <span>{line}</span>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
