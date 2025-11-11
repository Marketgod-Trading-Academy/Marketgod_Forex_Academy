// src/Components/Home/WhyMarketGod.tsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Brain, Users, Globe, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const features = [
  {
    icon: Globe,
    title: "Trade Without Borders",
    desc: "Access global markets directly from Africa — no restrictions, full reach.",
  },
  {
    icon: Shield,
    title: "Proven Credibility",
    desc: "Led by Eyram Dela — Ghana’s most respected trading mentor, trusted worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Consistency",
    desc: "Learn the MarketGod discipline: patience, precision, and progress.",
  },
  {
    icon: Brain,
    title: "Smart Analysis Mastery",
    desc: "Understand the market like institutions do — not just signals, but skill.",
  },
  {
    icon: Users,
    title: "A Global Tribe",
    desc: "10K+ members trading and growing together — from Accra to Dubai to New York.",
  },
  {
    icon: Zap,
    title: "Time-Zone Synced",
    desc: "Train in real-time with GMT — the heartbeat of the global market.",
  },
];

const WhyMarketGod = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-28 px-6 transition-colors duration-500 ${
        isDark ? "bg-black text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/ghana-trading-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌍 Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.1),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(220,38,38,0.1),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_70%)] animate-pulse-slow" />

      {/* Subtle black fade overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-left space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Why MarketGod?
            </span>
          </h2>

          <p className="text-lg leading-relaxed max-w-xl text-gray-300">
            More than a trading academy — it’s a movement. Born in{" "}
            <span className="text-yellow-500 font-semibold">Ghana</span>, built
            for ambitious traders across the world. We don’t just teach charts;
            we build mindset, mastery, and momentum.
          </p>

          <motion.a
            href="#plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-lg hover:shadow-yellow-400/40 transition-all"
          >
            Join The Movement
            <Globe size={22} />
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE — Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`group p-8 rounded-3xl border backdrop-blur-md relative overflow-hidden transition-all ${
                isDark
                  ? "bg-[#111]/60 border-yellow-500/20 hover:border-yellow-500/60"
                  : "bg-white/90 border-yellow-400/20 hover:border-yellow-500/50"
              }`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 ${
                  isDark
                    ? "bg-gradient-to-br from-yellow-500 to-red-600"
                    : "bg-gradient-to-br from-yellow-300 to-green-400"
                }`}
              />
              <div className="relative z-10 flex flex-col items-start space-y-4">
                <div
                  className={`p-3 rounded-2xl ${
                    isDark ? "bg-yellow-500/10" : "bg-yellow-100/60"
                  }`}
                >
                  <f.icon className="text-yellow-500" size={30} />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMarketGod;
