import { motion } from 'framer-motion';
import { ArrowRight, Search, Edit3, Clock, BrainCircuit, Lightbulb, TrendingUp } from 'lucide-react';

const beforeWorkflow = [
  { icon: <Search className="w-5 h-5" />, text: "Searching manually through pages of links" },
  { icon: <Edit3 className="w-5 h-5" />, text: "Writing drafts completely from scratch" },
  { icon: <Clock className="w-5 h-5" />, text: "Long, unstructured research cycles" },
];

const afterWorkflow = [
  { icon: <BrainCircuit className="w-5 h-5 text-pillai-primary" />, text: "AI-assisted research & synthesis" },
  { icon: <Lightbulb className="w-5 h-5 text-pillai-primary" />, text: "Faster ideation and structured prompting" },
  { icon: <TrendingUp className="w-5 h-5 text-pillai-primary" />, text: "Personalized learning & productivity" },
];

export function WhyAINow() {
  return (
    <section id="why-ai" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            AI Is No Longer Just a <span className="text-pillai-primary">Technology Subject.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 text-balance"
          >
            It is a general-purpose skill. Whether you're in Engineering, Business, Architecture, or Computer Applications, AI amplifies human capability when used responsibly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-5xl mx-auto">
          {/* Before AI */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">01</span>
              Before AI
            </h3>
            <ul className="space-y-6">
              {beforeWorkflow.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-600">
                  <div className="mt-1 text-gray-400">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <ArrowRight className="w-8 h-8 text-pillai-primary/50" />
          </div>

          {/* After AI */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pillai-primary/5 border border-pillai-primary/20 rounded-2xl p-8 shadow-lg shadow-pillai-primary/5 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-pillai-primary/10 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold text-pillai-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-pillai-primary text-white flex items-center justify-center text-sm">02</span>
              With AI Foundation
            </h3>
            <ul className="space-y-6 relative z-10">
              {afterWorkflow.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-pillai-dark">
                  <div className="mt-1 bg-white p-1 rounded-lg shadow-sm">{item.icon}</div>
                  <span className="font-semibold">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
