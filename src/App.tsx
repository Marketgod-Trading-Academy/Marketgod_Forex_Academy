// src/App.tsx
import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-mg-light-bg" : "bg-mg-dark-bg"
      }`}
    >
      <Header />
      <Home />
      {/* Other sections below */}
      {/* <section id="about" className="py-20">...</section> */}
    </div>
  );
}

export default App;