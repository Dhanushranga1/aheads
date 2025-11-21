import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { NavItem, View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Integrations', id: 'integrations' },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-md border-white/5 py-3 shadow-lg shadow-black/5' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo Area */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 group relative z-50"
            >
               <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-orange to-brand-orangeDark shadow-lg shadow-brand-orange/20 group-hover:shadow-brand-orange/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-white font-bold text-xl relative z-10">AS</span>
               </div>
               <div className="flex flex-col leading-tight text-left">
                  <span className="font-bold text-lg tracking-tight text-white group-hover:text-brand-orange transition-colors">Ahead Services</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-slate-300 transition-colors">Private Limited</span>
               </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-sm mr-6">
                {NAV_ITEMS.map((item) => (
                  <button 
                    key={item.label} 
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      currentView === item.id 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {currentView === item.id && (
                      <span className="absolute inset-0 bg-white/10 rounded-full animate-fade-in-up" style={{ animationDuration: '0.3s' }}></span>
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {item.label}
                      {currentView === item.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>}
                    </span>
                  </button>
                ))}
              </div>
              
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => handleNavClick('contact')}
                className="shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-brand-orange transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="space-y-6 relative z-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-4 block">Menu</span>
          
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <button 
                key={item.label} 
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center justify-between text-3xl font-bold py-4 transition-all duration-300 ${
                  currentView === item.id ? 'text-white' : 'text-slate-500 hover:text-white'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="flex items-center gap-4">
                  <span className={`text-sm font-mono mt-2 ${currentView === item.id ? 'text-brand-orange' : 'text-slate-700 group-hover:text-slate-500'}`}>0{idx + 1}</span>
                  {item.label}
                </span>
                <ArrowUpRight 
                  className={`transition-transform duration-300 ${
                    currentView === item.id ? 'rotate-45 text-brand-orange' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                  }`} 
                />
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
             <Button className="w-full justify-between group" size="lg" onClick={() => handleNavClick('contact')}>
                Contact Us
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
             </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;