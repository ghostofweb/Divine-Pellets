import React from 'react'
import Title from './Title'
import IndustryCard from './Industries'
import { applications, assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Application = () => {
  return (
    <div className='py-16'>
      <div>
        <Title
          title={"Biomass Pellet Application"}
          bodyText={"At Divine Pellets, we produce high-quality biomass pellets designed to meet the growing demand for sustainable energy. Our pellets are efficient, cost-effective, and environmentally friendly, catering to a variety of industries and applications. With a focus on innovation and quality, we offer a cleaner, greener alternative to traditional fuels. Below are some key applications of our biomass pellets"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full">
        {applications.map((item, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8}}
          >
            <IndustryCard
              name={item.name}
              desc={item.desc}
              img={item.img}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Application
