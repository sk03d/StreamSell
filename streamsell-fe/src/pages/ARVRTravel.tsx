import { motion } from 'framer-motion';
import { Globe, Map, Camera, Video, ArrowRight, Star, Users, Compass } from 'lucide-react';

const features = [
  {
    id: 'virtual-tours',
    title: 'Virtual Tours',
    description: 'Explore destinations in stunning 360° views',
    icon: Globe,
    details: 'Immerse yourself in breathtaking locations with our high-resolution 360° virtual tours. Experience every angle of your dream destination before you book.',
    stats: [
      { label: 'Destinations', value: '1000+' },
      { label: 'User Rating', value: '4.9/5' },
      { label: 'Active Users', value: '50K+' }
    ]
  },
  {
    id: 'ar-navigation',
    title: 'AR Navigation',
    description: 'Find your way with augmented reality guides',
    icon: Map,
    details: 'Never get lost in a new city. Our AR navigation system overlays directions and points of interest directly onto your real-world view.',
    stats: [
      { label: 'Cities Covered', value: '500+' },
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Languages', value: '20+' }
    ]
  },
  {
    id: 'photo-spots',
    title: 'Photo Spots',
    description: 'Discover the best places to capture memories',
    icon: Camera,
    details: 'Find the most Instagram-worthy locations with our curated photo spot recommendations. Get tips from professional photographers.',
    stats: [
      { label: 'Photo Spots', value: '10K+' },
      { label: 'User Photos', value: '1M+' },
      { label: 'Countries', value: '100+' }
    ]
  },
  {
    id: 'live-streams',
    title: 'Live Streams',
    description: 'Experience destinations in real-time',
    icon: Video,
    details: 'Join live streams from popular destinations and interact with local guides. Get real-time recommendations and insights.',
    stats: [
      { label: 'Daily Streams', value: '100+' },
      { label: 'Viewers', value: '1M+' },
      { label: 'Streamers', value: '500+' }
    ]
  }
];

const ARVRTravel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Experience Travel Like Never Before
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Immerse yourself in destinations through AR and VR technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <button className="px-6 py-3 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300">
              Try Demo
            </button>
            <button className="px-6 py-3 border border-[hsl(var(--neon-primary))] text-[hsl(var(--neon-primary))] rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/10 transition-colors duration-300">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 hover:border-[hsl(var(--neon-primary))]/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-[hsl(var(--neon-primary))]" />
                <h3 className="ml-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {feature.stats.map((stat, index) => (
                  <div key={index} className="p-2 bg-black/20 rounded-lg">
                    <div className="text-[hsl(var(--neon-primary))] font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                  <Compass className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-white">Choose Destination</h3>
              </div>
              <p className="text-gray-400">Select from our extensive list of destinations and experiences.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-white">Connect with Guides</h3>
              </div>
              <p className="text-gray-400">Join live sessions with local experts and fellow travelers.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-white">Book Your Experience</h3>
              </div>
              <p className="text-gray-400">Secure your spot and get ready for an unforgettable journey.</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-gray-400 mb-6">Join thousands of travelers experiencing destinations in a whole new way.</p>
          <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ARVRTravel; 