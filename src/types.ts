export interface BusinessInfo {
  name: string;
  brokerage: string;
  lead: string;
  rating: {
    overall: number;
    total_reviews: number;
  };
  experience_years: number;
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };
  hours: Record<string, string>;
  languages_spoken: string[];
  specialties: string[];
  about: string;
  team_members: TeamMember[];
  performance_stats: {
    sales_last_12_months: number;
    total_sales: number;
    price_range: string;
    average_price: string;
  };
  service_areas: string[];
}

export interface TeamMember {
  name: string;
  role?: string;
  rating?: number;
  reviews?: number;
  price_range?: string;
  photo?: string;
  email?: string;
  phone?: string;
  specialties?: string[];
}

export interface PropertyListing {
  id: string;
  price: number;
  formattedPrice: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  imageUrl: string;
  galleryUrls: string[];
  status: 'Active' | 'Pending' | 'Just Listed';
  listedWith: string;
  mlsNumber: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  headline: string;
  quote: string;
  featuredQuote?: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  type: string;
}

export interface ServiceAreaInfo {
  name: string;
  state: string;
  county?: string;
  image: string;
  activeListingsCount: number;
  avgPrice: string;
}
