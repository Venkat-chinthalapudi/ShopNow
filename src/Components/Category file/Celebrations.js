import React, { useState } from 'react';
import'./Stytles/boys.css';


const  Celebrations = ({ addToCart }) => {
  const [products] = useState([
   
    { id: 1, name: "Product 1", image: "https://qph.cf2.quoracdn.net/main-qimg-4e8d1410a0b30c4f26d018fd9cf79d87", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://i.pinimg.com/736x/ed/e9/88/ede988663efc77647b43eca39bd2d6e5.jpg", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://glamourental.com/cdn/shop/articles/Diwali_Celebration.webp?v=1690465671", description: "Product 3 Description", price: "₹1599" },
    { id: 4, name: "Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqw-v7-HtyTgv7HzEffIrqBP5flFG5DKvw2D2vyppimIuoexkyPFjPGfQPmMwqDOZDyow&usqp=CAU", description: "Product 4 Description", price: "₹2499" },
    { id: 5, name: "Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XjmJHI6IYdqn50gDzSeAWKckqXGapilAMQ&usqp=CAU", description: "Product 5 Description", price: "₹6589" },
    { id: 6, name: "Product 6", image: "https://i.pinimg.com/236x/64/d5/d6/64d5d6f6bf84202423df542c058850b4.jpg", description: "Product 6 Description", price: "₹4199" },
    { id: 7, name: "Product 7", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70&crop=false", description: "Product 7 Description", price: "₹3499" },
    { id: 8, name: "Product 8", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlCqdrfMupGbgR7fQ6WGbv7QnnWd3auulTw&usqp=CAU", description: "Product 8 Description", price: "₹3750" },
    { id: 9, name: "Product 9", image: "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TasvaDay123425_500x.jpg?v=1657696092", description: "Product 9 Description", price: "₹2529" },
    { id: 10, name: "Product 10", image: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/28142128/Untitled-design-2-16.jpg", description: "Product 10 Description", price: "₹4199" },
    { id: 11, name: "Product 11", image: "https://cdn.shopify.com/s/files/1/0459/1429/2391/files/35_b2b61946-b43d-40b2-9823-1ba36e4e8307_480x480.png?v=1698649627", description: "Product 11 Description", price: "₹2299" },
    { id: 12, name: "Product 12", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IFSnetq00AmZfctIgn_qcuE1KjLPBR1JKYFXppE1sqx2Xt0-w_JFPGIrUpuWEA0Cjjk&usqp=CAU", description: "Product 12 Description", price: "₹2089" },
    { id: 13, name: "Product 13", image: "https://www.kreeva.com/blog/wp-content/uploads/2021/12/New-Year-Long-Kurti.jpg", description: "Product 13 Description", price: "₹3499" },
    { id: 14, name: "Product 14", image: "https://images.meesho.com/images/products/204307799/s8zxk_512.webp", description: "Product 14 Description", price: "₹3499" },
    { id: 15, name: "Product 15", image: "https://qph.cf2.quoracdn.net/main-qimg-279edd2f358ab48ea99f960546d2041b-lq", description: "Product 15 Description", price: "₹2859" },
    { id: 16, name: "Product 16", image: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_WeddingChecklist_D_revised_11-08-2023-12-37?$WT_Blogs_Tiles_D%26M$", description: "Product 16 Description", price: "₹4099" },
    { id: 17, name: "Product 17", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yCqTErlkfvmzn0P5b2HTjN_XtD3RbN4afQ&usqp=CAU", description: "Product 17 Description", price: "₹3959" },

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

export default Celebrations;
