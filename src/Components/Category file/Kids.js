import React, { useState } from 'react';
import'./Stytles/boys.css';


const  Kids = ({ addToCart }) => {
  const [products] = useState([
   
    { id: 1, name: "Product 1", image: "https://m.media-amazon.com/images/I/81+NzvgsL9L._AC_UY1100_.jpg", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS525jOG_WJ-IiOePT91BBotLImNuqkNjovupkMcXutVesVjYAxRMcj4RcMXWe9xEvai10&usqp=CAU", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://i.pinimg.com/736x/ff/46/d7/ff46d73e5c9fb9810c970f0a8ffb1713.jpg", description: "Product 3 Description", price: "₹1599" },
    { id: 4, name: "Product 4", image: "https://i.pinimg.com/564x/a8/aa/4c/a8aa4cb08316516a8819e07edb290b75.jpg", description: "Product 4 Description", price: "₹2499" },
    { id: 5, name: "Product 5", image: "https://i.pinimg.com/736x/a9/2f/fc/a92ffcca881ff788253651fb1c05b643.jpg", description: "Product 5 Description", price: "₹6589" },
    { id: 6, name: "Product 6", image: "https://i.pinimg.com/736x/ec/9d/c3/ec9dc30cf187841018e10b15bec754d4.jpg", description: "Product 6 Description", price: "₹4199" },
    { id: 7, name: "Product 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_cPY93zdktkRMYIQTquKWC02PEcUuBAoZS9YWlhy7kqzsbVpFkzp5ODIYrasmFVuh0M&usqp=CAU", description: "Product 7 Description", price: "₹3499" },
    { id: 8, name: "Product 8", image: "https://media.istockphoto.com/id/524161848/photo/portrait-of-a-cute-little-girl-in-fashionable-clothes.jpg?s=612x612&w=0&k=20&c=tRrXXHXvcpYOzWew65Z8wcPOIARub29TJd28-McR42Y=", description: "Product 7 Description", price: "₹3750" },
    { id: 9, name: "Product 9", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKpKve5YCDDGQ3B1Urg6P_aaOg3XfDxUF9wdHI58rOKTXtE55E-SY_Xd2ibwX34gh0DKk4SCloFitqjzbOFOxoGAont2KXpQL86O8vyWmERKn3ITs_srAq", description: "Product 7 Description", price: "₹2529" },
    { id: 10, name: "Product 10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2XNBNjCl0nacSfyMC3x55DXCERcfM_y2FrVcvcAbEw&s", description: "Product 7 Description", price: "₹4199" },
    { id: 11, name: "Product 11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitzLG50I_pTDwm5rGDCEPzLO18Ea2tTP-VuCOwBekkXfWo91dPPEsxEIgQafVPsJqML8&usqp=CAU", description: "Product 7 Description", price: "₹2299" },
    { id: 12, name: "Product 12", image: "https://i0.wp.com/therachelwhatever.com/wp-content/uploads/2014/07/photo-3-12.jpg?ssl=1", description: "Product 7 Description", price: "₹2089" },
    { id: 13, name: "Product 13", image: "https://m.media-amazon.com/images/I/61eMbRkjGyL._AC_UY1100_.jpg", description: "Product 7 Description", price: "₹3499" },
    { id: 14, name: "Product 14", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTt1LXKZDmiAwBWOyh-XIqpTpGCOP5gkc4mQ5NBPEi8Wm5O_-aF5J0lrwm0uKN4vuv3mrsHPJq4F8ir7PJXMwEnRo88h45CL_STpAod6_sUbpjjNNpdFBgiIg", description: "Product 7 Description", price: "₹3499" },
    { id: 15, name: "Product 15", image: "https://i.pinimg.com/236x/e8/97/1a/e8971a94499e47c1908ac19c1a2037a4.jpg", description: "Product 7 Description", price: "₹2859" },
    { id: 16, name: "Product 16", image: "https://i.pinimg.com/236x/5e/6d/b1/5e6db15e0b02853fbf49b1e881b8f3c4.jpg", description: "Product 7 Description", price: "₹4099" },
    { id: 17, name: "Product 17", image: "https://i.pinimg.com/736x/c9/38/88/c93888d7168dec8ffae5147888f0e747.jpg", description: "Product 7 Description", price: "₹3959" },

  ]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='more-products'>
      {products.map((product) => (
        <div key={product.id} className="id">
          <img src={product.image} alt={product.name} className="horizontal-image" />
          <p>{product.description}</p>
          <p className='price'>{product.price}</p>
          <button className='C' onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Kids;
