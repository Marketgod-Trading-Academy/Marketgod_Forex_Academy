// src/components/OurTeam/OurTeam.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { 
  Twitter,
  Linkedin,
  Send,
  Instagram,
  Facebook,
  MessageSquare,
  Youtube,
} from 'lucide-react';
import VanillaTilt, { type TiltOptions } from "vanilla-tilt";

// --- START: Updated SocialsBar Component ---
interface SocialsProps {
  socials: {
    twitter: string;
    linkedin: string;
    // New Socials
    telegram: string; 
    instagram: string; 
    facebook: string;
    whatsapp: string;
  };
}

// NOTE: Replace the text links (T, L, I, F, W, Tg) with actual Icon components
const SocialsBar: React.FC<SocialsProps> = ({ socials }) => {
  const iconClass = "text-mg-gold hover:text-mg-green transition-colors text-2xl";

  // Filter out any social links that are set to '#' or empty string
  const visibleSocials = Object.entries(socials).filter(([, link]) => link && link !== "#");

  if (visibleSocials.length === 0) {
    return null; // Don't render the bar if there are no links
  }

  return (
    <div className="flex justify-center space-x-5 mt-4">
      {visibleSocials.map(([key, link]) => {
        const socialMap = {
          twitter: { icon: <Twitter size={24} />, label: "Twitter Profile" },
          linkedin: { icon: <Linkedin size={24} />, label: "LinkedIn Profile" },
          telegram: { icon: <Send size={24} />, label: "Telegram Channel" },
          instagram: { icon: <Instagram size={24} />, label: "Instagram Profile" },
          facebook: { icon: <Facebook size={24} />, label: "Facebook Profile" },
          whatsapp: { icon: <MessageSquare size={24} />, label: "WhatsApp Contact" },
        };
        const socialInfo = socialMap[key as keyof typeof socialMap];
        if (!socialInfo) return null;
        return (
          <a key={key} href={link} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label={socialInfo.label}>
            {socialInfo.icon}
          </a>
        );
      })}
    </div>
  );
};
// --- END: Updated SocialsBar Component ---


// Dummy team members (replace later)
const teamMembers = [
  {
    name: "Eyram Dela",
    role: "Founder & Lead Mentor",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522353/SnapInsta.to_337662499_1402452373902499_6787092292694936212_n_h6bccv.jpg",
    socials: {
      twitter: "https://x.com/eyramdela",
      telegram: "https://t.me/delatrade", 
      instagram: "https://www.instagram.com/eyram_dela",
      facebook: "https://web.facebook.com/eyram.akpey",
      whatsapp: "#",
      Youtube : "https://www.youtube.com/@marketgodcommunity"
    },
  },
  {
    name: "Reuben Donasei",
    role: "Senior Tutor",
    image: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763528538/55805e4a-88cd-4d12-ba4f-67e5bb9b119d.png",
    socials: {
      twitter: "#",
      telegram: "#",
      instagram: "https://instagram.com/Reuben_Donasei",
      facebook: "#",
     
    },
  },
  {
    name: "Kofi Mensah",
    role: "Analyst",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    socials: {
      twitter: "#",
      linkedin: "https://linkedin.com/in/kofi",
      telegram: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#",
    },
  },

 

];

// --- START: New TeamMemberCard Component ---
type TeamMember = typeof teamMembers[0];

interface TeamMemberCardProps {
  member: TeamMember;
  isDark: boolean;
  setCardRef: (element: HTMLDivElement | null) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isDark, setCardRef }) => {
  return (
    <div 
      className={`tilt-card p-6 rounded-3xl shadow-xl transition-all duration-300 h-full
        ${isDark ? "bg-mg-charcoal/60 text-mg-paper" : "bg-white/80 text-mg-charcoal"}`}
      ref={setCardRef}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 md:h-72 object-cover rounded-2xl mb-4 border-4 border-mg-gold"
      />
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center">{member.name}</h3>
        <p className="text-mg-green font-semibold text-center mb-auto">{member.role}</p>
        <SocialsBar socials={member.socials} />
      </div>
    </div>
  );
};
// --- END: New TeamMemberCard Component ---

const OurTeam = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tiltCardRefs = React.useRef<HTMLDivElement[]>([]);

  React.useEffect(() => {
  tiltCardRefs.current.forEach((card) => {
    if (card && (card as any).vanillaTilt) {
      (card as any).vanillaTilt.destroy();
    }

    if (card) {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.25,
        perspective: 1000,
      } as TiltOptions);
    }
  });

  return () => {
    tiltCardRefs.current.forEach((card) => {
      if (card && (card as any).vanillaTilt) {
        (card as any).vanillaTilt.destroy();
      }
    });
  };
}, []);
  
  const setCardRef = (element: HTMLDivElement | null, index: number) => {
    if (element) {
        tiltCardRefs.current[index] = element;
    }
  }


  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            Meet the Team
          </h2>
          <p className={`mt-3 text-lg ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            The brains and mentors driving the MarketGod Academy.
          </p>
        </motion.div>

        {/* Swiper Carousel for Mobile */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <TeamMemberCard 
                  member={member} 
                  isDark={isDark} 
                  setCardRef={(el) => setCardRef(el, i)} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, i) => (
            <TeamMemberCard 
              key={i}
              member={member} 
              isDark={isDark} 
              setCardRef={(el) => setCardRef(el, i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;