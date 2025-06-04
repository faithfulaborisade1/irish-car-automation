// User and authentication types for the Irish Car Automation marketplace

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    avatar?: string;
    role: UserRole;
    status: UserStatus;
    preferences: UserPreferences;
    profile: UserProfile;
    createdAt: Date;
    updatedAt: Date;
    lastLoginAt?: Date;
  }
  
  export interface UserProfile {
    bio?: string;
    location?: {
      county: string;
      city: string;
    };
    website?: string;
    businessName?: string;
    businessAddress?: string;
    vatNumber?: string;
    verified: boolean;
    verificationDocuments?: string[];
    rating?: number;
    totalReviews?: number;
  }
  
  export interface UserPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
    marketingEmails: boolean;
    savedSearchAlerts: boolean;
    currency: string;
    language: string;
    theme: 'light' | 'dark' | 'auto';
  }
  
  export enum UserRole {
    ADMIN = 'admin',
    DEALER = 'dealer',
    PRIVATE_SELLER = 'private_seller',
    BUYER = 'buyer'
  }
  
  export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    SUSPENDED = 'suspended',
    PENDING_VERIFICATION = 'pending_verification'
  }
  
  // Dealer-specific types
  export interface Dealer extends User {
    dealership: Dealership;
    subscription: DealerSubscription;
    stats: DealerStats;
  }
  
  export interface Dealership {
    id: string;
    name: string;
    description: string;
    logo?: string;
    coverImage?: string;
    address: {
      street: string;
      city: string;
      county: string;
      postcode: string;
      country: string;
    };
    contact: {
      phone: string;
      email: string;
      website?: string;
      facebook?: string;
      instagram?: string;
    };
    openingHours: OpeningHours[];
    specializations: string[];
    licenses: string[];
    establishedYear?: number;
  }
  
  export interface OpeningHours {
    day: string;
    open: string;
    close: string;
    closed: boolean;
  }
  
  export interface DealerSubscription {
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    startDate: Date;
    endDate: Date;
    listingsLimit: number;
    listingsUsed: number;
    featuredListingsIncluded: number;
    featuredListingsUsed: number;
  }
  
  export enum SubscriptionPlan {
    BASIC = 'basic',
    PREMIUM = 'premium',
    ENTERPRISE = 'enterprise'
  }
  
  export enum SubscriptionStatus {
    ACTIVE = 'active',
    EXPIRED = 'expired',
    CANCELLED = 'cancelled',
    PENDING_PAYMENT = 'pending_payment'
  }
  
  export interface DealerStats {
    totalListings: number;
    activeListings: number;
    soldThisMonth: number;
    totalViews: number;
    totalInquiries: number;
    conversionRate: number;
    averageResponseTime: number; // in minutes
    customerSatisfaction: number;
  }
  
  // Authentication types
  export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
  }
  
  export interface RegisterData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phone?: string;
    role: UserRole;
    agreeToTerms: boolean;
    marketingConsent?: boolean;
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
    expiresIn: number;
  }
  
  // Admin types
  export interface AdminUser extends User {
    permissions: AdminPermission[];
    lastActivity: Date;
  }
  
  export enum AdminPermission {
    MANAGE_USERS = 'manage_users',
    MANAGE_LISTINGS = 'manage_listings',
    MANAGE_CONTENT = 'manage_content',
    MANAGE_SETTINGS = 'manage_settings',
    VIEW_ANALYTICS = 'view_analytics',
    MANAGE_PAYMENTS = 'manage_payments',
    MODERATE_REVIEWS = 'moderate_reviews'
  }
  
  // Contact and inquiry types
  export interface CarInquiry {
    id: string;
    carId: string;
    inquirerName: string;
    inquirerEmail: string;
    inquirerPhone?: string;
    message: string;
    type: InquiryType;
    status: InquiryStatus;
    createdAt: Date;
    respondedAt?: Date;
    response?: string;
  }
  
  export enum InquiryType {
    GENERAL = 'general',
    PRICE_NEGOTIATION = 'price_negotiation',
    VIEWING_REQUEST = 'viewing_request',
    FINANCE_INQUIRY = 'finance_inquiry',
    TRADE_IN = 'trade_in'
  }
  
  export enum InquiryStatus {
    NEW = 'new',
    READ = 'read',
    RESPONDED = 'responded',
    CLOSED = 'closed'
  }
  
  // Saved searches and favorites
  export interface SavedSearch {
    id: string;
    userId: string;
    name: string;
    filters: any; // CarSearchFilters from car.ts
    alertsEnabled: boolean;
    alertFrequency: AlertFrequency;
    createdAt: Date;
    lastRun?: Date;
  }
  
  export enum AlertFrequency {
    INSTANT = 'instant',
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly'
  }
  
  export interface FavoriteCar {
    id: string;
    userId: string;
    carId: string;
    createdAt: Date;
  }