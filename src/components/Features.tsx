import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Feature data with icons and descriptions - Optimized to 6 cards + 1 final card
const featureCards = [
  {
    id: 1,
    title: "Financial Planning & Reporting",
    subtitle: "Board-ready insights and timely delivery",
    features: [
      {
        title: "Board-ready forecasts",
        description: "Rolling forecasts, budgets, and scenarios on a fixed cadence.",
        icon: "📊",
        color: "from-blue-500 to-blue-600"
      },
      {
        title: "On-time MIS",
        description: "Monthly closes and dashboards delivered consistently.",
        icon: "⏰",
        color: "from-green-500 to-green-600"
      }
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50"
  },
  {
    id: 2,
    title: "Cash Flow Management",
    subtitle: "Real-time visibility and control",
    features: [
      {
        title: "Cash runway clarity",
        description: "Live view of inflows, outflows, and weeks of runway.",
        icon: "💰",
        color: "from-purple-500 to-purple-600"
      },
      {
        title: "Weekly cash rhythm",
        description: "13-week cash model with a clear collections cadence.",
        icon: "🔄",
        color: "from-orange-500 to-orange-600"
      }
    ],
    color: "from-purple-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-orange-50"
  },
  {
    id: 3,
    title: "Collections & Vendor Management",
    subtitle: "Optimize working capital and relationships",
    features: [
      {
        title: "Faster collections",
        description: "Structured follow-ups and measurable DSO reduction.",
        icon: "⚡",
        color: "from-red-500 to-red-600"
      },
      {
        title: "Optimized vendor terms",
        description: "Negotiated terms with a disciplined payment calendar.",
        icon: "🤝",
        color: "from-teal-500 to-teal-600"
      }
    ],
    color: "from-red-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-red-50 to-teal-50"
  },
  {
    id: 4,
    title: "Controls & Governance",
    subtitle: "Build accountability and prevent risks",
    features: [
      {
        title: "Spend controls",
        description: "Approval guardrails and variance checks that hold.",
        icon: "🔒",
        color: "from-indigo-500 to-indigo-600"
      },
      {
        title: "Governance installed",
        description: "Review cadence, owners, and SLAs embedded.",
        icon: "🏛️",
        color: "from-pink-500 to-pink-600"
      }
    ],
    color: "from-indigo-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-pink-50"
  },
  {
    id: 5,
    title: "Risk & Pricing Strategy",
    subtitle: "Data-driven decisions and protection",
    features: [
      {
        title: "Risk ownership",
        description: "Risk register with triggers and accountable owners.",
        icon: "🛡️",
        color: "from-yellow-500 to-yellow-600"
      },
      {
        title: "Data-backed pricing",
        description: "Contribution margins and price tests you can trust.",
        icon: "📈",
        color: "from-emerald-500 to-emerald-600"
      }
    ],
    color: "from-yellow-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-emerald-50"
  },
  {
    id: 6,
    title: "Growth & Analytics",
    subtitle: "Scale with confidence and clarity",
    features: [
      {
        title: "Hiring signals",
        description: "Capacity models tied to demand and delivery.",
        icon: "👥",
        color: "from-cyan-500 to-cyan-600"
      },
      {
        title: "Unit economics",
        description: "Profit by product, channel, and cohort made visible.",
        icon: "📊",
        color: "from-violet-500 to-violet-600"
      }
    ],
    color: "from-cyan-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-violet-50"
  },
  {
    id: 7,
    title: "Channel ROI & Support",
    subtitle: "Optimize marketing and get expert guidance",
    features: [
      {
        title: "Channel ROI",
        description: "CAC, LTV, and payback tracked with clarity.",
        icon: "🎯",
        color: "from-rose-500 to-rose-600"
      },
      {
        title: "On-call support",
        description: "Rapid decision support for time-sensitive moves.",
        icon: "📞",
        color: "from-slate-500 to-slate-600"
      }
    ],
    color: "from-rose-500 to-slate-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-slate-50"
  }
];

const StackedCardsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
      className="relative" 
      style={{ height: `calc(100vh + ${featureCards.length * 80}vh)` }}
    >
      {/* Title Section */}
      <div className="mb-16 flex flex-col items-center gap-6 pt-32 text-center">
                    <div className="inline-flex items-center rounded-full bg-[#24525c] px-6 py-2 text-sm font-semibold text-white shadow-lg">
          <span className="mr-2">✨</span>
          What you get—beyond advice
        </div>
        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
          Transform your finance function with
          <span className="text-[#24525c]"> proven systems</span>
        </h2>
        <p className="max-w-2xl text-lg text-gray-600">
          Get the tools, processes, and insights that turn financial chaos into clear, actionable intelligence.
        </p>
      </div>

      {/* Sticky Container - The "Stage" */}
      <div className="sticky top-0 h-screen">
        {featureCards.map((card, index) => (
          <Card 
            key={card.id} 
            card={card} 
            index={index} 
            progress={scrollYProgress} 
            totalCards={featureCards.length} 
          />
        ))}
      </div>
    </section>
  );
};

