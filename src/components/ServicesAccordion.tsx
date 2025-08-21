import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, Rocket, ArrowRight } from 'lucide-react';

const ServicesAccordion = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#24525c]" />,
      title: 'FINANCIAL PLANNING & STRATEGY',
      description: 'Comprehensive financial planning and strategic advisory to drive sustainable growth and optimize business performance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#24525c]" />,
      title: 'CASH FLOW MANAGEMENT & OPTIMIZATION',
      description: 'Expert cash flow analysis and optimization strategies to ensure liquidity and maximize working capital efficiency.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#24525c]" />,
      title: 'RISK ASSESSMENT & MITIGATION',
      description: 'Proactive risk identification and mitigation strategies to protect your business and ensure financial stability.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#24525c]" />,
      title: 'GROWTH ACCELERATION & SCALING',
      description: 'Strategic guidance and operational frameworks to accelerate growth and scale your business efficiently.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            ROOTED IN CASH DISCIPLINE & DATA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines financial expertise with data-driven insights to transform your business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
                             className="group relative bg-transparent rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#24525c] to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#24525c] to-transparent rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                                 <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                                 <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-xl leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                                 <p className="text-gray-600 text-xs md:text-base leading-relaxed mb-3 md:mb-4">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                                 <button className="inline-flex items-center gap-2 text-[#24525c] font-semibold text-xs md:text-base hover:text-[#1e424a] transition-colors duration-300 group-hover:gap-3">
                  Learn More
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
          className="text-center mt-12 md:mt-16"
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
