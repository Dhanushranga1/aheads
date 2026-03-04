import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Ahead Services | Enterprise IT Solutions Provider Since 2008",
    description: "Learn about Ahead Services — a leading enterprise IT solutions provider with 15+ years of experience. Trusted by 100+ global clients for cloud computing, cybersecurity, AI/ML, and digital transformation. Founded in Bangalore, 2008.",
    keywords: [
        "about ahead services",
        "IT company India",
        "enterprise technology solutions provider",
        "cloud computing experts Bangalore",
        "cybersecurity company India",
        "digital transformation partner",
        "ISO certified IT company",
        "AWS consulting partner India",
        "Microsoft Gold Partner India",
        "IT company since 2008",
    ],
    openGraph: {
        title: "About Ahead Services | Enterprise IT Solutions Provider",
        description: "15+ years of enterprise technology excellence. 100+ global clients. 500+ successful projects. Cloud, AI, Cybersecurity experts.",
        url: "https://www.aheads.in/about",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Ahead Services" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Ahead Services | Enterprise IT Solutions Provider",
        description: "15+ years of enterprise technology excellence. Cloud, AI, Cybersecurity experts in India.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.aheads.in/about"
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
