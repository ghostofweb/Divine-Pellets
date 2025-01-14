import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carousel = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel;
