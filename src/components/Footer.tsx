import React from 'react';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#F5F1EA]/80 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block mb-4 focus:outline-none">
              <span className="font-serif text-2xl font-semibold tracking-wider text-[#F5F1EA] block">
                {BUSINESS_CONFIG.display.title}
              </span>
              <span className="text-[11px] tracking-[0.25em] text-[#C6A46A] uppercase font-medium">
                {BUSINESS_CONFIG.display.subtitle}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#F5F1EA]/60 font-light leading-relaxed max-w-sm mb-6">
              A contemporary unisex hair, beauty, and grooming salon offering personalized consultations on Club Road, Punjabi Bagh, New Delhi.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C6A46A]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Building No. 5, Club Road, Punjabi Bagh, New Delhi 110026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1EA] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F1EA]/70">
              <li>
                <a href="#home" className="hover:text-[#C6A46A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6A46A] transition-colors">
                  About the Salon
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A46A] transition-colors">
                  Services Catalogue
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C6A46A] transition-colors">
                  Client Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A46A] transition-colors">
                  Aesthetic Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#C6A46A] transition-colors">
                  Plan an Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6A46A] transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1EA] font-semibold mb-4">
              Hours & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#F5F1EA]/70">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A46A] shrink-0" />
                <span>{BUSINESS_CONFIG.hours.days}: {BUSINESS_CONFIG.hours.time}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A46A] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.phones.primary.tel}
                  className="font-mono text-[#F5F1EA] hover:text-[#C6A46A] transition-colors"
                >
                  {BUSINESS_CONFIG.phones.primary.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A46A] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.phones.landline.tel}
                  className="font-mono text-[#F5F1EA] hover:text-[#C6A46A] transition-colors"
                >
                  {BUSINESS_CONFIG.phones.landline.display}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#C6A46A] hover:text-[#D8BB89] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F1EA]/50 font-light">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-[11px]">
            Punjabi Bagh · West Delhi · India
          </p>
        </div>
      </div>
    </footer>
  );
};
