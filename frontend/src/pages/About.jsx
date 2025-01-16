import React, { useEffect } from 'react'
import { assets, directors } from '../assets/assets'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { TeamCard } from '../components/TeamCard'
import { Box, Container, Typography, Paper, Grid, Card } from '@mui/material';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from '@mui/icons-material/Verified';
import ScienceIcon from '@mui/icons-material/Science';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const teamMembers = [
    {
      name: "Sanjeev Agwarwaal",
      role: "Head of Marketing Department",
      image: directors.deeplal
    },
    {
      name: "Amandeep Singh",
      role: "Head of Finance",
      image: directors.finance
    },
    {
      name: "Vishesh Bhatia",
      role: "Head of Sales Department",
      image: directors.marketing
    },
    {
      name: "Rakesh Kumar Verma",
      role: "Head of Raw Material",
      image: directors.rawmaterial
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
            The Managing Director, envisioned the company to address the growing need for sustainable energy. With his innovative ideas and leadership skills, he has steered the company towards excellence. we drive success through innovative business strategies, fostering growth, excellence, and sustainable solutions in the industry.
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
  src={directors.dhruvgoyal}
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
              Dhruv Goel
            </h1>
            <div className='flex flex-row items-center'>
              <p className='pr-2 font-bold font-montserrat'>Managing Director</p>
              <div className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#020e0b]" />
            </div>
            <p className='mt-4 font-montserrat'>
            At divinepellets, we are led by our visionary Managing Director,Dhruv Goel, who drives innovation and excellence. Backed by a skilled and collaborative team, we are committed to delivering outstanding results and fostering a culture of growth and integrity. Together, we aim to set new standards in the industry.
            </p>
          </div>
      </motion.div>
    </div>
    <div className='text-center my-16 py-7 px-4 shadow-lg shadow-black font-bold bg-[#EEEEEE] hover:scale-105 hover:shadow-2xl transition-all duration-300'>
  <p className='font-montserrat'>
    Despite being students of Class 11, Deep and Dhruv have proven that age is no barrier to entrepreneurship. Their passion, dedication, and commitment to sustainability have made Divine Pellets a name to trust in the biomass industry.
  </p>
</div>



<div>

    <Container maxWidth="xl">
      {/* Our Story Section */}
      <Box className="mb-16">
        <Title title="Our Story" />
        <Paper elevation={0} className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="body1" className="text-gray-700 leading-relaxed mb-6">
              Divine Pellets emerged from the innovative minds of two extraordinary young entrepreneurs, Deep Lal and Dhruv Goel. Despite their youth as Class 11 students, their vision for revolutionizing renewable energy has proven that passion knows no age limits.
            </Typography>
            <Grid container spacing={4} className="mb-6">
              <Grid item xs={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Typography variant="h6" className="text-green-800 font-bold mb-3">
                      Deep Lal - Managing Director
                    </Typography>
                    <Typography className="text-gray-600">
                      Steering the company with innovative leadership, Deep's strategic vision drives Divine Pellets toward sustainable excellence and market leadership.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <Typography variant="h6" className="text-green-800 font-bold mb-3">
                      Dhruv Goel - Managing Director
                    </Typography>
                    <Typography className="text-gray-600">
                    As Head of Team Management, Dhruv ensures seamless collaboration and operational efficiency by fostering teamwork, optimizing processes, and driving strategic growth.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Paper>
      </Box>

      {/* What We Offer Section */}
      <Box className="mb-16">
        <Title title="What We Offer" />
        <Grid container spacing={4}>
          {[
            {
              title: "High Energy Efficiency",
              description: "Our pellets deliver optimal thermal performance with superior calorific value.",
              icon: <LocalOfferIcon className="text-green-600 text-4xl" />
            },
            {
              title: "Environmental Sustainability",
              description: "100% eco-friendly production process with minimal carbon footprint.",
              icon: <AccountTreeIcon className="text-green-600 text-4xl" />
            },
            {
              title: "Cost Effectiveness",
              description: "Competitive pricing without compromising on quality or performance.",
              icon: <VerifiedIcon className="text-green-600 text-4xl" />
            }
          ].map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow duration-300 shadow-md">
                  <Box className="mb-4">{offer.icon}</Box>
                  <Typography variant="h6" className="text-green-800 font-bold mb-3">
                    {offer.title}
                  </Typography>
                  <Typography className="text-gray-600">
                    {offer.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box className="mb-16">
        <Title title="Why Choose Us?" />
        <Card className="p-8 bg-gradient-to-br from-green-700 to-green-900 text-white">
          <Grid container spacing={4}>
            {[
              "Unwavering commitment to environmental sustainability",
              "Rigorous quality control and assurance processes",
              "Ethical business practices with complete transparency"
            ].map((point, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-3"
                >
                  <VerifiedIcon className="text-green-300" />
                  <Typography>{point}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>

      {/* Safety Comparison Section */}
      <Box className="mb-16">
        <Title title="Scientific Evidence: Biomass Pellets vs Coal" />
        <Paper className="p-8 bg-gray-50 rounded-2xl shadow-lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Box className="flex items-center gap-3 mb-4">
                    <ScienceIcon className="text-green-600 text-3xl" />
                    <Typography variant="h6" className="text-green-800 font-bold">
                      Environmental Impact
                    </Typography>
                  </Box>
                  <Typography className="text-gray-600 mb-4">
                    Scientific studies show that biomass pellets produce up to 90% less CO2 emissions compared to coal combustion. The renewable nature of biomass creates a carbon-neutral cycle.
                  </Typography>
                  <Box className="bg-green-50 p-4 rounded-lg">
                    <Typography variant="subtitle2" className="text-green-800 font-bold">
                      Key Facts:
                    </Typography>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Zero sulfur emissions</li>
                      <li>Significantly reduced NOx emissions</li>
                      <li>Minimal ash content (less than 1%)</li>
                    </ul>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Box className="flex items-center gap-3 mb-4">
                    <ScienceIcon className="text-green-600 text-3xl" />
                    <Typography variant="h6" className="text-green-800 font-bold">
                      Safety Advantages
                    </Typography>
                  </Box>
                  <Typography className="text-gray-600 mb-4 pb-10">
                    Biomass pellets offer superior safety characteristics compared to traditional coal:
                  </Typography>
                  <Box className="bg-green-50 p-4 rounded-lg">
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Lower spontaneous combustion risk</li>
                      <li>No toxic gas emissions during storage</li>
                      <li>Easier handling and transportation</li>
                      <li>Reduced respiratory health risks</li>
                    </ul>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
</div>



<Title title="Our Team" />
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 justify-center">
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
