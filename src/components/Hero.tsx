import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f5f0] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#e5e5e5 1.5px, transparent 1.5px)`,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto hero-content">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fef3c7] text-[#1D1D1F] rounded-full px-4 py-2 mb-8 hero-badge">
            <span className="bg-[#f59e0b] text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">Trusted</span>
            by 500+ Indian businesses
            <ArrowRight size={16} />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#000000] mb-6 leading-tight hero-headline">
            Turn the revenue you have into{' '}
            <span className="text-[#000000]">
              more cash.
            </span>
          </h1>

          {/* Descriptive Text */}
          <p className="text-xl md:text-2xl text-[#1F2937] mb-8 max-w-3xl mx-auto leading-relaxed hero-subheadline">
            We help founders and finance leads plan smart today, protect cash this month, 
            and grow with confidence this quarter.
          </p>

          {/* CTA Button */}
          <div className="hero-button">
            <button className="bg-[#24525c] hover:bg-[#1e424a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl mx-auto">
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;