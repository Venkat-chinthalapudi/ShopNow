import React, { useState, useEffect } from 'react';
import './shop.css';


const Fashion2 = () => {
  const imageLinks = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-08052024-UHPHER-Z15-p4-BUDAJEANS-FYREROSE-MIN50.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-08052024-UHPHER-Z15-p3-FURJADEN-ITLUGGAGE-UPTO60.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-08052024-UHPHER-Z15-p2-ALDO-DUNELONDN-UPTO50.jpg'
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

        <h2 className='headding'>Girl's  Fashion</h2>
        {/* Display the current image */}
        <img src={imageLinks[currentImageIndex]} alt="Product" className="product-image" />  
      </div>
    </div>
  );
}

export default Fashion2;
