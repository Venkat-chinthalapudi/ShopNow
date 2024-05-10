import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/nav.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const toggleCategory = () => {
    setIsCategoryExpanded(!isCategoryExpanded);
  };

  const handleNavItemClick = () => {
    setIsNavExpanded(false); // Close the navbar when a navigation item is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink exact to="/" className="navbar-logo">Logo</NavLink> {/* Use NavLink */}
        <button
          className={`navbar-toggle ${isNavExpanded ? 'active' : ''}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <ul className={`navbar-nav ${isNavExpanded ? 'expanded' : ''}`}>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink exact to="/" className="nav-link" activeClassName="active">Shop</NavLink> 
        </li>
   {/* dropdown */}
      <li className="nav-item dropdown" onMouseEnter={toggleCategory}>
          <NavLink to="/category" className="nav-link dropdown-toggle" style={{ cursor: "pointer" }}>Category</NavLink>
          <ul className={`dropdown-menu ${isCategoryExpanded ? 'show' : ''}`}>
            <li className="dropdown-item">
              <NavLink to="/boys" className="nav-link" activeClassName="active">Boys</NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink to="/girls" className="nav-link" activeClassName="active">Girls</NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink to="/celebrations" className="nav-link" activeClassName="active">Celebrations</NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink to="/kids" className="nav-link" activeClassName="active">Kids</NavLink>
            </li>
          </ul>
       </li>
       
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink> 
        </li>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/Profile" className="nav-link" activeClassName="active">Profile</NavLink> 
        </li>
        <div className="search-box">
          <input type="search" placeholder="Search..." />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
