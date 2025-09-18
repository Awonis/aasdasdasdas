import React from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import FeaturesSection from './FeaturesSection';
import ReviewsSection from './ReviewsSection';
import FAQSection from './FAQSection';

const HomePage = () => {
  return (
    <main className="pt-20">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ReviewsSection />
      <FAQSection />
    </main>
  );
};

export default HomePage;