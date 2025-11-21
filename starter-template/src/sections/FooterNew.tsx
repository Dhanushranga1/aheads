"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute bottom-8 right-8 text-[15rem] font-bold text-white opacity-[0.02] pointer-events-none select-none leading-none">
                AHEAD
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-12">
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-bold text-white">
                                A
                            </div>
                            <span className="text-xl font-bold">Ahead Services</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Enterprise-grade IT solutions with a cybersecurity-first mindset. Building secure, future-ready ecosystems since 2013.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Solutions</h3>
                        <ul className="space-y-3">
                            {['IT Infrastructure', 'Cloud Computing', 'Cybersecurity', 'System Integration', 'Professional Services'].map((item, index) => (
                                <li key={index} className="group">
                                    <Link href="/services" className="flex items-center text-slate-400 hover:text-orange-500 transition-all duration-300">
                                        <ChevronRight className="w-4 h-4 -ml-4 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span className="group-hover:ml-2 transition-all duration-300">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog'].map((item, index) => (
                                <li key={index} className="group">
                                    <Link href="#" className="flex items-center text-slate-400 hover:text-orange-500 transition-all duration-300">
                                        <ChevronRight className="w-4 h-4 -ml-4 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        <span className="group-hover:ml-2 transition-all duration-300">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Ahead Column (Newsletter) */}
                    <div className="md:col-span-4">
                        <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Stay Ahead</h3>
                        <p className="text-slate-400 mb-4 text-sm">
                            Get the latest in enterprise tech, security insights, and industry updates.
                        </p>
                        
                        {/* Newsletter Form */}
                        <div className="relative mb-6">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-24 text-white placeholder-slate-500 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-md font-semibold transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300">
                                <MapPin className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                                <span>Chennai, Tamil Nadu, India</span>
                            </div>
                            <div className="flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300">
                                <Phone className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                                <a href="tel:+919884208208">+91 9884 208208</a>
                            </div>
                            <div className="flex items-center text-slate-400 hover:text-slate-200 transition-colors duration-300">
                                <Mail className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                                <a href="mailto:sales@aheadservices.in">sales@aheadservices.in</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2024 Ahead Services. All rights reserved.
                    </p>

                    {/* System Status Widget */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                            <div className="relative flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping absolute" />
                                <span className="w-2 h-2 bg-green-500 rounded-full relative" />
                            </div>
                            <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                                System Status: Operational
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
