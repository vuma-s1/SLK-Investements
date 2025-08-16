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
      bgColor: 'from-blue-50 to-indigo-50',
      color: 'text-blue-600',
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
      bgColor: 'from-purple-50 to-violet-50',
      color: 'text-purple-600',
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
      bgColor: 'from-green-50 to-emerald-50',
      color: 'text-green-600',
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
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
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-sm border border-gray-100 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 rounded-t-xl text-sm font-semibold">
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
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 mt-6">
                    Get a quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-blue-100 mb-6">Book a quick call to discuss your needs and get a custom quote.</p>
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

export default Pricing;
