// src/components/Quiz/Quiz.tsx
// Eugene Afriyie UEB3502023
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Quiz purpose:
 * - Classify user into: mentorship | paidVIP | freeVIP | community
 * - Uses weighted scoring per option
 * - Minimal gold accents for CTA/highlight
 */

/* ---------- Questions config ---------- */
/* Each option provides a weight object that contributes to categories */
type Category = "mentorship" | "paidVIP" | "freeVIP" | "community";

type Option = {
  id: string;
  label: string;
  helper?: string;
  weight: Record<Category, number>;
};

type Question = {
  id: string;
  question: string;
  subtitle?: string;
  options: Option[];
  single?: boolean; // single-choice (radio) vs multi (checkbox)
};

const QUESTIONS: Question[] = [
  {
    id: "q_experience",
    question: "What's your current trading experience?",
    options: [
      { id: "exp_none", label: "No experience — brand new", weight: { mentorship: 2, paidVIP: 0, freeVIP: 1, community: 1 } },
      { id: "exp_started", label: "Some basics, inconsistent results", weight: { mentorship: 3, paidVIP: 1, freeVIP: 0, community: 1 } },
      { id: "exp_intermediate", label: "I trade occasionally, want structure", weight: { mentorship: 2, paidVIP: 2, freeVIP: 0, community: 2 } },
      { id: "exp_advanced", label: "Experienced & want support/scale", weight: { mentorship: 1, paidVIP: 3, freeVIP: 0, community: 2 } },
    ],
    single: true,
  },
  {
    id: "q_goal",
    question: "What's your main goal right now?",
    options: [
      { id: "goal_learn", label: "Learn to trade consistently", weight: { mentorship: 4, paidVIP: 0, freeVIP: 0, community: 1 } },
      { id: "goal_income", label: "Generate steady side income", weight: { mentorship: 2, paidVIP: 3, freeVIP: 1, community: 1 } },
      { id: "goal_speed", label: "Get instant trade signals to act", weight: { mentorship: 0, paidVIP: 3, freeVIP: 2, community: 0 } },
      { id: "goal_network", label: "Join a supportive trader community", weight: { mentorship: 0, paidVIP: 0, freeVIP: 0, community: 4 } },
    ],
    single: true,
  },
  {
    id: "q_time",
    question: "How much time can you commit weekly to learning/trading?",
    options: [
      { id: "time_low", label: "< 3 hours (busy)", weight: { mentorship: 0, paidVIP: 2, freeVIP: 1, community: 2 } },
      { id: "time_medium", label: "3–8 hours", weight: { mentorship: 2, paidVIP: 2, freeVIP: 1, community: 1 } },
      { id: "time_high", label: "> 8 hours (serious)", weight: { mentorship: 4, paidVIP: 1, freeVIP: 0, community: 1 } },
    ],
    single: true,
  },
  {
    id: "q_capital",
    question: "What is your trading / deployable capital (approx)?",
    options: [
      { id: "cap_small", label: "< $100", weight: { mentorship: 1, paidVIP: 2, freeVIP: 3, community: 1 } },
      { id: "cap_medium", label: "$100–$500", weight: { mentorship: 2, paidVIP: 3, freeVIP: 1, community: 1 } },
      { id: "cap_large", label: "> $500", weight: { mentorship: 3, paidVIP: 3, freeVIP: 0, community: 1 } },
    ],
    single: true,
  },
  {
    id: "q_commitment",
    question: "Pick statements that apply to you (choose all that match).",
    options: [
      { id: "c_learning", label: "I prefer guided learning and feedback", weight: { mentorship: 3, paidVIP: 0, freeVIP: 0, community: 1 } },
      { id: "c_copy", label: "I want signals to copy while I learn", weight: { mentorship: 1, paidVIP: 3, freeVIP: 2, community: 0 } },
      { id: "c_peer", label: "I value community Q&A and peer support", weight: { mentorship: 0, paidVIP: 0, freeVIP: 0, community: 3 } },
      { id: "c_pay", label: "I can invest in a paid plan / subscription", weight: { mentorship: 1, paidVIP: 3, freeVIP: 0, community: 0 } },
      { id: "c_time", label: "I can attend weekly live sessions", weight: { mentorship: 3, paidVIP: 0, freeVIP: 0, community: 1 } },
    ],
    single: false,
  },
  {
    id: "q_pref",
    question: "If you had to choose one right now — what would you pick?",
    options: [
      { id: "pref_mentor", label: "Mentor & structured curriculum", weight: { mentorship: 5, paidVIP: 0, freeVIP: 0, community: 0 } },
      { id: "pref_paid", label: "Paid VIP signals with priority alerts", weight: { mentorship: 0, paidVIP: 5, freeVIP: 0, community: 0 } },
      { id: "pref_free", label: "Free signals / community first", weight: { mentorship: 0, paidVIP: 0, freeVIP: 5, community: 0 } },
      { id: "pref_community", label: "Community support & practice", weight: { mentorship: 0, paidVIP: 0, freeVIP: 0, community: 5 } },
    ],
    single: true,
  },
];

