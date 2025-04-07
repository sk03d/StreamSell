import { motion } from 'framer-motion';
import { Shield, Coins, Globe, ArrowRight, Star, Users, Lock, Wallet, Smartphone, CreditCard } from 'lucide-react';

const features = [
  {
    id: 'secure-bookings',
    title: 'Secure Bookings',
    description: 'Every transaction is secured on the blockchain',
    icon: Shield,
    details: 'Immutable records and smart contracts ensure your bookings are protected.',
    stats: [
      { label: 'Transactions', value: '1M+' },
      { label: 'Success Rate', value: '99.99%' },
      { label: 'Security Score', value: 'A+' }
    ]
  },
  {
    id: 'crypto-payments',
    title: 'Crypto Payments',
    description: 'Pay with your favorite cryptocurrencies',
    icon: Coins,
    details: 'Support for multiple cryptocurrencies with instant conversion.',
    stats: [
      { label: 'Currencies', value: '50+' },
      { label: 'Exchange Rate', value: 'Real-time' },
      { label: 'Transaction Fee', value: '<1%' }
    ]
  },
  {
    id: 'global-access',
    title: 'Global Access',
    description: 'Access travel packages worldwide',
    icon: Globe,
    details: 'Break down geographical barriers with our decentralized marketplace.',
    stats: [
      { label: 'Countries', value: '200+' },
      { label: 'Providers', value: '10K+' },
      { label: 'Languages', value: '30+' }
    ]
  }
];

const paymentMethods = [
  {
    icon: Wallet,
    title: 'Crypto Wallets',
    description: 'Connect your favorite crypto wallet'
  },
  {
    icon: Smartphone,
    title: 'Mobile Payments',
    description: 'Pay with your mobile device'
  },
  {
    icon: CreditCard,
    title: 'Traditional Cards',
    description: 'Use your credit or debit card'
  }
];

const BlockchainPackages = () => {
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
              Powered by Blockchain
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Secure Your Travel with Blockchain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Experience the future of travel booking with secure, transparent, and decentralized solutions
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30 hover:border-[hsl(var(--neon-primary))]/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[hsl(var(--neon-primary))]" />
                </div>
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

        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Flexible Payment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-black/30"
              >
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--neon-primary))]/20 flex items-center justify-center">
                    <method.icon className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-white">{method.title}</h3>
                </div>
                <p className="text-gray-400">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Your Security is Our Priority</h2>
              <p className="text-gray-400 mb-6">
                We use advanced blockchain technology to ensure every transaction is secure and transparent.
                Your personal data and payment information are protected with enterprise-grade encryption.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  <span className="ml-2 text-white">256-bit Encryption</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[hsl(var(--neon-primary))]" />
                  <span className="ml-2 text-white">Smart Contracts</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-xl backdrop-blur-lg border border-[hsl(var(--neon-primary))]/20 bg-black/30"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">End-to-end encryption</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Multi-factor authentication</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Regular security audits</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-primary))] mr-3" />
                  <span className="text-gray-300">Decentralized storage</span>
                </li>
              </ul>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Securely?</h2>
          <p className="text-gray-400 mb-6">Join thousands of travelers who trust our blockchain-powered platform.</p>
          <button className="px-8 py-4 bg-[hsl(var(--neon-primary))] text-white rounded-lg font-medium hover:bg-[hsl(var(--neon-primary))]/90 transition-colors duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlockchainPackages; 