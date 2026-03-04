import type { Metadata } from "next";
import ConsultingClient from "./ConsultingClient";

export const metadata: Metadata = {
    title: "ISO Certification Consulting & Advisory Services | Ahead Services",
    description:
        "Expert ISO certification consulting for ISO 9001, 27001, 20000, 27701, 22301, 14001, 45001 and 22000. End-to-end support — gap analysis, implementation, internal audit, and certification readiness.",
    keywords: [
        "ISO certification consulting India",
        "ISO 9001 consulting",
        "ISO 27001 advisory",
        "ISO 20000 consulting",
        "ISMS implementation",
        "QMS consulting",
        "ISO certification services Bangalore",
        "gap analysis ISO standards",
        "management system certification",
        "ISO advisory services",
        "ISO 22301 BCMS consulting",
        "ISO 27701 PIMS consulting",
        "ISO 14001 EMS consulting",
        "ISO 45001 OHSMS consulting",
        "ISO 22000 FSMS consulting",
    ],
    alternates: {
        canonical: "https://www.aheads.in/services/consulting-advisory",
    },
    openGraph: {
        title: "ISO Certification Consulting & Advisory | Ahead Services",
        description:
            "End-to-end ISO certification consulting — gap analysis, implementation, internal audit, and certification support for ISO 9001, 27001, 20000, and more.",
        url: "https://www.aheads.in/services/consulting-advisory",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ISO Certification Consulting & Advisory | Ahead Services",
        description:
            "Expert ISO consulting services. Gap analysis, implementation, internal audit, and certification readiness for 8 ISO standards.",
    },
};

export default function ConsultingAdvisory() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ISO Certification Consulting & Advisory",
        description:
            "End-to-end ISO certification consulting and advisory services. We support organisations through gap analysis, implementation, documentation, risk management, internal audits, and certification readiness.",
        provider: {
            "@type": "Organization",
            "@id": "https://www.aheads.in/#organization",
            name: "Ahead Services Private Limited",
        },
        serviceType: "ISO Certification Consulting",
        areaServed: { "@type": "Country", name: "India" },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "ISO Certification Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 9001 Quality Management System Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 27001 Information Security Management System Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 20000 IT Service Management Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 27701 Privacy Information Management System Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 22301 Business Continuity Management System Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 14001 Environmental Management System Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 45001 Occupational Health & Safety Consulting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ISO 22000 Food Safety Management System Consulting",
                    },
                },
            ],
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ConsultingClient />
        </>
    );
}
