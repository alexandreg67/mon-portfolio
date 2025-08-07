import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern indigo-based primary palette
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        // Refined cyan secondary palette
        secondary: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        // Legacy colors for backward compatibility
        primaryLegacy: "#F95F62",
        secondaryLegacy: "#00A676",
        // Modern neutral palette
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Updated background colors
        backgroundStart: "#0f172a", // slate-900
        backgroundEnd: "#1e293b", // slate-800
        textPrimary: "#ffffff",
        textSecondary: "#cbd5e1", // slate-300
      },
      fontFamily: {
        // Modern Inter-based typography
        heading: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        elegant: ['"Playfair Display"', "serif"],
        // Legacy fonts for backward compatibility
        headline: ['"Abril Fatface"', "serif"],
        bodyLegacy: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "text-gradient": "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(99, 102, 241, 0.3)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      zIndex: {
        modal: "50",
        overlay: "59",
        menu: "60",
        tooltip: "70",
      },
      animation: {
        "gentle-bounce": "gentle-bounce 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "menu-item-appear": "menu-item-appear 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "menu-item-appear": {
          "0%": { transform: "translateX(-30px)", opacity: "0", scale: "0.95" },
          "100%": { transform: "translateX(0px)", opacity: "1", scale: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(99, 102, 241, 0.5)" },
          "50%": {
            boxShadow:
              "0 0 20px rgba(99, 102, 241, 0.8), 0 0 30px rgba(34, 211, 238, 0.4)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
