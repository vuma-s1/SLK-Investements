import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const navigate = useNavigate();
  const cardsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for cards animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsCardsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '₹50Cr+', label: 'Cash Managed', icon: Target },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '5+', label: 'Years Experience', icon: TrendingUp }
  ];

  const caseStudies = [
    {
      title: 'D2C E-commerce Growth',
      industry: 'E-commerce',
      challenge: 'Scaling from ₹5Cr to ₹25Cr in 18 months while maintaining profitability',
      solution: 'Implemented unit economics tracking, optimized pricing strategy, and established cash flow controls',
      results: [
        'Revenue growth: 400% in 18 months',
        'Profit margins improved by 15%',
        'Cash runway extended by 8 weeks',
        'DSO reduced by 12 days'
      ]
    },
    {
      title: 'Manufacturing Efficiency',
      industry: 'Manufacturing',
      challenge: 'Managing working capital and optimizing production costs',
      solution: 'Developed comprehensive cost control systems and vendor management strategies',
      results: [
        'Working capital reduced by 25%',
        'Production costs down by 18%',
        'Vendor terms optimized by 15 days',
        'Cash flow predictability improved by 40%'
      ]
    },
    {
      title: 'Professional Services Scaling',
      industry: 'Professional Services',
      challenge: 'Scaling operations while maintaining service quality',
      solution: 'Implemented capacity planning and pricing optimization models',
      results: [
        'Revenue per employee increased by 35%',
        'Client retention improved to 95%',
        'Profit margins enhanced by 22%',
        'Operational efficiency up by 30%'
      ]
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
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've helped companies across India achieve their financial goals.
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
        </div>

        {/* Case Studies Grid - BREAK OUT OF PARENT CONTAINER */}
        <div
          ref={cardsRef}
          className={`grid lg:grid-cols-3 gap-8 mb-16 max-w-[1800px] mx-auto px-4 case-studies-grid ${isCardsVisible ? 'is-visible' : ''}`}
        >
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-transparent rounded-xl p-8 shadow-sm border border-gray-100 w-full min-w-[240px] case-study-card">
                <div className="mb-6">
                  <span className="inline-block bg-[#24525c]/10 text-[#24525c] px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{study.title}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-[#24525c] text-white py-3 rounded-lg font-semibold hover:bg-[#1e424a] transition-all duration-300 flex items-center justify-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">Ready to see similar results?</h3>
              <p className="text-slate-300 mb-4 text-sm">Let's discuss how we can help your business achieve its financial goals.</p>
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

export default CaseStudies;
