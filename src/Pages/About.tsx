// src/pages/About.tsx

import { useTheme } from "../context/ThemeContext";

import AboutHero from "../Components/About/AboutHero";
import AboutStats from "../Components/About/AboutStats";
import AboutJourney from "../Components/About/AboutJourney";
import AboutMentor from "../Components/Home/AboutMentor";
import AboutValues from "../Components/About/AboutValues";
import OurTeam from "../Components/About/OurTeam";
import FeaturedIn from "../Components/About/FeaturedIn";
import FinalCTA from "../Components/About/AboutFinalCTA";
import Testimonials from "../Components/Home/Testimonials";
import FAQ from "../Components/Home/FAQ";
import FAQCTA from "../Components/Home/FAQCTA";
// import CTA from "../Components/Global/CTA";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <AboutHero />
      <AboutStats />
      <AboutMentor />
      <AboutJourney />
      <AboutValues />
      <OurTeam />
      <FeaturedIn />
      <FinalCTA />
      <Testimonials />
      <FAQ />
      <FAQCTA />
      

    
  
    </div>
  );
};

export default About;