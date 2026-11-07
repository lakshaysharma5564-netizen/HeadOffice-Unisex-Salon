import React, { useState } from 'react';
import { Sparkles, Clock, MessageSquare, Info } from 'lucide-react';
import { SERVICES_DATA, SERVICE_CATEGORIES, ServiceCategory, ServiceItem } from '../data/services';
import { resolveServicePrice } from '../utils/bookingValidation';

interface ServicesProps {
  pricingConfirmed: boolean;
  onTogglePricingConfirmed: () => void;
  onEnquireService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({
  pricingConfirmed,
  onTogglePricingConfirmed,
  onEnquireService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#111111] relative"
      aria-label="HeadOffice Salon Services Catalogue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
            <span>Our Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-4">
            Discover Your Style.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F1EA]/70 font-light leading-relaxed">
            Carefully curated hair, beauty, and grooming treatments delivered by attentive salon professionals. Select a service to initiate an enquiry.
          </p>
        </div>

        {/* Category Filter Controls and Pricing Verification Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          {/* Functional category buttons (anti-pill interactive tabs) */}
          <div className="flex flex-wrap items-center gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all rounded ${
                  selectedCategory === cat.id
                    ? 'bg-[#C6A46A] text-[#111111] font-semibold shadow-sm'
                    : 'bg-[#1C1C1C] text-[#F5F1EA]/80 hover:text-[#F5F1EA] hover:bg-[#252525] border border-white/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Pricing Verification Setting Indicator / Toggle */}
          <div className="flex items-center gap-3 bg-[#1C1C1C] px-3.5 py-2 rounded border border-white/10 text-xs">
            <Info className="w-4 h-4 text-[#C6A46A] shrink-0" />
            <span className="text-[#F5F1EA]/80">
              Pricing: {pricingConfirmed ? 'Owner-Approved' : 'Unconfirmed (Default)'}
            </span>
            <button
              onClick={onTogglePricingConfirmed}
              className="text-[11px] underline text-[#C6A46A] hover:text-[#D8BB89] font-medium ml-1 transition-colors"
              title="Click to toggle pricing verification state"
            >
              {pricingConfirmed ? 'Hide Amounts' : 'Preview Reference Prices'}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const priceInfo = resolveServicePrice(service.referencePriceText, pricingConfirmed);

            return (
              <article
                key={service.id}
                className="group flex flex-col bg-[#181818] rounded-lg overflow-hidden border border-white/5 hover:border-[#C6A46A]/30 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Service Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1C1C]">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Graceful fallback if any image load issues occur
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Subtle category stamp */}
                  <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] uppercase tracking-wider text-[#C6A46A] font-medium border border-[#C6A46A]/20">
                    {service.categoryName}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F1EA] group-hover:text-[#C6A46A] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F5F1EA]/75 leading-relaxed font-light mb-5 flex-grow">
                    {service.shortDescription}
                  </p>

                  {/* Metadata and Pricing */}
                  <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs">
                      {service.suggestedDuration && (
                        <div className="flex items-center gap-1.5 text-[#F5F1EA]/60 font-mono">
                          <Clock className="w-3.5 h-3.5 text-[#C6A46A]" />
                          <span>{service.suggestedDuration}</span>
                        </div>
                      )}

                      <div className="font-medium">
                        {priceInfo.isConfirmed ? (
                          <span className="text-[#C6A46A] font-mono text-xs">
                            {priceInfo.text}
                          </span>
                        ) : (
                          <span className="text-[#F5F1EA]/60 italic text-xs">
                            Contact for Pricing
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Functional Enquire Button */}
                    <button
                      onClick={() => onEnquireService(service)}
                      className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-[#F5F1EA] bg-[#222222] hover:bg-[#C6A46A] hover:text-[#111111] transition-all rounded flex items-center justify-center gap-2 border border-white/10 hover:border-transparent mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire About {service.name}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <p className="text-center text-xs text-[#F5F1EA]/50 font-light mt-10">
          * Note: Service availability, duration, and tailored pricing are confirmed during your consultation.
        </p>
      </div>
    </section>
  );
};
