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
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

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
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-lg w-full rounded-3xl border-2 shadow-2xl overflow-hidden
              ${
                isDark
                  ? 'bg-gradient-to-br from-mg-charcoal via-mg-black to-mg-black border-mg-gold/40'
                  : 'bg-white border-mg-green/30'
              }`}
          >
            {/* FULL-WIDTH DUMMY IMAGE */}
            <div className="w-full h-40 sm:h-48 md:h-52 overflow-hidden">
              <img
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522352/SnapInsta.to_511469271_18512807728003421_2788928110292631837_n_shzro3.jpg"
                alt="MarketGod VIP Dummy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* HEADER */}
            <div
              className={`p-6 text-center border-b ${
                isDark ? 'border-mg-gold/20' : 'border-gray-200'
              }`}
            >
              <h2
                className={`text-xl sm:text-2xl font-black leading-tight ${
                  isDark ? 'text-mg-gold' : 'text-mg-charcoal'
                }`}
              >
                Do you know you can{' '}
                <span className="text-mg-green">trade with MarketGod for FREE</span>?
              </h2>
            </div>

            {/* BODY */}
            <div className="p-2 space-y-0 text-sm sm:text-base">
              <p
                className={`${
                  isDark ? 'text-mg-paper/80' : 'text-mg-charcoal/80'
                }`}
              >
                VIP access is now open to everyone — no subscription required.
              </p>

              <div
                className={`p-4 rounded-lg border ${
                  isDark
                    ? 'bg-mg-black/40 border-mg-gold/20'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <p
                  className={`font-bold ${
                    isDark ? 'text-mg-paper' : 'text-mg-charcoal'
                  }`}
                >
                  🎁 Join FREE VIP:
                </p>

                <a
                  href="https://t.me/livetradewithmarketgodbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mg-green font-bold underline block mt-1"
                >
                  @livetradewithmarketgodbot
                </a>
              </div>

              <p
                className={`${
                  isDark ? 'text-mg-paper/80' : 'text-mg-charcoal/80'
                }`}
              >
                Receive live signals, breakdowns, mentorship, and market guidance.
              </p>

              <p
                className={`text-xs italic ${
                  isDark ? 'text-mg-paper/60' : 'text-mg-charcoal/60'
                }`}
              >
                ⚠️ Fund at least $50 to take trades effectively.
              </p>
            </div>

            {/* CTA */}
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

            {/* CLOSE BUTTON */}
           {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className={`absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm transition-colors
              ${isDark
                ? 'text-mg-gold hover:bg-mg-gold/20 hover:text-mg-black'
                : 'text-white hover:bg-gray-200 hover:text-mg-charcoal'
              }`}
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
