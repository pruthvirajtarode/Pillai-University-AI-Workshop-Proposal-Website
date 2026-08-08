import { motion } from 'framer-motion';
import { Search, Edit3, Clock, BrainCircuit, Lightbulb, TrendingUp, ArrowDown } from 'lucide-react';

const beforeItems = [
  { icon: <Search className="w-5 h-5" />, text: "Searching manually through pages of links" },
  { icon: <Edit3 className="w-5 h-5" />, text: "Writing every draft completely from scratch" },
  { icon: <Clock className="w-5 h-5" />, text: "Long, unstructured research cycles" },
  { icon: <Search className="w-5 h-5" />, text: "Limited idea exploration and brainstorming" },
];

const afterItems = [
  { icon: <BrainCircuit className="w-5 h-5" />, text: "AI-assisted research and synthesis in minutes" },
  { icon: <Lightbulb className="w-5 h-5" />, text: "Faster ideation using structured prompting" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Personalised study plans and summaries" },
  { icon: <BrainCircuit className="w-5 h-5" />, text: "Better productivity across all academic tasks" },
];

const disciplines = ["Engineering", "Business", "Architecture & Design", "Computer Applications"];

export function WhyAINow() {
  return (
    <section id="why-ai" aria-labelledby="why-ai-heading" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            id="why-ai-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6 text-balance"
          >
            AI Is No Longer Just a{' '}
            <span className="text-pillai-primary">Technology Subject.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            It is a general-purpose skill — as foundational as reading and writing.
            Whether you're in Engineering, Business, Architecture, or Computer Applications, AI amplifies human capability when used responsibly.
          </motion.p>

          {/* Discipline pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {disciplines.map(d => (
              <span key={d} className="px-4 py-1.5 rounded-full bg-pillai-primary/5 border border-pillai-primary/15 text-pillai-primary font-semibold text-sm">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] gap-6 items-start max-w-5xl mx-auto">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">01</span>
              <h3 className="text-xl font-bold text-gray-800">Without AI Literacy</h3>
            </div>
            <ul className="space-y-5">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-0.5 p-2 rounded-lg bg-gray-200 text-gray-500 shrink-0">{item.icon}</div>
                  <span className="font-medium leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-4">
            <div className="flex flex-col items-center gap-1 text-pillai-primary/40">
              <ArrowDown className="w-8 h-8 md:hidden" />
              <svg className="hidden md:block w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pillai-primary/5 border border-pillai-primary/20 rounded-3xl p-8 shadow-lg shadow-pillai-primary/5 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-pillai-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <span className="w-8 h-8 rounded-full bg-pillai-primary flex items-center justify-center text-sm font-bold text-white">02</span>
              <h3 className="text-xl font-bold text-pillai-primary">With AI Foundation</h3>
            </div>
            <ul className="space-y-5 relative z-10">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-pillai-dark">
                  <div className="mt-0.5 p-2 rounded-lg bg-white shadow-sm text-pillai-primary shrink-0">{item.icon}</div>
                  <span className="font-semibold leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 italic text-base"
        >
          "AI amplifies human capability when used responsibly — it does not replace the student."
        </motion.p>
      </div>
    </section>
  );
}
