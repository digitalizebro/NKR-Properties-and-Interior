export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  whatsappMessage: string;
  highlights: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construct-properties",
    number: "01",
    title: "Construct Properties",
    description: "Turnkey residential construction planning, civil execution, architectural layout, and premium material finishing tailored to your budget.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
    alt: "Architectural residential construction with clean structural geometry and materials",
    whatsappMessage: "Hello NKR Properties & Interiors, I would like to discuss a construction project in Bengaluru. Could we schedule a consultation?",
    highlights: ["Civil Construction", "Architectural Planning", "Quality Materials & Supervision"],
  },
  {
    id: "sell-properties",
    number: "02",
    title: "Sell Properties",
    description: "End-to-end guidance to market and sell your villa, apartment, or plot in Bengaluru with targeted buyer outreach and clean documentation.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern luxury home exterior for sale consultation",
    whatsappMessage: "Hello NKR Properties & Interiors, I would like to discuss selling my property in Bengaluru. Could you please get in touch with me?",
    highlights: ["Accurate Market Valuation", "Genuine Buyer Outreach", "Smooth Legal & Paperwork"],
  },
  {
    id: "buy-properties",
    number: "03",
    title: "Buy Properties",
    description: "Discover verified independent villas, gated community homes, apartments, and prime plots in Sarjapura matched to your exact criteria.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary luxury residential villa in Sarjapura Bengaluru",
    whatsappMessage: "Hello NKR Properties & Interiors, I am looking to buy a property in/near Sarjapura, Bengaluru. Could you please share suitable options?",
    highlights: ["Verified Inventory", "Sarjapura & Growth Corridors", "Transparent Pricing"],
  },
  {
    id: "rent-properties",
    number: "04",
    title: "Rent Properties",
    description: "Reliable rental assistance for tenants seeking quality homes and property owners seeking responsible, vetted tenants.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    alt: "High-end residential apartment interior with panoramic views",
    whatsappMessage: "Hello NKR Properties & Interiors, I am looking for rental services assistance in Sarjapura, Bengaluru. Could you please help me?",
    highlights: ["Tenant Placement", "Rental Documentation", "Move-In Support"],
  },
  {
    id: "manage-properties",
    number: "05",
    title: "Manage Properties",
    description: "Complete property management including routine inspections, maintenance coordination, tenant relations, and owner reporting.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Maintained luxury residential property courtyard and contemporary architecture",
    whatsappMessage: "Hello NKR Properties & Interiors, I would like to enquire about your property management services in Bengaluru.",
    highlights: ["Periodic Upkeep", "Maintenance Coordination", "Peace of Mind for Owners"],
  },
  {
    id: "home-interiors",
    number: "06",
    title: "Home Interiors",
    description: "Bespoke interior design solutions including modular kitchens, living room wall paneling, false ceilings, and customized wardrobes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm contemporary luxury living room interior with bespoke wood finishes and lighting",
    whatsappMessage: "Hello NKR Properties & Interiors, I would like to explore home interior solutions for my home. Could we discuss ideas and scope?",
    highlights: ["Modular Kitchens & Wardrobes", "Space Optimization", "Turnkey Interior Finishing"],
  },
];
