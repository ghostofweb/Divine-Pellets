import React from 'react';
import { motion } from 'framer-motion';

export const TeamCard = ({ name, role, image }) => {
  return (
    <motion.div
      className="w-full p-4 mb-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.3 },
      }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
        <div className="h-64 overflow-hidden">
          <img 
            src={image || "/placeholder-profile.jpg"} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-cinzel font-bold text-[#2E4A3A]">{name}</h3>
          <div className="flex items-center mt-2">
            <div className="w-8 h-[1px] bg-[#020e0b]" />
            <p className="pl-2 font-montserrat text-sm">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
