import React from 'react';
import { motion } from 'framer-motion';
import { toolsData } from '../data/toolsData';
import { Sparkles, TerminalSquare, AlertCircle } from 'lucide-react';

// Colorful brand-accurate icon representations for each tool
const toolIcons: Record<string, React.ReactElement> = {
  ChatGPT: (
    <svg viewBox="0 0 41 41" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.650-3.295 10.079 10.079 0 0 0-10.187 6.525 9.967 9.967 0 0 0-6.600 4.811 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.650 3.295 10.079 10.079 0 0 0 10.188-6.526 9.967 9.967 0 0 0 6.600-4.811 10.079 10.079 0 0 0-1.241-11.817zm-15.462 21.678a7.484 7.484 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.16zM4.943 34.218a7.48 7.48 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.648a7.504 7.504 0 0 1-10.24-2.743zM3.297 13.62A7.469 7.469 0 0 1 7.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L5.048 23.565a7.505 7.505 0 0 1-1.75-9.945zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l9.049 5.224a7.504 7.504 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.648-1.706zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.051-4.645a7.497 7.497 0 0 1 11.133 7.763zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943 4.33-2.501 4.332 2.498v4.996l-4.331 2.5-4.331-2.5-.0002-4.993z" fill="#74aa9c"/>
8:     </svg>
9:   ),
10:   Gemini: (
11:     <svg viewBox="0 0 192 192" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
12:       <defs>
13:         <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
14:           <stop offset="0%" stopColor="#4285F4" />
15:           <stop offset="100%" stopColor="#0F9D58" />
16:         </linearGradient>
17:       </defs>
18:       <path fill="url(#gemini-grad)" d="M96 16C52.5 16 16 52.5 16 96s36.5 80 80 80 80-36.5 80-80S139.5 16 96 16zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
19:       <path fill="#4285F4" d="M96 32l-8 56h16l-8-56z" />
20:       <path fill="#0F9D58" d="M96 160l8-56H88l8 56z"/>
21:     </svg>
22:   ),
23:   Claude: (
24:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
25:       <rect width="256" height="256" rx="48" fill="#D97757"/>
26:       <text x="128" y="165" textAnchor="middle" fontSize="140" fontWeight="bold" fill="white" fontFamily="serif">C</text>
27:     </svg>
28:   ),
29:   Copilot: (
30:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
31:       <rect width="256" height="256" rx="48" fill="#0078D4"/>
32:       <path fill="white" d="M60 160 Q128 60 196 160 Q164 148 128 148 Q92 148 60 160Z"/>
33:       <circle cx="128" cy="120" r="28" fill="white"/>
34:     </svg>
35:   ),
36:   Perplexity: (
37:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
38:       <rect width="256" height="256" rx="48" fill="#1F1F1F"/>
39:       <circle cx="128" cy="128" r="55" fill="none" stroke="#20B2AA" strokeWidth="18"/>
40:       <line x1="128" y1="48" x2="128" y2="208" stroke="#20B2AA" strokeWidth="14"/>
41:       <line x1="48" y1="128" x2="208" y2="128" stroke="#20B2AA" strokeWidth="14"/>
42:     </svg>
43:   ),
44:   NotebookLM: (
45:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
46:       <rect width="256" height="256" rx="48" fill="#1A73E8"/>
47:       <rect x="68" y="60" width="120" height="136" rx="10" fill="white"/>
48:       <line x1="90" y1="96" x2="166" y2="96" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
49:       <line x1="90" y1="124" x2="166" y2="124" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
50:       <line x1="90" y1="152" x2="140" y2="152" stroke="#1A73E8" strokeWidth="10" strokeLinecap="round"/>
51:     </svg>
52:   ),
53:   Gamma: (
54:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
55:       <rect width="256" height="256" rx="48" fill="#6366F1"/>
56:       <text x="128" y="170" textAnchor="middle" fontSize="150" fontWeight="900" fill="white" fontFamily="sans-serif">γ</text>
57:     </svg>
58:   ),
59:   "Canva AI": (
60:     <svg viewBox="0 0 256 256" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
61:       <rect width="256" height="256" rx="128" fill="#7D2AE8"/>
62:       <text x="128" y="172" textAnchor="middle" fontSize="140" fontWeight="900" fill="white" fontFamily="sans-serif">C</text>
63:     </svg>
64:   ),
65: };
66: 
67: export function ToolsPlayground() {
68:   return (
69:     <section id="tools" className="py-24 bg-pillai-dark relative overflow-hidden text-white">
70:       {/* Dark mode background elements */}
71:       <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
72:       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pillai-primary/20 rounded-full blur-[100px] pointer-events-none" />
73: 
74:       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
75:         <div className="text-center max-w-3xl mx-auto mb-20">
76:           <motion.h2 
77:             initial={{ opacity: 0, y: 20 }}
78:             whileInView={{ opacity: 1, y: 0 }}
79:             viewport={{ once: true }}
80:             className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
81:           >
82:             AI Tools <span className="text-gradient-gold">Playground</span>
83:           </motion.h2>
84:           <p className="text-lg text-gray-400">
85:             A look at the most powerful tools available today. We don't focus on just one platform; we teach you how to evaluate and use them all. Hover to explore.
86:           </p>
87:         </div>
88: 
89:         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
90:           {toolsData.map((tool, idx) => (
91:             <motion.div
92:               key={tool.name}
93:               initial={{ opacity: 0, y: 30 }}
94:               whileInView={{ opacity: 1, y: 0 }}
95:               viewport={{ once: true }}
96:               transition={{ delay: idx * 0.1, type: "spring" }}
97:               className="group relative h-[380px] bg-gray-900 border border-white/10 rounded-3xl overflow-hidden hover:border-pillai-accent/50 transition-colors shadow-xl"
98:             >
99:               {/* Default State */}
100:               <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:-translate-y-full">
101:                 <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl border border-gray-100 flex items-center justify-center mb-6 overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
102:                   {toolIcons[tool.name] ?? (
103:                     <span className="font-bold text-4xl text-pillai-primary">{tool.name.charAt(0)}</span>
104:                   )}
105:                 </div>
106:                 <h3 className="text-2xl font-bold text-white mb-3">
107:                   {tool.name}
108:                 </h3>
109:                 <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
110:                   {tool.description}
111:                 </p>
112:               </div>
113: 
114:               {/* Hover Overlay State */}
115:               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
116:                 <h3 className="text-xl font-bold text-pillai-accent mb-4 border-b border-white/10 pb-2">
117:                   {tool.name}
118:                 </h3>
119:                 
120:                 <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
121:                   <div>
122:                     <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
123:                       <Sparkles className="w-3.5 h-3.5 text-pillai-accent" /> Best For
124:                     </div>
125:                     <p className="text-sm text-gray-300 leading-relaxed">{tool.useCase}</p>
126:                   </div>
127:                   
128:                   <div>
129:                     <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
130:                       <TerminalSquare className="w-3.5 h-3.5 text-blue-400" /> Example
131:                     </div>
132:                     <p className="text-sm text-gray-300 leading-relaxed">{tool.example}</p>
133:                   </div>
134:                   
135:                   <div className="bg-pillai-primary/10 border border-pillai-primary/20 rounded-xl p-3 mt-auto">
136:                     <div className="flex items-center gap-1.5 text-[10px] font-bold text-pillai-accent uppercase tracking-widest mb-1">
137:                       <AlertCircle className="w-3 h-3 text-pillai-primary" /> Best Practice
138:                     </div>
139:                     <p className="text-xs text-gray-400">{tool.practice}</p>
140:                   </div>
141:                 </div>
142:               </div>
143:             </motion.div>
144:           ))}
145:         </div>
146:       </div>
147:     </section>
148:   );
149: }
