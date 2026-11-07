import React from 'react';
import { Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#181818] border-y border-white/5 relative"
      aria-label="About HeadOffice Unisex Salon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#111111] border border-[#C6A46A]/20 shadow-xl">
                <img
                  src="/images/service-haircut.jpg"
                  alt="Precision styling and grooming craft at HeadOffice Unisex Salon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Accent Card */}
              <div className="mt-4 sm:absolute sm:-bottom-6 sm:-right-6 sm:max-w-xs bg-[#111111] p-5 rounded border border-[#C6A46A]/30 shadow-2xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A46A] font-semibold mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#C6A46A]" />
                  <span>Unisex Destination</span>
                </div>
                <p className="text-xs text-[#F5F1EA]/80 leading-relaxed font-light">
                  Tailored styling sessions for men and women, focusing on individual hair health and facial profile aesthetics.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Right */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-6">
              More Than Just a Salon.
            </h2>

            <p className="text-base sm:text-lg text-[#F5F1EA]/85 leading-relaxed font-light mb-6">
              At HeadOffice Unisex Salon, personal style meets professional grooming. Discover a welcoming space for hair, beauty and grooming services in Punjabi Bagh, New Delhi.
            </p>

            <p className="text-sm sm:text-base text-[#F5F1EA]/70 leading-relaxed font-light mb-8">
              Located on Club Road, our salon is structured around attentive client consultations. Whether you seek a subtle hair refresh, global colouring, radiant skincare, or sharp grooming, each appointment begins with understanding what you desire.
            </p>

            {/* Three Pillar Points (Grounded in Verified Reality) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#111111] border border-[#C6A46A]/30 text-[#C6A46A] shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1EA] mb-1">
                    Bespoke Hair Consultations
                  </h3>
                  <p className="text-xs text-[#F5F1EA]/70 leading-relaxed">
                    Personalized attention to texture, lifestyle, and facial contours before every cut or colour service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-[#111111] border border-[#C6A46A]/30 text-[#C6A46A] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F1EA] mb-1">
                    Comfortable & Welcoming Space
                  </h3>
                  <p className="text-xs text-[#F5F1EA]/70 leading-relaxed">
                    A relaxed, attentive environment on Club Road designed for both men and women.
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
