import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setVisible(!visible);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
    setVisible(false);     // Hide the dropdown
  };

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when the route changes
    setVisible(false);     // Hide the dropdown when the route changes
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Gallaries', path: '/gallery' },
    { name: 'What We Do', path: '/whatwedo' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(to top, #2E4A3A, #1A3D33)', // Green gradient background
        }}
        className="text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-4 flex items-center justify-between z-50 relative font-montserrat"
      >
        {/* Logo */}
        <div className="text-xl font-header">
          <Link to="/" className="text-soft-gold hover:text-white transition-colors">
            <img src="headerlogo.png" alt="Logo" className="w-56" />
          </Link>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden sm:flex space-x-4 sm:text-sm md:space-x-4 md:text-md lg:space-x-6 lg:text-lg xl:space-x-8 text-xl ">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={index} className="relative">
                <NavLink
                  onClick={() => setVisible(false)}
                  className={`py-2 px-2 transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'text-gold-light'
                      : 'hover:text-gold-light hover:scale-105'
                  }`}
                  to={link.path}
                >
                  {link.name}
                </NavLink>
                {isActive && (
                  <hr className="border-none h-[1.5px] bg-gold-light transition-colors duration-200 ease-in-out" />
                )}
              </div>
            );
          })}
        </div>

        {/* Menu Icon (Mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className={`transform transition-transform duration-500 ${isMenuOpen ? 'rotate-360' : 'rotate-0'}`}
          >
            {isMenuOpen ? (
              <CloseIcon fontSize="large" className="text-[#DFC195]" />
            ) : (
              <MenuIcon fontSize="large" className="text-[#DFC195]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-21 right-0 bg-[#1A3D33] text-white transition-all duration-300 ease-in-out ${visible ? 'w-3/4 h-auto p-3' : 'w-0 h-0'}`}
      >
        <div
          onClick={closeMenu}  // Close the menu and reset the icon
          className="flex items-center gap-4 p-3 cursor-pointer"
        >
          <ArrowBackIcon sx={{ fontSize: { xs: '1.7rem', sm: '2rem', md: '2.2rem' } }} />
          <p className="text-xl">Back</p>
        </div>
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <NavLink
              key={index}
              onClick={closeMenu}  // Close the menu on link click
              className={`flex flex-col py-2 pl-6 transition-all duration-300 ease-in-out ${
                isActive
                  ? ' text-gold-base'
                  : ' hover:scale-105 hover:text-gold-light'
              }`}
              to={link.path}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
