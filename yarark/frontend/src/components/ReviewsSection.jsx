import React, { useState } from 'react';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      text: "Skillora completely changed how I play. The loader is fast and intuitive, and updates land quicker than anything else I've tried.",
      author: "ShadowCore"
    },
    {
      text: "Installed, linked my game, and everything was ready in minutes. The blue theme looks clean and the UX is top‑tier.",
      author: "LunaByte"
    },
    {
      text: "Catalog is super organized. Per‑game presets save so much time, and switching profiles is instant.",
      author: "HexRider"
    },
    {
      text: "When patches drop, fixes follow fast. Auto‑update has been flawless so far.",
      author: "RiftWalker"
    },
    {
      text: "Safe Mode gives peace of mind while testing features. Thoughtful details everywhere.",
      author: "VectorRune"
    },
    {
      text: "Best‑looking loader, no clutter. Minimal, responsive, and it just works.",
      author: "NovaX"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Reviews</h2>
          <p className="text-xl text-gray-400">What our users say</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <blockquote className="text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{reviews[currentIndex].text}"
              </blockquote>
              <p className="text-blue-400 font-semibold text-lg">
                — {reviews[currentIndex].author}
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevReview}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextReview}
              className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;