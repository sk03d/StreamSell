import { LucideIcon } from 'lucide-react';

interface TechLogoProps {
  icon: LucideIcon;
  name: string;
}

const TechLogo = ({ icon: Icon, name }: TechLogoProps) => (
  <div className="flex flex-col items-center gap-2 p-4">
    <div className="w-12 h-12 text-[hsl(var(--neon-primary))]">
      <Icon className="w-full h-full" />
    </div>
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

export default TechLogo; 