import { Metadata } from "next";
import Hero from "../sections/Hero";
import Stats from "@/sections/Stats";
import LogoTicker from "@/sections/LogoTickerNew";
import WhyUs from "@/sections/WhyUsNew";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import CallToAction from "@/sections/CallToActionNew";
import Footer from "@/sections/FooterNew";

export const metadata: Metadata = {
    title: "Ahead Services - Enterprise Technology Solutions | Cloud, AI, Cybersecurity",
    description: "Leading enterprise technology solutions provider in India. Expert services in cloud computing, AI/ML, cybersecurity, IT infrastructure, IoT, and digital transformation. ISO certified with 500+ successful deployments.",
    keywords: [
        "enterprise technology solutions India",
        "cloud computing services India",
        "cybersecurity solutions",
        "AI machine learning services",
        "IT infrastructure management",
        "digital transformation consulting",
        "ISO certification consulting",
        "managed IT services Bangalore",
        "AWS Azure cloud migration",
        "IoT solutions India",
        "unified communications",
        "system integration services",
        "ahead services",
        "aheads.in",
    ],
    openGraph: {
        title: "Ahead Services - Enterprise Technology Solutions",
        description: "Leading enterprise technology solutions provider in India. Expert services in cloud computing, AI/ML, cybersecurity, and digital transformation.",
        url: "https://www.aheads.in",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ahead Services - Enterprise Technology Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahead Services - Enterprise Technology Solutions",
        description: "Leading enterprise technology provider. Cloud, AI, Cybersecurity & IT Infrastructure experts.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.aheads.in"
    }
};

export default function Home() {
    return (
        <>
            <Hero/>
            <Stats/>
            <LogoTicker/>
            <WhyUs/>
            <Services/>
            <Testimonials/>
            <FAQ/>
            <CallToAction/>
            <Footer/>
        </>
    );
}
