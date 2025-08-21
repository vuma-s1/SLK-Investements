import React from 'react';
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team and discover how we can help transform your financial planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="bg-transparent rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <a 
                href="mailto:hello@slkinvestments.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                hello@slkinvestments.com
              </a>
            </div>
          </div>

          <div className="bg-transparent rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a 
                href="tel:+919876543210"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="bg-transparent rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat for instant response</p>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              Need a detailed consultation?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Fill out our comprehensive contact form to get personalized recommendations 
              and a detailed consultation tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Form
                <ArrowRight size={20} />
              </Link>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                <MessageCircle size={20} />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
