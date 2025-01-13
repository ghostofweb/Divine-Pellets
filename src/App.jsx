import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import WhatWeDo from './pages/WhatWeDo';
import Gallaries from './pages/gallaries';
import NavBar from './components/NavBar';

const App = () => {
  return (
<div>  
      <NavBar /> 
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallaries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
      </Routes>
      </div>
  );
};

export default App;
