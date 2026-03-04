"use client";

import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
        if (hasSeenPopup) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger when mouse leaves from the top of the page
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitIntentShown", "true");
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden animate-scale-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Wait! Before You Go...</h2>
                    <p className="text-orange-100">Get our free Enterprise IT Strategy Guide</p>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="mb-6">
                        <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-lg p-6 mb-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500 rounded-lg p-3">
                                    <Download className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        Free Download: 2026 IT Strategy Playbook
                                    </h3>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>✓ Cloud Migration Framework</li>
                                        <li>✓ Cybersecurity Best Practices</li>
                                        <li>✓ Digital Transformation Roadmap</li>
                                        <li>✓ ROI Calculation Templates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                            Join 500+ IT leaders who've downloaded our comprehensive guide to modernizing enterprise
                            infrastructure.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // In production, send to API/email service
                            handleClose();
                            alert("Thank you! Check your email for the download link.");
                        }}
                        className="space-y-3"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Enter your work email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Download Free Guide
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            No spam. Unsubscribe anytime. Read our{" "}
                            <a href="/privacy" className="text-orange-500 hover:underline">
                                privacy policy
                            </a>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
