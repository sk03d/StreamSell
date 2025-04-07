import { motion } from 'framer-motion';
import { Globe, Camera, MapPin, Compass, ArrowRight, Star, Clock, Users, Eye, Play, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 'paris',
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    duration: '2 hours',
    rating: 4.8,
    price: '$29.99',
    features: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame']
  },
  {
    id: 'tokyo',
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    duration: '3 hours',
    rating: 4.9,
    price: '$34.99',
    features: ['Shibuya Crossing', 'Senso-ji Temple', 'Meiji Shrine']
  },
  {
    id: 'new-york',
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
    duration: '2.5 hours',
    rating: 4.7,
    price: '$27.99',
    features: ['Times Square', 'Central Park', 'Statue of Liberty']
  }
];

const tourFeatures = [
  {
    icon: Globe,
    title: '360° Views',
    description: 'Experience destinations in full panoramic view'
  },
  {
    icon: Camera,
    title: 'Photo Spots',
    description: 'Discover the best locations for photography'
  },
  {
    icon: Users,
    title: 'Live Guides',
    description: 'Expert guides providing real-time insights'
  },
  {
    icon: Play,
    title: 'On-Demand',
    description: 'Access tours anytime, anywhere'
  }
];

const VirtualTours = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-[hsl(var(--neon-primary))]/10 text-[hsl(var(--neon-primary))] text-sm font-medium inline-block mb-6">
              Explore the World Virtually
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Immersive Virtual Tours
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Step into breathtaking destinations from the comfort of your home. Experience the world in stunning 360° views with expert guides.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:border-[hsl(var(--neon-primary))] transition-colors duration-300">
                View All Tours
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-primary))]/20 to-transparent rounded-2xl"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                alt="Virtual Tour Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-[hsl(var(--neon-primary))] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Destinations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-white">{destination.rating}</span>
                    </div>
                    <span className="text-white">{destination.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(var(--neon-primary))] font-bold">{destination.price}</span>
                    <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-[hsl(var(--neon-primary))] transition-colors duration-300">
                      View Tour
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid with Icons */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tourFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 hover:border-[hsl(var(--neon-primary))]/50 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[hsl(var(--neon-primary))]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section with Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
            <p className="text-gray-400 mb-6">
              Join thousands of travelers who have experienced the world through our virtual tours.
              Start your journey today and discover new destinations from the comfort of your home.
            </p>
            <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-[hsl(var(--neon-primary))] mb-2">500+</div>
              <div className="text-gray-400">Destinations</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-[hsl(var(--neon-primary))] mb-2">1M+</div>
              <div className="text-gray-400">Virtual Tours</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-[hsl(var(--neon-primary))] mb-2">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-[hsl(var(--neon-primary))] mb-2">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualTours; 