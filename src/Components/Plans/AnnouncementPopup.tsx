// src/components/Shared/AnnouncementPopup.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const AnnouncementPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenVipPopup');
    
    const timer = setTimeout(() => {
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenVipPopup', 'true');
      }
    }, 3500); // Show popup after 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-lg w-full rounded-3xl border-2 shadow-2xl overflow-hidden
              ${isDark 
                ? "bg-gradient-to-br from-mg-charcoal via-mg-black to-mg-black border-mg-gold/40" 
                : "bg-white border-mg-green/30"
              }`}
          >
            {/* Header */}
            <div className={`p-6 text-center border-b ${isDark ? "border-mg-gold/20" : "border-gray-200"}`}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mg-green/10 flex items-center justify-center border-2 border-mg-green">
                <Gift size={32} className="text-mg-green" />
              </div>
              <h2 className={`text-2xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
                🚨 BAD NEWS & GOOD NEWS! 🚨
              </h2>
            </div>

            {/* Body */}
            <div className="p-8 space-y-4 text-sm">
              <p className={`${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                ❌ <span className="font-bold">Bad news:</span> I’m officially closing down GOLD INNER CIRCLE!
              </p>
              <p className={`${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                ✅ <span className="font-bold text-mg-green">Good news:</span> I’m opening <span className="font-bold">FREE VIP SLOTS</span> till the end of the year!
              </p>

              <div className={`p-4 rounded-lg border ${isDark ? "bg-mg-black/40 border-mg-gold/20" : "bg-gray-50 border-gray-200"}`}>
                <p className={`font-bold ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>All you need to do is:</p>
                <p className={`${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                  👉 Go to <a href="https://t.me/livetradewithmarketgodbot" target="_blank" rel="noopener noreferrer" className="text-mg-green font-bold underline">@livetradewithmarketgodbot</a>
                </p>
                <p className={`${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                  👉 Follow the simple instructions and join — it’s completely FREE!
                </p>
              </div>

              <p className={`text-xs italic ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}`}>
                ⚠️ Just make sure your trading account is funded with at least $50, so you don’t miss out on the life-changing moves we’re about to catch together!
              </p>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 border-t bg-black/10">
              <a
                href="https://t.me/livetradewithmarketgodbot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-mg-green text-white font-bold rounded-full shadow-lg shadow-mg-green/20 hover:scale-105 transition-transform"
              >
                <Zap size={20} />
                Join FREE VIP Now
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors
                ${isDark ? "text-mg-paper/50 hover:bg-mg-gold/10 hover:text-mg-paper" : "text-mg-charcoal/50 hover:bg-gray-200 hover:text-mg-charcoal"}`}
              aria-label="Close popup"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;