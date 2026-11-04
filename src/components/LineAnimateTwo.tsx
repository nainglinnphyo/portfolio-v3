"use client";

import { useEffect, useState } from "react";

const randomDelay = () => Math.random() * 3;
const randomDuration = () => 0.5 + Math.random() * 0.5;

/**
 * A single crosshair node with two light beams sweeping through it.
 * Timings are randomised in an effect, not during render, so the server and
 * client markup agree and the field still de-synchronises on screen.
 */
export default function LineAnimationTwo() {
  const [timing, setTiming] = useState({
    horizontalDelay: "0s",
    verticalDelay: "0s",
    horizontalDuration: "1s",
    verticalDuration: "1s",
  });

  useEffect(() => {
    setTiming({
      horizontalDelay: `${randomDelay()}s`,
      verticalDelay: `${randomDelay()}s`,
      horizontalDuration: `${randomDuration()}s`,
      verticalDuration: `${randomDuration()}s`,
    });
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <span className="absolute z-20 h-[0.4rem] w-[0.4rem] rounded-full bg-line" />
        <span className="absolute z-10 h-px w-4 bg-bg motion-safe:animate-pulse" />
        <span className="absolute z-10 h-4 w-px bg-bg motion-safe:animate-pulse" />
        <span
          className="absolute -z-10 h-px w-full bg-line opacity-0 motion-safe:animate-slideVertical"
          style={{
            animationDelay: timing.verticalDelay,
            animationDuration: timing.verticalDuration,
          }}
        />
        <span
          className="absolute -z-10 h-full w-px bg-line opacity-0 motion-safe:animate-slideHorizontal"
          style={{
            animationDelay: timing.horizontalDelay,
            animationDuration: timing.horizontalDuration,
          }}
        />
      </div>
    </div>
  );
}
