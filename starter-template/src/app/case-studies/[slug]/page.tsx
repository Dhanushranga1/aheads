"use client";

import { useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../../sections/FooterNew";
import {
    ArrowLeft,
    TrendingUp,
    Clock,
    Building2,
    CheckCircle2,
    Target,
    Lightbulb,
    BarChart3,
} from "lucide-react";

// Same data as listing page (in production, fetch from API/CMS)
const caseStudiesData: Record<string, any> = {
    "fintech-cloud-migration": {
        title: "Enterprise Cloud Migration for Leading FinTech",
        client: "Confidential FinTech Company",
        industry: "Financial Services",
        metrics: {
            improvement: "40% Cost Reduction",
            time: "6 Months",
            scale: "500+ Users",
        },
        challenge:
            "A leading FinTech company was struggling with legacy on-premise infrastructure that caused frequent downtime during peak trading hours, high operational costs, and inability to scale for growing user base. Their monolithic architecture made deployments risky and time-consuming.",
        solution:
            "We architected a cloud-native multi-region infrastructure on AWS with auto-scaling capabilities. The migration strategy included containerization of applications using Docker and Kubernetes, implementation of CI/CD pipelines, and a comprehensive disaster recovery setup. We migrated 20+ critical applications with zero downtime using blue-green deployment strategies.",
        implementation: [
            "Infrastructure as Code using Terraform for reproducible environments",
            "Migration of databases to AWS RDS with read replicas for performance",
            "Implementation of AWS Auto Scaling Groups for dynamic capacity",
            "Setup of CloudWatch monitoring and alerting for proactive issue detection",
            "Security hardening with AWS WAF, GuardDuty, and Security Hub",
            "Training sessions for development and operations teams",
        ],
        results: [
            "40% reduction in infrastructure costs through right-sizing and reserved instances",
            "99.99% uptime achieved (up from 97.5%)",
            "3x faster deployment cycles with automated CI/CD",
            "Zero security incidents post-migration",
            "Capacity to handle 10x traffic spikes without manual intervention",
            "Recovery Time Objective (RTO) reduced from 4 hours to 15 minutes",
        ],
        testimonial: {
            quote: "Ahead Services transformed our infrastructure from a liability to a competitive advantage. The migration was seamless, and the results exceeded our expectations.",
            author: "CTO, Leading FinTech Company",
        },
        tags: ["Cloud Computing", "AWS", "FinTech", "Migration", "DevOps"],
    },
    "healthcare-cybersecurity": {
        title: "Zero-Trust Security Implementation for Healthcare Network",
        client: "Multi-Specialty Hospital Chain",
        industry: "Healthcare",
        metrics: {
            improvement: "100% Compliance",
            time: "4 Months",
            scale: "10 Hospitals",
        },
        challenge:
            "A 10-hospital healthcare network faced critical HIPAA compliance gaps, legacy security infrastructure vulnerable to ransomware, and no unified security posture across locations. Previous security audits revealed multiple vulnerabilities that could lead to patient data breaches.",
        solution:
            "We implemented a comprehensive zero-trust security architecture using Fortinet next-generation firewalls, Palo Alto Networks security platform, and Microsoft Defender. The solution included network segmentation, multi-factor authentication, automated threat detection with SOAR (Security Orchestration, Automation, and Response), and 24/7 security monitoring.",
        implementation: [
            "Deployment of Fortinet FortiGate firewalls at all 10 locations",
            "Implementation of zero-trust network access (ZTNA) for remote workers",
            "Setup of centralized SIEM (Security Information and Event Management)",
            "Automated vulnerability scanning and patch management",
            "Security awareness training program for 2000+ healthcare staff",
            "Incident response playbooks and disaster recovery procedures",
        ],
        results: [
            "100% HIPAA compliance achieved and maintained",
            "Zero data breaches in 24 months post-implementation",
            "90% reduction in security incidents through automated threat detection",
            "Automated threat response reducing MTTR to under 2 minutes",
            "Successfully defended against 15+ ransomware attempts",
            "Annual cyber insurance premiums reduced by 25%",
        ],
        testimonial: {
            quote: "The zero-trust implementation gave us peace of mind. We can now focus on patient care knowing our data is secure and compliant.",
            author: "Chief Information Security Officer, Hospital Network",
        },
        tags: ["Cybersecurity", "Healthcare", "Zero Trust", "Compliance", "Fortinet"],
    },
    "ecommerce-iot-warehouse": {
        title: "IoT-Enabled Smart Warehouse for E-commerce Giant",
        client: "Major E-commerce Platform",
        industry: "E-commerce & Retail",
        metrics: {
            improvement: "60% Efficiency Gain",
            time: "8 Months",
            scale: "200K sq ft",
        },
        challenge:
            "A rapidly growing e-commerce platform struggled with manual inventory tracking causing picking errors, slow order fulfillment (average 48 hours), inability to predict stock shortages, and limited visibility into warehouse operations across 5 locations.",
        solution:
            "We designed and deployed an IoT-enabled smart warehouse system using RFID tags, environmental sensors, automated guided vehicles (AGVs), and a centralized AI-powered analytics dashboard. The system integrates with existing ERP and WMS (Warehouse Management System) for real-time synchronization.",
        implementation: [
            "Deployment of 50,000+ RFID tags for real-time item tracking",
            "Installation of environmental sensors for temperature-sensitive goods",
            "Integration of AGVs for automated material movement",
            "Machine learning models for demand forecasting and stock optimization",
            "Real-time dashboard with predictive alerts for stock shortages",
            "Mobile app for warehouse staff with AR-guided picking",
        ],
        results: [
            "60% improvement in picking efficiency through optimized routes",
            "95% inventory accuracy (up from 75%)",
            "30% reduction in order fulfillment time (48 hours to 33 hours)",
            "Real-time stock visibility across 5 warehouses",
            "Predictive alerts reduced stockouts by 85%",
            "ROI achieved in 14 months through labor cost savings",
        ],
        testimonial: {
            quote: "The IoT transformation revolutionized our warehouse operations. We can now fulfill orders faster and more accurately than ever before.",
            author: "VP of Operations, E-commerce Platform",
        },
        tags: ["IoT", "E-commerce", "Automation", "AI/ML", "RFID"],
    },
    "manufacturing-erp-integration": {
        title: "Unified Communications & ERP Integration for Manufacturer",
        client: "Automotive Parts Manufacturer",
        industry: "Manufacturing",
        metrics: {
            improvement: "50% Faster Communication",
            time: "5 Months",
            scale: "3 Factories",
        },
        challenge:
            "An automotive parts manufacturer with 3 factories across India faced communication silos, delayed production updates due to manual handoffs, data inconsistencies between systems, and no visibility into real-time production status.",
        solution:
            "We implemented Cisco Unified Communications Manager integrated with their SAP ERP system, deployed Microsoft Teams for collaboration, and automated workflows between production floor and management systems using custom middleware.",
        implementation: [
            "Cisco Unified Communications deployment across 3 factories",
            "SAP ERP integration with real-time data synchronization",
            "Microsoft Teams rollout with custom production dashboards",
            "IoT sensors on production lines feeding data to ERP",
            "Automated workflow triggers for production milestones",
            "Change management and training for 200+ employees",
        ],
        results: [
            "50% faster cross-factory communication and decision-making",
            "Real-time production visibility for management",
            "80% reduction in manual data entry errors",
            "Seamless collaboration between 200+ employees",
            "Production planning efficiency improved by 35%",
            "Reduced communication costs by 40%",
        ],
        testimonial: {
            quote: "The unified communications system broke down our silos. We now operate as one cohesive unit across all three factories.",
            author: "Plant Manager, Automotive Manufacturer",
        },
        tags: ["System Integration", "ERP", "Manufacturing", "Cisco", "Collaboration"],
    },
    "saas-platform-infrastructure": {
        title: "Scalable Infrastructure for High-Growth SaaS Startup",
        client: "B2B SaaS Platform",
        industry: "Technology",
        metrics: {
            improvement: "10x Traffic Handling",
            time: "3 Months",
            scale: "50K+ Users",
        },
        challenge:
            "A rapidly growing B2B SaaS platform experienced performance issues during user growth from 5K to 50K users. Their single-region architecture couldn't handle traffic spikes, database queries were slow, and they had no proper monitoring or alerting.",
        solution:
            "We re-architected their infrastructure on Microsoft Azure using Kubernetes for container orchestration, implemented Azure CDN for global content delivery, optimized database with caching layers, and set up comprehensive monitoring with Azure Monitor and Application Insights.",
        implementation: [
            "Kubernetes cluster setup on Azure AKS with auto-scaling",
            "Database optimization with read replicas and Redis caching",
            "Azure CDN deployment for static assets across 6 regions",
            "Implementation of Azure Front Door for global load balancing",
            "Comprehensive monitoring with Azure Monitor and Log Analytics",
            "Performance testing and optimization using load testing tools",
        ],
        results: [
            "10x traffic capacity with no performance degradation",
            "95% reduction in page load latency (from 3s to 150ms)",
            "99.95% uptime SLA achieved (up from 98.2%)",
            "Seamless scaling to 50K concurrent users",
            "Database query performance improved by 80%",
            "Infrastructure costs optimized through right-sizing",
        ],
        testimonial: {
            quote: "Ahead Services gave us the infrastructure to scale confidently. We can now focus on product development instead of firefighting performance issues.",
            author: "Co-Founder & CTO, SaaS Startup",
        },
        tags: ["Cloud Computing", "Azure", "Kubernetes", "SaaS", "Performance"],
    },
    "retail-surveillance-system": {
        title: "AI-Powered Surveillance for Retail Chain",
        client: "National Retail Chain",
        industry: "Retail",
        metrics: {
            improvement: "70% Theft Reduction",
            time: "6 Months",
            scale: "50 Stores",
        },
        challenge:
            "A national retail chain with 50 stores faced high inventory shrinkage due to theft (2.5% of revenue), limited visibility into store operations, reactive security approach, and no way to analyze customer behavior for loss prevention.",
        solution:
            "We deployed an AI-powered video surveillance system using advanced analytics cameras, real-time anomaly detection algorithms, centralized monitoring dashboard, and integration with POS systems to detect suspicious transactions and behaviors.",
        implementation: [
            "Installation of 500+ AI-powered cameras across 50 stores",
            "Real-time anomaly detection using computer vision algorithms",
            "Centralized monitoring dashboard with alert management",
            "POS integration to correlate transactions with video footage",
            "Heat mapping and customer behavior analytics",
            "Mobile app for store managers with instant alerts",
        ],
        results: [
            "70% reduction in theft incidents (shrinkage down to 0.75%)",
            "Real-time alerts across all locations with 95% accuracy",
            "Improved customer safety ratings and store environment",
            "ROI achieved in 18 months through theft reduction",
            "Enhanced operational insights from behavior analytics",
            "Reduced security personnel costs by 30% through automation",
        ],
        testimonial: {
            quote: "The AI surveillance system not only reduced theft but also gave us valuable insights into customer behavior and store operations.",
            author: "Head of Loss Prevention, Retail Chain",
        },
        tags: ["Surveillance", "AI/ML", "Retail", "Security", "Computer Vision"],
    },
};

export default function CaseStudyDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const caseStudy = caseStudiesData[slug];

    useEffect(() => {
        if (caseStudy) {
            document.title = `${caseStudy.title} | Ahead Services Case Study`;
        }
    }, [caseStudy]);

    if (!caseStudy) {
        notFound();
    }

    return (
        <>
            <div className="bg-white min-h-screen pt-20">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 md:py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Case Studies
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide mb-4">
                                {caseStudy.industry}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
                            <p className="text-xl text-slate-300">{caseStudy.client}</p>
                        </motion.div>
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="bg-slate-800 text-white py-8">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-xs text-slate-400 mb-1">Impact</div>
                                <div className="text-lg font-bold">{caseStudy.metrics.improvement}</div>
                            </div>
                            <div className="text-center">
                                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-xs text-slate-400 mb-1">Timeline</div>
                                <div className="text-lg font-bold">{caseStudy.metrics.time}</div>
                            </div>
                            <div className="text-center">
                                <Building2 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-xs text-slate-400 mb-1">Scale</div>
                                <div className="text-lg font-bold">{caseStudy.metrics.scale}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto px-4 py-16">
                    {/* Challenge */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                                <Target className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">The Challenge</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                    </motion.section>

                    {/* Solution */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudy.solution}</p>

                        <div className="bg-slate-50 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Highlights</h3>
                            <ul className="space-y-3">
                                {caseStudy.implementation.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* Results */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Measurable Results</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {caseStudy.results.map((result: string, index: number) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200"
                                >
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-800 font-medium">{result}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Testimonial */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                            <svg
                                className="w-12 h-12 text-orange-500 mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-xl md:text-2xl text-slate-100 mb-6 italic">
                                "{caseStudy.testimonial.quote}"
                            </p>
                            <p className="text-orange-400 font-semibold">{caseStudy.testimonial.author}</p>
                        </div>
                    </motion.section>

                    {/* Tags */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                            Technologies & Services
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {caseStudy.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.section>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-orange-50 border border-orange-200 rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Achieve Similar Results for Your Business
                        </h2>
                        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can tailor our enterprise solutions to your specific challenges and
                            goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                            >
                                Schedule a Consultation
                                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/case-studies"
                                className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 px-8 py-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center justify-center"
                            >
                                View More Case Studies
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
}
