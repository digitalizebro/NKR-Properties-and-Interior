import React from 'react';
import { PhoneCall, MessageCircle, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Process: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Connect',
      icon: PhoneCall,
      description: 'Tell us about your property requirement or interior ideas via phone (8905 97 8905) or WhatsApp.',
    },
    {
      step: '02',
      title: 'Discuss',
      icon: MessageCircle,
      description: 'Share your preferred location, budget, architectural scope, and expectations so we can align on verified options.',
    },
    {
      step: '03',
      title: 'Plan',
      icon: FileSpreadsheet,
      description: 'Review shortlisted properties, evaluate construction blueprints or interior designs, and establish clear timelines.',
    },
    {
      step: '04',
      title: 'Proceed',
      icon: CheckCircle2,
      description: 'Move forward smoothly with verified documentation, transparent terms, and dedicated ongoing coordination.',
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F2F6FC] relative border-t border-[#D0DCEB]" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B1B3D]/15">
            <span>Workflow & Collaboration</span>
          </div>

          <p className="font-script text-xl text-[#C69A27] font-medium mb-1">
            "{BUSINESS_INFO.tagline}"
          </p>

          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
            How We Work With You.
          </h2>

          <p className="mt-4 text-[#536279] text-base sm:text-lg leading-relaxed">
            A transparent four-step process built to ensure clarity, efficiency, and personal dedication from initial discovery through execution.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-[#D0DCEB] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl p-7 border border-[#D0DCEB] hover:border-[#C69A27]/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-[#C69A27] flex items-center justify-center font-mono text-sm font-bold shadow-sm group-hover:scale-105 transition-transform border border-[#C69A27]/30">
                        {item.step}
                      </div>

                      <div className="w-9 h-9 rounded-xl bg-[#F8F9FB] text-[#0B1B3D] flex items-center justify-center border border-[#D0DCEB]">
                        <IconComp className="w-4 h-4 text-[#C69A27]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#151C28] group-hover:text-[#0B1B3D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#536279] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Stage footnote */}
                  <div className="mt-6 pt-4 border-t border-[#EEF2F6] flex items-center justify-between text-[11px] text-[#536279]">
                    <span className="uppercase tracking-wider font-bold text-[#C69A27]">
                      Stage {index + 1} of 4
                    </span>
                    <span>Client Focused</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
export default Process;
