import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '₹50Cr+', label: 'Cash Managed', icon: Target },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '5+', label: 'Years Experience', icon: TrendingUp }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discover and diagnose',
      description: 'Align on goals, data, and constraints.',
      result: 'You get: a quick assessment and a clear starting point.'
    },
    {
      step: '2',
      title: 'Plan and prioritise',
      description: 'Build a 90-day plan with owners, targets, and a risk map.',
      result: 'You get: one page that shows what to do and who does it.'
    },
    {
      step: '3',
      title: 'Implement and track',
      description: 'Set up dashboards, weekly cash rhythm, and monthly reviews.',
      result: 'You get: live numbers and course corrections in real time.'
    },
    {
      step: '4',
      title: 'Scale and safeguard',
      description: 'Double down on what works and reduce known risks.',
      result: 'You get: steady growth and stronger controls.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      {/* Main Content */}
      <div className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              A simple, reliable way to
              <span className="text-[#24525c] block">
                work together
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step process ensures you get clarity, control, and confidence in your financial decisions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-transparent rounded-xl p-6 shadow-sm border border-gray-100">
                  <stat.icon className="w-8 h-8 text-[#24525c] mx-auto mb-3" />
                  <div className="text-2xl font-semibold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((process, index) => (
                <div key={index} className="bg-transparent rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-[#24525c] text-white rounded-full flex items-center justify-center text-sm font-semibold mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{process.description}</p>
                  <p className="text-xs text-[#24525c] font-medium">{process.result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
              <p className="text-slate-300 mb-4 text-sm">Start with a 30-min call to discuss your needs and see how we can help.</p>
              <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 text-sm">
                Start with a 30-min Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Process;
