import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
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
    verification: {
        google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
        // bing: "your-bing-verification-code",
    },
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
                "description": "Leading enterprise technology solutions provider specializing in cloud computing, AI/ML, cybersecurity, and IT infrastructure.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN",
                    "addressRegion": "India"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/ahead-services",
                    "https://twitter.com/aheadservices"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "availableLanguage": ["English", "Hindi"]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.aheads.in/#website",
                "url": "https://www.aheads.in",
                "name": "Ahead Services",
                "description": "Enterprise Technology Solutions Provider",
                "publisher": {
                    "@id": "https://www.aheads.in/#organization"
                },
                "inLanguage": "en-IN"
            },
            {
                "@type": "Service",
                "serviceType": "Cloud Computing",
                "provider": {
                    "@id": "https://www.aheads.in/#organization"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                }
            },
            {
                "@type": "Service",
                "serviceType": "Cybersecurity Solutions",
                "provider": {
                    "@id": "https://www.aheads.in/#organization"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                }
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
                <Analytics />
            </body>
        </html>
    );
}