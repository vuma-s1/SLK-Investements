import React, { useEffect, useState } from 'react';
import { TrendingUp, Shield, BarChart3, CheckCircle, ArrowRight, Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Data for hub and spoke diagram ---
const sources = [
  { id: "s1", title: "Main job", icon: "💼", color: "bg-blue-500" },
  { id: "s2", title: "Freelance client", icon: "👨‍💻", color: "bg-green-500" },
  { id: "s3", title: "Freelance client", icon: "👩‍💼", color: "bg-purple-500" },
];

const destinations = [
  { id: "d1", title: "Main account", value: "$1,800", icon: "🏦", color: "bg-blue-500" },
  { id: "d2", title: "Savings", value: "$600", icon: "🐷", color: "bg-purple-500" },
  { id: "d3", title: "Salary", value: "$2,400", icon: "👤", color: "bg-green-500" },
  { id: "d4", title: "Taxes", value: "$200", icon: "📄", color: "bg-orange-500" },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

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

          {/* Right Column - Hub and Spoke Diagram */}
          <div className="relative">
            <motion.div
              className="relative flex items-center justify-between h-[450px] w-full bg-gradient-to-br from-gray-50/50 to-blue-50/50 rounded-3xl p-8 border border-gray-200/50 backdrop-blur-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* SVG Container for the lines */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 400"
                className="absolute top-0 left-0"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(156, 163, 175, 0.4)" />
                    <stop offset="50%" stopColor="rgba(156, 163, 175, 0.6)" />
                    <stop offset="100%" stopColor="rgba(156, 163, 175, 0.4)" />
                  </linearGradient>
                </defs>
                
                {/* Lines from sources to center */}
                <motion.path d="M 50 80 C 150 80, 250 200, 300 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                <motion.path d="M 50 200 C 150 200, 250 200, 300 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                <motion.path d="M 50 320 C 150 320, 250 200, 300 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                
                {/* Lines from center to destinations */}
                <motion.path d="M 350 200 C 450 200, 500 50, 550 50" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                <motion.path d="M 350 200 C 450 200, 500 130, 550 130" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                <motion.path d="M 350 200 C 450 200, 500 220, 550 220" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
                <motion.path d="M 350 200 C 450 200, 500 350, 550 350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" variants={pathVariants} />
              </svg>

              {/* Column 1: Sources */}
              <div className="flex flex-col justify-between h-full py-6">
                {sources.map(source => (
                  <motion.div 
                    key={source.id} 
                    variants={itemVariants} 
                    className="group flex items-center gap-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`p-3 rounded-xl ${source.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-2xl filter drop-shadow-lg">{source.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{source.title}</span>
                      <span className="text-xs text-gray-500">Income Source</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Column 2: Central Hub */}
              <motion.div 
                variants={itemVariants} 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-white text-3xl filter drop-shadow-lg">💼</div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              </motion.div>

              {/* Column 3: Destinations */}
              <div className="flex flex-col justify-between h-full py-2">
                {destinations.map(dest => (
                  <motion.div 
                    key={dest.id} 
                    variants={itemVariants} 
                    className="group flex items-center gap-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`p-3 rounded-xl ${dest.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-2xl filter drop-shadow-lg">{dest.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{dest.title}</span>
                      <span className="text-xs font-bold text-gray-600">{dest.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
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

      <style>{`
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