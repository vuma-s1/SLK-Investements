import React, { useLayoutEffect, useRef } from 'react';
import { Building2, Award, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustedBy = () => {
  const marqueeRef = useRef(null);
  const companies = [
    { name: 'TechCorp', logo: 'TC', industry: 'Technology' },
    { name: 'FinServe', logo: 'FS', industry: 'Financial Services' },
    { name: 'ManufactureX', logo: 'MX', industry: 'Manufacturing' },
    { name: 'RetailPro', logo: 'RP', industry: 'Retail' },
    { name: 'HealthTech', logo: 'HT', industry: 'Healthcare' },
    { name: 'EduSmart', logo: 'ES', industry: 'Education' }
  ];

  // Marquee animation logic
  useLayoutEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const items = marqueeContainer.querySelectorAll('.marquee-item');
    
    // Duplicate items for seamless loop
    items.forEach(item => {
      const clone = item.cloneNode(true);
      marqueeContainer.appendChild(clone);
    });

    // Create the main infinite scroll animation
    const marqueeAnimation = gsap.to(marqueeContainer, {
      xPercent: -50,
      duration: 30,
      ease: 'linear',
      repeat: -1,
    });

    // Cleanup function
    return () => {
      marqueeAnimation.kill();
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Companies Trust Us', icon: <Building2 className="w-5 h-5" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '₹1000Cr+', label: 'Revenue Managed', icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <section className="py-8 md:py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
                     <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-gray-200">
             <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#24525c] rounded-full"></span>
             Trusted by Leading Companies
           </div>
                     <h2 className="text-2xl md:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4 leading-tight">
             Trusted by <span className="text-[#24525c]">500+ Companies</span> Across India
           </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we've helped businesses of all sizes achieve financial clarity and sustainable growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 md:gap-4">
                                     <div className="w-8 h-8 md:w-12 md:h-12 bg-[#24525c] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-semibold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Marquee */}
        <div 
          ref={marqueeRef}
          className="flex w-fit marquee-container overflow-hidden"
        >
          {companies.map((company, index) => (
            <div key={index} className="group marquee-item flex-shrink-0 px-2 md:px-6">
              <div className="text-center">
                                                  <h4 className="font-semibold text-black text-xs md:text-base mb-0.5 md:mb-1">{company.logo}</h4>
                 <h4 className="font-semibold text-black text-xs md:text-sm mb-0.5 md:mb-1">{company.name}</h4>
                 <p className="text-gray-500 text-xs">{company.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
