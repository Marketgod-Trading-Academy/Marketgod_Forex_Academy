// src/components/Services/Services.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { UserCheck, Users, Signal, BookOpen, ArrowRight, Zap, Crown } from "lucide-react";
import GhanaFlagStripe from "../Ghana/GhanaFlagStripe";

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const services = [
    {
      number: "01",
      title: "One-on-One Mentorship",
      subtitle: "Pro Trader",
      desc: "Private, personalized training with MarketGod. Tailored to your level, pace, and goals. Direct access to mastery.",
      features: ["1:1 Strategy Sessions", "Custom Trading Plan", "Daily Feedback", "Lifetime Support"],
      icon: UserCheck,
      cta: "Apply for Pro",
      href: "#pro",
      popular: true,
      badge: "Most Exclusive",
    },
    {
      number: "02",
      title: "Group Mentorship",
      subtitle: "Learn Together",
      desc: "Join a small, supportive community of traders. Interactive sessions, live trades, and shared growth — all guided by MarketGod.",
      features: ["Weekly Live Classes", "Group Trade Reviews", "Community Chat", "Affordable Access"],
      icon: Users,
      cta: "Join Group",
      href: "#group",
      popular: false,
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
    {
      number: "04",
      title: "Free Beginner's Course",
      subtitle: "Start Smart",
      desc: "Step-by-step forex foundation for complete beginners. No jargon. No cost. Just clarity and confidence.",
      features: ["PDF Guide", "Market Basics", "Risk Rules", "First Trade Setup"],
      icon: BookOpen,
      cta: "Download Free",
      href: "/free-course",
      popular: false,
      badge: "100% Free",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ghana Flag Stripe */}
      <GhanaFlagStripe />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${
            isDark ? "text-mg-gold" : "text-mg-charcoal"
          }`}>
            MarketGod <span className="text-mg-green">Plans Services</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
            isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"
          }`}>
            From free learning to private mentorship — choose how you rise. All paths lead to mastery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-3xl border backdrop-blur-md transition-all shadow-lg ${
                isDark
                  ? "bg-mg-charcoal/90 border-mg-gold/40"
                  : "bg-mg-paper/95 border-mg-gold/30"
              } ${service.popular ? "ring-2 ring-mg-gold/60 scale-105" : ""}`}
            >
              {/* Badge */}
              {service.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${
                  service.popular
                    ? "bg-mg-gold text-mg-charcoal"
                    : "bg-mg-green/20 text-mg-green"
                }`}>
                  {service.badge}
                </div>
              )}

              {/* Number */}
              <div className={`text-5xl font-black opacity-20 absolute top-4 right-4 ${
                isDark ? "text-mg-gold/30" : "text-mg-charcoal/20"
              }`}>
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-5">
                <service.icon size={48} className="mx-auto text-mg-gold" />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-1 text-center ${
                isDark ? "text-mg-gold" : "text-mg-charcoal"
              }`}>
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-mg-green text-center mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className={`text-sm mb-5 text-center ${
                isDark ? "text-mg-dark-textSecondary" : "text-mg-light-textSecondary"
              }`}>
                {service.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feat, j) => (
                  <li key={j} className={`flex items-center gap-2 text-xs ${
                    isDark ? "text-mg-dark-text" : "text-mg-light-text"
                  }`}>
                    <Zap size={12} className="text-mg-green" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={service.href}
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-all w-full ${
                  service.popular
                    ? "bg-mg-gold text-mg-charcoal shadow-lg hover:shadow-gold-glow"
                    : "border border-mg-gold text-mg-gold hover:bg-mg-gold/10"
                }`}
              >
                {service.cta}
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pro"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider shadow-xl"
          >
            <Crown size={24} />
            Become a Pro Trader Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;