// src/components/Home/WhyForex.tsx
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { TrendingUp, Globe, Clock, Shield, Zap, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const WhyForex = () => {
  const { theme } = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [stackIndex, setStackIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const controls = useAnimation();

  const reasons: Reason[] = [
    { icon: TrendingUp, title: "Trade 24/5", desc: "Markets open Sunday 10 PM to Friday 10 PM GMT — perfect for African side hustlers." },
    { icon: Globe, title: "Global Access", desc: "Trade USD, EUR, GBP, JPY — from Accra to Tokyo. No limits." },
    { icon: Clock, title: "Flexible Hours", desc: "Morning, midnight, or lunch break — you decide when to trade." },
    { icon: Shield, title: "Low Entry Barrier", desc: "Start with as little as $100 — no degree, no office, no boss." },
    { icon: Zap, title: "High Liquidity", desc: "Over $7.5 trillion traded daily — enter and exit in seconds." },
    { icon: Users, title: "Leverage Power", desc: "Control $10,000 with $100. Smart risk, fast growth." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  useEffect(() => {
    controls.start({
      rotateY: carouselIndex * -60,
      transition: { duration: 1.2, ease: "easeInOut" },
    });
  }, [carouselIndex, controls]);

  const handleDrag = (_: any, info: PanInfo) => setDragX(info.offset.x);
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 80;
    if (info.offset.x < -threshold && stackIndex < reasons.length - 1) setStackIndex(stackIndex + 1);
    else if (info.offset.x > threshold && stackIndex > 0) setStackIndex(stackIndex - 1);
    setDragX(0);
  };

  const isDark = theme === "dark";

  return (
    <section className={`relative overflow-hidden py-24 ${isDark ? "bg-mg-dark-bg" : "bg-mg-light-bg"}`}>
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-mg-gold/5 via-transparent to-mg-gold/5 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-20 items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`text-4xl md:text-6xl font-black leading-tight mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Why <span className="text-mg-gold">Forex Trading</span>?
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-3xl ${isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"}`}>
            The world’s largest financial market — built for freedom, ambition, and opportunity. No office. No boss. Just skill.
          </p>

         <motion.a
  href="#plans"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className={`
    inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider
    transition-all duration-300 shadow-lg
    /* Light mode: Black button → Gold on hover */
    bg-black text-white hover:bg-mg-gold hover:text-black
    /* Dark mode: Gold button → Black on hover (so it POPS) */
    dark:bg-mg-white dark:text-black dark:hover:bg-white dark:hover:text-black
    hover:shadow-gold-glow-lg
  `}
>
  Start Trading Now <TrendingUp size={20} />
</motion.a>
        </motion.div>

        {/* Desktop 3D Carousel */}
        <div className="hidden md:flex justify-center perspective-[1200px]">
          <motion.div
            animate={controls}
            className="relative w-[300px] h-[300px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {reasons.map((reason, i) => {
              const angle = (360 / reasons.length) * i;
              return (
                <motion.div
                  key={i}
                  className={`absolute w-72 h-72 p-8 rounded-2xl border backdrop-blur-md shadow-xl transition-all ${
                    isDark
                      ? "bg-mg-dark-surface/90 border-mg-gold/20 hover:shadow-gold-glow"
                      : "bg-white/90 border-mg-gold/10 hover:shadow-gold-glow-light"
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(420px)`,
                  }}
                >
                  <reason.icon size={48} className="text-mg-gold mb-5 drop-shadow-lg" />
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-mg-white" : "text-black"}`}>
                    {reason.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"}`}>
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Stack Carousel */}
        <div className="md:hidden relative h-[480px] overflow-hidden">
          {reasons.map((reason, i) => {
            const isActive = i === stackIndex;
            const offset = i - stackIndex;
            const zIndex = reasons.length - Math.abs(offset);

            return (
              <motion.div
                key={i}
                drag="x"
                dragConstraints={{ left: -300, right: 300 }}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                animate={{
                  x: isActive ? dragX : offset * 30,
                  scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ zIndex }}
                className={`absolute inset-x-4 top-8 h-full p-8 rounded-2xl border shadow-2xl backdrop-blur-sm ${
                  isDark
                    ? "bg-mg-dark-surface/95 border-mg-gold/30"
                    : "bg-white/95 border-mg-gold/20"
                }`}
              >
                <reason.icon size={48} className="text-mg-gold mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-mg-gold" : "text-black"}`}>
                  {reason.title}
                </h3>
                <p className={`text-base leading-relaxed ${isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"}`}>
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {reasons.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === stackIndex ? "bg-mg-gold w-8" : "bg-white/40 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForex;