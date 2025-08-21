import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
            Ready to grow—without the guesswork?
          </h2>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a clear plan, stronger cash flow, and calm execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg">
              Book a Call
              <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2">
              <FileText size={18} />
              Get a Free Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;