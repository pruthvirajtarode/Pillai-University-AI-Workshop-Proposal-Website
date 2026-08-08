import { BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pillai-dark text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-pillai-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">PILLAI UNIVERSITY</span>
                <span className="text-xs font-semibold text-gray-400 tracking-wider">AI WORKSHOP</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering students across all disciplines to leverage artificial intelligence creatively and responsibly.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Dr. K. M. Vasudevan Pillai Campus</li>
              <li>Plot No. 10, Sector 16</li>
              <li>New Panvel, Navi Mumbai – 410206</li>
              <li className="pt-2 flex items-center gap-2">
                <span className="text-pillai-accent">P:</span> +91 881 882 8837
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pillai-accent">E:</span> info@pillai.edu.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-pillai-accent transition-colors">Home</a></li>
              <li><a href="#why-ai" className="hover:text-pillai-accent transition-colors">About the Workshop</a></li>
              <li><a href="#curriculum" className="hover:text-pillai-accent transition-colors">Curriculum</a></li>
              <li><a href="#agenda" className="hover:text-pillai-accent transition-colors">Agenda</a></li>
              <li><a href="https://pillai.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-pillai-accent transition-colors text-pillai-accent">Official Website →</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Pillai University. All rights reserved.</p>
          <p>Designed for the AI Foundation & Generative AI Workshop</p>
        </div>
      </div>
    </footer>
  );
}
