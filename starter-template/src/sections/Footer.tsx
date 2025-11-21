"use client";

import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/images/logo1.svg";

const footerLinks = [
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Image src={logoImage} alt="Ahead Services" width={32} height={32} />
                            <span className="text-xl font-bold">Ahead Services</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Founded in 2013 and headquartered in Bangalore, we deliver enterprise-ready 
                            technology solutions with a cybersecurity-first mindset.
                        </p>
                        <p className="text-sm text-gray-400 italic">
                            "We don't just build IT systems. We build secure, future-ready ecosystems."
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/services/cybersecurity" className="hover:text-orange-400 transition-colors">Cybersecurity</Link></li>
                            <li><Link href="/services/cloud-computing" className="hover:text-orange-400 transition-colors">Cloud Computing</Link></li>
                            <li><Link href="/services/artificial-intelligence" className="hover:text-orange-400 transition-colors">AI Solutions</Link></li>
                            <li><Link href="/services/it-enabled-services" className="hover:text-orange-400 transition-colors">IT Services</Link></li>
                            <li><Link href="/services/blockchain" className="hover:text-orange-400 transition-colors">Blockchain</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 info@aheadservices.in</p>
                            <p>📞 +91 9884 208208</p>
                            <p>📍 Chennai, India</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Ahead Services. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {footerLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
