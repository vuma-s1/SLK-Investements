import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Phone, Sparkles, TrendingUp, Shield, Zap, Target } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const benefits = [
    { text: 'Cash clarity', icon: Target, delay: 0 },
    { text: 'Risk control', icon: Shield, delay: 200 },
    { text: 'Predictable runway', icon: TrendingUp, delay: 400 },
    { text: 'Assured scaling', icon: Zap, delay: 600 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Enhanced Video-like Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{
               transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
               transition: 'transform 0.1s ease-out'
             }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"
             style={{
               transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
               transition: 'transform 0.1s ease-out'
             }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"
             style={{
               transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
               transition: 'transform 0.1s ease-out'
             }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,20 50,50 T100,50"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-wave"
            />
            <path
              d="M0,60 Q25,30 50,60 T100,60"
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              fill="none"
              className="animate-wave"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="text-white text-sm font-medium">Trusted by 500+ Indian businesses</span>
          </div>

          {/* Main Headline with Typing Effect */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Turn the revenue you have into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 block animate-gradient-x">
              more cash.
            </span>
          </h1>

          {/* Subheadline with Fade In */}
          <p className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We help founders and finance leads plan smart today, protect cash this month, 
            and grow with confidence this quarter.
          </p>

          {/* Animated Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={benefit.text} className="group">
                <div className={`flex items-center justify-center gap-2 bg-white/8 backdrop-blur-sm rounded-lg p-3 hover:bg-white/15 transition-all duration-500 border border-white/10 hover:border-white/25 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-700 delay-${benefit.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <benefit.icon className="w-5 h-5 text-green-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce" />
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons with Enhanced Animations */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 animate-pulse-slow">
              <Phone size={20} className="group-hover:animate-pulse" />
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              See How We Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes count {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-count {
          animation: count 1s ease-out forwards;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;