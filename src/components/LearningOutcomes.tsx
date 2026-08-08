import { motion } from 'framer-motion';

export function LearningOutcomes() {
  return (
    <section id="outcomes" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            Student <span className="text-pillai-primary">Transformation</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            What students will be able to do after completing the workshop.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-5xl mx-auto">
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center"
          >
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Before</div>
            <p className="text-2xl font-medium text-gray-500 italic">
              "I don't know how AI works."
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:flex flex-col justify-center items-center">
            <div className="w-12 h-12 rounded-full bg-pillai-primary text-white flex items-center justify-center shadow-lg z-10 font-bold">
              VS
            </div>
          </div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-br from-pillai-primary to-pillai-secondary text-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-pillai-accent uppercase tracking-widest mb-4">After</div>
              <p className="text-2xl font-bold leading-relaxed">
                "I understand AI and know how to use it responsibly."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              "Understand AI fundamentals",
              "Explain AI vs Machine Learning vs Generative AI",
              "Use AI assistants effectively",
              "Write better prompts",
              "Use AI for studying and research",
              "Use AI for presentations",
              "Use AI for career preparation",
              "Use AI for discipline-specific tasks",
              "Identify AI limitations",
              "Verify AI-generated information",
              "Use AI responsibly",
              "Create their own basic AI-assisted workflow"
            ].map((outcome, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
