import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Application from '../components/Application'
import ProductGallary from '../components/ProductGallary'
import Facts from '../components/Facts'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
    <Hero/>
    <Hero2/>
    <Application/>
    <ProductGallary/>
    <Facts/>
    </div>
  )
}

export default Home
