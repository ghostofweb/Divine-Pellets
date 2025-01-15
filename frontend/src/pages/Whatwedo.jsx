import React, { useEffect } from 'react'
import { images } from '../assets/assets'
import { motion } from 'framer-motion'
import Title from '../components/Title'

const WhatweDo = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div className='py-16'>
      <Title
      title={"What we Do ?"}
      />
      {/* Section 1 */}
      <div className='flex flex-col sm:flex-row gap-12'>
        {/* Hero Left side with animation */}
        <motion.div
          className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-[25rem] object-cover sm:w-[50rem] shadow-lg shadow-black rounded-lg"
            src={images[5]} // Image for first section
            alt="Biomass Waste Management"
          />
        </motion.div>

        {/* Hero Right side with animation */}
        <motion.div
          className='w-full px-4 sm:w-1/2 flex flex-col items-start justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title title="Biomass Waste Management" />
          <p className="text-gray-600">
          At Divine Pellets, we understand that the quality of our briquettes and pellets is directly influenced by an efficient biomass residue collection system. Our focus is on enhancing raw material collection and storage processes. By working closely with farmers, manufacturers, and suppliers, we ensure smooth and effective biomass collection procedures, which contribute to the production of high-quality biofuels.
          </p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col gap-12 sm:flex-row pt-11'>
        {/* Hero Left side with animation */}
        <motion.div
          className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-[25rem] object-cover sm:w-[50rem] shadow-lg shadow-black rounded-lg"
            src={images[7]} // Image for second section
            alt="Biofuel Aggregation"
          />
        </motion.div>

        {/* Hero Right side with animation */}
        <motion.div
          className='w-full px-4 sm:w-1/2 flex flex-col items-start justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title title="Biofuel Aggregation, Supply & Consulting" />
          <p className="text-gray-600">
          Divine Pellets offers comprehensive biofuel collection, supply, and consulting services. Through optimized supply chain management, we are able to gather and supply significant volumes of biofuels efficiently. We have established a reliable supplier network near our clients, ensuring a steady flow of biofuels. In addition, we provide expert consulting on demand-supply issues and help clients maintain high-quality standards while ensuring year-round biofuel supply.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col gap-12 sm:flex-row pt-11'>
        {/* Hero Left side with animation */}
        <motion.div
          className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-[25rem] object-cover sm:w-[50rem] shadow-lg shadow-black rounded-lg"
            src={images[8]} // Image for third section
            alt="Manufacturers of Pellets"
          />
        </motion.div>

        {/* Hero Right side with animation */}
        <motion.div
          className='w-full px-4 sm:w-1/2 flex flex-col items-start justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title title="Manufacturers of Pellets" />
          <p className="text-gray-600">
          Divine Pellets produces high-quality briquettes and pellets at our modern facilities. Our manufacturing processes are designed to ensure consistent quality and reliability. We are focused on expanding our sourcing to meet the growing demand for biofuels in various regions. Our team works diligently to expand our supplier network and support the growth of franchises, enabling us to deliver high-quality pellets and briquettes to a wider audience.
          </p>
        </motion.div>
      </div>

      {/* Section 4 */}
      <div className='flex flex-col gap-12 sm:flex-row pt-11'>
        {/* Hero Left side with animation */}
        <motion.div
          className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-[25rem] object-cover sm:w-[50rem] shadow-lg shadow-black rounded-lg"
            src={images[13]} // Image for fourth section
            alt="Management of Utilities"
          />
        </motion.div>

        {/* Hero Right side with animation */}
        <motion.div
          className='w-full px-4 sm:w-1/2 flex flex-col items-start justify-center'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title title="Management of Utilities" />
          <p className="text-gray-600">
          Divine Pellets is committed to providing utility management services, including water treatment, fire protection, and refrigeration. We manage all logistics and utility-related tasks, allowing our clients to focus on their core operations. With a focus on efficiency, we are continually developing our skills and capabilities to expand our utility management services, ensuring smooth and reliable support for our clients.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default WhatweDo
