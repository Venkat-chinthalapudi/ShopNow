import React, { useState, useEffect } from 'react';
import './shop.css';


    const AddOffeer = () => {
        const imageLinks = [
          'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07052024-LA-Z20-P5-Baggit-Lavie-Upto70.jpg',
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
    <div className='box'>
    <h1 className='headding'> Accessories</h1>
    {/* Display the current image */}
    <img src={imageLinks[currentImageIndex]} alt="Product" className="product-image" />  
    </div>
</div>
);
}

export default AddOffeer; 

