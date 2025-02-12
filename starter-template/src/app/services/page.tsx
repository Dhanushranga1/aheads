"use client"; // Enable client-side interactivity for Framer Motion

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Services() {
    const services = [
        {
            category: "Core Services",
            items: [
                { title: "IT Infrastructure & Support Services", icon: "🖥️", description: "Comprehensive IT infrastructure management and support." },
                { title: "System Integration & Project Management", icon: "🔧", description: "Seamless system integration and expert project management." },
                { title: "Consulting & Advisory", icon: "📈", description: "Strategic consulting to drive your business forward." },
                { title: "Professional Services", icon: "👨‍💼", description: "Tailored professional services to meet your needs." },
            ],
        },
        {
            category: "Specialized Solutions",
            items: [
                { title: "Internet of Things (IoT)", icon: "🌐", description: "Innovative IoT solutions for smart connectivity." },
                { title: "Surveillance Solutions", icon: "📹", description: "Advanced surveillance for enhanced security." },
                { title: "Cloud Computing", icon: "☁️", description: "Scalable cloud solutions for your business." },
                { title: "Unified Communications", icon: "📞", description: "Integrated communication solutions for better collaboration." },
            ],
        },
    ];

    // State to track which card is expanded (for mobile)
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    // State to track screen width for responsive behavior
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleCard = (title: string) => {
        setExpandedCard(expandedCard === title ? null : title);
    };

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const cardHoverVariants = {
        hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" },
    };

    const cardExpandVariants = {
        collapsed: { height: "auto" },
        expanded: { height: "auto" },
    };

    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-8 text-center text-blue-900"
            >
                Transforming Businesses with Excellence
            </motion.h1>

            {/* Enhanced Services Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="my-12"
            >
                {services.map((serviceCategory, index) => (
                    <div key={index} className="mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-3xl font-semibold mb-8 text-center text-blue-800"
                        >
                            {serviceCategory.category}
                        </motion.h2>

                        {/* Mobile: Expandable Cards */}
                        {isMobile ? (
                            <div className="space-y-4">
                                {serviceCategory.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="group relative bg-white p-6 rounded-xl shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500 cursor-pointer"
                                        onClick={() => toggleCard(item.title)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="text-4xl text-blue-500">{item.icon}</div>
                                                <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: expandedCard === item.title ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-blue-500"
                                            >
                                                ▼
                                            </motion.div>
                                        </div>

                                        {/* Expandable Content */}
                                        <AnimatePresence>
                                            {expandedCard === item.title && (
                                                <motion.div
                                                    variants={cardExpandVariants}
                                                    initial="collapsed"
                                                    animate="expanded"
                                                    exit="collapsed"
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-4"
                                                >
                                                    <p className="text-gray-700 mb-6">{item.description}</p>
                                                    <a
                                                        href="#"
                                                        className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300"
                                                    >
                                                        Learn More →
                                                    </a>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            // Desktop: Grid Layout
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {serviceCategory.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: itemVariants.hidden,
                                            visible: itemVariants.visible,
                                            hover: cardHoverVariants.hover,
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                                    >
                                        <div className="text-5xl mb-4 text-blue-500">{item.icon}</div>
                                        <h3 className="text-2xl font-semibold mb-4 text-blue-900">{item.title}</h3>
                                        <p className="text-gray-700 mb-6">{item.description}</p>
                                        <a
                                            href="#"
                                            className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300"
                                        >
                                            Learn More →
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </motion.section>
        </div>
    );
}