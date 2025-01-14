import React from 'react';

const FactItem = ({ fact }) => (
  <div
    className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative flex items-start space-x-3 p-4 bg-white group-hover:bg-green-50 transition-colors duration-300">
      <span className="text-green-600 font-bold text-lg group-hover:scale-125 transition-transform duration-300">•</span>
      <p className="text-gray-700 font-medium group-hover:text-green-800 transition-colors duration-300">
        {fact}
      </p>
    </div>
  </div>
);

export default FactItem;