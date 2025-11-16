// import { useState, useEffect } from "react";
// import { Sun, Moon, Menu, Home, Info, Layers, BookOpen, Phone } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import MobileMenuDrawer from "../MobileMenuDrawer/MobileMenuDrawer";

// const Header = () => {
//   const { theme, toggleTheme } = useTheme();

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [lastY, setLastY] = useState(0);
//   const [activeSection, setActiveSection] = useState("home");

//   const { scrollY } = useScroll();
//   const headerHeight = useTransform(scrollY, [0, 120], [84, 64]);
//   const blurAmount = useTransform(scrollY, [0, 120], [20, 30]);
//   const blurStyle = {
//     backdropFilter: `blur(${blurAmount.get()}px)`,
//     WebkitBackdropFilter: `blur(${blurAmount.get()}px)`,
//   };

//   const headerStyle = {
//     ...blurStyle,
//     height: headerHeight.get(),
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > lastY && window.scrollY > 100) setVisible(false);
//       else setVisible(true);
//       setLastY(window.scrollY);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [lastY]);

//   useEffect(() => {
//     const sections = ["home", "about", "plans", "resources", "contact"];
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActiveSection(e.target.id);
//         });
//       },
//       { rootMargin: "-20% 0px -70% 0px" }
//     );
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) obs.observe(el);
//     });
//     return () => obs.disconnect();
//   }, []);

//   const navLinks = [
//     { name: "Home", icon: <Home size={22} />, id: "home" },
//     { name: "About", icon: <Info size={22} />, id: "about" },
//     { name: "Plans", icon: <Layers size={22} />, id: "plans" },
//     { name: "Resources", icon: <BookOpen size={22} />, id: "resources" },
//     { name: "Contact", icon: <Phone size={22} />, id: "contact" },
//   ];

//   const pulse = useSpring(1, { stiffness: 200, damping: 10 });
//   useEffect(() => {
//     pulse.set(window.scrollY > 30 ? 1.05 : 1);
//   }, [scrollY, pulse]);

//   return (
//     <>
//       <motion.header
//         animate={{ y: visible ? 0 : -120 }}
//         transition={{ duration: 0.35 }}
//         style={headerStyle}
//         className={`
//           hidden md:flex items-center fixed top-0 left-0 w-full z-40 
//           px-6 py-3 
//           backdrop-blur-md 
//           border-b 
//           shadow-lg
//           transition-all duration-300
//           ${theme === "light"
//             ? "bg-mg-light-surface/90 border-mg-light-border"
//             : "bg-mg-dark-surface/95 border-mg-dark-border"
//           }
//         `}
//       >
//         <a href="#home" className="flex items-center gap-3 group">
//           <div className="relative bg-black rounded-full">
//             <img
//               src="/logo.png"
//               alt="MarketGod"
//               className={`
//                 w-12 h-12 rounded-full object-cover border-2 
//                 ${theme === "light" 
//                   ? "border-mg-gold/70 shadow-gold-glow-light" 
//                   : "border-mg-gold shadow-gold-glow"
//                 }
//               `}
//             />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00c896] rounded-full animate-ping opacity-75" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00c896] rounded-full" />
//           </div>
//           <div>
//             <h1 className="text-xl font-black text-mg-gold tracking-tighter">
//               Market
//               <span className={theme === "light" ? "text-mg-light-text" : "text-mg-paper"}>
//                 God
//               </span>
//             </h1>
//             <p className={`text-xs uppercase tracking-widest ${
//               theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
//             }`}>
//               Academy
//             </p>
//           </div>
//         </a>

//         <nav className="flex-1 flex justify-center">
//           <div className="flex items-center gap-6">
//             {navLinks.map((link) => {
//               const active = activeSection === link.id;
//               return (
//                 <a
//                   key={link.id}
//                   href={`#${link.id}`}
//                   className={`
//                     relative font-medium uppercase tracking-widest text-xs transition-all duration-300
//                     ${active 
//                       ? "text-mg-gold" 
//                       : theme === "light" 
//                         ? "text-mg-light-textSecondary hover:text-mg-gold" 
//                         : "text-mg-dark-textSecondary hover:text-mg-gold"
//                     }
//                   `}
//                 >
//                   <motion.span
//                     whileHover={{ 
//                       y: -4, 
//                       scale: 1.08, 
//                       x: 2, 
//                       color: "#00c896",
//                       transition: { type: "spring", stiffness: 400 }
//                     }}
//                     className="inline-block"
//                   >
//                     {link.name}
//                   </motion.span>

