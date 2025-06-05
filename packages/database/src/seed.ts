import { PrismaClient } from '@prisma/client'
import type { UserRole, FuelType, TransmissionType, BodyType, CarCondition, ListingStatus, SubscriptionType, NotificationType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Clean existing data
  console.log('🧹 Cleaning existing data...')
  await prisma.notification.deleteMany()
  await prisma.carLike.deleteMany()
  await prisma.priceHistory.deleteMany()
  await prisma.carInquiry.deleteMany()
  await prisma.favoriteCar.deleteMany()
  await prisma.savedSearch.deleteMany()
  await prisma.carImage.deleteMany()
  await prisma.car.deleteMany()
  await prisma.dealerProfile.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  // Create users
  console.log('👥 Creating users...')
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@irishautomarket.ie',
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN' as UserRole,
      phone: '+353 1 234 5678',
      location: { county: 'Dublin', city: 'Dublin' },
    },
  })

  const dealer1 = await prisma.user.create({
    data: {
      email: 'dealer@premiummotors.ie',
      firstName: 'John',
      lastName: 'Premium',
      role: 'DEALER' as UserRole,
      phone: '+353 1 555 0001',
      location: { county: 'Dublin', city: 'Dublin 4' },
    },
  })

  const dealer2 = await prisma.user.create({
    data: {
      email: 'sales@corkauto.ie',
      firstName: 'Mary',
      lastName: 'Cork',
      role: 'DEALER' as UserRole,
      phone: '+353 21 555 0002',
      location: { county: 'Cork', city: 'Cork' },
    },
  })

  const user1 = await prisma.user.create({
    data: {
      email: 'michael@email.com',
      firstName: 'Michael',
      lastName: 'O\'Sullivan',
      role: 'USER' as UserRole,
      phone: '+353 87 123 4567',
      location: { county: 'Galway', city: 'Galway' },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'sarah@email.com',
      firstName: 'Sarah',
      lastName: 'Murphy',
      role: 'USER' as UserRole,
      phone: '+353 86 987 6543',
      location: { county: 'Dublin', city: 'Dublin 2' },
    },
  })

  // Create test user with known credentials for testing
  const testUser = await prisma.user.create({
    data: {
      email: 'test@irishautomarket.ie',
      firstName: 'Test',
      lastName: 'User',
      role: 'USER' as UserRole,
      phone: '+353 87 000 0000',
      location: { county: 'Dublin', city: 'Dublin' },
      password: '$2b$10$rV8O8m8l7n6jrYqL1VzKJ.oJ8L3m5n9p7q1s3t5u7v9w1x3y5z7A9B' // password123
    },
  })

  // Create dealer profiles
  console.log('🏢 Creating dealer profiles...')
  
  await prisma.dealerProfile.create({
    data: {
      userId: dealer1.id,
      businessName: 'Premium Motors Dublin',
      description: 'Specializing in premium German vehicles with full service history.',
      website: 'https://premiummotors.ie',
      subscriptionType: 'PREMIUM' as SubscriptionType,
      verified: true,
      verifiedAt: new Date(),
      specialties: ['BMW', 'Audi', 'Mercedes-Benz'],
    },
  })

  await prisma.dealerProfile.create({
    data: {
      userId: dealer2.id,
      businessName: 'Cork Auto Center',
      description: 'Family-run dealership serving Cork for over 20 years.',
      website: 'https://corkauto.ie',
      subscriptionType: 'BASIC' as SubscriptionType,
      verified: true,
      verifiedAt: new Date(),
      specialties: ['Volkswagen', 'Ford', 'Toyota'],
    },
  })

  // Create cars - JUST 3 CARS TO START
  console.log('🚗 Creating cars...')
  
  const car1 = await prisma.car.create({
    data: {
      userId: dealer1.id,
      title: '2020 BMW 3 Series 320d M Sport',
      make: 'BMW',
      model: '3 Series',
      year: 2020,
      price: 32000,
      mileage: 45000,
      fuelType: 'DIESEL' as FuelType,
      transmission: 'AUTOMATIC' as TransmissionType,
      bodyType: 'SALOON' as BodyType,
      color: 'Mineral Grey Metallic',
      doors: 4,
      condition: 'USED' as CarCondition,
      description: 'Stunning BMW 3 Series in excellent condition. Full service history, one previous owner. Features M Sport package with enhanced styling and performance.',
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
      location: { county: 'Dublin', city: 'Dublin', postcode: 'D04 V6K8' },
      slug: '2020-bmw-3-series-320d-m-sport-1',
      status: 'ACTIVE' as ListingStatus,
      featured: true,
      nctExpiry: new Date('2025-08-15'),
      viewsCount: 234,
      inquiriesCount: 12,
      likesCount: 15,
    },
  })

  const car2 = await prisma.car.create({
    data: {
      userId: dealer2.id,
      title: '2019 Volkswagen Golf GTI',
      make: 'Volkswagen',
      model: 'Golf',
      year: 2019,
      price: 28500,
      mileage: 38000,
      fuelType: 'PETROL' as FuelType,
      transmission: 'MANUAL' as TransmissionType,
      bodyType: 'HATCHBACK' as BodyType,
      color: 'Tornado Red',
      doors: 5,
      condition: 'USED' as CarCondition,
      description: 'Iconic Golf GTI in pristine condition. This performance hatchback offers thrilling driving dynamics with everyday practicality.',
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
      location: { county: 'Cork', city: 'Cork', postcode: 'T12 R6K9' },
      slug: '2019-volkswagen-golf-gti-2',
      status: 'ACTIVE' as ListingStatus,
      featured: false,
      nctExpiry: new Date('2025-12-03'),
      viewsCount: 156,
      inquiriesCount: 8,
      likesCount: 23,
    },
  })

  const car3 = await prisma.car.create({
    data: {
      userId: user1.id,
      title: '2021 Tesla Model 3 Long Range',
      make: 'Tesla',
      model: 'Model 3',
      year: 2021,
      price: 45000,
      mileage: 25000,
      fuelType: 'ELECTRIC' as FuelType,
      transmission: 'AUTOMATIC' as TransmissionType,
      bodyType: 'SALOON' as BodyType,
      color: 'Pearl White Multi-Coat',
      doors: 4,
      condition: 'USED' as CarCondition,
      description: 'Immaculate Tesla Model 3 Long Range with Autopilot. Zero emissions driving with incredible performance.',
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
      location: { county: 'Galway', city: 'Galway', postcode: 'H91 X4F2' },
      slug: '2021-tesla-model-3-long-range-3',
      status: 'ACTIVE' as ListingStatus,
      featured: true,
      viewsCount: 445,
      inquiriesCount: 23,
      likesCount: 8,
    },
  })

  // Create car images
  console.log('📸 Creating car images...')
  
  await prisma.carImage.create({
    data: {
      carId: car1.id,
      originalUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=150&fit=crop',
      mediumUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      largeUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      altText: 'BMW 3 Series front view',
      orderIndex: 1,
    },
  })

  await prisma.carImage.create({
    data: {
      carId: car2.id,
      originalUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=200&h=150&fit=crop',
      mediumUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
      largeUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
      altText: 'VW Golf GTI front view',
      orderIndex: 1,
    },
  })

  await prisma.carImage.create({
    data: {
      carId: car3.id,
      originalUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=150&fit=crop',
      mediumUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
      largeUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      altText: 'Tesla Model 3 front view',
      orderIndex: 1,
    },
  })

  // Create car likes - SIMPLE ONES ONLY
  console.log('❤️ Creating car likes...')
  
  // user2 likes car1 (BMW)
  await prisma.carLike.create({
    data: {
      userId: user2.id,
      carId: car1.id,
    },
  })

  // testUser likes car2 (Golf GTI)
  await prisma.carLike.create({
    data: {
      userId: testUser.id,
      carId: car2.id,
    },
  })

  // user1 likes car2 (Golf GTI) 
  await prisma.carLike.create({
    data: {
      userId: user1.id,
      carId: car2.id,
    },
  })

  // user2 likes car3 (Tesla)
  await prisma.carLike.create({
    data: {
      userId: user2.id,
      carId: car3.id,
    },
  })

  // Create sample notifications
  console.log('🔔 Creating notifications...')
  
  // Notification for dealer1 when someone liked their BMW
  await prisma.notification.create({
    data: {
      userId: dealer1.id,
      type: 'CAR_LIKED' as NotificationType,
      title: 'Someone liked your car!',
      message: `${user2.firstName} ${user2.lastName} liked your BMW 3 Series`,
      carId: car1.id,
      actionUrl: `/cars/${car1.id}`,
      metadata: {
        likerName: `${user2.firstName} ${user2.lastName}`,
        likerEmail: user2.email
      },
      read: false,
    },
  })

  // Notification for dealer2 when someone liked their Golf GTI
  await prisma.notification.create({
    data: {
      userId: dealer2.id,
      type: 'CAR_LIKED' as NotificationType,
      title: 'Someone liked your car!',
      message: `${testUser.firstName} ${testUser.lastName} liked your Volkswagen Golf`,
      carId: car2.id,
      actionUrl: `/cars/${car2.id}`,
      metadata: {
        likerName: `${testUser.firstName} ${testUser.lastName}`,
        likerEmail: testUser.email
      },
      read: false,
    },
  })

  // Create sample price history
  console.log('📈 Creating price history...')
  
  // BMW had a price drop
  await prisma.priceHistory.create({
    data: {
      carId: car1.id,
      oldPrice: 35000,
      newPrice: 32000,
      changedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
  })

  // Tesla had a price increase
  await prisma.priceHistory.create({
    data: {
      carId: car3.id,
      oldPrice: 42000,
      newPrice: 45000,
      changedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
  })

  console.log('✅ Seeding completed!')
  console.log(`Created:`)
  console.log(`- 6 users (1 admin, 2 dealers, 3 regular users including test user)`)
  console.log(`- 2 dealer profiles`)
  console.log(`- 3 cars with like counts`)
  console.log(`- 3 car images`)
  console.log(`- 4 car likes`)
  console.log(`- 2 notifications`)
  console.log(`- 2 price history records`)
  console.log(``)
  console.log(`🧪 Test Credentials:`)
  console.log(`Email: test@irishautomarket.ie`)
  console.log(`Password: password123`)
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })