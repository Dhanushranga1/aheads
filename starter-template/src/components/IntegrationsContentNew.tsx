"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
    Cloud,
    Shield,
    Network,
    MessageSquare,
    Database,
    Server,
    Cpu,
    Lock,
    Wifi
} from "lucide-react";

// Tech Node Data with Icon Mapping
const integrationData = [
    {
        id: "cloud-infrastructure",
        title: "Cloud & Infrastructure",
        subtitle: "The Foundation",
        nodes: [
            {
                name: "Amazon AWS",
                icon: Cloud,
                color: "text-orange-500",
                description: "Enterprise-grade cloud connectivity",
                status: "active"
            },
            {
                name: "Microsoft Azure",
                icon: Cloud,
                color: "text-blue-400",
                description: "Comprehensive cloud services",
                status: "active"
            },
            {
                name: "Google Cloud",
                icon: Database,
                color: "text-red-400",
                description: "Scalable cloud infrastructure",
                status: "active"
            },
        ]
    },
    {
        id: "cybersecurity-shield",
        title: "Cybersecurity Shield",
        subtitle: "The Protection Layer",
        nodes: [
            {
                name: "Fortinet",
                icon: Shield,
                color: "text-red-500",
                description: "Next-gen firewall protection",
                status: "active"
            },
            {
                name: "Palo Alto Networks",
                icon: Lock,
                color: "text-orange-400",
                description: "Advanced threat detection",
                status: "active"
            },
            {
                name: "Zero Trust Architecture",
                icon: Shield,
                color: "text-purple-400",
                description: "Comprehensive security model",
                status: "active"
            },
            {
                name: "Biometric Auth",
                icon: Lock,
                color: "text-cyan-400",
                description: "Advanced access control",
                status: "active"
            },
        ]
    },
    {
        id: "collaboration-suite",
        title: "Collaboration Suite",
        subtitle: "The Productivity Layer",
        nodes: [
            {
                name: "Microsoft Teams",
                icon: MessageSquare,
                color: "text-blue-500",
                description: "Enterprise collaboration",
                status: "active"
            },
            {
                name: "Cisco Unified",
                icon: Wifi,
                color: "text-blue-400",
                description: "Enterprise VoIP solutions",
                status: "active"
            },
            {
                name: "ServiceNow",
                icon: Server,
                color: "text-green-500",
                description: "Digital workflow automation",
                status: "active"
            },
            {
                name: "Avaya Contact",
                icon: MessageSquare,
                color: "text-red-400",
                description: "Cloud contact center",
                status: "active"
            },
        ]
    },
    {
        id: "network-core",
        title: "Network Core",
        subtitle: "The Backbone",
        nodes: [
            {
                name: "Juniper Networks",
                icon: Network,
                color: "text-teal-400",
                description: "AI-driven SD-WAN",
                status: "active"
            },
            {
                name: "Cisco Networking",
                icon: Network,
                color: "text-blue-500",
                description: "Enterprise networking",
                status: "active"
            },
            {
                name: "HPE Infrastructure",
                icon: Server,
                color: "text-green-400",
                description: "Edge-to-cloud networking",
                status: "active"
            },
        ]
    },
];

export default function IntegrationsContentNew() {
    return (
        <div className="bg-[#0f172a] min-h-screen pt-20">
            {/* Radial gradient glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-20 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            ENTERPRISE TECH STACK
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Connected</span> Ecosystem
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Enterprise-grade integrations powering secure, scalable, and intelligent business operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Integration Categories */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                {integrationData.map((category, categoryIndex) => (
                    <section
                        key={category.id}
                        id={category.id}
                        className="mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-2">
                                {category.title}
                            </h2>
                            <p className="text-lg text-slate-400">{category.subtitle}</p>
                        </motion.div>

                        {/* Tech Node Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.nodes.map((node, nodeIndex) => (
                                <motion.div
                                    key={nodeIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: nodeIndex * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="group relative"
                                >
                                    {/* Glassmorphism Card */}
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 group-hover:border-white/20 group-hover:bg-slate-800/70">
                                        {/* Top glow border on hover */}
                                        <motion.div
                                            initial={{ opacity: 0, width: 0 }}
                                            whileHover={{ opacity: 1, width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        />

                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center ${node.color} group-hover:scale-110 transition-transform duration-300`}>
                                                <node.icon className="w-6 h-6" />
                                            </div>
                                            
                                            {/* Status LED - hidden, reveals on hover */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 100 }}
                                                className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs text-green-400 font-semibold">ONLINE</span>
                                            </motion.div>
                                        </div>

                                        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 group-hover:${node.color} text-white`}>
                                            {node.name}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {node.description}
                                        </p>

                                        {/* Connection indicator */}
                                        <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center space-x-2">
                                            <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    whileInView={{ width: "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: categoryIndex * 0.1 + nodeIndex * 0.1 }}
                                                    className={`h-full bg-gradient-to-r from-${node.color.split('-')[1]}-500 to-${node.color.split('-')[1]}-600`}
                                                    style={{
                                                        background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-500 font-semibold">INTEGRATED</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom CTA - Dark Theme */}
            <section className="relative z-10 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-y border-slate-700/50 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to <span className="text-orange-400">Connect</span> Your Enterprise?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Let's integrate your technology stack for maximum efficiency and security.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
                        >
                            Explore Integration Options
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
