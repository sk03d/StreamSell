import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18192a] via-[#18192a] to-[#1a1b2e] text-white overflow-x-hidden font-sans relative">
      {/* Subtle noise overlay for depth */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: "url('/noise.png')",
        opacity: 0.15,
        mixBlendMode: 'overlay',
      }} />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 