"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Rocket } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#0f172a] overflow-hidden flex items-center pt-20">
            {/* Abstract Geometry Background - Optimized */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                
                {/* Glowing Orbs - Hardware Accelerated */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl will-change-transform animate-subtle-pulse" />
                <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-blue-500/20 rounded-full blur-3xl will-change-transform animate-subtle-pulse delay-100" />
            </div>
            
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Text Content */}
                        <div className="space-y-8">
                            {/* Badge with icon */}
                            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-brand-orange font-medium text-sm">
                                <Rocket size={16} />
                                <span>Innovative Solutions for a Secure Future</span>
                            </div>
                            
                            {/* Main Heading - Staggered Animation */}
                            <h1 className="animate-fade-in-up delay-100 text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                                Transforming Businesses with <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
                                    Innovation
                                </span> & Excellence
                            </h1>
                            
                            {/* Subheading */}
                            <p className="animate-fade-in-up delay-200 text-lg text-slate-300 max-w-xl leading-relaxed">
                                We don't just deliver solutions; we create <strong className="text-white">legacies of transformation</strong>. 
                                From Telecom to Healthcare, our expertise in <strong className="text-white">AI</strong>, <strong className="text-white">Blockchain</strong>, and <strong className="text-white">Cloud Technologies</strong> empowers industries to excel.
                            </p>

                            {/* CTA Buttons */}
                            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
                                <Link href="/services">
                                    <button
                                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-orangeDark to-brand-orange text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300"
                                    >
                                        Explore Our Services
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <button
                                    className="inline-flex items-center gap-2 bg-transparent border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/5 hover:border-white hover:text-white transition-transform transform hover:scale-105 hover:-translate-y-1 duration-300"
                                >
                                    Get a Consultation
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="animate-fade-in-up delay-300 pt-8 flex items-center gap-8 text-slate-400 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-brand-orange" size={20} />
                                    Enterprise-Ready
                                </div>
                                <div className="flex items-center gap-2">
                                    <Cpu className="text-brand-orange" size={20} />
                                    Future-Proof Tech
                                </div>
                            </div>
                        </div>

                        {/* Visual Content - Right Side */}
                        <div className="relative hidden lg:block animate-fade-in-up delay-200">
                            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 border border-slate-700 shadow-2xl shadow-brand-orange/10 transform rotate-2 hover:rotate-0 transition-all duration-500 group">
                                <div className="rounded-xl overflow-hidden bg-slate-900">
                                    {/* Dashboard mockup placeholder */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8">
                                        <div className="h-full flex flex-col gap-4">
                                            {/* Animated metric cards */}
                                            <div className="flex gap-4">
                                                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 animate-fade-in-up delay-400">
                                                    <div className="text-brand-orange text-sm font-bold mb-1">UPTIME</div>
                                                    <div className="text-white text-2xl font-bold">99.9%</div>
                                                </div>
                                                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 animate-fade-in-up delay-500">
                                                    <div className="text-green-400 text-sm font-bold mb-1">SECURITY</div>
                                                    <div className="text-white text-2xl font-bold">A+</div>
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 animate-fade-in-up delay-600">
                                                <div className="h-full flex flex-col justify-between">
                                                    <div className="text-blue-400 text-sm font-bold mb-2">PERFORMANCE</div>
                                                    <div className="space-y-2">
                                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[85%] transition-all duration-700" />
                                                        </div>
                                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[92%] transition-all duration-700 delay-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating Status Cards */}
                                <div className="absolute -left-8 top-10 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-float-y">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <ShieldCheck className="text-green-600 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Security Status</p>
                                        <p className="text-sm font-bold text-gray-800">100% Secure</p>
                                    </div>
                                </div>

                                <div className="absolute -right-8 bottom-20 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-float-y delay-100">
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

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up delay-600">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                            <div className="w-1.5 h-2 bg-white/50 rounded-full animate-float-y" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
