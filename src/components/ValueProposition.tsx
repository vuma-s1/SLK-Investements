import React, { useEffect, useState } from 'react';
import { TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';

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
    <section className="py-24 relative overflow-hidden">
      {/* Background Video Effect */}
      <div className="absolute inset-0">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'gridMove 15s linear infinite'
          }}></div>
        </div>

        {/* Floating Data Points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-600/20 font-mono text-xs animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              {['₹', '₹', '₹', '₹', '₹', '₹', '₹', '₹', '₹', '₹'][Math.floor(Math.random() * 10)]}
              {Math.floor(Math.random() * 100)}K
            </div>
          ))}
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="valueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,30 Q25,10 50,30 T100,30"
              stroke="url(#valueGradient)"
              strokeWidth="0.3"
              fill="none"
              className="animate-wave"
            />
            <path
              d="M0,70 Q25,50 50,70 T100,70"
              stroke="url(#valueGradient)"
              strokeWidth="0.2"
              fill="none"
              className="animate-wave"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Video Controls */}
            <div className="flex items-center gap-3 mb-6">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Play'} Demo
              </button>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <Volume2 size={16} />
                <span>Live Financial Data</span>
              </div>
            </div>

            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              From uncertainty to a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block animate-gradient-x">
                clear financial gameplan.
              </span>
            </h2>
            
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              When cash feels tight or reports arrive late, decisions slow down. SLK Investments 
              brings a simple rhythm: a clear plan, tight cash control, and steady reviews. You move 
              faster while your business stays stable. Backed by integrity, personal attention, and 
              real market insight.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 group hover:bg-white/80 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg border border-transparent hover:border-blue-100 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className={`bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '800ms' }}>
              See How We Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-all duration-700 hover:scale-105 border border-white/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Live Cash Flow Overview</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">LIVE</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-medium text-gray-700">Cash In</span>
                    <span className="text-green-600 font-semibold animate-pulse">₹2,45,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-100 hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-medium text-gray-700">Cash Out</span>
                    <span className="text-red-600 font-semibold">₹1,82,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300">
                    <span className="text-sm font-medium text-gray-700">Net Flow</span>
                    <span className="text-blue-600 font-bold text-lg">₹63,000</span>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center p-4 border border-gray-200">
                  <div className="flex items-end space-x-2 w-full">
                    {[40, 60, 30, 80, 45, 70, 55, 65, 75, 50].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 hover:scale-110"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 100}ms`,
                          animation: isPlaying ? 'chartGrow 2s ease-out forwards' : 'none'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Real-time Updates */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Last updated: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce-slow ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} style={{ transitionDelay: '600ms' }}>
              90%
            </div>
            <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} style={{ transitionDelay: '800ms' }}>
              ✓
            </div>

            {/* Data Stream Effect */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-blue-600 to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes chartGrow {
          0% { height: 0%; }
          100% { height: var(--target-height); }
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default ValueProposition;