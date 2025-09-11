"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfessionalServices() {
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
                    <span className="text-blue-900 font-semibold">Professional Services</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">👨‍💼</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Professional Services
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Tailored professional services to meet your specific business needs with 
                    expertise, quality, and dedication to excellence.
                </p>
            </motion.div>

            {/* Service Categories */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Professional Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "💼",
                            title: "Business Process Outsourcing",
                            description: "Comprehensive BPO services to streamline operations and reduce costs."
                        },
                        {
                            icon: "📋",
                            title: "Project Management Office",
                            description: "Dedicated PMO services to ensure project success and governance."
                        },
                        {
                            icon: "🎓",
                            title: "Training & Development",
                            description: "Professional training programs to enhance skills and capabilities."
                        },
                        {
                            icon: "📊",
                            title: "Business Analysis",
                            description: "In-depth business analysis and requirements gathering services."
                        },
                        {
                            icon: "🔍",
                            title: "Quality Assurance",
                            description: "Comprehensive QA services to ensure quality and compliance."
                        },
                        {
                            icon: "📝",
                            title: "Documentation Services",
                            description: "Professional documentation, technical writing, and content creation."
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Specialized Teams */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Specialized Professional Teams</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">👨‍💻</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Technical Specialists</h3>
                                <p className="text-gray-700">Expert technical professionals for specialized projects and implementations.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📈</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Business Analysts</h3>
                                <p className="text-gray-700">Skilled analysts to bridge business requirements and technical solutions.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🎯</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Project Managers</h3>
                                <p className="text-gray-700">Certified project managers to ensure successful project delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔧</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Process Experts</h3>
                                <p className="text-gray-700">Process optimization specialists to improve efficiency and productivity.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🎓</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Training Specialists</h3>
                                <p className="text-gray-700">Professional trainers and instructional designers for skill development.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔍</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Quality Assurance</h3>
                                <p className="text-gray-700">QA professionals to ensure quality standards and compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Service Delivery Models */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Flexible Service Delivery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
                    >
                        <div className="text-4xl mb-4 text-center">🏢</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">On-Site Services</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Dedicated on-site teams</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Direct collaboration</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Immediate support</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Cultural integration</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                    >
                        <div className="text-4xl mb-4 text-center">🌐</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">Remote Services</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Global talent access</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Cost-effective solutions</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>24/7 service capability</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Scalable resources</span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200"
                    >
                        <div className="text-4xl mb-4 text-center">🔄</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3 text-center">Hybrid Model</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Best of both worlds</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Flexible engagement</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Optimized costs</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-green-500">✓</span>
                                <span>Risk mitigation</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>

            {/* Key Benefits */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Why Choose Our Professional Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Fast Deployment</h3>
                        <p className="text-gray-700 text-sm">Quick team setup and project initiation to meet urgent deadlines.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">💎</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Quality Assured</h3>
                        <p className="text-gray-700 text-sm">Rigorous quality processes and experienced professionals.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Efficient</h3>
                        <p className="text-gray-700 text-sm">Competitive pricing with transparent cost structures.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Scalable Solutions</h3>
                        <p className="text-gray-700 text-sm">Flexible scaling based on project requirements and business needs.</p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Augment Your Team?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's discuss how our professional services can support your business objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Request Team
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        View Portfolio
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
