import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import Button from './Button';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-blue min-h-screen pt-24 pb-20 selection:bg-brand-orange selection:text-white relative overflow-hidden">
      
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Information Node */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-8">
              <MessageSquare size={14} /> Initiate Communication
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Deploy</span> <br/>
              Your Solution?
            </h1>
            
            <p className="text-slate-400 text-lg mb-12 max-w-xl leading-relaxed">
              Connect with our engineering and strategy teams. Whether you need a consultation, a quote, or technical support, we are online and ready.
            </p>

            {/* Trust Signal Widget */}
            <div className="mb-12 p-4 rounded-xl bg-slate-800/50 border border-white/10 backdrop-blur-sm flex items-center justify-between max-w-md">
               <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Systems Operational</p>
                    <p className="text-xs text-slate-400">Support Team Online</p>
                  </div>
               </div>
               <div className="text-right">
                  <p className="text-brand-orange text-xs font-bold">Avg. Response</p>
                  <p className="text-white text-sm font-mono">&lt; 2 Hours</p>
               </div>
            </div>

            {/* Office Nodes */}
            <div className="space-y-6">
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Global Presence</p>
               
               {/* Node 1 */}
               <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-orange transition-colors">Bangalore HQ</h3>
                        <p className="text-slate-400 text-sm mb-3">#45, Tech Park Road, Electronic City Phase 1, Bangalore, Karnataka 560100</p>
                        <div className="flex gap-6 text-xs font-medium text-slate-500">
                           <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><Clock size={12}/> 9:00 AM - 6:00 PM IST</span>
                           <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><ArrowRight size={12}/> Get Directions</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Node 2 */}
               <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Globe size={24} />
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-orange transition-colors">Chennai Office</h3>
                        <p className="text-slate-400 text-sm mb-3">Suite 12, Bayview Tower, OMR IT Corridor, Chennai, Tamil Nadu 600096</p>
                        <div className="flex gap-6 text-xs font-medium text-slate-500">
                           <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><Clock size={12}/> 9:00 AM - 6:00 PM IST</span>
                           <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"><ArrowRight size={12}/> Get Directions</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Direct Contact */}
            <div className="mt-12 flex flex-col sm:flex-row gap-8 pt-8 border-t border-white/10">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                     <Mail size={18} />
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">New Projects</p>
                     <a href="mailto:info@aheadservices.in" className="text-white font-medium hover:text-brand-orange transition-colors">info@aheadservices.in</a>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                     <Phone size={18} />
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">Urgent Support</p>
                     <a href="tel:+919884208208" className="text-white font-medium hover:text-brand-orange transition-colors">+91 9884 208208</a>
                  </div>
               </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="relative animate-fade-in-up delay-100">
             <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-blue-600 rounded-2xl opacity-20 blur-lg"></div>
             <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-brand-orange" /> 
                  Secure Inquiry Form
                </h3>
                
                <form className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="John Doe"
                           className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
                         <input 
                           type="email" 
                           placeholder="name@company.com"
                           className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone</label>
                         <input 
                           type="tel" 
                           placeholder="+91 99999 99999"
                           className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Department</label>
                         <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all appearance-none">
                            <option>Sales / Consultation</option>
                            <option>Technical Support</option>
                            <option>Partnership</option>
                            <option>Careers</option>
                         </select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                      <textarea 
                        rows={4} 
                        placeholder="Tell us about your project requirements..."
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none"
                      ></textarea>
                   </div>

                   <div className="flex items-start gap-3 pt-2">
                      <div className="flex items-center h-5">
                        <input id="consent" type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-brand-orange focus:ring-offset-slate-900 focus:ring-brand-orange" />
                      </div>
                      <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                        I agree to Ahead Services <a href="#" className="text-brand-orange hover:underline">Privacy Policy</a>. We do not share your data with third parties.
                      </label>
                   </div>

                   <Button variant="primary" size="lg" className="w-full gap-2 group">
                      Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
                   </Button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;