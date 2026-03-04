import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
    title: "Case Studies | Enterprise IT Success Stories | Ahead Services",
    description: "Explore real-world enterprise IT transformation success stories. Cloud migrations achieving 40% cost reduction, zero-trust cybersecurity implementations, IoT deployments with 60% efficiency gains, and digital transformation case studies.",
    keywords: [
        "enterprise IT case studies India",
        "cloud migration success stories",
        "cybersecurity implementation case study",
        "digital transformation case studies",
        "IoT deployment success stories",
        "AWS cloud migration results",
        "healthcare cybersecurity case study",
        "fintech cloud infrastructure",
        "enterprise IT project results",
        "IT transformation examples",
    ],
    openGraph: {
        title: "Enterprise IT Success Stories | Ahead Services Case Studies",
        description: "Real results: 40% cost reductions, 100% compliance achieved, 60% efficiency gains. See how we've transformed enterprise IT infrastructure.",
        url: "https://www.aheads.in/case-studies",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ahead Services Case Studies" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise IT Success Stories | Ahead Services",
        description: "Real results from cloud migrations, cybersecurity & IoT deployments for enterprise clients.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.aheads.in/case-studies"
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesClient />;
}
