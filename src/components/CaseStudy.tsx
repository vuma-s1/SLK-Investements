import React, { useEffect, useState } from 'react';
import { CheckCircle, TrendingUp, DollarSign, Clock, Users, Target } from 'lucide-react';

const CaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatWeDid = [
    'Ran a quick diagnostic, created a 12-month operating plan, and set a governance calendar with owners.',
    'Implemented on-time MIS, a 13-week cash forecast, collections cadence, and a disciplined payment calendar.',
    'Installed spend controls and variance checks to stop leaks.'
  ];

  const results = [
    {
      icon: Clock,
      title: 'On-time MIS every month',
      description: 'Close by Day +7'
    },
    {
      icon: TrendingUp,
      title: 'DSO reduced by ~12–15 days',
      description: 'Faster collections'
    },
    {
      icon: DollarSign,
      title: 'Cash runway extended by 6–8 weeks',
      description: 'Better liquidity'
    },
    {
      icon: Target,
      title: 'Non-essential spend down ~8–10%',
      description: 'Cost optimization'
    },
    {
      icon: Users,
      title: 'Clear accountability across finance and ops',
      description: 'Better governance'
    }
  ];

  return (
    <section className="py-4 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-xl md:text-4xl font-light text-gray-900 mb-1 md:mb-4 leading-tight">
            Case Study
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            What changed in 90 days
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-start">
          {/* What We Did */}
          <div className="bg-transparent rounded-xl p-4 md:p-8 shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 md:mb-6">What we did:</h3>
            <ul className="space-y-2 md:space-y-4">
              {whatWeDid.map((item, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed text-xs md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-transparent rounded-xl p-4 md:p-8 shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3 md:mb-6">Results in 90 days:</h3>
            <div className="space-y-2 md:space-y-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-4 bg-gray-50 rounded-lg">
                                  <div className="w-6 h-6 md:w-10 md:h-10 bg-[#24525c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <result.icon className="w-3 h-3 md:w-5 md:h-5 text-[#24525c]" />
                </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-xs md:text-base">{result.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;