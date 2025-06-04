import Link from 'next/link';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

export default function DealersPage() {
  const dealers = [
    {
      id: 'dealer-1',
      name: 'Premium Motors Dublin',
      location: 'Dublin 4',
      phone: '+353 1 234 5678',
      email: 'sales@premiummotors.ie',
      rating: 4.8,
      totalSales: 150,
      description: 'Specializing in premium German vehicles with full service history.',
      specializations: ['BMW', 'Audi', 'Mercedes-Benz']
    },
    {
      id: 'dealer-2',
      name: 'Cork Auto Center',
      location: 'Cork',
      phone: '+353 21 456 7890',
      email: 'info@corkauto.ie',
      rating: 4.6,
      totalSales: 89,
      description: 'Family-run dealership serving Cork for over 20 years.',
      specializations: ['Volkswagen', 'Ford', 'Toyota']
    },
    {
      id: 'dealer-3',
      name: 'Limerick Car Sales',
      location: 'Limerick',
      phone: '+353 61 789 012',
      email: 'sales@limerickcar.ie',
      rating: 4.3,
      totalSales: 67,
      description: 'Affordable quality cars with comprehensive warranties.',
      specializations: ['Ford', 'Hyundai', 'Kia']
    },
    {
      id: 'dealer-4',
      name: 'Southeast Motors',
      location: 'Waterford',
      phone: '+353 51 345 678',
      email: 'info@southeastmotors.ie',
      rating: 4.7,
      totalSales: 134,
      description: 'Leading hybrid and electric vehicle specialists in the Southeast.',
      specializations: ['Tesla', 'Hyundai', 'Toyota']
    }
  ];

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Trusted Dealers</h1>
          <p className="text-xl text-gray-600">Find verified car dealers across Ireland</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealers.map(dealer => (
            <div key={dealer.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dealer.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{dealer.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(dealer.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {dealer.rating} ({dealer.totalSales} sales)
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{dealer.description}</p>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Specializes in:</div>
                <div className="flex flex-wrap gap-1">
                  {dealer.specializations.map(brand => (
                    <span key={brand} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:${dealer.phone}`}
                  className="flex items-center justify-center w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {dealer.phone}
                </a>
                <a
                  href={`mailto:${dealer.email}`}
                  className="flex items-center justify-center w-full border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 text-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    </div>
  );
}