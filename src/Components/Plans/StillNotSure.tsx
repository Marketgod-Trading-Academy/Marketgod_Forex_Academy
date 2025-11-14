import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const items = [
  {
    title: "You do NOT need prior experience",
    desc: "No charts, no complex apps, no financial jargon. We teach everything from scratch in simple, practical language.",
  },
  {
    title: "You get live support — not just theory",
    desc: "We guide you through each step in real time. Ask questions, get feedback, and never feel stuck.",
  },
  {
    title: "You get a support system + a skill that can change your finances",
    desc: "Gain long-term confidence with a proven strategy and a supportive community behind you.",
  },
  {
    title: "Members get free access to our resources",
    desc: "Get tools, guides, templates, and more — completely free, once you join.",
  },
];

const StillNotSurePremium: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Soft Glow Behind Image */}
          <div className="absolute inset-0 bg-primary/30 blur-[90px] rounded-2xl opacity-20"></div>

          <img
            src="/workshop.jpg"
            alt="Workshop"
            className="relative w-full rounded-3xl shadow-[0_0_80px_-20px_rgba(0,0,0,0.6)] object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          {/* Premium Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-primary/60 bg-clip-text text-transparent">
            Still Not Sure if This Workshop Is Right for You?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            This workshop is designed for real people — beginners, students, hustlers, 
            and traders who want clarity, structure, and a proven roadmap. We remove the confusion 
            and give you the exact steps to trade with confidence.
          </p>

          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle className="w-7 h-7 text-primary shrink-0" />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StillNotSurePremium;
