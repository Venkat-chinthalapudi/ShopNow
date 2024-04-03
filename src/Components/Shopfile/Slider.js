
import React, { useState, useEffect } from 'react';
import '../Shop'; // Import CSS file for styling

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);      // dependency Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="prev-btn">&#10094;</button>
      <button onClick={nextSlide} className="next-btn">&#10095;</button>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {index === currentIndex && <img src={image} alt={`Slide ${index}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
