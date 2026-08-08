import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, CheckCircle2, ChevronRight } from 'lucide-react';

export function InteractivePromptDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Weak Prompt",
      prompt: "Explain AI.",
      result: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction..."
    },
    {
      title: "Adding Context & Role",
      prompt: "You are an AI educator teaching first-year university students. Explain AI.",
      result: "Hello students! Think of Artificial Intelligence (AI) as giving computers the ability to learn and make decisions like humans do, rather than just following strict instructions..."
    },
    {
      title: "The Professional Prompt",
      prompt: "You are an AI educator teaching first-year university students. Explain Artificial Intelligence in simple language using one real-world example, five key points and a short quiz.",
      result: "Welcome to class! Let's talk about AI.\n\n🌍 **Real-World Example**: Think of AI like Netflix recommending a movie. It looks at what you liked before to guess what you'll enjoy next.\n\n🔑 **5 Key Points**:\n1. AI learns from data.\n2. It recognizes patterns.\n3. It makes predictions.\n4. It gets better over time.\n5. It requires human guidance.\n\n📝 **Quick Quiz**: If a computer sorts apples from oranges by looking at colors, is it using AI?"
    }
  ];

  return (
    <section className="py-24 bg-pillai-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pillai-accent/10 text-pillai-accent font-semibold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            LIVE DEMONSTRATION
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            See the Difference a <span className="text-pillai-accent">Better Prompt</span> Makes
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Controls / Context */}
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  step === idx 
                  ? "bg-white/10 border-pillai-accent shadow-[0_0_30px_rgba(244,197,66,0.15)]" 
                  : "bg-white/5 border-white/10 hover:bg-white/10 opacity-70"
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-bold text-lg ${step === idx ? "text-pillai-accent" : "text-gray-300"}`}>
                    {idx + 1}. {s.title}
                  </h3>
                  {step === idx && <CheckCircle2 className="w-5 h-5 text-pillai-accent" />}
                </div>
                <div className="flex gap-3 items-start">
                  <MessageSquare className="w-5 h-5 mt-1 text-gray-400 shrink-0" />
                  <p className="text-white font-medium italic">"{s.prompt}"</p>
                </div>
              </button>
            ))}
          </div>

          {/* Output Display */}
          <div className="bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl flex flex-col overflow-hidden relative">
            <div className="bg-gray-800 px-6 py-4 flex items-center gap-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 font-medium ml-4">AI Output</div>
            </div>
            
            <div className="p-8 flex-1 relative bg-gradient-to-br from-gray-900 to-gray-800 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 whitespace-pre-line leading-relaxed"
                >
                  {steps[step].result}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Proceed prompt */}
            {step < steps.length - 1 && (
              <button 
                onClick={() => setStep(step + 1)}
                className="absolute bottom-6 right-6 flex items-center gap-2 bg-pillai-accent text-pillai-dark px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-yellow-400 transition-colors"
              >
                Improve Prompt <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
