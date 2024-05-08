import React, { useState, useEffect } from 'react';
import './shop.css';

const Fashion1 = () => {
  const imageLinks = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-080524-Forhim-Z11-P4-ADIDAS-PUMA-MIN40.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-080524-Forhim-Z11-P5-TommyHilfiger-Ck-Upto50.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-080524-Forhim-Z11-P1-Titan-TommyHilfiger-UPTO60.jpg'
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
  };

  // Automatically advance to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Banner">
         <h1 className='headding'>Tap Into Prosperity</h1>
      <div className='box'>

        <h2 className='hedding'>Man's The Fashion</h2>
        {/* Display the current image */}
        <img src={imageLinks[currentImageIndex]} alt="Product" className="product-image" />  
      </div>
    </div>
  );
}

export default Fashion1;
