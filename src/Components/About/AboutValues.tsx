// src/components/About/AboutVisionMissionValues.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Eye, Target, HeartHandshake, Trophy,  X, ChevronRight } from "lucide-react";

const sections = [
    {
      title: "Our Vision",
      icon: Eye,
      gradient: "from-mg-gold to-yellow-600",
      desc: "To ignite a global revolution in trading mastery — where every individual, from Accra to Nigeria,Kenya,South Afica,Tokyo, Mumbai to New York, rises through pure skill. We see a world where financial freedom is earned, not inherited — built on discipline, precision, and relentless execution.",
      highlight: "The World Will Trade Like Gods.",
      image: "https://images.unsplash.com/photo-1519389950474-79c9c99b4f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      delay: 0.2
    },
    {
      title: "Our Mission",
      icon: Target,
      gradient: "from-mg-green to-emerald-700",
      desc: "To empower 1,000,000 traders worldwide with institutional-grade price action systems — no indicators, no bots, no excuses. From live trade rooms to real-time signals, we forge elite traders who dominate any market, any session, anywhere on Earth.",
      highlight: "We Don’t Teach. We Transform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      delay: 0.4
    },
    {
      title: "Our Values",
      icon: HeartHandshake,
      gradient: "from-red-600 to-orange-700",
      desc: "Precision in every move. Discipline in every breath. Hustle in every hour. Integrity in every trade. Community across continents. We are a global army of market warriors — bound by one code: Win clean. Win big. Win together.",
      highlight: "One Code. One World. One Victory.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      delay: 0.6
    },
  ];

  const fullStory = [
    {
      title: "The Full Vision",
      body: `
        <p class="text-lg leading-relaxed mb-6">We are building the <span class="text-mg-green font-bold">global standard</span> in trading education. Not just for Africa — but for the <span class="text-mg-gold font-bold">entire world</span>.</p>
        <p class="text-lg leading-relaxed mb-6">We see traders in Lagos, London, Lagos, and Los Angeles using the same sniper entries. We see funded accounts in 50+ countries. We see <span class="text-mg-green">MarketGod Academy</span> as the Harvard of trading — respected, replicated, and revered worldwide.</p>
        <ul class="space-y-4 mb-8">
          <li class="flx items-center gap-3"><Globe class="w-5 h-5 text-mg-gold" /> 1,000,000+ traders trained by 2035</li>
          <li class="flx items-center gap-3"><Globe class="w-5 h-5 text-mg-gold" /> Students in 100+ countries</li>
          <li class="flx items-center gap-3"><Globe class="w-5 h-5 text-mg-gold" /> $10B+ in student profits globally</li>
        </ul>
        <p class="text-xl font-bold text-mg-green italic">This is not a Ghanaian dream. This is a <span class="underline">global destiny</span>.</p>
      `,
      image: "https://images.unsplash.com/photo-1519389950474-79c9c99b4f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90"
    },
    {
      title: "The Full Mission",
      body: `
        <p class="text-lg leading-relaxed mb-6">We wake up every day to <span class="text-mg-green font-bold">arm the world</span> with real trading weapons. No fluff. No fake gurus. Just results.</p>
        <p class="text-lg leading-relaxed mb-6">Our mission: <span class="font-bold">1,000,000 funded traders</span>. From Tokyo open to New York close — our students execute with surgical precision. Live. Daily. Globally.</p>
        <div class="grid md:grid-cols-3 gap-6 my-8">
          <div class="bg-mg-charcoal/30 p-6 rounded-2xl border border-mg-gold/20 text-center">
            <h4 class="text-xl font-bold text-mg-gold mb-2">Sniper Entries</h4>
            <p class="text-sm">87% win rate. Used in 47 countries.</p>
          </div>
          <div class="bg-mg-charcoal/30 p-6 rounded-2xl border border-mg-gold/20 text-center">
            <h4 class="text-xl font-bold text-mg-gold mb-2">Live Trade Room</h4>
            <p class="text-sm">24/5. Real money. Real results.</p>
          </div>
          <div class="bg-mg-charcoal/30 p-6 rounded-2xl border border-mg-gold/20 text-center">
            <h4 class="text-xl font-bold text-mg-gold mb-2">Global Community</h4>
            <p class="text-sm">50,000+ members. 12 languages.</p>
          </div>
        </div>
        <p class="text-xl font-bold text-mg-green italic">We don’t just teach trading. We <span class="underline">globalize dominance</span>.</p>
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90"
    },
    {
      title: "The Full Values",
      body: `
        <p class="text-lg leading-relaxed mb-6">Our values are not suggestions. They are <span class="text-mg-green font-bold">non-negotiable laws</span> — enforced in every trade, every room, every country.</p>
        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-700 flex items-center justify-center flex-shrink-0">
              <Target class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-mg-gold mb-2">Precision</h4>
              <p>One pip off = failure. We hit targets. Every time. Everywhere.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-mg-green to-emerald-700 flex items-center justify-center flex-shrink-0">
              <Shield class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-mg-gold mb-2">Discipline</h4>
              <p>Rules over emotions. From Tokyo to Toronto.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-mg-gold flex items-center justify-center flex-shrink-0">
              <Zap class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-mg-gold mb-2">Hustle</h4>
              <p>We trade when others sleep. Because the market never closes.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center flex-shrink-0">
              <HeartHandshake class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="text-xl font-bold text-mg-gold mb-2">Community</h4>
              <p>One family. One code. One world.</p>
            </div>
          </div>
        </div>
        <p class="text-xl font-bold text-mg-green italic mt-8">This is not a course. This is a <span class="underline">global movement</span>.</p>
      `,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90"
    },
  ];

const AboutVisionMissionValues: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={`py-32 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-mg-black via-mg-charcoal to-black" : "bg-gradient-to-b from-mg-light-bg via-white to-mg-light-bg"}`}>
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-24 px-6">
          <h1 className={`text-3xl md:text-7xl font-black mb-6 leading-tight`}>
            <span className={`${isDark ? "text-mg-gold" : "text-mg-charcoal"} block`}>This Is Not a Dream.</span>
            <span className="text-mg-green block text-4xl md:text-8xl">This Is <span className="underline decoration-mg-gold text-mg-gold decoration-4">Destiny.</span></span>
          </h1>
          <p className={`text-xl md:text-2xl max-w-4xl mx-auto font-medium ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
            Vision. Mission. Values. — Forged in Ghana. Proven in the Markets.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`grid md:grid-cols-2 gap-16 p-4 md:gap-10 items-center mb-32 last:mb-0 ${isEven ? "md:[&>:first-child]:order-1 md:[&>:last-child]:order-2" : "md:[&>:first-child]:order-2 md:[&>:last-child]:order-1"}`}>
              
              {/* Image with lazy load + shimmer */}
              <motion.div initial={{ opacity: 0, x: isEven ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: section.delay + 0.1, type: "spring", stiffness: 70 }} className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mg-gold/20 to-mg-green/20 blur-3xl scale-95 group-hover:scale-100 transition-transform duration-700 -z-10 animate-pulse" />
                <img
                  src={section.image}
                  loading="lazy"
                  alt={section.title}
                  className="w-full h-48 md:h-[420px] object-cover rounded-3xl shadow-2xl border-4 border-mg-gold/30 group-hover:border-mg-gold/60 group-hover:scale-[1.02] transition-all duration-700"
                />
              </motion.div>

              {/* Text */}
              <motion.div initial={{ opacity: 0, x: isEven ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: section.delay + 0.2, type: "spring", stiffness: 70 }} className="space-y-8 px-4 md:px-0">
                <div className="flex items-center gap-5">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${section.gradient} p-4 shadow-2xl`}>
                    <section.icon size={44} className="text-white" />
                  </div>
                  <h3 className={`text-4xl md:text-5xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>{section.title}</h3>
                </div>
                <p className={`  text-sm sm:text-lg md:text-xl leading-relaxed font-medium ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>{section.desc}</p>
                <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: section.delay + 0.4 }} className="relative pl-8 border-l-4 border-mg-green">
                  <p className="text-2xl md:text-3xl font-bold italic text-mg-green leading-tight">“{section.highlight}”</p>
                </motion.blockquote>
              </motion.div>
            </div>
          );
        })}

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="text-center mt-20">
          <motion.button onClick={() => setIsModalOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-mg-green to-emerald-700 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-mg-green/60 transition-all">
            See the Full Story <ChevronRight size={28} />
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
              
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}           
              className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-2xl" 
              onClick={() => setIsModalOpen(false)}
          >

            <motion.div
             initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} 
             exit={{ scale: 0.8, opacity: 0 }} 
             transition={{ type: "spring", stiffness: 300, damping: 30 }} 
             className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-mg-charcoal via-black to-mg-black rounded-3xl shadow-2xl p-4 md:p-12" 
             onClick={(e) => e.stopPropagation()}
             >
              <button  onClick={() => setIsModalOpen(false)} className="absolute top-6 hidden md:flex right-6 p-2 rounded-full bg-mg-gold/20 hover:bg-mg-gold/40 transition-all"><X size={28} className="text-mg-gold" /></button>

              <div className="gap-3 w-full text-center mb-12 left-0 fixed  right 0 p-1 shadow-sm shadow-slate-400 md:static top-0 md-trans bg-gradient-to-br from-mg-charcoal via-black to-mg-black ">

                <button  
                  onClick={() => setIsModalOpen(false)} 
                  className="flex  md:hidden text-[.7rem]  p-1 rounded-md  bg-mg-green text-white bg-mg-gold/20 hover:bg-mg-gold/40 transition-all">
                    Back
              </button>

                <div className="">
                  <h2 className=" text-2xl  sm:text-3xl md:text-6xl font-black text-mg-gold md:mb-4">
                    The Full Story
                </h2>
                <p className="  text-[.7rem] sm:text-sm md:text-xl text-mg-paper/80">
                    Vision. Mission. Values. — The Complete Blueprint
                </p>
                </div>

              

              </div>


              {fullStory.map((item, i) => (
                <div key={i} className="mb-16 last:mb-0 mt-9 md-mt-0">
                  <h3 className="text-3xl md:text-4xl font-black text-mg-gold mb-6 text-center">{item.title}</h3>
                  <img src={item.image} loading="lazy" alt={item.title} className="w-full h-80 object-cover rounded-3xl shadow-xl mb-8" />
                  <div className={`prose prose-lg max-w-none ${isDark ? "prose-invert" : ""}`} dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
              <div className="text-center mt-16">
                <motion.a href="/plans" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-4 px-10 py-5 bg-mg-green text-white rounded-full font-bold text-xl shadow-xl hover:shadow-mg-green/60 transition-all">
                  Join the Movement Now <Trophy size={28} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutVisionMissionValues;
