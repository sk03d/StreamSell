import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, Shield, Globe, Zap, ChevronDown, Blocks, Wallet, MapPin,
  Plane, Building2, Users, MessageSquare, Star, ArrowRight, Send,
  Phone, Mail, MapPinned, Github, Linkedin, Twitter
} from 'lucide-react';
import FeatureCard from '../components/sections/FeatureCard';
import PackageCard from '../components/sections/PackageCard';
import TestimonialCard from '../components/sections/TestimonialCard';
import TechLogo from '../components/sections/TechLogo';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black via-gray-900 to-black" 
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <Blocks className="w-full h-full text-[hsl(var(--neon-primary))]" />
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-glow text-white">
              StreamSell24
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Revolutionizing Live Travel Commerce with AI & Blockchain
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[hsl(var(--neon-primary))] text-black font-bold py-3 px-8 rounded-full text-lg neon-border"
            >
              Join the Future
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-[hsl(var(--neon-primary))]" />
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-glow">About StreamsSell</h2>
            <p className="text-lg text-gray-300">
              StreamsSell combines cutting-edge AI technology with blockchain security to revolutionize
              the travel commerce industry. Our platform enables real-time, interactive travel experiences
              with quantum-optimized pricing and seamless smart contract transactions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">
            Powered by Future Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Driven Insights"
              description="Advanced algorithms optimize your travel offerings in real-time"
            />
            <FeatureCard
              icon={Blocks}
              title="Blockchain Secured"
              description="Immutable transaction records and smart contract automation"
            />
            <FeatureCard
              icon={Globe}
              title="Global Reach"
              description="Connect with travelers worldwide through our platform"
            />
            <FeatureCard
              icon={Zap}
              title="Quantum Pricing"
              description="Dynamic pricing optimized by quantum computing algorithms"
            />
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">
            Featured Travel Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              title="Luxury Maldives Escape"
              price="$2,999"
              image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80"
              features={[
                "7 Days All-Inclusive",
                "Overwater Villa",
                "AI Travel Assistant",
                "Smart Contract Booking"
              ]}
            />
            <PackageCard
              title="Tokyo Tech Tour"
              price="$1,999"
              image="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
              features={[
                "5 Days Tech Exploration",
                "Robot Restaurant Visit",
                "AR City Guide",
                "Crypto Payments Accepted"
              ]}
            />
            <PackageCard
              title="Swiss Alps Adventure"
              price="$3,499"
              image="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=800&q=80"
              features={[
                "10 Days Mountain Experience",
                "Luxury Chalets",
                "VR Preview Tours",
                "Dynamic Weather Pricing"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Live Selling Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6 text-glow">Live Selling Revolution</h2>
              <p className="text-lg text-gray-300 mb-6">
                Transform your travel business with interactive live streams, real-time bookings,
                and AI-powered engagement tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                  <span>Geofencing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                  <span>Smart Contracts</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Future Technology"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">
            Powered By Advanced Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <TechLogo icon={Brain} name="AI & ML" />
            <TechLogo icon={Blocks} name="Blockchain" />
            <TechLogo icon={Globe} name="Cloud" />
            <TechLogo icon={Zap} name="Real-time" />
            <TechLogo icon={Shield} name="Security" />
            <TechLogo icon={MapPin} name="Location" />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Chen"
              role="Travel Director"
              company="Global Adventures"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
              content="StreamsSell has revolutionized how we conduct virtual tours. The AI-powered engagement tools have increased our booking rates by 300%."
            />
            <TestimonialCard
              name="James Wilson"
              role="CEO"
              company="TechTravel Inc"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
              content="The blockchain integration provides unprecedented security and transparency. Our customers love the smart contract feature."
            />
            <TestimonialCard
              name="Elena Rodriguez"
              role="Innovation Lead"
              company="Future Tours"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
              content="The quantum pricing model has optimized our revenue while providing competitive rates to our customers. Simply amazing!"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-black/50 backdrop-blur-lg rounded-2xl p-12 text-center max-w-3xl mx-auto border border-white/10 neon-border"
          >
            <h2 className="text-4xl font-bold mb-6 text-glow">
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join the future of travel commerce with StreamsSell's AI-powered platform
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[hsl(var(--neon-primary))]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[hsl(var(--neon-secondary))] text-white font-bold py-3 px-8 rounded-lg neon-border flex items-center gap-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home; 