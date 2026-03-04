import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Ahead Services",
    description:
        "Get in touch with Ahead Services for enterprise IT solutions. Expert consultation for cloud computing, cybersecurity, ISO certification, and IT infrastructure.",
    keywords: [
        "contact Ahead Services",
        "IT consultation India",
        "enterprise technology inquiry",
        "cloud solutions contact",
        "cybersecurity consultation",
        "ISO certification inquiry",
        "IT infrastructure support Bangalore",
    ],
    alternates: {
        canonical: "https://www.aheads.in/contact",
    },
    openGraph: {
        title: "Contact Us | Ahead Services",
        description:
            "Reach our team for enterprise IT solutions — cloud, cybersecurity, ISO consulting, and more.",
        url: "https://www.aheads.in/contact",
        type: "website",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
