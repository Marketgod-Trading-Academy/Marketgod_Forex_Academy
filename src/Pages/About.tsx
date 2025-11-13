// src/pages/About.tsx

import { useTheme } from "../context/ThemeContext";

import AboutHero from "../Components/About/AboutHero";
import AboutStats from "../Components/About/AboutStats";
import AboutJourney from "../Components/About/AboutJourney";
import AboutMentor from "../Components/Home/AboutMentor";
import AboutValues from "../Components/About/AboutValues";

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
      

    
  
    </div>
  );
};

export default About;