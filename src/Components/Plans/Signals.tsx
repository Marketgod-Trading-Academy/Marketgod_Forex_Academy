// src/Components/Plans/SignalsPackages.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Signal } from "lucide-react";

const packages = [
  {
    number: "01",
    title: "Gold Inner Circle",
    subtitle: "Master the Sniper Strategy",
    desc: "Full mentorship package with exclusive strategies, live trade execution, and risk management guidance.",
    features: ["Gold Strategy", "All Currency Strategy", "Market Structure", "Risk Management & Psychology", "1 Year Access to Mentorship", "Free VIP Signals"],
    icon: Signal,
    cta: "Join Now",
    href: "#gold",
    popular: true,
    badge: "Limited",
  },
  {
    number: "03",
    title: "VIP Signals",
    subtitle: "Trade Like MarketGod",
    desc: "Real-time, high-probability signals delivered straight to your phone. Follow expert moves while building your own edge.",
    features: ["87% Win Rate Signals", "Instant Telegram Alerts", "Entry/Exit Breakdowns", "24/7 Support"],
    icon: Signal,
    cta: "Get VIP Access",
    href: "#vip",
    popular: false,
    badge: "High Demand",
  },
];

const SignalsPackages = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-24 ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Choose Your Package
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Whether you want full mentorship or just the signals, we’ve got you covered.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative p-8 md:p-10 rounded-3xl border backdrop-blur-md shadow-2xl hover:shadow-2xl transition-transform hover:scale-105 ${
                isDark 
                  ? "bg-mg-charcoal/50 border-mg-gold/30" 
                  : "bg-white/90 border-mg-gold/20"
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white font-bold text-sm shadow-lg ${
                pkg.popular ? "bg-mg-green" : "bg-mg-gold"
              }`}>
                {pkg.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-mg-gold to-mg-green p-4 flex items-center justify-center mb-4`}>
                <pkg.icon size={32} className="text-white" />
              </div>

              {/* Title & Subtitle */}
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>{pkg.title}</h3>
              <p className={`text-lg font-semibold mb-4 ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>{pkg.subtitle}</p>

              {/* Description */}
              <p className={`text-base md:text-lg mb-6 ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>{pkg.desc}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-mg-green font-bold">✔</span>
                    <span className={isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={pkg.href}
                className="inline-block w-full text-center bg-mg-green text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-mg-gold hover:shadow-mg-gold/40 transition-all"
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignalsPackages;
