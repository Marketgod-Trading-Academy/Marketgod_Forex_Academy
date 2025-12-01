module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mg: {
          gold: "#D4AF37",
          black: "#000000",
          paper: "#FFFFFF",

          light: {
            bg: "#FAFAFA",
            surface: "#FFFFFF",
            border: "#E5E7EB",
            text: "#1F2937",
            textSecondary: "#6B7280",
          },
          dark: {
            bg: "#000000",
            surface: "#111111",
            border: "#1F2937",
            text: "#F2F2F2",
            textSecondary: "#9CA3AF",
          },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(212, 175, 55, 0.5)",
        "gold-glow-light": "0 0 15px rgba(212, 175, 55, 0.3)",
      },
      animation: {
        lightStreak1: "lightStreak 4s linear infinite",
        lightStreak2: "lightStreak 6s linear infinite reverse",
        lightStreak3: "lightStreak 5s linear infinite",
      },
      keyframes: {
        lightStreak: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
