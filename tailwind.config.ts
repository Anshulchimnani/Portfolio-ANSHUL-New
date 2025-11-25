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
        // Light mode (uses CSS variables)
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        border: "var(--border)",
        "card-hover": "var(--card-hover)",
        // Dark mode (uses CSS variables)
        "dark-background": "var(--background)",
        "dark-foreground": "var(--foreground)",
        "dark-secondary": "var(--secondary)",
        "dark-accent": "var(--accent)",
        "dark-border": "var(--border)",
        "dark-card-hover": "var(--card-hover)",
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
      keyframes: {
        flutter: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        flutter: "flutter 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
