import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Products', path: '/products' },
    { name: 'What We Do', path: '/whatwedo' }
  ];

  return (
    <nav className="relative">
      <div 
        style={{
          background: 'linear-gradient(to bottom, #2E4A3A, #1A3D33)'
        }}
      >
        <div className="container mx-auto sm:px-[5vw] md:px-[7vw] lg:px-[9vw] px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Fixed size */}
            <Link to="/" className="py-2">
              <img 
                src="/headerlogo.png" 
                alt="Logo" 
                className="w-56 object-contain"
                style={{ height: '85px' }} // Fixed height
              />
            </Link>

            {/* Desktop Navigation - vertically centered */}
            <div className="hidden md:flex items-center space-x-8 h-full">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `relative text-white font-montserrat text-lg transition-colors duration-200 hover:text-[#DFC195] ${isActive ? 'text-[#DFC195]' : ''}`}
                >
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">
                      {link.name}
                      {isActive && <hr className="absolute -bottom-2 w-full border-[#DFC195] border-b-2" />}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button - vertically centered */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? (
                <CloseIcon className="text-[#DFC195]" sx={{ fontSize: 28 }} />
              ) : (
                <MenuIcon className="text-[#DFC195]" sx={{ fontSize: 28 }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
  className={`
    absolute
    top-full // Position it directly below the navbar
    right-0
    w-3/4
    bg-[#1A3D33]
    transition-all
    duration-300
    ease-in-out
    transform
    ${isOpen ? 'block translate-x-0 opacity-100' : 'translate-x-full opacity-0 hidden'}
    md:hidden
    z-50
    shadow-lg
  `}
>
  <div className="flex flex-col py-2">
    {navLinks.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => `
          py-3
          px-6
          text-white
          font-montserrat
          transition-colors
          duration-200
          ${isActive ? 'bg-[#DFC195] text-[#1A3D33]' : 'hover:bg-[#2E4A3A]'}
        `}
      >
        {link.name}
      </NavLink>
    ))}
  </div>
</div>

    </nav>
  );
};

export default NavBar;
