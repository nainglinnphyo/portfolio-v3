"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import AmbientCrosshairs from "@/components/AmbientCrosshairs";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/ui/SmoothScroll";

/**
 * Everything that has to exist once, above the page, and only in the browser:
 * the theme context, the Lenis loop, and the three decorative layers
 * (crosshair field, cursor light, scroll progress).
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <SmoothScroll />
        <ScrollProgress />
        <CursorGlow />
        <AmbientCrosshairs />
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
