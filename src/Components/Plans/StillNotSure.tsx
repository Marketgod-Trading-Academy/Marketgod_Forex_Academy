// src/components/StillNotSurePremium.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const items = [
  {
    title: "You do NOT need prior experience",
    desc: "No charts, no complex apps, no financial jargon. We teach everything from scratch in simple, practical language.",
  },
  {
    title: "You get live support — not just theory",
    desc: "We guide you through each step in real time. Ask questions, get feedback, and never feel stuck.",
  },
  {
    title: "You get a support system + a skill that can change your finances",
    desc: "Gain long-term confidence with a proven strategy and a supportive community behind you.",
  },
  {
    title: "Members get free access to our resources",
    desc: "Get tools, guides, templates, and more — completely free, once you join.",
  },
];

const StillNotSurePremium: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative w-full py-20 md:py-28 overflow-hidden ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      
          {/* Header */}
          <h2 className={`text-4xl md:text-5xl font-black leading-tight text-center mb-5`}>
            <span className={`block ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
              Still Not Sure if This
            </span>
            <span className="block text-mg-green">
              Workshop Is Right for You?
            </span>
          </h2>

      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] ${
            isDark 
              ? "bg-mg-gold/20" 
              : "bg-mg-green/20"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] ${
            isDark 
              ? "bg-mg-green/15" 
              : "bg-mg-gold/15"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-6">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Glow Behind Image */}
          <div className={`absolute inset-0 rounded-3xl blur-[90px] opacity-30 ${
            isDark ? "bg-mg-gold/30" : "bg-mg-green/30"
          }`} />

          <img
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522351/SnapInsta.to_322660411_898835291127050_9203872977349659886_n_bdajly.jpg"
            alt="MarketGod Workshop"
            className={`relative w-full rounded-3xl object-cover shadow-2xl border-2 ${
              isDark 
                ? "border-mg-gold/20 shadow-mg-gold/10" 
                : "border-mg-green/20 shadow-mg-green/10"
            }`}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="space-y-8"
        >
          {/* Description */}
          <p className={`text-lg leading-relaxed ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
            This workshop is designed for <span className="font-bold text-mg-gold">real people</span> — 
            beginners, students, hustlers, and traders who want clarity, structure, and a 
            <span className="font-bold text-mg-green"> proven roadmap</span>. We remove the confusion 
            and give you the <span className="underline decoration-mg-gold">exact steps</span> to trade with confidence.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle 
                  className={`w-7 h-7 shrink-0 ${
                    isDark ? "text-mg-green" : "text-mg-green"
                  }`} 
                />

                <div>
                  <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-mg-charcoal"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StillNotSurePremium;