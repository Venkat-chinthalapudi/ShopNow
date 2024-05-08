import React, { useState, useEffect } from 'react';
import './shop.css';


// banner in this home page 



function Shop0() {
  // Array of image links
  const imageLinks = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-060524-AkshayaTritiya-P1-Giva-Silverwala-MIN50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-060524-AkshayaTritiya-P2-Palmonas-UPTO35.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-080524-DailyBanner-Z6-P1-GAS-Gant-UPTO50.jpg"
    // Add more image links as needed
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
    <div className="background">
      <h1 className='headding'>Tap Into Prosperity</h1>
      <div className='box'>
        {/* Display the current image */}
        <img src={imageLinks[currentImageIndex]} alt="Product" className="product-image" />  
      </div>
    </div>
  );
}

export default Shop0;
