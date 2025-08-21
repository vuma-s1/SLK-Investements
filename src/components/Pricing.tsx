import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Users, Zap, ArrowRight, ChevronDown, ChevronUp, Star, Shield, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

  const packages = [
    {
      icon: <Zap className="w-6 h-6" />,
      name: 'Advisory Sprint',
      duration: '4 weeks',
      purpose: 'Fast reset with clarity and working plan in one month.',
      bestFor: 'New engagements, leadership changes, or when things feel messy.',
      timeNeeded: '2 calls/week (30–45 mins)',
      color: 'bg-[#24525c]',
      borderColor: 'border-[#24525c]/20',
      hoverBg: 'hover:bg-[#24525c]/5',
      weeks: [
        {
          week: 'Week 1 — Discover',
          activity: 'We review your current numbers, cash flow, and goals.'
        },
        {
          week: 'Week 2 — Design', 
          activity: 'We build your simple 90-day plan (what to do, who owns it, by when).'
        },
        {
          week: 'Week 3 — Set up',
          activity: 'Dashboards go live; 13-week cash tracker set; review calendar created.'
        },
        {
          week: 'Week 4 — Hand-off',
          activity: 'We walk you through the plan and confirm next steps.'
        }
      ],
      deliverables: [
        'A 90-day action plan (owners, targets, dates)',
        'A live 13-week cash view (inflows, outflows, runway)',
        'A simple, board-ready dashboard pack',
        'A risk list with owners and triggers',
        'A monthly review cadence that everyone understands'
      ],
      notIncluded: 'Bookkeeping, tax filing, ERP/CRM builds, or fundraising execution (we can coordinate if needed).'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: 'Monthly Advisory',
      duration: 'Ongoing',
      purpose: 'Ongoing finance leadership so decisions stay clear and there are no surprises.',
      bestFor: 'Teams that want steady discipline after the Sprint (or as a standalone).',
      timeNeeded: '1 weekly call + 1 monthly review',
      color: 'bg-[#24525c]',
      borderColor: 'border-[#24525c]/20',
      hoverBg: 'hover:bg-[#24525c]/5',
      monthlyFlow: [
        {
          frequency: 'Weekly',
          activity: '30-min cash check-in (collections, spends, runway)'
        },
        {
          frequency: 'Monthly',
          activity: 'Close the month on time and review the dashboard + actions'
        },
        {
          frequency: 'Quarterly',
          activity: 'Refresh targets and adjust the plan'
        }
      ],
      deliverables: [
        'Updated 13-week cash tracker',
        'On-time monthly reports and a one-page summary of "what to do next"',
        'A decisions log (what we decided and why)',
        'Risks tracked with owners and due dates',
        'On-call support for time-sensitive choices'
      ],
      notIncluded: 'Accounting entries, payroll processing, invoicing—your CA/finance team handles those; we lead the rhythm and decisions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Growth & Scale Programme',
      duration: '4-6 weeks + quarterly',
      purpose: 'A profit-first plan to scale—pricing, channels, capacity, and hiring without chaos.',
      bestFor: 'Teams ready to grow and want safeguards in place.',
      timeNeeded: '1–2 workshops/week + weekly check-ins',
      color: 'bg-[#24525c]',
      borderColor: 'border-[#24525c]/20',
      hoverBg: 'hover:bg-[#24525c]/5',
      phases: [
        {
          phase: 'Design (4–6 weeks)',
          activity: 'Workshops on pricing and unit economics; map channel ROI; build capacity & hiring plan; set operating cadence.'
        },
        {
          phase: 'Execute (optional, quarterly)',
          activity: 'We help you run the plan and refine it each quarter.'
        }
      ],
      deliverables: [
        'Pricing and contribution-margin model you can update',
        'Channel ROI map (CAC, LTV, payback) with clear bets and limits',
        'Capacity & hiring plan with timelines and simple org chart',
        'Scale-up operating cadence (who meets, how often, for what)',
        '6-quarter growth roadmap tied to numbers'
      ],
      notIncluded: 'Media buying, sales ops builds, recruitment services—happy to coordinate with your teams/partners.'
    }
  ];

  return (
    <section id="pricing" className="py-8 md:py-24 relative overflow-hidden">
      {/* Background Elements */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#24525c]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[#24525c] text-xs md:text-sm font-medium mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4" />
            <span>Transparent Pricing</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-6xl font-light text-gray-900 mb-3 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Clear plans. 
            <span className="text-[#24525c]"> Custom quotes.</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pick what you need. We scope it on a quick call and send a quote.
          </motion.p>
        </motion.div>

        <div 
          ref={cardsRef}
          className={`grid lg:grid-cols-3 gap-4 md:gap-6 pricing-cards-grid ${isCardsVisible ? 'is-visible' : ''}`}
        >
          {packages.map((pkg, index) => (
                            <div key={index} className={`bg-transparent rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border ${pkg.borderColor} ${pkg.hoverBg} transform hover:-translate-y-1 pricing-card`}>
              {/* Header - Compact */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${pkg.color} p-2 rounded-lg text-white`}>
                  {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                    <div className="text-xs text-gray-500">{pkg.duration}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{pkg.purpose}</p>
                <p className="text-xs text-[#24525c]">
                  <span className="font-medium">Best for:</span> {pkg.bestFor}
                </p>
              </div>

              {/* Compact Summary */}
              <div className="p-4 border-b border-gray-100">
                <div className="mb-3">
                  <div className="text-xs text-gray-900 font-medium mb-1">Time needed:</div>
                  <div className="text-xs text-gray-600">{pkg.timeNeeded}</div>
                </div>
                
                <div className="mb-3">
                  <div className="text-xs text-gray-900 font-medium mb-1">Key deliverables:</div>
                  <div className="text-xs text-gray-600">
                    {pkg.deliverables.slice(0, 1).map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2 mb-1">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </div>
                    ))}
                    <div className="text-[#24525c] text-xs mt-1">
                      +{pkg.deliverables.length - 1} more deliverables
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button 
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-center gap-2 text-[#24525c] hover:text-[#1e424a] text-xs font-medium py-1 transition-all duration-300"
                >
                  {expandedCards.includes(index) ? (
                    <>
                      <ChevronUp size={14} />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} />
                      View full details
                    </>
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              {expandedCards.includes(index) && (
                <>
              {/* Process */}
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2 text-xs">How it runs:</h4>
                    <div className="space-y-2">
                  {pkg.weeks?.map((week, i) => (
                        <div key={i} className="flex gap-2">
                          <div className="w-1 h-1 bg-[#24525c] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs">{week.week}</div>
                        <div className="text-gray-600 text-xs">{week.activity}</div>
                      </div>
                    </div>
                  ))}
                  {pkg.monthlyFlow?.map((flow, i) => (
                        <div key={i} className="flex gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs">{flow.frequency}:</div>
                        <div className="text-gray-600 text-xs">{flow.activity}</div>
                      </div>
                    </div>
                  ))}
                  {pkg.phases?.map((phase, i) => (
                        <div key={i} className="flex gap-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs">{phase.phase}:</div>
                        <div className="text-gray-600 text-xs">{phase.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                  {/* Full Deliverables */}
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2 text-xs">What you get:</h4>
                    <ul className="space-y-1">
                  {pkg.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-xs">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

                  {/* What's Not Included */}
                  <div className="p-4">
                    <div className="mb-3">
                  <div className="text-xs text-gray-900 font-medium mb-1">What's not included:</div>
                  <div className="text-xs text-gray-600">{pkg.notIncluded}</div>
                </div>
                  </div>
                </>
              )}

              {/* Footer */}
              <div className="p-4">
                <button className={`w-full ${pkg.color} hover:opacity-90 text-white px-4 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}>
                  Get a quote
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;