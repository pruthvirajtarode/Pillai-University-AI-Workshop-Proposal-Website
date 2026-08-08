import { motion } from 'framer-motion';
import { ArrowRight, Target } from 'lucide-react';

export function WorkshopImpact() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            Workshop <span className="text-pillai-primary">Impact</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Measurable qualitative outcomes that prepare students for the future of work.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 max-w-4xl mx-auto">
          {/* Input */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl p-6 text-center w-full md:w-1/3"
          >
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Input</div>
            <div className="text-xl font-bold text-gray-700">Curiosity</div>
          </motion.div>

          {/* Arrow */}
          <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
          <div className="md:hidden w-px h-6 bg-gray-300"></div>

          {/* Workshop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-pillai-primary text-white rounded-2xl p-6 text-center w-full md:w-1/3 shadow-xl"
          >
            <div className="text-sm font-bold text-white/70 uppercase tracking-widest mb-2">Workshop</div>
            <div className="text-xl font-bold">Knowledge + Practice</div>
          </motion.div>

          {/* Arrow */}
          <ArrowRight className="hidden md:block w-6 h-6 text-gray-300" />
          <div className="md:hidden w-px h-6 bg-gray-300"></div>

          {/* Output */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-pillai-accent text-pillai-dark rounded-2xl p-6 text-center w-full md:w-1/3 shadow-xl"
          >
            <div className="text-sm font-bold text-pillai-dark/60 uppercase tracking-widest mb-2">Output</div>
            <div className="text-xl font-bold">AI-Literate Student</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Better Productivity", "Better Research", "Better Communication", 
            "Better Presentations", "Better Problem Solving", "Career Readiness", 
            "AI Literacy", "Creative Thinking"
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-center hover:bg-white hover:border-pillai-primary/20 hover:shadow-lg transition-all"
            >
              <Target className="w-6 h-6 text-pillai-primary mx-auto mb-3" />
              <div className="font-bold text-gray-800">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
