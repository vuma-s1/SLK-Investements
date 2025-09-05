import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Shield, Rocket, ArrowRight, BarChart3, Users, Home, Building, Handshake, GraduationCap, UserCheck, Heart, Cpu, BookOpen, Settings, Leaf, Award } from 'lucide-react';

const ServicesAccordion = () => {
  // Top 8 most important services for homepage
  const featuredServices = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#24525c]" />,
      title: 'Financial planning and strategy',
      oneLiner: 'Turn goals into a 12–18-month operating plan you actually use.',
      youGet: ['Operating plan', 'budgets & forecasts (with scenarios)', 'clear runway', 'board-ready dashboard'],
      idealFor: 'Founders/CFOs in bootstrapped or VC-backed companies',
      setup: 'Initial plan in 2–3 weeks, then monthly reviews',
      buttonText: 'Get a quote'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#24525c]" />,
      title: 'Cash Flow Management & Optimisation',
      oneLiner: 'See cash early, collect faster, spend with intent.',
      youGet: ['Rolling 13-week cash forecast', 'collections cadence & DSO targets', 'vendor-term playbook', 'expense controls'],
      idealFor: 'Businesses with variable or seasonal revenue',
      setup: 'Live in 2 weeks; weekly cash huddles + monthly oversight',
      buttonText: 'Get a quote'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#24525c]" />,
      title: 'Risk Assessment & Mitigation',
      oneLiner: 'Make risks visible—and manageable.',
      youGet: ['Risk register with owners & triggers', 'control library & SOPs', 'compliance calendar', 'insurance review'],
      idealFor: 'Teams scaling operations or credit exposure',
      setup: '2–4 weeks for full assessment; quarterly refresh',
      buttonText: 'Get a quote'
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#24525c]" />,
      title: 'Growth Acceleration & Scaling',
      oneLiner: 'Scale on solid unit economics.',
      youGet: ['Pricing & contribution margins', 'channel ROI map', 'capacity & hiring plan', 'scale-up operating cadence'],
      idealFor: 'Teams ready to grow without chaos',
      setup: '4–6 weeks to design; quarterly execution cycles',
      buttonText: 'Get a quote'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#24525c]" />,
      title: 'Compliances Health Check up',
      oneLiner: 'Find compliance gaps early; fix them before they cost.',
      youGet: ['Gap report', 'risk register with severity', 'remediation plan with owners', 'updated policies/SOPs', 'regulator-ready evidence pack'],
      idealFor: 'Founders, CFOs, and compliance heads needing a quick, thorough review',
      setup: '2–3 weeks; weekly check-ins and a final walkthrough',
      buttonText: 'Get a quote'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#24525c]" />,
      title: 'Debt & Equity Consultation',
      oneLiner: 'Pick the right capital, on terms that fit you.',
      youGet: ['Capital strategy', 'target investor/lender list', 'model and materials review', 'term sheet support', 'diligence checklist'],
      idealFor: 'Venture-backed and SME teams planning a raise or refinance',
      setup: '3–4 weeks to investor-ready pack; ongoing deal support',
      buttonText: 'Get a quote'
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#24525c]" />,
      title: 'Start-up Consultation',
      oneLiner: 'Turn your idea into a finance-ready, launch plan.',
      youGet: ['Business model canvas', '12-month operating plan', 'core KPIs', 'pricing logic', 'compliance checklist'],
      idealFor: 'Early founders moving from concept to first customers',
      setup: '2 weeks; stand-ups twice a week',
      buttonText: 'Get a quote'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#24525c]" />,
      title: 'Project Consultancy',
      oneLiner: 'Build projects that pencil out—and stay on budget.',
      youGet: ['Feasibility/DPR', 'capex-opex model', 'risk log', 'timeline and milestones', 'lender pack'],
      idealFor: 'Expansion projects, new plants, and tech rollouts',
      setup: '4–6 weeks; PMO-style weekly tracking',
      buttonText: 'Get a quote'
    },
    {
      icon: <Users className="w-8 h-8 text-[#24525c]" />,
      title: 'Enterprise Management',
      oneLiner: 'Align teams, targets, and workflows for reliable execution.',
      youGet: ['Org and RACI', 'KPI tree and dashboards', 'meeting cadences', 'SOP library', 'governance calendar'],
      idealFor: 'Founders professionalising operations across functions',
      setup: '4 weeks; weekly change support',
      buttonText: 'Get a quote'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Make decisions with <span className="text-[#24525c]">confidence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simple to start. Easy to run. Built for Indian businesses.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-transparent rounded-2xl p-3 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-sm"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#24525c] to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#24525c] to-transparent rounded-full"></div>
        </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                                 <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
          </div>
          
                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-lg leading-tight">
                  {service.title}
                </h3>
                
                {/* One Liner */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                  {service.oneLiner}
                </p>
                
                {/* You Get */}
                <div className="mb-2">
                  <h4 className="font-medium text-gray-900 mb-1 text-xs">You get:</h4>
                  <ul className="space-y-0.5">
                    {service.youGet.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="text-xs text-gray-600 leading-tight">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Ideal For */}
                <div className="mb-2">
                  <h4 className="font-medium text-gray-900 mb-1 text-xs">Ideal for:</h4>
                  <p className="text-xs text-gray-600 leading-tight">{service.idealFor}</p>
                </div>
                
                {/* Setup */}
                <div className="mb-3">
                  <h4 className="font-medium text-gray-900 mb-1 text-xs">Setup:</h4>
                  <p className="text-xs text-gray-600 leading-tight">{service.setup}</p>
                </div>
                
                {/* CTA Button */}
                                 <button className="inline-flex items-center gap-2 text-[#24525c] font-semibold text-xs md:text-base hover:text-[#1e424a] transition-colors duration-300 group-hover:gap-3">
                  {service.buttonText}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#24525c]/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-3 bg-[#24525c] hover:bg-[#1e424a] text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
