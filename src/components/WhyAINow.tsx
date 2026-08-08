import { motion } from 'framer-motion';
import { Search, Edit3, Clock, BrainCircuit, Lightbulb, TrendingUp, Sparkles, GraduationCap, Code, Briefcase, Building2 } from 'lucide-react';

const beforeItems = [
  { icon: <Search className="w-4 h-4" />, text: "Manual, slow research" },
  { icon: <Edit3 className="w-4 h-4" />, text: "Writing drafts from scratch" },
  { icon: <Clock className="w-4 h-4" />, text: "Unstructured workflows" },
];

const afterItems = [
  { icon: <BrainCircuit className="w-5 h-5" />, text: "Instant AI-assisted synthesis" },
  { icon: <Lightbulb className="w-5 h-5" />, text: "Structured, rapid ideation" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Personalised study plans" },
];

const disciplines = [
  { name: "Engineering", icon: <Code className="w-4 h-4" /> },
  { name: "Business", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Architecture", icon: <Building2 className="w-4 h-4" /> },
  { name: "All Others", icon: <GraduationCap className="w-4 h-4" /> },
];

export function WhyAINow() {
  return (
    <section id="why-ai" aria-labelledby="why-ai-heading" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 max-w-6xl mx-auto">
          
          {/* Main Hero Bento Box (Spans 2 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-pillai-dark text-white p-10 flex flex-col justify-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-pillai-primary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pillai-accent/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-pillai-accent text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" /> Core Philosophy
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                AI Is No Longer Just a <br className="hidden md:block"/>
                <span className="text-gradient-gold">Tech Subject.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-medium max-w-md">
                It is a general-purpose skill — as foundational as reading and writing. AI amplifies human capability when used responsibly.
              </p>
            </div>
          </motion.div>

          {/* Disciplines Bento Box (Spans 2 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-white border border-gray-100 p-8 shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Who is this for?</h3>
            <div className="grid grid-cols-2 gap-3">
              {disciplines.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 font-semibold text-sm hover:bg-pillai-primary/5 hover:text-pillai-primary transition-colors cursor-default">
                  <div className="text-pillai-primary">{d.icon}</div>
                  {d.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Without AI (Spans 1 col, 2 rows) - Reordered visually for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-start-3 md:row-start-2 md:row-span-2 rounded-3xl bg-gray-100/80 border border-gray-200 p-8 shadow-inner flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mb-6">01</div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-6">Without AI</h3>
            <ul className="space-y-4 mt-auto">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-0.5 p-1.5 rounded-md bg-gray-200 text-gray-500 shrink-0">{item.icon}</div>
                  <span className="font-semibold text-sm leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With AI Foundation (Spans 1 col, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-start-4 md:row-start-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-pillai-primary to-[#7A1419] p-8 shadow-xl shadow-pillai-primary/20 text-white flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mb-6 border border-white/20 relative z-10">02</div>
            <h3 className="text-xl font-extrabold text-white mb-6 relative z-10">With AI Foundation</h3>
            <ul className="space-y-4 mt-auto relative z-10">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <div className="mt-0.5 p-1.5 rounded-md bg-white/20 text-pillai-accent shrink-0 backdrop-blur-sm border border-white/10">{item.icon}</div>
                  <span className="font-bold text-sm leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bottom Note (Spans 2 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-pillai-accent/10 border border-pillai-accent/20 p-8 flex items-center shadow-sm"
          >
            <p className="text-pillai-dark font-medium italic text-lg leading-relaxed">
              "AI amplifies human capability when used responsibly — it does not replace the student's own critical thinking."
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
