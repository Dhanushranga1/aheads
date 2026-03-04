"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Client/Partner Logos - using public folder for reliable deployment
const logos = [
    { name: "Acme Corp", image: "/logos/acme-corp.svg" },
    { name: "Apex", image: "/logos/apex.svg" },
    { name: "Celestial", image: "/logos/celestial.svg" },
    { name: "Echo Valley", image: "/logos/echo-valley.svg" },
    { name: "Quantum", image: "/logos/quantum.svg" },
    { name: "Twice", image: "/logos/twice.svg" },
];

export default function LogoTicker() {
    return (
        <section className="py-16 md:py-20 bg-brand-blue relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        TRUSTED BY INDUSTRY LEADERS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Who <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent">Trusts</span> Us
                    </h2>
                </motion.div>

                {/* Infinite Scroll Container */}
                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-blue to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-blue to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Track - Pause on Hover */}
                    <div className="logo-ticker-wrapper group">
                        <div className="logo-ticker-track">
                            {/* Triple the logos for seamless loop */}
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div
                                    key={index}
                                    className="logo-ticker-item"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={logo.name}
                                        width={140}
                                        height={60}
                                        unoptimized
                                        className="h-12 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center text-sm text-slate-400 mt-8"
                >
                    Hover to pause • Trusted by 100+ enterprise clients globally
                </motion.p>
            </div>

            {/* CSS Keyframes for Infinite Scroll */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                .logo-ticker-wrapper {
                    overflow: hidden;
                    position: relative;
                }

                .logo-ticker-track {
                    display: flex;
                    gap: 4rem;
                    animation: scroll 30s linear infinite;
                }

                .logo-ticker-wrapper:hover .logo-ticker-track {
                    animation-play-state: paused;
                }

                .logo-ticker-item {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 140px;
                }
            `}</style>
        </section>
    );
}
