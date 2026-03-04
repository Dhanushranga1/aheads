import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Enterprise IT Services & Solutions | Cloud, AI, Cybersecurity | Ahead Services",
    description: "Comprehensive enterprise IT services: cloud computing (AWS/Azure), AI/ML solutions, cybersecurity, IT infrastructure management, unified communications, IoT, surveillance, and ISO consulting. ISO certified with 500+ deployments.",
    keywords: [
        "enterprise IT services India",
        "cloud computing services AWS Azure",
        "cybersecurity solutions India",
        "AI ML solutions",
        "IT infrastructure management",
        "unified communications solutions",
        "system integration services",
        "IoT solutions India",
        "surveillance solutions",
        "ISO certification consulting",
        "managed IT services",
        "digital transformation services",
    ],
    openGraph: {
        title: "Enterprise IT Services & Solutions | Ahead Services",
        description: "Cloud, AI, Cybersecurity, Infrastructure, IoT, Unified Communications & ISO Consulting. Comprehensive enterprise IT services.",
        url: "https://www.aheads.in/services",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ahead Services - Enterprise IT Services" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise IT Services & Solutions | Ahead Services",
        description: "Comprehensive enterprise IT: Cloud, AI, Cybersecurity, IoT & ISO Consulting.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.aheads.in/services"
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
