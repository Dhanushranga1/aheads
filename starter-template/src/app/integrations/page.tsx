import { Metadata } from "next";
import Footer from "../../sections/Footer";
import IntegrationsContentNew from "../../components/IntegrationsContentNew";

export const metadata: Metadata = {
    title: "Technology Integrations & Partnerships | Enterprise Solutions | Aheads",
    description: "Discover Aheads' technology integrations including cloud computing, AI solutions, cybersecurity, unified communications, and enterprise platforms. Expert integration services for businesses.",
    keywords: "technology integration, enterprise solutions, cloud computing, AI solutions, cybersecurity, unified communications, ServiceNow, Cisco, Microsoft Teams, AWS, Azure, network infrastructure",
    openGraph: {
        title: "Enterprise Technology Integrations | Aheads",
        description: "Trusted technology partnerships for secure, scalable business solutions. Expert integration services for cloud, AI, cybersecurity platforms.",
        type: "website",
    },
};

export default function IntegrationsPage() {
    return (
        <>
            <IntegrationsContentNew />
            <Footer />
        </>
    );
}
