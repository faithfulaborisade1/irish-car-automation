'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Car, Users, Star } from 'lucide-react';
import { mockCars, getFeaturedCars } from './data/mockCars';
import { carMakes, irishCounties, priceRanges, yearRanges } from './data/carMakes';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const featuredCars = getFeaturedCars();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg transform translate-y-0' 
          : 'bg-white border-b'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
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

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 font-medium flex items-center">
                  BUY <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 font-medium flex items-center">
                  SELL <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 font-medium flex items-center">
                  ABOUT US <span className="ml-1">▼</span>
                </button>
              </div>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                CONTACT US
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 font-medium">
                BLOG
              </Link>
            </nav>

            {/* Auth Buttons */}
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

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=500&fit=crop"
            alt="Cars background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Find Your Perfect Car
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ireland's premier marketplace for quality used cars
            </p>

            {/* Search Form */}
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Make Selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Make
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select an option</option>
                    {carMakes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Range
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select year range</option>
                    {yearRanges.map(range => (
                      <option key={range.label} value={`${range.min}-${range.max}`}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select price range</option>
                    {priceRanges.map(range => (
                      <option key={range.label} value={`${range.min}-${range.max}`}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Body Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select an option</option>
                    <option>Hatchback</option>
                    <option>Saloon</option>
                    <option>SUV</option>
                    <option>Estate</option>
                    <option>Coupe</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Seller Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seller Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select an option</option>
                    <option>Dealer</option>
                    <option>Private</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select a county</option>
                    {irishCounties.map(county => (
                      <option key={county} value={county}>{county}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg hover:bg-green-700 font-bold text-lg transition-colors">
                SEARCH NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Cars</h2>
            <p className="text-gray-600">Hand-picked premium vehicles from trusted dealers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Car Image */}
                <div className="relative h-48">
                  <Image
                    src={car.images[0]?.url || '/placeholder-car.jpg'}
                    alt={car.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      €{car.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{car.location.city}, {car.location.county}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500">Year:</span>
                      <span className="font-medium ml-1">{car.year}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Mileage:</span>
                      <span className="font-medium ml-1">{car.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Fuel:</span>
                      <span className="font-medium ml-1 capitalize">{car.fuelType}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Transmission:</span>
                      <span className="font-medium ml-1 capitalize">{car.transmission}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(car.seller.rating || 0)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {car.seller.rating || 'N/A'}
                      </span>
                    </div>
                    <Link
                      href={`/cars/${car.id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cars"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium transition-colors"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by City Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by City</h2>
            <p className="text-gray-600">
              With so much to choose from (model, price, year, condition and colour),
              <br />
              Now you can explore your classified ads by your city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dublin', count: 2, color: '#2563eb' },
              { name: 'Cork', count: 1, color: '#059669' },
              { name: 'Galway', count: 2, color: '#9333ea' },
              { name: 'Limerick', count: 0, color: '#ea580c' },
              { name: 'Waterford', count: 0, color: '#0891b2' },
              { name: 'Kerry', count: 0, color: '#4f46e5' }
            ].map(city => (
              <Link
                key={city.name}
                href={`/search?location=${city.name}`}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: city.color }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Co. {city.name}</h3>
                      <p className="text-lg">({city.count})</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Car className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{mockCars.length}+</div>
              <div className="text-lg">Cars Available</div>
            </div>
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-lg">Trusted Dealers</div>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-lg">Average Rating</div>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">32</div>
              <div className="text-lg">Counties Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-600 text-white px-3 py-2 rounded font-bold">
                  IRISH
                </div>
                <div className="text-orange-500 font-bold">
                  AUTO MARKET
                </div>
              </div>
              <p className="text-gray-400">
                Ireland's premier marketplace for quality used cars
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/cars" className="text-gray-400 hover:text-white">Browse Cars</Link></li>
                <li><Link href="/dealers" className="text-gray-400 hover:text-white">Find Dealers</Link></li>
                <li><Link href="/sell" className="text-gray-400 hover:text-white">Sell Your Car</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Irish Auto Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}