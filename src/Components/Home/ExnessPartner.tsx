// src/components/ExnessPartner/ExnessPartner.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ArrowRight, Zap, Shield, Globe, Clock, CreditCard } from "lucide-react";

const ExnessPartner = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const features = [
    { icon: Zap, title: "0.0 Pips Spread", text: "Trade Gold & Forex at true market cost." },
    { icon: Shield, title: "Instant Withdrawals", text: "MTN MoMo, Vodafone Cash, Crypto — in seconds." },
    { icon: Clock, title: "24/7 GMT Support", text: "Live chat in English & local languages." },
    { icon: Globe, title: "1:Unlimited Leverage", text: "Grow $100 into real wins with smart risk." },
    { icon: CreditCard, title: "Mobile Money & Crypto", text: "Fund & withdraw from Ghana instantly." },
  ];

  return (
    <section
      id="exness"
      className={`relative py-32 overflow-hidden ${isDark ? "text-mg-dark-text" : "text-mg-light-text"}`}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzqdfaghg/image/upload/v1763526791/43981ea6-0bd8-44b8-be03-01a3659c1ac8.png')`,
          filter: isDark ? "brightness(0.25) contrast(1.2)" : "brightness(0.9) contrast(1.1)",
        }}
      />

      {/* GOLDEN OVERLAY GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(0,200,150,0.1), transparent 60%)"
            : "radial-gradient(circle at 20% 30%, black, transparent 60%), radial-gradient(circle at 80% 70%, black), transparent 60%)",
        }}
      />

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
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-mg-gold drop-shadow-2xl">
            Trade with <span className="text-mg-green drop-shadow-lg">Exness</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-mg-paper/90 dark:text-mg-paper/95 drop-shadow-lg">
            <span className="font-bold text-mg-gold">MarketGod Academy’s Official Broker</span> —  
            Built for Ghana. Trusted by 2M+ traders worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`p-5 rounded-2xl border backdrop-blur-xl text-center shadow-xl ${
                isDark
                  ? "bg-mg-black/70 border-mg-gold/40"
                  : "bg-mg-paper/85 border-mg-gold/30"
              }`}
            >
              <div className="flex flex-col items-center">
                <feat.icon size={36} className="mx-auto mb-3 text-mg-gold drop-shadow-md" />
                <h3 className={`text-sm font-bold mb-1 text-mg-gold drop-shadow`}>
                  {feat.title}
                </h3>
                <p className={`text-xs ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"} drop-shadow`}>
                  {feat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`relative p-10 rounded-3xl border-2 backdrop-blur-xl shadow-2xl text-center max-w-4xl mx-auto ${
            isDark
              ? "bg-mg-black/80 border-mg-gold/60"
              : "bg-mg-paper/90 border-mg-gold/50"
          }`}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mg-gold text-mg-charcoal px-6 py-2 rounded-full text-sm font-bold shadow-xl">
            Exclusive Partner Bonus
          </div>

          <h3 className="text-2xl md:text-3xl font-black mb-4 text-mg-gold drop-shadow-2xl">
            Open Exness Account via MarketGod
          </h3>

          <p className="text-lg mb-6 max-w-2xl mx-auto text-mg-paper/90 dark:text-mg-paper/90 drop-shadow-lg">
            Get <span className="text-mg-green font-bold">1-Month VIP Signals FREE</span> + 
            <span className="text-mg-gold"> Bonus Credits</span> on first deposit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://one.exnessonelink.com/boarding/sign-up/303589/a/eyram" // REPLACE WITH YOUR LINK
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-mg-gold text-mg-charcoal rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all"
            >
              Open Exness Account Now
              <ArrowRight size={24} />
            </motion.a>

            <motion.a
              href="plans/#signals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-mg-green text-mg-green hover:bg-mg-green/10 font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Learn About VIP Signals
            </motion.a>
          </div>

          <p className="text-xs mt-6 text-mg-paper/70 dark:text-mg-paper/70 drop-shadow">
            Regulated by CySEC, FCA, FSCA • Minimum Deposit: $10 • No Requotes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExnessPartner;