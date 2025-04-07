import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const features = [
    {
      title: 'Travel & Tourism',
      items: [
        { name: 'AR/VR Travel Previews', path: '/ar-vr-travel' },
        { name: 'Blockchain Packages', path: '/blockchain-packages' },
        { name: 'Location Deals', path: '/location-deals' }
      ]
    },
    {
      title: 'Live Selling',
      items: [
        { name: 'Interactive Streams', path: '/interactive-streams' },
        { name: 'Real-time Chat', path: '/real-time-chat' },
        { name: 'Virtual Tours', path: '/virtual-tours' }
      ]
    },
    {
      title: 'Advanced Tech',
      items: [
        { name: 'Web3 Integration', path: '/web3-integration' },
        { name: 'AI Personalization', path: '/ai-personalization' },
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'IoT Features', path: '/iot-features' }
      ]
    }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (sectionItems: { path: string }[]) => {
    return sectionItems.some(item => isActivePath(item.path));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div 
              className="flex-shrink-0 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/StreamSell_logo.png" 
                alt="StreamSell Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Link to="/" className="text-2xl font-bold text-[hsl(var(--neon-primary))] hover:text-[hsl(var(--neon-primary))] hover:brightness-125 transition-all duration-300">
                StreamSell24
              </Link>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {features.map((feature, index) => (
              <div
                key={index} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(feature.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.button
                  className={`px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden ${
                    isActiveSection(feature.items)
                      ? 'text-[hsl(var(--neon-primary))]'
                      : 'text-gray-300 hover:text-[hsl(var(--neon-primary))]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{feature.title}</span>
                  <motion.div
                    className="absolute inset-0 bg-[hsl(var(--neon-primary))] opacity-0 group-hover:opacity-10 rounded-md"
                    initial={false}
                    animate={{ scale: hoveredItem === feature.title ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
                <AnimatePresence>
                  {hoveredItem === feature.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-black/70 backdrop-blur-lg rounded-md shadow-lg border border-white/10 z-50"
                    >
                      <div className="py-1">
                        {feature.items.map((item) => (
                          <motion.div
                            key={item.name}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              to={item.path}
                              className={`block px-4 py-2 text-sm transition-all duration-200 ${
                                isActivePath(item.path)
                                  ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                                  : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                              }`}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Account dropdown */}
          <div className="hidden sm:flex sm:items-center sm:ml-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden ${
                  isActivePath('/login') || isActivePath('/signup')
                    ? 'text-[hsl(var(--neon-primary))]'
                    : 'text-gray-300 hover:text-[hsl(var(--neon-primary))]'
                }`}
              >
                <span className="relative z-10">Account</span>
                <motion.div
                  className="absolute inset-0 bg-[hsl(var(--neon-primary))] opacity-0 hover:opacity-10 rounded-md"
                  initial={false}
                  animate={{ scale: isAuthOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  animate={{ rotate: isAuthOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 ml-2" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isAuthOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-black/70 backdrop-blur-lg rounded-md shadow-lg border border-white/10 z-50"
                  >
                    <div className="py-1">
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          to="/login"
                          className={`block px-4 py-2 text-sm transition-all duration-200 ${
                            isActivePath('/login')
                              ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                              : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                          }`}
                        >
                          Login
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          to="/signup"
                          className={`block px-4 py-2 text-sm transition-all duration-200 ${
                            isActivePath('/signup')
                              ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                              : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                          }`}
                        >
                          Sign Up
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-[hsl(var(--neon-primary))] focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-black/70 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {features.map((feature, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-gray-400 px-3 py-2 text-sm font-medium">
                    {feature.title}
                  </div>
                  {feature.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-2 text-sm transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                          : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="border-t border-white/10 pt-2">
                <Link
                  to="/login"
                  className={`block px-3 py-2 text-sm transition-all duration-200 ${
                    isActivePath('/login')
                      ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                      : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`block px-3 py-2 text-sm transition-all duration-200 ${
                    isActivePath('/signup')
                      ? 'text-[hsl(var(--neon-primary))] bg-white/5'
                      : 'text-gray-300 hover:text-[hsl(var(--neon-primary))] hover:bg-white/5'
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
