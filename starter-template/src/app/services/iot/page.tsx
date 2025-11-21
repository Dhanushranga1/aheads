"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function IoT() {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen pt-20 lg:pt-24">
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
                    <span className="text-blue-900 font-semibold">Internet of Things (IoT)</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">🌐</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Internet of Things (IoT) Solutions
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Innovative IoT solutions for smart connectivity, enabling intelligent automation 
                    and data-driven insights across your entire ecosystem.
                </p>
            </motion.div>

            {/* IoT Solutions */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our IoT Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🏠",
                            title: "Smart Building Solutions",
                            description: "Intelligent building management systems for energy efficiency and security."
                        },
                        {
                            icon: "🏭",
                            title: "Industrial IoT",
                            description: "Connected manufacturing and industrial automation for improved productivity."
                        },
                        {
                            icon: "🚗",
                            title: "Smart Transportation",
                            description: "Connected vehicle systems and intelligent transportation management."
                        },
                        {
                            icon: "💡",
                            title: "Smart Lighting",
                            description: "Intelligent lighting systems with automated controls and energy optimization."
                        },
                        {
                            icon: "🌱",
                            title: "Environmental Monitoring",
                            description: "Real-time environmental sensors for air quality, temperature, and humidity."
                        },
                        {
                            icon: "🔋",
                            title: "Energy Management",
                            description: "Smart grid solutions and energy consumption optimization systems."
                        }
                    ].map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{solution.title}</h3>
                            <p className="text-gray-700">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* IoT Platform Features */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">IoT Platform Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: "📡",
                            title: "Device Connectivity",
                            description: "Seamless connection of various IoT devices and sensors."
                        },
                        {
                            icon: "📊",
                            title: "Real-time Analytics",
                            description: "Live data processing and actionable insights generation."
                        },
                        {
                            icon: "🔒",
                            title: "Security & Privacy",
                            description: "End-to-end encryption and robust security protocols."
                        },
                        {
                            icon: "☁️",
                            title: "Cloud Integration",
                            description: "Scalable cloud infrastructure for data storage and processing."
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                        >
                            <div className="text-3xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-700 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Implementation Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">IoT Implementation Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Assessment & Planning",
                            description: "Analyze requirements and design IoT architecture.",
                            color: "from-blue-500 to-blue-600"
                        },
                        {
                            step: "02",
                            title: "Device Selection",
                            description: "Choose optimal sensors and connectivity solutions.",
                            color: "from-purple-500 to-purple-600"
                        },
                        {
                            step: "03",
                            title: "Platform Development",
                            description: "Build custom IoT platform and data pipelines.",
                            color: "from-green-500 to-green-600"
                        },
                        {
                            step: "04",
                            title: "Deployment & Support",
                            description: "Deploy solution and provide ongoing maintenance.",
                            color: "from-orange-500 to-orange-600"
                        }
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-center"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${process.color} text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-lg`}>
                                {process.step}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{process.title}</h3>
                            <p className="text-gray-700 text-sm">{process.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Industry Applications */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Industry Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🏥</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Healthcare</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Patient monitoring systems</li>
                            <li>• Medical device connectivity</li>
                            <li>• Asset tracking</li>
                            <li>• Environmental monitoring</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🌾</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Agriculture</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Precision farming</li>
                            <li>• Soil monitoring</li>
                            <li>• Irrigation automation</li>
                            <li>• Livestock tracking</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl mb-4">🏙️</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Smart Cities</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Traffic management</li>
                            <li>• Waste management</li>
                            <li>• Public safety</li>
                            <li>• Energy optimization</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Benefits */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Benefits of Our IoT Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Reduction</h3>
                        <p className="text-gray-700 text-sm">Reduce operational costs through automation and optimization.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Increased Efficiency</h3>
                        <p className="text-gray-700 text-sm">Improve operational efficiency with real-time monitoring and control.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Better Insights</h3>
                        <p className="text-gray-700 text-sm">Gain valuable insights from connected device data and analytics.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Response</h3>
                        <p className="text-gray-700 text-sm">Enable rapid response to events and anomalies through real-time alerts.</p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Connect Your World?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's build intelligent IoT solutions that transform your business operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Start IoT Project
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        View IoT Demo
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
