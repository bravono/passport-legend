import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Navy Blue
        primary: {
          50: "#f0f3f6",
          100: "#d9e0e9",
          200: "#b9c6d6",
          300: "#8ea5bf",
          400: "#5d7ca4",
          500: "#0c2043", // Main navy
          600: "#0a1b39",
          700: "#08162e",
          800: "#061022",
          900: "#040916",
        },
        // Accent: Gold
        accent: {
          50: "#fff9ed",
          100: "#fef1db",
          200: "#fde2b6",
          300: "#fbcf8a",
          400: "#f8b85b",
          500: "#e3ab50", // Main gold
          600: "#cc9a48",
          700: "#aa803c",
          800: "#896730",
          900: "#705427",
        },
        // Neutrals
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        premium:
          "0 10px 30px -5px rgba(12, 32, 67, 0.1), 0 4px 10px -2px rgba(227, 171, 80, 0.05)",
        "premium-hover":
          "0 20px 40px -5px rgba(12, 32, 67, 0.2), 0 10px 20px -2px rgba(227, 171, 80, 0.1)",
        glass: "0 8px 32px 0 rgba(12, 32, 67, 0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "scale-up": "scaleUp 0.5s ease-out",
        "page-enter": "pageEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "expand-width":
          "expandWidth 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.5s infinite linear",
        float: "float 4s ease-in-out infinite",
        "slide-down": "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pageEnter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        expandWidth: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "50%": { opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
