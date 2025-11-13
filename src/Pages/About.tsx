// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Traders" },
    { icon: TrendingUp, value: "87%", label: "Win Rate (VIP)" },
    { icon: Award, value: "5 Years", label: "Proven Results" },
    { icon: Globe, value: "Ghana #1", label: "Forex Academy" },
  ];

  const values = [
    { icon: Target, title: "Precision", desc: "Sniper entries. No guesswork." },
    { icon: Zap, title: "Speed", desc: "Real-time signals. Instant action." },
    { icon: Heart, title: "Family", desc: "We trade together. We win together." },
    { icon: Shield, title: "Safety", desc: "Risk-first. Capital protection always." },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* Ghana Flag Wave */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 shadow-lg z-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-6 ${
              isDark ? "text-mg-gold" : "text-mg-charcoal"
            }`}>
              Meet <span className="text-mg-green">MarketGod</span>
            </h1>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto mb-8 ${
              isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"
            }`}>
              From a small room in <span className="text-mg-gold font-bold">Accra</span> to 
              training <span className="text-mg-gold font-bold">10,000+ Ghanaian traders</span> — 
              this is the story of <span className="text-mg-green">discipline, fire, and real wins</span>.
            </p>

            {/* Eyram Dela Portrait + Quote */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Eyram Dela - The MarketGod"
                  className="w-64 h-64 rounded-full object-cover border-8 border-mg-gold shadow-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-mg-green text-white px-6 py-2 rounded-full font-bold text-sm">
                  Founder & Lead Mentor
                </div>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className={`max-w-xl text-left p-8 rounded-3xl border-l-8 border-mg-gold ${
                  isDark ? "bg-mg-charcoal/50" : "bg-mg-paper/80"
                }`}
              >
                <p className={`text-lg italic mb-4 ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
                  "I lost $50,000 in 2019. Then I built the Sniper Strategy. 
                  Now I teach Ghanaians how to <span className="text-mg-gold font-bold">never lose again</span>."
                </p>
                <footer className="text-mg-green font-bold">— Eyram Dela, The MarketGod</footer>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className={`py-12 ${isDark ? "bg-mg-charcoal" : "bg-mg-paper"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={40} className="mx-auto mb-3 text-mg-gold" />
                <p className={`text-3xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${
              isDark ? "text-mg-gold" : "text-mg-charcoal"
            }`}
          >
            Our Journey
          </motion.h2>

          <div className="space-y-12">
            {[
              { year: "2019", title: "The Loss", desc: "Eyram loses $50K. Vows to master the market.", icon: "cross" },
              { year: "2020", title: "Sniper Strategy Born", desc: "87% win rate system created in Accra.", icon: CheckCircle },
              { year: "2021", title: "First 100 Students", desc: "Free PDF goes viral. Community forms.", icon: Users },
              { year: "2023", title: "10,000+ Traders", desc: "Ghana’s #1 Forex Academy. VIP Signals launch.", icon: Star },
              { year: "2025", title: "National Theatre Event", desc: "200+ traders. Exness partnership. History made.", icon: Award },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <p className="text-mg-green font-bold text-lg">{milestone.year}</p>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                    {milestone.title}
                  </h3>
                  <p className={`${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                    {milestone.desc}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-mg-gold/20 border-4 border-mg-gold flex items-center justify-center">
                    {milestone.icon === "cross" ? (
                      <span className="text-4xl text-red-500">cross</span>
                    ) : (
                      <milestone.icon size={36} className="text-mg-gold" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className={`py-20 ${isDark ? "bg-mg-charcoal" : "bg-mg-paper"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${
              isDark ? "text-mg-gold" : "text-mg-charcoal"
            }`}
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-3xl border text-center backdrop-blur-md ${
                  isDark ? "bg-mg-black/50 border-mg-gold/30" : "bg-mg-light-bg/80 border-mg-gold/20"
                }`}
              >
                <value.icon size={48} className="mx-auto mb-4 text-mg-gold" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {value.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className={`text-4xl md:text-6xl font-black mb-6 ${
              isDark ? "text-mg-gold" : "text-mg-charcoal"
            }`}>
              Ready to Trade Like a God?
            </h2>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${
              isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"
            }`}>
              Join 10,000+ Ghanaians who turned knowledge into real wealth.
            </p>
            <motion.a
              href="#plans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Journey
              <ArrowRight size={28} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;