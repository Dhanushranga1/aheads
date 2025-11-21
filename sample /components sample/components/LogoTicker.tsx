import React from 'react';
import { Hexagon, Triangle, Circle, Box, Layers, Command, CloudLightning, Globe } from 'lucide-react';

const logos = [
  { name: 'TechCorp', icon: Hexagon },
  { name: 'Innovate', icon: Triangle },
  { name: 'GlobalSystems', icon: Globe },
  { name: 'CloudNine', icon: CloudLightning },
  { name: 'Nexus', icon: Layers },
  { name: 'Vertex', icon: Box },
  { name: 'Command', icon: Command },
  { name: 'Echo', icon: Circle },
];

const LogoTicker: React.FC = () => {
  return (
    <section className="py-12 bg-brand-blue border-b border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 mb-8 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      
      <div className="flex relative overflow-hidden group">
        {/* Dark Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-brand-blue to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-brand-blue to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex animate-scroll gap-16 whitespace-nowrap py-4">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 group/logo cursor-default opacity-30 hover:opacity-100 transition-opacity duration-300">
              <logo.icon size={32} className="text-slate-300 group-hover/logo:text-brand-orange transition-colors" strokeWidth={1.5} />
              <span className="text-xl font-bold text-slate-300 group-hover/logo:text-white transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;