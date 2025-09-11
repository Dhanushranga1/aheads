"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudComputing() {
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
                    <span className="text-blue-900 font-semibold">Cloud Computing</span>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="text-6xl mb-6">☁️</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
                    Cloud Computing Solutions
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Scalable cloud solutions for your business, enabling digital transformation 
                    with flexible, secure, and cost-effective cloud infrastructure.
                </p>
            </motion.div>

            {/* Cloud Services */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Our Cloud Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🚀",
                            title: "Cloud Migration",
                            description: "Seamless migration of existing applications and data to cloud platforms."
                        },
                        {
                            icon: "🏗️",
                            title: "Infrastructure as a Service",
                            description: "Scalable cloud infrastructure including virtual machines, storage, and networking."
                        },
                        {
                            icon: "⚙️",
                            title: "Platform as a Service",
                            description: "Complete development and deployment platforms for rapid application delivery."
                        },
                        {
                            icon: "📱",
                            title: "Software as a Service",
                            description: "Cloud-based software solutions for business productivity and collaboration."
                        },
                        {
                            icon: "🔒",
                            title: "Cloud Security",
                            description: "Comprehensive security solutions to protect your cloud infrastructure and data."
                        },
                        {
                            icon: "📊",
                            title: "Cloud Analytics",
                            description: "Advanced analytics and business intelligence solutions in the cloud."
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Cloud Platforms */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Supported Cloud Platforms</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                        <div className="text-4xl mb-4">🔵</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Microsoft Azure</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Azure Virtual Machines</li>
                            <li>• Azure SQL Database</li>
                            <li>• Azure Active Directory</li>
                            <li>• Azure DevOps</li>
                        </ul>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-lg border border-orange-200">
                        <div className="text-4xl mb-4">🟠</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Amazon AWS</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• EC2 & S3 Services</li>
                            <li>• RDS & Lambda</li>
                            <li>• CloudFront & Route 53</li>
                            <li>• IAM & Security</li>
                        </ul>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                        <div className="text-4xl mb-4">🟢</div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Google Cloud</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Compute Engine</li>
                            <li>• BigQuery & AI Platform</li>
                            <li>• Kubernetes Engine</li>
                            <li>• Cloud Storage</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Migration Process */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Cloud Migration Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Assessment",
                            description: "Comprehensive assessment of current infrastructure and applications.",
                            color: "from-purple-500 to-purple-600"
                        },
                        {
                            step: "02",
                            title: "Strategy",
                            description: "Develop cloud migration strategy and roadmap.",
                            color: "from-blue-500 to-blue-600"
                        },
                        {
                            step: "03",
                            title: "Design",
                            description: "Design cloud architecture and select appropriate services.",
                            color: "from-green-500 to-green-600"
                        },
                        {
                            step: "04",
                            title: "Migration",
                            description: "Execute migration with minimal downtime and risk.",
                            color: "from-orange-500 to-orange-600"
                        },
                        {
                            step: "05",
                            title: "Optimization",
                            description: "Optimize performance, costs, and security post-migration.",
                            color: "from-red-500 to-red-600"
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

            {/* Cloud Benefits */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mb-16 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Cloud Computing Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">💰</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Efficiency</h3>
                                <p className="text-gray-700">Reduce IT infrastructure costs with pay-as-you-use pricing models.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">📈</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Scalability</h3>
                                <p className="text-gray-700">Easily scale resources up or down based on business demands.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🌍</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Global Accessibility</h3>
                                <p className="text-gray-700">Access applications and data from anywhere in the world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔒</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Enhanced Security</h3>
                                <p className="text-gray-700">Enterprise-grade security with advanced threat protection.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">⚡</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Improved Performance</h3>
                                <p className="text-gray-700">High-performance infrastructure with global content delivery.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-2xl">🔄</div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">Automatic Backup</h3>
                                <p className="text-gray-700">Automated backup and disaster recovery capabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Use Cases */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Cloud Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Business Applications</h3>
                        <p className="text-gray-700 text-sm">Cloud-based CRM, ERP, and productivity applications.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🧪</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Development & Testing</h3>
                        <p className="text-gray-700 text-sm">Rapid provisioning of development and testing environments.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Big Data Analytics</h3>
                        <p className="text-gray-700 text-sm">Process and analyze large datasets with cloud computing power.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-4">🌐</div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Web Applications</h3>
                        <p className="text-gray-700 text-sm">Host and scale web applications with global reach.</p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's accelerate your digital transformation with our cloud computing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        Start Cloud Journey
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
                    >
                        Cloud Readiness Assessment
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}
