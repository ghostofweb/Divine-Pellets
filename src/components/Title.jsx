import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ title, bodyText="" }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        className="flex flex-col items-center gap-6" // Added items-center here
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title Section */}
        <div className="flex flex-col items-center gap-4 w-full"> {/* Changed to flex-col and added items-center */}
          <h1 
            className="font-cinzel font-bold text-2xl md:text-3xl lg:text-4xl text-center"
            style={{
              backgroundImage: 'linear-gradient(to top, #417538, #020e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {title}
          </h1>
          <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#020e0b]" />
        </div>

        {/* Body Text */}
        <motion.p
          className="font-montserrat text-md text-center leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {bodyText}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Title;