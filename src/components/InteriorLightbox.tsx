import React, { useEffect } from 'react';
import { X, MessageSquare, Sparkles, Check } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';
import { createWhatsAppUrl } from '../data/business';

interface InteriorLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const InteriorLightbox: React.FC<InteriorLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleInquireStyle = () => {
    const msg = `Hello NKR Properties & Interiors, I am interested in the "${item.title}" (${item.categoryLabel}) interior concept shown on your website. Could we discuss interior design execution for my home in Bengaluru?`;
    window.open(createWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Light dismiss Backdrop */}
      <div
        className="fixed inset-0 bg-[#061024]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div className="relative w-full max-w-4xl bg-[#F8F9FB] rounded-3xl overflow-hidden shadow-2xl border border-[#D0DCEB] z-10 flex flex-col md:flex-row max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A27]"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Preview Container */}
        <div className="md:w-3/5 bg-black/10 relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-full">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover max-h-[480px] md:max-h-[640px]"
          />
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#0B1B3D]/80 backdrop-blur-md text-[10px] text-[#DFB13C] uppercase tracking-wider font-bold border border-[#C69A27]/40">
            Interior Design Concept
          </div>
        </div>

        {/* Details & Action Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B1B3D]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A27]" />
              <span>{item.categoryLabel}</span>
            </div>

            <h3 id="lightbox-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#151C28]">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-[#536279] leading-relaxed">
              {item.description}
            </p>

            {/* Design Highlights */}
            <div className="mt-6 pt-5 border-t border-[#D0DCEB]">
              <p className="text-xs uppercase font-bold tracking-wider text-[#C69A27] mb-3">
                Key Design Attributes
              </p>
              <div className="space-y-2">
                {item.designHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#151C28]">
                    <Check className="w-3.5 h-3.5 text-[#0B1B3D] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-5 border-t border-[#D0DCEB]">
            <button
              onClick={handleInquireStyle}
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#0B1B3D] text-white hover:bg-[#061024] transition-all font-bold text-xs tracking-wider uppercase shadow-md active:scale-[0.98] border border-[#C69A27]/40"
            >
              <MessageSquare className="w-4 h-4 text-[#C69A27]" />
              <span>Enquire About This Concept</span>
            </button>
            <p className="text-[11px] text-[#536279] text-center mt-2">
              Connect directly with NKR interior consultants via WhatsApp
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
export default InteriorLightbox;
