import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Application from '../components/Application';
import ProductGallary from '../components/ProductGallary';
import Facts from '../components/Facts';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Divine Pellets | Indian Biomass & Eco-Friendly Energy Solutions</title>
        <meta
          name="description"
          content="Discover Divine Pellets, India's leading supplier of high-quality biomass energy pellets. Eco-friendly, sustainable, and affordable heating solutions tailored for India."
        />
        <meta
          name="keywords"
          content="Indian biomass pellets, eco-friendly energy, sustainable heating, renewable energy India, wood pellets, biomass suppliers India, clean energy solutions, green heating solutions"
        />
        <meta name="author" content="Divine Pellets" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Divine Pellets | Sustainable Biomass Energy" />
        <meta
          property="og:description"
          content="Join the eco-friendly revolution with Divine Pellets, India's trusted provider of biomass energy pellets. High-quality and cost-effective energy solutions."
        />
        <meta property="og:image" content="/assets/images/hero-image.jpg" />
        <meta property="og:url" content="https://divinepellets.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://divinepellets.com/" />
      </Helmet>

      <Hero />
      <Hero2 />
      <Application />
      <ProductGallary />
      <Facts />
    </div>
  );
};

export default Home;
