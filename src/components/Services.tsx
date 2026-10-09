import React from 'react';
import { ArrowUpRight, MessageSquare, Check } from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../data/services';
import { createWhatsAppUrl, BUSINESS_INFO } from '../data/business';

export const Services: React.FC = () => {
  const handleServiceEnquiry = (service: ServiceItem) => {
    const url = createWhatsAppUrl(service.whatsappMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F2F6FC] relative border-t border-[#D0DCEB]" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Poster Inspiration */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0B1B3D]/15">
              <span>Property Consultant Services</span>
            </div>
            
            <p className="font-script text-xl text-[#C69A27] font-medium mb-2">
              "{BUSINESS_INFO.tagline}"
            </p>

            <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
              Construct, Sell, Buy, Rent and Manage Properties.
            </h2>
            <p className="mt-4 text-[#536279] text-base sm:text-lg leading-relaxed">
              From raw land acquisition and turnkey construction to verified property transactions and bespoke home interior styling, we handle each stage with integrity and local insight.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <p className="text-xs uppercase tracking-widest text-[#C69A27] font-bold">
              Direct Inquiries
            </p>
            <p className="text-sm text-[#536279] mt-1">
              WhatsApp or Call: <span className="font-bold text-[#0B1B3D]">{BUSINESS_INFO.phone}</span>
            </p>
          </div>
        </div>

        {/* 6 Core Cards in 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#D0DCEB] hover:border-[#C69A27]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative h-60 overflow-hidden bg-[#0B1B3D]/10">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Understated Visual Identifier */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B1B3D] text-xs font-mono font-bold tracking-wider shadow-sm">
                    {service.number}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#E8EEF7] font-semibold">
                      NKR Pillar
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C69A27] group-hover:text-[#0B1B3D] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 text-left">
                  <h3 className="font-serif text-2xl font-bold text-[#151C28] group-hover:text-[#0B1B3D] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-[#536279] text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-5 pt-4 border-t border-[#EEF2F6] space-y-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#151C28]/85">
                        <Check className="w-3.5 h-3.5 text-[#C69A27] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Opens WhatsApp */}
              <div className="p-6 pt-0 text-left">
                <button
                  onClick={() => handleServiceEnquiry(service)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-[#F8F9FB] group-hover:bg-[#0B1B3D] text-[#151C28] group-hover:text-white border border-[#D0DCEB] group-hover:border-[#0B1B3D] transition-all text-xs font-bold tracking-wider uppercase shadow-sm"
                  aria-label={`Enquire about ${service.title} via WhatsApp`}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#C69A27]" />
                    <span>Enquire on WhatsApp</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#C69A27]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner in Navy Blue & Gold */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0B1B3D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C69A27]/30">
          <div className="text-left">
            <p className="font-script text-lg text-[#C69A27]">
              {BUSINESS_INFO.tagline}
            </p>
            <h4 className="font-serif text-2xl font-normal text-white mt-0.5">
              Have a custom property or interior requirement?
            </h4>
            <p className="text-sm text-[#E8EEF7]/80 mt-1 max-w-xl">
              Connect directly with our Sarjapura team for prompt advice, property site visits, and architectural interior discussions.
            </p>
          </div>
          <a
            href={createWhatsAppUrl("Hello NKR Properties & Interiors, I would like to discuss a custom property and interior requirement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C69A27] text-[#0B1B3D] hover:bg-[#DFB13C] transition-all font-bold text-xs tracking-wider uppercase shrink-0 shadow-md"
          >
            <span>Consult Our Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default Services;
