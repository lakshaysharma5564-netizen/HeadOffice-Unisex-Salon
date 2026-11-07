/**
 * Service catalogue for HeadOffice Unisex Salon.
 * Contains verified initial directory-reported offerings organized into
 * Hair, Skin & Beauty, and Grooming & Wellness.
 */

export type ServiceCategory = 'hair' | 'beauty' | 'grooming';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  shortDescription: string;
  detailedDescription?: string;
  referencePriceText?: string; // Displayed ONLY when pricingConfirmed is true
  image: string;
  alt: string;
  suggestedDuration?: string;
}

export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Offerings' },
  { id: 'hair', name: 'Hair Services' },
  { id: 'beauty', name: 'Skin & Beauty' },
  { id: 'grooming', name: 'Grooming & Wellness' },
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  // --- HAIR SERVICES ---
  {
    id: 'haircut',
    name: 'Haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    shortDescription: 'Tailored precision cuts customized for hair texture, face contour, and personal styling preferences.',
    detailedDescription: 'Consultative cut designed to enhance your natural hair profile. Includes bespoke sectioning and clean finish.',
    referencePriceText: "Men's: ₹400–₹600 · Women's: Starting at ₹600",
    image: '/images/service-haircut.jpg',
    alt: 'Hairstylist performing precision haircut in salon setting',
    suggestedDuration: '45–60 mins',
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'hair',
    categoryName: 'Hair Services',
    shortDescription: 'Blow-drys, structured event finishes, volume sculpting, and contemporary everyday styling.',
    detailedDescription: 'Professional blowouts, heat sculpting, and textured setting for special occasions or signature routine looks.',
    image: '/images/service-haircut.jpg',
    alt: 'Hair styling and blow-dry session in salon',
    suggestedDuration: '30–45 mins',
  },
  {
    id: 'global-hair-colour',
    name: 'Global Hair Colour',
    category: 'hair',
    categoryName: 'Hair Services',
    shortDescription: 'Uniform dimensional colour coverage, root touch-ups, and rich tonal transformations.',
    detailedDescription: 'Full coverage colour application customized to your desired tone, ensuring vibrant shine and healthy hair condition.',
    referencePriceText: '₹1,000–₹5,000 (varies by length and technique)',
    image: '/images/service-color.jpg',
    alt: 'Global hair colouring and styling session',
    suggestedDuration: '90–150 mins',
  },
  {
    id: 'cysteine-hair-treatment',
    name: 'Cysteine Hair Treatment',
    category: 'hair',
    categoryName: 'Hair Services',
    shortDescription: 'Formaldehyde-free protein smoothing treatment that reduces frizz and restores hair softness.',
    detailedDescription: 'Advanced hair restructuring treatment that seals moisture into dry or chemically treated hair.',
    image: '/images/service-color.jpg',
    alt: 'Cysteine smoothing hair treatment session',
    suggestedDuration: '120–180 mins',
  },
  {
    id: 'hair-straightening',
    name: 'Hair Straightening',
    category: 'hair',
    categoryName: 'Hair Services',
    shortDescription: 'Permanent or semi-permanent thermal smoothing for sleek, manageable, and pin-straight hair.',
    detailedDescription: 'Intensive thermal smoothing formula leaving hair exceptionally sleek, glossy, and disciplined.',
    referencePriceText: '₹5,000 onwards (based on hair length)',
    image: '/images/service-color.jpg',
    alt: 'Thermal hair straightening treatment in salon',
    suggestedDuration: '180–240 mins',
  },

  // --- SKIN & BEAUTY ---
  {
    id: 'facial',
    name: 'Facial',
    category: 'beauty',
    categoryName: 'Skin & Beauty',
    shortDescription: 'Deep pore cleansing, gentle exfoliation, and hydration masks tailored to individual skin types.',
    detailedDescription: 'Cleansing ritual that unclogs pores, balances moisture levels, and revitalizes tired skin.',
    image: '/images/service-facial.jpg',
    alt: 'Skincare facial treatment in quiet spa room',
    suggestedDuration: '60 mins',
  },
  {
    id: 'fruit-facial',
    name: 'Fruit Facial',
    category: 'beauty',
    categoryName: 'Skin & Beauty',
    shortDescription: 'Antioxidant-rich natural fruit enzyme formulations designed for radiant, glowing skin rejuvenation.',
    detailedDescription: 'Infused with natural botanical vitamins and fruit extracts to refresh and illuminate dull skin.',
    image: '/images/service-facial.jpg',
    alt: 'Natural fruit enzyme facial application',
    suggestedDuration: '60 mins',
  },
  {
    id: 'basic-makeup',
    name: 'Basic Makeup',
    category: 'beauty',
    categoryName: 'Skin & Beauty',
    shortDescription: 'Clean, elegant base application, eye accentuation, and polished day or evening occasion makeup.',
    detailedDescription: 'Subtle and sophisticated makeup artistry enhancing your natural features for parties, dinners, or events.',
    image: '/images/service-facial.jpg',
    alt: 'Occasion beauty makeup application',
    suggestedDuration: '45–60 mins',
  },
  {
    id: 'microblading',
    name: 'Microblading',
    category: 'beauty',
    categoryName: 'Skin & Beauty',
    shortDescription: 'Semi-permanent precision brow feathering creating hyper-realistic, fuller, and defined eyebrow arches.',
    detailedDescription: 'Detailed aesthetic brow sculpting technique depositing pigment in delicate natural hair-like strokes.',
    image: '/images/service-facial.jpg',
    alt: 'Eyebrow shaping and microblading aesthetic procedure',
    suggestedDuration: '90–120 mins',
  },

  // --- GROOMING & WELLNESS ---
  {
    id: 'beard-styling',
    name: 'Beard Styling',
    category: 'grooming',
    categoryName: 'Grooming & Wellness',
    shortDescription: 'Precision beard shaping, neckline definition, razor line work, and conditioning oil treatments.',
    detailedDescription: 'Crisp beard trimming, scissor sculpting, and hot towel preparation tailored to facial bone structure.',
    image: '/images/service-grooming.jpg',
    alt: 'Beard styling and razor contouring in barber chair',
    suggestedDuration: '30 mins',
  },
  {
    id: 'body-massage',
    name: 'Body Massage',
    category: 'grooming',
    categoryName: 'Grooming & Wellness',
    shortDescription: 'Therapeutic wellness massage targeted at relieving muscular tension, fatigue, and physical stress.',
    detailedDescription: 'Focused pressure and soothing strokes to alleviate neck, shoulder, and back tension in a peaceful setting.',
    image: '/images/service-grooming.jpg',
    alt: 'Relaxing wellness massage session',
    suggestedDuration: '60 mins',
  },
];
