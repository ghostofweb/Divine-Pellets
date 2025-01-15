import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Gallaries from './pages/Gallaries'; 
import What from './pages/What';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton '
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify styles are loaded
 // Fixed case (matches file name)
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-[4rem] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#FDFBF6]">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallaries/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/what-we-do" element={<What/>} />
        </Routes>
      </div>
      <Footer />
      <div className="hidden sm:block">
        <ScrollToTopButton/>
      </div>
    </div>
  );
};

export default App;
