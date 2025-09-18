import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "How do I use the loader?",
      answer: "Download Skillora, run the installer, choose your game, then toggle features. A quick guide is included inside the app."
    },
    {
      question: "Is Skillora free?",
      answer: "The base loader is free. Some advanced modules are premium and require a license key."
    },
    {
      question: "How often are updates released?",
      answer: "Small patches roll out weekly with hot‑fixes shipped as soon as games update."
    },
    {
      question: "Does Skillora bypass anti‑cheat?",
      answer: "Skillora provides optional safety features to minimize detection while testing. Use responsibly and at your own risk."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">FAQ</h2>
          <p className="text-xl text-gray-400">Frequently asked questions</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/70 transition-colors duration-200"
              >
                <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                <svg 
                  className={`w-6 h-6 text-blue-400 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Disclaimer:</span> Skillora is provided for educational and testing purposes. Follow all applicable game terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;