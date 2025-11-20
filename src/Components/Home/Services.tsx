// src/components/Services/Services.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  UserCheck,
  Signal,
  Presentation,
  Users,
  ArrowRight,
  Zap,
  
} from "lucide-react";
import GhanaFlagStripe from "../Ghana/GhanaFlagStripe";

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

 

  const services = [
    {
      number: "01",
      icon: UserCheck,
      title: "Mentorship Program",
      desc: "Elite 1-on-1 & group coaching with Eyram Dela. From Ghana to institutional mastery — no AI, just discipline.",
      highlights: [
        "Weekly live strategy calls",
        "Psychology & execution training",
        "Personal trade reviews",
      ],
      cta: "Join Mentorship",
      href: "plans/#pricing-plans",
    },
    {
      number: "02",
      icon: Signal,
      title: "VIP Signal Room",
      desc: "High-probability Gold & Forex setups. 87% win rate. Real-time Telegram alerts by human analysts.",
      highlights: [
        "Daily trade ideas",
        "Clear TP/SL levels",
        "London & NY session focus",
      ],
      cta: "Get VIP Signals",
      href: "plans/#signals",
    },
    {
      number: "03",
      icon: Presentation,
      title: "Webinars & Seminars",
      desc: "Live events in Accra, Dubai, London, and online. Trade live with MarketGod — from Ghana to the world.",
      highlights: [
        "Monthly global webinars",
        "Accra in-person summits",
        "Interactive market breakdowns",
      ],
      cta: "View Events",
      href: "#webinars",
    },
    {
      number: "04",
      icon: Users,
      title: "Global Community",
      desc: "Join 10K+ traders from 50+ countries. African-led. Global mindset. Trade, learn, and grow together.",
      highlights: [
        "24/7 Telegram chatrooms",
        "Peer trade discussions",
        "Ghanaian success stories",
      ],
      cta: "Join Community",
      href: "https://t.me/marketgodcommunity",
    },
  ];

  return (
    <section
      id="services"
      className={`relative py-28 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Ghana Flag Stripe */}
  <GhanaFlagStripe />
      {/* Background Particles */}
   

      {/* Animated Rotating Map */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-40 flex justify-center items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 500"
          className="w-[90%] max-w-[1000px]"
        >
          <motion.path
            d="M120 220L200 230L260 200L320 210L390 180L470 190L550 210L610 190L690 200L760 180L830 220L900 200"
            stroke="#FFD700"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M150 220 Q400 100, 600 220 Q800 340, 900 200"
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="4"
            fill="#FFD700"
            initial={{ cx: 150, cy: 220 }}
            animate={{ cx: [150, 600, 900], cy: [220, 180, 200] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto mb-20 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            MarketGod Academy Services
          </span>
        </h2>
        <p className={`mt-6 text-lg md:text-xl  ${isDark
                ? "text-white"
                : "text-gray-800"} leading-relaxed`}>
          Born in <span className="text-yellow-400 font-bold">Ghana</span>. Built for <span className="text-yellow-400 font-bold">the world</span>.  
          The complete ecosystem for traders — learn, earn, and grow with real mentorship and global access.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className={`relative p-8 rounded-3xl border-2 backdrop-blur-2xl transition-all cursor-pointer group overflow-hidden ${
              isDark
                ? "bg-white/5 border-yellow-500/30 hover:border-yellow-500/70"
                : "bg-white/60 border-yellow-400/30 hover:border-yellow-500/60"
            }`}
          >
            {/* Glow Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-yellow-400 via-yellow-600 to-red-500 blur-2xl transition-all duration-700" />

            {/* Number Overlay */}
            <div className="absolute top-6 right-6 text-6xl font-black text-yellow-500/10 select-none">
              {service.number}
            </div>

            {/* Icon */}
            <div className="mb-6 relative z-10">
              <service.icon
                size={48}
                className="text-yellow-500 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 text-yellow-400 relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`text-base leading-relaxed mb-6 relative z-10 ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {service.desc}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-8 relative z-10">
              {service.highlights.map((feat, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <Zap size={16} className="text-yellow-500" /> {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <motion.a
              href={service.href}
              whileHover={{ x: 4 }}
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-yellow-500 text-black hover:shadow-yellow-400/50 transition-all"
            >
              {service.cta} <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Soft Gold Glow Bottom */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[220px]" />
    </section>
  );
};

export default Services;