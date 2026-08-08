import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Bot, User, Send, ChevronRight } from 'lucide-react';

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

export function InteractivePromptDemo() {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Simulate typing delay when changing steps
  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section id="interactive-demo" className="py-24 bg-pillai-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-pillai-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pillai-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark text-pillai-accent font-semibold text-xs tracking-widest uppercase mb-6 border-white/10"
          >
            <Sparkles className="w-4 h-4 animate-pulse-slow" />
            LIVE DEMONSTRATION
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            See the Difference a <br className="hidden md:block" />
            <span className="text-gradient-gold">Better Prompt</span> Makes
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Controls / Context (Left Side) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold mb-6 text-white/90">Select Prompt Level:</h3>
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  step === idx 
                  ? "bg-white/10 border-pillai-accent/50 shadow-[0_0_30px_rgba(244,197,66,0.15)]" 
                  : "bg-white/5 border-white/5 hover:bg-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                {step === idx && (
                  <motion.div 
                    layoutId="activePromptGlow"
                    className="absolute inset-0 bg-gradient-to-r from-pillai-accent/10 to-transparent pointer-events-none"
                  />
                )}
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <h4 className={`font-bold text-base ${step === idx ? "text-pillai-accent" : "text-gray-300 group-hover:text-white"}`}>
                    Level {idx + 1}: {s.title}
                  </h4>
                </div>
                <div className="flex gap-3 items-start relative z-10">
                  <MessageSquare className={`w-4 h-4 mt-1 shrink-0 ${step === idx ? "text-pillai-accent" : "text-gray-500"}`} />
                  <p className="text-white/80 text-sm italic line-clamp-2">"{s.prompt}"</p>
                </div>
              </button>
            ))}
          </div>

          {/* Chat UI (Right Side) */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark rounded-3xl border border-white/10 shadow-2xl flex flex-col h-[500px] overflow-hidden relative">
              {/* Chat Header */}
              <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-pillai-primary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AI Assistant</div>
                    <div className="text-xs text-pillai-accent flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
              </div>
              
              {/* Chat Body */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`chat-${step}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* User Message */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex justify-end gap-4"
                    >
                      <div className="bg-pillai-primary text-white p-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg text-sm md:text-base">
                        {steps[step].prompt}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                        <User className="w-4 h-4 text-white/70" />
                      </div>
                    </motion.div>

                    {/* AI Message */}
                    <div className="flex justify-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-pillai-primary flex items-center justify-center shrink-0 shadow-lg">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/10 text-gray-200 p-5 rounded-2xl rounded-tl-sm max-w-[90%] shadow-lg text-sm md:text-base border border-white/5 backdrop-blur-sm">
                        {isTyping ? (
                          <div className="flex gap-1.5 items-center h-6 px-2">
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-pillai-accent" />
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-pillai-accent" />
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-pillai-accent" />
                          </div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="whitespace-pre-line leading-relaxed"
                          >
                            {steps[step].result}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Fake Input Area */}
              <div className="p-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
                <div className="relative flex items-center bg-white/10 rounded-xl p-3 border border-white/10">
                  <span className="text-white/40 text-sm ml-2">Type a prompt...</span>
                  <button className="absolute right-2 w-8 h-8 bg-pillai-accent/20 rounded-lg flex items-center justify-center text-pillai-accent ml-auto">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Next Step Hint */}
            {step < steps.length - 1 && (
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={`btn-${step}`}
                onClick={() => setStep(step + 1)}
                className="mt-6 ml-auto flex items-center gap-2 bg-pillai-accent text-pillai-dark px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(244,197,66,0.3)] hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(244,197,66,0.5)] transition-all hover:-translate-y-0.5"
              >
                Level Up Prompt <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
