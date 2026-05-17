export const CONTACT_PHONE = "0542482341";
export const CONTACT_EMAIL = "edith1989ampadu@gmail.com";
export const WHATSAPP_BASE_URL = `https://wa.me/233${CONTACT_PHONE.substring(1)}`;
export const WHATSAPP_LINK = WHATSAPP_BASE_URL;

export interface Product {
  id: string;
  name: string;
  category: string;
  importedFrom: string;
  price: number;
  availability: "Available" | "New Arrival" | "Limited Stock";
  description: string;
  image: string;
  gallery?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Silver Crest Digital Air Fryer",
    category: "Home Appliance",
    importedFrom: "China",
    price: 550,
    availability: "Available",
    description: "Premium Silver Crest air fryer with extra large capacity (up to 8L). Features 2400W power, digital touch controls, and high-quality non-stick coating for healthy cooking.",
    image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621348123730-845bc7969ce8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622329392138-0814981d33c5?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    name: "Waterproof Mattress Protector",
    category: "Home Essentials",
    importedFrom: "China",
    price: 190,
    availability: "New Arrival",
    description: "Premium breathable waterproof mattress protector that keeps your bed clean and liquid-free.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693419173-42b925886275?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    name: "Electric Rice Cooker",
    category: "Home Appliance",
    importedFrom: "China",
    price: 330,
    availability: "Limited Stock",
    description: "Reliable and efficient electric rice cooker with non-stick inner pot and keep-warm function.",
    image: "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584210214656-749666014e7a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?q=80&w=800&auto=format&fit=crop"
    ]
  },
];

export const SERVICES = [
  {
    title: "Supply Chain Management",
    description: "Efficient logistics and distribution solutions for your business needs.",
    icon: "Ship",
  },
  {
    title: "Diverse Product Sourcing",
    description: "Sourcing a wide range of products from trusted suppliers worldwide.",
    icon: "Truck",
  },
  {
    title: "Reliable Import Services",
    description: "Ensuring timely and secure import processes for all your goods.",
    icon: "Package",
  },
  {
    title: "Procurement Assistance",
    description: "Supporting you in finding the best international manufacturers for specific needs.",
    icon: "Search",
  },
  {
    title: "Delivery Services",
    description: "Fast and secure last-mile delivery to your doorstep in Ghana.",
    icon: "MapPin",
  },
];

export const TESTIMONIALS = [
  {
    name: "Kojo Mensah",
    role: "Retail Store Owner",
    content: "Bellsel Imports has been my most reliable partner for home appliances. The quality of their imports is exceptional.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=kojo",
  },
  {
    name: "Ama Serwaa",
    role: "Corporate Client",
    content: "The procurement assistance service helped me find exactly what I needed from China. Highly professional team.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ama",
  },
  {
    name: "Robert Hammond",
    role: "Wholesaler",
    content: "Excellent cargo handling. I never have to worry about my shipments. Fast and trustworthy.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=robert",
  },
];

export const FAQS = [
  {
    question: "Which countries do you import from?",
    answer: "We primarily import high-quality products from China, ensuring the best standards for our clients in Ghana.",
  },
  {
    question: "Do you offer delivery across Ghana?",
    answer: "Yes, we provide nationwide delivery services once your order is cleared and ready.",
  },
  {
    question: "How can I inquire about a product not listed in the catalog?",
    answer: "You can use our procurement assistance service by contacting us via WhatsApp or our contact form.",
  },
  {
    question: "Are your products under warranty?",
    answer: "Most of our imported electronics and appliances come with a standard manufacturer's warranty. Please inquire for specific details.",
  },
];
