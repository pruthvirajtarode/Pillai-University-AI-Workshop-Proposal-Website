import { motion } from 'framer-motion';
import { ShieldAlert, ArrowDown } from 'lucide-react';

const principles = [
  "AI can be wrong.",
  "Verify important information.",
  "Do not blindly submit AI-generated assignments.",
  "Protect personal and confidential information.",
  "Understand copyright.",
  "Watch for bias.",
  "Use AI as an assistant, not a replacement for thinking.",
  "Cite sources where appropriate.",
  "Review AI-generated code before using it.",
  "Keep human judgment in the loop."
];

export function ResponsibleAI() {
  return (
    <section className="py-24 bg-pillai-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 font-bold text-sm mb-6 border border-red-500/20"
            >
              <ShieldAlert className="w-4 h-4" />
              CRITICAL MODULE
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-balance"
            >
              Power Requires <span className="text-pillai-accent">Responsibility.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-10"
            >
              We teach students how to use AI ethically, safely, and securely in an academic and professional setting.
            </motion.p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-pillai-accent mt-2 shrink-0"></div>
                  <span className="text-sm font-medium text-gray-200">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 p-8 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col items-center gap-4 relative"
            >
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-pillai-primary/20 blur-xl rounded-full"></div>
              
              <div className="text-center font-bold text-xl text-gray-300 bg-gray-800 w-full py-4 rounded-xl border border-gray-700">AI OUTPUT</div>
              <ArrowDown className="text-gray-500" />
              <div className="text-center font-bold text-xl text-yellow-500 bg-yellow-500/10 w-full py-4 rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">CHECK</div>
              <ArrowDown className="text-gray-500" />
              <div className="text-center font-bold text-xl text-orange-400 bg-orange-400/10 w-full py-4 rounded-xl border border-orange-400/20">VERIFY</div>
              <ArrowDown className="text-gray-500" />
              <div className="text-center font-bold text-xl text-blue-400 bg-blue-400/10 w-full py-4 rounded-xl border border-blue-400/20">IMPROVE</div>
              <ArrowDown className="text-gray-500" />
              <div className="text-center font-bold text-xl text-green-400 bg-green-400/10 w-full py-4 rounded-xl border border-green-400/20 shadow-[0_0_20px_rgba(74,222,128,0.15)]">USE</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
