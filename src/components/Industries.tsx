import React from 'react';
import { Building2, ShoppingCart, Briefcase, Factory } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'SMEs & Family Businesses',
      description: 'Structured financial planning for growing family enterprises',
      color: 'bg-blue-500',
      stats: '50+ businesses'
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'D2C & eCommerce',
      description: 'Cash flow optimization for online retail operations',
      color: 'bg-green-500',
      stats: '30+ brands'
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Professional Services',
      description: 'Financial controls for service-based businesses',
      color: 'bg-purple-500',
      stats: '40+ firms'
    },
    {
      icon: <Factory className="w-10 h-10" />,
      title: 'Manufacturing',
      description: 'Working capital management for production companies',
      color: 'bg-orange-500',
      stats: '25+ companies'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Where we're most effective
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="text-center p-6 rounded-xl bg-transparent hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
                <div className={`${industry.color} p-4 rounded-xl text-white inline-flex mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{industry.description}</p>
                <div className="text-xs text-blue-600 font-medium">{industry.stats}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;