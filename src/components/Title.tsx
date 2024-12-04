import React from 'react';
import { FaYoutube } from 'react-icons/fa';

export function Title() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Chord Intervals Reference
      </h1>
      <div className="space-y-2">
        <a 
          href="http://www.apprendrelharmonica.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-gray-600 hover:text-blue-600 transition-colors"
        >
          créé par www.apprendrelharmonica.com
        </a>
        <a 
          href="https://www.youtube.com/@apprendrelharmonica" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-bold"
        >
          <FaYoutube className="text-2xl" />
          Chaîne YouTube
        </a>
      </div>
    </div>
  );
}