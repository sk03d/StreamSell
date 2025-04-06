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

export default PackageCard; 