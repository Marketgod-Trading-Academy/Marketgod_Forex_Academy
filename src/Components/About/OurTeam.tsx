// src/components/About/OurTeam.tsx
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  Instagram,
  Twitter,
  Send,
  Linkedin,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";

interface SocialsProps {
  socials: {
    twitter?: string;
    linkedin?: string;
    telegram?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    youtube?: string;
  };
}

const SocialsBar: React.FC<SocialsProps> = ({ socials }) => {
  const socialIcons = [
    { key: "twitter", icon: Twitter, href: socials.twitter },
    { key: "linkedin", icon: Linkedin, href: socials.linkedin },
    { key: "telegram", icon: Send, href: socials.telegram },
    { key: "instagram", icon: Instagram, href: socials.instagram },
    { key: "facebook", icon: Facebook, href: socials.facebook },
    { key: "whatsapp", icon: MessageCircle, href: socials.whatsapp },
    { key: "youtube", icon: Youtube, href: socials.youtube },
  ];

  return (
    <div className="flex items-center gap-3 mt-4">
      {socialIcons.map(
        (social) =>
          social.href && (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mg-paper/60 hover:text-mg-gold transition-colors"
            >
              <social.icon size={20} />
            </a>
          )
      )}
    </div>
  );
};

const OurTeam = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const teamMembers = [
    {
      name: "Nana FX",
      role: "Head of Strategy & Analysis",
      avatar: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763524386/SnapInsta.to_574035044_18199291999320144_2690177713676601397_n_mpnj3u.jpg",
      bio: "A master of market structure and institutional concepts. Nana leads our trade analysis, ensuring every signal is backed by rigorous data.",
      socials: {
        twitter: "#",
        telegram: "#",
        instagram: "#",
        facebook: "#",
        whatsapp: "#",
        youtube: "#",
      },
    },
    {
      name: "Gram XL",
      role: "Community Manager & Mentor",
      avatar: "https://res.cloudinary.com/dzqdfaghg/image/upload/v1763524387/SnapInsta.to_486789163_18453841771079946_2830125092578146791_n_yyzbbv.jpg",
      bio: "The heart of our community. Gram XL guides new traders, hosts live Q&A sessions, and ensures everyone feels supported on their journey.",
      socials: {
        twitter: "#",
        telegram: "#",
        instagram: "#",
        facebook: "#",
      },
    },
    // Add more team members here
  ];

  return (
    <section id="team" className={`py-24 ${isDark ? "bg-mg-black" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black ${isDark ? "text-mg-gold" : "text-mg-charcoal"}`}>
            The Minds Behind the <span className="text-mg-green">Mastery</span>
          </h2>
          <p className={`mt-3 text-lg ${isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"}`}>
            Meet the core team dedicated to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-3xl p-8 border ${
                isDark
                  ? "bg-mg-charcoal/50 border-mg-gold/20"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-6 mb-5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-mg-green"
                />
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-mg-paper" : "text-mg-charcoal"}`}>
                    {member.name}
                  </h3>
                  <p className="text-mg-green font-semibold">{member.role}</p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"}`}>
                {member.bio}
              </p>
              <SocialsBar socials={member.socials} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;