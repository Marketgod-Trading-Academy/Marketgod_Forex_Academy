import { motion } from "framer-motion";
import { Instagram, Send, Twitter, X, Youtube } from "lucide-react";

type LinkItem = { name: string; href: string; icon: React.ReactNode; subtitle?: string; };

const links: LinkItem[] =  [
      { name: "Telegram", href: "https://t.me/marketgodcommunity", icon: <Send /> },
      { name: "Instagram", href: "https://www.instagram.com/eyram_dela", icon: <Instagram /> },
      { name: "YouTube", href: "https://www.youtube.com/@marketgodcommunity", icon: <Youtube /> },
      { name: "Twitter (X)", href: "https://x.com/eyramdela ", icon: <Twitter /> },
];




export default function CommunityModal({
  open,
  onClose,

}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal Content */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-xl bg-[#0b0f19] rounded-2xl shadow-2xl overflow-hidden border border-[#00c896]/30"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#00c896]/20">
          <div>
            <h3 className="text-xl font-bold text-[#FFD700]">Join Community</h3>
            <p className="text-sm text-white/70">Choose a platform to connect with us</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-[#00c896]/20 transition"
          >
            <X className="w-5 h-5 text-[#FFD700]" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#001022]/50 border border-[#FFD700]/20 hover:bg-[#FFD700]/10 hover:scale-105 transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#FFD700]/20 to-[#00c896]/20">
                    {l.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{l.name}</div>
                    {l.subtitle && <div className="text-sm text-white/70">{l.subtitle}</div>}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#00c896]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#00c896] text-[#001F3F] font-semibold hover:brightness-95 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
