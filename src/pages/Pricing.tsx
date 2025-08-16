import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Target, Award, TrendingUp, Zap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleCard = (cardName: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const plans = [
    {
      name: 'Advisory Sprint',
      duration: '4 weeks',
      purpose: 'A fast reset that gives you clarity and a working plan in one month.',
      bestFor: 'New engagements, leadership changes, or when things feel messy.',
      howItRuns: [
        'Week 1 — Discover: We review your current numbers, cash flow, and goals.',
        'Week 2 — Design: We build your simple 90-day plan (what to do, who owns it, by when).',
        'Week 3 — Set up: Dashboards go live; 13-week cash tracker set; review calendar created.',
        'Week 4 — Hand-off: We walk you through the plan and confirm next steps.'
      ],
      whatYouGet: [
        'A 90-day action plan (owners, targets, dates)',
        'A live 13-week cash view (inflows, outflows, runway)',
        'A simple, board-ready dashboard pack',
        'A risk list with owners and triggers',
        'A monthly review cadence that everyone understands'
      ],
      timeNeeded: '2 short calls per week (30–45 mins)',
      notIncluded: 'Bookkeeping, tax filing, ERP/CRM builds, or fundraising execution (we can coordinate if needed)',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      popular: false
    },
    {
      name: 'Monthly Advisory',
      duration: 'Ongoing',
      purpose: 'Ongoing finance leadership so decisions stay clear and there are no surprises.',
      bestFor: 'Teams that want steady discipline after the Sprint (or as a standalone).',
      howItRuns: [
        'Weekly: 30-min cash check-in (collections, spends, runway)',
        'Monthly: Close the month on time and review the dashboard + actions',
        'Quarterly: Refresh targets and adjust the plan'
      ],
      whatYouGet: [
        'Updated 13-week cash tracker',
        'On-time monthly reports and a one-page summary of "what to do next"',
        'A decisions log (what we decided and why)',
        'Risks tracked with owners and due dates',
        'On-call support for time-sensitive choices'
      ],
      timeNeeded: '1 weekly 30-min call + 1 monthly 60-min review',
      notIncluded: 'Accounting entries, payroll processing, invoicing—your CA/finance team handles those; we lead the rhythm and decisions',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      popular: true
    },
    {
      name: 'Growth & Scale Programme',
      duration: '4-6 weeks design',
      purpose: 'A profit-first plan to scale—pricing, channels, capacity, and hiring without chaos.',
      bestFor: 'Teams ready to grow and want safeguards in place.',
      howItRuns: [
        'Design (4–6 weeks): Workshops on pricing and unit economics; map channel ROI; build capacity & hiring plan; set operating cadence.',
        'Execute (optional, quarterly): We help you run the plan and refine it each quarter.'
      ],
      whatYouGet: [
        'Pricing and contribution-margin model you can update',
        'Channel ROI map (CAC, LTV, payback) with clear bets and limits',
        'Capacity & hiring plan with timelines and simple org chart',
        'Scale-up operating cadence (who meets, how often, for what)',
        '6-quarter growth roadmap tied to numbers'
      ],
      timeNeeded: '1–2 workshops per week during design; weekly 30-min check-ins',
      notIncluded: 'Media buying, sales ops builds, recruitment services—happy to coordinate with your teams/partners',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'No lock-in traps',
      description: 'Cancel anytime with 30 days\' notice'
    },
    {
      icon: TrendingUp,
      title: 'Clarity guarantee',
      description: 'We rework your initial plan once at no cost if needed'
    },
    {
      icon: Users,
      title: 'Ethics first',
      description: 'Transparent advice, documented decisions'
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Clear plans.
              <span className="text-[#24525c] block">
                Custom quotes.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pick what you need. We scope it on a quick call and send a quote.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-sm border border-gray-100 ${plan.popular ? 'ring-2 ring-[#24525c]' : ''}`}>
                  {plan.popular && (
                    <div className="bg-[#24525c] text-white text-center py-2 rounded-t-xl text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                      <div className="text-sm text-slate-500 mb-4">{plan.duration}</div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{plan.purpose}</p>
                      <p className="text-slate-700 text-sm font-medium">Best for: {plan.bestFor}</p>
                    </div>

                    {!expandedCards[plan.name] ? (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">How it runs:</h4>
                          <ul className="space-y-1">
                            {plan.howItRuns.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">What you get:</h4>
                          <ul className="space-y-1">
                            {plan.whatYouGet.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button
                          onClick={() => toggleCard(plan.name)}
                          className="w-full bg-gray-50 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                        >
                          View Full Details
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">How it runs:</h4>
                          <ul className="space-y-1">
                            {plan.howItRuns.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">What you get:</h4>
                          <ul className="space-y-1">
                            {plan.whatYouGet.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1 text-sm">Your time needed:</h4>
                          <p className="text-xs text-slate-600">{plan.timeNeeded}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1 text-sm">What's not included:</h4>
                          <p className="text-xs text-slate-600">{plan.notIncluded}</p>
                        </div>
                        
                        <button
                          onClick={() => toggleCard(plan.name)}
                          className="w-full bg-gray-50 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                        >
                          Show Less
                        </button>
                      </div>
                    )}
                    
                    <button className="w-full bg-[#24525c] text-white py-3 rounded-lg font-semibold hover:bg-[#1e424a] transition-all duration-300 flex items-center justify-center gap-2 mt-6">
                      Get a quote
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Layout - Minimal Design */}
            <div className="lg:hidden space-y-4 max-w-sm mx-auto">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-sm border border-gray-100 ${plan.popular ? 'ring-1 ring-[#24525c]' : ''}`}>
                  {plan.popular && (
                    <div className="bg-[#24525c] text-white text-center py-1.5 rounded-t-lg text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-3">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{plan.name}</h3>
                      <div className="text-xs text-slate-500 mb-2">{plan.duration}</div>
                      <p className="text-slate-600 text-xs leading-relaxed mb-2">{plan.purpose}</p>
                    </div>

                    <div className="space-y-2 mb-3">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1 text-xs">Key Features:</h4>
                        <ul className="space-y-0.5">
                          {plan.whatYouGet.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1 text-xs">Best for:</h4>
                        <p className="text-xs text-slate-600 leading-tight">{plan.bestFor}</p>
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#24525c] text-white py-2.5 rounded-lg font-medium hover:bg-[#1e424a] transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                      Get a quote
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Guarantees Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What we stand by</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#24525c]/10 to-[#24525c]/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[#24525c]" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
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
              <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
              <p className="text-slate-300 mb-4 text-sm">Book a quick call to discuss your needs and get a custom quote.</p>
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

export default Pricing;
