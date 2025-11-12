// Eugene Afriyie UEB3502023
// src/components/Footer/Footer.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Instagram, Twitter, Youtube, Linkedin, MessageCircle, Shield, Globe, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  // Back to Top Button State
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    { Icon: Instagram, href: "https://instagram.com/themarketgod", label: "Instagram" },
    { Icon: Twitter, href: "https://x.com/themarketgod", label: "X (Twitter)" },
    { Icon: Youtube, href: "https://youtube.com/@marketgodacademy", label: "YouTube" },
    { Icon: Linkedin, href: "https://linkedin.com/company/marketgodacademy", label: "LinkedIn" },
  ];

  const links = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    resources: [
      { label: "Courses", href: "#courses" },
      { label: "Mentorship", href: "#mentorship" },
      { label: "VIP Signals", href: "#vip" },
      { label: "Free PDF", href: "/free-pdf" },
    ],
  };

  return (
    <>
      {/* BACK TO TOP BUTTON */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-mg-gold text-mg-charcoal shadow-2xl hover:shadow-gold-glow transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}

      <footer
        className={`relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-t from-mg-black via-mg-charcoal to-mg-charcoal"
            : "bg-gradient-to-t from-mg-paper via-mg-light-bg to-mg-light-bg"
        }`}
      >
        {/* Cinematic Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/logo.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: isDark ? "brightness(0.3) contrast(1.3)" : "brightness(0.8) contrast(1.1)",
          }}
        />

        {/* Golden Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(circle at 80% 80%, rgba(0,200,150,0.08), transparent 60%)"
              : "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(0,200,150,0.12), transparent 60%)",
          }}
        />

        {/* Ghana Flag Stripe */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 opacity-90 shadow-lg z-50" />

        {/* 3D PERSPECTIVE SLOGAN — FAR AWAY, FLOATING */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              perspective: "1000px",
            }}
          >
            <div
              className="text-5xl md:text-9xl lg:text-[12rem] font-black tracking-[0.2em] uppercase select-none"
              style={{
                color: isDark ? "rgba(212, 175, 55, 0.06)" : "rgba(212, 175, 55, 0.1)",
                transform: "translateZ(-600px) rotateX(45deg) scale(0.85)",
                transformStyle: "preserve-3d",
                textShadow: isDark
                  ? "0 0 80px rgba(212,175,55,0.15), 0 0 160px rgba(0,200,150,0.08)"
                  : "0 0 80px rgba(212,175,55,0.2), 0 0 160px rgba(0,200,150,0.12)",
                filter: "blur(1.5px)",
                lineHeight: "1",
                letterSpacing: "0.3em",
              }}
            >
              MarketGod Academy — Built in Ghana. For the World
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="MarketGod Academy"
                  className="w-20 h-20 rounded-full border-4 border-mg-gold shadow-2xl p-1 bg-mg-charcoal"
                />
                <div>
                  <h3 className="text-2xl font-black text-mg-gold tracking-tight">MarketGod</h3>
                  <p className="text-xs text-mg-green font-semibold">ACADEMY</p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                Empowering <span className="text-mg-gold font-bold">African traders</span> with elite mentorship, 
                real-time signals, and battle-tested strategies. From Accra to the world.
              </p>

              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-1 text-xs font-semibold text-mg-green">
                  <Shield size={14} />
                  <span>Regulated Partner</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-mg-gold">
                  <Globe size={14} />
                  <span>2M+ Traders</span>
                </div>
              </div>

              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="group p-3 rounded-full bg-mg-gold/15 backdrop-blur-sm border border-mg-gold/30 hover:bg-mg-gold/30 transition-all duration-300"
                  >
                    <Icon size={18} className="text-mg-gold group-hover:text-mg-green transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* COMPANY */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-lg font-bold mb-5 text-mg-gold tracking-wider">Company</h3>
              <ul className="space-y-3">
                {links.company.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className={`text-sm hover:text-mg-gold transition-all duration-300 flex items-center gap-2 group ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                      <span className="w-1 h-1 bg-mg-green rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RESOURCES */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="text-lg font-bold mb-5 text-mg-gold tracking-wider">Resources</h3>
              <ul className="space-y-3">
                {links.resources.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className={`text-sm hover:text-mg-gold transition-all duration-300 flex items-center gap-2 group ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                      <span className="w-1 h-1 bg-mg-green rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* COMMUNITY & CONTACT */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-mg-gold tracking-wider">Join Our Community</h3>
                <p className={`text-sm mb-5 ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
                  Connect with 10,000+ traders. Get live updates, free tools, and support.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <a href="mailto:support@marketgod.academy" className="flex items-center gap-2 text-mg-paper/70 hover:text-mg-gold transition">
                  <Mail size={16} />
                  support@marketgod.academy
                </a>
                <a href="tel:+233557777777" className="flex items-center gap-2 text-mg-paper/70 hover:text-mg-gold transition">
                  <Phone size={16} />
                  +233 55 777 7777 (WhatsApp)
                </a>
              </div>

              <motion.a
                href="https://t.me/TheMarketGod"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Chat on Telegram Now
              </motion.a>
            </motion.div>
          </div>

          {/* FULL DISCLAIMER + SIGNED BY YOU */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`mt-16 pt-8 border-t ${isDark ? "border-mg-gold/20" : "border-mg-gold/30"} text-xs ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT: Copyright + Disclaimer */}
              <div className="space-y-3 text-center md:text-left">
                <p className="font-semibold text-mg-gold">
                  © {currentYear} MarketGod Academy. All rights reserved.
                </p>

                <p className="leading-relaxed italic">
                  <strong>IMPORTANT RISK DISCLOSURE:</strong> Trading foreign exchange, cryptocurrencies, and contracts for difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts. MarketGod Academy provides educational content and trade signals for informational purposes only. We do not provide investment advice. Past performance is not indicative of future results. All trading involves risk. Only risk capital you’re prepared to lose. You are solely responsible for your trading decisions.
                </p>
              </div>

              {/* RIGHT: Legal Links + Your Signature */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="flex gap-4 text-xs">
                  <a href="#terms" className="hover:text-mg-gold transition">Terms of Service</a>
                  <a href="#privacy" className="hover:text-mg-gold transition">Privacy Policy</a>
                  <a href="#disclaimer" className="hover:text-mg-gold transition">Risk Disclaimer</a>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-mg-green/80 font-semibold">
                    Site proudly crafted & designed by
                  </p>
                  <p className="text-mg-gold font-bold text-sm tracking-wider">
                    Eugene Afriyie
                  </p>
                  <p className="text-xs text-mg-paper/60">
                    Web Developer • Student • Beginner Trader
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;