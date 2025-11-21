"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

            {/* The Core Glow - Pulsing Orange Sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />

            <div className="relative z-10 max-w-5xl mx-auto px-4">
                {/* Glassmorphism Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl shadow-orange-500/5"
                >
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                            <Rocket className="w-4 h-4 mr-2" />
                            Ready to Launch?
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
                        Ready to Deploy Your{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                            Future-Ready Ecosystem?
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto mb-10">
                        Partner with Ahead Services for enterprise-grade architectures, cybersecurity-first solutions, and 24/7 operational excellence. Let's accelerate your digital transformation.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 inline-flex items-center"
                        >
                            Schedule Discovery Call
                            <svg
                                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>

                        <a
                            href="/services"
                            className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 inline-flex items-center"
                        >
                            Explore Capabilities
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-10 text-center text-sm text-slate-500 space-y-2">
                        <p>Enterprise support available 24/7</p>
                        <div className="flex flex-wrap justify-center gap-4 text-slate-400">
                            <span>📧 sales@aheadservices.in</span>
                            <span>📞 +91 9884 208208</span>
                            <span>📍 Chennai, India</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
