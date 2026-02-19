import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const tourDates = [
  { city: "Ho", date: "21 Feb" },
  { city: "Takoradi", date: "7 Mar" },
  { city: "Kumasi", date: "21 Mar" },
  { city: "Tamale", date: "28 Mar" },
  { city: "Koforidua", date: "11 Apr" },
  { city: "Techiman", date: "25 Apr" },
];

export default function EventPreHeader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className="w-full bg-mg-blue-dark py-3 px-4 shadow-lg flex justify-center overflow-hidden relative z-[60]"
    >
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">

        {/* Marketgod 2026 Tour Badge */}
        <div className="flex items-center gap-2">
          <div className="bg-mg-gold text-mg-black font-bold text-xs sm:text-sm px-3 py-1 rounded-full shadow-gold-glow uppercase">
            Marketgod 2026 Tour
          </div>
        </div>

        {/* Tagline */}
        <div className="text-xs sm:text-sm text-mg-white italic whitespace-nowrap flex-1 text-center sm:text-left">
          Next up: Serious traders will level up 🚀
        </div>

        {/* Auto-scrolling tour dates */}
        <div className="relative flex-1 overflow-hidden min-h-[40px] sm:min-h-[30px]">
          <motion.div
            className="flex gap-3 whitespace-normal sm:whitespace-nowrap sm:absolute"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {tourDates.concat(tourDates).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 border border-mg-gold rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-mg-white shadow-gold-glow hover:scale-105 hover:shadow-gold-glow-lg transition-all duration-300"
              >
                {item.city} — {item.date}
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <motion.a
            href="/plans" // Link to your plans or join page
            className="relative overflow-hidden px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold uppercase tracking-wide text-xs sm:text-sm flex items-center justify-center shadow-lg bg-mg-gold text-mg-black"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
            <motion.div
              className="absolute inset-0 bg-mg-gold/50"
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
