import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, PenTool, Database, Star } from 'lucide-react';
import { cn } from '../lib/utils';

const disciplines = [
  {
    id: "engineering",
    name: "ENGINEERING",
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-500",
    tasks: [
      "Project ideation & concept generation",
      "Technical explanations of complex theories",
      "Coding assistance & rapid prototyping",
      "Debugging errors and refactoring code",
      "Writing technical documentation",
      "Literature review and research synthesis",
      "Creating engineering presentations"
    ]
  },
  {
    id: "business",
    name: "BUSINESS",
    icon: <Briefcase className="w-5 h-5" />,
    color: "bg-emerald-500",
    tasks: [
      "Market research & competitive analysis",
      "Business strategy formulation",
      "Drafting professional emails and memos",
      "Generating marketing campaign ideas",
      "Developing customer personas",
      "Structuring business presentations",
      "Case study breakdown and analysis"
    ]
  },
  {
    id: "design",
    name: "ARCHITECTURE & DESIGN",
    icon: <PenTool className="w-5 h-5" />,
    color: "bg-purple-500",
    tasks: [
      "Early-stage design concepts",
      "Creative ideation and brainstorming",
      "Historical design research",
      "Creating moodboard directions",
      "Writing design narratives",
      "Structuring portfolio presentations",
      "Material and concept exploration"
    ]
  },
  {
    id: "computer-applications",
    name: "COMPUTER APPLICATIONS",
    icon: <Database className="w-5 h-5" />,
    color: "bg-orange-500",
    tasks: [
      "Coding logic and algorithm help",
      "Debugging runtime errors",
      "Web development frameworks",
      "Database schema concepts",
      "API documentation generation",
      "Project planning & sprints",
      "Brainstorming AI application ideas"
    ]
  }
];

export function DisciplineUseCases() {
  const [activeTab, setActiveTab] = useState(disciplines[0].id);

  const activeData = disciplines.find(d => d.id === activeTab);

  return (
    <section id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            Discipline-Specific <span className="text-pillai-primary">AI</span>
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            AI is not just for computer science. See how it applies directly to your school of study.
          </p>

          <div className="inline-flex items-center gap-2 bg-pillai-accent/20 px-6 py-3 rounded-full border border-pillai-accent/30 text-pillai-dark font-semibold">
            <Star className="w-5 h-5 text-pillai-primary" fill="currentColor" />
            One AI Skill Every Student Should Learn: Prompting
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {disciplines.map((discipline) => (
            <button
              key={discipline.id}
              onClick={() => setActiveTab(discipline.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm border",
                activeTab === discipline.id 
                ? "bg-pillai-primary text-white border-pillai-primary scale-105" 
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-pillai-dark"
              )}
            >
              {discipline.icon}
              {discipline.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 overflow-hidden relative"
            >
              <div className={cn("absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full opacity-20", activeData?.color)}></div>
              
              <h3 className="text-2xl font-bold text-pillai-dark mb-8 flex items-center gap-3">
                <span className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white", activeData?.color)}>
                  {activeData?.icon}
                </span>
                AI for {activeData?.name}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                {activeData?.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-pillai-primary/10 text-pillai-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
