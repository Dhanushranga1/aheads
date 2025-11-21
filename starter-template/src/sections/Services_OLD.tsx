"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cloud, Shield, Cpu, BrainCircuit, Blocks, Server, ArrowRight, Laptop, Database, Rocket } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Cloud Computing",
            description: "Scalable cloud infrastructure and migration services for modern businesses. AWS, Azure, & Hybrid.",
            icon: Cloud,
            href: "/services/cloud-computing"
        },
        {
            title: "Cybersecurity",
            description: "Enterprise-grade security assessments, SOC monitoring, and threat prevention protocols.",
            icon: Shield,
            href: "/services/cybersecurity"
        },
        {
            title: "AI & Machine Learning",
            description: "Harness AI to automate processes, gain insights, and predict market trends.",
            icon: BrainCircuit,
            href: "/services/ai-machine-learning"
        },
        {
            title: "Blockchain",
            description: "Secure, transparent blockchain solutions for DApps and smart contracts.",
            icon: Blocks,
            href: "/services/blockchain-development"
        },
        {
            title: "Software Development",
            description: "Custom software solutions tailored to your business needs with agile methodologies.",
            icon: Laptop,
            href: "/services/software-development"
        },
        {
            title: "IT Infrastructure",
            description: "Robust network architecture ensuring high availability and zero-latency performance.",
            icon: Server,
            href: "/services/it-infrastructure"
        },
        {
            title: "Data Analytics",
            description: "Turn your data into actionable insights with advanced analytics and visualization.",
            icon: Database,
            href: "/services/data-analytics"
        },
        {
            title: "Digital Transformation",
            description: "Complete digital transformation strategies to modernize your business operations.",
            icon: Rocket,
            href: "/services/digital-transformation"
        }
    ];

    return (
        <section id="services" className="py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">
                        Core Capabilities
                    </div>
                    <h2 className="animate-fade-in-up delay-100 text-4xl lg:text-5xl font-bold text-white mb-6">
                        Excellence in <span className="text-brand-orange">Technology</span>
                    </h2>
                    <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed">
                        Comprehensive technology solutions designed to drive innovation and accelerate your business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Internal Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon */}
                            <div className="relative z-10 w-14 h-14 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange/50 group-hover:shadow-lg group-hover:shadow-brand-orange/20 transition-all duration-300">
                                <service.icon size={28} strokeWidth={1.5} className="text-slate-300 group-hover:text-brand-orange transition-colors" />
                            </div>
                            
                            {/* Content */}
                            <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-slate-400 mb-6 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            
                            {/* CTA Link */}
                            <Link 
                                href={service.href}
                                className="relative z-10 inline-flex items-center text-sm font-bold text-white group-hover:text-brand-orange transition-colors"
                            >
                                Learn More 
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orangeDark to-brand-orange text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

    return (
        <section className="py-16 md:py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Our <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent">Services</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-300 max-w-3xl mx-auto mb-8"
                    >
                        We offer comprehensive technology solutions across eight core service areas, 
                        each designed to drive innovation and accelerate your business growth.
                    </motion.p>

                    {/* Why Choose Us Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-16 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Ahead?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                                <span className="text-slate-300">Enterprise-ready architectures</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="text-slate-300">Advisory + Execution + AMC model</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-slate-300">Cloud-native and scalable solutions</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span className="text-slate-300">Cybersecurity-first mindset</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                                <span className="text-slate-300">Data-driven performance optimization</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="text-slate-300">Dedicated IT Helpdesk & Facility Support</span>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-lg font-semibold text-white italic">
                                "We don't just build IT systems. We build secure, future-ready ecosystems."
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="relative bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-brand-orange/30 hover:bg-slate-800/60 transition-all duration-300 h-full overflow-hidden">
                                    {/* Orange gradient line that expands on hover */}
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-orange to-orange-400"
                                    />
                                    
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-brand-orange text-sm font-medium">
                                        Learn More 
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link 
                        href="/services"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View All Services
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
