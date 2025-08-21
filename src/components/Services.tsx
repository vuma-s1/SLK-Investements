import React from 'react';
import { Check, Shield, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'FOUNDATIONAL ACCOUNTING AND FP&A ENHANCEMENT',
      iconColor: 'bg-yellow-400',
      lineColor: 'border-yellow-400',
      iconPattern: (
        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-sm relative overflow-hidden">
            {/* Geometric pattern of squares and triangles */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5 p-0.5">
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
              <div className="bg-yellow-400"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'PERFORMANCE ACCELERATION',
      iconColor: 'bg-amber-600',
      lineColor: 'border-amber-600',
      iconPattern: (
        <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-sm relative overflow-hidden">
            {/* Pattern of intertwined S shapes */}
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path d="M12 12C12 18 18 24 24 24C30 24 36 30 36 36" stroke="#92400E" strokeWidth="3" fill="none"/>
              <path d="M36 12C36 18 30 24 24 24C18 24 12 30 12 36" stroke="#92400E" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      title: 'EXIT PLANNING & TRANSACTION SUPPORT',
      iconColor: 'bg-teal-400',
      lineColor: 'border-teal-400',
      iconPattern: (
        <div className="w-16 h-16 bg-teal-400 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-sm relative overflow-hidden">
            {/* Grid of circles and quarter-circles */}
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="12" cy="12" r="3" fill="#0D9488"/>
              <circle cx="36" cy="12" r="3" fill="#0D9488"/>
              <circle cx="12" cy="36" r="3" fill="#0D9488"/>
              <circle cx="36" cy="36" r="3" fill="#0D9488"/>
              <path d="M24 12A12 12 0 0 1 36 24" stroke="#0D9488" strokeWidth="3" fill="none"/>
              <path d="M12 24A12 12 0 0 1 24 36" stroke="#0D9488" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      title: 'TURNAROUND & RESTRUCTURING',
      iconColor: 'bg-blue-400',
      lineColor: 'border-blue-400',
      iconPattern: (
        <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-sm relative overflow-hidden">
            {/* Parallel wavy lines */}
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path d="M6 12C12 18 18 12 24 18C30 12 36 18 42 12" stroke="#2563EB" strokeWidth="3" fill="none"/>
              <path d="M6 24C12 30 18 24 24 30C30 24 36 30 42 24" stroke="#2563EB" strokeWidth="3" fill="none"/>
              <path d="M6 36C12 42 18 36 24 42C30 36 36 42 42 36" stroke="#2563EB" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      )
    }
  ];

  const serviceCards = [
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      iconBg: 'bg-green-100',
      title: 'Board-ready dashboard',
      idealFor: 'Founders/CFOs in bootstrapped or VC-backed companies',
      setup: 'Initial plan in 2-3 weeks, then monthly reviews'
    },
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      iconBg: 'bg-green-100',
      title: 'Expense controls',
      idealFor: 'Businesses with variable or seasonal revenue',
      setup: 'Live in 2 weeks; weekly cash huddles + monthly oversight'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      iconBg: 'bg-purple-100',
      title: 'Risk Assessment & Mitigation',
      description: 'Make risks visible—and manageable.',
      youGet: [
        'Risk register with owners & triggers',
        'Control library & SOPs',
        'Compliance calendar',
        'Insurance review'
      ],
      idealFor: 'Teams scaling operations or credit exposure',
      setup: '2-4 weeks for full assessment; quarterly refresh'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      iconBg: 'bg-orange-100',
      title: 'Growth Acceleration & Scaling',
      description: 'Scale on solid unit economics.',
      youGet: [
        'Pricing & contribution margins',
        'Channel ROI map',
        'Capacity & hiring plan',
        'Scale-up operating cadence'
      ],
      idealFor: 'Teams ready to grow without chaos',
      setup: '4-6 weeks to design; quarterly execution cycles'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#f5f5f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Diagram Container */}
        <div className="relative">
          {/* Top Section - Four Service Nodes in Arc */}
          <div className="flex justify-between items-start mb-20 px-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circular Node */}
                <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 relative">
                  {service.iconPattern}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xs font-semibold text-gray-900 text-center leading-tight max-w-32 mb-8">
                  {service.title}
                </h3>
                
                {/* Connecting Line */}
                <div className="w-px h-20 bg-gray-300 relative">
                  {/* Colored line segment at bottom */}
                  <div className={`absolute bottom-0 left-0 w-px h-8 ${service.lineColor} border-l-2`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Foundation Statement */}
          <div className="text-center relative">
            {/* Converging Lines */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-20">
              <div className="w-px h-20 bg-gray-300 border-l border-gray-300 mx-auto"></div>
            </div>
            
            {/* Foundation Text */}
            <div className="bg-transparent px-12 py-8 inline-block">
              <p className="text-3xl font-light text-gray-900 leading-tight">
                Rooted in data & analytics.
              </p>
              <p className="text-3xl font-light text-gray-900 leading-tight">
                Powered by AI & technology.
              </p>
            </div>
            
            {/* Bottom Colored Lines */}
            <div className="flex justify-center mt-6 space-x-12">
              {services.map((service, index) => (
                <div key={index} className={`w-px h-16 ${service.lineColor} border-l-2`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4 leading-tight">
            Make decisions with confidence
          </h2>
            <p className="text-lg text-gray-600">
              Simple to start. Easy to run. Built for your business.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((card, index) => (
              <div key={index} className="bg-transparent rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${card.iconBg} p-2.5 rounded-full`}>
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                    {card.description && (
                      <p className="text-gray-600 text-sm italic">{card.description}</p>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-5">
                  {card.youGet && (
                  <div>
                      <span className="text-xs font-medium text-gray-700 block mb-2">You get:</span>
                      <ul className="space-y-1">
                        {card.youGet.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                            <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                  </div>
                  )}
                  <div>
                    <span className="text-xs font-medium text-gray-700 block mb-1">Ideal for:</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.idealFor}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-700 block mb-1">Setup:</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.setup}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105">
                  Get a quote
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;