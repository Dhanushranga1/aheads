"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Ready to Build Your Secure, Future-Ready Ecosystem?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Partner with Ahead Services for enterprise-ready architectures, cybersecurity-first solutions, 
                        and comprehensive IT support. Let's accelerate your digital transformation journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link href="/services">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl"
                            >
                                Explore Our Capabilities
                            </motion.button>
                        </Link>
                        <Link href="mailto:info@aheadservices.in">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-xl border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                    </div>
                    <div className="mt-8 text-white/90">
                        <p className="text-sm md:text-base">📧 info@aheadservices.in | 📞 +91 9884 208208 | 📍 Chennai, India</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
