import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A simple Circle component for reusability
const Circle = ({ children, style, className, icon }: { children: React.ReactNode; style: any; className: string; icon: React.ReactNode }) => (
  <motion.div
    style={style}
    className={`w-72 h-72 rounded-full flex flex-col items-center justify-center ${className}`}
  >
    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <div className="text-center px-6">
      <p className="font-semibold text-base leading-tight">{children}</p>
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
    <section ref={targetRef} className="relative h-[350vh] bg-gradient-to-br from-slate-50 to-blue-50/30">
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
         <div className="flex items-center space-x-8">
             <Circle 
                 style={{ y, x: xCircle1, opacity: circleOpacity }} 
                 className="bg-yellow-100 shadow-lg"
                 icon={
                     <div className="w-12 h-12 bg-yellow-400 rounded-sm relative overflow-hidden">
                         <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0.5 p-0.5">
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                             <div className="bg-yellow-400"></div>
                         </div>
                     </div>
                 }
             >
                 FINANCIAL PLANNING & STRATEGY
             </Circle>
             <Circle 
                 style={{ y, x: xCircle2, opacity: circleOpacity }} 
                 className="bg-amber-100 shadow-lg"
                 icon={
                     <div className="w-12 h-12 bg-amber-600 rounded-sm relative overflow-hidden">
                         <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                             <path d="M12 12C12 18 18 24 24 24C30 24 36 30 36 36" stroke="#92400E" strokeWidth="3" fill="none"/>
                             <path d="M36 12C36 18 30 24 24 24C18 24 12 30 12 36" stroke="#92400E" strokeWidth="3" fill="none"/>
                         </svg>
                     </div>
                 }
             >
                 CASH FLOW MANAGEMENT & OPTIMIZATION
             </Circle>
             <Circle 
                 style={{ y, x: xCircle3, opacity: circleOpacity }} 
                 className="bg-teal-100 shadow-lg"
                 icon={
                     <div className="w-12 h-12 bg-teal-400 rounded-sm relative overflow-hidden">
                         <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                             <circle cx="12" cy="12" r="3" fill="#0D9488"/>
                             <circle cx="36" cy="12" r="3" fill="#0D9488"/>
                             <circle cx="12" cy="36" r="3" fill="#0D9488"/>
                             <circle cx="36" cy="36" r="3" fill="#0D9488"/>
                             <path d="M24 12A12 12 0 0 1 36 24" stroke="#0D9488" strokeWidth="3" fill="none"/>
                             <path d="M12 24A12 12 0 0 1 24 36" stroke="#0D9488" strokeWidth="3" fill="none"/>
                         </svg>
                     </div>
                 }
             >
                 RISK ASSESSMENT & MITIGATION
             </Circle>
             <Circle 
                 style={{ y, x: xCircle4, opacity: circleOpacity }} 
                 className="bg-blue-100 shadow-lg"
                 icon={
                     <div className="w-12 h-12 bg-blue-400 rounded-sm relative overflow-hidden">
                         <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                             <path d="M6 12C12 18 18 12 24 18C30 12 36 18 42 12" stroke="#2563EB" strokeWidth="3" fill="none"/>
                             <path d="M6 24C12 30 18 24 24 30C30 24 36 30 42 24" stroke="#2563EB" strokeWidth="3" fill="none"/>
                             <path d="M6 36C12 42 18 36 24 42C30 36 36 42 42 36" stroke="#2563EB" strokeWidth="3" fill="none"/>
                         </svg>
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
