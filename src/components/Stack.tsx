"use client";

import { motion } from "framer-motion";
import Reveal, { revealItem } from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import { stack } from "@/utils/stack";

/**
 * Bento grid of the toolkit. Uneven spans on `lg` keep it from reading as a
 * plain table; every tile is a spotlight card so the grid lights up under
 * the cursor without a single re-render.
 */
export default function Stack() {
  return (
    <section className="space-y-6">
      <Reveal stagger={0.08} className="grid grid-cols-2 gap-3 lg:grid-cols-6">
        {stack.map((group) => (
          <motion.div
            key={group.label}
            variants={revealItem}
            className={`${group.span} max-sm:col-span-2`}
          >
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col gap-4 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold tracking-tightest">{group.label}</h3>
                  <span className="text-[0.65rem] tabular-nums text-muted">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line/70 bg-surface/60 px-2 py-1 text-xs text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}
