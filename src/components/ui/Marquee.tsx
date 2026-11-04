"use client";

import type { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  /** Seconds for one full pass. */
  duration?: number;
  reverse?: boolean;
  className?: string;
};

/**
 * Edge-faded infinite ticker. The row is rendered twice and translated by
 * exactly -50%, which is what makes the loop seamless; `aria-hidden` on the
 * duplicate stops the content being announced twice.
 */
export default function Marquee({ items, duration = 38, reverse, className }: Props) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-10 text-sm text-muted">
          <span>{item}</span>
          <span className="h-1 w-1 rounded-full bg-accent/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group relative flex overflow-hidden mask-x ${className ?? ""}`}>
      <div
        className="flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : undefined,
          } as React.CSSProperties
        }
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
