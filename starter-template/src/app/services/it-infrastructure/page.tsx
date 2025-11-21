"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ITInfrastructure() {
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
                    <span className="text-blue-900 font-semibold">IT Infrastructure & Support Services</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">🖥️</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    IT Infrastructure & Support Services
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Comprehensive IT infrastructure management and support to keep your business running smoothly, 
                    efficiently, and securely.
                </p>
            </motion.div>

            {/* Key Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🔧",
                            title: "Infrastructure Setup",
                            description: "Complete setup and configuration of your IT infrastructure from servers to network equipment."
                        },
                        {
                            icon: "🛡️",
                            title: "24/7 Monitoring",
                            description: "Round-the-clock monitoring and maintenance to ensure optimal performance and security."
                        },
                        {
                            icon: "☁️",
                            title: "Cloud Integration",
                            description: "Seamless integration with cloud services to enhance scalability and accessibility."
                        },
                        {
                            icon: "🔄",
                            title: "Backup & Recovery",
                            description: "Comprehensive backup solutions and disaster recovery planning for business continuity."
                        },
                        {
                            icon: "📞",
                            title: "Technical Support",
                            description: "Expert technical support and helpdesk services for all your IT needs."
                        },
                        {
                            icon: "⚡",
                            title: "Performance Optimization",
                            description: "Continuous optimization to improve system performance and efficiency."
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

            {/* Benefits Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Why Choose Our IT Infrastructure Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">✅</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Reduced Downtime</h3>
                                <p className="text-gray-700">Proactive monitoring and maintenance minimize system downtime and business disruption.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">💰</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Effective</h3>
                                <p className="text-gray-700">Reduce IT costs through efficient management and strategic planning.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔒</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Enhanced Security</h3>
                                <p className="text-gray-700">Robust security measures to protect your data and systems from threats.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📈</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Scalability</h3>
                                <p className="text-gray-700">Infrastructure that grows with your business needs and requirements.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">👥</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Team</h3>
                                <p className="text-gray-700">Experienced professionals dedicated to your IT success.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🚀</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Latest Technology</h3>
                                <p className="text-gray-700">Stay ahead with cutting-edge technology and best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's discuss how we can optimize your IT infrastructure for better performance and security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Get Started
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        Contact Us
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
