// src/components/Plans/MarketGodQuiz.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../../context/ThemeContext";
import { CheckCircle, Copy, ExternalLink, Bot, Trophy, Shield, Zap, Send } from "lucide-react";

const TELEGRAM_BOT = "https://t.me/Livetradewithmarketgodbot";

const MarketGodQuiz: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [step, setStep] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const options = [
    { text: "I already have an Exness account under Eyram", icon: Trophy, next: 0 },
    { text: "I have an Exness account but not under Eyram", icon: Shield, next: 1 },
    { text: "I don’t have Exness account", icon: Zap, next: 2 },
    { text: "I don’t use Exness - pay for VIP access", icon: Bot, next: 3 },
  ];

  const handleBack = () => {
    setStep(null);
    setSubmitted(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://one.exness.link/a/vm10eq60");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // SEND EMAIL TO TELEGRAM BOT
  const sendToTelegramBot = () => {
    if (!email || !email.includes("@")) return;

    const message = encodeURIComponent(
      `New VIP Lead\nEmail: ${email}\nPath: Already under Eyram\nSource: MarketGod Quiz`
    );
    const url = `${TELEGRAM_BOT}?start=${btoa(message)}`;

    window.open(url, "_blank");
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4 text-center"
          >
            <h3 className="text-xl font-black text-mg-gold">Awesome</h3>
            <p className="text-xs">Please confirm your EXNESS email address so we can verify and grant you instant access.</p>

            <div className="flex items-center gap-2 px-3 py-2 bg-mg-charcoal/30 rounded-lg border border-mg-gold/30">
              <span className="text-lg">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your EXNESS email"
                className={`flex-1 p-2 rounded bg-transparent text-xs ${
                  isDark ? "text-mg-paper" : "text-mg-charcoal"
                } focus:outline-none`}
              />
            </div>

            <button
              onClick={sendToTelegramBot}
              disabled={!email.includes("@") || submitted}
              className={`w-full py-3 flex items-center justify-center gap-2 font-bold rounded-lg text-xs transition-all ${
                submitted
                  ? "bg-mg-green/80 text-white"
                  : email.includes("@")
                  ? "bg-mg-green text-white hover:bg-mg-gold"
                  : "bg-gray-500 text-white cursor-not-allowed"
              }`}
            >
              {submitted ? (
                <>
                  <CheckCircle size={16} /> Sent to Bot!
                </>
              ) : (
                <>
                  <Send size={16} /> Submit Email
                </>
              )}
            </button>

            <button onClick={handleBack} className="text-mg-green text-xs underline">Back</button>
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-3 text-xs"
          >
            <h3 className="text-xl font-black text-mg-gold text-center">Perfect</h3>
            <p className="text-center">To connect your existing EXNESS account under Eyram’s partnership, follow these steps carefully:</p>

            <ol className="space-y-1.5">
              <li><strong>1.</strong> Go to your EXNESS Personal Area</li>
              <li><strong>2.</strong> Click on the Chat Icon</li>
              <li><strong>3.</strong> Type: <code className="bg-mg-charcoal/50 px-1.5 py-0.5 rounded">“Partner Change”</code></li>
              <li><strong>4.</strong> Fill out the form they provide</li>
              <li><strong>5.</strong> When they ask for the partner link, send them this:</li>
            </ol>

            <div className="flex items-center justify-between p-2 bg-mg-charcoal/30 rounded-lg border border-mg-gold/30">
              <code className="text-xs text-mg-gold break-all">https://one.exness.link/a/vm10eq60</code>
              <button onClick={copyLink} className="p-1">
                {copied ? <CheckCircle size={16} className="text-mg-green" /> : <Copy size={16} />}
              </button>
            </div>

            <p className="text-center mt-3">Once done, wait for EXNESS to confirm the change.</p>
            <p className="text-center font-bold">After that, come back here and click below</p>

            <button
              onClick={() => setStep(0)}
              className="w-full py-3 bg-mg-gold text-mg-charcoal font-bold rounded-lg text-xs hover:opacity-90 transition"
            >
              I’ve Done It — Verify Email
            </button>

            <button onClick={handleBack} className="text-mg-green text-xs underline block mx-auto mt-2">Back</button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4 text-center"
          >
            <h3 className="text-xl font-black text-mg-gold">No worries</h3>
            <p className="text-xs">You can create one right now using Eyram’s official EXNESS link below</p>

            <a
              href="https://one.exnessonelink.com/boarding/sign-up/303589/a/eyram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-mg-green text-white font-bold rounded-lg text-xs hover:bg-mg-gold transition"
            >
              Create EXNESS Account <ExternalLink size={16} />
            </a>

            <p className="text-xs">Once your account is created, come back here and restart the process.</p>

            <button onClick={handleBack} className="text-mg-green text-xs underline">Back</button>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="space-y-4 text-center"
          >
            <h3 className="text-xl font-black text-mg-gold">No problem!</h3>
            <p className="text-xs">You can still join MarketGod’s VIP & Mentorship Programs by making payment through our official payment bot.</p>

            <a
              href={TELEGRAM_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg text-xs"
            >
              Tap below to proceed with your VIP subscription <Bot size={16} />
            </a>

            <button onClick={handleBack} className="text-mg-green text-xs underline">Back</button>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-lg md:text-xl font-black text-mg-gold">
              Please choose the option that applies to you
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              {options.map((opt, i) => {
                const Icon = opt.icon;
                return (
                  <Tilt key={i} scale={1.03} className="rounded-lg overflow-hidden">
                    <motion.div
                      onClick={() => setStep(opt.next)}
                      whileTap={{ scale: 0.97 }}
                      className={`p-3 text-left text-white font-medium text-xs flex items-center gap-3 bg-gradient-to-br ${
                        i === 0 ? "from-mg-green to-emerald-700" :
                        i === 1 ? "from-mg-gold to-yellow-600" :
                        i === 2 ? "from-blue-600 to-cyan-600" :
                        "from-purple-600 to-pink-600"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{opt.text}</span>
                    </motion.div>
                  </Tilt>
                );
              })}
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="py-4">
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
};

export default MarketGodQuiz;