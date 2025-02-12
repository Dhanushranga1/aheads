"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-orange-50 to-gray-50">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white to-blue-100 opacity-30 -z-10"></div>

            <div className="relative z-10">
                <div className="container space-y-12 px-4 text-center">
                    {/* Attention-Grabbing Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white text-black p-6 rounded-lg shadow-2xl"
                    >
                        <p className="text-xl md:text-2xl font-bold text-orange-500">
                            Empowering industries for a <span className="text-blue-600">connected future</span>, leveraging over <span className="text-gray-800">25 years</span> of expertise.
                        </p>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                    >
                        Transforming Businesseses with <span className="text-orange-500">Innovation</span> and <span className="text-blue-600">Excellence</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed"
                    >
                        "At Ahead Services, we don’t just deliver solutions; we create <span className='font-semibold text-gray-900'>legacies of transformation</span>. From <span className='text-orange-500'>Telecom</span> to <span className='text-blue-600'>Healthcare</span>, our expertise in <span className='font-semibold text-gray-900'>AI</span>, <span className='font-semibold text-gray-900'>Blockchain</span>, and <span className='font-semibold text-gray-900'>Cloud Technologies</span> empowers industries to <span className='text-orange-500'>excel</span> in an ever-evolving digital world."
                    </motion.p>

                    {/* Call-to-Action Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                        className="form-container mt-12 p-8 bg-gray-100 rounded-lg shadow-lg"
                    >
                        <form className="email-form">
                            <label htmlFor="email" className="form-heading block text-lg font-semibold mb-2 text-gray-800">
                                Unlock the Future of IT Solutions
                            </label>
                            <p className="form-subtext text-sm text-gray-600 mb-4">
                                Experience the Ahead Services difference. Enter your email to receive our exclusive brochure and see how we can revolutionize your business.
                            </p>
                            <div className="form-group flex flex-col sm:flex-row items-center gap-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                    className="email-input flex-1 text-black p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button
                                    type="submit"
                                    className="submit-button bg-orange-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    Get the Brochure
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
