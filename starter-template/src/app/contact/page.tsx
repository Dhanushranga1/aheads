"use client";

import { useState, useEffect } from "react";
import Footer from "../../sections/FooterNew";
import { 
    MapPin, 
    Mail, 
    Phone, 
    Clock, 
    Navigation,
    Send,
    CheckCircle2
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
    });

    // SEO: Update document metadata for client component
    useEffect(() => {
        document.title = "Contact Ahead Services | Enterprise IT Solutions Partner";
        
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateMeta('description', 'Get in touch with Ahead Services for enterprise technology solutions. Expert consultation for cloud computing, cybersecurity, AI/ML, and IT infrastructure projects. 24/7 support available.');
        updateMeta('keywords', 'contact IT services, enterprise technology consultation, IT support contact, cloud solutions inquiry, cybersecurity consultation, IT infrastructure support');
        
        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://www.aheads.in/contact';
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div className="bg-[#0f172a] min-h-screen pt-20 relative overflow-hidden">
                {/* Data Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                
                {/* Radial spotlight mask */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                    {/* Hero Section */}
                    <div className="mb-16 animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide mb-8">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            INITIATE COMMUNICATION
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to <span className="text-orange-500">Deploy</span><br />Your Solution?
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Connect with our engineering and strategy teams. Whether you need a consultation, a quote, or technical support, we are online and ready.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Information Node */}
                        <div className="space-y-8">
                            {/* System Status Widget */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6 animate-fade-in-up delay-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex items-center">
                                            <span className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                                            <span className="w-3 h-3 bg-green-500 rounded-full relative" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Systems Operational</div>
                                            <div className="text-xs text-slate-400">Support Team Online</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Avg. Response</span>
                                        <span className="text-orange-400 font-semibold">&lt; 2 Hours</span>
                                    </div>
                                </div>
                            </div>

                            {/* Global Presence */}
                            <div className="mb-6 animate-fade-in-up delay-200">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">GLOBAL PRESENCE</h3>
                                <div className="space-y-4">
                                    {/* Bangalore HQ */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                                        <div className="flex items-start gap-3 mb-3">
                                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-white font-bold mb-1">Bangalore HQ</div>
                                                <div className="text-sm text-slate-400">
                                                    #4S, Tech Park Road, Electronic City Phase 1, Bangalore, Karnataka 560100
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Clock className="w-3 h-3" />
                                            9:00 AM - 6:00 PM IST
                                            <button className="ml-auto text-orange-500 hover:text-orange-400">
                                                → Get Directions
                                            </button>
                                        </div>
                                    </div>

                                    {/* Chennai Office */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-5">
                                        <div className="flex items-start gap-3 mb-3">
                                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-white font-bold mb-1">Chennai Office</div>
                                                <div className="text-sm text-slate-400">
                                                    Suite 12, Bayview Tower, OMR IT Corridor, Chennai, Tamil Nadu 600096
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Clock className="w-3 h-3" />
                                            9:00 AM - 6:00 PM IST
                                            <button className="ml-auto text-orange-500 hover:text-orange-400">
                                                → Get Directions
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Contact */}
                            <div className="animate-fade-in-up delay-300">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">NEW PROJECTS</h3>
                                <div className="space-y-3">
                                    <a href="mailto:info@aheadservices.in" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                                        <Mail className="w-4 h-4 text-slate-500" />
                                        <span>info@aheadservices.in</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 animate-fade-in-up delay-300">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">URGENT SUPPORT</h3>
                                <div className="space-y-3">
                                    <a href="tel:+919884208208" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                                        <Phone className="w-4 h-4 text-slate-500" />
                                        <span>+91 9884 208208</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Secure Inquiry Form */}
                        <div className="relative animate-fade-in-up delay-300">
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-600/20 blur-3xl rounded-3xl" />
                            
                            {/* Form Container */}
                            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                                <div className="flex items-center gap-2 mb-8">
                                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <h2 className="text-xl font-bold text-white">Secure Inquiry Form</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 text-sm"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                                                Work Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 text-sm"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Department Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 text-sm"
                                                placeholder="+91 99999 99999"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="department" className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                                                Department
                                            </label>
                                            <select
                                                id="department"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                aria-label="Select department"
                                                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 text-sm"
                                            >
                                                <option value="">Sales / Consultation</option>
                                                <option value="sales">Sales / Consultation</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="partnerships">Partnerships</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all duration-300 resize-none text-sm"
                                            placeholder="Tell us about your project requirements..."
                                        />
                                    </div>

                                    {/* Privacy Checkbox */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900/50 text-orange-500 focus:ring-orange-500/20"
                                        />
                                        <label htmlFor="privacy" className="text-xs text-slate-400">
                                            I agree to Ahead Services <a href="/privacy" className="text-orange-500 hover:text-orange-400">Privacy Policy</a>. We do not share your data with third parties.
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-[1.01] active:scale-[0.99]"
                                    >
                                        Send Transmission
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
