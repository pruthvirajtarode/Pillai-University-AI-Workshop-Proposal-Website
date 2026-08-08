import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { Lightbulb, Cpu, GitBranch, Wand2, MessageSquare, Wrench, BookOpen, ShieldCheck, Trophy, ArrowRight, ArrowLeft } from 'lucide-react';

const journeyStages = [
  {
    step: "01",
    title: "WHAT IS AI?",
    icon: <Lightbulb className="w-6 h-6" />,
    desc: "Simple explanation of AI as a concept with examples from daily life.",
    details: [
      "AI stands for Artificial Intelligence — making machines perform tasks that normally require human thinking.",
      "Examples you already use: Google Search ranking, Netflix recommendations, Spotify playlists, Face ID on your phone.",
      "AI doesn't 'think' like humans. It recognizes patterns from large amounts of data.",
      "Three types: Narrow AI (specific tasks), General AI (concept), Super AI (theoretical).",
    ],
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    step: "02",
    title: "HOW AI WORKS",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Data, Patterns, Models, Predictions, Generative Models — explained simply.",
    details: [
      "Step 1 — Data: AI needs a lot of examples to learn from. Like a student studying thousands of solved problems.",
      "Step 2 — Patterns: AI finds repeating structures in that data without being told what to look for.",
      "Step 3 — Training: Adjust the AI's internal settings by showing it examples and correcting mistakes.",
      "Step 4 — Prediction: After training, the AI can make intelligent guesses on new, unseen data.",
    ],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    step: "03",
    title: "AI vs ML vs DEEP LEARNING",
    icon: <GitBranch className="w-6 h-6" />,
    desc: "A simple hierarchy — no complicated mathematics required.",
    details: [
      "AI is the broad concept: making machines behave intelligently.",
      "Machine Learning is a method of achieving AI: systems that learn from data.",
      "Deep Learning is a type of ML using neural networks — used for images, speech, and language.",
      "Generative AI is the latest layer: models that can create new content — text, images, code.",
    ],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    step: "04",
    title: "GENERATIVE AI",
    icon: <Wand2 className="w-6 h-6" />,
    desc: "Text, Images, Audio, Video, Code — how AI creates new content.",
    details: [
      "Generative AI creates new content rather than just classifying or predicting.",
      "Text: ChatGPT, Claude, Gemini — generate essays, code, summaries.",
      "Images: Midjourney, DALL·E — generate visuals from text descriptions.",
      "Audio & Video: Generate music, speech, and short videos from prompts.",
    ],
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    step: "05",
    title: "PROMPTING",
    icon: <MessageSquare className="w-6 h-6" />,
    desc: "Context, Role, Task, Constraints, Examples, Output Format.",
    details: [
      "A prompt is the instruction you give to an AI. Better prompts → better outputs.",
      "Role: 'You are an expert university professor…'",
      "Task: 'Explain this concept in simple language with examples.'",
      "Constraints: 'Keep the response under 200 words. Use bullet points.'",
    ],
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
  {
    step: "06",
    title: "AI TOOLS",
    icon: <Wrench className="w-6 h-6" />,
    desc: "Essential platforms for students across all disciplines.",
    details: [
      "ChatGPT — versatile writing, coding, brainstorming, Q&A.",
      "Gemini — research, web-connected answers, Google integration.",
      "NotebookLM — upload your own notes and have AI answer from them.",
      "Gamma — instantly generate presentation slides from text.",
    ],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    step: "07",
    title: "REAL STUDENT WORKFLOWS",
    icon: <BookOpen className="w-6 h-6" />,
    desc: "Demonstrating actual tasks students complete daily with AI.",
    details: [
      "Summarise a 50-page chapter in 2 minutes.",
      "Generate 10 quiz questions from lecture notes.",
      "Draft a business email or presentation structure in seconds.",
      "Debug code and get step-by-step explanations.",
    ],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    step: "08",
    title: "RESPONSIBLE AI",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Privacy, bias, hallucinations, academic integrity.",
    details: [
      "AI can hallucinate — producing confident-sounding but incorrect information.",
      "Always verify AI-generated facts with trusted sources.",
      "Do not share personal, confidential, or sensitive information with public AI tools.",
      "Use AI as a collaborator, not a replacement for your own thinking.",
    ],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    step: "09",
    title: "HANDS-ON CHALLENGE",
    icon: <Trophy className="w-6 h-6" />,
    desc: "Using AI to solve a real, discipline-specific practical problem.",
    details: [
      "Students pick a domain: Engineering, Business, Architecture, or Computer Applications.",
      "Identify a real problem they face academically or professionally.",
      "Use AI tools and structured prompts to work towards a solution.",
      "Present their approach, the AI's output, and their critical evaluation of it.",
    ],
    color: "text-pillai-primary",
    bg: "bg-pillai-primary/5",
    border: "border-pillai-primary/20",
  },
];

export function AIJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const active = journeyStages[activeStage];

  return (
    <section id="ai-journey" aria-labelledby="ai-journey-heading" className="py-24 bg-pillai-light relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pillai-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pillai-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            id="ai-journey-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6 tracking-tight"
          >
            The Student <span className="text-gradient">AI Journey</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A step-by-step foundation. We start from absolute basics — no programming knowledge required. Click any stage to explore.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ── Selector ── */}
          <nav
            aria-label="AI Journey stages"
            className="w-full lg:w-[400px] relative"
          >
            {/* Desktop Connected Line */}
            <div className="absolute inset-y-0 left-7 w-1 bg-gray-200 hidden lg:block rounded-full">
              {/* Active Progress Fill */}
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-pillai-primary to-pillai-accent rounded-full origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: (activeStage + 1) / journeyStages.length }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-0 relative z-10">
              {journeyStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  aria-pressed={activeStage === idx}
                  className={cn(
                    "relative flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-6 p-4 lg:p-5 text-center lg:text-left rounded-2xl lg:rounded-none transition-all group",
                    activeStage === idx
                      ? "lg:bg-transparent bg-white shadow-md lg:shadow-none"
                      : "opacity-60 hover:opacity-100 hover:bg-white/50 lg:hover:bg-transparent"
                  )}
                >
                  {/* Sliding Background for Desktop */}
                  {activeStage === idx && (
                    <motion.div
                      layoutId="activeStageBg"
                      className="hidden lg:block absolute inset-0 bg-white rounded-2xl shadow-sm border border-gray-100 -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Timeline dot — desktop only */}
                  <div className={cn(
                    "hidden lg:flex w-14 h-14 rounded-full shrink-0 items-center justify-center border-4 transition-all duration-300 relative z-10",
                    activeStage === idx
                      ? "bg-pillai-primary border-pillai-primary/20 text-white shadow-[0_0_20px_rgba(158,27,35,0.4)] scale-110"
                      : "bg-white border-gray-200 text-gray-400 group-hover:border-pillai-primary/50"
                  )}>
                    <div className={activeStage === idx ? "text-white" : stage.color}>
                      {stage.icon}
                    </div>
                  </div>

                  {/* Mobile circle */}
                  <div className={cn(
                    "lg:hidden w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all shrink-0 shadow-sm",
                    activeStage === idx
                      ? "bg-pillai-primary border-pillai-primary text-white"
                      : "bg-white border-gray-200 text-gray-500"
                  )}>
                    {stage.icon}
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">Stage {stage.step}</span>
                    <span className={cn(
                      "font-extrabold text-sm md:text-base leading-tight transition-colors",
                      activeStage === idx ? "text-pillai-primary" : "text-gray-700"
                    )}>
                      {stage.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </nav>

          {/* ── Detail Panel ── */}
          <div className="flex-1 min-w-0 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full flex flex-col"
              >
                {/* Stage header */}
                <div className={cn("inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 border text-sm font-bold shadow-sm w-fit", active.bg, active.border, active.color)}>
                  {active.icon}
                  Stage {active.step}
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-pillai-dark mb-4 tracking-tight">
                  {active.title}
                </h3>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">{active.desc}</p>

                <ul className="space-y-4 flex-1">
                  {active.details.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <span className={cn("shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border shadow-sm", active.bg, active.border, active.color)}>
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-base leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
                  <button
                    onClick={() => setActiveStage(prev => Math.max(0, prev - 1))}
                    disabled={activeStage === 0}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-pillai-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:-translate-x-1"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                  
                  {/* Dots indicator for mobile */}
                  <div className="flex gap-1.5 lg:hidden">
                    {journeyStages.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${activeStage === i ? 'w-4 bg-pillai-primary' : 'w-1.5 bg-gray-200'}`} />
                    ))}
                  </div>

                  <span className="hidden lg:block text-sm font-bold text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
                    {activeStage + 1} of {journeyStages.length}
                  </span>

                  <button
                    onClick={() => setActiveStage(prev => Math.min(journeyStages.length - 1, prev + 1))}
                    disabled={activeStage === journeyStages.length - 1}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-pillai-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:translate-x-1"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
