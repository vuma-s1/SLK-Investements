import React from 'react';
import { Heart, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Unwavering ethics and transparency in all interactions',
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalised Service', 
      description: 'Tailored solutions to your distinct context and goals',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise',
      description: 'Deep understanding of the financial landscape and market trends',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  const stats = [
    { number: '500+', label: 'Businesses Served', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '₹1000Cr+', label: 'Revenue Managed', icon: <Shield className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            About Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-[#24525c]">SLK Investments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help Indian businesses plan, operate, and scale with confidence through strategic financial guidance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  We help Indian businesses plan, operate, and scale with confidence. We install a simple 
                  finance rhythm—weekly cash control, on-time MIS, monthly reviews—so you always know where 
                  you stand.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Budgets and forecasts are built for action, collections tighten, working capital improves, 
                  risks have owners, and unit economics stay profitable.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to grow value and protect downside—one clear decision at a time. We partner 
                  with your CA and team as a fractional finance lead, and prepare clean data rooms and 
                  lender-ready metrics when you fundraise. Everything is anchored in integrity, personalised 
                  service, and deep market expertise—clear numbers, calm execution.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What we stand for</h3>
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className={`${value.bgColor} rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  <div className="flex items-start gap-4">
                    <div className={`${value.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-lg">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;