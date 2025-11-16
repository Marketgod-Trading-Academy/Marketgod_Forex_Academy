// src/Components/About/FinalCTA.tsx

import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const FinalCTA = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const socials = [
    { name: "Twitter", icon: Twitter, link: "https://twitter.com/marketgod" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com/marketgod" },
    { name: "YouTube", icon: Youtube, link: "https://youtube.com/marketgod" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/in/marketgod" },
  ];

  return (
    <section className={`relative py-32 overflow-hidden ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.02)_0%,transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-6xl font-black mb-6 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}
        >
          Your Legacy Starts Here
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`text-xl md:text-2xl mb-12 ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}
        >
          Trade like a <span className="text-mg-green font-bold underline decoration-mg-gold decoration-4">MarketGod</span> and join thousands of successful traders.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/plans"
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,215,0,0.8)" }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-block px-12 py-5 font-bold text-xl text-white rounded-full shadow-2xl transition-all mb-10"
        >
          {/* Rotating Gradient Glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-mg-gold via-yellow-400 to-mg-green blur-xl opacity-60 animate-spin-slow pointer-events-none" />
          <span className="relative z-10">Enroll Now — Claim Your Seat</span>
        </motion.a>

        {/* Founder’s Socials */}
        <div className="flex justify-center items-center gap-6 mt-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${isDark ? "bg-mg-charcoal text-mg-gold" : "bg-white text-mg-green"} transition-all`}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
