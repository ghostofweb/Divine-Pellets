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

const App = () => {
  return (
    <div>
      <NavBar/>
<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#FDFBF6]">  
 
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallaries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
      </Routes>
      </div>
      <div className='hidden sm:block'>
      <ScrollToTopButton/>
      </div>
      </div>
  );
};

export default App;
