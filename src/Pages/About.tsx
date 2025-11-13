// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Award, 
  Heart, 
  Shield, 
  Star, 
  ArrowRight,
  Home,
  Laptop,
  GraduationCap,
  Lightbulb,
  Target,
  Zap,
  Clock,
  CheckCircle
} from "lucide-react";
import AboutHero from "../Components/About/AboutHero";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const stats = [
    { icon: Users, value: "10,000+", label: "Students Trained" },
    { icon: TrendingUp, value: "87%", label: "VIP Win Rate" },
    { icon: Award, value: "SNS Partner", label: "Official Broker" },
    { icon: Globe, value: "Ghana #1", label: "Forex Academy" },
  ];

  return (
    <div className={`min-h-screen ${isDark ? "bg-mg-black" : "bg-mg-light-bg"}`}>
      <AboutHero />
      

    
  
    </div>
  );
};

export default About;