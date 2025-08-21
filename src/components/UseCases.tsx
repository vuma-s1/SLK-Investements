import React, { useEffect, useState } from 'react';
import { Building2, ShoppingBag, Briefcase, Factory } from 'lucide-react';

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useCases = [
    {
      icon: Building2,
      title: 'SMEs & family businesses',
      description: 'Help established businesses optimize their financial operations and prepare for growth.'
    },
    {
      icon: ShoppingBag,
      title: 'D2C & eCommerces',
      description: 'Support digital-first businesses with cash flow management and scaling strategies.'
    },
    {
      icon: Briefcase,
      title: 'Professional services',
      description: 'Enable service-based businesses to improve profitability and operational efficiency.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Assist manufacturing companies with cost control and working capital optimization.'
    }
  ];

  return (
    <section className="py-8 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-900 mb-4 md:mb-4 leading-tight">
            Where we're most effective
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#24525c]/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-5 h-5 md:w-6 md:h-6 text-[#24525c]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 md:mb-2 text-base md:text-base">{useCase.title}</h3>
                <p className="text-gray-600 text-sm md:text-sm leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