const PRICING = {
  paidVIP: { price: "$70/mo", alt: "$99/mo (Gold Inner Circle)", href: "https://t.me/livetradewithmarketgodbot" },
  mentorshipA: { price: "$546", label: "Mentorship (full)", href: "/plans#mentorship" },
  mentorshipB: { price: "$351", label: "Mentorship 2026", href: "/plans#mentorship" },
  freeVIP: { price: "Free (with partner ID)", href: "/support#partner" },
};

/* ---------- Component ---------- */

const Quiz: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [finished, setFinished] = useState(false);
  const [scores, setScores] = useState<Record<Category, number> | null>(null);
  const [contact, setContact] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // initialize answers map
    if (Object.keys(answers).length === 0) {
      const map: Record<string, string[]> = {};
      QUESTIONS.forEach((q) => (map[q.id] = []));
      setAnswers(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectOption = (qId: string, optionId: string, single = true) => {
    setAnswers((prev) => {
      const copy = { ...prev };
      if (single) {
        copy[qId] = [optionId];
      } else {
        const set = new Set(copy[qId] || []);
        if (set.has(optionId)) set.delete(optionId);
        else set.add(optionId);
        copy[qId] = Array.from(set);
      }
      return copy;
    });
  };

  const computeScores = () => {
    const totals: Record<Category, number> = { mentorship: 0, paidVIP: 0, freeVIP: 0, community: 0 };
    QUESTIONS.forEach((q) => {
      const chosen = answers[q.id] || [];
      chosen.forEach((optId) => {
        const option = q.options.find((o) => o.id === optId);
        if (option) {
          Object.entries(option.weight).forEach(([cat, val]) => {
            totals[cat as Category] += val as number;
          });
        }
      });
    });
    setScores(totals);
    return totals;
  };

  const decide = (totals: Record<Category, number>) => {
    // main highest wins, but apply business rules:
    // - If mentorship score strongly dominant OR user chooses mentorship pref -> mentorship
    // - If paidVIP score high OR capital low but wants signals -> paidVIP
    // - If freeVIP score high -> freeVIP
    // - If community high but others low -> community
    const sorted = (Object.keys(totals) as Category[]).sort((a, b) => totals[b] - totals[a]);
    const top = sorted[0];
    // additional heuristics
    const prefQ = answers["q_pref"]?.[0] || "";
    if (prefQ === "pref_mentor") return "mentorship";
    if (prefQ === "pref_paid") return "paidVIP";
    if (prefQ === "pref_free") return "freeVIP";
    if (prefQ === "pref_community") return "community";

    // if mentorship has 60%+ of total
    const sum = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
    if (totals.mentorship / sum >= 0.5) return "mentorship";
    // if paidVIP is top and capital is at least medium or user indicated ability to pay
    if (top === "paidVIP") return "paidVIP";
    if (top === "freeVIP") return "freeVIP";
    return "community";
  };

  const onNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // finish
    const totals = computeScores();
    setFinished(true);
    const rec = decide(totals);
    // setScores already set; keep finished true
    // Optionally: prefill contact modal with suggested plan
  };

  const onPrev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const restart = () => {
    const map: Record<string, string[]> = {};
    QUESTIONS.forEach((q) => (map[q.id] = []));
    setAnswers(map);
    setStep(0);
    setFinished(false);
    setScores(null);
  };

  const sendResult = async () => {
    setSubmitting(true);
    // placeholder: you can post the result to backend here
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    alert("Result saved. We'll reach out soon.");
  };

  const renderResultCard = () => {
    if (!scores) return null;
    const rec = decide(scores) as Category;
    const sorted = (Object.keys(scores) as Category[]).sort((a, b) => scores[b] - scores[a]);

    const recommendation = {
      mentorship: {
        title: "Recommended: Mentorship",
        explanation:
          "You show readiness to learn, commit time, and benefit from structured, personalized guidance. Mentorship will give you clarity, trade reviews, and consistent growth.",
        plan: PRICING.mentorshipA,
        ctaLabel: "Apply for Mentorship",
        ctaHref: "/plans#mentorship",
      },
      paidVIP: {
        title: "Recommended: Paid VIP Signals",
        explanation:
          "You need reliable, priority signals and quicker market access. Paid VIP gets you priority alerts and daily breakdowns — ideal for traders wanting immediate market exposure.",
        plan: PRICING.paidVIP,
        ctaLabel: "Join VIP Signals",
        ctaHref: PRICING.paidVIP.href,
      },
      freeVIP: {
        title: "Recommended: Free VIP (Partner)",
        explanation:
          "You qualify for our free signals via partner enrollment. This is ideal if you're starting with limited capital but want professional signal access.",
        plan: PRICING.freeVIP,
        ctaLabel: "Get Free VIP",
        ctaHref: PRICING.freeVIP.href,
      },
      community: {
        title: "Recommended: Join the Community",
        explanation:
          "Peer support and community Q&A will help you learn faster. Join the community to share ideas, ask questions, and practice in a supportive environment.",
        plan: { price: "Community Access", href: "https://t.me/marketgodcommunity" },
        ctaLabel: "Join Community",
        ctaHref: "https://t.me/marketgodcommunity",
      },
    }[rec];

    return (
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
        <div className={`p-8 rounded-2xl border ${isDark ? "bg-mg-charcoal/80 border-mg-gold/20" : "bg-white/95 border-gray-200"}`}>
          <h3 className="text-2xl font-extrabold mb-2">{recommendation.title}</h3>
          <p className={`mb-6 ${isDark ? "text-mg-paper/70" : "text-gray-700"}`}>{recommendation.explanation}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={recommendation.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition
                bg-mg-gold text-black hover:shadow-gold-glow"
            >
              {recommendation.ctaLabel} <ArrowRight size={16} />
            </a>

            <button
              onClick={() => {
                // show breakdown modal - we'll just toggle contact prompt for now
                const email = contact || prompt("Enter your email (optional) to receive tailored plan:");
                if (email) {
                  setContact(email);
                  void sendResult();
                }
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                isDark ? "bg-white/5 text-white border border-white/10" : "bg-gray-100 text-gray-900 border border-gray-200"
              }`}
            >
              Save & Contact
            </button>
          </div>

          <div className="mt-6 text-left">
            <p className="text-sm font-semibold mb-2">Score breakdown</p>
            <div className="grid grid-cols-2 gap-2">
              {sorted.map((k) => (
                <div key={k} className="flex items-center gap-3">
                  <CheckCircle className="text-mg-gold" />
                  <div>
                    <div className="text-sm font-medium capitalize">{k}</div>
                    <div className="text-xs text-gray-400">{scores[k]} pts</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  /* ---------- Helpers ---------- */
  const currentQuestion = QUESTIONS[step];

  return (
    <section className={`max-w-5xl mx-auto py-12 px-6 ${isDark ? "text-white" : "text-black"}`}>
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Quick Fit Quiz</h2>
        <p className="mt-2 text-sm md:text-base text-gray-500">
          5 minutes — find the best way MarketGod can support your trading journey.
        </p>
      </div>

      {!finished ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between mb-2 text-xs text-gray-500">
              <div>Question {step + 1} / {QUESTIONS.length}</div>
              <div>{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</div>
            </div>
            <div className="w-full bg-gray-200/40 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-mg-gold transition-all"
                style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={`p-6 rounded-2xl border ${isDark ? "bg-mg-charcoal/70 border-mg-gold/10" : "bg-white border-gray-200"}`}
          >
            <div className="mb-3">
              <h3 className="text-xl font-bold">{currentQuestion.question}</h3>
              {currentQuestion.subtitle && <p className="text-sm text-gray-400">{currentQuestion.subtitle}</p>}
            </div>

            <div className="grid gap-3">
              {currentQuestion.options.map((opt) => {
                const selected = (answers[currentQuestion.id] || []).includes(opt.id);
                const single = !!currentQuestion.single;
                return (
                  <motion.button
                    key={opt.id}
                    onClick={() => selectOption(currentQuestion.id, opt.id, single)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-4 rounded-lg border flex flex-col sm:flex-row sm:items-center gap-2 transition ${
                      selected
                        ? "bg-mg-gold/10 border-mg-gold"
                        : isDark
                        ? "bg-white/3 border-transparent"
                        : "bg-gray-50 border-gray-200"
                    }`}
                    aria-pressed={selected}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className={`font-bold ${selected ? "text-mg-gold" : "text-gray-400"}`}>{selected ? "✓" : ""}</span>
                    </div>
                    <div>
                      <div className={`font-medium ${selected ? "text-mg-gold" : ""}`}>{opt.label}</div>
                      {opt.helper && <div className="text-xs text-gray-400">{opt.helper}</div>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={onPrev}
                disabled={step === 0}
                className={`px-4 py-2 rounded-md border ${isDark ? "border-white/10" : "border-gray-200"} ${step === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
              >
                Back
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    // ensure at least one selection for required single-choice questions
                    const chosen = answers[currentQuestion.id] || [];
                    if (chosen.length === 0) {
                      // small shake animation (visual) -- simple alert for now
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      alert("Please select an option to continue.");
                      return;
                    }
                    onNext();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-mg-gold text-black font-semibold hover:shadow-gold-glow transition"
                >
                  {step === QUESTIONS.length - 1 ? "See Recommendation" : "Next"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div>
          {renderResultCard()}
          <div className="mt-8 text-center">
            <button onClick={restart} className="px-4 py-2 rounded-md border border-gray-300">
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Quiz;
