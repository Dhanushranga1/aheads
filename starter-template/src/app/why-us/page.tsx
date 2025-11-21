"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, Wrench } from "lucide-react";
import Footer from "@/sections/FooterNew";

const steps = [
    { number: "01", title: "Discover", subtitle: "Audit & Consulting", icon: Search, description: "We deep-dive into your existing infrastructure, identify bottlenecks, and define clear technical & business objectives.", features: ["Gap Analysis", "Risk Assessment", "Technology Audit"] },
    { number: "02", title: "Architect", subtitle: "Solution Design", icon: Lightbulb, description: "Our engineers draft a secure, scalable blueprint tailored to your specific enterprise needs, prioritizing resilience.", features: ["System Design", "Security Framework", "Integration Planning"] },
    { number: "03", title: "Deploy", subtitle: "Agile Implementation", icon: Rocket, description: "We execute the migration or development using agile sprints with minimal downtime, ensuring seamless integration.", features: ["Sprint Execution", "Quality Assurance", "Go-Live Support"] },
    { number: "04", title: "Evolve", subtitle: "24/7 Management", icon: Wrench, description: "Technology never stops. We provide continuous SOC monitoring, performance tuning, and strategic updates.", features: ["SOC Monitoring", "Performance Tuning", "Regular Updates"] }
];

export default function WhyUsPage() {
    // SEO: Update document metadata for client component
    useEffect(() => {
        document.title = "Why Choose Ahead Services | Proven Enterprise IT Methodology";
        
        const updateMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateMeta('description', 'Discover our 4-stage execution framework: Discover, Architect, Deploy, Evolve. ISO certified methodology trusted by 500+ organizations worldwide for cloud, AI, and cybersecurity implementations.');
        updateMeta('keywords', 'IT methodology, enterprise IT framework, technology implementation, agile deployment, IT consulting approach, digital transformation process');
        
        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://www.aheads.in/why-us';
    }, []);

    return (
        <div className="pt-20 bg-[#0f172a] min-h-screen">
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 mb-4">
                            <span className="text-brand-orange font-semibold uppercase tracking-wide text-sm">OUR METHODOLOGY</span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white mb-6">
                            The Execution <span className="bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent">Framework</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-300 max-w-3xl mx-auto">
                            We implement a proven, repeatable 4-stage methodology that ensures long-term success for 500+ organizations worldwide.
                        </motion.p>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/10" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                            {steps.map((step, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative group">
                                    <div className="flex justify-center mb-6 relative z-10">
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-orange to-orange-600 shadow-lg shadow-brand-orange/30 group-hover:shadow-xl group-hover:shadow-brand-orange/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                                            <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className="bg-slate-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-brand-orange/30 hover:bg-slate-800/60 transition-all duration-300 h-full">
                                        <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-brand-orange to-orange-400 bg-clip-text text-transparent opacity-30">{step.number}</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm font-semibold mb-4 uppercase tracking-wide text-brand-orange">{step.subtitle}</p>
                                        <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>
                                        <div className="space-y-2">
                                            {step.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start text-sm text-slate-400">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 mr-2 flex-shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-16">
                        <p className="text-slate-300 mb-6">Ready to see our framework in action?</p>
                        <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-semibold rounded-lg shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/50 transition-all duration-300">
                            Schedule a Discovery Call
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
