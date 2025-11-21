import React from 'react';
import { 
  Cloud, Shield, Globe, Lock, Fingerprint, Layers, Database, Wifi, 
  Server, Box, Activity, Terminal, UserCheck, 
  Briefcase, Share2, Key, Smartphone, Zap
} from 'lucide-react';
import { IntegrationCategory } from '../types';

const integrationData: IntegrationCategory[] = [
  {
    title: "Cloud & Virtualization",
    description: "Public Hyperscalers & Private Cloud Infrastructure",
    items: [
      { name: "AWS", description: "Advanced Consulting Partner", icon: Cloud, color: "text-orange-500" },
      { name: "Microsoft Azure", description: "Gold Cloud Platform", icon: Cloud, color: "text-blue-500" },
      { name: "Google Cloud", description: "Cloud Partner", icon: Cloud, color: "text-red-500" },
      { name: "VMware", description: "Principal Partner", icon: Layers, color: "text-blue-600" },
      { name: "Nutanix", description: "Hyper-Converged Infra", icon: Box, color: "text-green-500" },
      { name: "Red Hat", description: "OpenShift & Enterprise Linux", icon: Server, color: "text-red-600" }
    ]
  },
  {
    title: "Networking & Connectivity",
    description: "SD-WAN, Switching, & Edge Computing",
    items: [
      { name: "Cisco", description: "Networking Core", icon: Share2, color: "text-cyan-500" },
      { name: "Juniper", description: "Elite Partner", icon: Share2, color: "text-blue-400" },
      { name: "Aruba", description: "Enterprise WiFi Solutions", icon: Wifi, color: "text-orange-400" },
      { name: "F5 Networks", description: "Load Balancing & App Delivery", icon: Activity, color: "text-red-500" },
      { name: "Palo Alto", description: "Network Security", icon: Shield, color: "text-orange-400" }
    ]
  },
  {
    title: "Cybersecurity & Risk",
    description: "Threat Defense, SIEM, & Endpoint Protection",
    items: [
      { name: "Fortinet", description: "Security Fabric Expert", icon: Shield, color: "text-red-500" },
      { name: "CrowdStrike", description: "Endpoint Protection", icon: Activity, color: "text-red-500" },
      { name: "Splunk", description: "SIEM Analytics & Observability", icon: Activity, color: "text-green-400" },
      { name: "Zscaler", description: "Zero Trust Exchange", icon: Cloud, color: "text-blue-500" },
      { name: "Sophos", description: "Managed Security Provider", icon: Shield, color: "text-blue-400" }
    ]
  },
  {
    title: "Identity & Access (IAM)",
    description: "SSO, MFA, and Identity Governance",
    items: [
      { name: "Okta", description: "Identity Cloud", icon: UserCheck, color: "text-blue-500" },
      { name: "Microsoft Entra", description: "Azure Active Directory", icon: Key, color: "text-blue-400" },
      { name: "Ping Identity", description: "Enterprise IAM", icon: Fingerprint, color: "text-red-500" },
      { name: "CyberArk", description: "Privileged Access Management", icon: Lock, color: "text-cyan-400" }
    ]
  },
  {
    title: "Enterprise SaaS & CRM",
    description: "Business Process Integration & Consulting",
    items: [
      { name: "Salesforce", description: "CRM Implementation", icon: Cloud, color: "text-blue-400" },
      { name: "ServiceNow", description: "ITSM & Workflow Automation", icon: Briefcase, color: "text-green-500" },
      { name: "SAP", description: "ERP Solutions", icon: Database, color: "text-blue-700" },
      { name: "Dynamics 365", description: "Business Applications", icon: Briefcase, color: "text-purple-500" }
    ]
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD Pipelines, Containers, & IaC",
    items: [
      { name: "Kubernetes", description: "Container Orchestration", icon: Box, color: "text-blue-500" },
      { name: "Docker", description: "Containerization", icon: Box, color: "text-blue-400" },
      { name: "Terraform", description: "Infrastructure as Code", icon: Terminal, color: "text-purple-500" },
      { name: "Ansible", description: "Configuration Management", icon: Terminal, color: "text-red-500" }
    ]
  }
];

