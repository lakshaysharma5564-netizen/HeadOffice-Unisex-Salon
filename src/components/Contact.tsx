import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#111111] border-t border-white/5 relative"
      aria-label="Location and Contact Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A46A] mb-3">
            <span>Find Us in Punjabi Bagh</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5F1EA] tracking-tight mb-4">
            Visit the Salon.
          </h2>
          <p className="text-sm sm:text-base text-[#F5F1EA]/70 font-light leading-relaxed">
            Conveniently located on Club Road in Punjabi Bagh, New Delhi. Walk-ins and pre-booked consultations are welcomed seven days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Contact Details Card Left */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#181818] rounded-xl border border-white/10 p-8 shadow-xl">
            <div className="space-y-8">
              {/* Salon Name & Address */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold block mb-1">
                  Salon Address
                </span>
                <h3 className="font-serif text-2xl text-[#F5F1EA] font-normal mb-3">
                  {BUSINESS_CONFIG.name}
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#F5F1EA]/80 font-light leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#C6A46A] shrink-0 mt-0.5" />
                  <div>
                    <p>{BUSINESS_CONFIG.address.line1}</p>
                    <p>{BUSINESS_CONFIG.address.line2}, {BUSINESS_CONFIG.address.area}</p>
                    <p>{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.pincode}</p>
                    <p className="text-xs text-[#F5F1EA]/50 mt-1">{BUSINESS_CONFIG.address.country}</p>
                  </div>
                </div>
              </div>

              {/* Telephones */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold block mb-3">
                  Direct Contact Numbers
                </span>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C6A46A] shrink-0" />
                    <div>
                      <span className="text-xs text-[#F5F1EA]/50 block">Primary Mobile</span>
                      <a
                        href={BUSINESS_CONFIG.phones.primary.tel}
                        className="font-mono text-[#F5F1EA] hover:text-[#C6A46A] transition-colors"
                      >
                        {BUSINESS_CONFIG.phones.primary.display}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C6A46A] shrink-0" />
                    <div>
                      <span className="text-xs text-[#F5F1EA]/50 block">Salon Landline</span>
                      <a
                        href={BUSINESS_CONFIG.phones.landline.tel}
                        className="font-mono text-[#F5F1EA] hover:text-[#C6A46A] transition-colors"
                      >
                        {BUSINESS_CONFIG.phones.landline.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#C6A46A] font-semibold block mb-3">
                  Operational Timings
                </span>
                <div className="flex items-start gap-3 text-sm text-[#F5F1EA]/80 font-light">
                  <Clock className="w-4 h-4 text-[#C6A46A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#F5F1EA]">{BUSINESS_CONFIG.hours.days}</p>
                    <p className="font-mono text-xs text-[#C6A46A] mt-0.5">{BUSINESS_CONFIG.hours.time}</p>
                    <p className="text-[11px] text-[#F5F1EA]/50 mt-1">Open all 7 days of the week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_CONFIG.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-[#111111] bg-[#C6A46A] hover:bg-[#D8BB89] transition-all rounded text-center flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phones.primary.tel}
                className="flex-1 py-3 px-4 text-xs uppercase tracking-wider font-medium text-[#F5F1EA] border border-white/15 hover:border-[#C6A46A] hover:text-[#C6A46A] transition-all rounded text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Card Right */}
          <div className="lg:col-span-7 flex flex-col bg-[#181818] rounded-xl border border-white/10 overflow-hidden shadow-xl min-h-[380px]">
            <div className="p-4 bg-[#1C1C1C] border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#F5F1EA]/80 font-medium">
                <MapPin className="w-4 h-4 text-[#C6A46A]" />
                <span>Club Road, Punjabi Bagh, New Delhi</span>
              </div>
              <a
                href={BUSINESS_CONFIG.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6A46A] hover:text-[#D8BB89] flex items-center gap-1 font-medium transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative w-full flex-grow min-h-[320px] bg-[#111111]">
              <iframe
                title="HeadOffice Unisex Salon Location Map"
                src="https://maps.google.com/maps?q=Building+No+5+Club+Road+Punjabi+Bagh+New+Delhi+Delhi+110026&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