//                   {active && (
//                     <motion.div
//                       layoutId="activePill"
//                       className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-mg-gold rounded-full"
//                       style={{
//                         boxShadow: theme === "light"
//                           ? "0 0 10px rgba(212,175,55,0.5)"
//                           : "0 0 12px rgba(212,175,55,0.7), 0 0 20px rgba(0,200,150,0.3)",
//                       }}
//                       transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                     />
//                   )}
//                 </a>
//               );
//             })}
//           </div>
//         </nav>

//         <div className="flex items-center gap-4">
//           <motion.a
//             href="#plans"
//             className="relative overflow-hidden bg-mg-gold text-mg-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wide text-xs flex items-center gap-2 shadow-lg"
//             style={{
//               scale: pulse,
//               boxShadow: theme === "light"
//                 ? "0 5px 20px rgba(212,175,55,0.4)"
//                 : "0 6px 25px rgba(212,175,55,0.5), 0 0 30px rgba(212,175,55,0.3)",
//             }}
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.96 }}
//           >
//             <span className="relative z-10">Join Now</span>
//             {window.scrollY > 30 && (
//               <motion.div
//                 className="absolute inset-0 rounded-full bg-[#00c896]/25"
//                 animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.6 }}
//               />
//             )}
//             <motion.div
//               className="absolute inset-0 bg-white/40"
//               initial={{ x: "-120%" }}
//               whileHover={{ x: "120%" }}
//               transition={{ duration: 0.6 }}
//             />
//           </motion.a>

//           <motion.button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full transition-all ${
//               theme === "light" 
//                 ? "bg-mg-light-border/40 hover:bg-mg-gold/15" 
//                 : "bg-mg-dark-border/40 hover:bg-[#00c896]/15"
//             }`}
//             whileHover={{ rotate: 360, scale: 1.15 }}
//           >
//             {theme === "light" ? (
//               <Moon size={18} className="text-mg-light-text" />
//             ) : (
//               <Sun size={18} className="text-mg-gold" />
//             )}
//           </motion.button>
//         </div>
//       </motion.header>

//       <motion.nav
//         animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
//         transition={{ duration: 0.35 }}
//         className={`
//           fixed bottom-0 left-0 w-full md:hidden flex justify-around items-center py-3 
//           backdrop-blur-md border-t z-50
//           ${theme === "light"
//             ? "bg-mg-light-surface/90 border-mg-light-border"
//             : "bg-mg-dark-surface/95 border-mg-dark-border"
//           }
//         `}
//       >
//         {navLinks.map((link) => {
//           const active = activeSection === link.id;
//           return (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               className={`flex flex-col items-center gap-1 transition-all ${
//                 active 
//                   ? "text-[#00c896]" 
//                   : theme === "light" 
//                     ? "text-mg-light-textSecondary" 
//                     : "text-mg-dark-textSecondary"
//               }`}
//             >
//               <motion.div
//                 className={`p-2.5 rounded-xl ${active ? "bg-[#00c896]/20" : ""}`}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {link.icon}
//               </motion.div>
//               <span className="text-xs font-medium">{link.name}</span>
//               {active && (
//                 <motion.div
//                   layoutId="mobileDot"
//                   className="h-1.5 w-1.5 bg-mg-gold rounded-full mt-1 shadow-lg"
//                   style={{ boxShadow: "0 0 10px rgba(212,175,55,0.8)" }}
//                 />
//               )}
//             </a>
//           );
//         })}

//         <button
//           onClick={() => setMenuOpen(true)}
//           className={`flex flex-col items-center gap-1 ${
//             theme === "light" ? "text-mg-light-textSecondary" : "text-mg-dark-textSecondary"
//           }`}
//         >
//           <div className="p-2.5 rounded-xl">
//             <Menu size={22} />
//           </div>
//           <span className="text-xs font-medium">Menu</span>
//         </button>
//       </motion.nav>

//       <MobileMenuDrawer
//         menuOpen={menuOpen}
//         setMenuOpen={setMenuOpen}
//         navLinks={navLinks.map((l) => ({ name: l.name, href: `#${l.id}` }))}
//         active={activeSection}
//       />
//     </>
//   );
// };

// export default Header;