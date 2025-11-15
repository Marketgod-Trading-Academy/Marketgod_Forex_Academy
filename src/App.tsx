// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// PAGES
import Home from "./Pages/Home";
import { useTheme } from "./context/ThemeContext";
import Plans from "./Pages/Plans";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";


function App() {
  return (

      <Router>
        <AppContent />
      </Router>
    
  );
}

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "light" ? "bg-mg-light-b" : "bg-mg-dark-bg"
      }`}
    >
      <Header />

      <main className="flex-1">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* PLANS */}
          <Route path="/plans" element={<Plans />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;