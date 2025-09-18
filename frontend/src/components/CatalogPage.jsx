import React, { useState } from 'react';
import { Button } from './ui/button';
import { mockCheats } from '../data/mockData';

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCheats, setFilteredCheats] = useState(mockCheats);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredCheats(mockCheats);
    } else {
      const filtered = mockCheats.filter(cheat => 
        cheat.title.toLowerCase().includes(query.toLowerCase()) ||
        cheat.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCheats(filtered);
    }
  };

  const handleDownload = () => {
    window.open('https://gofile.io/d/3DRGLJ', '_blank');
  };

  return (
    <main className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Cheats Catalog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Browse all available Skillora modules. Use the search to find the cheat you need. 
            Click "Download" to get the latest loader and enable modules inside the app.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search cheats..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredCheats.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No cheats match your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCheats.map((cheat, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={cheat.image} 
                      alt={cheat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x225/1f2937/3b82f6?text=${encodeURIComponent(cheat.title)}`;
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {cheat.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {cheat.description}
                    </p>
                    
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CatalogPage;