import React, { useState } from 'react';
import './App.css'; 
import Navbar from './Components/Nav'; 
import Shop from './Components/Shop'; 
import Cart from './Components/Cart'; 
import Category from './Components/Category';
import Contact from './Components/Contact'; 
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'; 
import Boys from './Components/Category file/Boys';
import Celebrations from './Components/Category file/Celebrations';
import Girls from './Components/Category file/Girls';
import Kids from './Components/Category file/Kids';
import Fashion from './Components/Shopfile/Fashion';
import Fashion1 from './Components/Shopfile/Fashion1';


const App = () => {
  // Define cart, setCart, and addToCart functions
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Shop />} />
                  {/* Pass cart, addToCart, and removeFromCart to Cart and Category components */}
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/category" element={<Category addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/boys" element={<Boys addToCart={addToCart}/>} />
          <Route path="/celebrations" element={<Celebrations addToCart={addToCart}/>}/>
          <Route path="/girls" element={<Girls addToCart={addToCart}/>}/>
          <Route path="/kids" element={<Kids addToCart={addToCart}/>}/>
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion1" element={<Fashion1 />} />



        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
