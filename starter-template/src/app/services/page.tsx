"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../../sections/Footer";
import {
    Monitor,
    Cloud,
    ShieldCheck,
    Lightbulb,
    CheckCircle2,
    Layers,
    Zap,
} from "lucide-react";

const serviceCategories = [
    {
        id: "infrastructure",
        title: "Infrastructure",
        subtitle: "Foundation & Core Systems",
        icon: Monitor,
        services: [
            {
                title: "IT Infrastructure & Support Services",
                icon: Monitor,
                description:
                    "Comprehensive IT infrastructure management, 24/7 helpdesk support, and facility management for seamless business operations.",
                link: "/services/it-infrastructure",
                features: ["24/7 Monitoring", "Proactive Maintenance", "Rapid Response"],
            },
            {
                title: "System Integration & Project Management",
                icon: Layers,
                description:
                    "Expert system integration services with end-to-end project management ensuring on-time, on-budget delivery.",
                link: "/services/system-integration",
                features: ["Unified Systems", "Agile Methodology", "Risk Management"],
            },
        ],
    },
    {
        id: "digital-cloud",
        title: "Digital Cloud",
        subtitle: "Cloud & Connected Technologies",
        icon: Cloud,
        services: [
            {
                title: "Cloud Computing Solutions",
                icon: Cloud,
                description:
                    "Scalable AWS and Azure cloud infrastructure with migration, optimization, and managed services.",
                link: "/services/cloud-computing",
                features: ["Multi-Cloud Strategy", "Cost Optimization", "Auto-Scaling"],
            },
            {
                title: "Internet of Things (IoT)",
                icon: Zap,
                description:
                    "End-to-end IoT solutions connecting devices, sensors, and systems for real-time insights and automation.",
                link: "/services/iot",
                features: ["Device Management", "Real-time Analytics", "Edge Computing"],
            },
        ],
    },
    {
        id: "cyber-defense",
        title: "Cyber Defense",
        subtitle: "Security & Surveillance",
        icon: ShieldCheck,
        services: [
            {
                title: "Cybersecurity Solutions",
                icon: ShieldCheck,
                description:
                    "Comprehensive security with zero-trust architecture, 24/7 SOC monitoring, and threat intelligence.",
                link: "/services/cybersecurity",
                features: ["Zero-Trust Security", "24/7 SOC", "Threat Intelligence"],
            },
            {
                title: "Surveillance Solutions",
                icon: Monitor,
                description:
                    "Advanced surveillance systems with AI-powered analytics, facial recognition, and integrated monitoring.",
                link: "/services/surveillance",
                features: ["AI Analytics", "Facial Recognition", "Remote Monitoring"],
            },
        ],
    },
    {
        id: "advisory",
        title: "Advisory",
        subtitle: "Consulting & Communication",
        icon: Lightbulb,
        services: [
            {
                title: "Consulting & Advisory",
                icon: Lightbulb,
                description:
                    "Strategic IT consulting, digital transformation roadmaps, and technology advisory for business growth.",
                link: "/services/consulting-advisory",
                features: ["Strategic Planning", "Tech Assessment", "ROI Analysis"],
            },
            {
                title: "Unified Communications",
                icon: Monitor,
                description:
                    "Enterprise communication platforms integrating voice, video, messaging, and collaboration tools.",
                link: "/services/unified-communications",
                features: ["VoIP Solutions", "Video Conferencing", "Team Collaboration"],
            },
        ],
    },
];

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState<string>(
        serviceCategories[0].id
    );
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // SEO: Update document metadata for client component
    useEffect(() => {
        document.title = "Enterprise IT Services & Solutions | Cloud, AI, Cybersecurity | Aheads";
        
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateMeta('description', 'Comprehensive enterprise IT services including cloud computing, AI/ML solutions, cybersecurity, IT infrastructure, unified communications, IoT, surveillance, and professional consulting. ISO certified with 500+ deployments.');
        updateMeta('keywords', 'enterprise IT services, cloud computing services, AI ML solutions, cybersecurity services, IT infrastructure management, unified communications, system integration, IoT solutions');
        
        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://www.aheads.in/services';
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(sectionRefs.current);
            // iterate and pick the last section whose top is <= 220px
            for (let i = 0; i < sections.length; i++) {
                const id = sections[i];
                const el = sectionRefs.current[id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                // when section's top is near the top of viewport (after sticky nav)
                if (rect.top <= 220 && rect.bottom > 160) {
                    setActiveCategory(id);
                    return;
                }
            }
            // fallback: if scrolled to top
            if (window.scrollY < 300) setActiveCategory(serviceCategories[0].id);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCategory = (id: string) => {
        const el = sectionRefs.current[id];
        if (!el) return;
        const offset = 88 + 8; // header height + small gap
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <>
            <div className="bg-brand-blue min-h-screen pt-20 relative overflow-hidden text-white">
                {/* Cartesian Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                {/* Radial fade mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_80%)]" />

        {/* Light leaks / radial glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 top-24 w-[500px] h-[500px] rounded-full blur-3xl bg-orange-500/8" />
          <div className="absolute -right-60 bottom-32 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/8" />
        </div>                {/* Hero */}
                <section className="relative z-10 py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ staggerChildren: 0.08 }}
                            className="text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-brand-orange/10 border border-brand-orange/20 text-brand-orange"
                            >
                                <Layers className="w-4 h-4" />
                                GLOBAL DELIVERY MODEL
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
                            >
                                Capabilities tailored for
                                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">
                                    Enterprise Growth
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed"
                            >
                                We combine deep industry expertise with a comprehensive technology
                                portfolio to deliver solutions that drive performance, scalability, and
                                security.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Sticky Scroll-Spy Nav */}
                <div className="sticky top-[72px] z-40 py-4">
                    <div className="mx-auto max-w-7xl px-4">
                        <nav className="w-full rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/10 py-3 px-4 flex gap-3 overflow-x-auto hide-scrollbar shadow-lg">
                            {serviceCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollToCategory(cat.id)}
                                    aria-current={activeCategory === cat.id}
                                    className={`flex-none px-5 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap text-sm ${
                                        activeCategory === cat.id
                                            ? "bg-brand-orange text-white shadow-[0_6px_30px_rgba(249,115,22,0.25)]"
                                            : "bg-white/5 text-slate-300 hover:bg-white/8 hover:text-white"
                                    }`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main content loop */}
                <main className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                    {serviceCategories.map((category, catIndex) => (
                                    <section
                                        key={category.id}
                                        id={category.id}
                                        ref={(el) => { sectionRefs.current[category.id] = el; }}
                                        className="mb-24 scroll-mt-32 group"
                                    >
                            <div className="grid grid-cols-12 gap-8 items-start">
                                {/* Left Context (4 cols) */}
                                <aside className="col-span-12 lg:col-span-4">
                                    <div className="lg:sticky lg:top-56">
                                        <div className="text-base font-mono text-brand-orange font-bold">{`0${catIndex + 1}`}</div>
                                        <h2 className="mt-4 text-4xl font-bold text-white">{category.title}</h2>
                                        <p className="mt-3 text-slate-400 text-lg">{category.subtitle}</p>

                                        {/* Decorative widget */}
                                        <div className="mt-8 p-5 bg-slate-800/30 border border-white/10 rounded-xl backdrop-blur-sm">
                                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Operational Pulse</div>
                                            <div className="space-y-3">
                                                {["Availability", "Latency", "Throughput"].map(
                                                    (label, i) => (
                                                        <div key={i} className="w-full">
                                                            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                                                                <span>{label}</span>
                                                                <span className="font-mono">99.9%</span>
                                                            </div>
                                                            <div className="w-full bg-slate-700/30 h-2 rounded-full overflow-hidden">
                                                                <div 
                                                                    className={`h-2 bg-gradient-to-r from-brand-orange to-yellow-400 w-0 group-hover:w-full transition-all duration-700 ease-out ${
                                                                        i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''
                                                                    }`}
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                {/* Right Cards (8 cols) */}
                                <div className="col-span-12 lg:col-span-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {category.services.map((service, idx) => (
                                            <Link key={idx} href={service.link} className="group">
                                                <article className="relative bg-slate-800/40 border border-white/5 rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transform transition-all duration-300 hover:bg-slate-800/60">
                                                    {/* Top light line */}
                                                    <div className="absolute left-0 top-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-orange to-yellow-400" />

                                                    <div className="flex items-start gap-4">
                                                        <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-slate-900/30 border border-transparent group-hover:border-brand-orange transition-all duration-300">
                                                            {/* icon */}
                                                            {service.icon ? (
                                                                // render lucide icon as component
                                                                <service.icon className="w-7 h-7 text-slate-300 group-hover:text-brand-orange transition-colors duration-300" />
                                                            ) : (
                                                                <Monitor className="w-7 h-7 text-slate-300" />
                                                            )}
                                                        </div>

                                                        <div className="flex-1">
                                                            <h3 className="text-xl font-semibold text-white group-hover:text-brand-orange transition-colors duration-300">{service.title}</h3>
                                                            <p className="mt-2 text-slate-300 text-sm">{service.description}</p>

                                                            <ul className="mt-4 space-y-2">
                                                                {service.features.map((f, i) => (
                                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                                        <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                                                                        <span>{f}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            <div className="mt-4">
                                                                <span className="inline-flex items-center text-sm font-semibold text-brand-orange">
                                                                    View Details
                                                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}

                    {/* Bottom CTA */}
                    <section className="relative mt-16 p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden">
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white">Not sure where to start?</h3>
                                <p className="mt-3 text-slate-300 text-lg max-w-xl">
                                    Our certified consultants can audit your current infrastructure and propose a roadmap tailored to your business goals.
                                </p>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-bold shadow-[0_20px_40px_rgba(249,115,22,0.25)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] transition-all duration-300 whitespace-nowrap"
                                >
                                    Book a Free Consultation
                                </motion.button>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            <Footer />
        </>
    );
}
