import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Skillora
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-400 transition-colors ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/download" 
              className={`hover:text-blue-400 transition-colors ${
                location.pathname === '/download' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Download
            </Link>
            <Link 
              to="/catalog" 
              className={`hover:text-blue-400 transition-colors ${
                location.pathname === '/catalog' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Catalog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;