"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";
import { profile } from "@/utils/profile";

export default function Footer() {

  return (
    <footer className="relative mt-8 border-t border-line/70 pt-10">
      {/* Oversized wordmark, clipped by the viewport edge — reads as texture
          rather than a heading, so it stays out of the accessibility tree. */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient mask-b whitespace-nowrap text-[clamp(1.6rem,8.4vw,4.9rem)] font-bold leading-none tracking-tightest motion-safe:animate-shimmer"
        >
          {profile.name}
        </motion.p>
      </div>

      <Reveal className="flex flex-wrap items-end justify-between gap-6 pb-8 pt-6">
        <div className="space-y-1">
          <p className="text-sm text-fg">{profile.role} · Backend · Web</p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          {profile.links.map((link) => (
            <li key={link.label}>
              <Magnetic strength={6}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-line/80 px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                >
                  {link.label}
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>
      </Reveal>
    </footer>
  );
}
