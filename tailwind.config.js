/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mg: {
          gold: "#D4AF37",     // ← only accent color allowed
          black: "#000000",
          white: "#FFFFFF",
          paper: "#FAFAFA",    // very light gray (used as "white" in light mode)
          "light-gray": "#F5F5F5",
          "mid-gray": "#E5E5E5",
          "dark-gray": "#1A1A1A",

          light: {
            bg: "#FAFAFA",
            surface: "#FFFFFF",
            border: "#E5E5E5",
            text: "#000000",
            textSecondary: "#1A1A1A",
          },
          dark: {
            bg: "#000000",
            surface: "#111111",
            border: "#333333",
            text: "#FFFFFF",
            textSecondary: "#9CA3AF",
          },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.4)",
        "gold-glow-lg": "0 0 30px rgba(212, 175, 55, 0.6)",
      },
    },
  },
  plugins: [],
};