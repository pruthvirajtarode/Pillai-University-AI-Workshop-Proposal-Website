import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Why AI', href: '#why-ai' },
  { name: 'AI Journey', href: '#ai-journey' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Tools', href: '#tools' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Activities', href: '#activities' },
  { name: 'Outcomes', href: '#outcomes' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-pillai-primary" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-pillai-dark">PILLAI UNIVERSITY</span>
            <span className="text-xs font-semibold text-pillai-secondary tracking-wider">AI WORKSHOP</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-pillai-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="#hero" className="bg-pillai-primary hover:bg-pillai-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
            Workshop Overview
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-pillai-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800 hover:text-pillai-primary py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="bg-pillai-primary text-center text-white px-5 py-3 rounded-xl text-base font-semibold mt-2">
            Workshop Overview
          </a>
        </div>
      )}
    </nav>
  );
}
