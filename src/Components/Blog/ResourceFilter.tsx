// src/components/Blog/ResourceFilter.tsx
'use client';

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { resources } from "../data/data";

interface ResourceFilterProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const useCategories = () => {
  return useMemo(() => {
    const set = new Set<string>(["All"]);
    resources.forEach((r) => set.add(r.category));
    return Array.from(set).sort((a, b) =>
      a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)
    );
  }, []);
};

const ResourceFilter: React.FC<ResourceFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const categories = useCategories();
  const [open, setOpen] = useState(false);

  /* ---------- Desktop Pills ---------- */
  const Pills = () => (
    <div className="hidden sm:flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg
            ${selectedCategory === cat
              ? "bg-mg-gold text-white shadow-mg-green/40"
              : isDark
                ? "bg-mg-charcoal/50 text-mg-paper/80 hover:bg-mg-charcoal/70"
                : "bg-white/70 text-mg-charcoal hover:bg-white/90"
            }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );

  /* ---------- Mobile Dropdown ---------- */
  const Dropdown = () => (
    <div className="sm:hidden relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all
          ${isDark
            ? "bg-mg-charcoal/60 text-mg-paper hover:bg-mg-charcoal/80"
            : "bg-white/80 text-mg-charcoal hover:bg-white/95"
          }`}
      >
        <Filter size={18} className="text-mg-green" />
        <span>{selectedCategory}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-2xl z-50 border
            ${isDark
              ? "bg-mg-black/90 border-mg-gold/20 backdrop-blur-md"
              : "bg-white/95 border-mg-green/20 backdrop-blur-sm"
            }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpen(false);
              }}
              className={`block w-full text-left px-5 py-3 text-sm font-bold transition-all
                ${selectedCategory === cat
                  ? "bg-mg-green text-white"
                  : isDark
                    ? "text-mg-paper/90 hover:bg-mg-charcoal/50"
                    : "text-mg-charcoal hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6 mb-12 px-4"
    >
      {/* Header */}
      <div className={`flex items-center gap-2 text-sm font-medium
        ${isDark ? "text-mg-paper/60" : "text-mg-charcoal/60"}
      `}>
        <Filter size={18} className="text-mg-green" />
        <span>Filter by Category</span>
      </div>

      {/* Buttons / Dropdown */}
      <Pills />
      <Dropdown />
    </motion.div>
  );
};

export default ResourceFilter;