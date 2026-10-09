import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';
import { SERVICES_DATA } from '../data/services';
import { PrivacyModal } from './PrivacyModal';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061024] text-[#E8EEF7] pt-20 pb-12 border-t border-[#0B1B3D] relative overflow-hidden" aria-label="Website Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 text-left">
          
          {/* Brand & Description (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0B1B3D] border border-[#C69A27]/50 flex items-center justify-center">
                  <div className="flex items-baseline font-serif font-black text-xl">
                    <span className="text-white">NK</span>
                    <span className="text-[#C69A27] ml-0.5">R</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 leading-none">
                    <h3 className="font-serif text-xl font-bold text-white tracking-wider">
                      PROPERTIES
                    </h3>
                    <span className="font-serif text-xl font-bold text-[#C69A27]">
                      & INTERIORS
                    </span>
                  </div>
                  <p className="font-script text-xs text-[#C69A27] font-semibold mt-1">
                    {BUSINESS_INFO.tagline}
                  </p>
                </div>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#C69A27] text-[10px] font-bold uppercase tracking-wider mt-4">
                Property Consultant • Sarjapura
              </div>

              <p className="mt-4 text-sm text-[#E8EEF7]/80 leading-relaxed max-w-sm">
                {BUSINESS_INFO.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-[#C69A27] font-bold">
                Direct Line
              </p>
              <div className="mt-2 space-y-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-lg font-bold text-white hover:text-[#C69A27] transition-colors block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#E8EEF7]/60">
                  {BUSINESS_INFO.location.fullAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Core Services (Col 6-8) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="text-[#E8EEF7]/80 hover:text-white transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C69A27] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Navigation (Col 9-12) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Business Hub
            </h4>
            <div className="space-y-4 text-xs text-[#E8EEF7]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69A27] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Sarjapura Location</p>
                  <p className="mt-0.5">{BUSINESS_INFO.location.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C69A27] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Direct Call & WhatsApp</p>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors mt-0.5 block font-bold text-sm text-[#C69A27]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#122858] border border-[#C69A27]/40 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C69A27]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EEF7]/60">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved. • <span className="text-[#C69A27] italic">"{BUSINESS_INFO.tagline}"</span>
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-[#C69A27] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <span>Sarjapura, Bengaluru, Karnataka</span>
          </div>
        </div>

      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
};
export default Footer;
