import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/nav.css';
import logoImage from '../Img/logoooo.png'; 

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const toggleCategory = () => {
    setIsCategoryExpanded(!isCategoryExpanded);
  };

  const handleNavItemClick = () => {
    setIsNavExpanded(false); // Close the navbar when a navigation item is clicked
  };

  const handleProfileMouseEnter = () => {
    setIsProfileExpanded(true);
  };

  const handleProfileMouseLeave = () => {
    setIsProfileExpanded(false);
  };

  return (
    <nav className="navbar">
      <div class='loo'>
    <NavLink exact to="/" className="navbar-logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </NavLink>   
        </div>
      <div className="navbar-brand">
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
        {/* Category Dropdown */}
        <li className="nav-item dropdown" onMouseEnter={toggleCategory} onMouseLeave={toggleCategory}>
          <NavLink to="/category" className="nav-link dropdown-toggle" style={{ cursor: "pointer" }}>Category</NavLink>
          <ul className={`dropdown-menu ${isCategoryExpanded ? 'show' : ''}`}>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/boys" className="nav-link" activeClassName="active">Boys</NavLink>
            </li>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/girls" className="nav-link" activeClassName="active">Girls</NavLink>
            </li>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/celebrations" className="nav-link" activeClassName="active">Celebrations</NavLink>
            </li>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/kids" className="nav-link" activeClassName="active">Kids</NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink> 
        </li>
        {/* Profile Dropdown */}
        <li className="nav-item dropdown" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
          <NavLink to="/profile" className="nav-link dropdown-toggle" style={{ cursor: "pointer" }}>Profile</NavLink>
          <ul className={`dropdown-menu ${isProfileExpanded ? 'show' : ''}`}>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/Profile" className="nav-link" activeClassName="active">Signin</NavLink>
            </li>
            <li className="dropdown-item" onClick={handleNavItemClick}>
              <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
            </li>
          </ul>
        </li>
        <div className="search-box">
          <input type="search" placeholder="Search..." />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
