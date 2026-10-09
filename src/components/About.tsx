import React from 'react';
import { Home, Compass, KeyRound, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Home,
      title: 'Property Solutions',
      subtitle: 'Construct, Buy, Sell & Rent',
      description: 'Navigating property acquisition, construction execution, genuine buyer outreach, and rental assistance across Sarjapura and Bengaluru.',
    },
    {
      icon: Compass,
      title: 'Living Spaces',
      subtitle: 'Construction & Home Interiors',
      description: 'Bridging architectural construction planning and turnkey interior design to create practical, aesthetically rewarding living spaces.',
    },
    {
      icon: KeyRound,
      title: 'Management Care',
      subtitle: 'Property Oversight',
      description: 'Assisting property owners with routine upkeep, tenant coordination, and end-to-end property-related requirements.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F9FB] relative overflow-hidden" aria-label="About NKR Properties & Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D0DCEB] shadow-2xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary residence courtyard and architectural design in Bengaluru"
                className="w-full h-[480px] sm:h-[560px] object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge with Poster Details */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D0DCEB] shadow-lg">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#C69A27]">
                    Property Consultant
                  </p>
                  <p className="text-[11px] text-[#536279]">
                    Sarjapura, Bengaluru
                  </p>
                </div>
                <p className="font-script text-sm text-[#0B1B3D] mt-1 font-semibold">
                  "{BUSINESS_INFO.tagline}"
                </p>
              </div>
            </div>

            {/* Decorative Corner Element in Gold */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C69A27]/50 rounded-tl-3xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Brand Introduction */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-4 self-start border border-[#0B1B3D]/15">
              <span>About NKR Properties & Interiors</span>
            </div>

            {/* Heading */}
            <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
              Property Solutions, Thoughtfully Connected.
            </h2>

            {/* Brand Story with Poster Tagline */}
            <div className="mt-6 space-y-4 text-[#536279] text-base sm:text-lg leading-relaxed">
              <p>
                {BUSINESS_INFO.description}
              </p>
              <p className="text-sm sm:text-base text-[#151C28]/90">
                Operating with the guiding philosophy of <strong className="text-[#0B1B3D]">“{BUSINESS_INFO.tagline}”</strong>, our team brings together construction, buying, selling, renting, property management, and turnkey interior design under one trusted local consultancy in Sarjapura.
              </p>
            </div>

            {/* Three Visual Highlights Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-[#D0DCEB] shadow-sm hover:shadow-md hover:border-[#C69A27]/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center group-hover:bg-[#0B1B3D] group-hover:text-[#C69A27] transition-colors mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#151C28]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#C69A27] mt-0.5 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-[#536279] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Consultation Link */}
            <div className="mt-8 pt-6 border-t border-[#D0DCEB] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#151C28]">
                <CheckCircle2 className="w-4 h-4 text-[#0B1B3D]" />
                <span>Dedicated Property Consultant in Sarjapura</span>
              </div>

              <a
                href={createWhatsAppUrl("Hello NKR Properties & Interiors, I would like to consult with your team regarding your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1B3D] hover:text-[#C69A27] transition-colors group"
              >
                <span>Speak directly with our team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
