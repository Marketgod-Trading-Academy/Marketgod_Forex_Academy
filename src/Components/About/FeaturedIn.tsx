// src/components/About/FeaturedIn.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const partnerLogos = [
  { name: "Exness", src: "/exness-logo.png", link: "https://www.exness.com/" },
  { name: "Investopedia", src: "/investopedia-logo.png", link: "https://www.investopedia.com/" },
  { name: "Bloomberg", src: "/bloomberg-logo.png", link: "https://www.bloomberg.com/" },
  { name: "Forbes", src: "/forbes-logo.png", link: "https://www.forbes.com/" },
  { name: "Yahoo Finance", src: "/yahoo-finance-logo.png", link: "https://finance.yahoo.com/" },
];

const FeaturedIn = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Optional gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-mg-light-bg/100 dark:from-mg-black/100 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-mg-light-bg/100 dark:from-mg-black/100 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={`text-center text-sm font-bold tracking-widest uppercase ${isDark ? "text-mg-paper/50" : "text-mg-charcoal/50"}`}>
            As Featured In
          </h3>

          <div className="mt-12 w-full overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {duplicatedLogos.map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Featured in ${partner.name}`}
                  className="flex-shrink-0 w-24 md:w-32 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={partner.src}
                    alt={`${partner.name} logo`}
                    className={`h-6 md:h-10 object-contain ${isDark && partner.name !== "Exness" ? "brightness-0 invert" : ""}`}
                  />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedIn;
