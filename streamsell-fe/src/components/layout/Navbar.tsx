import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const features = [
    {
      title: 'Travel & Tourism',
      items: ['AR/VR Travel Previews', 'Blockchain Packages', 'Location Deals']
    },
    {
      title: 'Live Selling',
      items: ['Interactive Streams', 'Real-time Chat', 'Virtual Tours']
    },
    {
      title: 'Advanced Tech',
      items: ['Web3 Integration', 'AI Personalization', 'Quantum Computing', 'IoT Features']
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-lg border-b border-primary-500/20">
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
              <Link to="/" className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent hover:shadow-glow transition-all duration-300">
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
                  className="text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{feature.title}</span>
                  <motion.div
                    className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 rounded-md"
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
                      className="absolute left-0 mt-2 w-48 bg-dark-200/90 backdrop-blur-lg rounded-md shadow-glow border border-primary-500/20 z-50"
                    >
                      <div className="py-1">
                        {feature.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              to={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200"
                            >
                              {item}
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
                className="flex items-center text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium relative overflow-hidden"
              >
                <span className="relative z-10">
                  {user ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span>{user.username}</span>
                    </div>
                  ) : (
                    'Account'
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary-500/10 opacity-0 hover:opacity-100 rounded-md"
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
                    className="absolute right-0 mt-2 w-48 bg-dark-200/90 backdrop-blur-lg rounded-md shadow-glow border border-primary-500/20 z-50"
                  >
                    <div className="py-1">
                      {user ? (
                        <>
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link
                              to={user?.userType === 'user' ? '/dashboard/user' : '/dashboard/org'}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200"
                              onClick={() => setIsAuthOpen(false)}
                            >
                              Dashboard
                            </Link>
                          </motion.div>
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200"
                            >
                              Sign out
                            </button>
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link
                              to="/select-type"
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-200"
                              onClick={() => setIsAuthOpen(false)}
                            >
                              Login
                            </Link>
                          </motion.div>
                        </>
                      )}
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-primary-400 focus:outline-none"
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
            className="sm:hidden bg-dark-200/90 backdrop-blur-lg border-b border-primary-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {features.map((feature, index) => (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => setHoveredItem(hoveredItem === feature.title ? null : feature.title)}
                    className="flex items-center w-full text-left px-3 py-2 text-gray-300 hover:text-primary-400"
                  >
                    {feature.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {hoveredItem === feature.title && (
                    <div className="pl-4 space-y-1">
                      {feature.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-primary-500/5"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3 border-t border-primary-500/20">
                {user ? (
                  <>
                    <Link
                      to={user?.userType === 'user' ? '/dashboard/user' : '/dashboard/org'}
                      className="block px-3 py-2 text-gray-300 hover:text-primary-400"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-gray-300 hover:text-primary-400"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/select-type"
                    className="block px-3 py-2 text-gray-300 hover:text-primary-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
