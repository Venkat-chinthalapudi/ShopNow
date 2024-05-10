import React from 'react';
import '../styles/shop.css';
import img5 from '../Img/img5.png'
import img4 from '../Img/man.png';
import img3 from '../Img/girl k.png';   
import img2 from '../Img/boy s .png';
import img1  from '../Img/girl.png';
import Home1 from './Shopfile/Shop1';
import Add0 from './Shopfile/Shop0';
import Add1 from './Shopfile/AddOffer';
import Home2 from './Shopfile/Shop2';
import { Link } from 'react-router-dom';
import Footer from './Shopfile/Footer';

const Main = () => {
  return (

<div className="container"> 
  <div className="home">
      <img src={img5} alt="Welcome" />
      <div className="image-text">
      <h1 className='M'>Welcome to Our Website!</h1>
      <p>Excuse me, could you point me in the direction of specific item ?</p>
      <button className='click'>Check here</button>
   </div>
  </div>
  {/* Add like a offers */}
    <div className='adds'>
    <Add1/>
   </div>
    

{/* sliders images in catrgory wise */}
   <h4 className='text-center'>Shop with a list</h4>
     <div className="slider">       
        <div className="image-container">
        <Link to="/Girls">
          <img src={img1} alt="Image 1" className="circle-image" />
         </Link>
          <p>GIRLS</p>
        </div>
        <div className="image-container">
        <Link to="/Kids">
          <img src={img2} alt="Image 2" className="circle-image" />
        </Link>
          <p>KIDS</p>
        </div>
        <div className="image-container">
        <Link to="/Celebrations">
          <img src={img3} alt="Image 3" className="circle-image" />
        </Link>
          <p>CELBARTIONS</p>
        </div>
        <div className="image-container">
        <Link to="/Boys">
          <img src={img4} alt="Image 4" className="circle-image" />
        </Link>
       <p>BOYS</p>
        </div>
      </div>

      {/*  2 products  */}
    <div className='twoshop'>
         <Home1/>
    </div>

     {/* offers displays  */}
    <div className='search'>
         <Add0/>
    </div>
    <div className='headding'>
      <h1>popular</h1>
    </div>

   <div className='threeshop'>
         <Home2/>
   </div>
   
   <div className='Footer'>
         <Footer/>
   </div>
 </div>
    
  );
};

export default Main;
