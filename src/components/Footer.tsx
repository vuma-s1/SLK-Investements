import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' }
    ],
    cta: [
      { name: 'Book a Call', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const contactInfo = {
    email: 'hello@slkinvestments.com',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210'
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">SLK Investments Corporation</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We help Indian businesses plan, operate, and scale with confidence. 
              Clear numbers, calm execution.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">{contactInfo.whatsapp}</span>
              </div>
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2">
                {footerLinks.cta.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} SLK Investments Corporation. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Made with ❤️ for Indian businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;