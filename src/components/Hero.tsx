import React from 'react';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#111111]"
      aria-label="Welcome to HeadOffice Unisex Salon"
    >
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A46A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C6A46A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Asymmetrical Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed eyebrow with geographic indicator */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] text-[#C6A46A] mb-5">
              <span className="w-6 h-[1px] bg-[#C6A46A]" />
              <span>Punjabi Bagh · New Delhi</span>
            </div>

            {/* Main Headline in Cormorant Garamond */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#F5F1EA] mb-6">
              Your Style.
              <br />
              <span className="italic font-light text-[#D8BB89]">Your Signature.</span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#F5F1EA]/80 max-w-xl font-light leading-relaxed mb-8">
              Discover personalised hair, beauty and grooming experiences designed around your individual style at our contemporary salon on Club Road.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] active:scale-[0.98] transition-all rounded shadow-lg shadow-[#C6A46A]/15 flex items-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-medium text-[#F5F1EA] border border-[#F5F1EA]/25 hover:border-[#C6A46A] hover:text-[#C6A46A] transition-all rounded"
              >
                Explore Services
              </button>
            </div>

            {/* Operational & Location Indicators strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#F5F1EA]/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A46A] shrink-0" />
                <span className="font-medium tracking-wide">
                  Building No. 5, Club Road, Punjabi Bagh
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A46A] shrink-0" />
                <span className="font-mono">{BUSINESS_CONFIG.hours.time} · Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Salon Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 border border-[#C6A46A]/30 rounded-lg pointer-events-none -translate-x-1 translate-y-2 hidden sm:block" />

              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-md bg-[#1C1C1C] shadow-2xl">
                <img
                  src="/images/hero.jpg"
                  alt="HeadOffice Unisex Salon contemporary salon interior on Club Road, Punjabi Bagh"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/20 to-transparent" />

                {/* Editorial overlay badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#111111]/90 backdrop-blur-md border border-[#C6A46A]/30 rounded text-[#F5F1EA]">
                  <p className="text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold mb-1">
                    Contemporary Unisex Salon
                  </p>
                  <p className="font-serif text-lg leading-tight text-[#F5F1EA]">
                    Personalised Hair, Beauty & Grooming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
