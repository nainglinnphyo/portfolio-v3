"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Theme toggle. Renders a neutral placeholder until mounted — next-themes
 * cannot know the resolved theme on the server, and swapping the icon after
 * hydration is what used to make this control pop in.
 */
export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Switch theme"}
      className="relative grid h-8 w-8 place-items-center rounded-full border border-line/80 text-fg transition-colors duration-300 hover:border-accent/50 hover:text-accent"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={mounted ? (isDark ? "dark" : "light") : "idle"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid place-items-center"
        >
          {mounted && isDark ? <FiSun /> : <FiMoon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
