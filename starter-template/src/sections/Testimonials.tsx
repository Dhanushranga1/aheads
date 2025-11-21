"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar2 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-lula-meyers.jpg";

const testimonials = [
    {
        quote: "Ahead Services transformed our legacy infrastructure into a cloud-native powerhouse. Their security-first approach gave us peace of mind while cutting operational costs by 40%. The team's expertise in hybrid architectures is unmatched.",
        author: "Rajesh Verma",
        role: "CTO",
        company: "TechNova Industries",
        avatar: avatar1
    },
    {
        quote: "We needed a partner who could navigate complex compliance requirements for our BFSI clients. Ahead delivered SOC 2 compliant systems with zero-downtime migration. Their 24/7 SOC monitoring has been a game-changer.",
        author: "Priya Sharma",
        role: "VP of Engineering",
        company: "FinSecure Solutions",
        avatar: avatar2
    },
    {
        quote: "The agile deployment model was impressive—from discovery to full production in just 5 weeks. What stood out was their proactive approach: they identified vulnerabilities we didn't even know existed and patched them before go-live.",
        author: "Michael Chen",
        role: "Head of Infrastructure",
        company: "Quantum Healthcare",
        avatar: avatar3
    },
    {
        quote: "After evaluating 12 vendors, Ahead was the only team that truly understood our hybrid cloud needs. Their integration of AWS, Azure, and on-prem systems was seamless. ROI was visible within 3 months.",
        author: "Anjali Patel",
        role: "Director of IT",
        company: "RetailMax Group",
        avatar: avatar4
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-[#0f172a] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            {/* Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                            CLIENT SUCCESS
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Voices from the <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Industry</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto"
                    >
                        Real results from enterprise leaders who trusted us with their mission-critical infrastructure
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Terminal-Style Card */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
                                {/* Quote Icon */}
                                <Quote className="w-12 h-12 text-orange-500 mb-6 opacity-50" />

                                {/* Quote Text */}
                                <blockquote className="text-slate-300 leading-relaxed mb-8 flex-grow">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500/20">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-slate-400">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-sm text-orange-500 font-mono">
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
                        <div className="text-slate-400 text-sm">Enterprise Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                        <div className="text-slate-400 text-sm">Client Retention</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                        <div className="text-slate-400 text-sm">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                        <div className="text-slate-400 text-sm">Support Uptime</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
