import React from 'react';
import './shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the right arrow icon

function Shop0() {
  return (
    <div className="background">
      <div className='box'>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter email"
          />
          <div className="search-icon"> {/* Use a div for the search icon */}
            <FontAwesomeIcon icon={faArrowRight} /> {/* Use the right arrow icon */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop0;
