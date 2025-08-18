import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, Rocket } from 'lucide-react';

// A simple Circle component for reusability
const Circle = ({ children, style, className, icon }: { children: React.ReactNode; style?: any; className: string; icon: React.ReactNode }) => (
  <motion.div
    style={style}
    className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center ${className}`}
  >
    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mb-2 md:mb-3 shadow-sm">
      {icon}
    </div>
    <div className="text-center px-1 md:px-4">
      <p className="font-semibold text-xs md:text-sm leading-tight text-black whitespace-normal">{children}</p>
    </div>
  </motion.div>
);

const ServicesAccordion = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // --- Desktop Transformations (restored animation) ---
  const y = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-120%"]);
  const xCircle1 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "155%"]);
  const xCircle2 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "55%"]);
  const xCircle3 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-55%"]);
  const xCircle4 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-155%"]);

  // --- Shared Transformations ---
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const circleOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  const pathLength = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  const services = [
    {
      title: 'FINANCIAL PLANNING & STRATEGY',
      icon: <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
    },
    {
      title: 'CASH FLOW MANAGEMENT & OPTIMIZATION',
      icon: <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
    },
    {
      title: 'RISK ASSESSMENT & MITIGATION',
      icon: <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
    },
    {
      title: 'GROWTH ACCELERATION & SCALING',
      icon: <Rocket className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[100vh] md:h-[350vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Central Text */}
        <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute text-center max-w-3xl mx-auto z-10 bottom-10 md:top-1/2 md:-mt-4 md:mt-20">
          <h2 className="text-xs md:text-5xl font-bold text-gray-900 whitespace-nowrap">ROOTED IN CASH DISCIPLINE & DATA</h2>
        </motion.div>
        


        {/* SVG Connector Lines - Desktop only */}
        <motion.svg 
          width="800" 
          height="400" 
          viewBox="0 0 800 400" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{ opacity: circleOpacity }}
        >
          <motion.path d="M 100 200 Q 250 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
          <motion.path d="M 260 200 Q 330 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
          <motion.path d="M 540 200 Q 470 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
          <motion.path d="M 700 200 Q 550 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
        </motion.svg>
        
        {/* Desktop Circles - Collapse Animation */}
        <div className="hidden md:flex items-center space-x-8">
                      <Circle 
              style={{ y, x: xCircle1, opacity: circleOpacity }} 
              className="bg-gray-500/80 shadow-lg"
              icon={services[0].icon}
            >
              {services[0].title}
            </Circle>
            <Circle 
              style={{ y, x: xCircle2, opacity: circleOpacity }} 
              className="bg-gray-500/80 shadow-lg"
              icon={services[1].icon}
            >
              {services[1].title}
            </Circle>
            <Circle 
              style={{ y, x: xCircle3, opacity: circleOpacity }} 
              className="bg-gray-500/80 shadow-lg"
              icon={services[2].icon}
            >
              {services[2].title}
            </Circle>
            <Circle 
              style={{ y, x: xCircle4, opacity: circleOpacity }} 
              className="bg-gray-500/80 shadow-lg"
              icon={services[3].icon}
            >
              {services[3].title}
            </Circle>
        </div>

        {/* Mobile Vertical Layout - Static */}
        <div className="md:hidden relative flex flex-col items-center justify-center min-h-screen pb-20">
          {/* Mobile Headline */}
          <div className="text-center mb-8">
            <h2 className="text-lg font-bold text-gray-900 whitespace-nowrap">ROOTED IN CASH DISCIPLINE & DATA</h2>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className="flex justify-center mb-8">
              <Circle 
                className="bg-gray-500/80 shadow-lg relative z-10"
                icon={service.icon}
              >
                {service.title}
              </Circle>
            </div>
          ))}
          

          

        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
