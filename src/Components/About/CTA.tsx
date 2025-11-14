// src/components/About/AboutCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const AboutCTA = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-mg-gold/10 via-mg-green/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Trophy size={72} className="mx-auto mb-6 text-mg-gold drop-shadow-xl" />
          <h2 className={`text-5xl md:text-6xl font-black mb-6 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Your Journey Starts Now
          </h2>
          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Join the <span className="text-mg-green font-bold">MarketGod Academy</span> and start mastering the charts with real mentors, real strategies, and real results.
          </p>

          <motion.a
            href="/plans"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,215,0,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-mg-green text-white rounded-full font-bold text-2xl shadow-2xl hover:shadow-mg-gold/50 transition-all"
          >
            Enroll Now & Claim Your Seat <Star size={28} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
