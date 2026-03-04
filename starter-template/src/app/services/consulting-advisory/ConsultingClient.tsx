"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    Plus,
    Minus,
    ArrowRight,
} from "lucide-react";
import Footer from "@/sections/FooterNew";

// ─── Shared animation config ──────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const isoServices = [
    {
        standard: "ISO 9001",
        name: "Quality Management System",
        acronym: "QMS",
        icon: ClipboardList,
        description:
            "Establish a consistent quality framework across all business processes and demonstrate commitment to continuous improvement.",
    },
    {
        standard: "ISO 27001",
        name: "Information Security Management System",
        acronym: "ISMS",
        icon: ShieldCheck,
        description:
            "Protect sensitive information assets with a structured approach to identifying, assessing, and managing security risks.",
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
            "Extend your ISMS to cover privacy management and demonstrate compliance with GDPR and data protection obligations.",
    },
    {
        standard: "ISO 22301",
        name: "Business Continuity Management System",
        acronym: "BCMS",
        icon: RefreshCw,
        description:
            "Build organisational resilience so critical operations can continue during and recover quickly after disruptive incidents.",
    },
    {
        standard: "ISO 14001",
        name: "Environmental Management System",
        acronym: "EMS",
        icon: Leaf,
        description:
            "Reduce environmental impact, meet regulatory obligations, and demonstrate a credible sustainability commitment.",
    },
    {
        standard: "ISO 45001",
        name: "Occupational Health & Safety",
        acronym: "OHSMS",
        icon: HardHat,
        description:
            "Manage occupational health and safety risks proactively to prevent work-related injury and ill health.",
    },
    {
        standard: "ISO 22000",
        name: "Food Safety Management System",
        acronym: "FSMS",
        icon: UtensilsCrossed,
        description:
            "Ensure food safety at every stage of the supply chain through systematic hazard analysis and preventive controls.",
    },
];

const approachSteps = [
    {
        step: "01",
        title: "Discovery",
        description: "We understand your scope, industry context, and certification goals.",
    },
    {
        step: "02",
        title: "Gap Analysis",
        description: "We map current practices against the standard's requirements.",
    },
    {
        step: "03",
        title: "Implementation",
        description: "We help build the policies, controls, and documentation needed.",
    },
    {
        step: "04",
        title: "Internal Audit",
        description: "We conduct a pre-certification audit to validate readiness.",
    },
    {
        step: "05",
        title: "Certification",
        description: "We support you through the formal certification body audit.",
    },
];

const included = [
    "Gap analysis against the relevant ISO standard",
    "Policy and procedure documentation support",
    "Risk assessment and treatment planning",
    "Implementation guidance and milestone tracking",
    "Internal audit preparation and execution",
    "Corrective action review before certification audit",
    "Liaison support with the certification body",
    "Post-certification maintenance advisory",
];

