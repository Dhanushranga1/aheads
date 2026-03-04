"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../sections/FooterNew";
import {
    ArrowRight,
    TrendingUp,
    Clock,
    Building2,
    Award,
} from "lucide-react";

// Case study data (in production, this would come from a CMS or API)
const caseStudies = [
    {
        slug: "fintech-cloud-migration",
        title: "Enterprise Cloud Migration for Leading FinTech",
        client: "Confidential FinTech Company",
        industry: "Financial Services",
        thumbnail: "/case-studies/fintech-cloud.jpg",
        metrics: {
            improvement: "40% Cost Reduction",
            time: "6 Months",
            scale: "500+ Users",
        },
        challenge:
            "Legacy infrastructure causing downtime, high operational costs, and inability to scale during peak trading hours.",
        solution:
            "Architected multi-region AWS infrastructure with auto-scaling, implemented disaster recovery, and migrated 20+ applications with zero downtime.",
        results: [
            "40% reduction in infrastructure costs",
            "99.99% uptime achieved",
            "3x faster deployment cycles",
            "Zero security incidents post-migration",
        ],
        tags: ["Cloud Computing", "AWS", "FinTech", "Migration"],
        featured: true,
    },
    {
        slug: "healthcare-cybersecurity",
        title: "Zero-Trust Security Implementation for Healthcare Network",
        client: "Multi-Specialty Hospital Chain",
        industry: "Healthcare",
        thumbnail: "/case-studies/healthcare-security.jpg",
        metrics: {
            improvement: "100% Compliance",
            time: "4 Months",
            scale: "10 Hospitals",
        },
        challenge:
            "HIPAA compliance gaps, legacy security infrastructure, and increasing ransomware threats across 10-hospital network.",
        solution:
            "Deployed Fortinet next-gen firewalls, implemented zero-trust architecture, automated threat detection, and conducted security awareness training.",
        results: [
            "100% HIPAA compliance achieved",
            "Zero breaches in 24 months",
            "90% reduction in security incidents",
            "Automated threat response in < 2 minutes",
        ],
        tags: ["Cybersecurity", "Healthcare", "Zero Trust", "Compliance"],
        featured: true,
    },
    {
        slug: "ecommerce-iot-warehouse",
        title: "IoT-Enabled Smart Warehouse for E-commerce Giant",
        client: "Major E-commerce Platform",
        industry: "E-commerce & Retail",
        thumbnail: "/case-studies/iot-warehouse.jpg",
        metrics: {
            improvement: "60% Efficiency Gain",
            time: "8 Months",
            scale: "200K sq ft",
        },
        challenge:
            "Manual inventory tracking causing errors, slow order fulfillment, and inability to predict stock shortages.",
        solution:
            "Deployed IoT sensors, RFID tracking, predictive analytics dashboard, and integrated with existing ERP systems.",
        results: [
            "60% improvement in picking efficiency",
            "95% inventory accuracy (up from 75%)",
            "30% reduction in fulfillment time",
            "Real-time stock visibility across 5 warehouses",
        ],
        tags: ["IoT", "E-commerce", "Automation", "AI/ML"],
        featured: true,
    },
    {
        slug: "manufacturing-erp-integration",
        title: "Unified Communications & ERP Integration for Manufacturer",
        client: "Automotive Parts Manufacturer",
        industry: "Manufacturing",
        thumbnail: "/case-studies/manufacturing-erp.jpg",
        metrics: {
            improvement: "50% Faster Communication",
            time: "5 Months",
            scale: "3 Factories",
        },
        challenge:
            "Siloed communication systems across 3 factories, delayed production updates, and manual data entry errors.",
        solution:
            "Implemented Cisco unified communications, integrated with SAP ERP, deployed collaboration tools, and automated workflows.",
        results: [
            "50% faster cross-factory communication",
            "Real-time production visibility",
            "80% reduction in manual data entry",
            "Seamless collaboration between 200+ employees",
        ],
        tags: ["System Integration", "ERP", "Manufacturing", "Cisco"],
        featured: false,
    },
    {
        slug: "saas-platform-infrastructure",
        title: "Scalable Infrastructure for High-Growth SaaS Startup",
        client: "B2B SaaS Platform",
        industry: "Technology",
        thumbnail: "/case-studies/saas-infra.jpg",
        metrics: {
            improvement: "10x Traffic Handling",
            time: "3 Months",
            scale: "50K+ Users",
        },
        challenge:
            "Rapid user growth causing performance issues, inability to handle traffic spikes, and high latency.",
        solution:
            "Re-architected infrastructure on Azure with Kubernetes, implemented CDN, optimized database queries, and set up monitoring.",
        results: [
            "10x traffic capacity with no performance degradation",
            "95% reduction in latency",
            "99.95% uptime SLA achieved",
            "Seamless scaling to 50K concurrent users",
        ],
        tags: ["Cloud Computing", "Azure", "Kubernetes", "SaaS"],
        featured: false,
    },
    {
        slug: "retail-surveillance-system",
        title: "AI-Powered Surveillance for Retail Chain",
        client: "National Retail Chain",
        industry: "Retail",
        thumbnail: "/case-studies/retail-surveillance.jpg",
        metrics: {
            improvement: "70% Theft Reduction",
            time: "6 Months",
            scale: "50 Stores",
        },
        challenge:
            "High inventory shrinkage due to theft, limited visibility across 50 stores, and reactive security approach.",
        solution:
            "Deployed AI-powered cameras, real-time anomaly detection, centralized monitoring dashboard, and integrated with POS systems.",
        results: [
            "70% reduction in theft incidents",
            "Real-time alerts across all locations",
            "Improved customer safety ratings",
            "ROI achieved in 18 months",
        ],
        tags: ["Surveillance", "AI/ML", "Retail", "Security"],
        featured: false,
    },
];

