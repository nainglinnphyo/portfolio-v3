"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LineAnimation from "./Line";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return (
      <div className="transform transition-transform duration-1000 hover:rotate-360 cursor-pointer">
        <IoSunny onClick={() => setTheme("light")} />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="transform transition-transform duration-1000 hover:rotate-360 cursor-pointer">
        <FiMoon onClick={() => setTheme("dark")} />
      </div>
    );
  }
}
