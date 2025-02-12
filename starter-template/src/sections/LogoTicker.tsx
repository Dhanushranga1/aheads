"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // shadcn Card
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation
import ai from "@/assets/images/ai.svg";
import blockchain from "@/assets/images/blockchain.svg";
import cloudComputing from "@/assets/images/cloud-computing.svg";
import cybersecurity from "@/assets/images/cybersecurity.svg";
import ITes from "@/assets/images/ITes.svg";

const logos = [
    { name: "Artificial Intelligence", image: ai, description: "Revolutionize your business with cutting-edge AI solutions." },
    { name: "Blockchain", image: blockchain, description: "Build trust and transparency with decentralized blockchain technology." },
    { name: "Cloud Computing", image: cloudComputing, description: "Scale effortlessly with our secure and reliable cloud infrastructure." },
    { name: "Cybersecurity", image: cybersecurity, description: "Protect your digital assets with state-of-the-art cybersecurity measures." },
    { name: "IT-ITes", image: ITes, description: "Streamline operations with our comprehensive IT and IT-enabled services." },
];

export default function LogoTicker() {
    const carouselRef = useRef<HTMLDivElement| null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Clone logos for seamless scrolling
    const clonedLogos = [...logos, ...logos];

    // Continuous scroll animation
    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        let animationFrameId: number;

        const scrollCarousel = () => {
            if (!isHovered) {
                carousel.scrollBy({ left: 3, behavior: "auto" }); // Adjust scroll speed

                // Reset scroll position when reaching the end
                if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
                    carousel.scrollLeft = 0;
                }
            }

            animationFrameId = requestAnimationFrame(scrollCarousel);
        };

        animationFrameId = requestAnimationFrame(scrollCarousel);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    const handleArrowClick = (direction:"left"|"right") => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12"
                >
                    Our Expertise
                </motion.h3>

                {/* Carousel Wrapper */}
                <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Carousel */}
                    <motion.div
                        ref={carouselRef}
                        className="flex items-center space-x-4 md:space-x-8 overflow-x-scroll scroll-smooth no-scrollbar"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {clonedLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-40 md:w-56 h-48 md:h-64 relative group"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="w-full h-full bg-white shadow-lg rounded-xl md:rounded-2xl border border-gray-200">
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

                                {/* Description on Hover */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 border border-gray-200 shadow-lg"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-xs md:text-sm text-gray-700 text-center px-2 md:px-4 font-sans">
                                        {logo.description}
                                    </p>
                                </motion.div>
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
