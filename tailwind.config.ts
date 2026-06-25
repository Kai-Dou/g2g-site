import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        g2g: {
          navy: {
            950: "#001022",
            900: "#001B33",
            800: "#003366",
            700: "#0A4A85",
          },
          yellow: "#FFD100",
          red: "#CC0000",
          white: "#FFFFFF",
          gray: {
            100: "#F0F0F0",
            400: "#9AA5B1",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(2.5rem, 5vw + 1rem, 5.5rem)",
      },
      borderRadius: {
        glass: "20px",
        bento: "20px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.25)",
        "glass-hover": "0 16px 48px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "g2g-gradient":
          "linear-gradient(180deg, #001022 0%, #001B33 45%, #003366 100%)",
        "g2g-cta":
          "linear-gradient(135deg, #0A4A85 0%, #003366 50%, #001B33 100%)",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
