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
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#1b365d", // Main navy
          600: "#183154",
          700: "#152946",
          800: "#112139",
          900: "#0e1a2b",
        },
        // Accent: Gold
        accent: {
          50: "#fcf9f2",
          100: "#faf3e5",
          200: "#f5e7cc",
          300: "#f0dbb3",
          400: "#e6c180",
          500: "#d4af37", // Main gold
          600: "#bf9d32",
          700: "#a98b2c",
          800: "#947a27",
          900: "#7f6821",
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
          "0 10px 30px -5px rgba(27, 54, 93, 0.1), 0 4px 10px -2px rgba(212, 175, 55, 0.05)",
        "premium-hover":
          "0 20px 40px -5px rgba(27, 54, 93, 0.2), 0 10px 20px -2px rgba(212, 175, 55, 0.1)",
        glass: "0 8px 32px 0 rgba(27, 54, 93, 0.1)",
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
