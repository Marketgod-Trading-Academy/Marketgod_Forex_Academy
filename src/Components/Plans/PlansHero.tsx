// src/Components/Plans/PlansHeroCarousel.tsx

import { useTheme } from "../../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ← FIXED
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Choose Your Path to Mastery",
    subtitle: "Unlock the MarketGod Method. Access VIP mentorship and start trading like a pro today.",
    bgImage: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    cta1: { text: "View Plans", link: "#plans", primary: true },
    cta2: { text: "Why This Course", link: "#why-this-course", primary: false },
  },
  {
    title: "VIP Signals Included",
    subtitle: "Get real-time trading signals delivered directly to you. Trade alongside MarketGod and stay ahead of the market.",
    bgImage: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    cta1: { text: "Join VIP Signals", link: "#plans", primary: true },
    cta2: { text: "Learn More", link: "#why-this-course", primary: false },
  },
  {
    title: "Your Trading Journey Starts Here",
    subtitle: "Select the plan that fits your goals and take the first step toward financial freedom.",
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    cta1: { text: "Get Started", link: "#plans", primary: true },
    cta2: { text: "Watch Video", link: "#why-this-course", primary: false },
  },
];

const PlansHeroCarousel: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-mg-black" : "bg-mg-light-bg"} py-16 md:py-20`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        grabCursor={true}
        breakpoints={{
          0: { allowTouchMove: true },
          768: { allowTouchMove: false },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="relative h-[320px] md:h-[400px] flex items-center justify-center text-center px-6 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.03,
                transition: { type: "spring", stiffness: 50, damping: 10 },
              }}
              initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 rounded-2xl" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className={`text-3xl md:text-4xl font-black mb-4 tracking-tight ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {slide.title}
                </h1>
                <p className={`text-base md:text-lg mb-6 ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <a
                    href={slide.cta1.link}
                    className={`inline-block px-6 py-2 rounded-full font-bold shadow transition-all ${
                      slide.cta1.primary
                        ? "bg-mg-green text-white hover:bg-mg-gold hover:shadow-mg-gold/40"
                        : "bg-transparent border-2 border-mg-green text-mg-green hover:bg-mg-green hover:text-white"
                    }`}
                  >
                    {slide.cta1.text}
                  </a>
                  <a
                    href={slide.cta2.link}
                    className={`inline-block px-6 py-2 rounded-full font-bold shadow transition-all ${
                      slide.cta2.primary
                        ? "bg-mg-green text-white hover:bg-mg-gold hover:shadow-mg-gold/40"
                        : "bg-transparent border-2 border-mg-green text-mg-green hover:bg-mg-green hover:text-white"
                    }`}
                  >
                    {slide.cta2.text}
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PlansHeroCarousel;
