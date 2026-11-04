"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Inertial scrolling. Opt-out is honoured two ways: reduced-motion gets the
 * native scroller, and Lenis is torn down on unmount so a route change can
 * never leave two RAF loops running.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
