import React, { useEffect } from 'react'
import { assets, directors } from '../assets/assets'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { TeamCard } from '../components/TeamCard'


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const teamMembers = [
    {
      name: "Sarah Anderson",
      role: "Head of Marketing Department",
      image: directors.deeplal
    },
    {
      name: "Michael Chen",
      role: "Vice President of Raw Materials",
      image: directors.deeplal
    },
    {
      name: "Emma Thompson",
      role: "Head of Sales Department",
      image: directors.deeplal
    },
    {
      name: "James Wilson",
      role: "Head of Finance",
      image: directors.deeplal
    }
  ];

  return (
    <div className='py-16'>
      <Title title="About Us" bodyText='Welcome to Divine Pellets, a company dedicated to providing sustainable and eco-friendly energy solutions. At Divine Pellets, we specialize in the production of high-quality biomass pellets designed to reduce carbon footprints and promote renewable energy usage. Our Vision We aim to contribute to a cleaner and greener planet by offering an alternative to fossil fuels. Our commitment lies in creating efficient, sustainable, and affordable energy resources for industries and households alike.'/>
       <div className='flex flex-col sm:flex-row pt-11'>
      {/* Hero Left side with animation */}
      <motion.div
        className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
         <div className='w-full lg:w-1/2'>
            <h1 className='text-lg sm:text-4xl font-cinzel font-bold text-[#2E4A3A]'>
              Deep Lal
            </h1>
            <div className='flex flex-row items-center'>
              <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#020e0b]" />
              <p className='pl-2 font-bold font-montserrat'>Managing Director</p>
            </div>
            <p className='mt-4 font-montserrat'>
            The Managing Director, envisioned the company to address the growing need for sustainable energy. With his innovative ideas and leadership skills, he has steered the company towards excellence.
            </p>
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
  className="w-full h-[25rem] object-cover sm:w-[50rem] shadow-lg shadow-black rounded-lg"
  src={directors.deeplal}
  alt="Hero"
/> 
</motion.div>
    </div>

{/* Director of Accountancy */}

    <div className='flex flex-col-reverse sm:flex-row pt-11'>
    <motion.div
        className='w-full px-4 sm:w-1/2 flex items-center justify-center'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
      <img
  className="w-full h-[40rem] object-cover sm:w-[25rem] shadow-lg shadow-black rounded-lg"
  src={directors.deeplal}
  alt="Hero"
/> 
</motion.div>
      {/* Hero Left side with animation */}
      <motion.div
        className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
         <div className='w-full lg:w-1/2'>
            <h1 className='text-lg sm:text-4xl font-cinzel font-bold text-[#0c301c]'>
              Dhruv Goyal
            </h1>
            <div className='flex flex-row items-center'>
              <p className='pr-2 font-bold font-montserrat'>Director of Accountancy</p>
              <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#020e0b]" />
            </div>
            <p className='mt-4 font-montserrat'>
            The Director of Accountancy ensures the financial stability and smooth operation of Divine Pellets. His meticulous approach to financial management is the backbone of the company's growth.
            </p>
          </div>
      </motion.div>
    </div>
    <div className='text-center my-16 py-7 px-4 shadow-lg shadow-black font-bold bg-[#EEEEEE] hover:scale-105 hover:shadow-2xl transition-all duration-300'>
  <p className='font-montserrat'>
    Despite being students of Class 11, Deep and Dhruv have proven that age is no barrier to entrepreneurship. Their passion, dedication, and commitment to sustainability have made Divine Pellets a name to trust in the biomass industry.
  </p>
</div>
<Title title='Our Team' />
      <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center gap-8'>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Ensures the animation happens only once when it enters the viewport
      transition={{ duration: 0.6, delay: index * 0.2 }} // Delay for staggered effect
    >
      <TeamCard
        name={member.name}
        role={member.role}
        image={member.image}
      />
    </motion.div>
  ))}
</div>
      </div>
    </div>
  )
}

export default About
