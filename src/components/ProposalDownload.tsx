import { motion } from 'framer-motion';
import { FileDown, FileText, Presentation, BookOpen, ExternalLink } from 'lucide-react';

const documents = [
  {
    icon: <FileText className="w-7 h-7 text-pillai-primary" />,
    title: "Workshop Proposal Report",
    description: "The complete proposal document covering objectives, curriculum, methodology, and expected outcomes for university management.",
    badge: "PROPOSAL",
    badgeColor: "bg-pillai-primary/10 text-pillai-primary",
    href: "/docs/Pillai_University_AI_Workshop_Proposal.pdf",
  },
  {
    icon: <Presentation className="w-7 h-7 text-blue-600" />,
    title: "Pitch Presentation",
    description: "A structured pitch deck designed for presentation to the Dean, HOD, and University Management team.",
    badge: "PITCH DECK",
    badgeColor: "bg-blue-100 text-blue-700",
    href: "/docs/Pillai_University_AI_Workshop_Pitch.pdf",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-emerald-600" />,
    title: "Workshop Agenda & Curriculum",
    description: "Detailed one-day schedule, module breakdown, activities, and takeaway kit outline.",
    badge: "CURRICULUM",
    badgeColor: "bg-emerald-100 text-emerald-700",
    href: "/docs/Pillai_University_AI_Workshop_Curriculum.pdf",
  },
];

export function ProposalDownload() {
  return (
    <section id="proposal" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-pillai-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pillai-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pillai-primary/10 text-pillai-primary font-semibold text-sm mb-6 border border-pillai-primary/20">
            <FileDown className="w-4 h-4" />
            OFFICIAL PROPOSAL DOCUMENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-pillai-dark mb-5">
            Download the <span className="text-pillai-primary">Proposal & Pitch Report</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complete documentation prepared for Pillai University leadership — covering objectives, curriculum, workshop methodology, and student outcomes.
          </p>
        </motion.div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border border-gray-200 rounded-3xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-2xl hover:border-pillai-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                {doc.icon}
              </div>

              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${doc.badgeColor}`}>
                  {doc.badge}
                </span>
                <h3 className="text-xl font-bold text-pillai-dark mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{doc.description}</p>
              </div>

              <a
                href={doc.href}
                download
                className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-pillai-light hover:bg-pillai-primary hover:text-white text-pillai-dark border border-gray-200 hover:border-pillai-primary px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group-hover:bg-pillai-primary group-hover:text-white group-hover:border-pillai-primary"
              >
                <FileDown className="w-4 h-4" />
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pillai-primary to-pillai-secondary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Ready to Present to Leadership?</h3>
            <p className="text-white/80 max-w-xl">
              All documents are formatted to professional standards and ready for presentation to the Dean, Director, HOD, and University Management.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:info@pillai.edu.in?subject=AI Foundation Workshop Proposal"
              className="inline-flex items-center gap-2 bg-white text-pillai-primary hover:bg-pillai-accent hover:text-pillai-dark font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4" /> Contact University
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
