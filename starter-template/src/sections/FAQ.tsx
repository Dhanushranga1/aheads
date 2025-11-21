"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
    {
        question: "How quickly can you deploy a solution?",
        answer: "Our agile deployment model ensures most solutions go live within 4-8 weeks. For urgent requirements, we offer rapid deployment tracks (2-3 weeks) with pre-configured modules. Every project includes a detailed timeline with milestone checkpoints."
    },
    {
        question: "Is cloud migration secure for our sensitive data?",
        answer: "Absolutely. We implement Zero Trust Architecture, end-to-end encryption (AES-256), and compliance with ISO 27001, SOC 2, and industry-specific regulations (HIPAA, PCI-DSS). All migrations include security audits and penetration testing before production."
    },
    {
        question: "Can you integrate with our legacy systems?",
        answer: "Yes. We specialize in hybrid architectures that bridge legacy infrastructure with modern cloud platforms. Our middleware solutions ensure seamless data flow without disrupting existing operations. We've successfully integrated systems from mainframes to modern microservices."
    },
    {
        question: "What's included in your 24/7 support?",
        answer: "Our Enterprise Support includes: Dedicated SOC monitoring, 15-minute response time for P1 incidents, proactive threat intelligence, regular health checks, quarterly optimization reviews, and a dedicated technical account manager."
    },
    {
        question: "How do you handle compliance and regulatory requirements?",
        answer: "We maintain active certifications for major frameworks (ISO 27001, SOC 2, GDPR, HIPAA) and embed compliance into every layer of our solutions. Our team includes certified compliance auditors who ensure your systems meet industry-specific regulatory requirements."
    },
    {
        question: "What makes your cybersecurity approach different?",
        answer: "We implement Defense-in-Depth with multiple security layers: Perimeter security (NGFW, IPS), Identity & Access Management (Zero Trust), Data encryption (at-rest and in-transit), continuous monitoring (SIEM), and regular red team exercises. Security isn't an add-on—it's architected from day one."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column - Hook */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:sticky lg:top-32"
                        >
                            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                QUESTIONS & ANSWERS
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                Everything You Need to <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Know</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Can't find what you're looking for? Our technical team is ready to answer your specific questions.
                            </p>
                            <a
                                href="mailto:sales@aheadservices.in"
                                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group"
                            >
                                <Mail className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                Contact Technical Team
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    {/* Question Button */}
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between group"
                                    >
                                        <span className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 pr-4">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                                                openIndex === index ? 'rotate-180 text-orange-600' : ''
                                            }`}
                                        />
                                    </button>

                                    {/* Answer Panel */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${
                                            openIndex === index 
                                                ? 'max-h-96 opacity-100' 
                                                : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                    >
                                        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
