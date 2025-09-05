import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Footer from '../components/Footer';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: 'Managing Partner',
      title: 'CFO Advisor',
      description: 'Strategic financial planning and advisory',
      initials: 'MP'
    },
    {
      name: 'Head of FP&A',
      title: 'Strategy Lead',
      description: 'Financial planning and analysis expertise',
      initials: 'HS'
    },
    {
      name: 'Cash & Working Capital Lead',
      title: 'Operations Specialist',
      description: 'Cash flow optimization and working capital management',
      initials: 'CL'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      {/* Main Content */}
      <div className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Leadership Team
            </h1>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-transparent rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#24525c] to-[#1e424a] rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    {member.initials}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#24525c] font-medium mb-3 text-sm">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Team;
