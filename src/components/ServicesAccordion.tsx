import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, Rocket } from 'lucide-react';

// A simple Circle component for reusability
const Circle = ({ children, style, className, icon }: { children: React.ReactNode; style: any; className: string; icon: React.ReactNode }) => (
  <motion.div
    style={style}
    className={`w-48 h-48 md:w-72 md:h-72 rounded-full flex flex-col items-center justify-center ${className}`}
  >
    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-6 shadow-sm">
      {icon}
    </div>
    <div className="text-center px-4 md:px-6">
      <p className="font-semibold text-sm md:text-base leading-tight text-white">{children}</p>
    </div>
  </motion.div>
);

const ServicesAccordion = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // --- Transformations for each element ---

  // Vertical movement for all circles (they all move up together)
  const y = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-120%"]);

  // Horizontal movement for each circle (creating the collapse)
  // Outer left circle moves right
  const xCircle1 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "155%"]);
  // Inner left circle moves right (less)
  const xCircle2 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "55%"]);
  // Inner right circle moves left (less)
  const xCircle3 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-55%"]);
  // Outer right circle moves left
  const xCircle4 = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "-155%"]);
  
  // Opacity for the central text
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);

  // Opacity for the circles (fade out at the end)
  const circleOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);
  
  // SVG Path animation
  const pathLength = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  return (
    <section ref={targetRef} className="relative h-[350vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                 {/* Central Text */}
         <motion.div style={{ opacity: textOpacity, y: textY }} className="absolute text-center max-w-3xl mx-auto z-10 top-1/2 mt-20">
             <h2 className="text-5xl font-bold text-gray-900">ROOTED IN CASH DISCIPLINE & DATA</h2>
         </motion.div>

        {/* SVG Connector Lines */}
        <motion.svg 
            width="800" 
            height="400" 
            viewBox="0 0 800 400" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: circleOpacity }}
        >
            {/* Lines from circles to a central point */}
            <motion.path d="M 100 200 Q 250 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
            <motion.path d="M 260 200 Q 330 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
            <motion.path d="M 540 200 Q 470 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
            <motion.path d="M 700 200 Q 550 200 400 200" stroke="#E5E7EB" strokeWidth="2" fill="none" style={{pathLength}} />
        </motion.svg>
        
                 {/* Container for the circles */}
         <div className="flex items-center space-x-4 md:space-x-8">
             <Circle 
                 style={{ y, x: xCircle1, opacity: circleOpacity }} 
                 className="bg-black shadow-lg"
                 icon={
                     <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center">
                         <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
                     </div>
                 }
             >
                 FINANCIAL PLANNING & STRATEGY
             </Circle>
             <Circle 
                 style={{ y, x: xCircle2, opacity: circleOpacity }} 
                 className="bg-black shadow-lg"
                 icon={
                     <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center">
                         <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
                     </div>
                 }
             >
                 CASH FLOW MANAGEMENT & OPTIMIZATION
             </Circle>
             <Circle 
                 style={{ y, x: xCircle3, opacity: circleOpacity }} 
                 className="bg-black shadow-lg"
                 icon={
                     <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center">
                         <Shield className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
                     </div>
                 }
             >
                 RISK ASSESSMENT & MITIGATION
             </Circle>
             <Circle 
                 style={{ y, x: xCircle4, opacity: circleOpacity }} 
                 className="bg-black shadow-lg"
                 icon={
                     <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-sm flex items-center justify-center">
                         <Rocket className="w-4 h-4 md:w-6 md:h-6 text-[#24525c]" />
                     </div>
                 }
             >
                 GROWTH ACCELERATION & SCALING
             </Circle>
         </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
