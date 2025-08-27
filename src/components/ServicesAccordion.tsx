import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, Rocket, ArrowRight, BarChart3, Users, Home, Building, Handshake, GraduationCap, UserCheck, Heart, Cpu, BookOpen, Settings, Leaf, Award } from 'lucide-react';

const ServicesAccordion = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-[#24525c]" />,
      title: 'COMPLIANCES HEALTH CHECK UP',
      description: 'Comprehensive compliance audit and health assessment to ensure your business meets all regulatory requirements.',
      color: 'from-blue-500 to-blue-600',
      buttonText: 'Get Audit'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#24525c]" />,
      title: 'DEBT & EQUITY CONSULTATION',
      description: 'Expert guidance on debt financing, equity investments, and capital structure optimization for your business.',
      color: 'from-green-500 to-green-600',
      buttonText: 'Get Funding'
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#24525c]" />,
      title: 'START-UP CONSULTATION',
      description: 'End-to-end startup advisory services from ideation to execution, helping you build and scale your venture.',
      color: 'from-purple-500 to-purple-600',
      buttonText: 'Start Journey'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#24525c]" />,
      title: 'PROJECT CONSULTANCY',
      description: 'Specialized project management and consultancy services to ensure successful project delivery and ROI.',
      color: 'from-orange-500 to-orange-600',
      buttonText: 'Plan Project'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#24525c]" />,
      title: 'FINANCIAL PLANNING AND CONSULTATION',
      description: 'Comprehensive financial planning and strategic advisory to drive sustainable growth and optimize business performance.',
      color: 'from-red-500 to-red-600',
      buttonText: 'Plan Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#24525c]" />,
      title: 'RISK MANAGEMENT',
      description: 'Proactive risk identification and mitigation strategies to protect your business and ensure financial stability.',
      color: 'from-indigo-500 to-indigo-600',
      buttonText: 'Assess Risk'
    },
    {
      icon: <Users className="w-8 h-8 text-[#24525c]" />,
      title: 'ENTERPRISE MANAGEMENT',
      description: 'Comprehensive enterprise management solutions to optimize operations and drive organizational excellence.',
      color: 'from-teal-500 to-teal-600',
      buttonText: 'Optimize Enterprise'
    },
    {
      icon: <Home className="w-8 h-8 text-[#24525c]" />,
      title: 'ESTATE PLANNING',
      description: 'Strategic estate planning and wealth preservation services to secure your financial legacy.',
      color: 'from-pink-500 to-pink-600',
      buttonText: 'Plan Estate'
    },
    {
      icon: <Building className="w-8 h-8 text-[#24525c]" />,
      title: 'FINANCIAL VEHICLE / SPE',
      description: 'Specialized financial vehicle structuring and Special Purpose Entity (SPE) solutions for complex transactions.',
      color: 'from-yellow-500 to-yellow-600',
      buttonText: 'Structure Vehicle'
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#24525c]" />,
      title: 'PUBLIC - PRIVATE PARTNERSHIP CONSULTATION',
      description: 'Expert guidance on PPP projects, government collaborations, and public-private partnership strategies.',
      color: 'from-emerald-500 to-emerald-600',
      buttonText: 'Partner Up'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#24525c]" />,
      title: 'SKILL DEVELOPMENT PROGRAM TECHNOLOGY CONSULTATION',
      description: 'Technology-focused skill development programs and consultation to enhance workforce capabilities.',
      color: 'from-cyan-500 to-cyan-600',
      buttonText: 'Develop Skills'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#24525c]" />,
      title: 'PROMOTING SELF EMPLOYMENT',
      description: 'Comprehensive support and guidance for entrepreneurs and self-employed professionals to build successful businesses.',
      color: 'from-violet-500 to-violet-600',
      buttonText: 'Start Business'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#24525c]" />,
      title: 'FINANCIAL SUPPORT AND GUIDANCE',
      description: 'Personalized financial support and guidance to help individuals and businesses achieve their financial goals.',
      color: 'from-rose-500 to-rose-600',
      buttonText: 'Get Support'
    },
    {
      icon: <Users className="w-8 h-8 text-[#24525c]" />,
      title: 'COLLABORATIVE GROWTH',
      description: 'Strategic partnerships and collaborative growth initiatives to expand business opportunities and market reach.',
      color: 'from-slate-500 to-slate-600',
      buttonText: 'Collaborate'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#24525c]" />,
      title: 'IDEA TO IPO SUPPORT',
      description: 'End-to-end support from business idea development to IPO preparation and execution.',
      color: 'from-blue-600 to-blue-700',
      buttonText: 'Go Public'
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#24525c]" />,
      title: 'TECH-BASED INCUBATION',
      description: 'Technology-focused incubation services to nurture and accelerate tech startups and innovative ventures.',
      color: 'from-green-600 to-green-700',
      buttonText: 'Incubate'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#24525c]" />,
      title: 'CUSTOMISED TECHNICAL TRAINING SUPPORT',
      description: 'Tailored technical training programs and support to enhance team skills and organizational capabilities.',
      color: 'from-purple-600 to-purple-700',
      buttonText: 'Train Team'
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#24525c]" />,
      title: 'INVESTORS PARTNERING',
      description: 'Strategic investor partnerships and networking to connect businesses with the right investment opportunities.',
      color: 'from-orange-600 to-orange-700',
      buttonText: 'Find Investors'
    },
    {
      icon: <Settings className="w-8 h-8 text-[#24525c]" />,
      title: 'RESOURCE OPTIMIZATION',
      description: 'Comprehensive resource optimization strategies to maximize efficiency and minimize operational costs.',
      color: 'from-red-600 to-red-700',
      buttonText: 'Optimize'
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#24525c]" />,
      title: 'FUELING SUSTAINABLE GROWTH',
      description: 'Sustainable growth strategies and implementation to ensure long-term business success and environmental responsibility.',
      color: 'from-emerald-600 to-emerald-700',
      buttonText: 'Grow Sustainably'
    },
    {
      icon: <Award className="w-8 h-8 text-[#24525c]" />,
      title: 'DELIVERING EXCEPTIONAL RESULTS',
      description: 'Commitment to delivering exceptional results through proven methodologies and dedicated client support.',
      color: 'from-indigo-600 to-indigo-700',
      buttonText: 'Get Results'
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
            ROOTED IN CASH DISCIPLINE & DATA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines financial expertise with data-driven insights to transform your business operations.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {services.map((service, index) => (
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
                
                {/* Description */}
                                 <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                  {service.description}
                </p>
                
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <button className="bg-[#24525c] hover:bg-[#1e424a] text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto">
            Explore Our Services
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
