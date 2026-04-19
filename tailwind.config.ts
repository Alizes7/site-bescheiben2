import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class" as const,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bescheiben Brand System
        brand: {
          DEFAULT: "#6B4EFF",
          deep:    "#4A32D4",
          accent:  "#A58BFF",
          light:   "#C4B5FD",
          glow:    "rgba(107,78,255,0.25)",
        },
        dark: {
          950: "#06040F",
          900: "#0A0A0F",
          800: "#100D2A",
          700: "#16133A",
          600: "#1E1A4A",
        },
        neutral: {
          900: "#111827",
          700: "#374151",
          500: "#6B7280",
          300: "#D1D5DB",
          100: "#F3F4F6",
        },
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6B4EFF, #8B6CFF)",
        "brand-gradient-deep": "linear-gradient(135deg, #4A32D4, #6B4EFF)",
        "grid-pattern":
          "linear-gradient(rgba(107,78,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,78,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        brand:    "0 4px 20px rgba(107,78,255,0.3)",
        "brand-lg": "0 8px 40px rgba(107,78,255,0.4)",
        glass:    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float:        "float 6s ease-in-out infinite",
        marquee:      "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
