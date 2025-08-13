import React from 'react';
import { TrendingUp, DollarSign, Shield, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Financial Planning and Strategy',
      oneLiner: 'Turn goals into a 12–18-month operating plan you actually use.',
      youGet: 'Operating plan, budgets & forecasts (with scenarios), clear runway, board-ready dashboard.',
      idealFor: 'Founders/CFOs in bootstrapped or VC-backed companies.',
      setup: 'Initial plan in 2–3 weeks, then monthly reviews.',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cash Flow Management & Optimisation',
      oneLiner: 'See cash early, collect faster, spend with intent.',
      youGet: 'Rolling 13-week cash forecast, collections cadence & DSO targets, vendor-term playbook, expense controls.',
      idealFor: 'Businesses with variable or seasonal revenue.',
      setup: 'Live in 2 weeks; weekly cash huddles + monthly oversight.',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Assessment & Mitigation',
      oneLiner: 'Make risks visible—and manageable.',
      youGet: 'Risk register with owners & triggers, control library & SOPs, compliance calendar, insurance review.',
      idealFor: 'Teams scaling operations or credit exposure.',
      setup: '2–4 weeks for full assessment; quarterly refresh.',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Growth Acceleration & Scaling',
      oneLiner: 'Scale on solid unit economics.',
      youGet: 'Pricing & contribution margins, channel ROI map, capacity & hiring plan, scale-up operating cadence.',
      idealFor: 'Teams ready to grow without chaos.',
      setup: '4–6 weeks to design; quarterly execution cycles.',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Make decisions with confidence
          </h2>
          <p className="text-xl text-gray-600">
            Simple to start. Easy to run. Built for Indian businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`${service.color} p-2.5 rounded-lg text-white group-hover:scale-105 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm italic">{service.oneLiner}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-xs font-medium text-gray-700 block mb-1">You get:</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.youGet}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-700 block mb-1">Ideal for:</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.idealFor}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-700 block mb-1">Setup:</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.setup}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className={`${service.color} ${service.hoverColor} text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105`}>
                  Get a quote
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;