import React from 'react';
import { Link } from 'react-router-dom'; // To add navigation links

const NavBar = () => {
  return (
    <div>
      {/* NavBar with Gradient Background */}
      <div
        style={{
          background: 'linear-gradient(to top, #2E4A3A, #1A3D33)', // Green gradient background
        }}
      >
        <div className='sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-auto flex items-center justify-between px-8 text-white'>
        {/* Logo or Brand Name */}
        <div className="text-xl font-header">
          <Link to="/" className="text-soft-gold hover:text-white transition-colors">
            <img src="headerlogo.png" alt="" srcset="" className='w-56'/>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/gallery" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            Gallery
          </Link>
          <Link 
            to="/products" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            Products
          </Link>
          <Link 
            to="/whatwedo" 
            className="hover:text-[#C6B57E] transition-colors"
          >
            What We Do
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
