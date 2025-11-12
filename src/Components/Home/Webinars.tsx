// src/components/Webinars/Webinars.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Calendar, Video, MapPin, X, ArrowRight, Send, Globe, Zap } from "lucide-react";

const Webinars = () => {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const events = [
    {
      type: "Free Weekly Webinar",
      title: "Price Action Mastery",
      date: "Every Thursday, 7 PM GMT",
      desc: "Live breakdown of market setups, Q&A, and Sniper Strategy demo. Perfect for Ghana evenings.",
      topics: ["Price action entries", "Risk management", "Live trade analysis"],
      price: "Free",
      join: "Register via Telegram",
      href: "/webinars",
      icon: Video,
    },
    {
      type: "Sniper Seminar",
      title: "Sniper MarketGod Strategy Workshop",
      date: "Dec 15, 2025 – 9 AM GMT (Virtual)",
      desc: "Half-day interactive session with live trading simulations and 1-on-1 feedback. Limited to 100 spots.",
      topics: ["Building trading systems", "Psychology mastery", "Ghana case studies"],
      price: "$67 (Early Bird)",
      join: "Book on WhatsApp",
      href: "/seminars",
      icon: Calendar,
    },
    {
      type: "Free Physical Seminar",
      title: "Accra Live Trading Day",
      date: "Occasional In-Person Events (Accra)",
      desc: "We host powerful in-person trading days in Accra — live trading, networking, and free lunch.",
      topics: ["Live market execution", "Trader meetups", "Strategy reviews"],
      price: "Free",
      join: "Get Notified",
      href: "#",
      icon: MapPin,
      triggerPopup: true,
    },
  ];

  const socials = [
    { name: "Telegram", icon: Send, link: "https://t.me/TheMarketGod" },
    { name: "Facebook", icon: Globe, link: "https://facebook.com/MarketGodAcademy" },
    { name: "Instagram", icon: Globe, link: "https://instagram.com/themarketgod" },
  ];

  return (
    <>
      {/* 🌅 Background Section */}
      <section
        id="webinars"
        className="relative py-24 overflow-hidden"
      >
        {/* 🖼️ Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/webinars-bg.jpg')", // Add your image in /public/images/webinars-bg.jpg
          }}
        />

        {/* 🔮 Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />

        {/* 🌍 Animated Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.08),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.08),transparent_70%)] animate-pulse-slow" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-yellow-400 drop-shadow-lg">
              Webinars & <span className="text-yellow-600">Seminars</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              Live sessions with Eyram Dela. Hands-on trading. Ghana time.  
              <span className="text-yellow-400 font-semibold"> No AI — just mastery.</span>
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-3xl border backdrop-blur-md transition-all ${
                  theme === "light"
                    ? "bg-white/90 border-yellow-400/30 shadow-xl"
                    : "bg-black/70 border-yellow-500/40 shadow-2xl"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <event.icon size={26} className="text-mg-gold" />
                  <span className="text-sm font-bold uppercase text-mg-gold">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-yellow-500">
                  {event.title}
                </h3>
                <p className={`text-base mb-2 text-black   ${
                  theme === "light"
                    ? "text-black/90 border-yellow-400/30 "
                    : "text-white/70 "}`}>{event.date}</p>
                <p className={`text-base mb-4 ${
                  theme === "light"
                    ? "text-black/90 border-yellow-400/30 "
                    : "text-white/70 "}`}>{event.desc}</p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm uppercase tracking-wider text-yellow-500">Topics:</p>
                  <ul className={`text-sm ${
                  theme === "light"
                    ? "text-black/90 border-yellow-400/30 "
                    : "text-white/70 "} space-y-1`}>
                    {event.topics.map((topic, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Zap size={12} className="text-yellow-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="text-xl font-bold text-yellow-500">{event.price}</div>
                  <p className={`text-sm ${
                  theme === "light"
                    ? "text-black/90 border-yellow-400/30 shadow-xl"
                    : "text-white/70"}`}>{event.join}</p>
                </div>

                <motion.button
                  onClick={() => event.triggerPopup && setShowPopup(true)}
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-all w-full justify-center ${
                    event.price === "Free"
                      ? "bg-yellow-500 text-black"
                      : "border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                  }`}
                >
                  {event.price === "Free" ? "Register Free" : "Book Now"}
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.a
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-yellow-500 text-black rounded-full font-bold uppercase tracking-wider shadow-xl"
            >
              Stay Updated on Events
              <Calendar size={24} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-lg w-full p-8 rounded-3xl shadow-2xl bg-black/80 border-2 border-yellow-500/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                <X size={20} className="text-yellow-400" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="p-4 bg-yellow-400/10 rounded-full">
                  <Calendar size={48} className="text-yellow-400" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-center mb-4 text-yellow-300">
                No Events Right Now
              </h3>

              <p className="text-center mb-8 leading-relaxed text-gray-400">
                We currently don’t have upcoming physical seminars.  
                Follow us to be notified when the next one drops in{" "}
                <span className="text-yellow-400 font-bold">Accra</span>.
              </p>

              <div className="space-y-3">
                <p className="text-center font-bold uppercase tracking-wider text-yellow-400 mb-4">
                  Stay Updated — Join Us:
                </p>
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center justify-center gap-3 p-4 rounded-xl border border-yellow-500/30 bg-black/60 hover:bg-yellow-500/10 transition-all"
                  >
                    <social.icon size={24} className="text-yellow-400" />
                    <span className="font-bold text-yellow-300">{social.name}</span>
                    <ArrowRight size={18} className="text-yellow-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Webinars;
