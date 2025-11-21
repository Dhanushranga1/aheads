"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "@/assets/images/logo1.svg";
import logoImage1 from "@/assets/images/logo2.svg";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Integrations", href: "/integrations" },
    { label: "Why Us", href: "/why-us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    scrolled 
                        ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-black/5 py-3' 
                        : 'bg-transparent py-6'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center space-x-2"
                            >
                                <Image
                                    src={logoImage1}
                                    alt="Ahead Services"
                                    className="h-10 w-auto"
                                    priority
                                />
                                <Image
                                    src={logoImage}
                                    alt="Ahead Services Logo"
                                    className="h-10 w-auto"
                                    priority
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5">
                                {navLinks.map((link) => (
                                    <Link key={link.label} href={link.href}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className={`relative px-4 py-2 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 ${
                                                pathname === link.href 
                                                    ? 'text-white' 
                                                    : 'text-slate-400 hover:text-white'
                                            }`}
                                        >
                                            {link.label}
                                            {pathname === link.href && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="w-1.5 h-1.5 rounded-full bg-brand-orange"
                                                    style={{ boxShadow: '0 0 8px rgba(249, 115, 22, 0.8)' }}
                                                />
                                            )}
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                            
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300"
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.9 }}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                            <div className="flex flex-col justify-center items-center space-y-1.5">
                                <motion.span
                                    animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-5 h-0.5 block bg-white"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-5 h-0.5 block bg-white"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-5 h-0.5 block bg-white"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md"
                    >
                        {/* Ambient Lighting Effects */}
                        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                        
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
                            <nav className="space-y-8">
                                {navLinks.map((link, index) => (
                                    <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group flex items-center gap-4"
                                        >
                                            <span className="text-brand-orange font-mono text-lg">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-3xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
                                                {link.label}
                                            </span>
                                            <ArrowUpRight 
                                                className="w-6 h-6 text-brand-orange opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" 
                                            />
                                        </motion.div>
                                    </Link>
                                ))}
                            </nav>

                            <Link href="/contact">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-16 bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-brand-orange/20 transition-all duration-300"
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}