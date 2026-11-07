import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Reviews: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-[#111111] border-t border-white/5 relative"
      aria-label="Customer Feedback & Google Reviews"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
          <Star className="w-3.5 h-3.5 fill-[#C6A46A]" />
          <span>Client Voice</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-4">
          Your Experience Matters.
        </h2>

        <p className="text-sm sm:text-base text-[#F5F1EA]/75 font-light leading-relaxed max-w-xl mx-auto mb-8">
          We value every guest who walks into our salon. Read verified feedback from our patrons or share your own thoughts about your visit directly on our Google Maps profile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_CONFIG.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded shadow-md flex items-center justify-center gap-2"
          >
            <span>View Customer Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={BUSINESS_CONFIG.maps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-widest font-medium text-[#F5F1EA] border border-white/15 hover:border-[#C6A46A] hover:text-[#C6A46A] transition-all rounded"
          >
            Leave Your Feedback
          </a>
        </div>
      </div>
    </section>
  );
};
