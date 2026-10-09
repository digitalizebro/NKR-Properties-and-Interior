import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Friendly Teaser Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#0B1B3D] text-[#E8EEF7] border border-[#C69A27]/50 px-3.5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 max-w-[250px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <p className="text-xs text-[#E8EEF7] leading-tight text-left">
            Need property or interior advice? <span className="text-[#DFB13C] font-bold block">Chat with NKR</span>
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#E8EEF7]/60 hover:text-white p-0.5 rounded-full"
            aria-label="Dismiss WhatsApp Tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 border-2 border-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
        aria-label={`Chat with ${BUSINESS_INFO.name} on WhatsApp at ${BUSINESS_INFO.phone}`}
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C69A27] rounded-full border-2 border-white" />
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>

    </div>
  );
};
export default FloatingWhatsApp;
