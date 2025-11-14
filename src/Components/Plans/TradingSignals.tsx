// src/Components/Plans/TradingSignals.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const slides = [
  {
    title: "Discipline Over Emotion",
    time: "00:11",
    desc: "Mastering trading requires more than just strategies; it demands self-discipline and a structured approach. Transitioning from being a gambler to a trader is essential for success.",
  },
  {
    title: "Simplify Your Approach",
    time: "02:05",
    desc: "Implementing a single strategy and focusing on one trading pair creates clarity. This reduces confusion and enhances precision in trading decisions.",
  },
  {
    title: "Self-Mastery & Patience",
    time: "03:40",
    desc: "A trader must first fix their mindset before expecting a strategy to yield positive results. Emotional control and patience are key for consistent success.",
  },
];

const TradingSignals: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-24 ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Key Trading Lessons
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Insights from real trading experience that turn repeated losses into a clear, profitable path.
          </p>
        </motion.div>

        {/* SWIPER CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 md:p-8 rounded-3xl border shadow-xl ${
                  isDark ? "bg-mg-charcoal/50 border-mg-gold/30" : "bg-white/80 border-mg-gold/20"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {slide.title}
                </h3>
                <span className={`text-sm mb-4 block ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}`}>
                  {slide.time}
                </span>
                <p className={`text-base ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
                  {slide.desc}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TradingSignals;
