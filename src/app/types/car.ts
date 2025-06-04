// Car-related types and interfaces for the Irish Car Automation marketplace

export interface Car {
    id: string;
    title: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: FuelType;
    transmission: TransmissionType;
    bodyType: BodyType;
    color: string;
    doors: number;
    engine: string;
    description: string;
    features: string[];
    images: CarImage[];
    location: Location;
    seller: Seller;
    condition: CarCondition;
    nctExpiry?: Date;
    insuranceGroup?: number;
    co2Emissions?: number;
    createdAt: Date;
    updatedAt: Date;
    status: ListingStatus;
    featured: boolean;
    views: number;
    inquiries: number;
  }
  
  export interface CarImage {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
  }
  
  export interface Location {
    county: string;
    city: string;
    postcode?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  }
  
  export interface Seller {
    id: string;
    name: string;
    type: SellerType;
    phone: string;
    email: string;
    verified: boolean;
    rating?: number;
    totalSales?: number;
    businessName?: string;
    address?: string;
  }
  
  // Enums for consistent data
  export enum FuelType {
    PETROL = 'petrol',
    DIESEL = 'diesel',
    ELECTRIC = 'electric',
    HYBRID = 'hybrid',
    PLUGIN_HYBRID = 'plugin-hybrid',
    LPG = 'lpg',
    CNG = 'cng'
  }
  
  export enum TransmissionType {
    MANUAL = 'manual',
    AUTOMATIC = 'automatic',
    SEMI_AUTOMATIC = 'semi-automatic',
    CVT = 'cvt'
  }
  
  export enum BodyType {
    HATCHBACK = 'hatchback',
    SALOON = 'saloon',
    ESTATE = 'estate',
    SUV = 'suv',
    COUPE = 'coupe',
    CONVERTIBLE = 'convertible',
    MPV = 'mpv',
    VAN = 'van',
    PICKUP = 'pickup',
    OTHER = 'other'
  }
  
  export enum CarCondition {
    NEW = 'new',
    USED = 'used',
    CERTIFIED_PRE_OWNED = 'certified-pre-owned'
  }
  
  export enum SellerType {
    DEALER = 'dealer',
    PRIVATE = 'private'
  }
  
  export enum ListingStatus {
    ACTIVE = 'active',
    SOLD = 'sold',
    PENDING = 'pending',
    EXPIRED = 'expired',
    DRAFT = 'draft'
  }
  
  // Search and filter interfaces
  export interface CarSearchFilters {
    make?: string;
    model?: string;
    priceMin?: number;
    priceMax?: number;
    yearMin?: number;
    yearMax?: number;
    mileageMax?: number;
    fuelType?: FuelType[];
    transmission?: TransmissionType[];
    bodyType?: BodyType[];
    location?: string;
    condition?: CarCondition;
    sellerType?: SellerType;
    features?: string[];
    sortBy?: SortOption;
    sortOrder?: 'asc' | 'desc';
  }
  
  export enum SortOption {
    PRICE_LOW_TO_HIGH = 'price-asc',
    PRICE_HIGH_TO_LOW = 'price-desc',
    YEAR_NEWEST = 'year-desc',
    YEAR_OLDEST = 'year-asc',
    MILEAGE_LOW = 'mileage-asc',
    MILEAGE_HIGH = 'mileage-desc',
    DATE_NEWEST = 'created-desc',
    DATE_OLDEST = 'created-asc',
    MOST_VIEWED = 'views-desc'
  }
  
  // API response types
  export interface CarSearchResponse {
    cars: Car[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  }
  
  export interface CarStats {
    totalListings: number;
    activeListing: number;
    soldThisMonth: number;
    averagePrice: number;
    averageViews: number;
    topMakes: Array<{
      make: string;
      count: number;
    }>;
  }