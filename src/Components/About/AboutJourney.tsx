// src/components/About/AboutJourney.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  GraduationCap,
  Home,
  Laptop,
  Lightbulb,
  Users,
  Star,
  Instagram,
  Youtube,
  Music,
  Send,
  Twitter,
} from "lucide-react";

const AboutJourney = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const timeline = [
    {
      year: "University Days",
      icon: GraduationCap,
      title: "First Touch of Forex",
      desc: "Introduced to charts. No clarity. Just curiosity.",
      quote: "Curiosity became obsession. Obsession became mastery.",
      color: "text-blue-500",
    },
    {
      year: "Post-Graduation",
      icon: Home,
      title: "Locked in a Room",
      desc: "Staring at charts 18 hours a day. Family pressure: 'What are you doing?'",
      quote: "Sometimes isolation is the only way to find illumination.",
      color: "text-red-500",
    },
    {
      year: "The Hustle",
      icon: Laptop,
      title: "Borrowed from Mum",
      desc: "Collected money to trade. Lost it all. But never quit.",
      quote: "You either lose the money or lose the lesson — never both.",
      color: "text-orange-500",
    },
    {
      year: "Breakthrough",
      icon: Lightbulb,
      title: "Sniper Strategy Born",
      desc: "87% win rate system. Built in silence. Tested with fire.",
      quote: "Precision, patience, and purpose — that’s the real edge.",
      color: "text-mg-green",
    },
    {
      year: "2023 – Now",
      icon: Users,
      title: "10,000+ Students",
      desc: "Free PDFs. VIP Signals. Exness Partnership. Ghana tours.",
      quote: "It’s no longer about me — it’s about the next generation of traders.",
      color: "text-mg-gold",
    },
    {
      year: "2025 & Beyond",
      icon: Star,
      title: "National Tours & Seminars",
      desc: "First major forex tour. Webinars. Seminars. 200+ traders. Exness partnership. Ghana-wide impact.",
      quote: "We’re not just trading charts — we’re changing lives.",
      color: "text-purple-500",
    },
  ];

  const socials = [
    { name: "Instagram", href: "https://instagram.com/marketgodacademy", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@marketgodacademy", icon: Youtube },
    { name: "TikTok", href: "https://www.tiktok.com/@marketgodacademy", icon: Music },
    { name: "Telegram", href: "https://t.me/marketgodacademy", icon: Send },
    { name: "X (Twitter)", href: "https://x.com/marketgodacademy", icon: Twitter },
  ];

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-mg-black via-black to-mg-charcoal"
          : "bg-gradient-to-b from-mg-light-bg via-white to-mg-light-bg"
      }`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            From Dorm Room to <span className="text-mg-green">National Stage</span>
          </h2>
          <p className={`text-lg ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Every loss was a lesson. Every win was proof.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mg-gold/50 via-mg-green/50 to-mg-gold/50 rounded-full" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`flex items-center justify-center mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              {/* Card */}
              <div className={`w-full md:w-5/12 p-6 md:p-8 rounded-3xl border backdrop-blur-md shadow-xl ${
                isDark
                  ? "bg-mg-charcoal/50 border-mg-gold/30"
                  : "bg-white/80 border-mg-gold/20"
              }`}>
                <p className={`font-bold text-lg mb-2 ${item.color}`}>{item.year}</p>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                  {item.title}
                </h3>
                <p className={`${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                  {item.desc}
                </p>
                {item.quote && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 italic text-mg-gold/80 text-sm"
                  >
                    “{item.quote}”
                  </motion.p>
                )}
              </div>

              {/* Icon Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 z-10">
                <div className="w-full h-full rounded-full bg-mg-gold/20 border-4 border-mg-gold flex items-center justify-center shadow-lg">
                  <item.icon size={32} className="text-mg-gold" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 rounded-full border-2 border-mg-gold opacity-0"
                  style={{ animation: "pulse 2s infinite" }}
                />
              </div>

              {/* Spacer */}
              <div className="w-full md:w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-mg-gold">
            Your Journey Starts Now
          </h3>
          <p className={`mb-8 text-lg ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Join the <span className="text-mg-green font-bold">MarketGod Academy</span> and start mastering the charts.
          </p>

          {/* CTA Button */}
          <motion.a
            href="/plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-mg-green text-white rounded-full font-bold shadow-lg hover:bg-mg-gold hover:text-mg-charcoal transition-all"
          >
            Enroll Today
            <Star size={20} />
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center gap-6 mt-10"
          >
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 rounded-full border border-mg-gold/30 hover:border-mg-gold/80 bg-white/5 hover:bg-mg-gold/10 backdrop-blur-md transition-all"
              >
                <social.icon size={28} className="text-mg-gold group-hover:text-mg-green transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Pulse Animation */}
      <style >{`
        @keyframes pulse {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default AboutJourney;