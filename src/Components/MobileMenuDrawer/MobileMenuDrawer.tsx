// src/Components/MobileMenuDrawer/MobileMenuDrawer.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Link {
  name: string;
  href: string;
}

interface Props {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  navLinks: Link[];
  active: string;
}

const MobileMenuDrawer: React.FC<Props> = ({ menuOpen, setMenuOpen, navLinks }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-80 bg-mg-charcoal dark:bg-mg-black shadow-2xl z-50 p-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-mg-paper"
            >
              <X size={28} />
            </button>
            <div className="mt-16 space-y-6">
              {navLinks.map((link) => {
                // const isActive = active === location.pathname;
              const active = location.pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-xl font-bold uppercase tracking-widest transition ${
                      active ? "text-mg-gold" : "text-mg-paper hover:text-mg-gold"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;