import React, { useState, useEffect } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const groupedCartItems = cart.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);

    setCartItems(groupedCartItems);
  }, [cart]);

  const handleAddToCart = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    setCartItems(updatedCart);
  };

  const handleBuyProduct = (product) => {
    alert('Product added to your order!');
  };

  return (
    <div className="Cart">
      <h1 className="title">Cart Items Here!</h1>
      <h2 className="title"> Cart Items {cartItems.length > 0 && <span className="notification">{cartItems.length}</span>}
      </h2>
      <div className="cart-container">
        {cartItems.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="img-container">
              <img src={product.image} alt={product.name} className="img" />
            </div>
            <div className="product-info">
              <div className="id-and-buttons">
                <p className="product-id">ID: {product.id}</p>
                <div className="quantity-controls">
                  <button className="control-button" onClick={() => handleRemoveFromCart(product)}>
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button className="control-button" onClick={() => handleAddToCart(product)}>
                    +
                  </button>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(product)}>
                Remove from Cart
              </button>
              <button className="buy-button" onClick={() => handleBuyProduct(product)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;