import React from 'react';
import { ServiceItem } from '../types';
import { Cloud, Shield, Cpu, BrainCircuit, Blocks, Server, ArrowRight, Laptop } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and migration services for modern businesses. AWS, Azure, & Hybrid.',
    icon: Cloud,
    href: '#'
  },
  {
    title: 'Cybersecurity',
    description: 'Enterprise-grade security assessments, SOC monitoring, and threat prevention protocols.',
    icon: Shield,
    href: '#'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Harness AI to automate processes, gain insights, and predict market trends.',
    icon: BrainCircuit,
    href: '#'
  },
  {
    title: 'Blockchain',
    description: 'Secure, transparent blockchain solutions for DApps and smart contracts.',
    icon: Blocks,
    href: '#'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs with agile methodologies.',
    icon: Laptop,
    href: '#'
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust network architecture ensuring high availability and zero-latency performance.',
    icon: Server,
    href: '#'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-blue relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
       
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">Core Capabilities</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Excellence in <span className="text-brand-orange">Technology</span></h2>
          <p className="text-slate-400 text-lg">
            Comprehensive technology solutions designed to drive innovation and accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-14 h-14 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange/50 group-hover:shadow-lg group-hover:shadow-brand-orange/20 transition-all duration-300">
                <service.icon size={28} strokeWidth={1.5} className="text-slate-300 group-hover:text-brand-orange transition-colors" />
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
              <p className="relative z-10 text-slate-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <a href={service.href} className="relative z-10 inline-flex items-center text-sm font-bold text-white group-hover:text-brand-orange transition-colors">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;