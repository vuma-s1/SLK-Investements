import React from 'react';
import { User } from 'lucide-react';

const Team = () => {
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
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leadership Team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  {member.initials}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;