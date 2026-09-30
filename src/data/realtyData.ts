import { BusinessInfo, PropertyListing, ServiceAreaInfo, Testimonial } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: "KG REALTY GROUP",
  brokerage: "EXP REALTY",
  lead: "Kevin Gonzalez",
  rating: {
    overall: 5.0,
    total_reviews: 242
  },
  experience_years: 13,
  contact: {
    phone: "(909) 268-4206",
    email: "kevin@kgrealtygroup.com",
    address: {
      street: "5847 Pine Ave, Suite B",
      city: "Chino Hills",
      state: "CA",
      zip: "91709"
    }
  },
  hours: {
    "Monday": "10:00 AM - 6:00 PM",
    "Tuesday": "10:00 AM - 6:00 PM",
    "Wednesday": "10:00 AM - 6:00 PM",
    "Thursday": "10:00 AM - 6:00 PM",
    "Friday": "10:00 AM - 6:00 PM",
    "Saturday": "Closed",
    "Sunday": "Closed"
  },
  languages_spoken: [
    "English",
    "Spanish"
  ],
  specialties: [
    "Buyer's Agent",
    "Listing Agent",
    "First Time Homebuyers",
    "Investment Properties",
    "Rentals"
  ],
  about: "Kevin guides buyers and sellers through each step with local market knowledge and clear, attentive representation.",
  team_members: [
    {
      name: "Kevin Gonzalez",
      role: "Lead",
      rating: 5.0,
      reviews: 242,
      price_range: "$22K - $1.8M",
      photo: "/kevin_gonzalez.jpg",
      email: "kevin@kgrealtygroup.com",
      phone: "(909) 268-4206",
      specialties: ["Luxury Listings", "Buyer Representation", "Strategic Marketing"]
    },
    {
      name: "Carlos Gonzalez",
      role: "Realtor Associate",
      rating: 5.0,
      reviews: 15,
      price_range: "$500K - $1.3M",
      photo: "/carlos-gonzalez.jpg",
      email: "carlos@kgrealtygroup.com",
      phone: "(909) 268-4207",
      specialties: ["First Time Buyers", "Residential Sales", "Chino Hills Specialist"]
    },
    {
      name: "Nicholas Verduzco",
      role: "Realtor Associate",
      rating: 5.0,
      reviews: 7,
      price_range: "$540K - $676K",
      photo: "/nicholas-verduzco.jpg",
      email: "nicholas@kgrealtygroup.com",
      phone: "(909) 268-4208",
      specialties: ["Inland Empire", "Buyer Consultations", "Investment Properties"]
    },
  ],
  performance_stats: {
    sales_last_12_months: 6,
    total_sales: 407,
    price_range: "$22K - $1.8M",
    average_price: "$723K"
  },
  service_areas: [
    "Chino Hills, CA",
    "Corona, CA",
    "Yorba Linda, CA",
    "Diamond Bar, CA",
    "Chino, CA",
    "Orange County, CA",
    "Riverside County, CA",
    "Los Angeles County, CA",
    "Ontario, CA",
    "Pomona, CA",
    "Upland, CA",
    "Montclair, CA",
    "Rancho Cucamonga, CA"
  ]
};

export const TOP_AREAS: ServiceAreaInfo[] = [
  {
    name: "Chino Hills",
    state: "CALIFORNIA",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 38,
    avgPrice: "$895,000"
  },
  {
    name: "Corona",
    state: "CALIFORNIA",
    county: "Riverside County",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 42,
    avgPrice: "$710,000"
  },
  {
    name: "Yorba Linda",
    state: "CALIFORNIA",
    county: "Orange County",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 29,
    avgPrice: "$1,350,000"
  },
  {
    name: "Diamond Bar",
    state: "CALIFORNIA",
    county: "Los Angeles County",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 24,
    avgPrice: "$945,000"
  },
  {
    name: "Rancho Cucamonga",
    state: "CALIFORNIA",
    county: "San Bernardino County",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 51,
    avgPrice: "$780,000"
  },
  {
    name: "Orange County",
    state: "CALIFORNIA",
    county: "Orange County",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    activeListingsCount: 114,
    avgPrice: "$1,250,000"
  }
];

