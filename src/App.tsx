// src/App.tsx
import Header from "./Components/Header/Header";
import { useTheme } from "./context/ThemeContext";

function App() {
    const { theme, toggleTheme } = useTheme();
  
  return (

      <div className={`min-h-screen transition-colors duration-300 ${
  theme === "light" ? "bg-mg-light-bg" : "bg-mg-dark-bg"
}`}>
        <Header />
        {/* Your sections */}
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-6xl font-black text-mg-gold">HOME</h1>
        </section>
        {/* Add more sections */}
      </div>

  );
}

export default App;