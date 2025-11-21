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
