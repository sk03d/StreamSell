import { motion } from 'framer-motion';
import { Video, ShoppingCart, Users, Heart, MessageSquare, Share2, ArrowRight, Star, Clock, Zap } from 'lucide-react';

const streamFeatures = [
  {
    title: 'Live Shopping',
    description: 'Showcase products in real-time with interactive features',
    icon: ShoppingCart,
    color: 'bg-blue-500/20 text-blue-400'
  },
  {
    title: 'Audience Engagement',
    description: 'Connect with viewers through live chat and reactions',
    icon: Users,
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Product Showcase',
    description: 'Highlight products with 360° views and detailed information',
    icon: Video,
    color: 'bg-green-500/20 text-green-400'
  }
];

const upcomingStreams = [
  {
    id: 'fashion-show',
    title: 'Summer Fashion Collection',
    host: 'Fashion House',
    time: 'Today, 3:00 PM',
    viewers: '2.5K',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050'
  },
  {
    id: 'tech-review',
    title: 'Latest Tech Gadgets',
    host: 'Tech Reviews',
    time: 'Tomorrow, 2:00 PM',
    viewers: '1.8K',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    id: 'beauty-tips',
    title: 'Beauty Tips & Tricks',
    host: 'Beauty Expert',
    time: 'Tomorrow, 4:00 PM',
    viewers: '3.2K',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348'
  }
];

const InteractiveStreams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Video Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-primary))]/20 to-transparent rounded-2xl"></div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17"
              alt="Live Stream Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 rounded-full bg-[hsl(var(--neon-primary))]/10 text-[hsl(var(--neon-primary))] text-sm font-medium">
                    Live Selling Platform
                  </span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                >
                  Interactive Streams
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                >
                  Engage with your audience in real-time and showcase your products through interactive live streams
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  <button className="px-6 py-3 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-all duration-300 flex items-center transform hover:scale-[1.02]">
                    Start Streaming
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:border-[hsl(var(--neon-primary))] transition-all duration-300 transform hover:scale-[1.02]">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Streams */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold text-white mb-12">Upcoming Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingStreams.map((stream) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="relative overflow-hidden">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{stream.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">{stream.host}</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-300 mr-1" />
                      <span className="text-gray-300">{stream.viewers}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(var(--neon-primary))]">{stream.time}</span>
                    <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-[hsl(var(--neon-primary))] transition-all duration-300 transform hover:scale-[1.02]">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features with Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 overflow-hidden"
              >
                <div className="transform transition-all duration-500 hover:scale-[1.02]">
                  <div className={`h-16 w-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-400 mr-1" />
                      <span className="text-gray-300">2.5K</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-blue-400 mr-1" />
                      <span className="text-gray-300">1.2K</span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="h-5 w-5 text-green-400 mr-1" />
                      <span className="text-gray-300">800</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-12 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30 overflow-hidden"
        >
          <div className="transform transition-all duration-500 hover:scale-[1.01]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Start Your Live Stream</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are using our platform to connect with their audience and grow their business.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">10K+</div>
                  <div className="text-gray-400">Active Streamers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">1M+</div>
                  <div className="text-gray-400">Daily Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">50K+</div>
                  <div className="text-gray-400">Products Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">4.9</div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
              </div>
              <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-all duration-300 flex items-center mx-auto transform hover:scale-[1.02]">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveStreams; 