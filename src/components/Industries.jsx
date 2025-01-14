import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IndustryCard = ({ name, desc, img }) => {
  const [isHeld, setIsHeld] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // For desktop (mouse/keyboard)
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // For mobile (touch)
  const handleTouchStart = () => setIsHeld(true);
  const handleTouchEnd = () => setIsHeld(false);

  return (
    <motion.div
      className="relative w-full max-w-sm bg-white rounded-lg shadow-lg shadow-darkgreen overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden rounded-t-lg">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Bottom Light Green Gradient */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-green-400 to-transparent"></div>
      </div>
      {/* Title */}
      <div className="p-4">
        <h3 className="text-md font-montserrat font-medium text-green-800 ">{name}</h3>
      </div>
      {/* Hover or Hold Overlay */}
      <motion.div
        className={`absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center px-4 transition-opacity duration-300 ${
          isHovered || isHeld ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-md font-bold text-green-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 text-center">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default IndustryCard;
