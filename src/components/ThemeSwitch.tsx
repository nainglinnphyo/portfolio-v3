"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="cursor-pointer">
      {resolvedTheme === "dark" ? (
        <IoSunny onClick={() => setTheme("light")} />
      ) : (
        <FiMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
