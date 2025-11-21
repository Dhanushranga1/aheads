"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Integration data
const integrations = [
    {
        category: "AI & Machine Learning Solutions",
        id: "ai-solutions", 
        serviceLink: "/services/consulting-advisory",
        items: [
            { 
                name: "Aheads AI Security Suite", 
                logo: "/integrations/pics/aheads-ai.png", 
                description: "AI-powered security automation for enterprise protection.", 
                website: "#" 
            },
            { 
                name: "Predictive Analytics Platform", 
                logo: "/integrations/pics/predictive-ai.png", 
                description: "Machine learning for business intelligence and forecasting.", 
                website: "#" 
            },
        ],
    },
    {
        category: "Cloud Infrastructure & Computing",
        id: "cloud-infrastructure",
        serviceLink: "/services/cloud-computing",
        items: [
            { 
                name: "AWS Direct Connect", 
                logo: "/integrations/pics/aws.png", 
                description: "Enterprise-grade cloud connectivity for high-speed data transfers and security.", 
                website: "https://aws.amazon.com/directconnect/" 
            },
            { 
                name: "Google Cloud Platform", 
                logo: "/integrations/pics/gcp.png", 
                description: "Scalable cloud infrastructure for modern enterprise applications.", 
                website: "https://cloud.google.com" 
            },
            { 
                name: "Microsoft Azure", 
                logo: "/integrations/pics/azure.png", 
                description: "Comprehensive cloud services for digital transformation.", 
                website: "https://azure.microsoft.com" 
            },
        ],
    },
    {
        category: "Enterprise Communication & Collaboration",
        id: "communication",
        serviceLink: "/services/unified-communications", 
        items: [
            { 
                name: "Cisco Unified Communications", 
                logo: "/integrations/pics/cisco.png", 
                description: "Enterprise VoIP and contact center solutions.", 
                website: "https://www.cisco.com" 
            },
            { 
                name: "Microsoft Teams Integration", 
                logo: "/integrations/pics/msteams.png", 
                description: "Enterprise collaboration with direct routing and PBX integration.", 
                website: "https://www.microsoft.com/microsoft-teams" 
            },
            { 
                name: "ServiceNow Platform", 
                logo: "/integrations/pics/servicenow.png", 
                description: "Digital workflow automation and IT service management.", 
                website: "https://www.servicenow.com" 
            },
            { 
                name: "Avaya Contact Center", 
                logo: "/integrations/pics/avaya.png", 
                description: "Cloud-based contact center and customer experience solutions.", 
                website: "https://www.avaya.com" 
            },
        ],
    },
    {
        category: "Cybersecurity & Compliance",
        id: "cybersecurity",
        serviceLink: "/services/system-integration",
        items: [
            { 
                name: "Fortinet Security Fabric", 
                logo: "/integrations/pics/fortinet.png", 
                description: "Next-generation firewall and threat protection solutions.", 
                website: "https://www.fortinet.com" 
            },
            { 
                name: "Palo Alto Networks", 
                logo: "/integrations/pics/paloalto.png", 
                description: "Advanced threat detection and security analytics platform.", 
                website: "https://www.paloaltonetworks.com" 
            },
            { 
                name: "Zero Trust Security", 
                logo: "/integrations/pics/zero-trust.png", 
                description: "Comprehensive zero-trust security architecture.", 
                website: "#" 
            },
            { 
                name: "Biometric Authentication", 
                logo: "/integrations/pics/biometric.png", 
                description: "Advanced biometric access control and authentication.", 
                website: "#" 
            },
        ],
    },
    {
        category: "Network Infrastructure",
        id: "networking", 
        serviceLink: "/services/it-infrastructure",
        items: [
            { 
                name: "Juniper Networks", 
                logo: "/integrations/pics/juniper.png", 
                description: "AI-driven secure SD-WAN and networking solutions.", 
                website: "https://www.juniper.net" 
            },
            { 
                name: "Cisco Networking", 
                logo: "/integrations/pics/cisco.png", 
                description: "Enterprise-grade switching, routing, and wireless infrastructure.", 
                website: "https://www.cisco.com" 
            },
            { 
                name: "HPE Networking", 
                logo: "/integrations/pics/hpe.png", 
                description: "Intelligent edge-to-cloud networking solutions.", 
                website: "https://www.hpe.com" 
            },
        ],
    },
];

export default function IntegrationsContent() {
    const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

    const scrollToSection = (id: string) => {
        const section = sectionsRef.current[id];
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20 lg:pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Enterprise Technology Integrations
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                            Trusted technology partnerships for secure, scalable, and innovative business solutions. 
                            Expert integration services for cloud, AI, cybersecurity, and enterprise communication platforms.
                        </p>
                        <div className="text-lg opacity-90">
                            🔒 Cybersecurity-First | ☁️ Cloud-Native | 🤖 AI-Powered | 🚀 Enterprise-Grade
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Navigation Menu */}
            <section className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 py-4">
                        {integrations.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => scrollToSection(category.id)}
                                className="px-4 py-2 bg-gray-100 hover:bg-orange-100 rounded-full text-gray-700 hover:text-orange-600 transition-all duration-300 text-sm font-medium"
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Categories */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {integrations.map((category, categoryIndex) => (
                    <motion.section
                        key={category.id}
                        ref={(el) => { 
                            if (el) sectionsRef.current[category.id] = el; 
                        }}
                        id={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                                {category.category}
                            </h2>
                            <Link
                                href={category.serviceLink}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full hover:from-orange-600 hover:to-blue-700 transition-all duration-300 font-medium"
                            >
                                Learn More About Our Services
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((integration, index) => (
                                <motion.div
                                    key={integration.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                            <Image
                                                src={integration.logo}
                                                alt={`${integration.name} logo`}
                                                width={32}
                                                height={32}
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {integration.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {integration.description}
                                    </p>
                                    {integration.website !== "#" && (
                                        <a
                                            href={integration.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                                        >
                                            Visit Website
                                            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </main>

            {/* CTA Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">
                            Ready to Integrate These Enterprise Solutions?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let our certified experts help you choose and implement the right technology stack for your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full font-semibold hover:from-orange-600 hover:to-blue-700 transition-all duration-300"
                            >
                                Explore Our Services
                            </Link>
                            <Link
                                href="mailto:info@aheadservices.in"
                                className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                            >
                                Contact Our Experts
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
