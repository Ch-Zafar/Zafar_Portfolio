import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({
  logoText = "Zafar.",
  logoSrc = "/logo.png",
  onButtonClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Web App', href: '#web-app' },
    { name: 'AI Automations', href: '#ai-automations' },
    { name: 'Cyber Security', href: '#cyber-security' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleAction = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open('https://calendly.com/chaudaryzafar279/new-meeting', '_blank');
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5'
        : 'bg-white border-b border-gray-100 py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* SECTION 1: LOGO */}
          <a href="#" className="flex items-center gap-2.5 group">
            {logoSrc && (
              <img
                src={logoSrc}
                alt="Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <span className="text-xl font-bold tracking-tight font-Mona text-black group-hover:opacity-80 transition-opacity">
              {logoText}
            </span>
          </a>

          {/* SECTION 2: LINKS */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 rounded-full transition-all duration-200 hover:text-black hover:bg-gray-100 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* SECTION 3: CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleAction}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-black hover:bg-gray-800 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Let's Talk</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-5 pt-3 pb-6 shadow-xl space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleAction();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium text-white bg-black hover:bg-gray-800 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;