import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Brain, Users, Globe, Zap } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const features = [
  {
    icon: Globe,
    title: "Global Access, African Excellence",
    desc: "Trade global markets confidently — powered by strategy, discipline, and a world-class Ghanaian foundation.",
  },
  {
    icon: Shield,
    title: "Trusted by Professionals",
    desc: "Learn under the mentorship of Eyram Dela — Ghana’s respected trading voice shaping traders across continents.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth & Consistency",
    desc: "We focus on mastery, not hype. Our programs are designed to grow traders — one skill, one mindset, one milestone at a time.",
  },
  {
    icon: Brain,
    title: "Institutional Trading Insight",
    desc: "Gain clarity into how banks and institutions think — liquidity, timing, and precision behind every market move.",
  },
  {
    icon: Users,
    title: "A Global Trader Community",
    desc: "Join 10,000+ traders in our Academy network — united by discipline, results, and a shared pursuit of excellence.",
  },
  {
    icon: Zap,
    title: "Aligned with the World’s Market Clock",
    desc: "Our sessions follow GMT — the global heartbeat of financial markets. Trade and learn in real time.",
  },
];

const WhyMarketGod = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="why-marketgod"
      className={`relative overflow-hidden py-32 transition-all duration-700 ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
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

      {/* ✨ Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-600/10 to-transparent animate-pulse-slow" />
      <div className="absolute inset-0 bg-black/70" />

      {/* 🏛️ Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Why Choose MarketGod Academy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          MarketGod Academy isn’t just a trading school — it’s a legacy.  
          Founded in <span className="text-yellow-400 font-semibold">Ghana</span>, built for traders across the globe.  
          We combine education, mindset, and market precision to help you trade like a professional — from anywhere.
        </motion.p>

        <motion.a
          href="#plans"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 mt-10 px-10 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-lg hover:shadow-yellow-400/40 transition-all"
        >
          Join The Academy <Globe size={22} />
        </motion.a>
      </div>

      {/* ⚡ Numbered Feature Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            className={`group relative p-8 rounded-3xl border overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all backdrop-blur-xl ${
              isDark
                ? "bg-gradient-to-br from-[#111]/80 to-[#222]/60 border-yellow-500/10"
                : "bg-white/70 border-yellow-400/20"
            }`}
          >
            {/* Number Label */}
            <div className="absolute top-6 right-6 text-6xl font-black opacity-10 text-yellow-400 select-none">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Icon + Text */}
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
                className={`text-sm leading-relaxed ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Soft Ambient Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-[200px]" />
    </section>
  );
};

export default WhyMarketGod;
