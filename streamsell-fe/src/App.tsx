import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, Shield, Globe, Zap, ChevronDown, Blocks, Wallet, MapPin,
  Plane, Building2, Users, MessageSquare, Star, ArrowRight, Send,
  Phone, Mail, MapPinned, Github, Linkedin, Twitter
} from 'lucide-react';
import backimage from '../assets/pics/back.jpeg';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10 neon-border"
    >
      <Icon className="w-8 h-8 mb-4 text-[hsl(var(--neon-primary))]" />
      <h3 className="text-xl font-bold mb-2 text-glow">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const PackageCard = ({ title, price, features, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-black/40 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-[hsl(var(--neon-primary))] transition-colors"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-glow">{title}</h3>
        <p className="text-2xl font-bold mb-4 text-[hsl(var(--neon-primary))]">{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[hsl(var(--neon-primary))]" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 bg-[hsl(var(--neon-primary))] text-black font-bold py-2 px-4 rounded-lg"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, company, content, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-glow">{name}</h4>
          <p className="text-sm text-gray-400">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
};

const TechLogo = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center gap-2 p-4">
    <Icon className="w-12 h-12 text-[hsl(var(--neon-primary))]" />
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${backimage})` }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"> {/* Overlay and Blur */}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            {/* Rotating Logo */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <Blocks className="w-full h-full text-[hsl(var(--neon-primary))]" />
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-glow text-white">
              StreamSell 24
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Revolutionizing Live Travel Commerce with AI & Blockchain
            </p>

            {/* Button */}
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
            <TechLogo icon={Brain} name="OpenAI" />
            <TechLogo icon={Blocks} name="Blockchain" />
            <TechLogo icon={Globe} name="AWS" />
            <TechLogo icon={Zap} name="Quantum" />
            <TechLogo icon={Shield} name="Security" />
            <TechLogo icon={MapPin} name="Geofencing" />
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

      {/* Contact Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                    <span>contact@streamssell.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinned className="w-6 h-6 text-[hsl(var(--neon-primary))]" />
                    <span>123 Innovation Drive, Tech City</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-[hsl(var(--neon-primary))]"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-[hsl(var(--neon-primary))]"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="text-[hsl(var(--neon-primary))]"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[hsl(var(--neon-primary))]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[hsl(var(--neon-primary))]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[hsl(var(--neon-primary))]"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[hsl(var(--neon-primary))] text-black font-bold py-3 px-8 rounded-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </div>
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StreamsSell</h3>
              <p className="text-gray-400">
                Revolutionizing travel commerce with AI and blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">About Us</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Features</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Packages</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[hsl(var(--neon-primary))]">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-primary))]">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-primary))]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[hsl(var(--neon-primary))]">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 StreamsSell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
