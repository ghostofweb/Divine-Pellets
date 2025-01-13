import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ text }) => {
  return (
    <div className="text-center">
      <motion.h1
        className="text-5xl font-header bg-clip-text text-transparent font-bold"
        style={{
          backgroundImage: 'linear-gradient(to right, #A9D6A1, #020e0b)', // Light green to darker green
        }}
        initial={{ y: -100, opacity: 0 }}  // Start above and transparent
        animate={{ y: 0, opacity: 1 }}    // Move to normal position and fade in
        transition={{ duration: 1, ease: 'easeOut' }}  // Smooth transition
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Title;
