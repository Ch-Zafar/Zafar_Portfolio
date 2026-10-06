import React from 'react';
import { Code2, Cpu, ShieldCheck, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-app',
      icon: <Code2 className="w-8 h-8 text-black" />,
      tag: "FULL-STACK & SAAS",
      title: "Web App Development",
      description:
        "Building responsive, high-velocity web applications, dynamic customer portals, and tailored digital platforms engineered with React, Next.js, Node.js, and cloud backends.",
      deliverables: [
        "Interactive 3D / Real-time Customizers (like Bazm)",
        "Scalable SaaS Dashboards & Multi-tenant Platforms",
        "Performant React & Next.js Single Page Applications",
        "RESTful & GraphQL API Integrations",
      ],
      accent: "#91FB03",
    },
    {
      id: 'ai-automations',
      icon: <Cpu className="w-8 h-8 text-black" />,
      tag: "AGENTS & PIPELINES",
      title: "AI Automations & Workflows",
      description:
        "Streamlining operations by deploying autonomous AI agents, LLM pipelines, and intelligent workflow automation that eliminate redundant tasks and scale your business output.",
      deliverables: [
        "Autonomous Multi-Agent AI Systems",
        "CRM & Email Inbound/Outbound Automation",
        "Custom LLM Knowledge Bases & Retrieval Systems",
        "Slack, WhatsApp & Discord Operational Bots",
      ],
      accent: "#91FB03",
    },
    {
      id: 'cyber-security',
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      tag: "DEFENSE & AUDITS",
      title: "Cyber Security & Audits",
      description:
        "Fortifying web assets through comprehensive penetration testing, vulnerability discovery, threat mitigation, and hardened architectural defenses to protect critical data.",
      deliverables: [
        "Full Web Application Penetration Testing",
        "OWASP Top 10 Security Gap Analysis",
        "API Endpoint & Authentication Hardening",
        "Incident Readiness & Security Consulting",
      ],
      accent: "#91FB03",
    },
  ];

  return (
    <section className="py-24 bg-white text-black relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold tracking-wider uppercase mb-3">
              <Zap className="w-3.5 h-3.5 text-black" />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Mona tracking-tight">
              Services Tailored For <br className="hidden sm:inline" />
              Digital Growth
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
            From modern web applications to automated AI agent architectures and hardened security audits, every solution is built to deliver measurable business impact.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className="group relative bg-[#F7F8F9] hover:bg-black rounded-3xl p-8 border border-gray-200/80 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 scroll-mt-28"
            >
              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center group-hover:bg-[#91FB03] transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-gray-400 uppercase">
                    0{index + 1} // {item.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold font-Mona mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6 transition-colors">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-200 group-hover:border-gray-800 transition-colors">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 group-hover:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-black group-hover:text-[#91FB03] shrink-0 mt-0.5 transition-colors" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-6 flex items-center justify-between border-t border-gray-200 group-hover:border-gray-800 transition-colors">
                <span className="text-xs font-semibold text-gray-900 group-hover:text-white transition-colors">
                  Inquire Service
                </span>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-white group-hover:bg-[#91FB03] text-black flex items-center justify-center shadow-xs transition-transform group-hover:rotate-45"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
