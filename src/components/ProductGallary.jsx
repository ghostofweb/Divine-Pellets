import React, { useEffect, useRef } from 'react';
import Title from './Title';
import { images } from '../assets/assets';

const ProductGallery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let intervalId;

    const cloneImages = () => {
      // Clone the first set of images and append them to the end for infinite scrolling
      const firstSet = slider.querySelectorAll('.image-item');
      firstSet.forEach((img) => {
        const clonedImg = img.cloneNode(true);
        slider.appendChild(clonedImg);
      });
    };

    const scrollGallery = () => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0; // Reset to the start
      } else {
        slider.scrollLeft += 2; // Scroll by 2px (adjust speed as needed)
      }
    };

    cloneImages(); // Clone images after the initial render

    intervalId = setInterval(scrollGallery, 10); // Slow down the scroll interval for smooth animation

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-20">
      {/* Title Section */}
      <Title
        title="Product Gallery"
        bodyText="Explore our products below."
      />

      {/* Gallery Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-3 cursor-grab pb-4"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          whiteSpace: 'nowrap',
          transition: 'scroll-left 0.1s ease', // Smooth scroll transition
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item flex-none w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-lg overflow-hidden scroll-snap-align-start"
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover transition-transform hover:scale-105 hover:opacity-90 duration-300 shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductGallery;
