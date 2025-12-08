// src/Components/Plans/SniperMentorship.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const features = [
  "Gold Strategy",
  "All Currency Strategy",
  "Market Structure",
  "Risk Management & Psychology",
  "1 Year Access to Mentorship",
  "Free Access to VIP Signals",
];

const PricingPlans = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const glowX = useTransform(x, [-50, 50], [-20, 20]);
  const glowY = useTransform(y, [-50, 50], [-20, 20]);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-black text-mg-black dark:text-mg-white"
        >
          Sniper Mentorship
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center max-w-2xl mx-auto mt-4 text-lg ${
            isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"
          }`}
        >
          Unlock the full Sniper Mentorship and gain access to my proven strategies, VIP signals, and one year of guided mentorship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center gap-12"
        >
          {/* IMAGE LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/plans/mentorship-flyer.png"
                alt="Sniper Mentorship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* CONTENT RIGHT WITH 3D TILT */}
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const px = e.clientX - rect.left - rect.width / 2;
              const py = e.clientY - rect.top - rect.height / 2;
              x.set(px / 10);
              y.set(py / 10);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative bg-white/10 dark:bg-mg-charcoal/40 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-mg-gold/30 shadow-[0_0_35px_rgba(255,215,0,0.25)] cursor-pointer"
          >
            {/* LIMITED TAG */}
           {/* LIMITED TAG */}
<motion.div
  initial={{ scale: 1 }}
  whileHover={{ scale: 1.1 }}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
  className="absolute top-4 right-4 bg-mg-gold text-black font-bold px-4 py-1 rounded-full text-sm z-20 shadow-lg"
>
  LIMITED
</motion.div>


            {/* GLOW */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mg-gold/20 via-mg-gold/10 to-transparent opacity-60 blur-3xl pointer-events-none"
            />

            <h3 className={`text-3xl md:text-4xl font-black ${isDark ? "text-white" : "text-mg-black"}`}>
              Sniper Mentorship
            </h3>

            <div className="mt-6 flex items-baseline gap-3 relative z-10">
              <span className="text-4xl font-black text-mg-gold">$547</span>
              <span className={`text-2xl font-bold line-through ${isDark ? "text-mg-paper/40" : "text-mg-charcoal/40"}`}>
                $1247
              </span>
            </div>

            <ul className="mt-8 space-y-4 relative z-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-mg-gold" />
                  <span className={`${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.5)" }}
          whileTap={{ scale: 0.95 }}
              href="https://t.me/paymarketgodbot"
              target="_blank"
              className="block text-center mt-10 py-4 rounded-full font-bold bg-black text-mg-white dark:bg-mg-white dark:text-black hover:brightness-110 transition-all relative z-10 shadow-lg "
            >
              Join Sniper Mentorship
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
