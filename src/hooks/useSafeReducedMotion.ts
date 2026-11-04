"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * `useReducedMotion` reads a media query, so it is `false` during SSR and
 * can be `true` on the very first client render. Any component that branches
 * its output on it therefore hydrates against markup that does not match —
 * React 418/423/425.
 *
 * This defers the truth by one commit: the first client render agrees with
 * the server, then an effect flips it and the motion is dropped. The visitor
 * sees at most one frame of the animated variant.
 */
export function useSafeReducedMotion(): boolean {
  const reduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  return hydrated && Boolean(reduced);
}
