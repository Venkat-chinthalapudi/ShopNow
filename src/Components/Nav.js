import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import '../styles/nav.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
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
          <NavLink exact to="/" className="nav-link" activeClassName="active">Shop</NavLink> {/* Use NavLink with activeClassName */}
        </li>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/category" className="nav-link" activeClassName="active">Category</NavLink> {/* Use NavLink with activeClassName */}
        </li>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/cart" className="nav-link" activeClassName="active">Cart</NavLink> {/* Use NavLink with activeClassName */}
        </li>
        <li className="nav-item" onClick={handleNavItemClick}>
          <NavLink to="/contact" className="nav-link" activeClassName="active">Profile</NavLink> {/* Use NavLink with activeClassName */}
        </li>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
