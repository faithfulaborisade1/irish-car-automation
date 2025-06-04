import { 
    Car, 
    FuelType, 
    TransmissionType, 
    BodyType, 
    CarCondition, 
    SellerType, 
    ListingStatus 
  } from '../types/car';
  
  export const mockCars: Car[] = [
    {
      id: '1',
      title: '2020 BMW 3 Series 320d M Sport',
      make: 'BMW',
      model: '3 Series',
      year: 2020,
      price: 32000,
      mileage: 45000,
      fuelType: FuelType.DIESEL,
      transmission: TransmissionType.AUTOMATIC,
      bodyType: BodyType.SALOON,
      color: 'Mineral Grey Metallic',
      doors: 4,
      engine: '2.0L Turbo Diesel',
      description: 'Stunning BMW 3 Series in excellent condition. Full service history, one previous owner. Features M Sport package with enhanced styling and performance. Perfect blend of luxury and efficiency.',
      features: [
        'M Sport Package',
        'Navigation System',
        'Leather Seats',
        'Heated Seats',
        'Parking Sensors',
        'Bluetooth',
        'Cruise Control',
        'LED Headlights'
      ],
      images: [
        {
          id: '1-1',
          url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          alt: 'BMW 3 Series front view',
          isPrimary: true,
          order: 1
        },
        {
          id: '1-2',
          url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
          alt: 'BMW 3 Series interior',
          isPrimary: false,
          order: 2
        }
      ],
      location: {
        county: 'Dublin',
        city: 'Dublin',
        postcode: 'D04 V6K8'
      },
      seller: {
        id: 'dealer-1',
        name: 'Premium Motors Dublin',
        type: SellerType.DEALER,
        phone: '+353 1 234 5678',
        email: 'sales@premiummotors.ie',
        verified: true,
        rating: 4.8,
        totalSales: 150,
        businessName: 'Premium Motors Dublin Ltd',
        address: '123 Main Street, Dublin 4'
      },
      condition: CarCondition.USED,
      nctExpiry: new Date('2025-08-15'),
      insuranceGroup: 15,
      co2Emissions: 128,
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-11-20'),
      status: ListingStatus.ACTIVE,
      featured: true,
      views: 234,
      inquiries: 12
    },
    {
      id: '2',
      title: '2019 Volkswagen Golf GTI',
      make: 'Volkswagen',
      model: 'Golf',
      year: 2019,
      price: 28500,
      mileage: 38000,
      fuelType: FuelType.PETROL,
      transmission: TransmissionType.MANUAL,
      bodyType: BodyType.HATCHBACK,
      color: 'Tornado Red',
      doors: 5,
      engine: '2.0L TSI Turbo',
      description: 'Iconic Golf GTI in pristine condition. This performance hatchback offers thrilling driving dynamics with everyday practicality. Full Volkswagen service history maintained.',
      features: [
        'GTI Performance Package',
        'Sports Suspension',
        'Touchscreen Infotainment',
        'Apple CarPlay',
        'Sports Seats',
        'Dual-Zone Climate',
        'Parking Assistance',
        'LED Lights'
      ],
      images: [
        {
          id: '2-1',
          url: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
          alt: 'VW Golf GTI front view',
          isPrimary: true,
          order: 1
        }
      ],
      location: {
        county: 'Cork',
        city: 'Cork',
        postcode: 'T12 R6K9'
      },
      seller: {
        id: 'dealer-2',
        name: 'Cork Auto Center',
        type: SellerType.DEALER,
        phone: '+353 21 456 7890',
        email: 'info@corkauto.ie',
        verified: true,
        rating: 4.6,
        totalSales: 89,
        businessName: 'Cork Auto Center Ltd',
        address: '456 South Mall, Cork'
      },
      condition: CarCondition.USED,
      nctExpiry: new Date('2025-12-03'),
      insuranceGroup: 22,
      co2Emissions: 168,
      createdAt: new Date('2024-11-18'),
      updatedAt: new Date('2024-11-18'),
      status: ListingStatus.ACTIVE,
      featured: false,
      views: 156,
      inquiries: 8
    },
    {
      id: '3',
      title: '2021 Tesla Model 3 Long Range',
      make: 'Tesla',
      model: 'Model 3',
      year: 2021,
      price: 45000,
      mileage: 25000,
      fuelType: FuelType.ELECTRIC,
      transmission: TransmissionType.AUTOMATIC,
      bodyType: BodyType.SALOON,
      color: 'Pearl White Multi-Coat',
      doors: 4,
      engine: 'Dual Motor Electric',
      description: 'Immaculate Tesla Model 3 Long Range with Autopilot. Zero emissions driving with incredible performance. This model offers 500km+ range and cutting-edge technology.',
      features: [
        'Autopilot',
        'Supercharging Capability',
        '15-inch Touchscreen',
        'Premium Audio',
        'Glass Roof',
        'Heated Seats',
        'Over-the-Air Updates',
        'Mobile App Control'
      ],
      images: [
        {
          id: '3-1',
          url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
          alt: 'Tesla Model 3 front view',
          isPrimary: true,
          order: 1
        }
      ],
      location: {
        county: 'Galway',
        city: 'Galway',
        postcode: 'H91 X4F2'
      },
      seller: {
        id: 'private-1',
        name: 'John O\'Sullivan',
        type: SellerType.PRIVATE,
        phone: '+353 87 123 4567',
        email: 'john.osullivan@email.com',
        verified: true,
        rating: 5.0,
        totalSales: 3
      },
      condition: CarCondition.USED,
      insuranceGroup: 20,
      co2Emissions: 0,
      createdAt: new Date('2024-11-20'),
      updatedAt: new Date('2024-11-20'),
      status: ListingStatus.ACTIVE,
      featured: true,
      views: 445,
      inquiries: 23
    },
    {
      id: '4',
      title: '2018 Ford Focus 1.5 TDCi Titanium',
      make: 'Ford',
      model: 'Focus',
      year: 2018,
      price: 18500,
      mileage: 62000,
      fuelType: FuelType.DIESEL,
      transmission: TransmissionType.MANUAL,
      bodyType: BodyType.HATCHBACK,
      color: 'Magnetic Grey',
      doors: 5,
      engine: '1.5L TDCi',
      description: 'Well-maintained Ford Focus Titanium with full service history. Excellent fuel economy and reliability. Perfect family car with great spec level.',
      features: [
        'Titanium Trim',
        'SYNC 3 Infotainment',
        'Rear Camera',
        'Alloy Wheels',
        'Air Conditioning',
        'Electric Windows',
        'Central Locking',
        'Multiple Airbags'
      ],
      images: [
        {
          id: '4-1',
          url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
          alt: 'Ford Focus front view',
          isPrimary: true,
          order: 1
        }
      ],
      location: {
        county: 'Limerick',
        city: 'Limerick',
        postcode: 'V94 T2X8'
      },
      seller: {
        id: 'dealer-3',
        name: 'Limerick Car Sales',
        type: SellerType.DEALER,
        phone: '+353 61 789 012',
        email: 'sales@limerickcar.ie',
        verified: true,
        rating: 4.3,
        totalSales: 67,
        businessName: 'Limerick Car Sales Ltd',
        address: '789 O\'Connell Street, Limerick'
      },
      condition: CarCondition.USED,
      nctExpiry: new Date('2025-06-22'),
      insuranceGroup: 12,
      co2Emissions: 99,
      createdAt: new Date('2024-11-12'),
      updatedAt: new Date('2024-11-15'),
      status: ListingStatus.ACTIVE,
      featured: false,
      views: 89,
      inquiries: 4
    },
    {
      id: '5',
      title: '2022 Hyundai Tucson Hybrid Premium',
      make: 'Hyundai',
      model: 'Tucson',
      year: 2022,
      price: 38000,
      mileage: 15000,
      fuelType: FuelType.HYBRID,
      transmission: TransmissionType.AUTOMATIC,
      bodyType: BodyType.SUV,
      color: 'Phantom Black',
      doors: 5,
      engine: '1.6L Hybrid',
      description: 'Nearly new Hyundai Tucson Hybrid in Premium trim. Outstanding fuel efficiency with SUV practicality. Still under manufacturer warranty.',
      features: [
        'Premium Package',
        'Panoramic Sunroof',
        'Wireless Charging',
        'Digital Cockpit',
        'Heated & Ventilated Seats',
        'Bose Audio',
        'Smart Cruise Control',
        'Lane Keep Assist'
      ],
      images: [
        {
          id: '5-1',
          url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
          alt: 'Hyundai Tucson front view',
          isPrimary: true,
          order: 1
        }
      ],
      location: {
        county: 'Waterford',
        city: 'Waterford',
        postcode: 'X91 P2C4'
      },
      seller: {
        id: 'dealer-4',
        name: 'Southeast Motors',
        type: SellerType.DEALER,
        phone: '+353 51 345 678',
        email: 'info@southeastmotors.ie',
        verified: true,
        rating: 4.7,
        totalSales: 134,
        businessName: 'Southeast Motors Ltd',
        address: '321 The Quay, Waterford'
      },
      condition: CarCondition.USED,
      nctExpiry: new Date('2027-03-15'),
      insuranceGroup: 18,
      co2Emissions: 139,
      createdAt: new Date('2024-11-22'),
      updatedAt: new Date('2024-11-22'),
      status: ListingStatus.ACTIVE,
      featured: true,
      views: 178,
      inquiries: 15
    },
    {
      id: '6',
      title: '2017 Audi A4 2.0 TDI S Line',
      make: 'Audi',
      model: 'A4',
      year: 2017,
      price: 24500,
      mileage: 78000,
      fuelType: FuelType.DIESEL,
      transmission: TransmissionType.AUTOMATIC,
      bodyType: BodyType.SALOON,
      color: 'Ibis White',
      doors: 4,
      engine: '2.0L TDI',
      description: 'Elegant Audi A4 S Line with comprehensive service history. Premium German engineering with sporty S Line styling. Excellent condition throughout.',
      features: [
        'S Line Package',
        'MMI Navigation',
        'Virtual Cockpit',
        'Bang & Olufsen Audio',
        'Matrix LED Headlights',
        'Sports Suspension',
        'Quattro All-Wheel Drive',
        'Keyless Entry'
      ],
      images: [
        {
          id: '6-1',
          url: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop',
          alt: 'Audi A4 front view',
          isPrimary: true,
          order: 1
        }
      ],
      location: {
        county: 'Kerry',
        city: 'Killarney',
        postcode: 'V93 KR58'
      },
      seller: {
        id: 'private-2',
        name: 'Michael McCarthy',
        type: SellerType.PRIVATE,
        phone: '+353 86 234 5678',
        email: 'michael.mccarthy@email.com',
        verified: true,
        rating: 4.9,
        totalSales: 2
      },
      condition: CarCondition.USED,
      nctExpiry: new Date('2025-09-18'),
      insuranceGroup: 19,
      co2Emissions: 118,
      createdAt: new Date('2024-11-19'),
      updatedAt: new Date('2024-11-21'),
      status: ListingStatus.ACTIVE,
      featured: false,
      views: 203,
      inquiries: 9
    }
  ];
  
  // Helper functions for mock data
  export const getFeaturedCars = (): Car[] => {
    return mockCars.filter(car => car.featured);
  };
  
  export const getCarsByPriceRange = (min: number, max: number): Car[] => {
    return mockCars.filter(car => car.price >= min && car.price <= max);
  };
  
  export const getCarsByMake = (make: string): Car[] => {
    return mockCars.filter(car => car.make.toLowerCase() === make.toLowerCase());
  };
  
  export const getCarById = (id: string): Car | undefined => {
    return mockCars.find(car => car.id === id);
  };
  
  // Mock statistics
  export const mockCarStats = {
    totalListings: mockCars.length,
    activeListing: mockCars.filter(car => car.status === ListingStatus.ACTIVE).length,
    soldThisMonth: 23,
    averagePrice: Math.round(mockCars.reduce((sum, car) => sum + car.price, 0) / mockCars.length),
    averageViews: Math.round(mockCars.reduce((sum, car) => sum + car.views, 0) / mockCars.length),
    topMakes: [
      { make: 'BMW', count: 1 },
      { make: 'Volkswagen', count: 1 },
      { make: 'Tesla', count: 1 },
      { make: 'Ford', count: 1 },
      { make: 'Hyundai', count: 1 },
      { make: 'Audi', count: 1 }
    ]
  };