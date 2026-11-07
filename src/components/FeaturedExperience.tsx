import React from 'react';
import { Compass, Palette, Sparkles, UserCheck } from 'lucide-react';

interface FeaturedExperienceProps {
  onBookClick: () => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onBookClick }) => {
  const experiences = [
    {
      icon: Compass,
      title: 'Personalised Haircut Consultation',
      description:
        'A dedicated pre-service conversation assessing your natural hair fall, texture, face geometry, and lifestyle to achieve a flattering, manageable cut.',
    },
    {
      icon: Sparkles,
      title: 'Precision Hair Styling',
      description:
        'From high-polish event blowouts to textured everyday styles, crafted with professional heat tools and quality finishing products.',
    },
    {
      icon: Palette,
      title: 'Hair Colour Transformation',
      description:
        'Harmonious tonal matching, multidimensional richness, and healthy hair protection for global colour or gray coverage.',
    },
    {
      icon: UserCheck,
      title: 'Beauty & Dedicated Grooming',
      description:
        'Revitalizing skin facials, occasion makeup, and disciplined beard contouring designed for both modern women and gentlemen.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-[#151515] border-t border-white/5 relative overflow-hidden"
      aria-label="The HeadOffice Client Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C6A46A] mb-3">
            <span>The Salon Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-5">
            Your Look. Your Way.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F1EA]/75 font-light leading-relaxed">
            Every great look starts with understanding what you want. Share your preferences, discuss your desired style and enquire about the right service for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="bg-[#1C1C1C] p-6 lg:p-7 rounded-lg border border-white/5 hover:border-[#C6A46A]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-[#111111] border border-[#C6A46A]/30 flex items-center justify-center text-[#C6A46A] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#F5F1EA]/30 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F5F1EA] mb-3 group-hover:text-[#C6A46A] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F5F1EA]/70 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={onBookClick}
            className="px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded shadow-lg"
          >
            Plan Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
