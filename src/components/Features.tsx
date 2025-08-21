import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Clock, DollarSign, Users, Target, Zap, FileText, PieChart, Globe, Phone } from 'lucide-react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Board-ready forecasts',
      description: 'Rolling forecasts, budgets, and scenarios on a fixed cadence.',
      color: 'from-blue-500 to-blue-600',
      buttonText: 'View Forecasts'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'On-time MIS',
      description: 'Monthly closes and dashboards delivered consistently.',
      color: 'from-green-500 to-green-600',
      buttonText: 'See Dashboards'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cash runway clarity',
      description: 'Live view of inflows, outflows, and weeks of runway.',
      color: 'from-purple-500 to-purple-600',
      buttonText: 'Track Cash Flow'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Weekly cash rhythm',
      description: '13-week cash model with a clear collections cadence.',
      color: 'from-orange-500 to-orange-600',
      buttonText: 'Start Modeling'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Faster collections',
      description: 'Structured follow-ups and measurable DSO reduction.',
      color: 'from-red-500 to-red-600',
      buttonText: 'Speed Up Collections'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Optimized vendor terms',
      description: 'Negotiated terms with a disciplined payment calendar.',
      color: 'from-teal-500 to-teal-600',
      buttonText: 'Optimize Terms'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Spend controls',
      description: 'Approval guardrails and variance checks that hold.',
      color: 'from-indigo-500 to-indigo-600',
      buttonText: 'Set Controls'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Governance installed',
      description: 'Review cadence, owners, and SLAs embedded.',
      color: 'from-pink-500 to-pink-600',
      buttonText: 'Install Governance'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Risk ownership',
      description: 'Risk register with triggers and accountable owners.',
      color: 'from-yellow-500 to-yellow-600',
      buttonText: 'Manage Risks'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Data-backed pricing',
      description: 'Contribution margins and price tests you can trust.',
      color: 'from-emerald-500 to-emerald-600',
      buttonText: 'Optimize Pricing'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Unit economics',
      description: 'Profit by product, channel, and cohort made visible.',
      color: 'from-violet-500 to-violet-600',
      buttonText: 'Analyze Units'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Channel ROI',
      description: 'CAC, LTV, and payback tracked with clarity.',
      color: 'from-rose-500 to-rose-600',
      buttonText: 'Track ROI'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-[#24525c] px-6 py-2 text-sm font-semibold text-white shadow-lg mb-4 md:mb-6">
            <span className="mr-2">✨</span>
            What you get—beyond advice
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            10 proven systems to
            <span className="text-[#24525c] block"> transform your finance function</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get the tools, processes, and insights that turn financial chaos into clear, actionable intelligence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-[#24525c] rounded-2xl p-4 md:p-6 shadow-xl border border-[#24525c]/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden max-w-sm mx-auto md:max-w-none w-full"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-white/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-white mb-2 md:mb-3 text-base md:text-lg leading-tight">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-white/80 text-sm md:text-sm leading-relaxed mb-3 md:mb-6">{feature.description}</p>
                
                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-2 md:mb-4"></div>
                
                {/* CTA Button */}
                <button className="w-full bg-white text-[#24525c] px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                  {feature.buttonText}
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <button className="bg-[#24525c] hover:bg-[#1e424a] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto text-sm md:text-base">
            See How We Work
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;