import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Target, Users, BarChart3, TrendingUp } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      step: '1',
      title: 'Discover and diagnose',
      description: 'Align on goals, data, and constraints.',
      result: 'You get: a quick assessment and a clear starting point.',
      icon: Target
    },
    {
      step: '2',
      title: 'Plan and prioritise',
      description: 'Build a 90-day plan with owners, targets, and a risk map.',
      result: 'You get: one page that shows what to do and who does it.',
      icon: Users
    },
    {
      step: '3',
      title: 'Implement and track',
      description: 'Set up dashboards, weekly cash rhythm, and monthly reviews.',
      result: 'You get: live numbers and course corrections in real time.',
      icon: BarChart3
    },
    {
      step: '4',
      title: 'Scale and safeguard',
      description: 'Double down on what works and reduce known risks.',
      result: 'You get: steady growth and stronger controls.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A simple, reliable way to work together
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <p className="text-blue-600 text-xs font-medium">{step.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105 hover:shadow-lg">
            Start with a 30-min Call
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;