import React from 'react';
import { Shield, RefreshCw, Heart } from 'lucide-react';

const Guarantees = () => {
  const guarantees = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'No lock-in traps',
      description: 'Cancel anytime with 30 days\' notice',
      color: 'bg-green-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Clarity or we rework',
      description: 'Your initial plan once at no cost',
      color: 'bg-blue-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Ethics first',
      description: 'Transparent advice, documented decisions',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            What we stand by
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="group">
              <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 border border-white/20 transform hover:-translate-y-2">
                <div className={`${guarantee.color} p-6 rounded-2xl text-white inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{guarantee.title}</h3>
                <p className="text-blue-100 leading-relaxed">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;