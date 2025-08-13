import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp, Shield, Zap, CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
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
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-75%"]);
  const textX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-25%"]);

  const services = [
    {
      icon: BarChart3,
      title: 'Financial planning and strategy',
      oneLiner: 'Turn goals into a 12–18-month operating plan you actually use.',
      youGet: ['Operating plan', 'Budgets & forecasts (with scenarios)', 'Clear runway', 'Board-ready dashboard'],
      idealFor: 'Founders/CFOs in bootstrapped or VC-backed companies',
      setup: 'Initial plan in 2–3 weeks, then monthly reviews',
      bgColor: 'from-blue-50 to-indigo-50',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow Management & Optimisation',
      oneLiner: 'See cash early, collect faster, spend with intent.',
      youGet: ['Rolling 13-week cash forecast', 'Collections cadence & DSO targets', 'Vendor-term playbook', 'Expense controls'],
      idealFor: 'Businesses with variable or seasonal revenue',
      setup: 'Live in 2 weeks; weekly cash huddles + monthly oversight',
      bgColor: 'from-green-50 to-emerald-50',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Mitigation',
      oneLiner: 'Make risks visible—and manageable.',
      youGet: ['Risk register with owners & triggers', 'Control library & SOPs', 'Compliance calendar', 'Insurance review'],
      idealFor: 'Teams scaling operations or credit exposure',
      setup: '2–4 weeks for full assessment; quarterly refresh',
      bgColor: 'from-purple-50 to-violet-50',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Growth Acceleration & Scaling',
      oneLiner: 'Scale on solid unit economics.',
      youGet: ['Pricing & contribution margins', 'Channel ROI map', 'Capacity & hiring plan', 'Scale-up operating cadence'],
      idealFor: 'Teams ready to grow without chaos',
      setup: '4–6 weeks to design; quarterly execution cycles',
      bgColor: 'from-orange-50 to-red-50',
      color: 'text-orange-600'
    }
  ];

  const stats = [
    { number: '₹50Cr+', label: 'Assets Managed', icon: Target },
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  // Service Card Component
  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl p-8 w-[500px] h-[400px] flex-shrink-0 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className={`w-12 h-12 bg-gradient-to-br ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
        <service.icon className={`w-6 h-6 ${service.color}`} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{service.oneLiner}</p>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-slate-900 mb-2">You get:</h4>
          <ul className="space-y-1">
            {service.youGet.slice(0, 2).map((item: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 mb-1">Ideal for:</h4>
          <p className="text-sm text-slate-600">{service.idealFor}</p>
        </div>
      </div>
      
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2">
        Get a quote
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
      style={{ paddingTop: '80px' }}
    >
      {/* Hero Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Make decisions with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                confidence
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Simple to start. Easy to run. Built for Indian businesses.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

             {/* Sticky Horizontal Scroll Section */}
       <section ref={targetRef} className="relative h-[300vh] bg-white">
         {/* Sticky container */}
         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
           <div className="container mx-auto flex items-center gap-12 px-4">
             {/* Left Column - Moving Text */}
             <motion.div style={{ x: textX }} className="w-2/5 flex-shrink-0">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
               >
                 <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">Our Services</p>
                 <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6">
                   Comprehensive solutions for your business growth
                 </h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   We provide end-to-end financial services that help businesses make better decisions, 
                   manage risks, and accelerate growth. Our data-driven approach ensures you have the 
                   insights you need when you need them.
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     <span className="text-slate-700">Data-driven insights</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     <span className="text-slate-700">Real-time monitoring</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                     <span className="text-slate-700">Expert guidance</span>
                   </div>
                 </div>
               </motion.div>
             </motion.div>

            {/* Right Column - Horizontally Scrolling Cards */}
            <motion.div style={{ x }} className="flex gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">A simple, reliable way to work together</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Discover and diagnose',
                  description: 'Align on goals, data, and constraints.',
                  result: 'You get: a quick assessment and a clear starting point.'
                },
                {
                  step: '2',
                  title: 'Plan and prioritise',
                  description: 'Build a 90-day plan with owners, targets, and a risk map.',
                  result: 'You get: one page that shows what to do and who does it.'
                },
                {
                  step: '3',
                  title: 'Implement and track',
                  description: 'Set up dashboards, weekly cash rhythm, and monthly reviews.',
                  result: 'You get: live numbers and course corrections in real time.'
                },
                {
                  step: '4',
                  title: 'Scale and safeguard',
                  description: 'Double down on what works and reduce known risks.',
                  result: 'You get: steady growth and stronger controls.'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{process.description}</p>
                  <p className="text-xs text-blue-600 font-medium">{process.result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-blue-100 mb-6">Start with a 30-min call to discuss your needs and see how we can help.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                Start with a 30-min Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Services;
