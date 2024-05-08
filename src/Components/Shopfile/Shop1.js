import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './shop.css';


// two images and buttuns in home page 

function Shop1() {
  return (
    <div className='twoimg'>
      <div className="image-container">
        <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-female-trendy-summer-dress-sexy-carefree-blond-woman-posing-near-beige-wall-studio-positive-model-having-fun-indoors-cheerful-happy_158538-27105.jpg" alt="Boy" className="horizontal-image" />
        <p>ONLY WEAR THINGS THAT FIT </p>
        <Link to="/Fashion1"> {/* Use Link to navigate to the Fashion component */}
          <button className='click'>Check here</button>
        </Link>
      </div>
      <div className="image-container">
        <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19391.jpg?t=st=1710408275~exp=1710408875~hmac=1f17b64785d3a433395df3d656af5593509069c7a1854589bc2b0c3ed184c2b2" alt="Girl" className="horizontal-image" />
        <p>YOUR PROCESS & WORKFLOW ROLE MODEL</p>
        <Link to="/Fashion2"> {/* Use Link to navigate to the Fashion component */}
          <button className='click'>Check here</button>
        </Link>
      </div>
    </div>
  );
}

export default Shop1;
