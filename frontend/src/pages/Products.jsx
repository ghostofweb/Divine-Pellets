import React from 'react'
import ProductShowcase from '../components/ProductShowcase'
import Title from '../components/Title'
import IndustryCard from '../components/Industries'
import { motion } from 'framer-motion'
import { raw } from '../assets/assets'

const Products = () => {
  return (
    <div>
      <ProductShowcase/>
      <div>
        <Title
        title={"Pellet RAW Materials"}
        subtitle={"Know more about all the raw materials which we use to make High-Quality products"}
        />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {raw.map((item, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8}}
            className="flex justify-center" 
          >
            
          </motion.div>
        ))}
      </div>
    </div>
</div>
  )
}

export default Products