// The Individual Card Component
const Card = ({ card, index, progress, totalCards }: { 
  card: any; 
  index: number; 
  progress: any; 
  totalCards: number 
}) => {
  // Calculate the start and end points for this card's animation
  const start = index / totalCards;
  const end = start + 1 / totalCards;

  // For the very first card, we want it to start a bit smaller
  const initialScale = 1 - (index * 0.03);

  // Animate scale based on its turn in the scroll progress
  const scale = useTransform(progress, [start, end], [initialScale, 1]);
  
  // Animate vertical position. Start at its stacked position and move up out of view.
  const translateY = useTransform(progress, [start, end], [`${index * 3}%`, '-100%']);

  // Animate opacity for smooth transitions
  const opacity = useTransform(progress, [start, end], [0.8, 1]);

  // Animate rotation for a subtle 3D effect
  const rotateX = useTransform(progress, [start, end], [5, 0]);

  return (
    <motion.div
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center px-4"
      style={{
        scale,
        translateY,
        opacity,
        rotateX,
        zIndex: totalCards - index,
      }}
    >
            {/* Card Content */}
      <div className={`flex h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#24525c] shadow-2xl lg:flex-row border border-gray-200`}>
        {/* Left Side: Text Content */}
        <div className="flex flex-1 flex-col justify-center p-8 lg:p-12 bg-[#24525c]">
          <div className="mb-8">
            {/* Small Icon */}
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#facc15] text-[#24525c] mb-6`}>
              {card.features[0].icon}
            </div>
            
            {/* Main Headline */}
            <h3 className="text-3xl font-bold text-white mb-4">
              {card.title}
            </h3>
            
            {/* Body Text */}
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              {card.subtitle}
            </p>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center text-sm text-white/60">
            <span className="mr-2">Card {index + 1} of {totalCards}</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full bg-[#facc15] rounded-full`}
                style={{
                  width: useTransform(progress, [start, end], ['0%', '100%'])
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Right Side: Feature Cards */}
        <div className="flex flex-1 items-center justify-center p-8 lg:p-12 bg-[#24525c] relative">
          {/* Two Overlapping Cards */}
          <div className="relative">
            {/* Bottom Card */}
            <div className="w-80 h-48 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-2xl shadow-lg transform rotate-3 translate-y-2">
              <div className="p-6 h-full flex flex-col justify-between">
                {/* EMV Chip */}
                <div className="w-12 h-8 bg-[#24525c] rounded-md flex items-center justify-center">
                  <div className="w-8 h-5 bg-[#24525c]/80 rounded-sm"></div>
                </div>
                
                {/* Card Content */}
                <div className="flex justify-between items-end">
                  <div className="text-[#24525c] font-semibold text-sm">
                    SLK INVESTMENTS
                  </div>
                  <div className="text-[#24525c] font-bold text-lg">
                    {card.features[1].title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Top Card */}
            <div className="absolute top-0 left-0 w-80 h-48 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-2xl shadow-xl transform -rotate-3 -translate-y-2">
              <div className="p-6 h-full flex flex-col justify-between">
                {/* EMV Chip */}
                <div className="w-12 h-8 bg-[#24525c] rounded-md flex items-center justify-center">
                  <div className="w-8 h-5 bg-[#24525c]/80 rounded-sm"></div>
                </div>
                
                {/* Card Content */}
                <div className="flex justify-between items-end">
                  <div className="text-[#24525c] font-semibold text-sm">
                    SLK INVESTMENTS
                  </div>
                  <div className="text-[#24525c] font-bold text-lg">
                    {card.features[0].title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Icons Overlay */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${card.features[0].color} flex items-center justify-center text-white text-sm`}>
              {card.features[0].icon}
            </div>
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${card.features[1].color} flex items-center justify-center text-white text-sm`}>
              {card.features[1].icon}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StackedCardsSection;