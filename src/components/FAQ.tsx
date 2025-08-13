import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;