const IntegrationsPage: React.FC = () => {
  return (
    <div className="bg-brand-blue min-h-screen pt-24 pb-20 selection:bg-brand-orange selection:text-white">
      
      {/* Hero Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-20 text-center relative">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <Layers size={14} className="text-brand-orange" />
            The Enterprise Tech Stack
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Orchestrating the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-400">Connected Enterprise</span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We don't just connect APIs; we architect resilient ecosystems. From <strong>Identity Management (IAM)</strong> to <strong>Complex Networking</strong>, we integrate the world's leading technologies.
          </p>
        </div>
      </div>

      {/* FEATURE: Private Cloud Construction */}
      <div className="container mx-auto px-6 lg:px-12 mb-32 relative z-10">
        <div className="relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
           {/* Blueprint Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-10 lg:p-16 flex flex-col justify-center relative z-10">
                 <div className="inline-flex items-center gap-2 text-brand-orange font-mono text-sm font-bold mb-4">
                    <Server size={16} />
                    <span>INFRASTRUCTURE AS A SERVICE</span>
                 </div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Sovereign Private Cloud Construction</h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    For enterprises requiring absolute data control, low latency, and regulatory compliance (GDPR/RBI), public cloud isn't enough. We architect <strong>Hyper-Converged Private Clouds</strong> on your premises.
                 </p>
                 
                 <ul className="space-y-4">
                    {[
                      { label: 'Air-Gapped Security', desc: 'Physically isolated networks for sensitive data.' },
                      { label: 'Hyper-Converged (HCI)', desc: 'Powered by Nutanix & VMware vSAN.' },
                      { label: 'Data Sovereignty', desc: '100% local data residency guaranteed.' }
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center mt-1 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                         </div>
                         <div>
                            <strong className="text-white block">{feature.label}</strong>
                            <span className="text-slate-500 text-sm">{feature.desc}</span>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Visual Side */}
              <div className="relative bg-slate-800/50 border-t lg:border-t-0 lg:border-l border-white/10 p-10 lg:p-16 flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-blue-600/5"></div>
                 
                 {/* Abstract Server Rack Visual */}
                 <div className="relative w-full max-w-md aspect-square">
                    <div className="absolute inset-0 border-2 border-dashed border-slate-700 rounded-xl"></div>
                    <div className="absolute top-8 bottom-8 left-8 right-8 bg-slate-900 rounded-lg border border-slate-600 flex flex-col p-4 gap-3 shadow-2xl">
                       {/* Server Units */}
                       {[1, 2, 3, 4].map((u) => (
                         <div key={u} className="flex-1 bg-slate-800 rounded border border-slate-700 flex items-center justify-between px-4 group hover:border-brand-orange/50 transition-colors">
                            <div className="flex gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                               <div className="w-1.5 h-1.5 rounded-full bg-green-500 delay-75 animate-pulse"></div>
                            </div>
                            <div className="h-1 w-20 bg-slate-700 rounded overflow-hidden">
                               <div className="h-full bg-brand-orange w-[60%] group-hover:w-[80%] transition-all duration-1000"></div>
                            </div>
                         </div>
                       ))}
                    </div>
                    {/* Label */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 px-4 py-1 rounded-full border border-slate-600 text-xs text-slate-400 font-mono whitespace-nowrap">
                       System Status: OPTIMIZED
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="container mx-auto px-6 lg:px-12 space-y-24 relative z-10">
        {integrationData.map((category, idx) => (
          <div key={idx} className="relative">
            {/* Section Label */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-white/10 pb-6">
               <div>
                 <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                 <p className="text-slate-400 max-w-xl">{category.description}</p>
               </div>
               <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Layer 0{idx + 1}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="group relative p-6 rounded-xl bg-slate-800/50 border border-white/5 backdrop-blur-sm hover:bg-slate-800 hover:border-brand-orange/30 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Top Glow */}
                  <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg bg-slate-900 border border-white/5 ${item.color} shadow-lg group-hover:shadow-brand-orange/10 transition-all`}>
                       <item.icon size={28} />
                    </div>
                    {/* Connection Strength Indicator */}
                    <div className="flex gap-0.5 items-end h-4">
                       <div className="w-1 h-2 bg-brand-orange rounded-[1px]"></div>
                       <div className="w-1 h-3 bg-brand-orange rounded-[1px]"></div>
                       <div className="w-1 h-4 bg-brand-orange rounded-[1px]"></div>
                       <div className="w-1 h-2 bg-slate-700 rounded-[1px]"></div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{item.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{item.description}</p>
                  </div>
                  
                  {/* Status Dot */}
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Architecture CTA */}
      <div className="container mx-auto px-6 lg:px-12 mt-32">
        <div className="relative rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 border border-white/10 p-12 overflow-hidden text-center lg:text-left">
           {/* Background Wiring */}
           <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 L50 50 L100 100" stroke="white" strokeWidth="0.5" fill="none" />
                 <path d="M0 0 L50 50 L100 0" stroke="white" strokeWidth="0.5" fill="none" />
              </svg>
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Hybrid Architecture?</h3>
                <p className="text-slate-300 max-w-xl text-lg">
                   We specialize in designing "Hub & Spoke" networks that securely link your legacy on-premise servers with scalable public cloud clusters.
                </p>
              </div>
              <button className="px-8 py-4 rounded-lg bg-brand-orange text-white font-bold hover:bg-brand-orangeDark transition-all shadow-lg shadow-brand-orange/20 whitespace-nowrap">
                Design My Architecture
              </button>
           </div>
        </div>
      </div>

    </div>
  );
};

export default IntegrationsPage;