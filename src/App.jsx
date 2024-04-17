import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Nav';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Category from './Components/Category';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Boys from './Components/Category file/Boys';
import Celebrations from './Components/Category file/Celebrations';
import Girls from './Components/Category file/Girls';
import Kids from './Components/Category file/Kids';
import Fashion from './Components/Shopfile/Fashion';
import Fashion1 from './Components/Shopfile/Fashion1';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to Shop if user is logged in, otherwise redirect to Login */}
          <Route path="/" element={<Navigate to={isLoggedIn ? "/shop" : "/login"} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* Protected routes */}
          {isLoggedIn && <Route path="/shop" element={<Shop />} />}
          {isLoggedIn && <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />}
          {isLoggedIn && <Route path="/category" element={<Category addToCart={addToCart} />} />}
          {isLoggedIn && <Route path="/contact" element={<Contact />} />}
          {isLoggedIn && <Route path="/boys" element={<Boys addToCart={addToCart} />} />}
          {isLoggedIn && <Route path="/celebrations" element={<Celebrations addToCart={addToCart} />} />}
          {isLoggedIn && <Route path="/girls" element={<Girls addToCart={addToCart} />} />}
          {isLoggedIn && <Route path="/kids" element={<Kids addToCart={addToCart} />} />}
          {isLoggedIn && <Route path="/fashion" element={<Fashion />} />}
          {isLoggedIn && <Route path="/fashion1" element={<Fashion1 />} />}
        </Routes>
        {/* Display Navbar only if user is logged in */}
        {isLoggedIn && <Navbar />}
      </div>
    </Router>
  );
};

export default App;
