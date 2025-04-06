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

export default TestimonialCard; 