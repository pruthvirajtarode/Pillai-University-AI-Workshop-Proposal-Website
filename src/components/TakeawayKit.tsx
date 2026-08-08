import { motion } from 'framer-motion';
import { FileText, Gift, Award } from 'lucide-react';

const kitItems = [
  "AI Beginner Cheat Sheet",
  "Prompt Engineering Cheat Sheet",
  "50+ Student Prompts",
  "Study Prompts",
  "Research Prompts",
  "Presentation Prompts",
  "Career Prompts",
  "Interview Prompts",
  "Discipline-Specific Prompts",
  "Responsible AI Checklist",
  "AI Tools Reference Guide",
  "Mini Project / Challenge Guide"
];

export function TakeawayKit() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6">
              Student <span className="text-pillai-primary">Takeaway Kit</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Every participant receives a comprehensive digital toolkit to ensure they can apply what they've learned immediately.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {kitItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <FileText className="w-4 h-4 text-pillai-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pillai-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-pillai-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-pillai-dark">Certificate of Participation</h4>
                  <p className="text-sm text-gray-500">Awarded upon successful workshop completion</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pillai-primary to-pillai-secondary rounded-[3rem] blur-2xl opacity-20 transform -rotate-6 scale-105"></div>
            <div className="relative bg-white rounded-[3rem] p-12 border border-gray-200 shadow-2xl flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-pillai-primary/5 flex items-center justify-center mb-6 shadow-inner">
                <Gift className="w-12 h-12 text-pillai-primary" />
              </div>
              <h3 className="text-2xl font-bold text-pillai-dark mb-2">Digital AI Starter Kit</h3>
              <p className="text-gray-500 mb-8 max-w-xs">Everything you need to integrate AI into your academic workflow.</p>
              
              {/* Decorative stacked cards */}
              <div className="relative w-full h-40 flex justify-center">
                <div className="absolute top-0 w-3/4 h-32 bg-gray-100 rounded-xl border border-gray-200 shadow-sm transform -rotate-6"></div>
                <div className="absolute top-2 w-4/5 h-32 bg-gray-50 rounded-xl border border-gray-200 shadow-md transform rotate-3"></div>
                <div className="absolute top-6 w-full h-32 bg-white rounded-xl border border-gray-200 shadow-lg flex items-center justify-center p-4">
                  <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Exclusive Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
