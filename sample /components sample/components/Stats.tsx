import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '40%', label: 'Downtime Reduction', description: 'Predictive maintenance' },
  { value: '80%', label: 'Risk Mitigation', description: 'Cybersecurity protocols' },
  { value: '100%', label: 'Tailored Solutions', description: 'Custom architectures' },
  { value: '24/7', label: 'SOC Monitoring', description: 'Always-on vigilance' },
];

const Stats: React.FC = () => {
  return (
    <section className="relative -mt-20 z-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Glass HUD Container */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-white/10 p-8 lg:p-12 relative overflow-hidden">
            
            {/* Top Highlight Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center px-4 ${index % 2 !== 0 ? 'border-l md:border-l-0 border-white/5 md:border-none' : ''}`}>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    {stat.value}
                  </div>
                  <h3 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1">{stat.label}</h3>
                  <p className="text-xs text-slate-400">{stat.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;