import { motion } from 'framer-motion';
import { workshopData } from '../data/workshopData';
import { Clock } from 'lucide-react';

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            What Students Will <span className="text-pillai-primary">Learn</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A comprehensive curriculum designed to build practical AI literacy in a single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopData.modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-pillai-primary/30 transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-6xl font-extrabold text-gray-50 group-hover:text-pillai-primary/5 transition-colors z-0 select-none">
                {module.id}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  {module.duration}
                </div>
                
                <h3 className="text-xl font-bold text-pillai-dark mb-3 group-hover:text-pillai-primary transition-colors">
                  Module {parseInt(module.id)}: {module.title}
                </h3>
                
                <p className="text-sm text-gray-500 mb-6 min-h-[40px]">
                  {module.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Topics</h4>
                  <ul className="space-y-2">
                    {module.learn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-pillai-secondary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
