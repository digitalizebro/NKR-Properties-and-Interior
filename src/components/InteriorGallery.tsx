import React, { useState, useMemo } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gallery';
import { InteriorLightbox } from './InteriorLightbox';
import { BUSINESS_INFO } from '../data/business';

type CategoryFilter = 'all' | 'living' | 'kitchen' | 'bedroom' | 'dining' | 'bathroom' | 'complete';

export const InteriorGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Spaces' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'dining', label: 'Dining Spaces' },
    { id: 'bathroom', label: 'Bathrooms' },
    { id: 'complete', label: 'Complete Interiors' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="interiors" className="py-24 sm:py-32 bg-[#F8F9FB] relative border-t border-[#D0DCEB]" aria-label="Interior Design Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D]/10 text-[#0B1B3D] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B1B3D]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#C69A27]" />
            <span>Interior Design Gallery</span>
          </div>

          <p className="font-script text-xl text-[#C69A27] font-medium mb-1">
            "{BUSINESS_INFO.tagline}"
          </p>

          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl text-[#151C28] font-normal tracking-tight">
            Spaces Designed Around Living.
          </h2>

          <p className="mt-4 text-[#536279] text-base sm:text-lg leading-relaxed">
            Discover bespoke interior concepts that balance comfort, ergonomic functionality, and contemporary architectural elegance.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#D0DCEB]">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as CategoryFilter)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#0B1B3D] text-white shadow-sm border border-[#C69A27]/40'
                  : 'bg-white text-[#536279] hover:text-[#0B1B3D] border border-[#D0DCEB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-[280px] sm:auto-rows-[340px]">
          {filteredItems.map((item, index) => {
            const isSpan2Col = (index === 0 || index === 5) && activeCategory === 'all';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#D0DCEB] shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isSpan2Col ? 'sm:col-span-2' : ''
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Navy Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061024]/90 via-[#0B1B3D]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#0B1B3D]/80 backdrop-blur-md text-[#DFB13C] text-[10px] font-bold uppercase tracking-wider border border-[#C69A27]/40">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Content Card Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-left transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#E8EEF7]/90 mt-1 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-[#C69A27]">
                    <span className="inline-flex items-center gap-1.5 font-bold tracking-wide">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Concept Details</span>
                    </span>
                    <span className="text-[10px] uppercase text-[#E8EEF7]/70 font-semibold">
                      Custom Execution
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <InteriorLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
export default InteriorGallery;
