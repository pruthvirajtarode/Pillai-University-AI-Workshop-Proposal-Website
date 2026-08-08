import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronRight } from 'lucide-react';

const useCases = [
  {
    emoji: "🎯",
    tag: "Placement Prep",
    title: "Practice 20 Interview Questions for TCS/Infosys in 10 Minutes",
    prompt: `You are an HR interviewer at TCS. I am applying for a software engineering role. Ask me 20 technical + HR interview questions one by one. After each answer I give, tell me what was good, what was weak, and how to improve.`,
    result: "Personalised mock interview with instant feedback — no coaching class needed.",
    color: "from-orange-500 to-red-500",
    lightBg: "bg-orange-50",
    borderColor: "border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "📝",
    tag: "Academic Writing",
    title: "Write Your Full Internship Report Intro in 5 Minutes",
    prompt: `You are an academic writing expert. Write a 250-word introduction for my internship report at [company name] where I worked on [project]. Make it formal, include objectives, scope, and significance. Match B.Tech final year report standards.`,
    result: "A publication-quality introduction — not a vague, copied paragraph.",
    color: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "🚀",
    tag: "Entrepreneurship",
    title: "Build a Startup Pitch Deck from Just 3 Bullet Points",
    prompt: `I want to build a startup that does [your idea in one line]. My target customers are [who]. The problem I solve is [what]. Create a 10-slide pitch deck outline with: Problem, Solution, Market Size, Business Model, Revenue Plan, Competition, Team, Financials, Roadmap, Ask.`,
    result: "A VC-ready pitch structure in under 60 seconds — what consultants charge ₹50,000 for.",
    color: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "📖",
    tag: "Study Smarter",
    title: "Convert 50 Pages of Notes into a 1-Page Study Sheet",
    prompt: `Here are my notes on [topic]: [paste notes]. Create a structured 1-page summary with: Key Concepts, Important Formulas, Common Exam Questions, Quick Memory Tricks, and 5-minute revision points.`,
    result: "From a pile of notes to an exam-ready cheat sheet in under 2 minutes.",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    emoji: "💼",
    tag: "Career",
    title: "Rewrite Your Resume to Match Any Job Description",
    prompt: `Here is my current resume: [paste resume]. Here is the job description I am applying for: [paste JD]. Rewrite my resume to match this JD — highlight relevant skills, use keywords from the JD, make it ATS-friendly, and make my experience sound more impactful using action verbs.`,
    result: "A tailored resume for every job — not one generic resume for everything.",
    color: "from-yellow-500 to-orange-500",
    lightBg: "bg-yellow-50",
    borderColor: "border-yellow-200",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    emoji: "🎨",
    tag: "Design",
    title: "Get a Full Design Brief and Concept Direction in Seconds",
    prompt: `I am a B.Des student designing a [product/space/brand] for [target audience]. The core value I want to communicate is [value]. Give me: 3 concept directions, a colour palette for each, typography suggestions, mood keywords, and reference styles I should research.`,
    result: "A complete creative brief — the kind a design agency would charge for.",
    color: "from-pink-500 to-rose-600",
    lightBg: "bg-pink-50",
    borderColor: "border-pink-200",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "🔬",
    tag: "Research",
    title: "Generate a Full Literature Review Outline in Any Domain",
    prompt: `I am writing a research paper on [your topic] for a [B.Tech/MBA/B.Des] final year project. Generate a structured literature review outline with: 5 key themes, 3-4 important sub-topics per theme, what research gap exists, and suggested search keywords for Google Scholar.`,
    result: "A research roadmap that would take days of reading — done in minutes.",
    color: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    borderColor: "border-cyan-200",
    tagColor: "bg-cyan-100 text-cyan-700",
  },
  {
    emoji: "📊",
    tag: "Business",
    title: "Run a Complete SWOT & Competitive Analysis on Any Brand",
    prompt: `Act as a senior business analyst. Analyse [Company/Brand Name] and give me: SWOT Analysis, Porter's 5 Forces, Top 3 competitors with comparison table, current market positioning, and 3 strategic recommendations with rationale.`,
    result: "A consultant-level company analysis for any presentation or case study.",
    color: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    borderColor: "border-violet-200",
    tagColor: "bg-violet-100 text-violet-700",
  },
];

export function StudentSuperpowers() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section
      id="superpowers"
      aria-labelledby="superpowers-heading"
      className="py-28 bg-pillai-dark relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pillai-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pillai-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pillai-accent/10 border border-pillai-accent/20 text-pillai-accent font-bold text-xs tracking-wider uppercase mb-6"
          >
            <Zap className="w-4 h-4" fill="currentColor" />
            Real Student Superpowers
          </motion.div>
          <motion.h2
            id="superpowers-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight"
          >
            Things You Can Do With AI{' '}
            <span className="text-pillai-accent">Today. Right Now.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Not theoretical. Not "coming soon." These are real prompts that real students are using right now to get results that used to take days — or cost thousands.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Selector List */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`shrink-0 lg:shrink text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 ${
                  active === idx
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'border-white/5 text-gray-400 hover:text-white hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <span className="text-xl shrink-0">{uc.emoji}</span>
                <div className="min-w-0 hidden lg:block">
                  <div className="text-xs font-bold text-gray-400 mb-0.5">{uc.tag}</div>
                  <div className="text-sm font-semibold leading-snug line-clamp-2">{uc.title}</div>
                </div>
                <span className="hidden lg:block ml-auto">
                  {active === idx && <ChevronRight className="w-4 h-4 text-pillai-accent shrink-0" />}
                </span>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-8 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  {current.emoji}
                </div>
                <div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${current.tagColor}`}>{current.tag}</span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-snug">{current.title}</h3>
                </div>
              </div>

              {/* Prompt Block */}
              <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="bg-gray-800 px-5 py-3 flex items-center gap-3 border-b border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">Your Prompt</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-200 text-sm leading-relaxed font-mono whitespace-pre-wrap">{current.prompt}</p>
                </div>
              </div>

              {/* Result */}
              <div className={`${current.lightBg} border ${current.borderColor} rounded-2xl p-6 flex items-start gap-4`}>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center shrink-0`}>
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">What You Get</div>
                  <p className="font-bold text-gray-800 text-base leading-snug">{current.result}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <button
                  onClick={() => setActive(p => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="text-sm font-semibold text-gray-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                >
                  ← Prev
                </button>
                <div className="flex gap-2">
                  {useCases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-pillai-accent w-6' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActive(p => Math.min(useCases.length - 1, p + 1))}
                  disabled={active === useCases.length - 1}
                  className="text-sm font-semibold text-gray-400 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
