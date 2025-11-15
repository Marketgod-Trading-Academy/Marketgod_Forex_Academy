// src/Components/Plans/PlansNavFloating.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface PlansNavFloatingProps {
  sections: Section[];
}

const PlansNavFloating: React.FC<PlansNavFloatingProps> = ({ sections }) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const headerOffset = 80; // adjust for header height
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Desktop floating box */}
      <motion.div
        className="hidden md:flex fixed top-24 right-6 z-40 bg-white/90 dark:bg-mg-charcoal/90 backdrop-blur-md rounded-xl shadow-lg border border-mg-gold/30 px-4 py-2 flex-col gap-2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-sm font-semibold text-mg-charcoal dark:text-mg-paper hover:text-mg-gold transition-colors"
          >
            {section.label}
          </button>
        ))}
      </motion.div>

      {/* Mobile circular button */}
      <div className="md:hidden fixed top-20 right-4 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-mg-gold text-white flex items-center justify-center shadow-xl hover:bg-mg-green transition-all"
        >
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        {/* Mobile dropdown with animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-2 absolute bottom top- right-0 bg-white dark:bg-mg-charcoal rounded-xl shadow-lg border border-mg-gold/30 flex flex-col"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4 py-2 text-sm font-semibold text-mg-charcoal dark:text-mg-paper hover:bg-mg-gold/20 dark:hover:bg-mg-green/20 transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default PlansNavFloating;
