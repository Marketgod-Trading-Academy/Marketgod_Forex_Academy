// src/Components/Plans/WhyThisCourse.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Check } from "lucide-react";

const highlights = [
  "🎯 The Sniper MarketGod Strategy",
  "📊 How to Build A Personal Trading System From Scratch",
  "👨🏽‍💼 My Proven Risk Management Formula",
  "📚 Real-World Case Studies & Live Breakdowns",
  "📈 The Fast Lane to Forex Independence",
];

const WhyThisCourse: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-24 ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Why This Course?
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            This course is your fast track to mastering Forex trading the MarketGod way — from building a personal system, managing risk, to real-life live breakdowns that create true results.
          </p>
        </motion.div>

        {/* VIDEO + HIGHLIGHTS */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PDjm4Mpivng?si=5e0drfLjKIxWZlzr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="absolute inset-0 bg-black/20 rounded-3xl pointer-events-none" />
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={24} className={`mt-1 ${isDark ? "text-mg-green" : "text-mg-green"}`} />
                  <span className={`text-lg md:text-xl ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#plans"
              className="inline-block bg-mg-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-mg-gold hover:shadow-mg-gold/40 transition-all mt-4"
            >
              Enroll Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;
