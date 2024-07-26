import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "360": "360deg",
      },
      keyframes: {
        pulse: {
          "0%": { opacity: "0.5" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.5" },
        },
        slideVertical: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        slideHorizontal: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        slideVertical: "slideVertical 1s infinite linear",
        slideHorizontal: "slideHorizontal 1s infinite linear",
      },
      colors: {
        primary: "#e1e3e3",
        secondary: "#fbfbfb",
      },
    },
  },
  plugins: [],
};
export default config;
