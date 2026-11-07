import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#C6A46A]/20 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Zone: Clean wordmark with display face */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A46A] py-1"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#F5F1EA] group-hover:text-[#C6A46A] transition-colors whitespace-nowrap">
              {BUSINESS_CONFIG.display.title}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C6A46A] uppercase font-medium">
              {BUSINESS_CONFIG.display.subtitle}
            </span>
          </a>

          {/* Navigation Links: 4-5 single-line clean text links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium tracking-wide text-[#F5F1EA]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#C6A46A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A46A] hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone: 1 Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS_CONFIG.phones.primary.tel}
              className="text-xs text-[#F5F1EA]/70 hover:text-[#C6A46A] transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded"
              title="Call HeadOffice Unisex Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
              <span className="font-mono text-xs">{BUSINESS_CONFIG.phones.primary.display}</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] active:scale-[0.98] transition-all rounded shadow-md whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F5F1EA] hover:text-[#C6A46A] focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#111111]/98 border-b border-[#C6A46A]/20 px-6 py-6 backdrop-blur-xl shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#F5F1EA] hover:text-[#C6A46A] transition-colors py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={BUSINESS_CONFIG.phones.primary.tel}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-[#F5F1EA] border border-[#C6A46A]/30 rounded hover:border-[#C6A46A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C6A46A]" />
                Call: {BUSINESS_CONFIG.phones.primary.display}
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded shadow text-center"
              >
                Book Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
