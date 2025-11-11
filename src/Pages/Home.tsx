// src/pages/Home.tsx
import { useTheme } from "../context/ThemeContext";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import WhyForex from "../Components/Home/WhyForex";
import Services from "../Components/Home/Services";
import Webinars from "../Components/Home/Webinars";

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
      {/* <WhyForexInteractive /> */}
      
      {/* Future: About, Plans, Signals, Testimonials */}
    </div>
  );
};

export default Home;


 