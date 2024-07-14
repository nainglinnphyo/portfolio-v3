"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return (
      <div className="transform transition-transform duration-1000 hover:rotate-360 cursor-pointer">
        <FiSun onClick={() => setTheme("light")} />
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
