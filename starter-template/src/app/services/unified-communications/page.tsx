"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UnifiedCommunications() {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
            {/* Breadcrumb Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Link href="/" className="hover:text-blue-800 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/services" className="hover:text-blue-800 transition-colors">Services</Link>
                    <span>/</span>
                    <span className="text-blue-900 font-semibold">Unified Communications</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">📞</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Unified Communications Solutions
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Integrated communication solutions for better collaboration, connecting your team 
                    seamlessly across voice, video, messaging, and file sharing platforms.
                </p>
            </motion.div>

            {/* Communication Solutions */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Communication Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "📱",
                            title: "VoIP Phone Systems",
                            description: "Modern voice over IP solutions with advanced calling features and mobility."
                        },
                        {
                            icon: "📹",
                            title: "Video Conferencing",
                            description: "High-quality video conferencing solutions for remote meetings and collaboration."
                        },
                        {
                            icon: "💬",
                            title: "Instant Messaging",
                            description: "Real-time messaging and chat platforms for quick team communication."
                        },
                        {
                            icon: "📧",
                            title: "Email Integration",
                            description: "Integrated email solutions with advanced collaboration features."
                        },
                        {
                            icon: "📂",
                            title: "File Sharing",
                            description: "Secure file sharing and document collaboration platforms."
                        },
                        {
                            icon: "📊",
                            title: "Presence Management",
                            description: "Real-time presence indicators and availability status across all platforms."
                        }
                    ].map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{solution.title}</h3>
                            <p className="text-gray-700">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Platform Integration */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Integrated Communication Platforms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Microsoft Teams</h3>
                        <p className="text-gray-700 text-sm">Complete collaboration platform with chat, video, and file sharing.</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                        <div className="text-4xl mb-4">💬</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Slack Integration</h3>
                        <p className="text-gray-700 text-sm">Seamless integration with Slack for enhanced team communication.</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                        <div className="text-4xl mb-4">📹</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Zoom Solutions</h3>
                        <p className="text-gray-700 text-sm">Professional video conferencing with webinar capabilities.</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Custom VoIP</h3>
                        <p className="text-gray-700 text-sm">Tailored VoIP solutions with advanced calling features.</p>
                    </div>
                </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Advanced Communication Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🎯</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Smart Call Routing</h3>
                                <p className="text-gray-700">Intelligent call routing based on availability, skills, and priority.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📱</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Mobile Integration</h3>
                                <p className="text-gray-700">Seamless mobile access with dedicated apps for iOS and Android.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔄</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Auto Attendant</h3>
                                <p className="text-gray-700">Professional automated receptionist with customizable menu options.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📧</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Voicemail to Email</h3>
                                <p className="text-gray-700">Automatic voicemail transcription and email delivery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📊</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Call Analytics</h3>
                                <p className="text-gray-700">Detailed call analytics and reporting for performance insights.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔒</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Security & Compliance</h3>
                                <p className="text-gray-700">Enterprise-grade security with encryption and compliance features.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🌍</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Global Connectivity</h3>
                                <p className="text-gray-700">International calling capabilities with local number support.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">⚡</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">High Availability</h3>
                                <p className="text-gray-700">99.9% uptime guarantee with redundant infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Implementation Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Implementation Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Assessment",
                            description: "Analyze current communication infrastructure and requirements.",
                            color: "from-blue-500 to-blue-600"
                        },
                        {
                            step: "02",
                            title: "Design",
                            description: "Design unified communication architecture and integration plan.",
                            color: "from-purple-500 to-purple-600"
                        },
                        {
                            step: "03",
                            title: "Deployment",
                            description: "Phased deployment with minimal disruption to operations.",
                            color: "from-green-500 to-green-600"
                        },
                        {
                            step: "04",
                            title: "Training & Support",
                            description: "Comprehensive training and ongoing technical support.",
                            color: "from-orange-500 to-orange-600"
                        }
                    ].map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="text-center"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${process.color} text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-lg`}>
                                {process.step}
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{process.title}</h3>
                            <p className="text-gray-700 text-sm">{process.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Business Benefits */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Business Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Increased Productivity</h3>
                        <p className="text-gray-700 text-sm">Streamlined communication leads to faster decision-making and improved productivity.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Savings</h3>
                        <p className="text-gray-700 text-sm">Reduce communication costs with integrated solutions and VoIP technology.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🌐</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Remote Collaboration</h3>
                        <p className="text-gray-700 text-sm">Enable seamless remote work and global team collaboration.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Improved Customer Service</h3>
                        <p className="text-gray-700 text-sm">Enhanced customer interactions with advanced call management features.</p>
                    </div>
                </div>
            </motion.section>

            {/* Use Cases */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Industry Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl mb-4">🏢</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Offices</h3>
                        <ul className="space-y-2 text-gray-700 text-sm text-left">
                            <li>• Executive communication</li>
                            <li>• Department collaboration</li>
                            <li>• Client video conferencing</li>
                            <li>• Multi-site connectivity</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">🏥</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Healthcare</h3>
                        <ul className="space-y-2 text-gray-700 text-sm text-left">
                            <li>• Telemedicine consultations</li>
                            <li>• Medical team coordination</li>
                            <li>• Patient communication</li>
                            <li>• Emergency response</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-4">🎓</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Education</h3>
                        <ul className="space-y-2 text-gray-700 text-sm text-left">
                            <li>• Virtual classrooms</li>
                            <li>• Faculty collaboration</li>
                            <li>• Student support services</li>
                            <li>• Administrative communication</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Unify Your Communications?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's transform your communication infrastructure for better collaboration and productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Get Communication Assessment
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        Schedule Demo
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
