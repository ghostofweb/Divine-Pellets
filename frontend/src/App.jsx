import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import WhatWeDo from './pages/WhatWeDo';
import Gallaries from './pages/gallaries';
import NavBar from './components/NavBar';
import ScrollToTopButton from './components/ScrollToTopButton ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="pt-[4rem] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#FDFBF6]">  
        {/* Adjusted padding-top to avoid content being hidden behind the fixed NavBar */}
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallaries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
      </div>
      <Footer/>
      <div className="hidden sm:block">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default App;
