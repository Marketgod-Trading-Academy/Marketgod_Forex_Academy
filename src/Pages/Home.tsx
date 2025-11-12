// src/pages/Home.tsx
import { useTheme } from "../context/ThemeContext";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import WhyForex from "../Components/Home/WhyForex";
import Services from "../Components/Home/Services";
import Webinars from "../Components/Home/Webinars";
import WhyMarketGod from "../Components/Home/WhyMarketGod";
import JoinCommunity from "../Components/Home/JoinCommunity";
import WhyMentorshipMatters from "../Components/Home/WhyMentorshipMatters";
import Plans from "../Components/Home/Plans";
import ExnessPartner from "../Components/Home/ExnessPartner";
import MarketGodQuotes from "../Components/Home/MarketGodQuotes";
import FAQ from "../Components/Home/FAQ";
import FAQCTA from "../Components/Home/FAQCTA";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "light" ? "bg-mg-light-bg" : "bg-mg-dark-bg"
    }`}>

      <Hero />
      <Services />
      <About />
      <WhyForex />
      <Webinars />
      <WhyMarketGod />
      <JoinCommunity />
      <WhyMentorshipMatters />
      <Plans />
      <ExnessPartner />
      <MarketGodQuotes />
      <FAQ />
      <FAQCTA />
      
      {/* Future: About, Plans, Signals, Testimonials */}
    </div>
  );
};

export default Home;


 