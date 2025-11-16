import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FAQCTA = () => {
  const { theme } = useTheme();

  const socials = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-mg-gold/10 via-yellow-50/20 to-mg-gold/10 rounded-3xl shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-700">
      
      {/* Headline & CTA */}
      <div className="flex-1 text-center md:text-left space-y-3">
        <h3 className={`text-2xl md:text-3xl font-extrabold ${
          theme === "light" ? "text-mg-light-text" : "text-mg-gold"
        }`}>
          Have questions? We’re here to help!
        </h3>
        <p className={`text-sm md:text-base ${
          theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
        }`}>
          Reach out to our team or connect with the MarketGod Academy community on social media.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-mg-gold text-mg-black rounded-full font-bold uppercase tracking-wide shadow-lg"
        >
          Contact Us
        </motion.a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6 md:mt-0">
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all shadow-md ${
              theme === "light"
                ? "bg-mg-light-surface text-mg-gold hover:bg-mg-gold hover:text-mg-black"
                : "bg-mg-dark-bg text-mg-gold hover:bg-mg-gold hover:text-mg-black"
            }`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default FAQCTA;
