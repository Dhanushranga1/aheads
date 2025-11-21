import React from 'react';
import Button from './Button';
import { ArrowRight, Rocket } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background Ambience */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
       
       {/* Central Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
       
       <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl shadow-brand-orange/5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6 border border-brand-orange/20">
              <Rocket size={14} /> Ready for takeoff
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Build Your Secure, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Future-Ready Ecosystem?</span>
            </h2>
            
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Ahead Services for enterprise-ready architectures, cybersecurity-first solutions, and comprehensive IT support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group shadow-lg shadow-brand-orange/25">
                Explore Our Capabilities
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 hover:border-white/30">
                Get In Touch
              </Button>
            </div>
          </div>
       </div>
    </section>
  );
};

export default CTA;