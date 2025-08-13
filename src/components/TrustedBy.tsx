import React from 'react';
import { Building2, Award, Star } from 'lucide-react';

const TrustedBy = () => {
  const companies = [
    { name: 'TechCorp', logo: 'TC', industry: 'Technology' },
    { name: 'FinServe', logo: 'FS', industry: 'Financial Services' },
    { name: 'ManufactureX', logo: 'MX', industry: 'Manufacturing' },
    { name: 'RetailPro', logo: 'RP', industry: 'Retail' },
    { name: 'HealthTech', logo: 'HT', industry: 'Healthcare' },
    { name: 'EduSmart', logo: 'ES', industry: 'Education' }
  ];

  const stats = [
    { number: '500+', label: 'Companies Trust Us', icon: <Building2 className="w-5 h-5" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '₹1000Cr+', label: 'Revenue Managed', icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Trusted by Leading Companies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">500+ Companies</span> Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we've helped businesses of all sizes achieve financial clarity and sustainable growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Some of our trusted partners</h3>
            <p className="text-gray-600">Representing diverse industries across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      {company.logo}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{company.name}</h4>
                    <p className="text-gray-500 text-xs">{company.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Preview */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="text-gray-700 italic mb-2">
                    "SLK Investments transformed our financial planning. Their strategic approach helped us scale from ₹5Cr to ₹25Cr in just 18 months."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">- Rahul Sharma, CEO TechCorp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
