export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  roleTitle: string;
  phone: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsAppNumber: string;
  location: {
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    mapsUrl: string;
  };
  description: string;
  pillars: string[];
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "NKR Properties & Interiors",
  shortName: "NKR",
  tagline: "Your Property, Our Priority",
  roleTitle: "Property Consultant",
  phone: "8905 97 8905",
  phoneDisplay: "+91 89059 78905",
  phoneRaw: "+918905978905",
  whatsAppNumber: "918905978905",
  location: {
    area: "Sarjapura",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "562125",
    country: "India",
    fullAddress: "Sarjapura, Bengaluru, Karnataka 562125, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sarjapura+Bengaluru+Karnataka+562125",
  },
  description:
    "NKR Properties & Interiors provides comprehensive property consulting, construction, buying, selling, rental services, property management, and bespoke home interior solutions in Sarjapura, Bengaluru.",
  pillars: [
    "Construct Properties",
    "Sell Properties",
    "Buy Properties",
    "Rent Properties",
    "Manage Properties",
    "Home Interiors",
  ],
};

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello NKR Properties & Interiors, I would like to enquire about your services in Bengaluru. Could you please assist me?";

export function createWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_INFO.whatsAppNumber}?text=${encoded}`;
}

export function createServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello NKR Properties & Interiors, I would like to enquire about "${serviceTitle}" in/near Sarjapura, Bengaluru. Could you please assist me?`;
  return createWhatsAppUrl(message);
}

export function createPropertyInquiryWhatsAppUrl(propertyTitle: string, propertyType: string): string {
  const message = `Hello NKR Properties & Interiors, I am interested in inquiring about "${propertyTitle}" (${propertyType}) in Bengaluru. Could you please provide more details?`;
  return createWhatsAppUrl(message);
}

export function createCustomInquiryWhatsAppUrl(data: {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredContact: string;
  description: string;
}): string {
  const lines = [
    `*New Property & Interior Enquiry — NKR Properties & Interiors*`,
    `Tagline: Your Property, Our Priority`,
    `Name: ${data.fullName}`,
    `Phone: ${data.phoneNumber}`,
    `Service Required: ${data.service}`,
    `Preferred Contact: ${data.preferredContact}`,
    `Requirements / Message: ${data.description || "N/A"}`,
  ];
  return createWhatsAppUrl(lines.join("\n"));
}
