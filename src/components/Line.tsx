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
        {/* Circle at the center */}
        {/* className={`absolute w-2 h-2 rounded-full bg-[#f6f7f7] z-20`} */}
        <div className="z-20">{children}</div>

        {/* Static Lines */}
        {/* <div
          className={`absolute w-6 h-[0.094rem]  bg-[#1f2937] z-10 animate-pulse`}
        ></div> */}
        <div
          className={`absolute w-[0.094rem] h-6 dark:bg-[#1f2937] bg-white z-10`}
        ></div>

        {/* Animated Vertical Line */}
        {/* <div
          className={`absolute w-full h-[0.094rem] bg-primary opacity-0 animate-slideVertical transition-opacity`}
          style={{
            animationDelay: verticalDelay,
            animationDuration: verticalDuration,
          }}
        ></div> */}

        {/* Animated  Horizontal Line */}
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