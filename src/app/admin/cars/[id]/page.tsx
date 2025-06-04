import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Gauge, Fuel, Settings } from 'lucide-react';
import { getCarById } from '../../../data/mockCars';

interface CarDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CarDetailsPage({ params }: CarDetailsPageProps) {
  const car = getCarById(params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-green-600 text-white px-3 py-2 rounded font-bold text-xl">
                  IRISH
                </div>
                <div className="text-orange-500 font-bold text-xl">
                  AUTO MARKET
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-green-600 font-medium">
                LOGIN
              </Link>
              <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-medium">
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Car images */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="relative h-96">
                <Image
                  src={car.images[0]?.url || '/placeholder-car.jpg'}
                  alt={car.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  {car.featured && (
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Car details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{car.title}</h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-medium">{car.year}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Gauge className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Mileage</div>
                    <div className="font-medium">{car.mileage.toLocaleString()} km</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Fuel className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Fuel Type</div>
                    <div className="font-medium capitalize">{car.fuelType}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="font-medium capitalize">{car.transmission}</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </div>

              {car.features.length > 0 && (
                <div className="border-t pt-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {car.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Price card */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="text-3xl font-bold text-green-600 mb-4">
                €{car.price.toLocaleString()}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Make</span>
                  <span className="font-medium">{car.make}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Model</span>
                  <span className="font-medium">{car.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Body Type</span>
                  <span className="font-medium capitalize">{car.bodyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium">{car.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Doors</span>
                  <span className="font-medium">{car.doors}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 font-medium mb-3">
                Contact Seller
              </button>
              <button className="w-full border border-green-600 text-green-600 py-3 px-4 rounded-lg hover:bg-green-50 font-medium">
                Save to Favorites
              </button>
            </div>

            {/* Seller info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="font-medium">{car.seller.name}</div>
                  <div className="text-sm text-gray-600 capitalize">{car.seller.type} Seller</div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{car.location.city}, {car.location.county}</span>
                </div>

                {car.seller.rating && (
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(car.seller.rating!) ? '★' : '☆'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {car.seller.rating} ({car.seller.totalSales} sales)
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <a
                  href={`tel:${car.seller.phone}`}
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href={`mailto:${car.seller.email}`}
                  className="flex items-center justify-center w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}