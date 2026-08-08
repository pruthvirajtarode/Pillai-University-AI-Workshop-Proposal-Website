import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Users, Sparkles, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const badges = [
  { icon: <Clock className="w-4 h-4" />, text: "7–8 HOURS" },
  { icon: <Calendar className="w-4 h-4" />, text: "ONE DAY" },
  { icon: <Users className="w-4 h-4" />, text: "ALL DISCIPLINES" },
  { icon: <Sparkles className="w-4 h-4" />, text: "BEGINNER FRIENDLY" },
];

const floatingStats = [
  { label: "Years Legacy", value: "50+", delay: 0 },
  { label: "Placement Rate", value: "95%", delay: 0.2 },
  { label: "Recruiters", value: "300+", delay: 0.4 },
  { label: "Industry Partners", value: "50+", delay: 0.6 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Workshop Introduction"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-pillai-light"
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[70%] rounded-full bg-pillai-primary/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[20%] w-[50%] h-[60%] rounded-full bg-pillai-accent/15 blur-[120px]" 
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239E1B23' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left Content ── */}
          <motion.div
            style={{ y: y1, opacity }}
            className="flex flex-col items-start gap-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-pillai-primary/20 text-pillai-primary font-bold text-xs tracking-widest uppercase shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-pillai-accent animate-pulse" />
              Student AI Foundation Workshop
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-pillai-dark leading-[1.1] tracking-tight">
                Unlock Your <br/>
                <span className="text-gradient">AI Superpowers.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                An immersive one-day workshop designed to take Pillai University students from AI fundamentals to practical Generative AI skills — no technical background required.
              </p>
            </motion.div>

            {/* Stat badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700 glass-card px-4 py-2.5 rounded-xl transition-transform hover:scale-105">
                  <span className="text-pillai-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            >
              <a
                href="#why-ai"
                className="group relative inline-flex justify-center items-center gap-2 bg-pillai-primary text-white px-8 py-4 rounded-2xl text-base font-bold transition-all hover:-translate-y-1 overflow-hidden shadow-xl shadow-pillai-primary/30"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pillai-secondary to-pillai-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore the Workshop <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#proposal"
                className="inline-flex justify-center items-center gap-2 glass-card hover:bg-white text-pillai-dark px-8 py-4 rounded-2xl text-base font-bold transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Download Proposal
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-full min-h-[500px]"
          >
            {/* Main Interactive Card */}
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
              className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-pillai-dark via-[#2a080a] to-pillai-primary shadow-2xl border border-white/10 flex flex-col items-center justify-center p-12 text-center transform perspective-1000"
            >
              {/* Glass overlay */}
              <div className="absolute inset-0 glass-panel opacity-50" />
              
              {/* Spinning decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-[400px] h-[400px] border border-white/10 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-white/5 rounded-full"
              />

              {/* Content */}
              <div className="relative z-20 text-white space-y-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.6 }}
                  className="w-24 h-24 mx-auto rounded-3xl glass-card-dark flex items-center justify-center border-white/20 shadow-[0_0_40px_rgba(244,197,66,0.15)]"
                >
                  <Sparkles className="w-12 h-12 text-pillai-accent animate-pulse-slow" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                  From Understanding AI<br />
                  <span className="text-gradient-gold">to Using AI</span>
                </h2>
                <p className="text-white/80 max-w-sm mx-auto text-lg leading-relaxed font-medium">
                  Designed for students across all disciplines — Engineering, Business, Architecture &amp; Computer Applications.
                </p>

                {/* mini journey strip */}
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {['AI Basics', 'Generative AI', 'Prompting', 'AI Tools', 'Responsible AI'].map((tag, idx) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (idx * 0.1) }}
                      className="text-xs font-bold tracking-wide px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Stats */}
            {floatingStats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + stat.delay, type: "spring" }}
                className={`absolute hidden lg:flex flex-col bg-white rounded-2xl p-4 text-center shadow-2xl border border-gray-100 animate-float z-30`}
                style={{
                  top: i === 0 ? '10%' : i === 1 ? '40%' : '75%',
                  left: i === 0 ? '-10%' : i === 2 ? '15%' : i === 3 ? '60%' : 'auto',
                  right: i === 1 ? '-15%' : 'auto',
                  animationDelay: `${i * 1.5}s`
                }}
              >
                <div className="text-2xl font-extrabold text-pillai-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-20"
        >
          <a href="#why-ai" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-gray-400 hover:text-pillai-primary transition-colors group">
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-pillai-primary/10 group-hover:border-pillai-primary/30"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
