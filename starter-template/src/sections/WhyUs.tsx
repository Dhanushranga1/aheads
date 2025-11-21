"use client";

import { motion } from "framer-motion";

const features = [
    {
        icon: "🏗️",
        title: "Enterprise-Ready Architectures",
        description: "Scalable, robust solutions designed for enterprise-scale operations with proven reliability.",
    },
    {
        icon: "🔄",
        title: "Advisory + Execution + AMC",
        description: "Complete lifecycle support from strategic planning to ongoing maintenance and optimization.",
    },
    {
        icon: "☁️",
        title: "Cloud-Native Solutions",
        description: "Modern, scalable cloud architectures leveraging the latest technologies and best practices.",
    },
    {
        icon: "🔒",
        title: "Cybersecurity-First Mindset",
        description: "Security embedded at every layer, protecting your digital assets with industry-leading practices.",
    },
    {
        icon: "📊",
        title: "Data-Driven Optimization",
        description: "Continuous performance monitoring and improvement using advanced analytics and insights.",
    },
    {
        icon: "🎯",
        title: "Dedicated IT Support",
        description: "24/7 helpdesk and facility support ensuring your operations run smoothly at all times.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                            WHY CHOOSE US
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Building <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Secure</span>, Future-Ready Ecosystems
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        We don't just build IT systems. We create comprehensive, secure ecosystems that drive innovation and growth for your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Orange gradient accent */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "3rem" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className="absolute top-0 left-8 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-full transition-all duration-300"
                            />
                            
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Let's discuss how we can help you achieve your digital transformation goals.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
                        >
                            Schedule a Consultation
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
