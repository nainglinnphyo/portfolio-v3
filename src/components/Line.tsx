"use client";
import React, { useEffect, useState } from "react";

const getRandomDelay = () => Math.random() * 3;
const getRandomDuration = () => 0.5 + Math.random() * (1 - 0.5);

function LineAnimation({ children }: { children: React.ReactNode }) {
  const [horizontalDelay, setHorizontalDelay] = useState("0s");
  const [verticalDelay, setVerticalDelay] = useState("0s");
  const [horizontalDuration, setHorizontalDuration] = useState("1s");
  const [verticalDuration, setVerticalDuration] = useState("1s");

  useEffect(() => {
    // Set random animation delays and durations
    setHorizontalDelay(`${getRandomDelay()}s`);
    setVerticalDelay(`${getRandomDelay()}s`);
    setHorizontalDuration(`${getRandomDuration()}s`);
    setVerticalDuration(`${getRandomDuration()}s`);
  }, []);
  return (
    <div className="flex items-center justify-center absolute -top-12 right-80">
      <div className="relative w-40  h-40 flex items-center justify-center">
        <div className="z-20">{children}</div>
        <div
          className={`absolute w-[0.094rem] h-6 dark:bg-[#1f2937] bg-white z-10`}
        ></div>
        <div
          className={`absolute w-[0.094rem] h-full dark:bg-[#7e8a9c] bg-[#cccfcf] opacity-0 animate-slideHorizontal transition-opacity`}
          style={{
            animationDelay: horizontalDelay,
            animationDuration: horizontalDuration,
          }}
        ></div>
      </div>
    </div>
  );
}

export default LineAnimation;
