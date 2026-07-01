export type Room = {
  id: string;
  name: string;
  beds: string;
  price: number;
  perks: string[];
};

export type Hostel = {
  id: string;
  name: string;
  city: string;
  country: string;
  tagline: string;
  rating: number;
  reviews: number;
  priceFrom: number;
  hero: string;
  gallery: string[];
  about: string;
  amenities: string[];
  rooms: Room[];
  facilities: string[];
  attractions: string[];
  reviewsList: { name: string; initials: string; rating: number; date: string; text: string }[];
};

const bohemianImgs = Object.values(
  import.meta.glob('/public/image/TheBohemian/*', { eager: true, query: '?url', import: 'default' })
) as string[];

const atellierImgs = Object.values(
  import.meta.glob('/public/image/Atellier/*', { eager: true, query: '?url', import: 'default' })
) as string[];

const stellarImgs = Object.values(
  import.meta.glob('/public/image/Stellar/*', { eager: true, query: '?url', import: 'default' })
) as string[];

export const HOSTELS: Hostel[] = [
  {
    id: "bohemian",
    name: "The Bohemian Capsule",
    city: "Chinatown",
    country: "Singapore",
    tagline: "Stylish capsules in the heart of Chinatown.",
    rating: 4.8,
    reviews: 1284,
    priceFrom: 38,
    hero: bohemianImgs[0] ?? "",
    gallery: bohemianImgs,
    about:
      "The Bohemian is a stylish boutique capsule hostel located in the heart of Chinatown, Singapore. Designed for backpackers, solo travelers, and digital nomads, it combines modern capsule accommodations with a vibrant social atmosphere.",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Bar", "Restaurant", "Airport Transfer", "Lockers"],
    rooms: [
      { id: "ss-upper-mixed", name: "Super Single Capsule — Upper", beds: "Mixed Dormitory", price: 38, perks: ["Free Wi-Fi", "Reading light", "Privacy curtain"] },
      { id: "ss-lower-mixed", name: "Super Single Capsule — Lower", beds: "Mixed Dormitory", price: 42, perks: ["Free Wi-Fi", "Easy access", "Privacy curtain"] },
      { id: "ss-upper-fem", name: "Super Single Capsule — Upper", beds: "Female Only", price: 44, perks: ["Female only", "Free Wi-Fi", "Privacy curtain"] },
      { id: "bed-8-fem", name: "Bed in 8-Bed Female Dormitory", beds: "Female Only", price: 32, perks: ["Female only", "Locker", "Shared bath"] },
      { id: "bed-10-mixed", name: "Bed in 10-Bed Mixed Dormitory", beds: "Mixed Dormitory", price: 28, perks: ["Budget", "Locker", "Shared bath"] },
      { id: "private-single", name: "Private Single Room", beds: "Private", price: 78, perks: ["Private room", "Free Wi-Fi", "Daily housekeeping"] },
      { id: "private-double", name: "Private Double Room", beds: "Private", price: 110, perks: ["Sleeps 2", "Private room", "Free Wi-Fi"] },
    ],
    facilities: [
      "Free High-Speed Wi-Fi", "Air Conditioning", "Shared Kitchen", "Shared Lounge", "Restaurant", "Bar",
      "Coffee & Tea Area", "Laundry Service", "Luggage Storage", "Lockers", "Express Check-in & Check-out",
      "Airport Transfer", "Daily Housekeeping", "Shared Bathrooms", "Security Access", "CCTV Surveillance",
    ],
    attractions: [
      "Chinatown MRT Station", "Maxwell MRT Station", "Chinatown Street Market", "Buddha Tooth Relic Temple",
      "Sri Mariamman Temple", "Maxwell Food Centre", "Clarke Quay", "Marina Bay Sands", "Gardens by the Bay", "Merlion Park",
    ],
    reviewsList: [
      { name: "Amelia Tan", initials: "AT", rating: 5, date: "Mar 2026", text: "Beautifully designed capsules and the staff are so welcoming. Loved the bar downstairs." },
      { name: "Ravi Kumar", initials: "RK", rating: 5, date: "Feb 2026", text: "Best location in Chinatown. Walked everywhere. Will stay again." },
      { name: "Sofia Lin", initials: "SL", rating: 4, date: "Jan 2026", text: "Clean, cozy, and well-priced. Capsule felt private and quiet." },
    ],
  },
  {
    id: "atelier",
    name: "Atelier Hostels",
    city: "Chinatown",
    country: "Singapore",
    tagline: "Thoughtfully designed pods and a warm welcome.",
    rating: 4.7,
    reviews: 962,
    priceFrom: 34,
    hero: atellierImgs[0] ?? "",
    gallery: atellierImgs,
    about:
      "Atelier Hostels is a modern boutique capsule hostel situated in Singapore's vibrant Chinatown district. It offers thoughtfully designed sleeping pods, cozy communal spaces, and a welcoming environment for travelers seeking comfort and convenience.",
    amenities: ["Free Wi-Fi", "Breakfast", "Air Conditioning", "Restaurant", "Tour Assistance", "Lockers"],
    rooms: [
      { id: "vault-upper", name: "Vault Super Single — Upper", beds: "Mixed Dormitory", price: 34, perks: ["Free Wi-Fi", "Privacy curtain", "Breakfast included"] },
      { id: "vault-lower", name: "Vault Super Single — Lower", beds: "Mixed Dormitory", price: 38, perks: ["Easy access", "Free Wi-Fi", "Breakfast included"] },
      { id: "mixed-cap", name: "Mixed Capsule Dormitory", beds: "Mixed Dormitory", price: 30, perks: ["Budget", "Locker", "Free Wi-Fi"] },
      { id: "fem-cap", name: "Female Capsule Dormitory", beds: "Female Only", price: 36, perks: ["Female only", "Locker", "Free Wi-Fi"] },
      { id: "bed-6-fem", name: "Bed in 6-Bed Female Dormitory", beds: "Female Only", price: 32, perks: ["Female only", "Shared bath", "Breakfast"] },
      { id: "single-upper", name: "Single Capsule — Upper Level", beds: "Single", price: 40, perks: ["Quiet", "Privacy curtain", "Reading light"] },
    ],
    facilities: [
      "Free Wi-Fi", "Complimentary Breakfast", "Air Conditioning", "Shared Kitchen", "Shared Lounge", "Restaurant",
      "Laundry Service", "Luggage Storage", "Lockers", "Daily Housekeeping", "Express Check-in & Check-out",
      "Tour Assistance", "Security Access", "Shared Bathrooms",
    ],
    attractions: [
      "Chinatown MRT Station", "Maxwell MRT Station", "Chinatown Heritage Centre", "Sri Mariamman Temple",
      "Buddha Tooth Relic Temple", "Maxwell Food Centre", "Clarke Quay", "Merlion Park", "Marina Bay Sands", "Gardens by the Bay",
    ],
    reviewsList: [
      { name: "Hannah Park", initials: "HP", rating: 5, date: "Mar 2026", text: "The breakfast was a lovely surprise. Pods felt brand new." },
      { name: "Diego Alvarez", initials: "DA", rating: 5, date: "Feb 2026", text: "Friendly hosts helped plan my whole Singapore trip. Highly recommend." },
      { name: "Mei Chen", initials: "MC", rating: 4, date: "Dec 2025", text: "Quiet, clean and very central. Great value." },
    ],
  },
  {
    id: "stellar",
    name: "Stellar Capsules",
    city: "Seminyak",
    country: "Bali, Indonesia",
    tagline: "Capsules, pool, and Seminyak's best beaches.",
    rating: 4.9,
    reviews: 1543,
    priceFrom: 26,
    hero: stellarImgs[0] ?? "",
    gallery: stellarImgs,
    about:
      "Stellar Capsules is a contemporary capsule hostel located in Seminyak, Bali. Designed for backpackers, surfers, and digital nomads, the hostel blends modern capsule accommodations with relaxing communal spaces.",
    amenities: ["Pool", "Free Wi-Fi", "Bar", "Coffee Shop", "Airport Transfer", "Free Parking"],
    rooms: [
      { id: "ss-private", name: "Super Single Capsule — Private Room", beds: "Private", price: 58, perks: ["Private", "Free Wi-Fi", "Pool access"] },
      { id: "ss-upper", name: "Super Single Capsule — Upper", beds: "Mixed Dormitory", price: 26, perks: ["Free Wi-Fi", "Locker", "Pool access"] },
      { id: "ss-lower", name: "Super Single Capsule — Lower", beds: "Mixed Dormitory", price: 30, perks: ["Easy access", "Locker", "Pool access"] },
      { id: "mixed-upper", name: "Mixed Dormitory Capsule — Upper", beds: "Mixed Dormitory", price: 24, perks: ["Budget", "Pool access", "Locker"] },
      { id: "fem-upper", name: "Female Capsule — Upper", beds: "Female Only", price: 28, perks: ["Female only", "Pool access", "Free Wi-Fi"] },
      { id: "fem-lower", name: "Female Capsule — Lower", beds: "Female Only", price: 32, perks: ["Female only", "Easy access", "Pool access"] },
      { id: "bed-4", name: "Bed in 4-Bed Dormitory", beds: "Mixed Dormitory", price: 36, perks: ["Smaller dorm", "Locker", "Pool access"] },
    ],
    facilities: [
      "Free High-Speed Wi-Fi", "Outdoor Swimming Pool", "Restaurant", "Bar", "Coffee Shop", "Air Conditioning",
      "Shared Lounge", "Laundry Service", "Airport Transfer", "Luggage Storage", "Free Parking", "Lockers",
      "Daily Housekeeping", "Snorkeling Activities", "Diving Activities", "Table Tennis", "Tour Desk", "Water Park Access",
    ],
    attractions: [
      "Seminyak Beach", "Double Six Beach", "Petitenget Beach", "Seminyak Square", "Eat Street (Jalan Kayu Aya)",
      "Coco Supermarket", "Kendra Gallery", "Beachwalk Shopping Center", "Waterbom Bali", "Tanah Lot Temple",
    ],
    reviewsList: [
      { name: "Olivia Smith", initials: "OS", rating: 5, date: "Apr 2026", text: "The pool deck at sunset is unreal. Loved every minute." },
      { name: "Jonas Becker", initials: "JB", rating: 5, date: "Mar 2026", text: "Capsules are comfy, dive trips were the highlight of Bali." },
      { name: "Priya Shah", initials: "PS", rating: 5, date: "Feb 2026", text: "Such a friendly crowd. Staff arranged everything for us." },
    ],
  },
];

export const getHostel = (id: string) => HOSTELS.find((h) => h.id === id);