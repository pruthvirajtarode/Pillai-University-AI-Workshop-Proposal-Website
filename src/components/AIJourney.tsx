import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../lib/utils';

const journeyStages = [
  { step: "01", title: "WHAT IS AI?", desc: "Simple explanation of AI as a concept. Examples from daily life." },
  { step: "02", title: "HOW AI WORKS", desc: "Data, Patterns, Models, Predictions, Generative Models." },
  { step: "03", title: "AI vs ML vs DEEP LEARNING", desc: "Creating a simple hierarchy without complicated mathematics." },
  { step: "04", title: "GENERATIVE AI", desc: "Text, Images, Audio, Video, Code generation capabilities." },
  { step: "05", title: "PROMPTING", desc: "Context, Role, Task, Constraints, Examples, Output Format." },
  { step: "06", title: "AI TOOLS", desc: "Introducing essential platforms for students." },
  { step: "07", title: "REAL WORKFLOWS", desc: "Demonstrating actual student tasks." },
  { step: "08", title: "RESPONSIBLE AI", desc: "Privacy, bias, hallucinations, academic integrity." },
  { step: "09", title: "HANDS-ON CHALLENGE", desc: "Using AI to solve a real practical problem." },
];

export function AIJourney() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="ai-journey" className="py-24 bg-pillai-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            The Student <span className="text-pillai-primary">AI Journey</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            A step-by-step foundation. We start from absolute basics—no programming knowledge required.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline Selectors */}
          <div className="w-full lg:w-1/3 flex flex-col relative before:absolute before:inset-y-0 before:left-6 before:w-px before:bg-gray-200">
            {journeyStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  "relative flex items-center p-4 text-left group transition-all",
                  activeStage === idx ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 z-10 transition-colors duration-300 font-bold text-sm",
                  activeStage === idx 
                    ? "bg-pillai-primary border-pillai-light text-white" 
                    : "bg-gray-100 border-pillai-light text-gray-500 group-hover:border-gray-200"
                )}>
                  {stage.step}
                </div>
                <div className="ml-6">
                  <h4 className={cn(
                    "font-bold text-lg transition-colors",
                    activeStage === idx ? "text-pillai-primary" : "text-gray-700"
                  )}>{stage.title}</h4>
                </div>
              </button>
            ))}
          </div>

          {/* Active Detail View */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 sticky top-32"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pillai-primary/10 text-pillai-primary font-bold text-2xl mb-6">
                {journeyStages[activeStage].step}
              </div>
              <h3 className="text-3xl font-extrabold text-pillai-dark mb-4">
                {journeyStages[activeStage].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {journeyStages[activeStage].desc}
              </p>
              
              {/* Abstract decorative graphic for the step */}
              <div className="mt-10 w-full h-48 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #9E1B23 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}></div>
                  <div className="text-gray-300 font-medium tracking-widest text-sm relative z-10 uppercase">
                    Interactive Concept Visualization
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
