// Direct import from database package using relative path
export { prisma, db, connectDB, disconnectDB } from '../../../../packages/database/src/index'
export type {
  User,
  Car,
  CarImage,
  CarInquiry,
  FavoriteCar,
  SavedSearch,
  DealerProfile,
  UserRole,
  FuelType,
  TransmissionType,
  BodyType,
  CarCondition,
  ListingStatus,
  InquiryType,
  InquiryStatus,
  SubscriptionType,
} from '@prisma/client'