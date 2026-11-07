/**
 * Central verified business configuration for HeadOffice Unisex Salon.
 * Single source of truth for contact details, operational hours, location,
 * WhatsApp integration switch, and pricing verification state.
 */

export interface BusinessConfig {
  name: string;
  display: {
    title: string;
    subtitle: string;
  };
  category: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  phones: {
    primary: {
      display: string;
      tel: string;
      rawDigits: string;
    };
    landline: {
      display: string;
      tel: string;
    };
  };
  hours: {
    schedule: string;
    days: string;
    time: string;
    opens: string;
    closes: string;
  };
  maps: {
    url: string;
    embedQuery: string;
    latitude: number;
    longitude: number;
  };
  ratingReference: {
    score: number;
    scale: number;
    count: number;
    note: string;
    isLive: boolean; // Must remain false as per verification policy
  };
  whatsapp: {
    enabled: boolean;
    number: string;
    defaultMessage: string;
  };
  onlinePresence: {
    domainPlaceholder: string;
    businessEmail: string | null; // Never invent email
    instagram: string | null;      // Verified only
    facebook: string | null;       // Verified only
  };
  pricingConfirmed: boolean; // When false: shows "Contact for Pricing"
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "HeadOffice Unisex Salon",
  display: {
    title: "HEAD OFFICE",
    subtitle: "UNISEX SALON",
  },
  category: "Unisex Hair & Beauty Salon",
  address: {
    line1: "Building No. 5, First Floor",
    line2: "Club Road",
    area: "Punjabi Bagh",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110026",
    country: "India",
    fullFormatted: "Building No. 5, First Floor, Club Road, Punjabi Bagh, New Delhi, Delhi 110026, India",
  },
  phones: {
    primary: {
      display: "+91 99712 20786",
      tel: "tel:+919971220786",
      rawDigits: "919971220786",
    },
    landline: {
      display: "+91 11 4507 2600",
      tel: "tel:+911145072600",
    },
  },
  hours: {
    schedule: "Monday to Sunday: 10:00 AM – 8:00 PM",
    days: "Monday – Sunday",
    time: "10:00 AM – 8:00 PM",
    opens: "10:00",
    closes: "20:00",
  },
  maps: {
    url: "https://maps.app.goo.gl/L4BSZoC9XYr3pduTA",
    embedQuery: "HeadOffice+Unisex+Salon+Building+No+5+Club+Road+Punjabi+Bagh+New+Delhi",
    latitude: 28.6657,
    longitude: 77.1264,
  },
  ratingReference: {
    score: 4.2,
    scale: 5,
    count: 92,
    note: "Google Directory reference rating. Stored for attribution reference; reviews link directly to verified Google profile.",
    isLive: false,
  },
  whatsapp: {
    // Configurable state. Activated if owner confirms WhatsApp capability.
    enabled: true,
    number: "919971220786",
    defaultMessage: "Hello HeadOffice Unisex Salon, I would like to enquire about an appointment. Please share available timings and service details.",
  },
  onlinePresence: {
    domainPlaceholder: "https://headofficeunisexsalon.in",
    businessEmail: null,
    instagram: null,
    facebook: null,
  },
  // Pricing verification flag:
  // When false: Displays "Contact for Pricing"
  // When true: Displays verified directory-reported pricing amounts
  pricingConfirmed: false,
};

/**
 * Generates an enquiry WhatsApp URL with prefilled text and appointment details
 */
export function buildWhatsAppLink(details?: {
  service?: string;
  name?: string;
  date?: string;
  time?: string;
  notes?: string;
}): string {
  const baseNum = BUSINESS_CONFIG.whatsapp.number;
  if (!details || (!details.service && !details.name)) {
    return `https://wa.me/${baseNum}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsapp.defaultMessage)}`;
  }

  const message = [
    `Hello HeadOffice Unisex Salon,`,
    `I would like to enquire about an appointment at your Punjabi Bagh salon:`,
    details.name ? `• Name: ${details.name}` : null,
    details.service ? `• Service: ${details.service}` : null,
    details.date ? `• Preferred Date: ${details.date}` : null,
    details.time ? `• Preferred Time: ${details.time}` : null,
    details.notes ? `• Preferences/Notes: ${details.notes}` : null,
    ``,
    `Please let me know your availability and confirmation. Thank you!`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${baseNum}?text=${encodeURIComponent(message)}`;
}
