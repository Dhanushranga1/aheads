"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "40%",
        label: "DOWNTIME REDUCTION",
        description: "Minimize operational disruptions",
    },
    {
        value: "80%",
        label: "RISK MITIGATION",
        description: "Enhanced security protocols",
    },
    {
        value: "100%",
        label: "TAILORED DEPLOYMENTS",
        description: "Custom solutions for your needs",
    },
    {
        value: "24/7",
        label: "SOC MONITORING",
        description: "Round-the-clock protection",
    },
];

export default function Stats() {
    return (
        <section className="relative -mt-16 z-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="text-center group"
                            >
                                <div className="relative">
                                    {/* Orange accent line that appears on hover */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "3rem" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                        className="h-1 bg-gradient-to-r from-brand-orange to-orange-400 mx-auto mb-4 rounded-full group-hover:w-full transition-all duration-300"
                                    />
                                    
                                    <motion.h3
                                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent mb-2"
                                    >
                                        {stat.value}
                                    </motion.h3>
                                    
                                    <p className="text-sm font-bold text-slate-200 tracking-wider mb-2">
                                        {stat.label}
                                    </p>
                                    
                                    <p className="text-xs text-slate-400">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Subtle bottom decoration */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
