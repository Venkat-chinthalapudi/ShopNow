import React, { useState } from 'react';
import'./Stytles/boys.css';


const  Girls = ({ addToCart }) => {
  const [products] = useState([
   
    { id: 1, name: "Product 1", image: "https://images.meesho.com/images/products/130869482/xl8qe_512.webp", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://i.pinimg.com/474x/87/a8/ae/87a8ae1c30b58408349f7cb95965b762.jpg", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://i.pinimg.com/474x/e4/25/46/e42546e2cce71f4ab29701683ca482d2.jpg", description: "Product 3 Description", price: "₹1599" },
    { id: 4, name: "Product 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQQnJu6Sf3m0PTWpqnBf2y-pAWxAIbzzbKA&usqp=CAU", description: "Product 4 Description", price: "₹2499" },
    { id: 5, name: "Product 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIc0MIi0QsXr-mOj84kxub17DApsXG5NtVW0XkoQHzNJ6ixH5rW1PPR8kUO5gPm5YxQY&usqp=CAU", description: "Product 5 Description", price: "₹6589" },
    { id: 6, name: "Product 6", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/4/r/n/xl-mk-chex-tel-1-krishmayatoz-original-imaghfh3xfj8ghjw.jpeg?q=20&crop=false", description: "Product 6 Description", price: "₹4199" },
    { id: 7, name: "Product 7", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/s/b/w/xl-kurti-52-bottel-green-xl-virhan-original-imagntvretggdzzy.jpeg?q=20&crop=false", description: "Product 7 Description", price: "₹3499" },
    { id: 8, name: "Product 8", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/3/c/z/l-khu0412-l-khumoaa-original-imagkmajbzhn9d4h.jpeg?q=20&crop=false", description: "Product 7 Description", price: "₹3750" },
    { id: 9, name: "Product 9", image: "https://rukminim2.flixcart.com/image/850/1000/kwtkxow0/kurta/9/p/u/l-flower-0808-foxdx-original-imag9ex7ecgb6fjv.jpeg?q=90&crop=false", description: "Product 7 Description", price: "₹2529" },
    { id: 10, name: "Product 10", image: "https://rukminim2.flixcart.com/image/850/1000/kj61gnk0-0/dress/f/5/k/m-knee-length-hari-krishna-fashion-original-imafyskybyadwyfb.jpeg?q=90&crop=false", description: "Product 7 Description", price: "₹4199" },
    { id: 11, name: "Product 11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcshnXUa9JuSGx3AGUOfNN-iF1J3-1jI00g&usqp=CAU", description: "Product 7 Description", price: "₹2299" },
    { id: 12, name: "Product 12", image: "https://theindianethnicco.com/cdn/shop/files/153_db4fecd6-6e56-4155-8cbb-8fdea0d2bf7e_600x.jpg?v=1703752027", description: "Product 7 Description", price: "₹2089" },
    { id: 13, name: "Product 13", image: "https://theindianethnicco.com/cdn/shop/files/144_d90eeef5-28cb-49cb-9114-91ad60d298e1_600x.jpg?v=1706793347", description: "Product 7 Description", price: "₹3499" },
    { id: 14, name: "Product 14", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-ethnic-set/f/k/k/12-13-years-kids-018-nivudi-original-imaggfzaxyxhafh8.jpeg?q=90&crop=false", description: "Product 7 Description", price: "₹3499" },
    { id: 15, name: "Product 15", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Sk_8xNMTqubUZ1t6fvTuRa-ReSMmH0IGDg&usqp=CAU", description: "Product 7 Description", price: "₹2859" },
    { id: 16, name: "Product 16", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7MPSmACuYswcmd0xY-5n2WpknZ7ssuJYOsaJD2Pt6If9b6StTajcRef3Ms-pezSn9Lo&usqp=CAU", description: "Product 7 Description", price: "₹4099" },
    { id: 17, name: "Product 17", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqRp_DdRsfD47pN8CgEEv5gy3MrEI82rk9CJEPH9QEQdnN6a_QlvFpeT8NHYrL9Upon4&usqp=CAU", description: "Product 7 Description", price: "₹3959" },

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

export default Girls;
