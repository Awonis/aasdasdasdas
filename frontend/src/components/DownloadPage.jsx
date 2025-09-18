import React from 'react';
import { Button } from './ui/button';

const DownloadPage = () => {
  const handleDownload = () => {
    window.open('https://gofile.io/d/3DRGLJ', '_blank');
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-white">Skillora</span>
            <br />
            <span className="text-blue-400">Premium Loader</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Download the latest Skillora loader. Clean blue/dark UI, fast updates, streamlined setup.
          </p>
          
          <div className="space-y-6">
            <Button 
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Download loader
            </Button>
            
            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => window.location.href = '/catalog'}
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                browse the Cheats Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DownloadPage;