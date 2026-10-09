import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';

interface NavbarProps {
  onEnquireClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Interiors', href: '#interiors' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleEnquire = () => {
    setIsMobileMenuOpen(false);
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(createWhatsAppUrl(), '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#D0DCEB] py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#D0DCEB]/60 py-3.5 sm:py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo strictly inspired by the Official Poster */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A27] rounded-lg"
              aria-label="NKR Properties & Interiors Homepage"
            >
              {/* Graphic Mark: Navy Blue Roof & Gold Building Crest */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all border shadow-sm bg-[#0B1B3D] border-[#C69A27]/50 group-hover:border-[#C69A27]"
              >
                <div className="flex items-baseline font-serif font-black tracking-tighter text-xl">
                  <span className="text-white">NK</span>
                  <span className="text-[#C69A27] ml-0.5">R</span>
                </div>
              </div>

              {/* Logo Typography Matching Poster */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-serif text-lg font-bold tracking-wider text-[#0B1B3D]">
                    PROPERTIES
                  </span>
                  <span className="font-serif text-lg font-bold text-[#C69A27]">
                    & INTERIORS
                  </span>
                </div>
                {/* Official Tagline from poster */}
                <span className="font-script text-[11px] text-[#C69A27] tracking-normal mt-0.5 font-medium">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:text-[#C69A27] group text-[#151C28] hover:text-[#0B1B3D]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C69A27] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Desktop CTA & Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs font-bold tracking-wide px-3.5 py-2 rounded-full transition-all border border-[#D0DCEB] text-[#0B1B3D] hover:bg-white bg-white/80 shadow-xs"
                aria-label={`Call NKR at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C69A27]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={handleEnquire}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B1B3D] text-white hover:bg-[#122858] transition-all font-bold text-xs tracking-wider uppercase shadow-md active:scale-95 border border-[#0B1B3D]"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C69A27]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-full border border-[#D0DCEB] text-[#0B1B3D] bg-white shadow-xs"
                aria-label="Call NKR"
              >
                <Phone className="w-4 h-4 text-[#C69A27]" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl border border-[#D0DCEB] text-[#0B1B3D] bg-white shadow-xs focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-[#061024]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#F8F9FB] shadow-2xl p-6 pt-24 flex flex-col justify-between overflow-y-auto border-l border-[#D0DCEB] animate-in slide-in-from-right duration-300">
            <div>
              <div className="pb-5 mb-5 border-b border-[#D0DCEB]">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl font-bold text-[#0B1B3D]">NKR PROPERTIES</span>
                  <span className="font-serif text-xl font-bold text-[#C69A27]">& INTERIORS</span>
                </div>
                <p className="font-script text-xs text-[#C69A27] mt-0.5">
                  {BUSINESS_INFO.tagline}
                </p>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0B1B3D] text-white text-[9.5px] uppercase font-semibold tracking-wider mt-2">
                  Property Consultant
                </div>
                <p className="text-xs text-[#536279] mt-2">
                  Sarjapura, Bengaluru, Karnataka
                </p>
              </div>

              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-medium text-[#151C28] hover:text-[#0B1B3D] py-2 border-b border-[#D0DCEB]/60 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C69A27]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D0DCEB] space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-[#D0DCEB] text-[#0B1B3D] font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C69A27]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-[#0B1B3D] text-white font-bold text-sm shadow-md hover:bg-[#061024]"
              >
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
