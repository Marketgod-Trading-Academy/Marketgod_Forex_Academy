// src/components/MobileMenuDrawer/MobileMenuDrawer.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Instagram, Send, MessageCircle, Facebook, Mail, Sun, Moon } from "lucide-react";
import {  useLocation, useNavigate } from "react-router-dom"; // ← ADD useNavigate
import { useTheme } from "../../context/ThemeContext";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuDrawerProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navLinks: NavLink[];
  active: string;
}

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ menuOpen, setMenuOpen, navLinks }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate(); // ← THIS IS THE KEY

  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19]" : "bg-gradient-to-t from-gray-50 via-white to-gray-50";
  const textClass = isDark ? "text-white" : "text-gray-900";
  const accentClass = "text-[#00ff88]";

  const handleBackdropClick = () => setMenuOpen(false);

  // INSTANT NAVIGATION — NO REFRESH
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (location.pathname !== href) {
      navigate(href); // ← SPA navigation, no reload
    }
  };

  const socials = [
    { icon: Instagram, link: "https://instagram.com/marketgodacademy", label: "Instagram" },
    { icon: Send, link: "https://t.me/marketgodcommunity", label: "Telegram" },
    { icon: MessageCircle, link: "https://wa.me/233557560380", label: "WhatsApp" },
    { icon: Facebook, link: "https://web.facebook.com/eyram.akpey", label: "Facebook" },
    { icon: Mail, link: "mailto:support@marketgodtrading.com", label: "Email" },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={`relative w-full h-full ${bgClass} flex flex-col overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition z-10"
            >
              <X size={28} className={accentClass} />
            </button>

            {/* HERO */}
            <div className="relative mt-0 px-6 mb-10">
              <div
                className="h-48 bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden border-4 border-[#00ff88]/30"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/dzqdfaghg/image/upload/v1763578745/Black_White_Gradient_Digital_Marketing_Instagram_Post_f2zh1x.png')",
                  backgroundBlendMode: "overlay",
                }}
              />
            </div>

            {/* THEME TOGGLE */}
            <div className="px-8 mb-6 flex justify-end">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
              >
                {isDark ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className={accentClass} />}
                <span className={`font-semibold ${textClass}`}>Toggle Theme</span>
              </button>
            </div>

            {/* NAV LINKS — NOW USING navigate() */}
            <nav className="flex-1 px-8 pb-6">
              <div className="space-y-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      whileHover={{ scale: 1.02, x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block border-b-2 pb-5 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? `border-[#00ff88] ${accentClass} font-bold`
                          : `border-white/10 ${textClass} hover:text-[#00ff88]`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{link.name}</h3>
                          <p className="text-sm opacity-70 mt-1">
                            {link.name === "Home" && "Return to dashboard"}
                            {link.name === "Plans" && "MarketGod VIP Plans & Courses"}
                            {link.name === "Blog" && "MarketGod Blog - Trading Tips & Insights"}
                            {link.name === "About" && "Our story & mission"}
                            {link.name === "Contact" && "24/7 elite support"}
                          </p>
                        </div>
                        <ChevronRight size={26} className={`transition-all ${isActive ? accentClass : "opacity-50"}`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* SOCIALS */}
            <div className="px-8 py-8 border-t border-white/10">
              <p className={`text-center text-sm ${textClass} opacity-80 mb-5 font-medium`}>CONNECT WITH US</p>
              <div className="flex justify-center gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00ff88]/50 transition-all"
                  >
                    <social.icon size={26} className={accentClass} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* JOIN CTA — ALSO NO REFRESH */}
            <div className="px-8 pb-12">
              <motion.div
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/plans");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block text-center py-6 rounded-3xl bg-gradient-to-r from-[#00ff88] to-[#00c896] text-black font-black text-2xl shadow-2xl shadow-[#00ff88]/50 hover:shadow-[#00ff88]/70 transition-all duration-300 cursor-pointer"
              >
                Join VIP Now
              </motion.div>
            </div>

            {/* FOOTER */}
            <div className="px-8 py-6 text-center border-t border-white/10">
              <p className="text-xs opacity-70 tracking-wider">
                © 2025 MarketGod Trading • Accra, Ghana
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;