"use client";

import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import CameraRig from "./CameraRig";
import ParticleField from "./ParticleField";
import WireShell from "./WireShell";

const PALETTE = {
  dark: {
    colorA: "#166534", // green-800 — the mass of the cloud
    colorB: "#a7f3d0", // the hot rim
    wire: "#4ade80",
    wireOpacity: 0.07,
    opacity: 0.95,
    additive: true,
  },
  light: {
    colorA: "#0B652F", // the brand green, already in use for links
    colorB: "#94a3b8",
    wire: "#0f172a",
    wireOpacity: 0.05,
    opacity: 0.5,
    additive: false,
  },
} as const;

/**
 * The hero's three.js layer.
 *
 * Deliberately defensive: it mounts only after first paint (so it never
 * competes with LCP), stops its frame loop when scrolled out of view,
 * halves its particle budget on small screens, and does not mount at all
 * when the visitor asked for reduced motion.
 */
export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.matchMedia("(max-width: 768px)");

    const sync = () => {
      setReduced(motion.matches);
      setCompact(small.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    small.addEventListener("change", sync);

    // Defer the WebGL context by a frame so the text paints first.
    const id = window.requestAnimationFrame(() => setMounted(true));

    return () => {
      motion.removeEventListener("change", sync);
      small.removeEventListener("change", sync);
      window.cancelAnimationFrame(id);
    };
  }, []);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    observer.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.bottom / (rect.height || 1));
      scrollRef.current = Math.min(Math.max(progress, 0), 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [mounted]);

  const palette = resolvedTheme === "light" ? PALETTE.light : PALETTE.dark;
  const count = useMemo(() => (compact ? 3200 : 7600), [compact]);

  return (
    <div
      ref={wrapper}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
    >
      {/* Static stand-in: visible before the canvas mounts, and the only
          thing shown when reduced motion is requested. */}
      <div className="absolute inset-0 grid-dots mask-radial opacity-50" />
      <div className="absolute left-[78%] top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--glow)/0.18),transparent_62%)] blur-2xl motion-safe:animate-aurora max-md:left-1/2" />

      {mounted && !reduced ? (
        <Canvas
          className="!absolute inset-0"
          dpr={[1, 1.75]}
          frameloop={visible ? "always" : "never"}
          camera={{ position: [0, 0, 4.4], fov: 45 }}
          gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <CameraRig />
            {/* Pushed right and bled off the edge on desktop so the cloud
                frames the copy instead of sitting behind it. */}
            <group position={[compact ? 0 : 1.75, compact ? 0.35 : 0, 0]} scale={compact ? 0.85 : 1}>
              <WireShell color={palette.wire} opacity={palette.wireOpacity} />
              <ParticleField
                count={count}
                size={compact ? 11 : 13}
                colorA={palette.colorA}
                colorB={palette.colorB}
                opacity={palette.opacity}
                additive={palette.additive}
                scrollRef={scrollRef}
              />
            </group>
          </Suspense>
        </Canvas>
      ) : null}

      {/* Legibility scrim. The text column occupies roughly 23–60% of the
          viewport, so the wash stays opaque across that band and clears
          before the densest part of the cloud. */}
      <div className="absolute inset-0 bg-[linear-gradient(96deg,rgb(var(--bg))_20%,rgb(var(--bg)/0.94)_40%,rgb(var(--bg)/0.6)_56%,transparent_76%)] max-md:bg-[linear-gradient(to_bottom,rgb(var(--bg)/0.66),rgb(var(--bg)/0.86))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
