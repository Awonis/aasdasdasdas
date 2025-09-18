import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleDownload = () => {
    window.open('https://gofile.io/d/3DRGLJ', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Premium Cheats</span>
            <br />
            <span className="text-blue-400">Loader</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Unlock the full potential of your favorite games with Skillora's streamlined loader. 
            Clean UX, smooth setup, fast updates, and a polished design tailored for modern gaming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Download
            </Button>
            <Button 
              onClick={() => window.location.href = '/catalog'}
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Cheats Catalog
            </Button>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <img 
              src="https://skillora.cc/images/hero.png" 
              alt="Skillora Interface"
              className="w-full h-auto"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400/1f2937/3b82f6?text=Skillora+Interface";
              }}
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-3xl transform scale-110"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;