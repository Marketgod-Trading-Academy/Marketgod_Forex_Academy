// src/components/About/About.tsx
import  { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Users, Award, Zap, TrendingUp, ArrowRight, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-mg-gold/10 via-transparent to-[#00c896]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            theme === "light" ? "text-mg-light-text" : "text-mg-gold"
          }`}>
            Meet the <span className="text-mg-gold">MarketGod</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${
            theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
          }`}>
            Empowering African traders with pure price action mastery — no AI, no bots, just discipline and results.
          </p>
        </motion.div>

        {/* Founder Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Eyram Dela - The MarketGod"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-mg-gold/20"
            />
          </div>
          <div className="space-y-6">
            <h3 className={`text-3xl font-bold ${
              theme === "light" ? "text-mg-light-text" : "text-mg-gold"
            }`}>
              Eyram Dela – The MarketGod
            </h3>
            <p className={`text-lg leading-relaxed ${
              theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
            }`}>
              Renowned Ghanaian forex trader, mentor, and digital entrepreneur. With a sharp eye for market trends and a passion for teaching, Eyram has empowered thousands of traders across Africa to master the markets with precision and confidence — using only price action, institutional order flow, and unbreakable discipline.
            </p>

            {/* EXPANDABLE CONTENT */}
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-96" : "max-h-0"}`}>
              <p className={`text-lg leading-relaxed mt-4 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
              }`}>
                From humble beginnings in Accra, Eyram turned his passion into a proven system. He’s traded live in front of thousands, built the Sniper MarketGod Strategy, and now teaches it step-by-step. His mission? To prove that **Ghanaian traders can dominate global markets** — without AI, without shortcuts.
              </p>
              <p className={`text-lg italic mt-4 ${
                theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
              }`}>
                “I don’t sell dreams. I sell results.”
              </p>
            </div>

            <p className={`text-lg italic ${
              theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
            }`}>
              "Not for cry babies. Built for traders who want to WIN."
            </p>

            {/* SEE MORE / LESS BUTTON */}
           <div className="grid grid-cols-2 mt-4 md:text-lg text-sm">
             <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide border-2 transition-all ${
                theme === "light"
                  ? "border-mg-gold text-mg-gold hover:bg-mg-gold/10"
                  : "border-mg-gold text-mg-gold hover:bg-mg-gold/20"
              }`}
            >
              {isExpanded ? (
                <>
                  See Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More <ChevronDown size={20} />
                </>
              )}
            </motion.button>

            <motion.a
              href="#mentors"
              whileHover={{ scale: 1.05 }}
              className={`inline-flex justify-between items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide border-2 transition-all ml-3 ${
                theme === "light"
                  ? "border-mg-gold text-mg-gold hover:bg-mg-gold/10"
                  : "border-mg-gold text-mg-gold hover:bg-mg-gold/20"
              }`}
            >
              Meet Eyram
              <ArrowRight size={20} />
            </motion.a>
           </div>
          </div>
        </motion.div>

        {/* Mission & Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 text-center"
        >
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${
              theme === "light" ? "text-mg-light-text" : "text-mg-gold"
            }`}>
              Our Mission
            </h3>
            <p className={`text-lg ${
              theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
            }`}>
              To bridge the gap between African ambition and global markets. We equip traders in Ghana and across the continent with timeless skills — price action, risk management, and psychological discipline — to achieve financial independence through real trading.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-mg-gold to-[#00c896]"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${
              theme === "light" ? "text-mg-light-text" : "text-mg-gold"
            }`}>
              Who It's For
            </h3>
            <ul className="text-left space-y-4">
              <li className={`flex items-center gap-3 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
              }`}>
                <Award size={20} className="text-mg-gold" />
                <span>Beginners seeking structure in Ghana's fast-paced economy</span>
              </li>
              <li className={`flex items-center gap-3 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
              }`}>
                <Users size={20} className="text-mg-gold" />
                <span>Side hustlers and entrepreneurs building wealth</span>
              </li>
              <li className={`flex items-center gap-3 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
              }`}>
                <GraduationCap size={20} className="text-mg-gold" />
                <span>Students and young professionals starting early</span>
              </li>
              <li className={`flex items-center gap-3 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
              }`}>
                <Zap size={20} className="text-mg-gold" />
                <span>Intermediate traders needing discipline and consistency</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 gap-8 mt-20 pt-16 border-t border-mg-gold/20"
        >
          {[
            { icon: Users, value: "10K+", label: "Active Traders" },
            { icon: Award, value: "87%", label: "Win Rate" },
            { icon: Zap, value: "24/7", label: "Live Alerts" },
            { icon: TrendingUp, value: "5+", label: "Years of Mastery" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <stat.icon size={40} className="mx-auto mb-3 text-mg-gold" />
              <div className={`text-sm md:text-4xl font-black ${
                theme === "light" ? "text-mg-light-text" : "text-mg-gold"
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm uppercase tracking-widest ${
                theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;