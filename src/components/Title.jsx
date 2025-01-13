import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ text1, text2 }) => {
  return (
    <motion.div
      className="inline-flex gap-2 items-center mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.3, ease: [0.25, 0.8, 0.25, 1] }}
      viewport={{ once: true, amount: 1 }}
    >
      <p
        className="font-times font-bold text-4xl bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(to right, #A9D6A1, #020e0b)', // Light green to dark green gradient
        }}
      >
        {text1}{' '}
        <span
          className="font-medium"
          style={{
            backgroundImage: 'linear-gradient(to right, #A9D6A1, #020e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-buttontxt"></p>
    </motion.div>
  );
};

export default Title;
