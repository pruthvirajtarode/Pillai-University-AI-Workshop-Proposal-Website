import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workshopData } from '../data/workshopData';
import { Clock, ChevronDown, CheckCircle2 } from 'lucide-react';

export function Curriculum() {
  const [expandedId, setExpandedId] = useState<string>(workshopData.modules[0].id);

  return (
    <section id="curriculum" className="py-24 bg-gray-50/50 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6 tracking-tight"
          >
            What Students Will <span className="text-pillai-primary">Learn</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive curriculum designed to build practical AI literacy in a single day.
          </p>
        </div>

        <div className="space-y-4">
          {workshopData.modules.map((module, idx) => {
            const isExpanded = expandedId === module.id;
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-pillai-primary/30 shadow-xl' : 'border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : module.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-colors duration-300 ${
                      isExpanded ? 'bg-pillai-primary text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {module.id}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isExpanded ? 'text-pillai-primary' : 'text-pillai-dark'
                      }`}>
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-gray-500">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`p-2 rounded-full ${isExpanded ? 'bg-pillai-primary/10 text-pillai-primary' : 'text-gray-400'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-gray-50">
                        <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl">
                          {module.description}
                        </p>
                        
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Topics</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {module.learn.map((item, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-pillai-secondary shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
