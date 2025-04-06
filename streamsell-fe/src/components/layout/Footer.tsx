import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
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
              <li><Link to="/about" className="hover:text-[hsl(var(--neon-primary))]">About Us</Link></li>
              <li><Link to="/features" className="hover:text-[hsl(var(--neon-primary))]">Features</Link></li>
              <li><Link to="/packages" className="hover:text-[hsl(var(--neon-primary))]">Packages</Link></li>
              <li><Link to="/contact" className="hover:text-[hsl(var(--neon-primary))]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/privacy" className="hover:text-[hsl(var(--neon-primary))]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[hsl(var(--neon-primary))]">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-[hsl(var(--neon-primary))]">Cookie Policy</Link></li>
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
  );
};

export default Footer; 