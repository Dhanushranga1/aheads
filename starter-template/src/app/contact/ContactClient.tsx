"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/sections/FooterNew";
import {
    MapPin,
    Mail,
    Phone,
    Clock,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

// ─── Shared animation config ─────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateField = (name: string, value: string) => {
        const next = { ...errors };
        if (name === "email") {
            const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (value && !ok) next.email = "Enter a valid email address";
            else delete next.email;
        }
        if (name === "phone") {
            if (value && !/^[\d\s+\-()]+$/.test(value)) next.phone = "Enter a valid phone number";
            else delete next.phone;
        }
        setErrors(next);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Submission failed");

            setSubmitStatus({
                type: "success",
                message: data.message || "Message sent. We'll be in touch within 24 hours.",
            });
            setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
        } catch (err) {
            setSubmitStatus({
                type: "error",
                message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        "w-full bg-slate-900/60 border border-white/8 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-colors duration-150";

    return (
        <div className="bg-brand-blue min-h-screen pt-20 text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff06_1px,transparent_1px),linear-gradient(0deg,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,#0f172a_100%)]" />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-40 top-24 w-[500px] h-[500px] rounded-full blur-3xl bg-orange-500/6" />
                <div className="absolute -right-60 bottom-32 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/6" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="pt-12 pb-24">

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
                        <span className="text-slate-300">Contact</span>
                    </motion.nav>

                    {/* Hero */}
                    <motion.div variants={stagger} initial="hidden" animate="show" className="mb-16">
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-brand-orange/10 border border-brand-orange/20 text-brand-orange"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                            </span>
                            SUPPORT TEAM ONLINE
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-2xl"
                        >
                            Get in{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">
                                Touch
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-base text-slate-300 leading-relaxed max-w-xl"
                        >
                            Whether you need a consultation, a quote, or technical support — our team
                            is ready. We typically respond within 2 hours.
                        </motion.p>
                    </motion.div>

                    {/* Two-column layout */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* ── Left: Info ── */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="show"
                            className="space-y-6"
                        >
                            {/* Response time */}
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-4 bg-slate-800/40 border border-white/6 rounded-xl p-5"
                            >
                                <div className="w-10 h-10 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-brand-orange" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">Average response time</div>
                                    <div className="text-brand-orange font-mono text-sm mt-0.5">Under 2 hours</div>
                                </div>
                            </motion.div>

                            {/* Offices */}
                            <motion.div variants={fadeUp}>
                                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                    Our Offices
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        {
                                            city: "Bangalore",
                                            tag: "HQ",
                                            address: "#4S, Tech Park Road, Electronic City Phase 1, Bangalore 560100",
                                            hours: "9:00 AM – 6:00 PM IST",
                                        },
                                        {
                                            city: "Chennai",
                                            tag: "Office",
                                            address: "Suite 12, Bayview Tower, OMR IT Corridor, Chennai 600096",
                                            hours: "9:00 AM – 6:00 PM IST",
                                        },
                                    ].map((office) => (
                                        <div
                                            key={office.city}
                                            className="bg-slate-800/40 border border-white/6 rounded-xl p-5"
                                        >
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-white font-semibold text-sm">{office.city}</span>
                                                        <span className="px-2 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono">
                                                            {office.tag}
                                                        </span>
                                                    </div>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{office.address}</p>
                                                    <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        {office.hours}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Direct contact */}
                            <motion.div variants={fadeUp}>
                                <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                    Direct Contact
                                </h2>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:info@aheadservices.in"
                                        className="flex items-center gap-3 bg-slate-800/40 border border-white/6 rounded-xl p-4 hover:border-brand-orange/30 hover:bg-slate-800/60 transition-all duration-200 group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-slate-900/60 border border-white/5 group-hover:border-brand-orange/30 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                                            <Mail className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-colors duration-200" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 mb-0.5">Email</div>
                                            <div className="text-white text-sm font-medium">info@aheadservices.in</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-orange ml-auto transition-colors duration-200" />
                                    </a>

                                    <a
                                        href="tel:+919884208208"
                                        className="flex items-center gap-3 bg-slate-800/40 border border-white/6 rounded-xl p-4 hover:border-brand-orange/30 hover:bg-slate-800/60 transition-all duration-200 group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-slate-900/60 border border-white/5 group-hover:border-brand-orange/30 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                                            <Phone className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-colors duration-200" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                                            <div className="text-white text-sm font-medium">+91 9884 208208</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-orange ml-auto transition-colors duration-200" />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── Right: Form ── */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.15 }}
                        >
                            <div className="relative bg-slate-800/40 border border-white/8 rounded-2xl p-7 md:p-8">
                                {/* Subtle glow */}
                                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 pointer-events-none" />

                                <div className="relative">
                                    <h2 className="text-lg font-bold text-white mb-6">Send us a message</h2>

                                    {/* Status message */}
                                    <AnimatePresence>
                                        {submitStatus.type && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.3, ease }}
                                                className={`mb-5 p-4 rounded-xl flex items-start gap-3 text-sm ${
                                                    submitStatus.type === "success"
                                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                                }`}
                                            >
                                                {submitStatus.type === "success"
                                                    ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    : <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                                }
                                                {submitStatus.message}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1.5">
                                                    Full name <span className="text-brand-orange">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                    placeholder="Jane Smith"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1.5">
                                                    Work email <span className="text-brand-orange">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                    placeholder="jane@company.com"
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Company + Phone */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1.5">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                    placeholder="Acme Ltd"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-slate-400 mb-1.5">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={inputClass}
                                                    placeholder="+91 99999 99999"
                                                />
                                                {errors.phone && (
                                                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Enquiry type */}
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-1.5">
                                                How can we help? <span className="text-brand-orange">*</span>
                                            </label>
                                            <select
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className={inputClass}
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="sales">Sales / New Project</option>
                                                <option value="iso-consulting">ISO Certification Consulting</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="partnerships">Partnerships</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-1.5">
                                                Message <span className="text-brand-orange">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className={`${inputClass} resize-none`}
                                                placeholder="Briefly describe your requirements..."
                                            />
                                        </div>

                                        {/* Privacy */}
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                required
                                                className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-slate-900/60 accent-orange-500"
                                            />
                                            <label htmlFor="privacy" className="text-xs text-slate-400 leading-relaxed">
                                                I agree to the Ahead Services{" "}
                                                <Link href="/privacy" className="text-brand-orange hover:underline">
                                                    Privacy Policy
                                                </Link>
                                                . Your information is never shared with third parties.
                                            </label>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || Object.keys(errors).length > 0}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark text-white font-semibold text-sm shadow-[0_16px_32px_rgba(249,115,22,0.22)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-shadow duration-300"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
