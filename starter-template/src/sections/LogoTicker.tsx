"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Client/Partner Logos
import acmeCorp from "@/assets/images/acme-corp.svg";
import apex from "@/assets/images/apex.svg";
import celestial from "@/assets/images/celestial.svg";
import echoValley from "@/assets/images/echo-valley.svg";
import quantum from "@/assets/images/quantum.svg";
import twice from "@/assets/images/twice.svg";

const logos = [
    { name: "Acme Corp", image: acmeCorp },
    { name: "Apex", image: apex },
    { name: "Celestial", image: celestial },
    { name: "Echo Valley", image: echoValley },
    { name: "Quantum", image: quantum },
    { name: "Twice", image: twice },
];

export default function LogoTicker() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        TRUSTED BY INDUSTRY LEADERS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Who <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Trusts</span> Us
                    </h2>
                </motion.div>

                {/* Infinite Scroll Container */}
                <div className="relative">
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                                        className="h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                                    <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-6">
                                        <div className="relative w-16 h-16 md:w-24 md:h-24 mb-3">
                                            <Image
                                                src={logo.image}
                                                alt={logo.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h4 className="text-sm md:text-lg font-semibold text-gray-900 text-center">
                                            {logo.name}
                                        </h4>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Left Arrow (Hidden on Mobile) */}
                    <motion.button
                        onClick={() => handleArrowClick("left")}
                        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 z-20 border border-gray-200"
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    {/* Right Arrow (Hidden on Mobile) */}
                    <motion.button
                        onClick={() => handleArrowClick("right")}
                        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 z-20 border border-gray-200"
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
