// src/components/About/AboutStats.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Users, TrendingUp, Award, Globe } from "lucide-react";

const AboutStats = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const stats = [
    { icon: Users, value: 10000, suffix: "+", label: "Students Trained", sub: "Across Ghana & Beyond" },
    { icon: TrendingUp, value: 87, suffix: "%", label: "VIP Win Rate", sub: "Sniper Strategy Verified" },
    { icon: Award, value: 1, suffix: "", label: "Exness Partner", sub: "Regulated & Trusted", logo: true },
    { icon: Globe, value: 1, suffix: "#", label: "Forex Academy", sub: "By Volume & Results" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((val, i) =>
          val < stats[i].value ? val + Math.ceil(stats[i].value / 40) : stats[i].value
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-20 relative overflow-hidden ${isDark ? "bg-mg-charcoal.qty" : "bg-mg-paper"}`}>
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-mg-gold/20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Built on <span className="text-mg-green">Real Results</span>
          </h2>
          <p className={`mt-3 text-lg ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Not hype. Just proof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="group"
            >
              <div className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-500
                ${isDark ? "bg-mg-black/50 border-mg-gold/30 hover:bg-mg-black/70" : "bg-white/80 border-mg-gold/20 hover:bg-white"}
                hover:shadow-mg-gold/30 hover:scale-105`}
              >
                <div className="flex justify-center mb-5">
                  <div className="p-4 rounded-full bg-mg-gold/15 group-hover:bg-mg-gold/25 transition-all">
                    <stat.icon size={44} className="text-mg-gold group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className={`text-5xl md:text-6xl font-black text-center mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {counts[i]}{stat.suffix}
                </div>

                <h3 className={`text-base md:text-lg font-bold text-center ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
                  {stat.label}
                </h3>
                <p className={`text-xs md:text-sm text-center ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}`}>
                  {stat.sub}
                </p>

                {stat.logo && (
                  <img src="/exness-logo.png" alt="Exness" className="h-6 mx-auto mt-3 opacity-80" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;