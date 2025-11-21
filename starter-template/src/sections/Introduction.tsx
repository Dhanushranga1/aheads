"use client";

import { motion } from "framer-motion";

const text = `Founded in 2013 and headquartered in Bangalore, Ahead Services has built a reputation for delivering enterprise-ready technology solutions with a cybersecurity-first mindset. We don't just build IT systems – we build secure, future-ready ecosystems that drive business transformation.`;

export default function Introduction() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    >
                        Excellence in <span className="text-orange-500">Technology</span> Solutions
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        {text}
                    </motion.p>
                    
                    {/* Stats */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">11+</div>
                            <div className="text-gray-600">Years of Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">SOC Monitoring</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                            <div className="text-gray-600">Tailored Solutions</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
