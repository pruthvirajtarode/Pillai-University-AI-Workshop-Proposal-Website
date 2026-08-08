import { motion } from 'framer-motion';
import { workshopData } from '../data/workshopData';

export function WorkshopAgenda() {
  return (
    <section id="agenda" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            One-Day <span className="text-pillai-primary">Agenda</span>
          </motion.h2>
          <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full shadow-sm text-pillai-dark font-semibold">
            Approx. 7–8 Hours Total
          </div>
        </div>

        <div className="relative border-l-2 border-pillai-primary/20 ml-4 md:ml-8">
          {workshopData.agenda.map((item, idx) => {
            const isBreak = item.title.toLowerCase().includes('break') || item.title.toLowerCase().includes('lunch');
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.05 }}
                className={`relative pl-8 md:pl-12 pb-10 ${isBreak ? 'opacity-70' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                  isBreak ? 'bg-gray-100 border-gray-300' : 'bg-white border-pillai-primary'
                }`} />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <div className={`font-mono text-sm md:text-base font-semibold shrink-0 ${
                    isBreak ? 'text-gray-500' : 'text-pillai-primary'
                  }`}>
                    {item.time}
                  </div>
                  <div>
                    <h3 className={`text-lg md:text-xl font-bold ${
                      isBreak ? 'text-gray-600' : 'text-pillai-dark'
                    }`}>
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-gray-600 mt-2 text-sm md:text-base">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
