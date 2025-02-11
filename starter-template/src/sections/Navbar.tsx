"use client"; // Enable client-side interactivity for Framer Motion

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImage from "@/assets/images/logo1.svg";
import logoImage1 from "@/assets/images/logo2.svg";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Animation variants for Framer Motion
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-4 bg-white w-full sticky top-0 z-50 shadow-sm"
        >
            <div className="w-full px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <Image
                            src={logoImage1}
                            alt="Aheads logo name"
                            className="h-10 w-auto"
                            priority
                        />
                        <Image
                            src={logoImage}
                            alt="Aheads logo"
                            className="h-10 w-full 2xl:shrink-0"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-700 hover:text-blue-500 font-medium text-lg px-4 py-2 rounded-lg transition-colors duration-300"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none md:hidden flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                            className="mt-4 md:hidden bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-4"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    variants={linkVariants}
                                    whileHover={{ scale: 1.05, color: "#3B82F6" }}
                                    transition={{ duration: 0.2 }}
                                    className="block text-gray-700 hover:text-blue-500 font-medium text-lg px-4 py-2 rounded-lg transition-colors duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.button
                                variants={linkVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                Contact Us
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
}