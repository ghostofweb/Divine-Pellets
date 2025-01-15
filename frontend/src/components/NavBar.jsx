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
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: 'linear-gradient(to bottom, #2E4A3A, #1A3D33)',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start relative">
          {/* Mobile Menu Button - Left Side */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 absolute left-0"
          >
            {isOpen ? (
              <CloseIcon className="text-[#DFC195]" sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon className="text-[#DFC195]" sx={{ fontSize: 28 }} />
            )}
          </button>

          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <Link to="/" className="py-2 pl-3 mx-auto md:mx-0 flex justify-center">
            <img
              src="/headerlogo.png"
              alt="Logo"
              className="w-56 object-contain"
              style={{ height: '85px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex pr-10 items-center space-x-8 h-full ml-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-white font-montserrat text-lg transition-colors duration-200 hover:text-[#DFC195] ${
                    isActive ? 'text-[#DFC195]' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="flex flex-col items-center">
                    {link.name}
                    {isActive && (
                      <hr className="absolute -bottom-2 w-full border-[#DFC195] border-b-2" />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full ledt-0 w-3/4 bg-[#1A3D33] transition-all duration-300 ease-in-out transform ${
          isOpen ? 'block translate-x-0 opacity-100' : 'translate-x-full opacity-0 hidden'
        } md:hidden z-50 shadow-lg`}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-3 px-6 text-white font-montserrat transition-colors duration-200 ${
                  isActive ? 'bg-[#DFC195] text-[#1A3D33]' : 'hover:bg-[#2E4A3A]'
                }`
              }
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