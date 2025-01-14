import React from 'react'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Application from '../components/Application'
import ProductGallary from '../components/ProductGallary'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Hero2/>
    <Application/>
    <ProductGallary/>
    </div>
  )
}

export default Home
