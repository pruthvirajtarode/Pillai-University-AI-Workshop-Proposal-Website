import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Sparkles, User } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-pillai-light">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pillai-primary/5 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-pillai-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pillai-primary/10 border border-pillai-primary/20 text-pillai-primary font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            STUDENT AI FOUNDATION WORKSHOP
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-pillai-dark leading-tight tracking-tight text-balance">
              AI Starts <span className="text-pillai-primary">Here.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg text-balance">
              An immersive one-day workshop designed to take Pillai University students from AI fundamentals to practical Generative AI skills.
            </p>
          </div>

          {/* Key Stats Row */}
          <div className="flex flex-wrap gap-6 py-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <Clock className="w-4 h-4 text-pillai-secondary" /> 7–8 HOURS
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <Calendar className="w-4 h-4 text-pillai-secondary" /> ONE DAY
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              <User className="w-4 h-4 text-pillai-secondary" /> BEGINNER FRIENDLY
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#why-ai" className="inline-flex justify-center items-center gap-2 bg-pillai-primary hover:bg-pillai-secondary text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-pillai-primary/30 hover:shadow-pillai-primary/50 hover:-translate-y-0.5">
              Explore the Workshop <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#agenda" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-pillai-dark border border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              View 1-Day Agenda
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/40"
        >
          {/* We'll use a sophisticated abstract gradient/mesh here to represent "AI + University" since we can't reliably load external photos without them breaking */}
          <div className="absolute inset-0 bg-gradient-to-br from-pillai-primary via-[#6B1218] to-pillai-dark"></div>
          
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 text-white space-y-6">
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 text-pillai-accent" />
            </div>
            <h3 className="text-3xl font-bold">Empowering the Next Generation</h3>
            <p className="text-white/80 max-w-sm text-balance">
              Preparing students across all disciplines to leverage artificial intelligence creatively and responsibly.
            </p>
          </div>
          
          {/* Animated decorative ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 border border-white/10 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] border border-white/5 rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
