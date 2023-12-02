// LoadingScreen.js

import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <div className="border-t-4 border-theme rounded-full animate-spin h-16 w-16 border-t-theme"></div>
      {/* Add any additional text or elements for the loading screen */}
    </div>
  );
};

export default LoadingScreen;
