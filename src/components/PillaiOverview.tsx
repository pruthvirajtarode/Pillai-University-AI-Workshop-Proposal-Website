import { motion } from 'framer-motion';
import { workshopData } from '../data/workshopData';

export function PillaiOverview() {
  return (
    <section className="py-24 bg-pillai-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pillai-primary/20 blur-[100px] rounded-full transform translate-x-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            An AI-Ready Workshop for a <span className="text-pillai-accent">Future-Ready University</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-20 border-b border-white/10 pb-20">
          {workshopData.stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-pillai-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schools */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopData.schools.map((school, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-4">
                {school.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {school.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
