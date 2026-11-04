"use client";

import type { MouseEvent, ReactNode } from "react";
import { useCallback, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Pointer-tracked card. The position is written straight to CSS custom
 * properties (`--mx` / `--my`) rather than React state, so hovering a bento
 * grid does not re-render it — the gradients live in `globals.css` under
 * `.spotlight` and `.spotlight-border`.
 */
export default function SpotlightCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const onMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = event;

    if (frame.current !== null) return;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight spotlight-border relative isolate overflow-hidden rounded-2xl border border-line/80 bg-elevated/50 transition-colors duration-500 hover:border-accent/35 ${className ?? ""}`}
    >
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}
