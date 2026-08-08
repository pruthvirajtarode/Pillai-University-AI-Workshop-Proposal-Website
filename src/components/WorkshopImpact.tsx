import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, Zap, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const coreOutcomes = [
  "Better Productivity", "Better Research", "Better Communication", 
  "Better Presentations", "Better Problem Solving", "Creative Thinking"
];

export function WorkshopImpact() {
  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6 tracking-tight"
          >
            Workshop <span className="text-pillai-primary">Impact</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Measurable qualitative outcomes that prepare students for the future of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
          
          {/* The Transformation Bento Box (Spans 2 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-center relative overflow-hidden"
          >
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">The Transformation</h3>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Input */}
              <div className="bg-white rounded-2xl p-6 text-center w-full sm:w-1/3 shadow-sm border border-gray-100 relative z-10">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Input</div>
                <div className="text-lg font-bold text-gray-700 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Curiosity
                </div>
              </div>

              {/* Connecting Line (Desktop) / Arrow (Mobile) */}
              <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-gray-200 via-pillai-primary/50 to-pillai-accent mx-2" />
              <div className="sm:hidden w-px h-6 bg-gray-300" />

              {/* Workshop */}
              <div className="bg-pillai-primary text-white rounded-2xl p-6 text-center w-full sm:w-1/3 shadow-xl relative z-10 transform scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
                <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Workshop</div>
                <div className="text-lg font-bold">Knowledge + Practice</div>
              </div>

              {/* Connecting Line (Desktop) / Arrow (Mobile) */}
              <div className="hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-pillai-primary to-pillai-accent mx-2" />
              <div className="sm:hidden w-px h-6 bg-gray-300" />

              {/* Output */}
              <div className="bg-gradient-to-br from-pillai-accent to-yellow-400 text-pillai-dark rounded-2xl p-6 text-center w-full sm:w-1/3 shadow-xl relative z-10">
                <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none" />
                <div className="text-xs font-bold text-pillai-dark/60 uppercase tracking-widest mb-2">Output</div>
                <div className="text-lg font-bold">AI-Literate Student</div>
              </div>
            </div>
          </motion.div>

          {/* Career Readiness Bento Box (Spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 bg-pillai-dark text-white rounded-3xl p-8 shadow-xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pillai-primary/20 rounded-full blur-[40px]" />
            <Briefcase className="w-8 h-8 text-pillai-accent mb-4 relative z-10" />
            <h3 className="text-2xl font-bold mb-2 relative z-10">Career Readiness</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Students enter the workforce not just with academic knowledge, but with modern execution tools.
            </p>
          </motion.div>

          {/* Core Outcomes Bento Box (Spans 2 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 bg-pillai-primary/5 border border-pillai-primary/10 rounded-3xl p-8 shadow-sm flex flex-col justify-center"
          >
            <h3 className="text-sm font-bold text-pillai-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Target className="w-4 h-4" /> Core Academic Outcomes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-pillai-primary shrink-0" />
                  <span className="text-gray-800 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Responsible AI Bento Box (Spans 1 col, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-pillai-primary to-[#7A1419] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-center relative overflow-hidden"
          >
            <ShieldCheck className="w-8 h-8 text-white/80 mb-4 relative z-10" />
            <h3 className="text-2xl font-bold mb-2 relative z-10">Ethical Framework</h3>
            <p className="text-white/80 text-sm leading-relaxed relative z-10">
              Embedding a strong sense of academic integrity, data privacy, and critical evaluation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
