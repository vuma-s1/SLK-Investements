import React, { useEffect, useState } from 'react';
import { CheckCircle, BarChart3, Clock, DollarSign, Shield, TrendingUp, Users, Target, Zap, FileText, AlertTriangle, Calculator, PieChart, Phone } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Board-ready forecasts',
      description: 'Rolling forecasts, budgets, and scenarios on a fixed cadence.'
    },
    {
      icon: Clock,
      title: 'On-time MIS',
      description: 'Monthly closes and dashboards delivered consistently.'
    },
    {
      icon: DollarSign,
      title: 'Cash runway clarity',
      description: 'Live view of inflows, outflows, and weeks of runway.'
    },
    {
      icon: TrendingUp,
      title: 'Weekly cash rhythm',
      description: '13-week cash model with a clear collections cadence.'
    },
    {
      icon: Zap,
      title: 'Faster collections',
      description: 'Structured follow-ups and measurable DSO reduction.'
    },
    {
      icon: Shield,
      title: 'Optimised vendor terms',
      description: 'Negotiated terms with a disciplined payment calendar.'
    },
    {
      icon: Target,
      title: 'Spend controls',
      description: 'Approval guardrails and variance checks that hold.'
    },
    {
      icon: Users,
      title: 'Governance installed',
      description: 'Review cadence, owners, and SLAs embedded.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk ownership',
      description: 'Risk register with triggers and accountable owners.'
    },
    {
      icon: Calculator,
      title: 'Data-backed pricing',
      description: 'Contribution margins and price tests you can trust.'
    },
    {
      icon: PieChart,
      title: 'Hiring signals',
      description: 'Capacity models tied to demand and delivery.'
    },
    {
      icon: FileText,
      title: 'Unit economics',
      description: 'Profit by product, channel, and cohort made visible.'
    },
    {
      icon: TrendingUp,
      title: 'Channel ROI',
      description: 'CAC, LTV, and payback tracked with clarity.'
    },
    {
      icon: Phone,
      title: 'On-call support',
      description: 'Rapid decision support for time-sensitive moves.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What you get—beyond advice
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;