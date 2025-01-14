import React, { useState, useRef } from 'react';
import Title from './Title';
import { images } from '../assets/assets';

const ProductGallery = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the sensitivity of the drag
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title Section */}
      <Title
        title="Product Gallery"
        bodyText="Explore our products below."
      />

      {/* Gallery Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-3 cursor-grab pb-4 scrollbar-hide"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          padding: '-0 px', // Optional: Add some padding to the container for a nicer feel
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none w-96 h-96 relative rounded-lg overflow-hidden scroll-snap-align-start" // Adjusted width to 56 for thinner images
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover transition-transform hover:scale-105 hover:opacity-90 duration-300 shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
