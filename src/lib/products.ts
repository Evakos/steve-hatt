export interface SizeOption {
  label: string;
  price: number;
}

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  pricePerKg: number;
  weight: string;
  image: string;
  tag: string;
  description: string;
  preparation: string[];
  origin: string;
  sustainability: string;
  storage: string;
  /** Discrete size options with fixed prices, e.g. Small/Medium/Large lobster */
  sizeOptions?: SizeOption[];
  /** "per-kg" | "per-piece" | "fixed" — controls the selector shown on the product page */
  priceType?: "per-kg" | "per-piece" | "fixed";
  /** Seasons/events this product is featured for, e.g. ["christmas"] */
  featuredFor?: string[];
  /** Optional date string for when pre-orders will be fulfilled/delivered */
  preOrderDelivery?: string;
};

export const products: Product[] = [
  {
    slug: "whole-salmon",
    name: "Salmon Whole",
    category: "Fresh Fish",
    price: "From £45.00",
    pricePerKg: 0,
    priceType: "fixed",
    weight: "Small 2-3kg · Medium 3-4kg · Large 4-5kg",
    sizeOptions: [
      { label: "Small (2-3kg)", price: 45 },
      { label: "Medium (3-4kg)", price: 65 },
      { label: "Large (4-5kg)", price: 125 },
    ],
    image: "/fish/salmon.jpg",
    tag: "Fresh Today",
    description: "Wild Atlantic salmon, whole and ungutted. Perfect for roasting whole, or we can fillet and portion it for you. Rich, buttery flesh with a clean ocean flavour.",
    preparation: ["Scaled & Cleaned", "Cleaned Only", "Filleted (skin removed)"],
    origin: "Scottish Highlands",
    sustainability: "Marine Stewardship Council certified. Line-caught from managed stocks.",
    storage: "Keep refrigerated at 0-4°C. Best consumed within 2 days of purchase.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "gillardeau-oysters",
    name: "Oysters | Gillardeau",
    category: "Shellfish",
    price: "£3.00 each",
    pricePerKg: 0,
    priceType: "per-piece",
    weight: "Per oyster",
    image: "/fish/gillardeau-oysters.jpg",
    tag: "Premium",
    description: "The Rolls Royce of oysters. Gillardeau are raised for 4 years in the Marennes-Oleron basin, giving them a uniquely firm texture and complex, nutty flavour with a clean mineral finish.",
    preparation: ["Opened (ready to eat)", "Unopened"],
    origin: "Marennes-Oleron, France",
    sustainability: "Farmed sustainably in traditional claires. Zero environmental impact.",
    storage: "Keep flat in the fridge, cup-side down. Best within 5 days.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "smoked-salmon-gold-board",
    name: "Smoked Salmon Gold Board",
    category: "Smoked Fish",
    price: "£44.90",
    pricePerKg: 0,
    priceType: "fixed",
    weight: "Whole board",
    image: "/fish/smoked-salmon-gold-board.jpg",
    tag: "Best Seller",
    description: "Our signature smoked salmon, hand-sliced and presented on a gold board. Cold-smoked over oak chips for 24 hours. Silky texture, delicate smoke, perfect for entertaining.",
    preparation: ["Sliced (ready to eat)"],
    origin: "Scotland",
    sustainability: "Sourced from RSPCA Assured farms with strict welfare standards.",
    storage: "Keep refrigerated. Consume within 3 days of opening.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "cooked-lobster",
    name: "Lobster Cooked",
    category: "Shellfish",
    price: "From £35.00",
    pricePerKg: 0,
    priceType: "fixed",
    weight: "Small 600g · Medium 750g · Large 1kg",
    sizeOptions: [
      { label: "Small (600g)", price: 35 },
      { label: "Medium (750g)", price: 45 },
      { label: "Large (1kg)", price: 65 },
    ],
    image: "/fish/lobster-cooked.jpg",
    tag: "Popular",
    description: "Freshly cooked native lobster, boiled to perfection and ready to crack. Sweet, succulent meat with a firm bite. The centrepiece of any seafood spread.",
    preparation: ["Whole cooked", "Split and cleaned"],
    origin: "British coast",
    sustainability: "Pot-caught from sustainable fisheries. Minimum landing size enforced.",
    storage: "Keep refrigerated. Best consumed on day of purchase.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "live-lobster",
    name: "Lobster Live",
    category: "Shellfish",
    price: "From £30.00",
    pricePerKg: 0,
    priceType: "fixed",
    weight: "Small 600g · Medium 750g · Large 1kg",
    sizeOptions: [
      { label: "Small (600g)", price: 30 },
      { label: "Medium (750g)", price: 45 },
      { label: "Large (1kg)", price: 60 },
    ],
    image: "/fish/lobster-live.jpg",
    tag: "Seasonal",
    description: "Live native lobster, kept in our saltwater tanks until the moment you order. For the ultimate freshness, cook at home within hours of collection.",
    preparation: ["Live (whole)"],
    origin: "British coast",
    sustainability: "Pot-caught from sustainable fisheries. Minimum landing size enforced.",
    storage: "Cook within 24 hours of collection. Keep cool and damp.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "ostra-regal-oysters",
    name: "Oysters | French Ostra Regal",
    category: "Shellfish",
    price: "£2.75 each",
    pricePerKg: 0,
    priceType: "per-piece",
    weight: "Per oyster",
    image: "/fish/ostra-oysters.jpg",
    tag: "Fresh Today",
    description: "French Ostra Regal oysters with a plump, creamy texture and a sweet, briny finish. Excellent value and consistently superb quality.",
    preparation: ["Opened (ready to eat)", "Unopened"],
    origin: "Normandy, France",
    sustainability: "Farmed in traditional beds. Oyster farming actively improves water quality.",
    storage: "Keep flat in the fridge, cup-side down. Best within 5 days.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
  {
    slug: "hot-smoked-salmon",
    name: "Salmon | Hot Smoked (Chunks)",
    category: "Smoked Fish",
    price: "£35.90/kg",
    pricePerKg: 35.9,
    priceType: "per-kg",
    weight: "Approx. 200-300g per piece",
    image: "/hot-smoked-salmon.jpg",
    tag: "Popular",
    description: "Flaky, hot-smoked salmon chunks with a deep smoky flavour. Perfect for salads, pasta, or straight from the pack. A Steve Hatt staple.",
    preparation: ["Ready to eat"],
    origin: "Scotland",
    sustainability: "Sourced from RSPCA Assured farms.",
    storage: "Keep refrigerated. Consume within 3 days of opening.",
    featuredFor: ["christmas"],
    preOrderDelivery: "Delivered 23rd-24th December",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Get products featured for a specific season/event */
export function getFeaturedProducts(feature: string): Product[] {
  return products.filter((p) => p.featuredFor?.includes(feature));
}
