import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        background: "#FFFFFF",
        foreground: "#1a1a1a",
        secondary: "#666666",
        accent: "#3b82f6",
        border: "#e5e5e5",
        "card-hover": "#fafafa",
        // Dark mode
        "dark-background": "#0B1026", // Deep Space Blue
        "dark-foreground": "#fafafa",
        "dark-secondary": "#a3a3a3",
        "dark-accent": "#4facfe", // Electric Blue
        "dark-border": "#1e293b",
        "dark-card-hover": "#111827",
        // Custom
        "space-blue": "#0B1026",
        "electric-blue": "#4facfe",
        "cyan-glow": "#00f2fe",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1000px",
      },
      spacing: {
        section: "5rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
