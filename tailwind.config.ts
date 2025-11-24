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
        "dark-background": "#0a0a0a",
        "dark-foreground": "#fafafa",
        "dark-secondary": "#a3a3a3",
        "dark-accent": "#60a5fa",
        "dark-border": "#262626",
        "dark-card-hover": "#171717",
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
