import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight, Send, ChevronRight } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleLinkClick = (e: React.MouseEvent, view: View) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-blue text-slate-300 pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Giant Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[15rem] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        AHEAD
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-orange to-brand-orangeDark rounded-lg shadow-lg shadow-brand-orange/20">
                  <span className="text-white font-bold text-lg">AS</span>
               </div>
               <span className="text-white font-bold text-2xl tracking-tight">Ahead Services</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering enterprises since 2013. We build the secure, scalable, and intelligent digital backbones that drive modern business.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Solutions Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-4 text-sm">
              {['Cloud Computing', 'Cybersecurity', 'AI Solutions', 'Blockchain', 'Infrastructure'].map((item) => (
                <li key={item}>
                  <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-brand-orange transition-colors flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-brand-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-brand-orange transition-colors">About Us</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-brand-orange transition-colors">Careers</button></li>
              <li><button className="hover:text-brand-orange transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-brand-orange transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* Newsletter / Contact Column (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6">Stay Ahead</h3>
            <p className="text-xs text-slate-500 mb-4">Subscribe to our tech insights newsletter.</p>
            
            <div className="relative mb-8">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-orange/50 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-orange hover:bg-brand-orangeDark text-white p-2 rounded-md transition-colors">
                <Send size={14} />
              </button>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4 group">
                <MapPin size={18} className="text-brand-orange mt-1 shrink-0" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Bangalore (HQ) & Chennai, India</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">+91 9884 208208</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">info@aheadservices.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ahead Services Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <p className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                System Status: Operational
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;