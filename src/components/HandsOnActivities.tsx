import { motion } from 'framer-motion';
import { workshopData } from '../data/workshopData';

export function HandsOnActivities() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-6"
          >
            Hands-On <span className="text-pillai-primary">Activities</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            This is not a lecture-only program. Students will actively interact with AI to solve problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopData.activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-pillai-light rounded-2xl p-8 border border-gray-100 hover:border-pillai-accent hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-pillai-primary/10 text-pillai-primary flex items-center justify-center font-bold mb-6 group-hover:bg-pillai-primary group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-pillai-dark mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
