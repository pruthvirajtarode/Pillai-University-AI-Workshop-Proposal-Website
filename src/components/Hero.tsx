import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Users, Sparkles, ChevronDown } from 'lucide-react';

const badges = [
  { icon: <Clock className="w-4 h-4" />, text: "7–8 HOURS" },
  { icon: <Calendar className="w-4 h-4" />, text: "ONE DAY" },
  { icon: <Users className="w-4 h-4" />, text: "ALL DISCIPLINES" },
  { icon: <Sparkles className="w-4 h-4" />, text: "BEGINNER FRIENDLY" },
];

const floatingStats = [
  { label: "Years Legacy", value: "50+" },
  { label: "Placement Rate", value: "95%" },
  { label: "Recruiters", value: "300+" },
  { label: "Industry Partners", value: "50+" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Workshop Introduction"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pillai-light"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[70%] rounded-full bg-pillai-primary/5 blur-3xl" />
        <div className="absolute top-[50%] -left-[10%] w-[40%] h-[50%] rounded-full bg-pillai-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #9E1B23 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pillai-primary/10 border border-pillai-primary/20 text-pillai-primary font-bold text-xs tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              Student AI Foundation Workshop
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-pillai-dark leading-[1.05] tracking-tight">
                AI Starts <span className="text-pillai-primary">Here.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                An immersive one-day workshop designed to take Pillai University students from AI fundamentals to practical Generative AI skills — no technical background required.
              </p>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-pillai-primary">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#why-ai"
                aria-label="Explore the Workshop"
                className="inline-flex justify-center items-center gap-2 bg-pillai-primary hover:bg-pillai-secondary text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-pillai-primary/25 hover:shadow-pillai-primary/40 hover:-translate-y-0.5"
              >
                Explore the Workshop <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#proposal"
                aria-label="Download Proposal"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-pillai-dark border border-gray-200 hover:border-pillai-primary/30 px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-md"
              >
                Download Proposal
              </a>
            </div>
          </motion.div>

          {/* ── Right Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pillai-primary via-[#7A1419] to-pillai-dark shadow-2xl border border-white/10 min-h-[440px] flex flex-col items-center justify-center p-10 text-center">
              {/* dot grid overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
                backgroundSize: '28px 28px'
              }} />

              {/* Spinning decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-96 h-96 border border-white/5 rounded-full"
              />

              {/* Content */}
              <div className="relative z-10 text-white space-y-5">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-pillai-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
                  From Understanding AI<br />to Using AI
                </h2>
                <p className="text-white/75 max-w-xs mx-auto text-base leading-relaxed">
                  Designed for students across all disciplines — Engineering, Business, Architecture &amp; Computer Applications.
                </p>

                {/* mini journey strip */}
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {['AI Basics', 'Generative AI', 'Prompting', 'AI Tools', 'Responsible AI'].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stats below on mobile, positioned over card on desktop */}
            <div className="grid grid-cols-4 gap-3 mt-4 lg:absolute lg:-bottom-5 lg:left-6 lg:right-6 lg:mt-0">
              {floatingStats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-3 text-center shadow-lg border border-gray-100">
                  <div className="text-lg md:text-xl font-extrabold text-pillai-primary">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-semibold leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <a href="#why-ai" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-gray-400 hover:text-pillai-primary transition-colors group">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
