import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, createCustomInquiryWhatsAppUrl, createWhatsAppUrl } from '../data/business';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [service, setService] = useState<string>('Buy Properties');
  const [preferredContact, setPreferredContact] = useState<string>('WhatsApp');
  const [description, setDescription] = useState<string>('');
  
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit Indian phone number (e.g. 89059 78905).');
      return;
    }

    setSubmitted(true);

    const waUrl = createCustomInquiryWhatsAppUrl({
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      service,
      preferredContact,
      description: description.trim(),
    });

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F9FB] relative border-t border-[#D0DCEB]" aria-label="Contact NKR Properties & Interiors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B1B3D]/15">
            <span>Direct Inquiries</span>
          </div>

          <p className="font-script text-xl text-[#C69A27] font-medium mb-1">
            "{BUSINESS_INFO.tagline}"
          </p>

          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
            Let's Talk About Your Next Move.
          </h2>

          <p className="mt-4 text-[#536279] text-base sm:text-lg leading-relaxed">
            Whether you're exploring a property, planning construction, renting, or imagining a new interior, connect with our Sarjapura team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Business Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D0DCEB] shadow-xl">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-bold text-[#0B1B3D]">NKR PROPERTIES</span>
                <span className="font-serif text-3xl font-bold text-[#C69A27]">& INTERIORS</span>
              </div>
              <p className="font-script text-sm text-[#C69A27] font-semibold mt-1">
                {BUSINESS_INFO.tagline}
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-[#0B1B3D] text-white text-[10px] font-bold uppercase tracking-widest mt-3 mb-8">
                Property Consultant
              </div>

              <div className="space-y-6">
                
                {/* Phone / Call */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center shrink-0 border border-[#0B1B3D]/10">
                    <Phone className="w-5 h-5 text-[#C69A27]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#536279]">
                      Direct Contact
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-serif text-2xl font-bold text-[#0B1B3D] hover:text-[#C69A27] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-[#536279] mt-0.5">
                      Direct line for property & interior consultations
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center shrink-0 border border-[#0B1B3D]/10">
                    <MessageSquare className="w-5 h-5 text-[#C69A27]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#536279]">
                      WhatsApp Direct
                    </p>
                    <a
                      href={createWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl font-bold text-[#0B1B3D] hover:text-[#C69A27] transition-colors mt-0.5 block"
                    >
                      +91 89059 78905
                    </a>
                    <p className="text-xs text-[#536279] mt-0.5">
                      Fastest response for project scope and site visits
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D]/10 text-[#0B1B3D] flex items-center justify-center shrink-0 border border-[#0B1B3D]/10">
                    <MapPin className="w-5 h-5 text-[#C69A27]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#536279]">
                      Location
                    </p>
                    <p className="font-serif text-lg font-bold text-[#151C28] mt-0.5">
                      {BUSINESS_INFO.location.fullAddress}
                    </p>
                    <a
                      href={BUSINESS_INFO.location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B3D] hover:text-[#C69A27] transition-colors mt-2"
                    >
                      <span>Open Sarjapura in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="mt-8 pt-8 border-t border-[#D0DCEB] flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#D0DCEB] hover:bg-[#F8F9FB] text-[#0B1B3D] text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C69A27]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1B3D] hover:bg-[#061024] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors border border-[#C69A27]/40"
                >
                  <MessageSquare className="w-4 h-4 text-[#C69A27]" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Reassurance note */}
            <div className="mt-6 p-4 rounded-2xl bg-[#E8EEF7]/60 border border-[#D0DCEB] text-xs text-[#536279]">
              <span className="font-bold text-[#0B1B3D]">Your Property, Our Priority:</span> All consultations are managed with direct confidentiality by our Sarjapura team.
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D0DCEB] shadow-xl text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B3D]">
                Send an Enquiry
              </h3>
              <p className="text-sm text-[#536279] mt-1.5">
                Fill in the details below to connect directly via WhatsApp with your prefilled requirements.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#151C28] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#D0DCEB] text-sm text-[#151C28] focus:outline-none focus:border-[#0B1B3D] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#151C28] mb-2">
                    Phone / WhatsApp Number (10 digits) *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-[#D0DCEB] bg-[#E8EEF7] text-xs font-bold text-[#0B1B3D]">
                      +91
                    </span>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="89059 78905"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-r-xl bg-[#F8F9FB] border border-[#D0DCEB] text-sm text-[#151C28] focus:outline-none focus:border-[#0B1B3D] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection matching poster */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-[#151C28] mb-2">
                    Service Required *
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#D0DCEB] text-sm text-[#151C28] focus:outline-none focus:border-[#0B1B3D] transition-colors"
                  >
                    <option value="Buy Properties">Buy Properties in Sarjapura / Bengaluru</option>
                    <option value="Sell Properties">Sell Properties in Bengaluru</option>
                    <option value="Rent Properties">Rent Properties (Tenant or Owner)</option>
                    <option value="Construct Properties">Construct Properties (Civil Construction)</option>
                    <option value="Manage Properties">Manage Properties (Ongoing Oversight)</option>
                    <option value="Home Interiors">Home Interiors (Turnkey Modular & Interior Design)</option>
                    <option value="Multiple Services">Multiple Services / Turnkey Project</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-semibold text-[#151C28] mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPreferredContact('WhatsApp')}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                        preferredContact === 'WhatsApp'
                          ? 'bg-[#0B1B3D] text-white border-[#0B1B3D] shadow-sm'
                          : 'bg-[#F8F9FB] text-[#536279] border-[#D0DCEB] hover:bg-white'
                      }`}
                    >
                      WhatsApp Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredContact('Phone Call')}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                        preferredContact === 'Phone Call'
                          ? 'bg-[#0B1B3D] text-white border-[#0B1B3D] shadow-sm'
                          : 'bg-[#F8F9FB] text-[#536279] border-[#D0DCEB] hover:bg-white'
                      }`}
                    >
                      Phone Call
                    </button>
                  </div>
                </div>

                {/* Requirement Description */}
                <div>
                  <label htmlFor="contact-desc" className="block text-xs font-semibold text-[#151C28] mb-2">
                    Brief Description of Requirements (Optional)
                  </label>
                  <textarea
                    id="contact-desc"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about your property location, budget, design style, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-[#D0DCEB] text-sm text-[#151C28] focus:outline-none focus:border-[#0B1B3D] transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B1B3D] hover:bg-[#061024] text-white transition-all font-bold text-xs tracking-wider uppercase shadow-lg active:scale-[0.99] group border border-[#C69A27]/40"
                >
                  <Send className="w-4 h-4 text-[#C69A27] transition-transform group-hover:translate-x-1" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#536279] text-center">
                  * Opens WhatsApp with your structured enquiry to connect directly with the NKR team.
                </p>

                {submitted && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 text-blue-900 text-xs border border-blue-200">
                    <Check className="w-4 h-4 text-[#0B1B3D] shrink-0" />
                    <span>Connecting you with NKR Properties & Interiors on WhatsApp...</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ContactSection;
