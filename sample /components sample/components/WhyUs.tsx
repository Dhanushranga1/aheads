import React from 'react';
import { Search, PencilRuler, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Audit & Consulting',
    description: 'We deep-dive into your existing infrastructure, identify bottlenecks, and define clear technical objectives.',
    icon: Search
  },
  {
    number: '02',
    title: 'Architect',
    subtitle: 'Solution Design',
    description: 'Our engineers draft a secure, scalable blueprint tailored to your specific enterprise needs.',
    icon: PencilRuler
  },
  {
    number: '03',
    title: 'Deploy',
    subtitle: 'Agile Implementation',
    description: 'We execute the migration or development using agile sprints with minimal downtime.',
    icon: Rocket
  },
  {
    number: '04',
    title: 'Evolve',
    subtitle: '24/7 Management',
    description: 'Technology never stops. We provide continuous SOC monitoring and strategic updates.',
    icon: RefreshCw
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="execution-framework" className="py-24 bg-brand-blue relative overflow-hidden border-t border-white/5">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>

       <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
               <ArrowRight size={14} /> Our Methodology
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Framework</span></h2>
             <p className="text-slate-400 text-lg leading-relaxed">
               We don't just fix problems; we implement a proven, repeatable 4-stage methodology that ensures long-term success.
             </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
             {/* Connector Line (Desktop Only) */}
             <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-700 z-0 opacity-50"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {steps.map((step, index) => (
                   <div key={index} className="relative z-10 group flex flex-col items-center text-center">
                      
                      {/* Icon Container */}
                      <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-slate-800 shadow-xl shadow-black/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-orange group-hover:bg-brand-orange transition-all duration-300 relative">
                         <step.icon size={32} className="text-slate-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                      </div>

                      {/* Content Card */}
                      <div className="w-full bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:bg-slate-800/80 hover:border-brand-orange/30 transition-all duration-300 group-hover:-translate-y-2 h-full">
                         <div className="text-4xl font-extrabold text-white/5 mb-4 font-mono group-hover:text-brand-orange/20 transition-colors">
                            {step.number}
                         </div>
                         <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                         <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">{step.subtitle}</p>
                         <p className="text-slate-400 text-sm leading-relaxed">
                           {step.description}
                         </p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default WhyUs;