import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    services: [],
    message: '',
    consent: false
  });

  const revenueRanges = [
    'Under ₹1 Cr',
    '₹1-5 Cr', 
    '₹5-10 Cr',
    '₹10-25 Cr',
    '₹25-50 Cr',
    '₹50+ Cr'
  ];

  const serviceOptions = [
    'Financial Planning & Strategy',
    'Cash Flow Management',
    'Risk Assessment & Mitigation', 
    'Growth & Scale Programme',
    'Advisory Sprint',
    'Monthly Advisory'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's talk
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Prefer WhatsApp? Chat with us directly for a quick response.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Email</h3>
                  <p className="text-gray-600 text-sm">hello@slkinvestments.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">Phone</h3>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm">WhatsApp</h3>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Revenue Range
                </label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select revenue range</option>
                  {revenueRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services Interested (Select multiple)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map(service => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your current challenges and goals..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I consent to SLK Investments Corporation processing my data for the purpose of this enquiry. *
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

        {/* Call Booking Section */}
        <div className="mt-20 text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Book a 30-minute consultation
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pick a time that suits you. We'll review your goals and suggest next steps.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;