// src/components/About/AboutHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const AboutHero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      {/* === BACKGROUND IMAGE === */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518186287039-1a88e3e2b3a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        }}
      />

      {/* === DARK OVERLAY FOR READABILITY === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* === GHANA FLAG STRIPE === */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 shadow-lg z-50" />

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 drop-shadow-lg">
            The <span className="text-mg-green">MarketGod</span> Story
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            From a <span className="text-mg-gold font-bold">university dorm</span> to 
            <span className="text-mg-gold font-bold"> locked in a room</span> — 
            this is the <span className="text-mg-green">real Ghanaian hustle</span> that built an empire.
          </p>

          {/* Portrait + Quote */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Portrait */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="MarketGod - Eyram Dela"
                className="w-64 h-64 rounded-full object-cover border-8 border-mg-gold shadow-2xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-mg-green text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                Founder & Lead Mentor
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-xl text-left p-8 rounded-3xl border-l-8 border-mg-gold bg-white/10 backdrop-blur-md"
            >
              <p className="text-lg italic mb-4 leading-relaxed text-white drop-shadow">
                "I used to <span className="text-mg-gold font-bold">beg my mother for money</span> to trade. 
                She’d ask: <span className="text-red-400">'What are you doing in that room all day?'</span> 
                Now, I teach <span className="text-mg-green font-bold">10,000+ Ghanaians</span> how to win."
              </p>
              <footer className="text-mg-green font-bold text-right drop-shadow">
                — MarketGod (Eyram Dela)
              </footer>
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;