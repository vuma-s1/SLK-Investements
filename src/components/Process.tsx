import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, ArrowRight, Target, Users, BarChart3, TrendingUp } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll progress for horizontal scroll effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0.3, 0.8], ["25%", "-35%"]);
  const textX = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "-25%"]);

  const steps = [
    {
      step: '1',
      title: 'Discover and diagnose',
      description: 'Align on goals, data, and constraints.',
      result: 'You get: a quick assessment and a clear starting point.',
      icon: Target
    },
    {
      step: '2',
      title: 'Plan and prioritise',
      description: 'Build a 90-day plan with owners, targets, and a risk map.',
      result: 'You get: one page that shows what to do and who does it.',
      icon: Users
    },
    {
      step: '3',
      title: 'Implement and track',
      description: 'Set up dashboards, weekly cash rhythm, and monthly reviews.',
      result: 'You get: live numbers and course corrections in real time.',
      icon: BarChart3
    },
    {
      step: '4',
      title: 'Scale and safeguard',
      description: 'Double down on what works and reduce known risks.',
      result: 'You get: steady growth and stronger controls.',
      icon: TrendingUp
    }
  ];

  // Process Card Component
  const ProcessCard = ({ step, index }: { step: any; index: number }) => (
    <div className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-6 w-[400px] h-[300px] flex-shrink-0 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#24525c] text-white rounded-full flex items-center justify-center text-sm font-semibold">
          {step.step}
        </div>
                        <div className="w-8 h-8 bg-[#24525c]/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-[#24525c]" />
                </div>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-3 text-lg">{step.title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">{step.description}</p>
                      <p className="text-[#24525c] text-sm font-medium mt-auto">{step.result}</p>
    </div>
  );

  // Text Card Component (same size as process cards)
  const TextCard = () => (
    <div className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-5 w-[400px] h-[300px] flex-shrink-0 border border-gray-100 flex flex-col">
                      <p className="text-[#24525c] font-semibold mb-2 text-sm uppercase tracking-wide">Our Process</p>
      <h2 className="text-lg font-semibold leading-tight text-gray-900 mb-2">
        A simple, reliable way to work together
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
        We follow a proven methodology that ensures clarity, accountability, and results. 
        Our structured approach helps you move from uncertainty to confident decision-making.
      </p>
      <div className="space-y-1 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
          <span className="text-gray-700 text-xs">Clear methodology</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
          <span className="text-gray-700 text-xs">Proven results</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
          <span className="text-gray-700 text-xs">Ongoing support</span>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={targetRef} className="relative">
      {/* Desktop: Horizontal scroll animation */}
      <div className="hidden lg:block relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="flex justify-center">
            <motion.div style={{ x }} className="flex gap-4">
              <TextCard />
              {steps.map((step, index) => (
                <ProcessCard key={index} step={step} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical layout */}
      <div className="lg:hidden py-8 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Text Card */}
          <div className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-4 mb-6 border border-gray-100">
            <p className="text-[#24525c] font-semibold mb-2 text-xs uppercase tracking-wide">Our Process</p>
            <h2 className="text-lg font-semibold leading-tight text-gray-900 mb-2">
              A simple, reliable way to work together
            </h2>
            <p className="text-gray-600 text-xs leading-relaxed mb-3">
              We follow a proven methodology that ensures clarity, accountability, and results. 
              Our structured approach helps you move from uncertainty to confident decision-making.
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-gray-700 text-xs">Clear methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-gray-700 text-xs">Proven results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#24525c] rounded-full"></div>
                <span className="text-gray-700 text-xs">Ongoing support</span>
              </div>
            </div>
          </div>

          {/* Mobile Process Cards */}
          <div className="grid grid-cols-1 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#24525c] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 bg-[#24525c]/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-[#24525c]" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{step.title}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{step.description}</p>
                <p className="text-[#24525c] text-xs font-medium">{step.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;