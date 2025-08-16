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
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]'
    },
    {
      icon: Zap,
      title: 'Personalised Service',
      description: 'Tailored solutions to your distinct context and goals',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]'
    },
    {
      icon: CheckCircle,
      title: 'Expertise',
      description: 'Deep understanding of the financial landscape and market trends',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]'
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
              <span className="text-[#24525c] block">
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
                  <stat.icon className="w-8 h-8 text-[#24525c] mx-auto mb-3" />
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
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Ready to transform your financial operations?</h3>
              <p className="text-slate-300 mb-4 text-sm">Let's discuss how we can help you achieve clarity, control, and confidence in your financial decisions.</p>
              <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 text-sm">
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
