import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp, Shield, Zap, CheckCircle, Users, Target, Award, ArrowRight, Rocket, DollarSign, Home, Building, Handshake, GraduationCap, UserCheck, Heart, Cpu, BookOpen, Settings, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const targetRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll progress for horizontal scroll effect - start immediately
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to horizontal movement - start from center properly
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-70%"]);

  const services = [
    {
      icon: Shield,
      title: 'Compliances Health Check up',
      oneLiner: 'Comprehensive compliance audit and health assessment to ensure regulatory adherence.',
      youGet: ['Compliance audit', 'Regulatory gap analysis', 'Risk assessment', 'Remediation roadmap'],
      idealFor: 'Businesses needing compliance assurance',
      setup: '2-3 weeks for full assessment; quarterly reviews',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Get Audit'
    },
    {
      icon: TrendingUp,
      title: 'Debt & Equity Consultation',
      oneLiner: 'Expert guidance on debt financing, equity investments, and capital structure optimization.',
      youGet: ['Capital structure analysis', 'Funding strategy', 'Investor relations', 'Financial modeling'],
      idealFor: 'Companies seeking funding or restructuring',
      setup: '4-6 weeks for comprehensive strategy; ongoing support',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Get Funding'
    },
    {
      icon: Rocket,
      title: 'Start-up Consultation',
      oneLiner: 'End-to-end startup advisory from ideation to execution and scaling.',
      youGet: ['Business model validation', 'Go-to-market strategy', 'Funding preparation', 'Growth planning'],
      idealFor: 'Early-stage startups and entrepreneurs',
      setup: 'Ongoing advisory; milestone-based deliverables',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Start Journey'
    },
    {
      icon: BarChart3,
      title: 'Project Consultancy',
      oneLiner: 'Specialized project management and consultancy for successful delivery.',
      youGet: ['Project planning', 'Risk management', 'Stakeholder coordination', 'Performance monitoring'],
      idealFor: 'Organizations with complex projects',
      setup: 'Project-based engagement; flexible timelines',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Plan Project'
    },
    {
      icon: DollarSign,
      title: 'Financial Planning and Consultation',
      oneLiner: 'Comprehensive financial planning and strategic advisory for sustainable growth.',
      youGet: ['Strategic planning', 'Budget forecasting', 'Investment planning', 'Performance analysis'],
      idealFor: 'Businesses seeking financial optimization',
      setup: 'Initial plan in 2-3 weeks; monthly reviews',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Plan Finance'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      oneLiner: 'Proactive risk identification and mitigation strategies for business protection.',
      youGet: ['Risk assessment', 'Mitigation strategies', 'Insurance review', 'Compliance monitoring'],
      idealFor: 'Organizations prioritizing risk control',
      setup: '2-4 weeks assessment; quarterly updates',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Assess Risk'
    },
    {
      icon: Users,
      title: 'Enterprise Management',
      oneLiner: 'Comprehensive enterprise management solutions for organizational excellence.',
      youGet: ['Process optimization', 'Performance management', 'Change management', 'Leadership development'],
      idealFor: 'Large organizations seeking transformation',
      setup: 'Phased implementation; 6-12 month programs',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Optimize Enterprise'
    },
    {
      icon: Home,
      title: 'Estate Planning',
      oneLiner: 'Strategic estate planning and wealth preservation for financial legacy.',
      youGet: ['Wealth preservation', 'Succession planning', 'Tax optimization', 'Asset protection'],
      idealFor: 'High-net-worth individuals and families',
      setup: 'Comprehensive planning; annual reviews',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Plan Estate'
    },
    {
      icon: Building,
      title: 'Financial Vehicle / SPE',
      oneLiner: 'Specialized financial vehicle structuring for complex transactions.',
      youGet: ['Vehicle structuring', 'Regulatory compliance', 'Tax optimization', 'Transaction support'],
      idealFor: 'Complex financial transactions',
      setup: 'Project-based; flexible timelines',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Structure Vehicle'
    },
    {
      icon: Handshake,
      title: 'Public-Private Partnership Consultation',
      oneLiner: 'Expert guidance on PPP projects and government collaborations.',
      youGet: ['PPP strategy', 'Government relations', 'Project structuring', 'Compliance management'],
      idealFor: 'Organizations seeking government partnerships',
      setup: 'Project-based engagement; ongoing support',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Partner Up'
    },
    {
      icon: GraduationCap,
      title: 'Skill Development Program Technology Consultation',
      oneLiner: 'Technology-focused skill development to enhance workforce capabilities.',
      youGet: ['Training programs', 'Technology assessment', 'Skill gap analysis', 'Implementation support'],
      idealFor: 'Organizations upgrading technology skills',
      setup: 'Customized programs; flexible duration',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]'
    },
    {
      icon: UserCheck,
      title: 'Promoting Self Employment',
      oneLiner: 'Comprehensive support for entrepreneurs and self-employed professionals.',
      youGet: ['Business setup', 'Financial planning', 'Marketing support', 'Growth strategies'],
      idealFor: 'Aspiring entrepreneurs and freelancers',
      setup: 'Ongoing support; milestone-based guidance',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Start Business'
    },
    {
      icon: Heart,
      title: 'Financial Support and Guidance',
      oneLiner: 'Personalized financial support to achieve your financial goals.',
      youGet: ['Personal finance planning', 'Investment guidance', 'Debt management', 'Financial education'],
      idealFor: 'Individuals seeking financial guidance',
      setup: 'Ongoing advisory; flexible engagement',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Get Support'
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      oneLiner: 'Strategic partnerships and collaborative growth initiatives.',
      youGet: ['Partnership strategy', 'Market expansion', 'Resource sharing', 'Joint ventures'],
      idealFor: 'Organizations seeking growth partnerships',
      setup: 'Strategic planning; ongoing collaboration',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Collaborate'
    },
    {
      icon: TrendingUp,
      title: 'Idea to IPO Support',
      oneLiner: 'End-to-end support from business idea to IPO preparation and execution.',
      youGet: ['Business development', 'IPO preparation', 'Regulatory compliance', 'Investor relations'],
      idealFor: 'High-growth companies targeting IPO',
      setup: 'Long-term engagement; milestone-based',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Go Public'
    },
    {
      icon: Cpu,
      title: 'Tech-Based Incubation',
      oneLiner: 'Technology-focused incubation services for innovative ventures.',
      youGet: ['Technology validation', 'Product development', 'Market access', 'Investor connections'],
      idealFor: 'Tech startups and innovative ventures',
      setup: 'Incubation programs; 6-18 month cycles',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Incubate'
    },
    {
      icon: BookOpen,
      title: 'Customised Technical Training Support',
      oneLiner: 'Tailored technical training programs to enhance organizational capabilities.',
      youGet: ['Custom training programs', 'Skill assessment', 'Certification support', 'Implementation guidance'],
      idealFor: 'Organizations upgrading technical skills',
      setup: 'Customized programs; flexible duration',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]'
    },
    {
      icon: Handshake,
      title: 'Investors Partnering',
      oneLiner: 'Strategic investor partnerships and networking for investment opportunities.',
      youGet: ['Investor matching', 'Due diligence support', 'Deal structuring', 'Post-investment support'],
      idealFor: 'Companies seeking investment',
      setup: 'Ongoing networking; deal-based engagement',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Find Investors'
    },
    {
      icon: Settings,
      title: 'Resource Optimization',
      oneLiner: 'Comprehensive resource optimization strategies for efficiency and cost reduction.',
      youGet: ['Process optimization', 'Cost analysis', 'Efficiency improvement', 'Performance monitoring'],
      idealFor: 'Organizations seeking operational efficiency',
      setup: 'Assessment phase; implementation support',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Optimize'
    },
    {
      icon: Leaf,
      title: 'Fueling Sustainable Growth',
      oneLiner: 'Sustainable growth strategies for long-term business success.',
      youGet: ['Sustainability strategy', 'ESG compliance', 'Green financing', 'Performance tracking'],
      idealFor: 'Organizations prioritizing sustainability',
      setup: 'Strategic planning; ongoing implementation',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Grow Sustainably'
    },
    {
      icon: Award,
      title: 'Delivering Exceptional Results',
      oneLiner: 'Commitment to delivering exceptional results through proven methodologies.',
      youGet: ['Performance guarantees', 'Quality assurance', 'Continuous improvement', 'Client satisfaction'],
      idealFor: 'Organizations seeking excellence',
      setup: 'Ongoing commitment; performance-based',
      bgColor: 'from-[#24525c]/10 to-[#24525c]/5',
      color: 'text-[#24525c]',
      buttonText: 'Get Results'
    }
  ];

  const stats = [
    { number: '₹50Cr+', label: 'Assets Managed', icon: Target },
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  // Service Card Component
  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div 
      initial={{ y: 30, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-5 w-[400px] h-[300px] flex-shrink-0 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div className={`w-10 h-10 bg-gradient-to-br ${service.bgColor} rounded-lg flex items-center justify-center mb-3`}>
        <service.icon className={`w-5 h-5 ${service.color}`} />
      </div>
      
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-3 leading-relaxed text-sm flex-shrink-0">{service.oneLiner}</p>
      
      <div className="space-y-3 flex-1">
        <div>
          <h4 className="font-semibold text-slate-900 mb-2 text-sm">You get:</h4>
          <ul className="space-y-1">
            {service.youGet.slice(0, 2).map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        

      </div>
      
                  <button className="bg-[#24525c] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e424a] transition-all duration-300 flex items-center justify-center gap-2 text-sm w-full">
        {service.buttonText || 'Get Quote'}
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Make decisions with
              <span className="text-[#24525c] block">
                confidence
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Simple to start. Easy to run. Built for Indian businesses.
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
      </div>

      {/* Sticky Horizontal Scroll Section */}
      <section ref={targetRef} className="relative h-[200vh] bg-[#f5f5f0] hidden lg:block">
        {/* Desktop: Horizontal scroll animation */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="flex justify-center w-full">
            <motion.div style={{ x }} className="flex gap-4 justify-center">
              {/* Text Card Component (same size as service cards) */}
              <div className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-5 w-[400px] h-[300px] flex-shrink-0 border border-gray-100 flex flex-col">
                <p className="text-[#24525c] font-semibold mb-3 text-sm uppercase tracking-wide">Our Services</p>
                <h2 className="text-xl font-semibold leading-tight text-slate-900 mb-3">
                  Comprehensive solutions for your business growth
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                  We provide end-to-end financial services that help businesses make better decisions, 
                  manage risks, and accelerate growth. Our data-driven approach ensures you have the 
                  insights you need when you need them.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#24525c] rounded-full"></div>
                    <span className="text-slate-700 text-xs">Data-driven insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#24525c] rounded-full"></div>
                    <span className="text-slate-700 text-xs">Real-time monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#24525c] rounded-full"></div>
                    <span className="text-slate-700 text-xs">Expert guidance</span>
                  </div>
                </div>
              </div>
              
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile: Separate Services Section */}
              <section className="lg:hidden bg-[#f5f5f0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Text Card */}
          <div className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-4 mb-4 border border-gray-100">
            <p className="text-[#24525c] font-semibold mb-2 text-xs uppercase tracking-wide">Our Services</p>
            <h2 className="text-lg font-semibold leading-tight text-slate-900 mb-2">
              Comprehensive solutions for your business growth
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed mb-3">
              We provide end-to-end financial services that help businesses make better decisions, 
              manage risks, and accelerate growth. Our data-driven approach ensures you have the 
              insights you need when you need them.
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-slate-700 text-xs">Data-driven insights</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-slate-700 text-xs">Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-slate-700 text-xs">Expert guidance</span>
              </div>
            </div>
          </div>

          {/* Mobile Service Cards */}
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-4 border border-gray-100">
                <div className={`w-8 h-8 bg-gradient-to-br ${service.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                  <service.icon className={`w-4 h-4 ${service.color}`} />
                </div>
                
                <h3 className="text-base font-semibold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-600 mb-2 leading-relaxed text-xs">{service.oneLiner}</p>
                
                <div className="space-y-2 mb-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-xs">You get:</h4>
                    <ul className="space-y-0.5">
                      {service.youGet.slice(0, 2).map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1 text-xs text-slate-600">
                          <CheckCircle className="w-2.5 h-2.5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  

                </div>
                
                <button className="bg-[#24525c] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1e424a] transition-all duration-300 flex items-center gap-1 text-xs">
                  {service.buttonText || 'Get Quote'}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
              <div className="py-4 md:py-20 bg-[#f5f5f0] mt-20 lg:mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center leading-tight">A simple, reliable way to work together</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((process, index) => (
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
            transition={{ delay: 1.1 }}
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

export default Services;
