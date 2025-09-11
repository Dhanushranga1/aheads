"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SurveillanceSolutions() {
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
                    <span className="text-blue-900 font-semibold">Surveillance Solutions</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">📹</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Advanced Surveillance Solutions
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Comprehensive surveillance systems for enhanced security, featuring cutting-edge technology 
                    and intelligent monitoring capabilities to protect your assets.
                </p>
            </motion.div>

            {/* Surveillance Systems */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Surveillance Systems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "📷",
                            title: "IP Camera Systems",
                            description: "High-definition IP cameras with remote monitoring and recording capabilities."
                        },
                        {
                            icon: "🎯",
                            title: "Video Analytics",
                            description: "AI-powered video analytics for intelligent threat detection and behavioral analysis."
                        },
                        {
                            icon: "🔒",
                            title: "Access Control",
                            description: "Integrated access control systems with biometric and card-based authentication."
                        },
                        {
                            icon: "🚨",
                            title: "Alarm Systems",
                            description: "Comprehensive alarm systems with instant notification and emergency response."
                        },
                        {
                            icon: "📱",
                            title: "Mobile Monitoring",
                            description: "Real-time mobile access and control through dedicated smartphone applications."
                        },
                        {
                            icon: "☁️",
                            title: "Cloud Storage",
                            description: "Secure cloud-based storage and backup solutions for surveillance footage."
                        }
                    ].map((system, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{system.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{system.title}</h3>
                            <p className="text-gray-700">{system.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Advanced Features */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Advanced Security Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🤖</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">AI-Powered Detection</h3>
                                <p className="text-gray-700">Advanced artificial intelligence for facial recognition, object detection, and behavioral analysis.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🌙</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Night Vision</h3>
                                <p className="text-gray-700">High-quality infrared and thermal imaging for 24/7 surveillance capabilities.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🌦️</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Weather Resistant</h3>
                                <p className="text-gray-700">Durable, weatherproof cameras designed for outdoor installations and harsh conditions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">⚡</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Real-time Alerts</h3>
                                <p className="text-gray-700">Instant notifications via email, SMS, and mobile push notifications for immediate response.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔐</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Encryption & Security</h3>
                                <p className="text-gray-700">End-to-end encryption and secure data transmission to protect sensitive surveillance data.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📊</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Analytics Dashboard</h3>
                                <p className="text-gray-700">Comprehensive reporting and analytics dashboard for security insights and trends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Installation Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Installation Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Site Assessment",
                            description: "Comprehensive security assessment and system design planning.",
                            color: "from-red-500 to-red-600"
                        },
                        {
                            step: "02",
                            title: "System Design",
                            description: "Custom surveillance system design based on security requirements.",
                            color: "from-blue-500 to-blue-600"
                        },
                        {
                            step: "03",
                            title: "Installation",
                            description: "Professional installation with minimal disruption to operations.",
                            color: "from-green-500 to-green-600"
                        },
                        {
                            step: "04",
                            title: "Testing & Training",
                            description: "System testing, configuration, and comprehensive user training.",
                            color: "from-purple-500 to-purple-600"
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

            {/* Applications */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Security Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">🏢</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Security</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Office building surveillance</li>
                            <li>• Employee safety monitoring</li>
                            <li>• Asset protection</li>
                            <li>• Visitor management</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">🏭</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Industrial Security</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Perimeter security</li>
                            <li>• Equipment monitoring</li>
                            <li>• Safety compliance</li>
                            <li>• Theft prevention</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-3xl mb-4">🏪</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Retail Security</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Loss prevention</li>
                            <li>• Customer behavior analysis</li>
                            <li>• Inventory protection</li>
                            <li>• Point-of-sale monitoring</li>
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
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Security Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-4xl mb-4">🛡️</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Enhanced Protection</h3>
                        <p className="text-gray-700 text-sm">Comprehensive security coverage with advanced threat detection capabilities.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Savings</h3>
                        <p className="text-gray-700 text-sm">Reduce security costs through automation and intelligent monitoring systems.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Improved Efficiency</h3>
                        <p className="text-gray-700 text-sm">Streamline security operations with centralized monitoring and control.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Remote Access</h3>
                        <p className="text-gray-700 text-sm">Monitor and control security systems from anywhere, anytime.</p>
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
                <h2 className="text-3xl font-bold mb-4">Secure Your Assets Today</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's design a comprehensive surveillance solution tailored to your security needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Get Security Assessment
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        View Security Portfolio
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
