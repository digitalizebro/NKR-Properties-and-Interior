export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "living" | "kitchen" | "bedroom" | "dining" | "bathroom" | "complete";
  categoryLabel: string;
  image: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
  description: string;
  designHighlights: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-living-warmth",
    title: "Warm Minimalist Living Pavilion",
    category: "living",
    categoryLabel: "Living Room",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm minimalist living room interior with oak paneling and designer lighting",
    aspect: "wide",
    description: "An inspiring living space uniting natural oak slatting, soft textured bouclé seating, and cove ambient lighting to evoke unhurried calm.",
    designHighlights: ["Acoustic Timber Slatting", "Concealed Warm LED Tracks", "Curated Low-Slung Seating"],
  },
  {
    id: "gal-kitchen-fluted",
    title: "Architectural Marble & Fluted Kitchen",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern luxury modular kitchen with fluted cabinetry and central marble island",
    aspect: "tall",
    description: "A refined culinary kitchen concept showcasing seamless handle-less cabinetry, quartz surfaces, and integrated storage solutions.",
    designHighlights: ["Waterfall Island Counter", "Soft-Close German Hardware", "Anti-Fingerprint Finishes"],
  },
  {
    id: "gal-bedroom-serenity",
    title: "Sanctuary Master Bedroom Suite",
    category: "bedroom",
    categoryLabel: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary master bedroom with custom headboard and organic linen textures",
    aspect: "square",
    description: "Subtle neutral tones, bespoke upholstered backdrops, and balanced ambient lighting create an environment crafted for restful sleep.",
    designHighlights: ["Custom Wall Paneling", "Dual Bedside Reading Pendants", "Concealed Wardrobe Wall"],
  },
  {
    id: "gal-dining-sculptural",
    title: "Sculptural Stone Dining Atelier",
    category: "dining",
    categoryLabel: "Dining Space",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    alt: "Refined dining room with natural stone table and designer pendant chandelier",
    aspect: "tall",
    description: "Centered around a monolithic dining table, this space celebrates convivial gatherings with acoustic warmth and clean geometry.",
    designHighlights: ["Honed Natural Stone Table", "Acoustic Fabric Chairs", "Sculptural Chandelier"],
  },
  {
    id: "gal-bathroom-terrazzo",
    title: "Spa-Inspired Stone Ensuite",
    category: "bathroom",
    categoryLabel: "Luxury Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85",
    alt: "Spa-style luxury bathroom with freestanding bathtub and microcement surfaces",
    aspect: "square",
    description: "Harmonious microcement wall finishes, matt champagne gold fixtures, and indirect niches translate daily rituals into restorative moments.",
    designHighlights: ["Freestanding Oval Tub", "Champagne Gold Tapware", "Fluted Glass Shower Partition"],
  },
  {
    id: "gal-complete-openplan",
    title: "Continuous Open-Plan Residence",
    category: "complete",
    categoryLabel: "Complete Home Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Open plan contemporary residential interior connecting living and dining seamlessly",
    aspect: "wide",
    description: "A cohesive spatial dialogue across public living, dining, and foyer areas using a uniform palette of warm ivory and natural timber.",
    designHighlights: ["Unified Flooring Palette", "Visual Flow Between Zones", "Custom False Ceiling Integration"],
  },
  {
    id: "gal-living-terrace",
    title: "Verdant Terrace-Connected Lounge",
    category: "living",
    categoryLabel: "Living Room",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    alt: "Spacious luxury living room with high ceilings opening to landscaped green patio",
    aspect: "tall",
    description: "Blurring boundaries between indoor luxury and outdoor Bengaluru greenery through expansive sliding glass apertures.",
    designHighlights: ["Floor-to-Ceiling Glazing", "Recessed Track Downlights", "Neutral Earth-Tone Upholstery"],
  },
  {
    id: "gal-kitchen-breakfast",
    title: "Contemporary Breakfast Bar & Pantry",
    category: "kitchen",
    categoryLabel: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern residential kitchen with cantilevered breakfast counter and clean bar stools",
    aspect: "wide",
    description: "Ergonomically planned work triangle complemented by a casual breakfast bar for morning coffee and family conversations.",
    designHighlights: ["Cantilevered Quartz Counter", "Integrated Profile Lighting", "Smart Corner Pullouts"],
  },
];
