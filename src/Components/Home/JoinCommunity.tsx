// src/components/JoinCommunity/JoinCommunity3D.tsx
import { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Billboard, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import CommunityModal from "./CommunityModal";
import { Instagram, Youtube, Send, Twitter } from "lucide-react";
import * as THREE from "three";
import MarketGodStars from "./MarketGodStars";
import { useTheme } from "../../context/ThemeContext";

function GlobeWithLogos({ logos }: { logos: string[] }) {
  const { theme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);
  const textures = useLoader(THREE.TextureLoader, logos);

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.05;
  });

  const radius = 1;
  const logoPositions = useMemo(() => {
    return Array.from({ length: textures.length * 6 }).map(() => {
      const theta = Math.random() * Math.PI;
      const phi = Math.random() * 2 * Math.PI;
      return new THREE.Vector3(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.cos(theta),
        radius * Math.sin(theta) * Math.sin(phi)
      );
    });
  }, [textures.length]);

  const globeColor = theme === "dark" ? "#000000" : "gray";
  const emissiveColor = theme === "dark" ? "#D4AF37" : "#B8860B";

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial color={globeColor} roughness={0.6} metalness={0.2} />
      </mesh>
      {logoPositions.map((pos, i) => (
        <Billboard key={i} position={pos}>
          <mesh>
            <planeGeometry args={[0.25, 0.25]} />
            <meshStandardMaterial
              map={textures[i % textures.length]}
              transparent
              emissive={emissiveColor}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Billboard>
      ))}
      <OrbitingText />
    </group>
  );
}

function OrbitingText() {
  const { theme } = useTheme();
  const ref = useRef<THREE.Group>(null);
  const words = "MARKETGODACADEMY".split("");
  const radius = 2.3;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.1;
    if (ref.current) ref.current.rotation.y = t;
  });

  const textColor = theme === "dark" ? "#D4AF37" : "#B8860B";

  return (
    <group ref={ref}>
      {words.map((word, i) => {
        const angle = (i / words.length) * Math.PI * 2;
        return (
          <Text
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            rotation={[0, -angle, 0]}
            fontSize={0.25}
            color={textColor}
            anchorX="center"
            anchorY="middle"
          >
            {word}
          </Text>
        );
      })}
    </group>
  );
}

export default function JoinCommunity3D() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const links = useMemo(
    () => [
      { name: "Telegram", href: "https://t.me/MarketGodAcademy", icon: <Send /> },
      { name: "Instagram", href: "https://instagram.com/marketgodacademy", icon: <Instagram /> },
      { name: "YouTube", href: "https://youtube.com/MarketGodAcademy", icon: <Youtube /> },
      { name: "Twitter (X)", href: "https://x.com/MarketGodAcademy", icon: <Twitter /> },
    ],
    []
  );

  return (
    <section
      className={`relative py-24 ${
        isDark
          ? "bg-gradient-to-t from-mg-black via-mg-charcoal to-mg-black"
          : "bg-gradient-to-t from-mg-light-bg via-mg-paper to-mg-light-bg"
      } text-mg-light-text dark:text-mg-dark-text`}
      id="community"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-mg-gold mb-4">
            Join <span className="text-mg-green">MarketGod Academy</span> Community
          </h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-mg-light-textSecondary dark:text-mg-dark-textSecondary">
            Connect with traders from across Africa and the world. All from the heart of Ghana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left CTA */}
          <div
            className="relative p-8 rounded-3xl border border-mg-gold/30 shadow-gold-glow backdrop-blur-md overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="absolute inset-0 bg-mg-paper/30 dark:bg-mg-black/80 rounded-3xl" />
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 left-[-50%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-mg-gold/50 to-transparent animate-lightStreak1" />
              <div className="absolute top-[30%] left-[-50%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-mg-green/50 to-transparent animate-lightStreak2" />
              <div className="absolute top-[60%] left-[-50%] w-[200%] h-[1.5px] bg-gradient-to-r from-transparent via-mg-gold/40 to-transparent animate-lightStreak3" />
            </div>

            <motion.h3 className="relative text-3xl sm:text-4xl font-extrabold text-mg-gold z-10">
              Connect with <span className="text-mg-green">MarketGod Academy</span>
            </motion.h3>

            <motion.p className="relative text-mg-charcoal dark:text-mg-paper text-lg sm:text-xl mt-4 z-10">
              VIP signals, mentorship, webinars — all guided by MarketGod experts.
            </motion.p>

            <div className="relative z-10 flex flex-wrap gap-3 mt-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mg-paper/60 dark:bg-mg-charcoal/60 border border-mg-gold/30 text-mg-charcoal dark:text-mg-paper hover:text-mg-paper hover:bg-gradient-to-r hover:from-mg-gold/80 hover:to-mg-green/80 transition-all"
                >
                  <span className="w-6 h-6 flex items-center justify-center text-mg-gold group-hover:text-mg-paper">
                    {l.icon}
                  </span>
                  <span className="text-sm font-semibold">{l.name}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="relative z-10 mt-6 w-full px-8 py-4 rounded-full bg-gradient-to-r from-mg-gold to-mg-green text-mg-charcoal dark:text-mg-paper font-bold text-lg shadow-gold-glow hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)] transition-all"
            >
              Join Community
            </button>
          </div>

          {/* Right - 3D Globe */}
          <div className={`w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-mg-charcoal/60 dark:bg-mg-black/60  ${
        !isDark
          && "bg-gradient-to-t from-mg-black via-mg-charcoal to-mg-black"
      }
          
      }`}>
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[4, 4, 4]} intensity={1} />
              <Suspense fallback={null}>
                <GlobeWithLogos logos={["/logo.png"]} />
                <Stars radius={40} depth={60} count={300} factor={4} fade />
                <MarketGodStars />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
            </Canvas>
          </div>
        </div>
      </div>

      <CommunityModal open={open} onClose={() => setOpen(false)} links={links} />
    </section>
  );
}