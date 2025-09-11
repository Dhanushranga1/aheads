"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SystemIntegration() {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
            {/* Breadcrumb Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/services" className="hover:text-blue-800 transition-colors">Services</Link>
                    <span>/</span>
                    <span className="text-blue-900 font-semibold">System Integration & Project Management</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">🔧</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    System Integration & Project Management
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Seamless system integration and expert project management to ensure your technology solutions 
                    work together harmoniously and deliver results on time.
                </p>
            </motion.div>

            {/* Key Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Integration Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🔗",
                            title: "API Integration",
                            description: "Connect disparate systems through robust API integrations for seamless data flow."
                        },
                        {
                            icon: "🗃️",
                            title: "Database Integration",
                            description: "Integrate multiple databases and data sources for unified information access."
                        },
                        {
                            icon: "☁️",
                            title: "Cloud Migration",
                            description: "Migrate and integrate on-premise systems with cloud-based solutions."
                        },
                        {
                            icon: "📋",
                            title: "Project Planning",
                            description: "Comprehensive project planning and roadmap development for successful outcomes."
                        },
                        {
                            icon: "👥",
                            title: "Team Coordination",
                            description: "Expert coordination of cross-functional teams and stakeholders."
                        },
                        {
                            icon: "📊",
                            title: "Progress Monitoring",
                            description: "Real-time project monitoring and reporting for complete visibility."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Integration Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Integration Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Assessment",
                            description: "Thorough analysis of existing systems and integration requirements."
                        },
                        {
                            step: "02",
                            title: "Planning",
                            description: "Detailed integration strategy and project timeline development."
                        },
                        {
                            step: "03",
                            title: "Implementation",
                            description: "Systematic implementation with minimal disruption to operations."
                        },
                        {
                            step: "04",
                            title: "Testing & Optimization",
                            description: "Comprehensive testing and performance optimization."
                        }
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                {process.step}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{process.title}</h3>
                            <p className="text-gray-700 text-sm">{process.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Project Management Excellence</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Agile Methodology</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Iterative development approach</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Regular stakeholder feedback</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Adaptive project planning</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Continuous improvement</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Risk Management</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Proactive risk identification</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Mitigation strategy development</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Contingency planning</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="text-green-500">✓</div>
                                <span className="text-gray-700">Regular risk assessments</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Integrate Your Systems?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's create a seamless, integrated technology ecosystem for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Start Your Project
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        Schedule Consultation
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
