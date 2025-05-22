import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const TestimonialCard = ({ name, role, company, image, content }: TestimonialCardProps) => {
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
      className="bg-dark-200/50 backdrop-blur-lg p-6 rounded-xl border border-primary-500/20 hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/20" />
        <div>
          <h4 className="font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">{name}</h4>
          <p className="text-sm text-gray-400">{role} at {company}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard; 