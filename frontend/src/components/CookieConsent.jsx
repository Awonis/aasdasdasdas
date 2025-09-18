import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 border-t border-gray-700 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-300 text-sm md:text-base">
          We use cookies to personalize content and analyze traffic.
        </p>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={declineCookies}
            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Decline
          </Button>
          <Button 
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;