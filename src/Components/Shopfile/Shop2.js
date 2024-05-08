import React from 'react';
import './shop.css';


// 3 images and buttuns in home screen 

function Shop3() {
  return (
    
    <div className='threeShops'>
      <div className="image-container">
        <img src= "https://img.freepik.com/free-photo/portrait-bright-lady-with-red-lipstick-posing-happily-with-package-while-shopping-pink-background_197531-17613.jpg?t=st=1710938316~exp=1710941916~hmac=7edb1b488dedb7214e56948a9d444585d97392fe65e02e3323cc1dd85e5c7d53&w=740" alt="Boy" className="horizontal-image" />
        <p>ONLY WEAR THINGS THAT FIT </p>
        <button className='click'>Check new </button>  
     </div>
      <div className="image-container">
        <img src="https://img.freepik.com/free-photo/young-man-shop-checking-price-tag-shirt_23-2147968354.jpg?t=st=1710939323~exp=1710942923~hmac=b4023cb2ca5ede931af41a7b32da5d8d3ee160a237a7f138c10a3a15cbb7445a&w=740" alt="Girl" className="horizontal-image" />
        <p>YOUR PROCESS & WORKFLOW ROLE NODEL</p>
        <button className='click'>Check here</button>
      </div>
      <div className="image-container">
        <img src="https://img.freepik.com/free-photo/upset-man-holding-shopping-bags_1170-820.jpg?t=st=1710938348~exp=1710941948~hmac=d83bcc5554af8a34f8a1627ca89df9498339555812f9dccbeb380b495a790650&w=740" alt="Girl" className="horizontal-image" />
        <p>YOUR PROCESS & WORKFLOW ROLE NODEL</p>
        <button className='click'>Check here</button>
      </div>
    </div>
  );
}

export default Shop3;