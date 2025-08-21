import React, { useEffect, useState } from 'react';
import { TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'A clear plan you can follow',
      description: 'Strategic roadmap with actionable steps',
      delay: 0
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Live view of cash and collections',
      description: 'Real-time financial visibility',
      delay: 200
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Clean dashboards on time',
      description: 'Reliable reporting you can trust',
      delay: 400
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Monthly reviews that drive action',
      description: 'Regular assessments with clear next steps',
      delay: 600
    }
  ];

  return (
    <section className="py-2 md:py-8 relative overflow-hidden">

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            {/* Video Controls */}
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1 bg-[#24525c] text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-[#1e424a] transition-all duration-300 hover:scale-105"
              >
                {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                {isPlaying ? 'Pause' : 'Play'} Demo
              </button>
              <div className="flex items-center gap-1 text-[#24525c] text-xs">
                <Volume2 size={12} />
                <span>Live Financial Data</span>
              </div>
            </div>

            <h2 className={`text-xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 md:mb-4 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              From uncertainty to a 
              <span className="text-[#24525c] block">
                clear financial gameplan.
              </span>
            </h2>
            
            <p className={`text-sm md:text-xl text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              When cash feels tight or reports arrive late, decisions slow down. SLK Investments 
              brings a simple rhythm: a clear plan, tight cash control, and steady reviews. You move 
              faster while your business stays stable. Backed by integrity, personal attention, and 
              real market insight.
            </p>

            <div className="grid md:grid-cols-2 gap-2 md:gap-6 mb-4 md:mb-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-2 group hover:bg-white/80 backdrop-blur-sm rounded-lg p-2 md:p-6 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-transparent hover:border-gray-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 md:w-12 md:h-12 bg-[#24525c]/10 rounded-lg flex items-center justify-center text-[#24525c] group-hover:bg-[#24525c] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-0.5 group-hover:text-[#24525c] transition-colors duration-300 text-xs md:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className={`bg-[#24525c] hover:bg-[#1e424a] text-white px-3 md:px-8 py-1.5 md:py-4 rounded-full font-semibold flex items-center gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#24525c]/25 transform hover:-translate-y-1 mx-auto text-xs md:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '800ms' }}>
              See How We Work
              <ArrowRight size={12} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;