// src/Components/Plans/WhoIsFor.tsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const items = [
  {
    title: "Beginners",
    desc: "Those with little to no experience who want to understand forex from the ground up.",
  },
  {
    title: "Side Hustlers & Entrepreneurs",
    desc: "People looking for a second income stream with a skill that pays for life.",
  },
  {
    title: "Students & Young Professionals",
    desc: "Anyone wanting to build future financial independence early.",
  },
  {
    title: "Traders Who Need Structure",
    desc: "People who have the knowledge but lack consistency, discipline, or a clear trading system.",
  },
];

const WhoIsFor = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-24 relative overflow-hidden">
       <h2 className="text-3xl md:text-5xl font-black mb-6 text-center">
            <span className="text-mg-gold">Who Is</span>{" "}
            <span className={isDark ? "text-white" : "text-mg-charcoal"}>
              This Course For?
            </span>
          </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Gradient Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mg-gold/40 via-mg-green/40 to-transparent blur-2xl opacity-60" />

          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-mg-gold/30"
          >
            <img
              src="https://res.cloudinary.com/dzqdfaghg/image/upload/v1763522350/SnapInsta.to_475805185_18485769334003421_4253108973963297143_n_otuucy.jpg" // Replace later
              alt="Who This Course Is For"
              className="w-full h-full object-cover"
            />

            {/* Shiny Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
         
          <p className={`text-lg md:text-xl max-w-xl mb-10 ${
            isDark ? "text-mg-paper/70" : "text-mg-charcoal/70"
          }`}>
            Whether you're a beginner or someone struggling with consistency,
            this program gives you the structure, clarity, and system you need
            to win.
          </p>

          {/* Bullet List */}
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4"
              >
                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: i * 0.15 }}
                >
                  <CheckCircle className="text-mg-green w-9 h-9 flex-shrink-0" />
                </motion.div>

                {/* Text */}
                <div>
                  <p className="text-xl font-bold text-mg-gold">{item.title}</p>
                  <p
                    className={`text-base md:text-lg ${
                      isDark ? "text-mg-paper/80" : "text-mg-charcoal/80"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <motion.a
            href="/plans"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full font-bold text-lg
              bg-mg-green text-white shadow-xl hover:shadow-mg-green/50 transition-all"
          >
            Join the Program
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoIsFor;
