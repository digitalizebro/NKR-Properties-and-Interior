import React from 'react';
import { Layers, Building, Palette, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Multiple Property Services',
      description:
        'A single reliable point of contact in Sarjapura covering construction, property sales, buying, rentals, property management, and interiors under one roof.',
    },
    {
      icon: Building,
      title: 'Property and Rental Assistance',
      description:
        'Dedicated assistance for identifying purchase opportunities, discussing property sales, or coordinating rental arrangements aligned with your preferred location, budget, and timelines.',
    },
    {
      icon: Palette,
      title: 'Construction & Home Interiors',
      description:
        'Structured support for residential construction planning and turnkey interior design, focusing on layout efficiency, quality materials, and comfortable everyday living.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Personal Communication',
      description:
        'Straightforward, direct communication with our local team via phone or WhatsApp (8905 97 8905), providing prompt responses and clear dialogue without call-center delays.',
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#0B1B3D] text-white relative overflow-hidden" aria-label="Why Choose NKR Properties & Interiors">
      {/* Background Glows in Royal Navy & Gold */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69A27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#061024] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFB13C] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
            <span>Our Service Commitment</span>
          </div>

          <p className="font-script text-2xl text-[#DFB13C] font-medium mb-1">
            "{BUSINESS_INFO.tagline}"
          </p>

          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
            An Integrated Approach to Living & Property.
          </h2>

          <p className="mt-4 text-[#E8EEF7]/85 text-base sm:text-lg leading-relaxed">
            We focus on what matters most to our clients: transparent guidance, comprehensive multi-service capability, and prompt personal responsiveness based in Sarjapura, Bengaluru.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-[#122858]/60 border border-white/10 hover:border-[#C69A27]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div className="text-left">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-[#C69A27] flex items-center justify-center border border-[#C69A27]/40 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm text-[#C69A27] font-bold tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#DFB13C] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-[#E8EEF7]/80 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#C69A27]">
                  <span className="uppercase tracking-wider font-bold">Sarjapura Hub</span>
                  <span className="text-[#E8EEF7]/60">Your Property, Our Priority</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct CTA */}
        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="text-left">
            <p className="text-sm font-bold text-white">
              Connect directly with our Sarjapura property consultant
            </p>
            <p className="text-xs text-[#E8EEF7]/70 mt-0.5">
              Call {BUSINESS_INFO.phone} or send a quick WhatsApp enquiry
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Hello NKR Properties & Interiors, I would like to consult with your team on my property and interior plans.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C69A27] text-[#061024] hover:bg-[#DFB13C] transition-colors font-bold text-xs tracking-wider uppercase shadow-lg group"
          >
            <span>Start a Direct Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
