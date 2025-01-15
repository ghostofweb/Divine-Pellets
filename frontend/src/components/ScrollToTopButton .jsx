import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {  // Show the button after scrolling 300px down
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to top
    });
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IconButton
      onClick={scrollToTop}
      color="primary"
      aria-label="scroll to top"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
        display: isVisible ? 'block' : 'none',
        transition: 'opacity 0.3s ease-in-out',
        opacity: isVisible ? 1 : 0, // Fade in/out
        width: 56,  // Square box width
        height: 56, // Square box height
        backgroundColor: '#A3D9A5', // Light Green background
        borderRadius: '8px', // Slightly rounded corners
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Shadow effect
        '&:hover': {
          backgroundColor: '#8CC98B', // Darker green on hover
        },
      }}
    >
      <ArrowUpwardIcon sx={{ fontSize: 30, color: '#fff' }} />
    </IconButton>
  );
};

export default ScrollToTopButton;
