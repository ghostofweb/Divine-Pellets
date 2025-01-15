import React, { useEffect } from 'react'
import ProductShowcase from '../components/ProductShowcase'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import { images, raw } from '../assets/assets'
import { Box, Card, Typography, Container, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Products = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div className='pb-16'>
      <ProductShowcase/>
      <div>
      <div>
      <Container maxWidth="xl" className='py-10'>
      <Title title="Why Choose Biomass Pellets?" 
      bodyText='Advantages of Biomass Pellets'/>
      
      {/* Highlighted Stats Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Card
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-600 rounded-2xl shadow-xl"
        >
          <Box className="p-8 relative">
            <StarIcon 
              className="absolute top-6 right-6 text-green-300"
            />
            <Typography 
              variant="h6" 
              className="text-green-800 mb-2 font-medium"
            >
              Superior Energy Value
            </Typography>
            <Typography 
              variant="h4" 
              className="text-green-800  font-bold mb-4"
            >
              5000 - 9000 kcal/kg
            </Typography>
            <Typography 
              variant="subtitle1" 
              className="text-green-800 "
            >
              with less than 8% moisture content for optimal cost-effectiveness
            </Typography>
          </Box>
        </Card>
      </motion.div>

      {/* Main Content Grid */}
      <Grid container spacing={6} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Box className="relative">
              <Box className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-300 translate-x-4 translate-y-4 rounded-2xl -z-10" />
              <img 
                src={images[3]}
                alt="Biomass Pellets"
                className="w-full rounded-2xl shadow-lg relative z-10"
              />
            </Box>
          </motion.div>
        </Grid>

        {/* Advantages List */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              "Environmentally sustainable with zero carbon footprint",
              "Superior alternative to traditional fossil fuels",
              "Minimal air pollutant emissions during combustion",
              "Easy handling and storage due to uniform size",
              "Locally sourced, reducing transportation costs",
              "Cost-effective due to waste material utilization",
              "Automated feeding system compatible",
              "Enhanced combustion efficiency through optimal particle size",
              "Clean handling and storage properties",
              "Renewable and sustainable energy source"
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-4 mb-4 p-4 rounded-lg hover:bg-green-50 transition-all duration-300"
                >
                  <CheckCircleIcon 
                    className="text-green-700 flex-shrink-0 mt-1"
                  />
                  <Typography
                    variant="body1"
                    className="text-green-900 font-medium"
                  >
                    {advantage}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Container>
      </div>
        <Title
          title={"Pellet RAW Materials"}
          subtitle={"Know more about all the raw materials which we use to make High-Quality products"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {raw.map((item, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden group hover:scale-50"
            >
              <img
                alt={item.name}
                src={item.image}
                className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-green-400 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white font-semibold text-lg">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