export const FEATURED_LISTINGS: PropertyListing[] = [
  {
    id: "prop-1",
    price: 850000,
    formattedPrice: "$850,000",
    address: "0 Johnson, Phelan, CA 92371",
    city: "Phelan",
    state: "CA",
    zip: "92371",
    beds: 4,
    baths: 3,
    sqft: 2840,
    propertyType: "Single Family",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #CV240981",
    description: "Spectacular panoramic views and custom desert modern architectural design. Spacious open floor plan featuring designer kitchen with quartz countertops and stainless steel appliances.",
    features: ["Panoramic Mountain Views", "Open Floor Plan", "Custom Cabinetry", "RV Parking", "Owned Solar Panels"]
  },
  {
    id: "prop-2",
    price: 715000,
    formattedPrice: "$715,000",
    address: "15879 Antelope, Chino Hills, CA 91709",
    city: "Chino Hills",
    state: "CA",
    zip: "91709",
    beds: 3,
    baths: 3,
    sqft: 1411,
    propertyType: "Single Family Residence",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Just Listed",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #CV241105",
    description: "Welcome home to this immaculate Chino Hills beauty located in a quiet family neighborhood! Offers high ceilings, remodeled kitchen, private yard and award-winning Chino Hills schools.",
    features: ["Cul-de-sac Location", "Top Rated Schools", "Remodeled Kitchen", "Low HOA", "Private Backyard"]
  },
  {
    id: "prop-3",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "880 Los Positos, Milpitas, CA 95035",
    city: "Milpitas",
    state: "CA",
    zip: "95035",
    beds: 4,
    baths: 3,
    sqft: 2886,
    propertyType: "Executive Estate",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #PW240892",
    description: "Distinguished luxury home with dramatic architectural lines, soaring foyer, chef's gourmet kitchen, and resort-style entertainer's outdoor oasis.",
    features: ["Resort Pool & Spa", "Gourmet Chef Kitchen", "Dual Primary Suites", "3-Car Garage", "Smart Home Automation"]
  },
  {
    id: "prop-4",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "3613 Lankershim Boulevard, Los Angeles, CA 90068",
    city: "Los Angeles",
    state: "CA",
    zip: "90068",
    beds: 3,
    baths: 3,
    sqft: 1559,
    propertyType: "Modern Architectural",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #SR241560",
    description: "Iconic architectural sanctuary tucked into the hills. Seamless indoor-outdoor flow, walls of glass, private deck with serene canyon views.",
    features: ["Architectural Statement", "Walls of Glass", "Canyon Views", "Hardwood Floors", "Private Deck"]
  },
  {
    id: "prop-5",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "11274 Breckenridge Way, San Diego, CA 92131",
    city: "San Diego",
    state: "CA",
    zip: "92131",
    beds: 5,
    baths: 4,
    sqft: 3215,
    propertyType: "Luxury Craftsman",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #SD240321",
    description: "Immaculate executive residence boasting sweeping hillside views, expansive entertainer's kitchen, custom wine cellar, and private pool.",
    features: ["Hillside Views", "Custom Wine Cellar", "Private Pool", "Main Floor Bedroom", "Bonus Loft"]
  },
  {
    id: "prop-6",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "28562 Silverton, Laguna Niguel, CA 92677",
    city: "Laguna Niguel",
    state: "CA",
    zip: "92677",
    beds: 4,
    baths: 3,
    sqft: 2808,
    propertyType: "Coastal Executive",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #OC240778",
    description: "Stunning Laguna Niguel haven featuring high vaulted ceilings, modern stone finishes, and close proximity to premier coastal beaches and trails.",
    features: ["Minutes to Beach", "Vaulted Ceilings", "Outdoor Firepit", "Updated Master Bath", "Gourmet Kitchen"]
  },
  {
    id: "prop-7",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "1035 Lime Ave, Long Beach, CA 90813",
    city: "Long Beach",
    state: "CA",
    zip: "90813",
    beds: 3,
    baths: 3,
    sqft: 6384,
    propertyType: "Multi-Unit Opportunity",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #LB240912",
    description: "Premier investment opportunity in high-demand Long Beach district. Strong cash flow, updated electrical, and spacious tenant accommodations.",
    features: ["High Cap Rate", "Prime Location", "Separate Meters", "On-site Laundry", "Turnkey"]
  },
  {
    id: "prop-8",
    price: 2000000,
    formattedPrice: "$2,000,000",
    address: "316 2nd, Huntington Beach, CA 92648",
    city: "Huntington Beach",
    state: "CA",
    zip: "92648",
    beds: 4,
    baths: 2,
    sqft: 1848,
    propertyType: "Downtown Coastal",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    status: "Active",
    listedWith: "KG Realty Group",
    mlsNumber: "CRMLS #OC240995",
    description: "Live the coastal dream steps from Main Street and Pacific City. Modern open layout with ocean breezes, rooftop deck, and custom outdoor patio.",
    features: ["Steps to Beach & Pier", "Rooftop Ocean Deck", "Coastal Breezes", "2-Car Attached Garage", "Designer Fixtures"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    headline: "\"Kevin helped us get into a home we thought we would have no chance at\"",
    quote: "Kevin helped us get into a home we thought we would have no chance at and we couldn’t be more thankful. He is highly experienced, knowledgeable about the industry, and has several connections. We know with any other realtor we would have seen our dream home slip away, but Kevin got it done, and with a HUGE price cut! Highly recommend. Thanks again Kevin!",
    featuredQuote: "Kevin helped us get into a home we thought we would have no chance at and we couldn’t be more thankful.",
    author: "knachreiner5",
    location: "Murrieta, CA",
    rating: 5.0,
    date: "9/17/2023",
    type: "Zillow Review"
  },
  {
    id: "test-2",
    headline: "\"Working with Kevin has been effortless\"",
    quote: "Working with Kevin has been effortless. He pretty much does it all from the very beginning to the very end, all you have to do is let him know what you're looking for. This has been the 2nd home we have listed with Kevin and were very surprised we got over asking price in this market with interest rates as high as they are, but he never seized to amaze us and made it happen.",
    featuredQuote: "Working with Kevin has been effortless. He pretty much does it all from the very beginning to the very end.",
    author: "rsethi44",
    location: "Chino Hills, CA",
    rating: 5.0,
    date: "9/21/2023",
    type: "Zillow Review"
  },
  {
    id: "test-3",
    headline: "\"Kevin was amazing!!\"",
    quote: "Kevin was amazing!! He helped us sell our old house and helped us find our new dream home. Sold our home quickly and above asking price. He walked us through the entire process from start to finish. Answer all our questions and we had alot... Kevin fought to make it happen and worked hard to make it an enjoyable process.",
    featuredQuote: "Kevin was amazing!! He helped us sell our old house and helped us find our new dream home.",
    author: "lhgong",
    location: "Jurupa Valley, CA",
    rating: 5.0,
    date: "1/10/2024",
    type: "Zillow Review"
  }
];
