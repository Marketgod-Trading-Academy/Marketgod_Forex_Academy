// Eugene Afriyie UEB3502023
// src/components/Testimonials/Testimonials.tsx
import  { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Star,  TrendingUp, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Pro Trader, Accra",
      text: "Started with $200. Now trading $5K+ monthly. MarketGod’s Sniper Strategy + mentorship changed my life.",
      rating: 5,
      profit: "+1,200%",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Abena Mensah",
      role: "VIP Member, Kumasi",
      text: "87% win rate isn’t a joke. VIP signals pay for themselves. I quit my 9-5 after 6 months.",
      rating: 5,
      profit: "+890%",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Kofi Boateng",
      role: "Group Mentee, Takoradi",
      text: "Group mentorship is gold. We trade live, review together, and grow as a family.",
      rating: 5,
      profit: "+650%",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Akosua Osei",
      role: "Beginner → Pro, Tamale",
      text: "Free PDF got me in. Pro mentorship got me out of losses. Now I teach my brother.",
      rating: 5,
      profit: "+420%",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Nana Yaw",
      role: "Full-Time Trader, Cape Coast",
      text: "From zero to hero in 8 months. MarketGod gave me clarity, discipline, and real profits.",
      rating: 5,
      profit: "+980%",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  ];

  // Duplicate for seamless loop
  const duplicated = [...testimonials, ...testimonials];

  useEffect(() => {
    if (isPaused) return;

    const duration = 45; // seconds for full scroll
    const start = async () => {
      await controls.start({
        x: -containerRef.current!.scrollWidth / 2,
        transition: {
          x: {
            duration,
            ease: "linear",
            repeat: Infinity,
          },
        },
      });
    };
    start();
  }, [controls, isPaused]);

  return (
    <section
      id="testimonials"
      className={`py-20 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-mg-charcoal to-mg-black"
          : "bg-gradient-to-b from-mg-paper to-mg-light-bg"
      }`}
    >
      {/* Ghana Flag Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 shadow-lg z-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            isDark ? "text-mg-gold" : "text-mg-charcoal"
          }`}>
            Real Traders. <span className="text-mg-green">Real Wins.</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"
          }`}>
            <span className="text-mg-gold font-bold">10,000+</span> Ghanaian traders winning daily.
          </p>
        </motion.div>

        {/* Auto-Scrolling Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div
            ref={containerRef}
            style={{ x }}
            animate={controls}
            className="flex gap-6 py-4"
          >
            {duplicated.map((t, i) => (
              <motion.div
                key={i}
                className={`flex-shrink-0 w-80 p-6 rounded-3xl border backdrop-blur-xl shadow-xl transition-all ${
                  isDark
                    ? "bg-mg-charcoal/80 border-mg-gold/40"
                    : "bg-mg-paper/95 border-mg-gold/30"
                }`}
                whileHover={{ scale: 1.03 }}
              >
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-mg-gold shadow-md"
                  />
                  <div>
                    <h3 className={`font-bold ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                      {t.name}
                    </h3>
                    <p className="text-xs text-mg-green">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-mg-gold text-mg-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"
                }`}>
                  "{t.text}"
                </p>

                {/* Profit Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-mg-green/20 text-mg-green rounded-full text-sm font-bold">
                  <TrendingUp size={16} />
                  {t.profit} Profit
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://t.me/marketgodcommunity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all"
          >
            Join 10,000+ Winners Today
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;