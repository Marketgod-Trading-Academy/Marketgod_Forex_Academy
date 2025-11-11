// src/pages/Home.tsx
import { useTheme } from "../context/ThemeContext";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import WhyForex from "../Components/Home/WhyForex";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "light" ? "bg-mg-light-bg" : "bg-mg-dark-bg"
    }`}>

      <Hero />
      <About />
      <WhyForex />
      {/* <WhyForexInteractive /> */}
      
      {/* Future: About, Plans, Signals, Testimonials */}
    </div>
  );
};

export default Home;


 