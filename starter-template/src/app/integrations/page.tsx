"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// 🚀 ALL 7 Categories Included & Fixed for Mobile
const integrations = [
    {
        category: "Proprietary Agentic AI Solutions",
        id: "agentic-ai",
        items: [
            { name: "Aheads AI Security Suite", logo: "/app/integrations/pics/aheads-ai.png", description: "Our proprietary AI-powered security & automation suite for enterprises.", website: "#" },
            { name: "Self-Learning AI Agents", logo: "/app/integrations/pics/ai-agent.png", description: "Autonomous AI-driven solutions for real-time analytics & security.", website: "#" },
            { name: "Predictive Business AI", logo: "/app/integrations/pics/predictive-ai.png", description: "AI models trained for fraud detection, market trends & automation.", website: "#" },
        ],
    },
    {
        category: "Blockchain-Based Solutions in India",
        id: "blockchain",
        items: [
            { name: "Polygon Blockchain", logo: "/app/integrations/pics/polygon.png", description: "India’s leading Layer-2 blockchain scaling solution for enterprises.", website: "https://polygon.technology" },
            { name: "Hyperledger Fabric", logo: "/app/integrations/pics/hyperledger.png", description: "Enterprise blockchain platform for secure, scalable solutions.", website: "https://www.hyperledger.org/projects/fabric" },
            { name: "WazirX Crypto Payments", logo: "/app/integrations/pics/wazirx.png", description: "Seamless blockchain-based payment integration for businesses.", website: "https://wazirx.com" },
        ],
    },
    {
        category: "Proprietary IAM & Identity Security",
        id: "iam",
        items: [
            { name: "Aheads IAM Suite", logo: "/app/integrations/pics/aheads-iam.png", description: "Our advanced enterprise-grade identity and access management system.", website: "#" },
            { name: "Zero Trust Authentication", logo: "/app/integrations/pics/zero-trust.png", description: "Next-gen Zero Trust security model to prevent unauthorized access.", website: "#" },
            { name: "Biometric Access Control", logo: "/app/integrations/pics/biometric.png", description: "AI-powered biometric security solutions for enterprises.", website: "#" },
        ],
    },
    {
        category: "Cloud & Networking Infrastructure",
        id: "cloud-networking",
        items: [
            { name: "AWS Direct Connect", logo: "/app/integrations/pics/aws.png", description: "Enterprise-grade cloud connectivity for high-speed data transfers & security.", website: "https://aws.amazon.com/directconnect/" },
            { name: "Google Cloud Network", logo: "/app/integrations/pics/gcp.png", description: "Optimized cloud-based networking for global enterprise operations.", website: "https://cloud.google.com/networking" },
            { name: "Juniper SD-WAN", logo: "/app/integrations/pics/juniper.png", description: "AI-driven secure SD-WAN solutions trusted by multinational corporations.", website: "https://www.juniper.net" },
        ],
    },
    {
        category: "Enterprise Voice & Communication",
        id: "voice",
        items: [
            { name: "Cisco Unified Communications", logo: "/app/integrations/pics/cisco.png", description: "Scalable enterprise-grade VoIP and contact center solutions.", website: "https://www.cisco.com" },
            { name: "Avaya OneCloud", logo: "/app/integrations/pics/avaya.png", description: "AI-powered cloud contact centers for seamless customer engagement.", website: "https://www.avaya.com" },
            { name: "Microsoft Teams Integration", logo: "/app/integrations/pics/msteams.png", description: "Direct routing & enterprise PBX solutions integrated with Microsoft Teams.", website: "https://www.microsoft.com/en-us/microsoft-teams" },
        ],
    },
    {
        category: "Cybersecurity & Compliance",
        id: "cybersecurity",
        items: [
            { name: "Fortinet Zero Trust Security", logo: "/app/integrations/pics/fortinet.png", description: "Next-gen AI-driven security for preventing advanced cyber threats.", website: "https://www.fortinet.com" },
            { name: "Palo Alto Cortex XDR", logo: "/app/integrations/pics/paloalto.png", description: "Advanced AI-powered threat detection and extended security analytics.", website: "https://www.paloaltonetworks.com" },
            { name: "ISO 27001 Compliance Framework", logo: "/app/integrations/pics/iso.png", description: "Comprehensive security and compliance consulting to protect business assets.", website: "#" },
        ],
    },
    {
        category: "Smart City & E-Governance Solutions",
        id: "smart-city",
        items: [
            { name: "Intelligent Traffic Management", logo: "/app/integrations/pics/traffic.png", description: "AI-powered traffic systems for real-time congestion control.", website: "#" },
            { name: "Digital Public Services", logo: "/app/integrations/pics/egov.png", description: "E-Governance solutions for seamless citizen services.", website: "#" },
            { name: "Smart Surveillance", logo: "/app/integrations/pics/surveillance.png", description: "AI-driven facial recognition & security monitoring.", website: "#" },
        ],
    },
];

export default function Integrations() {
    const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
    // Smooth scrolling function
    const scrollToSection = (id:string) => {
        const section = sectionsRef.current[id];
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold text-gray-900 mb-6"
                >
                    Leading India’s Digital Transformation with Next-Gen IT Solutions
                </motion.h2>

                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                    AI, Blockchain, Cybersecurity, Smart City, Cloud & More – We Build the Future.
                </p>

                {/* Smooth Scroll Buttons */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                    {integrations.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm sm:text-md shadow-md hover:bg-blue-700 transition cursor-pointer whitespace-nowrap"
                            onClick={() => scrollToSection(category.id)}
                        >
                            {category.category}
                        </motion.button>
                    ))}
                </div>

                {/* Fixed Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {integrations.map((category) => (
                        <motion.div
                            key={category.id}
                            ref={(el) => (sectionsRef.current[category.id] = el)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                            {category.items.map((integration, idx) => (
                                <div key={idx} className="text-center bg-gray-50 p-4 rounded-lg shadow-sm">
                                    <Image src={integration.logo} alt={integration.name} width={60} height={60} className="mx-auto" />
                                    <h4 className="text-lg font-medium text-gray-800">{integration.name}</h4>
                                    <Link href={integration.website} className="text-blue-500 font-medium hover:underline">Learn More</Link>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
