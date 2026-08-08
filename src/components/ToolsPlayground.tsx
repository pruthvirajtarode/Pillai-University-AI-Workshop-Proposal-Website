import React from 'react';
import { motion } from 'framer-motion';
import { toolsData } from '../data/toolsData';
import { Sparkles, TerminalSquare, AlertCircle } from 'lucide-react';

// Colorful brand-accurate icon representations for each tool
const toolIcons: Record<string, React.ReactElement> = {
  ChatGPT: (
    <svg viewBox="0 0 41 41" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.650-3.295 10.079 10.079 0 0 0-10.187 6.525 9.967 9.967 0 0 0-6.600 4.811 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.650 3.295 10.079 10.079 0 0 0 10.188-6.526 9.967 9.967 0 0 0 6.600-4.811 10.079 10.079 0 0 0-1.241-11.817zm-15.462 21.678a7.484 7.484 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.16zM4.943 34.218a7.48 7.48 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.648a7.504 7.504 0 0 1-10.24-2.743zM3.297 13.62A7.469 7.469 0 0 1 7.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L5.048 23.565a7.505 7.505 0 0 1-1.75-9.945zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l9.049 5.224a7.504 7.504 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.648-1.706zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.051-4.645a7.497 7.497 0 0 1 11.133 7.763zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943 4.33-2.501 4.332 2.498v4.996l-4.331 2.5-4.331-2.5-.0002-4.993z" fill="#74aa9c"/>
    </svg>
  ),
  Gemini: (
    <svg viewBox="0 0 192 192" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#0F9D58" />
        </linearGradient>
      </defs>
      <path fill="url(#gemini-grad)" d="M96 16C52.5 16 16 52.5 16 96s36.5 80 80 80 80-36.5 80-80S139.5 16 96 16zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
      <path fill="#4285F4" d="M96 32l-8 56h16l-8-56z" />
      <path fill="#0F9D58" d="M96 160l8-56H88l8 56z"/>
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="48" fill="#D97757"/>
      <text x="128" y="165" textAnchor="middle" fontSize="140" fontWeight="bold" fill="white" fontFamily="serif">C</text>
    </svg>
  ),
  Copilot: (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="48" fill="#0078D4"/>
      <path fill="white" d="M60 160 Q128 60 196 160 Q164 148 128 148 Q92 148 60 160Z"/>
      <circle cx="128" cy="120" r="28" fill="white"/>
    </svg>
  ),
  Perplexity: (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="48" fill="#1F1F1F"/>
      <circle cx="128" cy="128" r="55" fill="none" stroke="#20B2AA" strokeWidth="18"/>
      <line x1="128" y1="48" x2="128" y2="208" stroke="#20B2AA" strokeWidth="14"/>
      <line x1="48" y1="128" x2="208" y2="128" stroke="#20B2AA" strokeWidth="14"/>
    </svg>
  ),
  NotebookLM: (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="48" fill="#1A73E8"/>
      <rect x="68" y="60" width="120" height="136" rx="10" fill="white"/>
      <line x1="90" y1="96" x2="166" y2="96" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
      <line x1="90" y1="124" x2="166" y2="124" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
      <line x1="90" y1="152" x2="140" y2="152" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  ),
  Gamma: (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="48" fill="#6366F1"/>
      <text x="128" y="170" textAnchor="middle" fontSize="150" fontWeight="900" fill="white" fontFamily="sans-serif">γ</text>
    </svg>
  ),
  "Canva AI": (
    <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="128" fill="#7D2AE8"/>
      <text x="128" y="172" textAnchor="middle" fontSize="140" fontWeight="900" fill="white" fontFamily="sans-serif">C</text>
    </svg>
  ),
};

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolsData.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-pillai-primary/30 transition-all group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-gray-100 flex items-center justify-center mb-5 overflow-hidden">
                {toolIcons[tool.name] ?? (
                  <span className="font-bold text-2xl text-pillai-primary">{tool.name.charAt(0)}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-pillai-dark mb-2 group-hover:text-pillai-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-600 mb-5 flex-grow">
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
                <div className="bg-pillai-accent/10 border border-pillai-accent/20 rounded-lg p-3">
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
