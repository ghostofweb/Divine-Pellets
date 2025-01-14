import React from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row py-18 sm:py-10 md:py-8 lg:py-12 font-bold'>
      
        {/* Hero Left side with animation */}
        <motion.div
          className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              backgroundImage: 'linear-gradient(to left, #479d38, #020e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <div className='flex items-center gap-2'>
              <p className='font-medium text-sm md:text-base '>WHERE SUSTAINABILITY MEETS INNOVATION</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-4xl leading-relaxed font-cinzel'>
              EMBRACE THE POWER OF BIOMASS PELLETS
            </h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>EXPERIENCE THE FUTURE OF CLEAN ENERGY</p>
              <p className='w-8 md:w-11 h-[1px] bg-bg-darker'></p>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Right side with animation */}
        <motion.div
          className='w-full px-4 sm:w-1/2 flex items-center justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-auto object-cover sm:w-[70rem] shadow-lg shadow-black"
            src={assets.mainImg}
            alt="Hero"
          />
        </motion.div>
        
      </div>
    );
}

export default Hero
