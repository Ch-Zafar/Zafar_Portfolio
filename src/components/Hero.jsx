import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const Hero = () => {
    const handleScrollToProjects = () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleOpenMeeting = () => {
        window.open('https://calendly.com/chaudaryzafar279/new-meeting', '_blank');
    };

    return (
        <section className="relative w-full min-h-screen pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#ECEEEF] flex flex-col justify-between">

            {/* Background Decorative Circular Arc (Zafar's Signature Design) */}
            <div className="absolute -top-[220px] -left-[180px] sm:-top-[340px] sm:-left-[280px] lg:-top-[420px] lg:-left-[360px] w-[560px] h-[560px] sm:w-[820px] sm:h-[820px] lg:w-[980px] lg:h-[980px] border-[2.5px] sm:border-[3px] border-black/85 rounded-full z-0 pointer-events-none transition-all">
                <div className="absolute bottom-16 sm:bottom-32 lg:bottom-48 inset-x-0 flex justify-end items-end mr-8 sm:mr-20 lg:mr-32">
                    <p className="font-sans text-xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-14 text-right font-medium text-black">
                        Helping Businesses <br />
                        With Digital Solutions
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">

                {/* Top Badges & Tagline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-black/10 shadow-xs backdrop-blur-sm self-start">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#91FB03] animate-pulse"></span>
                        <span className="text-xs sm:text-sm font-medium text-black">
                            Available for Freelance & High-Impact Projects
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Code2 className="w-4 h-4 text-black" /> Web Apps
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1.5">
                            <Cpu className="w-4 h-4 text-black" /> AI Automations
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-black" /> Cyber Security
                        </span>
                    </div>
                </div>

                {/* Centerpiece: Hero Portrait with Floating Interactive Cards */}
                <div className="relative my-8 sm:my-12 flex items-center justify-center">

                    {/* Floating Pill Card: Web App (Left) */}
                    <div className="hidden md:flex absolute left-2 lg:left-12 top-1/4 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-black/5 hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-black text-[#91FB03] flex items-center justify-center font-bold">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Specialization</p>
                            <p className="text-sm font-bold text-black">Modern Web Apps</p>
                        </div>
                    </div>

                    {/* Floating Pill Card: AI Automations (Right Top) */}
                    <div className="hidden md:flex absolute right-2 lg:right-12 top-16 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-black/5 hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-black text-[#91FB03] flex items-center justify-center font-bold">
                            <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Efficiency</p>
                            <p className="text-sm font-bold text-black">10x AI Automation</p>
                        </div>
                    </div>

                    {/* Floating Pill Card: Cyber Security (Right Bottom) */}
                    <div className="hidden lg:flex absolute right-16 bottom-16 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-black/5 hover:-translate-y-1 transition-transform">
                        <div className="w-10 h-10 rounded-xl bg-black text-[#91FB03] flex items-center justify-center font-bold">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Audits & Defense</p>
                            <p className="text-sm font-bold text-black">Cyber Security</p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative z-10 flex justify-center items-end">
                        <img
                            src="/V2/Hero_BG.png"
                            alt="Zafar Hussain"
                            className="w-auto h-[48vh] sm:h-[58vh] md:h-[65vh] lg:h-[100vh] max-h-[auto] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Action Controls & Value Prop */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-4">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-Mona text-black tracking-tight">
                            Zafar Hussain
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-md">
                            Full-Stack Architect, AI Automation Engineer & Cyber Security Consultant.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                        <button
                            onClick={handleScrollToProjects}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-black hover:bg-gray-800 active:scale-95 transition-all shadow-md group"
                        >
                            <span>Explore Works</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>

                        <button
                            onClick={handleOpenMeeting}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-gray-100 active:scale-95 transition-all border border-black/10 shadow-xs"
                        >
                            <span>Book a Call</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Marquee Animation Ribbon (Zafar's Signature Design) */}
            <div className="w-full overflow-hidden select-none bg-black text-white py-3.5 mt-4 z-10 border-y border-black">
                <div className="flex whitespace-nowrap animate-marquee">
                    <div className="flex items-center space-x-8 text-sm sm:text-base font-bold tracking-widest font-Mona uppercase px-4">
                        <span>WEB APP DEVELOPMENT</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>AI AUTOMATIONS & AGENTS</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>CYBER SECURITY & AUDITS</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>DIGITAL PROBLEM SOLVER</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>ZAFAR HUSSAIN</span>
                        <span className="text-[#91FB03]">✦</span>
                    </div>
                    <div className="flex items-center space-x-8 text-sm sm:text-base font-bold tracking-widest font-Mona uppercase px-4">
                        <span>WEB APP DEVELOPMENT</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>AI AUTOMATIONS & AGENTS</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>CYBER SECURITY & AUDITS</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>DIGITAL PROBLEM SOLVER</span>
                        <span className="text-[#91FB03]">✦</span>
                        <span>ZAFAR HUSSAIN</span>
                        <span className="text-[#91FB03]">✦</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;