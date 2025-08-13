import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const About = () => {
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

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering ethics and transparency in all interactions',
      bgColor: 'from-blue-50 to-indigo-50',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Personalised Service',
      description: 'Tailored solutions to your distinct context and goals',
      bgColor: 'from-purple-50 to-violet-50',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Expertise',
      description: 'Deep understanding of the financial landscape and market trends',
      bgColor: 'from-green-50 to-emerald-50',
      color: 'text-green-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
      style={{ paddingTop: '80px' }}
    >
      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                SLK Investments Corporation
              </span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none mb-16"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We help Indian businesses plan, operate, and scale with confidence. We install a simple finance rhythm—weekly cash control, on-time MIS, monthly reviews—so you always know where you stand. Budgets and forecasts are built for action, collections tighten, working capital improves, risks have owners, and unit economics stay profitable.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our mission is to grow value and protect downside—one clear decision at a time. We partner with your CA and team as a fractional finance lead, and prepare clean data rooms and lender-ready metrics when you fundraise. Everything is anchored in integrity, personalised service, and deep market expertise—clear numbers, calm execution.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What we stand for</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your financial operations?</h3>
              <p className="text-blue-100 mb-6">Let's discuss how we can help you achieve clarity, control, and confidence in your financial decisions.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                Book a Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default About;
