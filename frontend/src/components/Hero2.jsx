import React from 'react'
import Title from './Title'
import { assets, whatarebiomass } from '../assets/assets'
import { motion } from 'framer-motion'
import MissionCard from './MissionCard'

const Hero2 = () => {
  const missionData = [
    {
      name: "Low Cost Installation",
      desc: "Offers cost-effective solutions compared to traditional energy sources.",
      img: assets.hero2Img1,
    },
    {
      name: "Zero Emission",
      desc: "Achieves zero carbon emissions during energy production and usage.",
      img: assets.hero2Img2,
    },
    {
      name: "Zero Pollution",
      desc: "Ensures no harmful pollutants are released into the environment.",
      img: assets.hero2Img3,
    },
    {
      name: "Ease of Use",
      desc: "Provides a user-friendly and straightforward installation process.",
      img: assets.hero2Img4,
    },
  ];
  

  return (
    <div className='pt-12'>
      <Title
        title="Divine Pallet: Revolutionizing Sustainable Energy with Eco-Friendly Solutions"
        bodyText="At Divine Pallet, we are committed to reshaping the future of energy production. Our premium eco-friendly pellets are crafted to provide an efficient, sustainable alternative to traditional energy sources. With a focus on reducing carbon footprints, enhancing efficiency, and promoting a greener world, Divine Pallet is your partner in making the planet a cleaner, healthier place to live."
      />
      <div className='bg-[#EEEEEE] mt-16 py-14 shadow-xl shadow-black'>
        <Title
          title={"What are Biomass Pallets?"}
          bodyText={whatarebiomass}
        />
      </div>
      <div className='flex flex-col py-10 sm:py-12 font-bold gap-10 sm:gap-16'>
        <motion.div
          className='w-full flex flex-col justify-center items-center'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Title
            title={"Mission of Our Project"}
            bodyText={"To provide sustainable, eco-friendly energy solutions through high-quality biomass pellets."}
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-screen-lg'>
            {missionData.map((item, index) => (
              <MissionCard
                key={index}
                name={item.name}
                desc={item.desc}
                img={item.img}
                style={{
                  gridColumn: index % 2 === 0 ? '1 / 2' : '2 / 3',  // Top-left / top-right
                  gridRow: index < 2 ? '1 / 2' : '2 / 3', // Top / bottom
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero2
