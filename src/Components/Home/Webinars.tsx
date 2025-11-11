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
      desc: "Live breakdown of current market setups, Q&A, and Sniper Strategy demo. Perfect for Ghana evenings.",
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
      desc: "Half-day interactive session with group trading simulations and 1-on-1 feedback. Limited to 100 spots.",
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
      desc: "We host powerful in-person trading days in Accra from time to time. Live trading, networking, and free lunch. Next date announced soon.",
      topics: ["Live market execution", "Trader meetups", "Strategy reviews"],
      price: "Free",
      join: "Get Notified",
      href: "#", // Triggers popup
      icon: MapPin,
      triggerPopup: true,
    },
  ];

  const socials = [
    { name: "Telegram", icon: Send, link: "https://t.me/TheMarketGod", color: "bg-blue-500" },
    { name: "Facebook", icon: Globe, link: "https://facebook.com/MarketGodAcademy", color: "bg-blue-600" },
    { name: "Instagram", icon: Globe, link: "https://instagram.com/themarketgod", color: "bg-pink-500" },
  ];

  return (
    <>
      <section id="webinars" className="py-20 relative overflow-hidden">
        {/* Ghana Flag Stripe */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-80 z-50 shadow-md" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
              theme === "light" ? "text-mg-light-text" : "text-mg-gold"
            }`}>
              Webinars & <span className="text-mg-gold">Seminars</span>
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
            }`}>
              Live sessions with Eyram Dela. Hands-on trading. Ghana time. No AI — just real mastery.
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
                    ? "bg-white/90 border-mg-gold/30 shadow-xl"
                    : "bg-mg-dark-bg/90 border-mg-gold/40 shadow-2xl"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <event.icon size={24} className="text-mg-gold" />
                  <span className={`text-sm font-bold uppercase ${
                    theme === "light" ? "text-mg-light-text" : "text-mg-gold"
                  }`}>
                    {event.type}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${
                  theme === "light" ? "text-mg-light-text" : "text-mg-gold"
                }`}>
                  {event.title}
                </h3>

                <p className={`text-base leading-relaxed mb-2 ${
                  theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
                }`}>
                  {event.date}
                </p>

                <p className={`text-base leading-relaxed mb-4 ${
                  theme === "light" ? "text-mg-light-text" : "text-mg-dark-text"
                }`}>
                  {event.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <p className={`text-sm uppercase tracking-wider text-mg-gold`}>
                    Topics:
                  </p>
                  <ul className={`text-sm space-y-1 ${
                    theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
                  }`}>
                    {event.topics.map((topic, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Zap size={12} className="text-mg-gold" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className={`text-xl font-bold ${
                    theme === "light" ? "text-mg-light-text" : "text-mg-gold"
                  }`}>
                    {event.price}
                  </div>
                  <p className={`text-sm ${
                    theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
                  }`}>
                    {event.join}
                  </p>
                </div>

                <motion.button
                  onClick={() => event.triggerPopup && setShowPopup(true)}
                  href={event.href}
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-all w-full justify-center ${
                    event.price === "Free"
                      ? "bg-mg-gold text-mg-black"
                      : "border-2 border-mg-gold text-mg-gold hover:bg-mg-gold/10"
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-mg-gold text-mg-black rounded-full font-bold uppercase tracking-wider shadow-xl"
            >
              Stay Updated on Events
              <Calendar size={24} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* NO EVENTS POPUP */}
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
              className={`relative max-w-lg w-full p-8 rounded-3xl shadow-2xl ${
                theme === "light"
                  ? "bg-white border-2 border-mg-gold/30"
                  : "bg-mg-dark-bg border-2 border-mg-gold/50"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                <X size={20} className="text-mg-gold" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-mg-gold/10 rounded-full">
                  <Calendar size={48} className="text-mg-gold" />
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-black text-center mb-4 ${
                theme === "light" ? "text-mg-light-text" : "text-mg-gold"
              }`}>
                No Events Right Now
              </h3>

              {/* Message */}
              <p className={`text-center mb-8 leading-relaxed ${
                theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
              }`}>
                We currently don’t have any upcoming physical seminars. 
                But don’t worry — we host them <span className="text-mg-gold font-bold">from time to time</span> in Accra!
              </p>

              {/* Socials */}
              <div className="space-y-3">
                <p className={`text-center font-bold uppercase tracking-wider text-mg-gold mb-4`}>
                  Stay Updated — Join Us:
                </p>
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                      theme === "light"
                        ? "bg-white/80 border-mg-gold/20 hover:bg-mg-gold/10"
                        : "bg-mg-dark-bg/80 border-mg-gold/30 hover:bg-mg-gold/20"
                    }`}
                  >
                    <social.icon size={24} className="text-white" />
                    <span className={`font-bold ${theme === "light" ? "text-mg-light-text" : "text-mg-gold"}`}>
                      {social.name}
                    </span>
                    <ArrowRight size={18} className="text-mg-gold" />
                  </motion.a>
                ))}
              </div>

              {/* Final Note */}
              <p className={`text-center text-xs mt-6 italic ${
                theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
              }`}>
                Next Accra event announced on Telegram first.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Webinars;