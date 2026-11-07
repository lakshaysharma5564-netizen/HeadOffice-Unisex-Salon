import React from 'react';
import { UserCheck, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: UserCheck,
      number: '01',
      title: 'Personalised Style',
      description:
        'We believe every client is unique. Our team takes time to understand individual preferences, hair characteristics, and styling comfort before selecting a look.',
    },
    {
      icon: Sparkles,
      number: '02',
      title: 'Hair & Beauty',
      description:
        'Explore hair cutting, colouring, skin treatments, facials, and grooming in one convenient destination designed for modern individuals.',
    },
    {
      icon: MapPin,
      number: '03',
      title: 'Convenient Location',
      description:
        'Easily accessible on Club Road in Punjabi Bagh, New Delhi, offering regular daily operating hours from 10:00 AM to 8:00 PM.',
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 bg-[#181818] border-t border-white/5 relative"
      aria-label="Why Choose HeadOffice Unisex Salon"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
            <span>Our Principles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-4">
            Your Style Deserves Attention.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F1EA]/75 font-light leading-relaxed">
            Focused on thoughtful consultations and attentive salon services in a welcoming setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#111111] p-8 rounded-lg border border-white/5 hover:border-[#C6A46A]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded bg-[#1C1C1C] border border-[#C6A46A]/20 flex items-center justify-center text-[#C6A46A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm text-[#C6A46A]/60 font-semibold">
                      {feat.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#F5F1EA] mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#F5F1EA]/70 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
