import { motion } from 'framer-motion';
import { toolsData } from '../data/toolsData';
import { Sparkles, TerminalSquare, AlertCircle } from 'lucide-react';

export function ToolsPlayground() {
  return (
    <section id="tools" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            AI Tools <span className="text-pillai-primary">Playground</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A look at the most powerful tools available today. We don't focus on just one platform; we teach you how to evaluate and use them all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolsData.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-pillai-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                <span className="font-bold text-xl text-pillai-dark">{tool.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-pillai-dark mb-2 group-hover:text-pillai-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                {tool.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Best For
                  </div>
                  <p className="text-sm text-gray-800">{tool.useCase}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <TerminalSquare className="w-3.5 h-3.5" /> Example
                  </div>
                  <p className="text-sm text-gray-800">{tool.example}</p>
                </div>
                <div className="bg-pillai-accent/10 border border-pillai-accent/20 rounded-lg p-3 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-pillai-dark uppercase tracking-wider mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-pillai-primary" /> Best Practice
                  </div>
                  <p className="text-xs text-gray-800">{tool.practice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
