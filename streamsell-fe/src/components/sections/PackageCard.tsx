import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

interface PackageCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
}

const PackageCard = ({ title, price, image, features }: PackageCardProps) => {
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
      className="bg-dark-200/50 backdrop-blur-lg rounded-xl overflow-hidden border border-primary-500/20 hover:shadow-glow transition-all duration-300"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">{title}</h3>
        <p className="text-2xl font-bold mb-4 text-primary-400">{price}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary-400" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-2 px-4 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PackageCard; 