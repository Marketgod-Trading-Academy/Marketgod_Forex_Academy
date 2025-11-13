// src/components/About/AboutMentor.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { 
  Users, 
  Award, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap 
} from "lucide-react";

const AboutMentor = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: Users, value: "10K+", label: "Active Traders" },
    { icon: Award, value: "87%", label: "Win Rate" },
    { icon: Zap, value: "24/7", label: "Live Alerts" },
    { icon: TrendingUp, value: "5+", label: "Years of Mastery" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mg-gold/10 via-transparent to-mg-green/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            isDark ? "text-mg-gold" : "text-mg-charcoal"
          }`}>
            Meet the <span className="text-mg-green">MarketGod</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${
            isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"
          }`}>
            Empowering African traders with pure price action mastery — no AI, no bots, just discipline and results.
          </p>
        </motion.div>

        {/* Founder Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Eyram Dela - The MarketGod"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-mg-gold/30"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 order-1 md:order-2">
            <h3 className={`text-3xl font-bold ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
              Eyram Dela – The MarketGod
            </h3>

            <p className={`text-lg leading-relaxed ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
              Renowned Ghanaian forex trader, mentor, and digital entrepreneur. With a sharp eye for market trends and a passion for teaching, Eyram has empowered thousands of traders across Africa to master the markets with precision and confidence — using only price action, institutional order flow, and unbreakable discipline.
            </p>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className={`text-lg leading-relaxed mt-4 ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
                From humble beginnings in Accra, Eyram turned his passion into a proven system. He’s traded live in front of thousands, built the <span className="font-bold text-mg-green">Sniper MarketGod Strategy</span>, and now teaches it step-by-step. His mission? To prove that <span className="font-bold text-mg-gold">Ghanaian traders can dominate global markets</span> — without AI, without shortcuts.
              </p>
              <p className={`text-lg italic mt-4 ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                “I don’t sell dreams. I sell results.”
              </p>
            </motion.div>

            <p className={`text-lg italic ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
              "Not for cry babies. Built for traders who want to WIN."
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide border-2 transition-all ${
                  isDark
                    ? "border-mg-gold text-mg-gold hover:bg-mg-gold/20"
                    : "border-mg-gold text-mg-gold hover:bg-mg-gold/10"
                }`}
              >
                {isExpanded ? (
                  <>See Less <ChevronUp size={20} /></>
                ) : (
                  <>See More <ChevronDown size={20} /></>
                )}
              </motion.button>

              <motion.a
                href="/plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide border-2 transition-all ${
                  isDark
                    ? "border-mg-green text-mg-green hover:bg-mg-green/20"
                    : "border-mg-green text-mg-green hover:bg-mg-green/10"
                }`}
              >
                Meet Eyram <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mission & Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 text-center"
        >
          {/* Mission */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
              Our Mission
            </h3>
            <p className={`text-lg ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
              To bridge the gap between African ambition and global markets. We equip traders in Ghana and across the continent with timeless skills — price action, risk management, and psychological discipline — to achieve financial independence through real trading.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-mg-gold to-mg-green"></div>
            </div>
          </div>

          {/* Who It's For */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
              Who It's For
            </h3>
            <ul className="text-left space-y-4 max-w-md mx-auto">
              {[
                { icon: Award, text: "Beginners seeking structure in Ghana's fast-paced economy" },
                { icon: Users, text: "Side hustlers and entrepreneurs building wealth" },
                { icon: GraduationCap, text: "Students and young professionals starting early" },
                { icon: Zap, text: "Intermediate traders needing discipline and consistency" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-3 ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}
                >
                  <item.icon size={20} className="text-mg-gold flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-mg-gold/20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-mg-gold/10 group-hover:bg-mg-gold/20 transition-all">
                  <stat.icon size={36} className="text-mg-gold" />
                </div>
              </div>
              <div className={`text-3xl md:text-4xl font-black mb-1 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                {stat.value}
              </div>
              <div className={`text-sm uppercase tracking-widest ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMentor;