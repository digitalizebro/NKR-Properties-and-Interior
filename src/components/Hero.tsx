import React, { useState } from 'react';
import { MapPin, ArrowRight, Phone, MessageSquare, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';

interface HeroProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTalkClick }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'interior'>('architecture');

  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const servicesEl = document.querySelector('#services');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTalk = () => {
    if (onTalkClick) {
      onTalkClick();
    } else {
      window.open(createWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  const coreServices = [
    'Construct Properties',
    'Sell Properties',
    'Buy Properties',
    'Rent Properties',
    'Manage Properties',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F8F6F1] to-[#F1F4FA]"
      aria-label="Hero Introduction"
    >
      {/* Subtle Skyline Graphic Watermark inspired by the brand poster */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none bg-repeat-x bg-top"
        style={{
          backgroundImage: `radial-gradient(#0B1B3D 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft Luminous Accent Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#C69A27]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0B1B3D]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Clean, authoritative brand messaging */}
          <div className="lg:col-span-7 flex flex-col text-left">

            {/* Poster Badge: Property Consultant + Sarjapura */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-white shadow-sm">
                <span className="text-[#C69A27] text-xs font-bold">—</span>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#F8F9FB]">
                  PROPERTY CONSULTANT
                </span>
                <span className="text-[#C69A27] text-xs font-bold">—</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D0DCEB] text-[#536279] text-xs font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#C69A27]" />
                <span>Sarjapura, Bengaluru</span>
              </div>
            </div>

            {/* Official Tagline from Poster in Script */}
            <div className="mb-2">
              <span className="font-script text-2xl sm:text-3xl text-[#C69A27] font-semibold tracking-wide">
                {BUSINESS_INFO.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="editorial-headline text-4xl sm:text-5xl md:text-6xl font-normal text-[#0B1B3D] tracking-tight leading-[1.08]">
              Complete Property Solutions &amp;{' '}
              <span className="italic font-light text-[#C69A27] block sm:inline">
                Modern Home Interiors
              </span>
            </h1>

            {/* Reassuring Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-[#536279] font-normal leading-relaxed max-w-xl">
              From finding the right property to creating interiors that feel like home, NKR Properties &amp; Interiors brings your construction, buying, selling, and living-space needs together in Sarjapura, Bengaluru.
            </p>

            {/* 5 Pillars Row from the Official Poster */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {coreServices.map((service) => (
                <div
                  key={service}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#D0DCEB] shadow-2xs text-xs font-semibold text-[#0B1B3D]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A27]" />
                  <span>{service}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF3DE] border border-[#C69A27]/40 shadow-2xs text-xs font-semibold text-[#8C6B14]">
                <Sparkles className="w-3 h-3 text-[#C69A27]" />
                <span>Home Interiors</span>
              </div>
            </div>

            {/* Simple, High-Impact Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B1B3D] hover:bg-[#122858] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#C69A27] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0B1B3D] border-2 border-[#C69A27] font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#C69A27]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={handleTalk}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#F2F6FC] text-[#536279] hover:text-[#0B1B3D] border border-[#D0DCEB] font-semibold text-sm transition-all shadow-2xs"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Reassurance points */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#536279]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C69A27]" />
                <span>Direct Consultant Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C69A27]" />
                <span>Sarjapura &amp; Bengaluru Focused</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C69A27]" />
                <span>Transparent Process</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, high-end photography showcase */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            
            {/* Visual Card Container */}
            <div className="w-full relative rounded-3xl overflow-hidden border border-[#D0DCEB] bg-white shadow-xl">
              
              {/* Tab Selector on top of the card */}
              <div className="p-2 bg-[#F8F9FB] border-b border-[#D0DCEB] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-[#0B1B3D] text-white shadow-xs'
                      : 'text-[#536279] hover:text-[#0B1B3D]'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-[#C69A27]" />
                  <span>Architecture &amp; Properties</span>
                </button>
                <button
                  onClick={() => setActiveTab('interior')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'interior'
                      ? 'bg-[#0B1B3D] text-white shadow-xs'
                      : 'text-[#536279] hover:text-[#0B1B3D]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C69A27]" />
                  <span>Interior Living Spaces</span>
                </button>
              </div>

              {/* Main Image */}
              <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden bg-[#FAF8F5]">
                {activeTab === 'architecture' ? (
                  <img
                    key="arch"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                    alt="Contemporary luxury residential villa architecture in Bengaluru"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    // @ts-expect-error fetchpriority is standard HTML
                    fetchpriority="high"
                  />
                ) : (
                  <img
                    key="interior"
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                    alt="Bespoke luxury living room and interior design in Bengaluru"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                )}

                {/* Subtle bottom gradient on image for badge legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Brand Badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-serif font-bold text-xs text-[#0B1B3D]">NKR PROPERTIES</span>
                      <span className="font-serif font-bold text-xs text-[#C69A27]">&amp; INTERIORS</span>
                    </div>
                    <p className="font-script text-[11px] text-[#C69A27] font-semibold mt-0.5">
                      "{BUSINESS_INFO.tagline}"
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0B1B3D] block">
                      Sarjapura, Bengaluru
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs font-bold text-[#C69A27] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pb-1 select-none">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex flex-col items-center gap-1 text-xs text-[#536279] hover:text-[#0B1B3D] transition-colors group"
          aria-label="Scroll to About Section"
        >
          <span className="tracking-widest uppercase text-[10px] font-semibold">Explore NKR</span>
          <div className="w-5 h-8 rounded-full border border-[#D0DCEB] flex items-start justify-center p-1 group-hover:border-[#C69A27] bg-white shadow-2xs">
            <span className="w-1 h-2 rounded-full bg-[#C69A27] animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
