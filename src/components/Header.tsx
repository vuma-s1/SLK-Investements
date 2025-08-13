import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isPage: true },
    { name: 'About', href: '/about', isPage: true },
    { name: 'Services', href: '/services', isPage: true },
    { name: 'Case Studies', href: '/case-studies', isPage: true },
    { name: 'Pricing', href: '/pricing', isPage: true },
    { name: 'Contact', href: '/contact', isPage: true }
  ];

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsOpen(false);
    
    if (isPage) {
      navigate(href);
    } else {
      // Smooth scroll to section on same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0 -ml-8">
            <button 
              onClick={scrollToTop}
              className="transition-transform duration-300 hover:scale-105"
            >
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
                SLK Investments Corporation
              </h1>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.isPage)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden lg:block -mr-8">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg shadow-md">
              <Phone size={18} />
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 hover:bg-slate-100 ${
                isScrolled ? 'text-slate-700' : 'text-slate-700'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 animate-in slide-in-from-top-2 duration-300">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className={`block w-full text-left px-3 py-2 font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <Phone size={16} />
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;