export default function CaseStudiesPage() {
    useEffect(() => {
        document.title = "Case Studies | Ahead Services - Enterprise IT Success Stories";

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
            "Explore real-world enterprise IT transformation success stories. Cloud migrations, cybersecurity implementations, IoT deployments, and digital transformation case studies from Ahead Services."
        );
        updateMeta(
            "keywords",
            "IT case studies, cloud migration success stories, cybersecurity implementation, digital transformation, enterprise IT projects, IoT deployments"
        );
    }, []);

    const featuredStudies = caseStudies.filter((study) => study.featured);
    const otherStudies = caseStudies.filter((study) => !study.featured);

    return (
        <>
            <div className="bg-white min-h-screen pt-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide mb-8">
                                <Award className="w-4 h-4" />
                                CLIENT SUCCESS STORIES
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Real <span className="text-orange-500">Impact</span>,<br />
                                Real <span className="text-orange-500">Results</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                                Discover how we've helped enterprises across industries transform their technology
                                infrastructure and achieve measurable business outcomes.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Featured Case Studies */}
                <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Featured <span className="text-orange-500">Projects</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our most impactful enterprise transformations
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-1 gap-8 mb-24">
                        {featuredStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300"
                                >
                                    <div className="md:flex">
                                        {/* Image Placeholder */}
                                        <div className="md:w-2/5 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden h-64 md:h-auto">
                                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                                <Building2 className="w-20 h-20 opacity-30" />
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                    {study.industry}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="md:w-3/5 p-8">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                                                    {study.title}
                                                </h3>
                                                <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" />
                                            </div>

                                            <p className="text-gray-600 mb-6">{study.challenge}</p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-4 mb-6">
                                                <div className="bg-orange-50 rounded-lg p-3">
                                                    <TrendingUp className="w-5 h-5 text-orange-500 mb-2" />
                                                    <div className="text-xs text-gray-600">Impact</div>
                                                    <div className="text-sm font-bold text-gray-900">
                                                        {study.metrics.improvement}
                                                    </div>
                                                </div>
                                                <div className="bg-orange-50 rounded-lg p-3">
                                                    <Clock className="w-5 h-5 text-orange-500 mb-2" />
                                                    <div className="text-xs text-gray-600">Timeline</div>
                                                    <div className="text-sm font-bold text-gray-900">
                                                        {study.metrics.time}
                                                    </div>
                                                </div>
                                                <div className="bg-orange-50 rounded-lg p-3">
                                                    <Building2 className="w-5 h-5 text-orange-500 mb-2" />
                                                    <div className="text-xs text-gray-600">Scale</div>
                                                    <div className="text-sm font-bold text-gray-900">
                                                        {study.metrics.scale}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {study.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Case Studies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            More <span className="text-orange-500">Success Stories</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 h-full"
                                >
                                    {/* Image Placeholder */}
                                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden h-48">
                                        <div className="absolute inset-0 flex items-center justify-center text-white">
                                            <Building2 className="w-16 h-16 opacity-30" />
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {study.industry}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                                            {study.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{study.challenge}</p>

                                        {/* Metric Highlight */}
                                        <div className="bg-orange-50 rounded-lg p-3 mb-4">
                                            <div className="text-xs text-gray-600 mb-1">Key Result</div>
                                            <div className="text-lg font-bold text-orange-600">
                                                {study.metrics.improvement}
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {study.tags.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-orange-500 text-sm font-semibold group-hover:gap-2 transition-all">
                                            Read Case Study
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Write Your <span className="text-orange-500">Success Story</span>?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you achieve similar results for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/services"
                                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center"
                            >
                                View Our Services
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
}
