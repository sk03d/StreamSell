import { motion } from 'framer-motion';
import { MessageSquare, Users, Globe, Shield, Bell, Send, ArrowRight, Star, Clock, Zap, ChevronRight } from 'lucide-react';

const chatTypes = [
  {
    title: 'One-on-One Chat',
    description: 'Private conversations with customers',
    icon: MessageSquare,
    color: 'bg-blue-500/20 text-blue-400',
    features: ['Secure Messaging', 'File Sharing', 'Read Receipts']
  },
  {
    title: 'Group Chat',
    description: 'Connect with multiple users',
    icon: Users,
    color: 'bg-purple-500/20 text-purple-400',
    features: ['Up to 100 Members', 'Admin Controls', 'Message History']
  },
  {
    title: 'Global Chat',
    description: 'Worldwide communication',
    icon: Globe,
    color: 'bg-green-500/20 text-green-400',
    features: ['50+ Languages', 'Auto-Translation', 'Time Zone Support']
  }
];

const chatFeatures = [
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'Your messages are secure and private'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Customizable alerts for important messages'
  },
  {
    icon: Send,
    title: 'Quick Replies',
    description: 'Predefined responses for faster communication'
  },
  {
    icon: Clock,
    title: 'Message History',
    description: 'Access your chat history anytime'
  }
];

const RealTimeChat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Chat Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-[hsl(var(--neon-primary))]/10 text-[hsl(var(--neon-primary))] text-sm font-medium inline-block mb-6">
              Live Communication
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Real-time Chat
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect instantly with your audience through secure, real-time messaging. Build relationships and provide support when it matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center">
                Start Chatting
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:border-[hsl(var(--neon-primary))] transition-colors duration-300">
                Learn More
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
            <div className="relative p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-black/30">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-white font-medium">Support Team</h3>
                    <p className="text-gray-400 text-sm">Online</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-[hsl(var(--neon-primary))]/20 transition-colors duration-300">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-[hsl(var(--neon-primary))]/20 transition-colors duration-300">
                    <Users className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-gray-600 flex-shrink-0"></div>
                  <div className="ml-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-white">Hello! How can I help you today?</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">2:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="mr-3 text-right">
                    <div className="bg-[hsl(var(--neon-primary))]/20 rounded-lg p-3">
                      <p className="text-white">I need help with my order</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">2:31 PM</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[hsl(var(--neon-primary))]/20 flex-shrink-0"></div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[hsl(var(--neon-primary))]"
                />
                <button className="ml-2 p-2 rounded-lg bg-[hsl(var(--neon-primary))] text-white hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chat Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Chat Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chatTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30"
              >
                <div className={`h-16 w-16 rounded-full ${type.color} flex items-center justify-center mb-6`}>
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Zap className="h-4 w-4 text-[hsl(var(--neon-primary))] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {chatFeatures.map((feature, index) => (
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-12 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start Chatting Today</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our real-time chat platform for secure and instant communication.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">1M+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">50+</div>
                <div className="text-gray-400">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[hsl(var(--neon-primary))] mb-2">4.8</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
            <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center mx-auto">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RealTimeChat; 