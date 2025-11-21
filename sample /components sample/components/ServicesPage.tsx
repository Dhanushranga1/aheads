import React, { useState, useEffect } from 'react';
import { Monitor, Server, Briefcase, Lightbulb, Wifi, Camera, Cloud, Phone, ShieldCheck, ArrowRight, CheckCircle2, Zap, ChevronRight, Layers, Code, Database } from 'lucide-react';
import Button from './Button';

const serviceCategories = [
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'The backbone of your digital enterprise.',
    services: [
      {
        title: 'IT Support & Management',
        desc: '24/7 proactive monitoring, hardware procurement, and onsite technical support to ensure zero downtime.',
        icon: Monitor,
        features: ['Remote Monitoring', 'Asset Management', 'L1/L2/L3 Support']
      },
      {
        title: 'System Integration',
        desc: 'Unifying complex hardware and software subsystems into a single, cohesive ecosystem.',
        icon: Server,
        features: ['API Management', 'Legacy Modernization', 'Data Sync']
      }
    ]
  },
  {
    id: 'digital',
    title: 'Digital Cloud',
    description: 'Scalable solutions for the modern era.',
    services: [
      {
        title: 'Cloud Computing',
        desc: 'End-to-end cloud migration and management on AWS, Azure, and Google Cloud Platform.',
        icon: Cloud,
        features: ['Migration Strategy', 'Cost Optimization', 'Hybrid Cloud']
      },
      {
        title: 'IoT & Smart Solutions',
        desc: 'Connecting physical assets to digital intelligence for real-time data and automation.',
        icon: Wifi,
        features: ['Industrial IoT', 'Smart Office', 'Sensor Analytics']
      }
    ]
  },
  {
    id: 'security',
    title: 'Cyber Defense',
    description: 'Protecting your assets from evolving threats.',
    services: [
      {
        title: 'Advanced Surveillance',
        desc: 'Next-gen IP surveillance with AI-powered video analytics for perimeter security.',
        icon: Camera,
        features: ['Facial Recognition', 'Motion Detection', 'Remote Access']
      },
      {
        title: 'Cybersecurity',
        desc: 'Fortress-level security protocols including VAPT, SOC monitoring, and compliance.',
        icon: ShieldCheck,
        features: ['Threat Hunting', 'Vulnerability Audit', 'Zero Trust']
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Advisory',
    description: 'Strategic guidance for technical excellence.',
    services: [
      {
        title: 'Digital Transformation',
        desc: 'Roadmapping your journey from legacy systems to future-ready digital operations.',
        icon: Lightbulb,
        features: ['Tech Roadmap', 'Process Audit', 'ROI Analysis']
      },
      {
        title: 'Unified Comms',
        desc: 'Seamless communication channels combining VoIP, video, and messaging.',
        icon: Phone,
        features: ['VoIP Solutions', 'Video Conferencing', 'Contact Center']
      }
    ]
  }
];

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('infrastructure');

  // Simple scroll spy to update active category
  useEffect(() => {
    const handleScroll = () => {
      const sections = serviceCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200; // Offset

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveCategory(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-blue min-h-screen selection:bg-brand-orange selection:text-white relative">
      
      {/* Global Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none fixed h-full w-full"></div>

      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
         {/* Background Glows */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-sm animate-fade-in-up">
              <Zap size={14} /> Global Delivery Model
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
              Capabilities tailored for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">Enterprise Growth</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl animate-fade-in-up delay-200">
              We combine deep industry expertise with a comprehensive technology portfolio to deliver solutions that drive performance, scalability, and security.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Sub-navigation */}
      <div className="sticky top-[72px] z-30 bg-brand-blue/90 backdrop-blur-md border-b border-white/5 shadow-lg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 lg:gap-8 overflow-x-auto no-scrollbar py-4">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`whitespace-nowrap text-sm font-bold transition-all duration-300 px-5 py-2.5 rounded-full border ${
                  activeCategory === cat.id
                    ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-20 space-y-32 relative z-10">
        {serviceCategories.map((category, idx) => (
          <div key={category.id} id={category.id} className="scroll-mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Category Header */}
              <div className="lg:col-span-4 lg:sticky lg:top-56 h-fit">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-brand-orange"></div>
                    <span className="text-brand-orange font-mono text-sm uppercase tracking-widest">0{idx + 1}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{category.description}</p>
                
                {/* Decorative Graphic */}
                <div className="hidden lg:block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Layers className="text-slate-600 w-12 h-12 mb-4 group-hover:text-brand-orange transition-colors" />
                    <div className="space-y-2">
                        <div className="h-2 w-2/3 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-orange w-0 group-hover:w-full transition-all duration-1000 delay-100"></div>
                        </div>
                        <div className="h-2 w-1/2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-orange w-0 group-hover:w-full transition-all duration-1000 delay-200"></div>
                        </div>
                    </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, sIdx) => (
                  <div key={sIdx} className="group relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-brand-orange/30 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/60">
                    {/* Top Light Effect */}
                    <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-14 h-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-slate-300 group-hover:text-brand-orange group-hover:border-brand-orange/50 transition-all duration-300 shadow-lg group-hover:shadow-brand-orange/20">
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                      {service.desc}
                    </p>
                    
                    <div className="space-y-3 mb-8 border-t border-white/5 pt-6">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-xs font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                          <CheckCircle2 size={14} className="text-brand-orange/60 group-hover:text-brand-orange transition-colors" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a href="#" className="inline-flex items-center text-sm font-bold text-slate-300 group-hover:text-brand-orange transition-colors">
                      View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-brand-blue to-slate-900 py-24 mt-20 border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Not sure where to start?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Our certified consultants can audit your current infrastructure and propose a roadmap tailored to your business goals.
            </p>
            <Button variant="primary" size="lg" className="shadow-xl shadow-brand-orange/20">Book a Free Consultation</Button>
         </div>
      </div>
    </div>
  );
};

export default ServicesPage;