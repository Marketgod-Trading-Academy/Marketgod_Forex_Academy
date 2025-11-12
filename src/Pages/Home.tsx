// src/pages/Home.tsx
import { useTheme } from "../context/ThemeContext";

// HERO & CORE
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import WhatIsForex from "../Components/Home/WhatIsForex";
import WhyForex from "../Components/Home/WhyForex";

// VALUE & EDUCATION
import Webinars from "../Components/Home/Webinars";
import WhyMarketGod from "../Components/Home/WhyMarketGod";
import WhyMentorshipMatters from "../Components/Home/WhyMentorshipMatters";

// OFFER & SERVICES
import Plans from "../Components/Home/Plans";
import Services from "../Components/Home/Services";
import ExnessPartner from "../Components/Home/ExnessPartner";

// SOCIAL PROOF
import Testimonials from "../Components/Home/Testimonials";
import MarketGodQuotes from "../Components/Home/MarketGodQuotes";

// ENGAGEMENT & CONVERSION
import JoinCommunity from "../Components/Home/JoinCommunity";
import FAQ from "../Components/Home/FAQ";
import FAQCTA from "../Components/Home/FAQCTA";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-mg-light-bg" : "bg-mg-dark-bg"
      }`}
    >
      {/* 1. HERO — GRAB ATTENTION */}
      <Hero />

      {/* 2. ABOUT — WHO IS MARKETGOD */}
      <About />
      
      {/* 9. SERVICES — WHAT YOU GET */}
      <Services />

      {/* 3. WHAT IS FOREX? — EDUCATE BEGINNERS */}
      <WhatIsForex />

      {/* 4. WHY FOREX? — BUILD DESIRE */}
      <WhyForex />

      {/* 5. WHY MARKETGOD? — UNIQUE VALUE */}
      <WhyMarketGod />

      {/* 6. WEBINARS — FREE VALUE (TRUST) */}
      <Webinars />

      {/* 7. WHY MENTORSHIP? — PAIN → SOLUTION */}
      <WhyMentorshipMatters />

      {/* 8. PLANS — MONETIZE (OFFER) */}
      <Plans />


      {/* 10. EXNESS — TRUSTED BROKER */}
      <ExnessPartner />

      {/* 11. TESTIMONIALS — SOCIAL PROOF */}
      <Testimonials />

      {/* 12. QUOTES — INSPIRATION */}
      <MarketGodQuotes />

      {/* 13. JOIN COMMUNITY — ENGAGEMENT */}
      <JoinCommunity />

      {/* 14. FAQ — REMOVE DOUBT */}
      <FAQ />

      {/* 15. FINAL CTA — CONVERT */}
      <FAQCTA />
    </div>
  );
};

export default Home;