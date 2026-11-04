import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  /* src/utils is in here deliberately: the bento column spans are data
     (see utils/stack.ts), and leaving it out silently purged them. */
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        elevated: "rgb(var(--bg-elevated) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          bright: "rgb(var(--accent-bright) / <alpha-value>)",
        },
        /* kept so older markup keeps compiling */
        primary: "#e1e3e3",
        secondary: "#fbfbfb",
      },
      fontFamily: {
        mono: ["var(--font-wudoo)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        swift: "cubic-bezier(0.22, 1, 0.36, 1)",
        snap: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      rotate: {
        "360": "360deg",
      },
      keyframes: {
        /* v3 originals — still used by the ambient crosshairs */
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
        /* new */
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-40% 0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.55" },
          "33%": { transform: "translate3d(6%,-5%,0) scale(1.12)", opacity: "0.8" },
          "66%": { transform: "translate3d(-5%,4%,0) scale(0.94)", opacity: "0.5" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "scan-y": {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        slideVertical: "slideVertical 1s infinite linear",
        slideHorizontal: "slideHorizontal 1s infinite linear",
        marquee: "marquee var(--marquee-duration, 38s) linear infinite",
        shimmer: "shimmer 6s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        caret: "caret 1.1s step-end infinite",
        "scan-y": "scan-y 5s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
