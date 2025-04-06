import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
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
      <div className="w-8 h-8 mb-4 text-[hsl(var(--neon-primary))]">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-glow">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard; 