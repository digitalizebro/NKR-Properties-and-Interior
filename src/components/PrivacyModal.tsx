import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061024]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#F8F9FB] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D0DCEB] z-10 max-h-[85vh] overflow-y-auto text-left">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D0DCEB]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C69A27]" />
            <h3 id="privacy-modal-title" className="font-serif text-2xl font-bold text-[#0B1B3D]">
              Privacy & Communication Policy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#536279] hover:text-[#0B1B3D] hover:bg-[#EEF2F6] transition-colors"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#536279] leading-relaxed">
          <p>
            This policy outlines how <strong>{BUSINESS_INFO.name}</strong>, located at {BUSINESS_INFO.location.fullAddress}, handles contact information collected through this website and direct messaging channels under our commitment <em>"{BUSINESS_INFO.tagline}"</em>.
          </p>

          <h4 className="font-serif text-base font-bold text-[#151C28] pt-2">
            1. Information Collection
          </h4>
          <p>
            When you reach out via our contact forms, phone calls, or WhatsApp, we collect only the details you voluntarily provide (such as your name, telephone number, property preferences, and project requirements) to assist you with your inquiry.
          </p>

          <h4 className="font-serif text-base font-bold text-[#151C28] pt-2">
            2. Purpose of Use
          </h4>
          <p>
            Your information is used solely for the purpose of communicating regarding property construction, buying, selling, renting, management, or home interior services. We do not sell, rent, or distribute your personal details to third-party marketing firms.
          </p>

          <h4 className="font-serif text-base font-bold text-[#151C28] pt-2">
            3. Direct Communication
          </h4>
          <p>
            Our website facilitates direct, encrypted communication through WhatsApp ({BUSINESS_INFO.phone}) or direct phone calls to ensure clear, transparent dialogue without intermediary processing.
          </p>

          <h4 className="font-serif text-base font-bold text-[#151C28] pt-2">
            4. Contact
          </h4>
          <p>
            If you have questions regarding your data or wish to request removal of your contact information from our records, please reach out directly at {BUSINESS_INFO.phone}.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D0DCEB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0B1B3D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#061024] transition-colors border border-[#C69A27]/40"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default PrivacyModal;
