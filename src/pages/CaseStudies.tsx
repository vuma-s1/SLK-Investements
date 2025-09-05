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
      title: 'Case Study',
      subtitle: 'What changed in 90 days',
      whatWeDid: 'Ran a quick diagnostic, created a 12-month operating plan, and set a governance calendar with owners. Implemented on-time MIS, a 13-week cash forecast, collections cadence, and a disciplined payment calendar. Installed spend controls and variance checks to stop leaks.',
      results: [
        'On-time MIS every month (close by Day +7)',
        'DSO reduced by ~12–15 days',
        'Cash runway extended by 6–8 weeks',
        'Non-essential spend down ~8–10%',
        'Clear accountability across finance and ops'
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

        {/* Case Study Section */}
        <div
          ref={cardsRef}
          className={`max-w-4xl mx-auto px-4 case-studies-grid ${isCardsVisible ? 'is-visible' : ''}`}
        >
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-transparent rounded-xl p-8 shadow-sm border border-gray-100 case-study-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-lg text-[#24525c] font-medium mb-6">{study.subtitle}</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">What we did:</h4>
                    <p className="text-slate-600 leading-relaxed">{study.whatWeDid}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Results in 90 days:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
