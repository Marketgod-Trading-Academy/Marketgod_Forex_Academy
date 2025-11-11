// src/components/WhyForex/WhyForex.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { TrendingUp, Globe, Clock, Shield, Zap, Users } from "lucide-react";

const WhyForex = () => {
  const { theme } = useTheme();

  const reasons = [
    {
      icon: TrendingUp,
      title: "Trade 24/5",
      desc: "Markets open Sunday 10 PM to Friday 10 PM GMT — perfect for Ghanaian side hustlers.",
    },
    {
      icon: Globe,
      title: "Global Access",
      desc: "Trade USD, EUR, GBP, JPY, and more — from Accra to Tokyo, no borders.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Trade before work, during lunch, or after midnight. You set the schedule.",
    },
    {
      icon: Shield,
      title: "Low Entry Barrier",
      desc: "Start with $100. No degree, no office, no boss — just a phone and discipline.",
    },
    {
      icon: Zap,
      title: "High Liquidity",
      desc: "Over $7.5 trillion traded daily. Enter and exit trades in seconds.",
    },
    {
      icon: Users,
      title: "Leverage Power",
      desc: "Control $10,000 with $100. Grow small accounts fast — with smart risk.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ghana Flag Wave */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-80 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            theme === "light" ? "text-mg-light-text" : "text-mg-gold"
          }`}>
            Why <span className="text-mg-gold">Forex Trading</span>?
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
            theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
          }`}>
            The world’s largest market. Built for African ambition. No AI. Just opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`p-8 rounded-2xl border backdrop-blur-sm transition-all ${
                theme === "light"
                  ? "bg-white/80 border-mg-gold/20 shadow-lg"
                  : "bg-mg-dark-bg/80 border-mg-gold/30 shadow-2xl"
              }`}
            >
              <reason.icon size={48} className="text-mg-gold mb-4" />
              <h3 className={`text-xl font-bold mb-3 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-gold"
              }`}>
                {reason.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
              }`}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-mg-gold text-mg-black rounded-full font-bold uppercase tracking-wide shadow-xl"
          >
            Start Trading Forex Now
            <TrendingUp size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyForex;