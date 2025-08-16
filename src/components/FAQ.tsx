import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'Within 5 business days after the discovery call and data access.'
    },
    {
      question: 'Do you work remotely or on-site?',
      answer: 'Primarily remote across India; on-site as needed for key workshops.'
    },
    {
      question: 'What if our finance data is messy?',
      answer: 'We help you clean and standardise it during the first 2 weeks.'
    },
    {
      question: 'Will you work with our CA/CFO?',
      answer: 'Yes—our work complements your finance, tax, and audit partners.'
    },
    {
      question: 'How do you measure ROI?',
      answer: 'Cash flow stability, margin improvement, risk reduction, and decision speed.'
    },
    {
      question: 'What tools do you use?',
      answer: 'Excel/Sheets, BI dashboards, and your existing accounting stack.'
    },
    {
      question: 'Can you help raise debt/equity?',
      answer: 'We prepare financials and materials; we don\'t act as brokers.'
    },
    {
      question: 'Is our data confidential?',
      answer: 'Yes. We sign NDAs and follow strict access controls.'
    }
  ];

  return (
    <section id="faqs" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-all duration-300 group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4 group-hover:text-[#24525c] transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#24525c]/10 transition-colors duration-300"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                                      <Minus className="w-4 h-4 text-gray-600 group-hover:text-[#24525c] transition-colors duration-300" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-600 group-hover:text-[#24525c] transition-colors duration-300" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 bg-gradient-to-br from-gray-50 to-blue-50/30">
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;