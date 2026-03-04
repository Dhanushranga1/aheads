"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Award,
    ShieldCheck,
    Server,
    Lock,
    RefreshCw,
    Leaf,
    HardHat,
    UtensilsCrossed,
    ClipboardList,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

const isoServices = [
    {
        standard: "ISO 9001",
        name: "Quality Management System",
        acronym: "QMS",
        icon: ClipboardList,
        description:
            "Establish and maintain a framework for consistent quality delivery across all business processes.",
    },
    {
        standard: "ISO 27001",
        name: "Information Security Management System",
        acronym: "ISMS",
        icon: ShieldCheck,
        description:
            "Protect sensitive information assets with a systematic approach to managing information security risks.",
    },
    {
        standard: "ISO 20000",
        name: "IT Service Management",
        acronym: "ITSM",
        icon: Server,
        description:
            "Align IT service delivery with business needs through internationally recognised service management practices.",
    },
    {
        standard: "ISO 27701",
        name: "Privacy Information Management System",
        acronym: "PIMS",
        icon: Lock,
        description:
            "Extend your ISMS to cover privacy management and demonstrate GDPR / data protection compliance.",
    },
    {
        standard: "ISO 22301",
        name: "Business Continuity Management System",
        acronym: "BCMS",
        icon: RefreshCw,
        description:
            "Build organisational resilience so critical operations continue during and after disruptive incidents.",
    },
    {
        standard: "ISO 14001",
        name: "Environmental Management System",
        acronym: "EMS",
        icon: Leaf,
        description:
            "Reduce environmental impact, meet regulatory obligations, and demonstrate sustainability commitments.",
    },
    {
        standard: "ISO 45001",
        name: "Occupational Health & Safety Management System",
        acronym: "OHSMS",
        icon: HardHat,
        description:
            "Prevent work-related injury and ill health by managing occupational health and safety risks proactively.",
    },
    {
        standard: "ISO 22000",
        name: "Food Safety Management System",
        acronym: "FSMS",
        icon: UtensilsCrossed,
        description:
            "Ensure food safety at every stage of the supply chain through hazard analysis and preventive controls.",
    },
];

const approachSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "Understanding your organisation, scope, and certification goals.",
    },
    {
        step: "02",
        title: "Gap Analysis",
        description: "Identifying gaps between your current practices and the standard's requirements.",
    },
    {
        step: "03",
        title: "Implementation",
        description: "Developing policies, procedures, and controls to close identified gaps.",
    },
    {
        step: "04",
        title: "Internal Audit",
        description: "Conducting a pre-certification audit to validate readiness.",
    },
    {
        step: "05",
        title: "Certification",
        description: "Supporting you through the formal certification body audit.",
    },
];

export default function ConsultingAdvisory() {
    return (
        <div className="bg-brand-blue min-h-screen pt-20 relative overflow-hidden text-white">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_80%)]" />

            {/* Glow accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-40 top-24 w-[500px] h-[500px] rounded-full blur-3xl bg-orange-500/8" />
                <div className="absolute -right-60 bottom-32 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/8" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">

                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 text-sm text-slate-400 mb-12"
                >
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-200">Consulting & Advisory</span>
                </motion.nav>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-6">
                        <Award className="w-4 h-4" />
                        ISO CERTIFICATION EXPERTS
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-4">
                        Consulting &
                        <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">
                            Advisory
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                        We provide comprehensive consulting and advisory services to help organisations achieve
                        and maintain internationally recognised ISO certifications. Our experts support
                        businesses through the entire certification journey — including gap analysis,
                        implementation, documentation, risk management, internal audits, and certification
                        readiness.
                    </p>
                </motion.div>

                {/* ISO Services Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-2xl font-bold text-white mb-2">Our ISO consulting services include:</h2>
                    <p className="text-slate-400 mb-10 text-sm">
                        We help organisations streamline governance, strengthen security and compliance
                        frameworks, and achieve global certification standards.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {isoServices.map((service, index) => (
                            <motion.div
                                key={service.standard}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="relative bg-slate-800/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/60 hover:-translate-y-0.5 transform transition-all duration-200 group overflow-hidden"
                            >
                                {/* Top accent line on hover */}
                                <div className="absolute left-0 top-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-orange to-yellow-400" />

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-900/50 border border-white/5 group-hover:border-brand-orange/40 transition-colors duration-300 flex-shrink-0">
                                        <service.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-orange transition-colors duration-300" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="text-base font-bold text-brand-orange font-mono">
                                                {service.standard}
                                            </span>
                                            <span className="text-xs text-slate-500 font-medium">
                                                {service.acronym}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-semibold mt-0.5 leading-snug">
                                            {service.name}
                                        </h3>
                                        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Approach */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <h2 className="text-2xl font-bold text-white mb-10">Our Approach</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {approachSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="bg-slate-800/30 border border-white/5 rounded-xl p-5"
                            >
                                <div className="text-brand-orange font-mono text-sm font-bold mb-3">
                                    {step.step}
                                </div>
                                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* What's included */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="bg-slate-800/30 border border-white/5 rounded-2xl p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-white mb-8">What's included in every engagement</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Gap analysis against the relevant ISO standard",
                                "Policy and procedure documentation support",
                                "Risk assessment and treatment planning",
                                "Implementation guidance and milestone tracking",
                                "Internal audit preparation and execution",
                                "Corrective action review before certification audit",
                                "Liaison support with the certification body",
                                "Post-certification maintenance advisory",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative p-10 md:p-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 overflow-hidden text-center"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to begin your certification journey?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                            Speak with one of our ISO consultants to scope your engagement and get a clear
                            roadmap to certification.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-bold shadow-[0_20px_40px_rgba(249,115,22,0.25)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] transition-all duration-300"
                        >
                            Schedule a Consultation
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