const faqs = [
    {
        q: "How long does ISO certification typically take?",
        a: "Most standards take 3 to 6 months, depending on your organisation's size, complexity, and current maturity level. We conduct an initial gap analysis to give you a realistic timeline before work begins.",
    },
    {
        q: "Do we need to be a large organisation to pursue ISO certification?",
        a: "No. ISO standards are designed to scale. We work with organisations of all sizes — from growing SMEs to large enterprises — and tailor the scope and documentation to match your actual operations.",
    },
    {
        q: "What happens after we achieve certification?",
        a: "Certification requires periodic surveillance audits (typically annual) and a full recertification every three years. We offer post-certification maintenance advisory to keep your management system compliant between audits.",
    },
    {
        q: "Can we pursue multiple ISO standards at the same time?",
        a: "Yes. Many standards share overlapping documentation and risk management requirements — for example, ISO 9001 and ISO 27001 integrate well together. We can structure an integrated approach to reduce duplication and effort.",
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ConsultingClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="bg-brand-blue min-h-screen pt-20 text-white relative overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,#0f172a_100%)]" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-40 top-24 w-[500px] h-[500px] rounded-full blur-3xl bg-orange-500/6" />
                <div className="absolute -right-60 bottom-32 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/6" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="pt-12 pb-24">
                    {/* Breadcrumb */}
                    <motion.nav
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        aria-label="Breadcrumb"
                        className="flex items-center gap-1.5 text-sm text-slate-500 mb-10"
                    >
                        <Link href="/" className="hover:text-slate-300 transition-colors duration-150">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                        <Link href="/services" className="hover:text-slate-300 transition-colors duration-150">Services</Link>
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-slate-300">Consulting & Advisory</span>
                    </motion.nav>

                    {/* Hero content — staggered children */}
                    <motion.div variants={stagger} initial="hidden" animate="show">
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-orange/10 border border-brand-orange/20 text-brand-orange"
                        >
                            <Award className="w-3.5 h-3.5" />
                            ISO CERTIFICATION CONSULTING
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl"
                        >
                            ISO Certification{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">
                                Consulting & Advisory
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl"
                        >
                            We provide end-to-end consulting and advisory services to help organisations
                            achieve and maintain internationally recognised ISO certifications — from gap
                            analysis and implementation through to certification readiness and ongoing
                            compliance.
                        </motion.p>

                        {/* Standards pills */}
                        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
                            {isoServices.map((s) => (
                                <span
                                    key={s.standard}
                                    className="px-3 py-1 rounded-full bg-slate-800/60 border border-white/8 text-xs text-slate-300 font-mono"
                                >
                                    {s.standard}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-semibold text-sm shadow-[0_16px_32px_rgba(249,115,22,0.22)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.35)] transition-shadow duration-300"
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="#standards"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/8 transition-colors duration-200"
                            >
                                View Standards
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── ISO STANDARDS ────────────────────────────────────────── */}
                <section id="standards" className="pb-24 scroll-mt-24">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <motion.div variants={fadeUp} className="mb-10">
                            <h2 className="text-2xl font-bold text-white">
                                Our ISO consulting services include:
                            </h2>
                            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
                                We help organisations streamline governance, strengthen compliance
                                frameworks, and achieve global certification standards through expert
                                advisory and implementation support.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {isoServices.map((service) => (
                                <motion.article
                                    key={service.standard}
                                    variants={fadeUp}
                                    className="relative flex items-start gap-4 bg-slate-800/40 border border-white/5 rounded-xl p-5 group hover:bg-slate-800/60 hover:border-white/10 transition-all duration-200 overflow-hidden"
                                >
                                    {/* Top accent line */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-orange to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-slate-900/60 border border-white/5 group-hover:border-brand-orange/30 flex items-center justify-center transition-colors duration-300">
                                        <service.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-orange transition-colors duration-300" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-baseline gap-2 flex-wrap">
                                            <span className="text-sm font-bold text-brand-orange font-mono">
                                                {service.standard}
                                            </span>
                                            <span className="text-xs text-slate-500">{service.acronym}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-white mt-0.5 leading-snug">
                                            {service.name}
                                        </h3>
                                        <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── APPROACH TIMELINE ────────────────────────────────────── */}
                <section id="approach" className="pb-24 scroll-mt-24">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <motion.div variants={fadeUp} className="mb-12">
                            <h2 className="text-2xl font-bold text-white">Our Approach</h2>
                            <p className="mt-2 text-slate-400 text-sm">
                                A structured five-stage process from initial scoping to certification.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Connector track — desktop only */}
                            <div className="hidden lg:block absolute inset-x-5 top-5">
                                <div className="h-px bg-white/8 w-full" />
                                <motion.div
                                    className="absolute inset-0 h-px bg-gradient-to-r from-brand-orange/60 to-yellow-400/60 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.1, ease, delay: 0.35 }}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                                {approachSteps.map((step) => (
                                    <motion.div
                                        key={step.step}
                                        variants={fadeUp}
                                        className="flex flex-col items-start lg:items-center lg:text-center gap-3"
                                    >
                                        {/* Step dot */}
                                        <div
                                            className="relative z-10 w-10 h-10 rounded-full bg-slate-900 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-mono text-xs font-bold flex-shrink-0"
                                            style={{ boxShadow: "0 0 0 4px #0f172a" }}
                                        >
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                                            <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ── WHAT'S INCLUDED ──────────────────────────────────────── */}
                <section className="pb-24">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="bg-slate-800/30 border border-white/6 rounded-2xl p-8 md:p-10"
                    >
                        <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-7">
                            What&apos;s included in every engagement
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {included.map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────── */}
                <section className="pb-24">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <motion.div variants={fadeUp} className="mb-8">
                            <h2 className="text-2xl font-bold text-white">Common Questions</h2>
                        </motion.div>

                        <div className="space-y-2">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="border border-white/6 rounded-xl overflow-hidden bg-slate-800/30"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-white/3 transition-colors duration-150"
                                        aria-expanded={openFaq === i}
                                    >
                                        <span className="text-sm font-semibold text-white leading-snug">
                                            {faq.q}
                                        </span>
                                        <span className="flex-shrink-0 text-brand-orange">
                                            {openFaq === i
                                                ? <Minus className="w-4 h-4" />
                                                : <Plus className="w-4 h-4" />
                                            }
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {openFaq === i && (
                                            <motion.div
                                                key="body"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.28, ease }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────── */}
                <section className="pb-24">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/8 overflow-hidden p-10 md:p-14 text-center"
                    >
                        {/* Soft glow behind */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl bg-brand-orange/10" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-3">
                                Ready to begin your certification journey?
                            </h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-base leading-relaxed">
                                Speak with one of our consultants to scope your engagement and get a
                                clear roadmap to certification.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-bold shadow-[0_20px_40px_rgba(249,115,22,0.25)] hover:shadow-[0_24px_48px_rgba(249,115,22,0.35)] transition-shadow duration-300"
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
