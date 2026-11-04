"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import { profile } from "@/utils/profile";

const routes = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
];

/**
 * Floating glass nav. It parks itself at the top of the page and condenses
 * once you scroll, and the active pill is a shared `layoutId` so it slides
 * between items rather than cutting.
 */
export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 24);
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-3 z-40 mx-auto flex w-fit max-w-full justify-center py-2"
    >
      <div
        className={`flex items-center gap-1 rounded-full p-1 transition-all duration-500 ${
          condensed ? "glass" : "border border-transparent"
        }`}
      >
        <nav aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {routes.map((route) => {
              const active = pathname === route.href;
              return (
                <li key={route.href} className="relative">
                  <Link
                    href={route.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-[1] block rounded-full px-3 py-1.5 text-sm transition-colors duration-300 max-sm:px-2.5 ${
                      active ? "text-accent" : "text-muted hover:text-fg"
                    }`}
                  >
                    {route.label}
                  </Link>
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full border border-accent/30 bg-accent/10"
                    />
                  ) : null}
                </li>
              );
            })}

          </ul>
        </nav>

        <span aria-hidden="true" className="mx-1 h-4 w-px bg-line" />

        <a
          href={profile.links[1].href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-300 hover:text-fg max-sm:hidden"
        >
          GitHub
          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <ThemeSwitch />
      </div>
    </motion.header>
  );
}
