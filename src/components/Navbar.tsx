import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Why AI', href: '#why-ai' },
  { name: 'AI Journey', href: '#ai-journey' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Tools', href: '#tools' },
  { name: 'Superpowers', href: '#superpowers' },
  { name: 'Activities', href: '#activities' },
  { name: 'Outcomes', href: '#outcomes' },
  { name: 'Proposal', href: '#proposal' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" aria-label="Pillai University AI Workshop Home" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-pillai-primary flex items-center justify-center shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base text-pillai-dark tracking-tight">PILLAI UNIVERSITY</span>
              <span className="text-[10px] font-bold text-pillai-primary tracking-[0.15em] uppercase">AI Workshop</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-pillai-primary hover:bg-pillai-primary/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#proposal"
            className="hidden xl:inline-flex items-center bg-pillai-primary hover:bg-pillai-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-pillai-primary/20 hover:shadow-pillai-primary/30"
          >
            Download Proposal
          </a>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 rounded-lg text-pillai-dark hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-pillai-primary hover:bg-pillai-primary/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#proposal"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 text-center bg-pillai-primary hover:bg-pillai-secondary text-white px-5 py-3.5 rounded-xl text-base font-bold transition-all"
              >
                Download Proposal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
