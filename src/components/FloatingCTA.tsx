import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface FloatingCTAProps {
  onBookClick: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBookClick }) => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-md border-t border-[#C6A46A]/20 px-4 py-2.5 shadow-2xl transition-transform"
      aria-label="Quick Mobile Actions"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Quick Direct Call */}
        <a
          href={BUSINESS_CONFIG.phones.primary.tel}
          className="flex-1 py-2.5 px-3 rounded bg-[#1C1C1C] border border-white/10 text-[#F5F1EA] text-xs font-medium flex items-center justify-center gap-2 hover:border-[#C6A46A] active:scale-[0.98] transition-all"
          aria-label={`Call ${BUSINESS_CONFIG.name}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#C6A46A]" />
          <span>Call Salon</span>
        </a>

        {/* Quick Booking Anchor */}
        <button
          onClick={onBookClick}
          className="flex-1 py-2.5 px-3 rounded bg-[#C6A46A] text-[#111111] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D8BB89] active:scale-[0.98] transition-all shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
};
