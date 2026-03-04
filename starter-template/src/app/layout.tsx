import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.aheads.in'),
    title: {
        default: "Ahead Services - Enterprise Technology Solutions | Cloud, AI, Cybersecurity",
        template: "%s | Ahead Services"
    },
    description: "Leading enterprise technology solutions provider in India. Expert services in cloud computing, AI/ML, cybersecurity, IT infrastructure, IoT, and digital transformation. ISO certified with 500+ successful deployments.",
    keywords: [
        "enterprise technology solutions",
        "cloud computing services India",
        "cybersecurity solutions",
        "AI machine learning",
        "IT infrastructure management",
        "digital transformation",
        "system integration",
        "unified communications",
        "IoT solutions",
        "professional IT services",
        "AWS Azure GCP",
        "enterprise software development",
        "managed IT services",
        "network security",
        "data center solutions"
    ],
    authors: [{ name: "Ahead Services Private Limited" }],
    creator: "Ahead Services",
    publisher: "Ahead Services Private Limited",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.aheads.in",
        title: "Ahead Services - Enterprise Technology Solutions",
        description: "Leading enterprise technology solutions provider in India. Expert services in cloud computing, AI/ML, cybersecurity, IT infrastructure, and digital transformation.",
        siteName: "Ahead Services",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Ahead Services - Enterprise Technology Solutions"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahead Services - Enterprise Technology Solutions",
        description: "Leading enterprise technology provider. Cloud, AI, Cybersecurity & IT Infrastructure experts.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // verification: {
    //     google: "your-google-verification-code",
    // },
    alternates: {
        canonical: "https://www.aheads.in"
    },
    category: "Technology",
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        shortcut: '/favicon.svg',
        apple: '/logo.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const areaServedIndia = { "@type": "Country", "name": "India" };
    const orgRef = { "@id": "https://www.aheads.in/#organization" };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.aheads.in/#organization",
                "name": "Ahead Services Private Limited",
                "alternateName": "Ahead Services",
                "url": "https://www.aheads.in",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.aheads.in/logo.png",
                    "width": 250,
                    "height": 60
                },
                "description": "Leading enterprise technology solutions provider specializing in cloud computing, AI/ML, cybersecurity, IT infrastructure, IoT, and ISO certification consulting.",
                "foundingDate": "2008",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/ahead-services"
                ],
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "contactType": "Sales",
                        "url": "https://www.aheads.in/contact",
                        "availableLanguage": ["English", "Hindi"]
                    }
                ],
                "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Enterprise IT Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Infrastructure & Support Services", "url": "https://www.aheads.in/services/it-infrastructure" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Computing Solutions", "url": "https://www.aheads.in/services/cloud-computing" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Solutions", "url": "https://www.aheads.in/services/cybersecurity" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "System Integration & Project Management", "url": "https://www.aheads.in/services/system-integration" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internet of Things (IoT)", "url": "https://www.aheads.in/services/iot" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surveillance Solutions", "url": "https://www.aheads.in/services/surveillance" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unified Communications", "url": "https://www.aheads.in/services/unified-communications" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ISO Certification Consulting & Advisory", "url": "https://www.aheads.in/services/consulting-advisory" } }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.aheads.in/#website",
                "url": "https://www.aheads.in",
                "name": "Ahead Services",
                "description": "Enterprise Technology Solutions Provider — Cloud, AI, Cybersecurity & ISO Consulting",
                "publisher": orgRef,
                "inLanguage": "en-IN",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.aheads.in/services?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://www.aheads.in/#localbusiness",
                "name": "Ahead Services Private Limited",
                "url": "https://www.aheads.in",
                "image": "https://www.aheads.in/logo.png",
                "description": "Enterprise IT solutions provider in Bangalore, India.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 12.9716,
                    "longitude": 77.5946
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "areaServed": areaServedIndia,
                "priceRange": "$$"
            },
            {
                "@type": "Service", "name": "Cloud Computing Solutions",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Scalable AWS and Azure cloud infrastructure, migration, and managed services.",
                "url": "https://www.aheads.in/services/cloud-computing"
            },
            {
                "@type": "Service", "name": "Cybersecurity Solutions",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Zero-trust architecture, 24/7 SOC monitoring, and threat intelligence.",
                "url": "https://www.aheads.in/services/cybersecurity"
            },
            {
                "@type": "Service", "name": "IT Infrastructure & Support Services",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Comprehensive IT infrastructure management and 24/7 helpdesk support.",
                "url": "https://www.aheads.in/services/it-infrastructure"
            },
            {
                "@type": "Service", "name": "System Integration & Project Management",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Expert system integration with end-to-end project management.",
                "url": "https://www.aheads.in/services/system-integration"
            },
            {
                "@type": "Service", "name": "Internet of Things (IoT)",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "End-to-end IoT solutions with device management and real-time analytics.",
                "url": "https://www.aheads.in/services/iot"
            },
            {
                "@type": "Service", "name": "Surveillance Solutions",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "AI-powered surveillance systems with facial recognition and integrated monitoring.",
                "url": "https://www.aheads.in/services/surveillance"
            },
            {
                "@type": "Service", "name": "Unified Communications",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Enterprise communication platforms integrating voice, video, and collaboration.",
                "url": "https://www.aheads.in/services/unified-communications"
            },
            {
                "@type": "Service", "name": "ISO Certification Consulting & Advisory",
                "provider": orgRef, "areaServed": areaServedIndia,
                "description": "Expert ISO 9001, 27001, 20000, 27701, 22301, 14001, 45001, and 22000 certification consulting.",
                "url": "https://www.aheads.in/services/consulting-advisory"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How quickly can you deploy a solution?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our agile deployment model ensures most solutions go live within 4-8 weeks. For urgent requirements, we offer rapid deployment tracks (2-3 weeks) with pre-configured modules. Every project includes a detailed timeline with milestone checkpoints."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is cloud migration secure for our sensitive data?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We implement Zero Trust Architecture, end-to-end encryption (AES-256), and compliance with ISO 27001, SOC 2, and industry-specific regulations (HIPAA, PCI-DSS). All migrations include security audits and penetration testing before production."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you integrate with our legacy systems?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We specialize in hybrid architectures that bridge legacy infrastructure with modern cloud platforms. Our middleware solutions ensure seamless data flow without disrupting existing operations. We've successfully integrated systems from mainframes to modern microservices."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What's included in your 24/7 support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our Enterprise Support includes: Dedicated SOC monitoring, 15-minute response time for P1 incidents, proactive threat intelligence, regular health checks, quarterly optimization reviews, and a dedicated technical account manager."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you handle compliance and regulatory requirements?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We maintain active certifications for major frameworks (ISO 27001, SOC 2, GDPR, HIPAA) and embed compliance into every layer of our solutions. Our team includes certified compliance auditors who ensure your systems meet industry-specific regulatory requirements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes your cybersecurity approach different?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We implement Defense-in-Depth with multiple security layers: Perimeter security (NGFW, IPS), Identity & Access Management (Zero Trust), Data encryption (at-rest and in-transit), continuous monitoring (SIEM), and regular red team exercises. Security isn't an add-on—it's architected from day one."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aheads.in" },
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aheads.in/services" },
                    { "@type": "ListItem", "position": 3, "name": "About", "item": "https://www.aheads.in/about" },
                    { "@type": "ListItem", "position": 4, "name": "Case Studies", "item": "https://www.aheads.in/case-studies" },
                    { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://www.aheads.in/contact" }
                ]
            }
        ]
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="canonical" href="https://www.aheads.in" />
            </head>
            <body
                className={`
                    ${inter.variable} 
                    font-sans 
                    antialiased 
                    bg-[#0f172a]
                    min-h-screen
                `}
            >
                <Navbar />
                {children}
                <FloatingCTA />
                <ExitIntentPopup />
                <Analytics />
            </body>
        </html>
    );
}