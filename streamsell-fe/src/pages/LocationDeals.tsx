import { motion } from 'framer-motion';
import { MapPin, Tag, Clock, ArrowRight, Star, Users, Calendar, Plane, Hotel, Umbrella } from 'lucide-react';

const deals = [
  {
    id: 'beach-paradise',
    title: 'Beach Paradise',
    location: 'Maldives',
    price: '$999',
    duration: '7 days',
    icon: Umbrella,
    features: ['All-inclusive resort', 'Private beach access', 'Spa treatments']
  },
  {
    id: 'mountain-retreat',
    title: 'Mountain Retreat',
    location: 'Swiss Alps',
    price: '$1,299',
    duration: '5 days',
    icon: MapPin,
    features: ['Luxury chalet', 'Ski passes included', 'Hot tub access']
  },
  {
    id: 'city-explorer',
    title: 'City Explorer',
    location: 'Tokyo',
    price: '$799',
    duration: '4 days',
    icon: Hotel,
    features: ['Central location', 'Guided tours', 'Local experiences']
  }
];

const categories = [
  {
    icon: Plane,
    title: 'Flights',
    description: 'Find the best flight deals to your dream destination'
  },
  {
    icon: Hotel,
    title: 'Hotels',
    description: 'Book luxury accommodations at unbeatable prices'
  },
  {
    icon: MapPin,
    title: 'Activities',
    description: 'Discover unique experiences and local attractions'
  }
];

const LocationDeals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-[hsl(var(--neon-primary))]/10 text-[hsl(var(--neon-primary))] text-sm font-medium">
              Limited Time Offers
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Find exclusive deals on flights, hotels, and experiences around the world
          </motion.p>
        </div>

        {/* Featured Deals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 hover:border-[hsl(var(--neon-primary))]/50 transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                      <deal.icon className="h-6 w-6 text-[hsl(var(--neon-primary))]" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold text-white">{deal.title}</h3>
                      <p className="text-gray-400">{deal.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[hsl(var(--neon-primary))]">{deal.price}</span>
                    <span className="text-gray-400">{deal.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {deal.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <button className="w-full py-2 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Travel Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 hover:border-[hsl(var(--neon-primary))]/50 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-400">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Trip</h2>
              <p className="text-gray-400 mb-6">
                Search through thousands of deals to find the perfect vacation package.
                Filter by destination, price, and dates to find exactly what you're looking for.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  <span className="ml-2 text-white">Best Price Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  <span className="ml-2 text-white">24/7 Support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Search Filters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Destination</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Travel Dates</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Price Range</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Travel Style</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center p-8 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Travel?</h2>
          <p className="text-gray-400 mb-6">Start exploring our exclusive travel deals today.</p>
          <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center mx-auto">
            Search Deals
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationDeals; 