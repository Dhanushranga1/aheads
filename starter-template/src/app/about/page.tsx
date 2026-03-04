"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../sections/FooterNew";
import {
    Award,
    Users,
    Globe,
    Target,
    Zap,
    Shield,
    TrendingUp,
    CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
    // SEO: Update document metadata
    useEffect(() => {
        document.title = "About Ahead Services | Leading Enterprise IT Solutions Provider";

        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", name);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", content);
        };

        updateMeta(
            "description",
            "Learn about Ahead Services - a leading enterprise IT solutions provider with 15+ years of experience. Trusted by 100+ global clients for cloud computing, cybersecurity, AI/ML, and digital transformation."
        );
        updateMeta(
            "keywords",
            "about ahead services, IT company India, enterprise technology solutions, cloud computing experts, cybersecurity company, digital transformation partner"
        );
    }, []);

    const values = [
        {
            icon: Target,
            title: "Client-Centric Excellence",
            description:
                "Every solution we architect is designed around your specific business objectives, not generic templates.",
        },
        {
            icon: Zap,
            title: "Innovation at Core",
            description:
                "We stay ahead of technology curves, bringing cutting-edge solutions to traditional enterprise challenges.",
        },
        {
            icon: Shield,
            title: "Security First",
            description:
                "Zero-trust architecture and defense-in-depth strategies protect your critical infrastructure 24/7.",
        },
        {
            icon: TrendingUp,
            title: "Measurable Impact",
            description:
                "Our success is measured by your ROI. We deliver solutions that directly impact your bottom line.",
        },
    ];

    const milestones = [
        { year: "2008", event: "Company Founded", detail: "Started operations in Bangalore" },
        { year: "2012", event: "Cloud Pioneer", detail: "First AWS Advanced Consulting Partner in South India" },
        { year: "2016", event: "Global Expansion", detail: "Opened Chennai office, serving 50+ enterprise clients" },
        { year: "2020", event: "AI/ML Integration", detail: "Launched AI-powered automation division" },
        { year: "2024", event: "100+ Clients", detail: "Crossed milestone of 100 enterprise clients globally" },
    ];

    const certifications = [
        "AWS Advanced Consulting Partner",
        "Microsoft Gold Partner",
        "Cisco Premier Partner",
        "ISO 27001:2013 Certified",
        "ISO 9001:2015 Certified",
        "Fortinet Gold Partner",
    ];

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "100+", label: "Enterprise Clients" },
        { value: "500+", label: "Projects Delivered" },
        { value: "50+", label: "IT Professionals" },
    ];

    return (
        <>
            <div className="bg-[#0f172a] min-h-screen pt-20 relative overflow-hidden">
                {/* Data Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Radial spotlight mask */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)]" />

                <div className="relative z-10">
                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide mb-8">
                                <Award className="w-4 h-4" />
                                ABOUT AHEAD SERVICES
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Engineering{" "}
                                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                                    Enterprise Excellence
                                </span>
                                <br />
                                Since 2008
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                                We architect, deploy, and optimize enterprise technology infrastructure that powers
                                businesses across industries. From cloud computing to cybersecurity, we deliver solutions
                                that scale.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Our Story */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                Our <span className="text-orange-500">Story</span>
                            </h2>
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Founded in 2008 in Bangalore, Ahead Services began with a simple mission: to help
                                    businesses leverage technology as a competitive advantage, not just a cost center.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                    Over 15 years, we've evolved from a boutique IT consultancy to a full-spectrum
                                    enterprise technology partner. We've witnessed the cloud revolution, the cybersecurity
                                    arms race, and the AI/ML transformation — and we've been at the forefront, guiding our
                                    clients through each paradigm shift.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    Today, we serve 100+ enterprise clients across BFSI, Healthcare, Manufacturing, and
                                    E-commerce sectors, with a team of 50+ certified engineers and architects. Our track
                                    record speaks for itself: 500+ successful projects, zero data breaches, and long-term
                                    partnerships built on trust and results.
                                </p>
                            </div>
                        </motion.div>

                        {/* Core Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                Our <span className="text-orange-500">Core Values</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300"
                                    >
                                        <value.icon className="w-10 h-10 text-orange-500 mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                        <p className="text-slate-400">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                Our <span className="text-orange-500">Journey</span>
                            </h2>
                            <div className="max-w-3xl mx-auto">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="flex gap-6 mb-8 last:mb-0">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center font-bold text-orange-500 text-sm flex-shrink-0">
                                                {milestone.year}
                                            </div>
                                            {index !== milestones.length - 1 && (
                                                <div className="w-0.5 flex-1 bg-gradient-to-b from-orange-500/50 to-transparent mt-2" />
                                            )}
                                        </div>
                                        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex-1 mb-2">
                                            <h3 className="text-lg font-bold text-white mb-2">{milestone.event}</h3>
                                            <p className="text-slate-400">{milestone.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                                Certifications & <span className="text-orange-500">Partnerships</span>
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                        <span className="text-slate-300">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="bg-gradient-to-br from-orange-500/20 to-blue-600/20 rounded-2xl p-12 border border-white/10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Partner with Us?
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                                    Let's discuss how we can engineer solutions tailored to your business challenges.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                                    >
                                        Schedule a Consultation
                                        <svg
                                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/services"
                                        className="bg-slate-800/50 hover:bg-slate-800 border border-white/10 hover:border-orange-500/50 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                                    >
                                        Explore Our Services
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
