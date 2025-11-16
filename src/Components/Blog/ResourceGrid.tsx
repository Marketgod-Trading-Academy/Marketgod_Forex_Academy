// src/components/Blog/ResourceGrid.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ResourceModal from "./ResourceModal";
import { Calendar, User, Youtube, Instagram, Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  fullText?: string;
  link?: string;
  image: string;
  video?: string;
  author?: string;
  date?: string;
  platform?: "youtube" | "instagram" | "telegram" | "article";
}

interface ResourceGridProps {
  resources: Resource[];
  selectedCategory: string;
  searchQuery: string;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ 
  resources, 
  selectedCategory, 
  searchQuery 
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [active, setActive] = useState<Resource | null>(null);

  const filteredResources = resources
    .filter((res) => selectedCategory === "All" || res.category === selectedCategory)
    .filter((res) => 
      res.title.toLowerCase().includes(searchQuery) ||
      res.description.toLowerCase().includes(searchQuery)
    );

  const handleCardClick = (resource: Resource) => {
    setActive(resource);
  };

  const getPlatformIcon = (platform?: string) => {
    switch (platform) {
      case "youtube": return <Youtube size={14} className="text-red-500" />;
      case "instagram": return <Instagram size={14} className="text-pink-500" />;
      case "telegram": return <Send size={14} className="text-cyan-500" />;
      default: return null;
    }
  };

  return (
    <>
      <motion.section
        id="resources"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 sm:px-10 md:px-16 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(resource)}
              className={`
                cursor-pointer rounded-3xl overflow-hidden shadow-xl
                transition-all duration-500 group
                ${isDark 
                  ? "bg-mg-charcoal/60 border border-mg-gold/10 hover:shadow-mg-gold/30" 
                  : "bg-white/80 border border-mg-green/10 hover:shadow-mg-green/30"
                }
              `}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isDark 
                    ? "bg-gradient-to-t from-mg-black/90 via-mg-black/50 to-transparent" 
                    : "bg-gradient-to-t from-white/90 via-white/50 to-transparent"
                  }`}
                />

                {/* Category Badge */}
                <div className={`
                  absolute left-4 top-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm
                  ${isDark 
                    ? "bg-mg-green/20 text-mg-green border border-mg-green/30" 
                    : "bg-mg-green/10 text-mg-green border border-mg-green/20"
                  }`}
                >
                  {resource.category}
                </div>

                {/* Platform Icon */}
                {resource.platform && (
                  <div className="absolute right-4 top-4">
                    {getPlatformIcon(resource.platform)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {/* Title */}
                <h3 className={`
                  text-xl font-black line-clamp-2
                  ${isDark 
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-mg-gold via-mg-green to-mg-gold" 
                    : "text-mg-charcoal"
                  }`}
                >
                  {resource.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-sm leading-relaxed line-clamp-3
                  ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}
                `}>
                  {resource.description}
                </p>

                {/* Meta */}
                <div className={`
                  flex items-center justify-between text-xs font-medium
                  ${isDark ? "text-mg-paper/50" : "text-mg-charcoal/50"}
                `}>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-mg-gold" />
                    <span>{resource.author ?? "MarketGod"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-mg-green" />
                    <span>
                      {resource.date 
                        ? new Date(resource.date).toLocaleDateString("en-GB", { 
                            day: "numeric", month: "short" 
                          })
                        : ""
                      }
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      {active && (
        <ResourceModal
          resource={active}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
};

export default ResourceGrid;