"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsultingAdvisory() {
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
                    <span className="text-blue-900 font-semibold">Consulting & Advisory</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">📈</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Consulting & Advisory Services
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Strategic consulting to drive your business forward with expert insights, 
                    data-driven recommendations, and proven methodologies.
                </p>
            </motion.div>

            {/* Key Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Consulting Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🎯",
                            title: "Strategic Planning",
                            description: "Develop comprehensive business strategies aligned with your goals and market opportunities."
                        },
                        {
                            icon: "🔍",
                            title: "Digital Transformation",
                            description: "Guide your organization through digital transformation initiatives and technology adoption."
                        },
                        {
                            icon: "📊",
                            title: "Process Optimization",
                            description: "Analyze and optimize business processes for improved efficiency and productivity."
                        },
                        {
                            icon: "💡",
                            title: "Innovation Strategy",
                            description: "Foster innovation culture and implement cutting-edge solutions for competitive advantage."
                        },
                        {
                            icon: "🔧",
                            title: "Technology Advisory",
                            description: "Expert guidance on technology selection, implementation, and best practices."
                        },
                        {
                            icon: "📈",
                            title: "Performance Analytics",
                            description: "Data-driven insights and analytics to measure and improve business performance."
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

            {/* Consulting Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Consulting Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Discovery",
                            description: "Understanding your business, challenges, and objectives."
                        },
                        {
                            step: "02",
                            title: "Analysis",
                            description: "In-depth analysis of current state and market conditions."
                        },
                        {
                            step: "03",
                            title: "Strategy",
                            description: "Developing tailored strategies and actionable recommendations."
                        },
                        {
                            step: "04",
                            title: "Implementation",
                            description: "Supporting execution with hands-on guidance and expertise."
                        },
                        {
                            step: "05",
                            title: "Optimization",
                            description: "Continuous monitoring and optimization for sustained success."
                        }
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                                {process.step}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{process.title}</h3>
                            <p className="text-gray-700 text-sm">{process.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Industries We Serve */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Industries We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: "🏭", name: "Manufacturing" },
                        { icon: "🏥", name: "Healthcare" },
                        { icon: "🏦", name: "Financial Services" },
                        { icon: "🛒", name: "Retail & E-commerce" },
                        { icon: "🎓", name: "Education" },
                        { icon: "🏗️", name: "Construction" },
                        { icon: "⚡", name: "Energy & Utilities" },
                        { icon: "🚛", name: "Logistics & Supply Chain" }
                    ].map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-3xl mb-2">{industry.icon}</div>
                            <h3 className="text-sm font-semibold text-blue-900">{industry.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Value Proposition */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Why Choose Our Advisory Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Proven Results</h3>
                        <p className="text-gray-700">Track record of delivering measurable business outcomes and ROI for our clients.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">👥</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Expert Team</h3>
                        <p className="text-gray-700">Industry experts with deep knowledge and years of practical experience.</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">🔄</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Agile Approach</h3>
                        <p className="text-gray-700">Flexible, adaptive consulting approach that evolves with your changing needs.</p>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's discuss how our strategic consulting can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Schedule Consultation
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        Download Case Studies
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
