// Eugene Afriyie UEB3502023
// src/components/WhatIsForex/WhatIsForex.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Globe, TrendingUp, Clock, Users, Shield, ArrowRight } from "lucide-react";

const WhatIsForex = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const facts = [
    { icon: Globe, title: "World’s Largest Market", text: "$7.5 Trillion traded daily — bigger than all stock markets combined." },
    { icon: TrendingUp, title: "24/5 Trading", text: "Trade anytime from Monday to Friday — perfect for Ghanaian schedules." },
    { icon: Clock, title: "High Liquidity", text: "Buy & sell instantly. No waiting. No stuck trades." },
    { icon: Users, title: "Accessible to All", text: "Start with $10. No office. No degree. Just a phone & internet." },
    { icon: Shield, title: "Two-Way Profits", text: "Make money when prices go up OR down. Double the opportunity." },
  ];

  return (
    <section
      id="what-is-forex"
      className={`py-24 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-mg-black to-mg-charcoal"
          : "bg-gradient-to-b from-mg-light-bg to-mg-paper"
      }`}
    >
      {/* Ghana Flag Stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 shadow-lg z-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            isDark ? "text-mg-gold" : "text-mg-charcoal"
          }`}>
            What is <span className="text-mg-green">Forex?</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
            isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"
          }`}>
            The <span className="text-mg-gold font-bold">global currency market</span> — where Ghanaian traders turn knowledge into real wealth.
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facts.slice(0, 3).map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border backdrop-blur-md text-center shadow-lg ${
                isDark
                  ? "bg-mg-charcoal/80 border-mg-gold/30"
                  : "bg-mg-paper/90 border-mg-gold/20"
              }`}
            >
              <fact.icon size={48} className="mx-auto mb-4 text-mg-gold" />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                {fact.title}
              </h3>
              <p className={`text-sm ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facts.slice(3).map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className={`p-8 rounded-3xl border backdrop-blur-md text-center shadow-lg ${
                isDark
                  ? "bg-mg-charcoal/80 border-mg-gold/30"
                  : "bg-mg-paper/90 border-mg-gold/20"
              }`}
            >
              <fact.icon size={48} className="mx-auto mb-4 text-mg-gold" />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                {fact.title}
              </h3>
              <p className={`text-sm ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#free-pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all"
          >
            Watch Free Forex Guide

            <ArrowRight size={24} />
          </motion.a>
          <p className={`mt-4 text-sm ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}`}>
            Learn the basics in 15 minutes — no cost, no risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsForex;