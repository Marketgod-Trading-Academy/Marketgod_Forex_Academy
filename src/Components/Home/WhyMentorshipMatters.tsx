// src/components/WhyMentorshipMatters/WhyMentorshipMatters.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Brain, Users, Target, Zap, ArrowRight } from "lucide-react";

const WhyMentorshipMatters = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const points = [
    { icon: Target, title: "Clarity", text: "Understand market structure, not just signals." },
    { icon: Zap, title: "Speed", text: "Learn in months what takes most traders years." },
    { icon: Brain, title: "Discipline", text: "Build consistency and master emotional control." },
    { icon: Users, title: "Community", text: "Grow with traders who push you forward." },
  ];

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-700 ${
        isDark
          ? "bg-gradient-to-b from-mg-black to-mg-charcoal"
          : "bg-gradient-to-b from-mg-light-bg to-mg-paper"
      }`}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle at 70% 30%, rgba(0,200,150,0.3), transparent 70%)"
            : "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.25), transparent 70%)",
        }}
      />

      {/* Ghana flag accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522350/SnapInsta.to_475855951_18485769310003421_2639630250731726422_n_ov7o6i.jpg"
            alt="MarketGod Mentorship"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>

        {/* RIGHT: Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight text-mg-gold"
          >
            Why <span className="text-mg-green">Mentorship</span> Matters
          </motion.h2>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg md:text-xl mb-10 ${
              isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"
            }`}
          >
            Trading alone costs you time, money, and confidence. Mentorship gives you
            direction — the kind that turns confusion into clarity and losses into lessons.
          </motion.p>

          {/* MOBILE: Numbered Stacked Cards */}
          <div className="block lg:hidden space-y-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm shadow-md ${
                  isDark
                    ? "bg-mg-charcoal/80 border-mg-gold/30"
                    : "bg-mg-paper/90 border-mg-gold/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* NUMBER CIRCLE */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${
                      isDark
                        ? "bg-mg-green text-mg-black"
                        : "bg-mg-gold text-mg-charcoal"
                    }`}
                  >
                    {i + 1}
                  </div>

                  {/* ICON + CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${isDark ? "bg-mg-green/20" : "bg-mg-gold/20"}`}>
                        <p.icon size={22} className={isDark ? "text-mg-green" : "text-mg-gold"} />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                        {p.title}
                      </h3>
                    </div>
                    <p className={`text-sm ${isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"}`}>
                      {p.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP: 2x2 Grid with Numbers */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`p-5 rounded-2xl border backdrop-blur-sm transition-all cursor-pointer shadow-md ${
                  isDark
                    ? "bg-mg-charcoal/80 border-mg-gold/30 hover:shadow-gold-glow"
                    : "bg-mg-paper/90 border-mg-gold/20 hover:shadow-gold-glow-light"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* NUMBER */}
                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-full font-bold text-base ${
                      isDark
                        ? "bg-mg-green text-mg-black"
                        : "bg-mg-gold text-mg-charcoal"
                    }`}
                  >
                    {i + 1}
                  </div>

                  {/* ICON */}
                  <div className={`p-2 rounded-lg ${isDark ? "bg-mg-green/20" : "bg-mg-gold/20"}`}>
                    <p.icon size={24} className={isDark ? "text-mg-green" : "text-mg-gold"} />
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-1 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {p.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"}`}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#mentorship"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wide shadow-lg hover:shadow-gold-glow-light transition-all mt-8"
          >
            Start Your Mentorship Journey
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WhyMentorshipMatters;