import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary-500/20 bg-dark-100/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">StreamsSell</h3>
            <p className="text-gray-400">
              Revolutionizing travel commerce with AI and blockchain technology.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-primary-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/features" className="hover:text-primary-400 transition-colors duration-200">Features</Link></li>
              <li><Link to="/packages" className="hover:text-primary-400 transition-colors duration-200">Packages</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-primary-400">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-primary-400 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-400 transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-primary-400 transition-colors duration-200">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-primary-400">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:shadow-glow">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:shadow-glow">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:shadow-glow">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-500/20 text-center text-gray-400">
          <p>&copy; 2025 StreamsSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 