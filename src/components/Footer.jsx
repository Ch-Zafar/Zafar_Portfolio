import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0E] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-2xl font-bold font-Mona tracking-tight text-white">
                Zafar<span className="text-[#91FB03]">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Helping businesses innovate and scale with modern Web Apps, intelligent AI Automations, and Cyber Security defenses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-300">
            <a href="#web-app" className="hover:text-white transition-colors">Web App</a>
            <a href="#ai-automations" className="hover:text-white transition-colors">AI Automations</a>
            <a href="#cyber-security" className="hover:text-white transition-colors">Cyber Security</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#91FB03] transition-colors">Contact</a>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Zafar Hussain. All rights reserved.</p>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/923152931279"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/chaudaryzafar279/new-meeting"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Calendly"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
