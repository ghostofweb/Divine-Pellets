import React from 'react';

const FactCard = ({ icon, title, description }) => {
  return (
    <article className="group relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-green-50 to-green-100 p-6 h-full flex flex-col group-hover:bg-opacity-90 transition-all duration-300">
        {/* Icon Header */}
        <div className="mb-4 text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 font-cinzel  transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow  transition-colors duration-300">
          {description}
        </p>

        {/* Decorative Elements */}
        <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-4 group-hover:w-full transition-all duration-300"></div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-2xl transition-colors duration-300"></div>
    </article>
  );
};

export default FactCard;