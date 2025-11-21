"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, Wrench } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discover",
        subtitle: "Audit & Consulting",
        icon: Search,
        description: "Comprehensive infrastructure assessment, vulnerability analysis, and strategic roadmap planning tailored to your business goals.",
        features: ["Gap Analysis", "Risk Assessment", "Technology Audit"]
    },
    {
        number: "02",
        title: "Architect",
        subtitle: "Solution Design",
        icon: Lightbulb,
        description: "Custom architecture blueprints with scalability, security, and compliance baked into every layer of the solution.",
        features: ["System Design", "Security Framework", "Integration Planning"]
    },
    {
        number: "03",
        title: "Deploy",
        subtitle: "Agile Implementation",
        icon: Rocket,
        description: "Rapid deployment with iterative sprints, continuous testing, and zero-downtime migration strategies for mission-critical systems.",
        features: ["Sprint Execution", "Quality Assurance", "Go-Live Support"]
    },
    {
        number: "04",
        title: "Evolve",
        subtitle: "24/7 Management",
        icon: Wrench,
        description: "Proactive monitoring, performance optimization, and continuous improvement to ensure your systems stay ahead of threats and demands.",
        features: ["SOC Monitoring", "Performance Tuning", "Regular Updates"]
    },
];

export default function WhyUs() {
    return (
        <section className="py-24 md:py-32 bg-brand-blue relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold">
                            OUR METHODOLOGY
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent">Execution</span> Framework
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-300 max-w-3xl mx-auto"
                    >
                        A proven 4-stage methodology that transforms IT infrastructure from concept to continuous excellence
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Connector Line (Hidden on Mobile) */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/20" />

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Icon Circle */}
                                <div className="flex justify-center mb-6 relative z-10">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:shadow-xl group-hover:shadow-brand-orange/50 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-brand-orange/30 hover:bg-slate-800/60 transition-all duration-300">
                                    {/* Number Badge */}
                                    <div className="text-5xl font-bold text-brand-orange mb-3 opacity-20">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {step.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm font-semibold text-brand-orange mb-4 uppercase tracking-wide">
                                        {step.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-slate-300 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {step.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mr-2" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-300 mb-6">
                        Ready to see our framework in action?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-semibold rounded-full shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/50 transition-all duration-300"
                    >
                        Schedule a Discovery Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
