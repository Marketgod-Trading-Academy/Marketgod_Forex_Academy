// src/Components/Plans/PlansFinalCTA.tsx
import React from "react";
import { motion } from "framer-motion";

const PlansFinalCTA: React.FC = () => {


  const scrollToPlans = () => {
    const el = document.getElementById("pricing-plans");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center py-24 rounded-3xl shadow-2xl px-3 md:mx-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')", // replace with your image path
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 " />

      {/* Content */}
      <div className="relative z-10 text-center text-mg-gold">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
          Ready to Transform Your Forex Journey?
        </h2>
        <p className="text-[1rem] md:text-xl max-w-2xl m-auto mb-8 text-white/90 text-center">
          Join the MarketGod Mentorship and VIP Signals now. Learn, trade, and build
          your trading system with proven strategies.
        </p>
        <button
          onClick={scrollToPlans}
          className="bg-mg-gold text-mg-charcoal px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-mg-gold/50 transition-all"
        >
          View Plans
        </button>
      </div>
    </motion.section>
  );
};

export default PlansFinalCTA;
