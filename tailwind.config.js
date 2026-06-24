/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1F5E3B",
          50: "#E8F3EC",
          100: "#C5E0CF",
          200: "#9ECBAF",
          300: "#6FB08C",
          400: "#45966C",
          500: "#1F5E3B",
          600: "#1A5032",
          700: "#154028",
          800: "#10301E",
          900: "#0A2014",
        },
        secondary: {
          DEFAULT: "#8B5A2B",
          50: "#F5EDE4",
          100: "#E8D5C0",
          200: "#D4B896",
          300: "#BF9B6C",
          400: "#A87A45",
          500: "#8B5A2B",
          600: "#734A24",
          700: "#5C3B1D",
          800: "#452C16",
          900: "#2E1D0F",
        },
        accent: {
          DEFAULT: "#D4A017",
          50: "#FBF5E3",
          100: "#F5E8C0",
          200: "#EBD48A",
          300: "#E0C055",
          400: "#D4A017",
          500: "#B8890F",
          600: "#9C720C",
          700: "#7F5C0A",
          800: "#634607",
          900: "#473105",
        },
        beige: {
          DEFAULT: "#F7F4EF",
          50: "#FDFCFA",
          100: "#F7F4EF",
          200: "#EDE8DF",
          300: "#E0D8CC",
        },
        cornsilk: "#FFF8DC",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(31,94,59,0.92) 0%, rgba(31,94,59,0.75) 40%, rgba(139,90,43,0.6) 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(247,244,239,0.8) 100%)",
        "dark-card":
          "linear-gradient(145deg, rgba(30,41,35,0.95) 0%, rgba(20,30,25,0.98) 100%)",
      },
      boxShadow: {
        premium: "0 4px 24px -4px rgba(31, 94, 59, 0.12)",
        "premium-lg": "0 12px 48px -12px rgba(31, 94, 59, 0.18)",
        gold: "0 4px 20px -4px rgba(212, 160, 23, 0.35)",
        glass: "0 8px 32px rgba(31, 94, 59, 0.08)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
