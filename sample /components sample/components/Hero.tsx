import React from 'react';
import Button from './Button';
import { ArrowRight, ShieldCheck, Rocket, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 right-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-brand-orange font-medium text-sm">
              <Rocket size={16} />
              <span>Innovative Solutions for a Secure Future</span>
            </div>
            
            <h1 className="animate-fade-in-up delay-100 text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              Transforming Businesses with <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Innovation</span> & Excellence
            </h1>
            
            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 max-w-xl leading-relaxed">
              We don't just deliver solutions; we create <strong>legacies of transformation</strong>. 
              From Telecom to Healthcare, our expertise in AI, Blockchain, and Cloud Technologies empowers industries to excel.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="!border-slate-600 !text-slate-300 hover:!bg-white/5 hover:!border-white hover:!text-white">
                Get a Consultation
              </Button>
            </div>

            <div className="animate-fade-in-up delay-300 pt-8 flex items-center gap-8 text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-brand-orange" /> Enterprise-Ready
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-brand-orange" /> Future-Proof Tech
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative hidden lg:block animate-fade-in-up delay-200">
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 border border-slate-700 shadow-2xl shadow-brand-orange/10 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Digital Transformation Dashboard" 
                className="rounded-xl opacity-90 hover:opacity-100 transition-opacity"
              />
              
              {/* Floating Cards */}
              <div className="absolute -left-8 top-10 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                   <ShieldCheck className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Security Status</p>
                  <p className="text-sm font-bold text-gray-800">100% Secure</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-20 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-blue-100 p-2 rounded-full">
                   <Cpu className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">System Load</p>
                  <p className="text-sm font-bold text-gray-800">Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;