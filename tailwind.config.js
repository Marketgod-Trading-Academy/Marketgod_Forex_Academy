// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mg: {
          gold: "#D4AF37",
          paper: "#F2F2F2",
          charcoal: "#111111",
          black: "#000000",

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
        "gold-glow": "0 0 20px rgba(212,175,55,0.5)",
        "gold-glow-light": "0 0 15px rgba(212,175,55,0.3)",
      },
      animation: {
        ping: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};