// Eugene Afriyie UEB3502023
// src/components/HeroCarousel/HeroCarousel.tsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import type { PanInfo } from "framer-motion";
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
import GhanaFlagStripe from "../Ghana/GhanaFlagStripe";

interface CTA {
  label: string;
  icon: React.ReactNode;
  href: string;
  primary?: boolean;
}

interface Slide {
  id: number;
  bg?: string;
  title: React.ReactNode;
  subtitle: string;
  desc: React.ReactNode;
  ctas: CTA[];
}

const slides: Slide[] = [
  {
    id: 1,
    bg: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522350/SnapInsta.to_285991748_3240193386223050_1023995396682830775_n_j2rm79.jpg",
    title: (
      <>
        Learn to Trade <span className="text-mg-gold">Professionally</span>
      </>
    ),
    subtitle: "Structured Mentorship. Practical Skills.",
    desc: (
      <>
        Gain access to clear, actionable strategies and guidance from experienced traders. Build consistent trading skills through practical lessons and structured mentorship.
      </>
    ),
    ctas: [
      { label: "Start Learning", icon: <BookOpen size={18} />, href: "plans#pricing-plans", primary: true },
      { label: "View Programs", icon: <TrendingUp size={18} />, href: "/programs" },
    ],
  },
  {
    id: 2,
    bg: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522351/SnapInsta.to_476509192_18486717382003421_4782699282482123506_n_llwtyx.jpg",
    title: (
      <>
        Global Trading <span className="text-mg-gold">Mentorship</span>
      </>
    ),
    subtitle: "Learn from professionals worldwide",
    desc: (
      <>
        Access mentorship from top traders with proven experience. Develop a professional approach to trading and decision-making without the guesswork.
      </>
    ),
    ctas: [
      { label: "Join Mentorship", icon: <GraduationCap size={18} />, href: "plans#pricing-plans", primary: true },
      { label: "Meet Mentors", icon: <BookOpen size={18} />, href: "/mentors" },
    ],
  },
  {
    id: 3,
    bg: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522350/SnapInsta.to_475855951_18485769310003421_2639630250731726422_n_ov7o6i.jpg",
    title: (
      <>
        Build <span className="text-mg-gold">Consistent Skills</span>
      </>
    ),
    subtitle: "Professional trading, clear guidance",
    desc: (
      <>
        Learn methods backed by data and real-market practice. Focus on skill-building, critical thinking, and practical strategies that work globally.
      </>
    ),
    ctas: [
      { label: "Enroll Now", icon: <ArrowRight size={18} />, href: "/plans/#pricing-plans", primary: true },
      { label: "See Courses", icon: <TrendingUp size={18} />, href: "/courses" },
    ],
  },
];


const HeroCarousel = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const constraintsRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <GhanaFlagStripe />

      {currentSlide.bg && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlide.bg})` }}
          />
          <div className="absolute inset-0 bg-black/75" />
        </>
      )}

      {index === 0 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(212,175,55,0.45), transparent 70%)`,
          }}
        />
      )}

      <motion.div
        ref={constraintsRef}
        className="relative w-full h-full"
        style={{ cursor: index === 0 ? "grab" : "default" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div drag="x" dragConstraints={constraintsRef} onDragEnd={handleDragEnd} style={{ x: springX }} className="flex w-full h-full items-center justify-center px-6">
          <motion.div className="w-full max-w-6xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5 text-white text-xs font-bold uppercase tracking-widest">
                  <Globe size={16} />
                  Accra, Ghana • GMT
                  <Clock size={16} className="animate-pulse" />
                  <span className="font-mono">{timeString}</span>
                </div>

                <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
                  {currentSlide.title}
                </h1>

                <h3 className="text-xl md:text-4xl font-semibold text-white/90 drop-shadow">
                  {currentSlide.subtitle}
                </h3>

                <p className="max-w-3xl mx-auto text-[1rem] md:text-xl leading-relaxed text-white/80 drop-shadow">
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

      {/* Navigation */}
      <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2 items-center gap-6 z-10 mb-1">
        <button
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30"
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
          className="hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30"
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
