import React, { useState } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const [cartItems, setCartItems] = useState(cart);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: (item.quantity || 0) - 1 } : item
    );

    setCartItems(updatedCart.filter((item) => item.quantity > 0));
  };

  return (
    <div className="Cart">
      <h1 className='t'>Cart item seen here!</h1>
      <h2>CartItems {cartItems.length > 0 && <span className="notification">{cartItems.length}</span>}</h2>
      <div className="cart-container">
        {cartItems.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="img-container">
              <img src={product.image} alt={product.name} className="img" />
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <div className="quantity-controls">
                <button className="B" onClick={() => handleRemoveFromCart(product)}>
                -
                </button>
                <span className="quantity">{product.quantity}</span>
                <button className="B" onClick={() => handleAddToCart(product)}>
                  +
                </button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
