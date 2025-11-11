// src/components/HeroCarousel/HeroCarousel.tsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Globe,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const slides = [
  // SLIDE 1: Clean + Mouse Gradient
  {
    id: 1,
      bg: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: (
      <>
        <span className="text-mg-gold">Trade</span> Like a{" "}
        <span className="inline-block bg-gradient-to-r from-mg-gold via-yellow-500 to-[#00c896] bg-clip-text text-transparent">
          MarketGod
        </span>
      </>
    ),
    subtitle: "From Accra to Wall Street",
    desc: (
      <>
        Join <strong>10,000+ African traders</strong> mastering{" "}
        <strong>price action and institutional order flow</strong> — real-time
        signals, proven strategies, and daily market breakdowns, all from Ghana.
      </>
    ),
    ctas: [
      { label: "Join Academy Now", icon: <ArrowRight size={18} />, href: "#plans", primary: true },
      { label: "View Live Signals", icon: <TrendingUp size={18} />, href: "#signals" },
    ],
  },
  // SLIDE 2: Mentorship
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: (
      <>
        Learn From <span className="text-mg-gold">Top African Traders</span>
      </>
    ),
    subtitle: "Real Skills. Real Profits.",
    desc: (
      <>
        Access <strong>premium mentorship, live sessions</strong> and{" "}
        <strong>real-time market analysis</strong> built for African traders.
        Learn how to trade like a pro — not a gambler.
      </>
    ),
    ctas: [
      { label: "Start Learning", icon: <BookOpen size={18} />, href: "#courses", primary: true },
      { label: "Meet Mentors", icon: <GraduationCap size={18} />, href: "#mentors" },
    ],
  },
  // SLIDE 3: Academy
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: (
      <>
        Join the <span className="text-mg-gold">MarketGod Academy</span>
      </>
    ),
    subtitle: "Built For African Traders. Powered By Discipline.",
    desc: (
      <>
        Get lifetime access to strategy vaults, trading psychology sessions,
        and <strong>real-time institutional insights</strong> — all designed to
        help you win consistently.
      </>
    ),
    ctas: [
      { label: "Join Now", icon: <ArrowRight size={18} />, href: "#academy", primary: true },
      { label: "See Pricing", icon: <TrendingUp size={18} />, href: "#plans" },
    ],
  },
];

const HeroCarousel = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const constraintsRef = useRef(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Mouse-following gradient (only on Slide 1)
  useEffect(() => {
    if (index !== 0) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [index]);

  // Live GMT Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString("en-GB", {
    timeZone: "GMT",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Swipe
  const handleDragEnd = (_, info) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (info.offset.x < -threshold) {
      setIndex((prev) => (prev + 1) % slides.length);
    }
    x.set(0);
  };

  const currentSlide = slides[index];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mt-16 ">
      {/* GHANA FLAG STRIPE – ALWAYS VISIBLE */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 z-50 shadow-md" />

      {/* BACKGROUND IMAGE + OVERLAY (Slides 2 & 3) */}
      {currentSlide.bg && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlide.bg})` }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      )}

      {/* MOUSE GRADIENT – ONLY ON SLIDE 1 */}
      {index === 0 && (
        <motion.div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
              ${theme === "light" ? "rgba(212,175,55,0.65)" : "rgba(0,200,150,0.35)"}, 
              ${theme === "light" ? "rgba(255,247,200,0.15)" : "transparent"} 70%)`,
          }}
          animate={{}}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      )}

      {/* SWIPE CONTAINER */}
      <motion.div
        ref={constraintsRef}
        className="relative w-full h-full"
        style={{ cursor: index === 0 ? "grab" : "default" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          onDragEnd={handleDragEnd}
          style={{ x: springX }}
          className="flex w-full h-full items-center justify-center px-6"
        >
          <motion.div className="w-full max-w-6xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Clock Badge */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 text-white text-xs font-bold uppercase tracking-widest">
                  <Globe size={16} />
                  Accra, Ghana • GMT
                  <Clock size={16} className="animate-pulse" />
                  <span className="font-mono">{timeString}</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
                  {currentSlide.title}
                </h1>

                <h3 className="text-2xl md:text-4xl font-semibold text-white/90 drop-shadow">
                  {currentSlide.subtitle}
                </h3>

                <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-white/80 drop-shadow">
                  {currentSlide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  {currentSlide.ctas.map((cta, i) => (
                    <motion.a
                      key={i}
                      href={cta.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-full font-bold uppercase tracking-wide flex items-center gap-3 transition-all shadow-lg backdrop-blur-sm ${
                        cta.primary
                          ? "bg-mg-gold text-mg-black hover:shadow-gold-glow"
                          : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                      }`}
                    >
                      {cta.label}
                      {cta.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Desktop Controls */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 items-center gap-6 z-10">
        <button
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        <div className="flex gap-3">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-mg-gold shadow-gold-glow w-10" : "bg-white/40"
              }`}
              animate={{ scale: i === index ? 1.3 : 1 }}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;