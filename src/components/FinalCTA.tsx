import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="py-24 bg-pillai-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-pillai-dark leading-tight">
            "Every Student Doesn't Need to Become an AI Engineer."
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-pillai-primary">
            But Every Student Should Understand AI.
          </h3>
          
          <div className="pt-8 pb-12">
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Equip your students with the practical skills they need to navigate the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-pillai-primary hover:bg-pillai-secondary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-pillai-primary/30 transition-all hover:-translate-y-1">
                Let's Build AI Literacy at Pillai University
              </button>
              <a href="#hero" className="bg-white hover:bg-gray-50 text-pillai-dark border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold transition-all">
                View Workshop Journey
              </a>
            </div>
          </div>

          <div className="text-sm font-bold text-gray-500 uppercase tracking-widest pt-8 border-t border-gray-200">
            Pillai University • New Panvel, Navi Mumbai
          </div>
        </motion.div>
      </div>
    </section>
  );
}
