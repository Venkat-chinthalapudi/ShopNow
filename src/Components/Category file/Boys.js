import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'./Stytles/boys.css';
import { FaArrowLeft } from 'react-icons/fa';


const Boys = ({ addToCart }) => {
   
  const navigate = useNavigate(); // Initializing useHistory hook

  const [products] = useState([
   
    { id: 1, name: "Product 1", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/n/k/6/xxl-casual-full-sleeve-cotton-shirt-for-men-solstice-original-imagwrz6gw6ugg27.jpeg?q=70&crop=false", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://i.pinimg.com/originals/ec/85/d1/ec85d1aa08a6194d31542066b2e270dc.jpg", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://i.pinimg.com/474x/53/76/b0/5376b0dc53dcb9b4c4f07c630b756da4.jpg", description: "Product 3 Description", price: "₹1599" },
    { id: 4, name: "Product 4", image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1749040/2017/3/16/11489663497638-INVICTUS-Men-Grey-Self-design-Slim-Fit-Formal-Trousers-6741489663497415-1.jpg", description: "Product 4 Description", price: "₹2499" },
    { id: 5, name: "Product 5", image: "https://www.beyoung.in/api/cache/catalog/products/shirt_squre_image_update_14_3_2022/pista_green_cotton_solid_shirts_for_men_base_13_05_2023_700x933.jpg", description: "Product 5 Description", price: "₹6589" },
    { id: 6, name: "Product 6", image: "https://media.istockphoto.com/id/1034283778/photo/smiling-young-casual-man-holding-a-tablet.jpg?s=612x612&w=is&k=20&c=WyIfCK04-qzXF3CvpJJPctqv3xKxvQgE4ltXxFruKh8=", description: "Product 6 Description", price: "₹4199" },
    { id: 7, name: "Product 7", image: "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg", description: "Product 7 Description", price: "₹3499" },
    { id: 8, name: "Product 8", image: "https://formalcue.com/cdn/shop/products/WhatsAppImage2023-11-24at11.08.20AM_2_1_c7708586-99ad-4ebd-8839-9bc88e5229b3.jpg?v=1708943099&width=493", description: "Product 7 Description", price: "₹3750" },
    { id: 9, name: "Product 9", image: "https://frenchcrown.in/cdn/shop/files/12129-WCC_1_763a10c6-8a64-438d-ae4b-72800d7407f8.jpg?v=1709179226&width=600", description: "Product 7 Description", price: "₹2529" },
    { id: 10, name: "Product 10", image: "https://sslimages.shoppersstop.com/sys-master/images/hae/h53/26465727414302/S21182FSAGD2GN_GREEN_alt1.jpg_2000Wx3000H", description: "Product 7 Description", price: "₹4199" },
    { id: 11, name: "Product 11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3X__42LeWz6UPC5F0ELxEtzaR79jkA3N_Q&usqp=CAU", description: "Product 7 Description", price: "₹2299" },
    { id: 12, name: "Product 12", image: "https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/seafoam_green_chinos_for_men_base_05_06_2023_400x533.jpg", description: "Product 7 Description", price: "₹2089" },
    { id: 13, name: "Product 13", image: "https://m.media-amazon.com/images/I/61eMbRkjGyL._AC_UY1100_.jpg", description: "Product 7 Description", price: "₹3499" },
    { id: 14, name: "Product 14", image: "https://images.meesho.com/images/products/204307799/s8zxk_512.webp", description: "Product 7 Description", price: "₹3499" },
    { id: 15, name: "Product 15", image: "https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_400x533.jpg", description: "Product 7 Description", price: "₹2859" },
    { id: 16, name: "Product 16", image: "https://images.bewakoof.com/utter/content/2557/content_6.jpg", description: "Product 7 Description", price: "₹4099" },
    { id: 17, name: "Product 17", image: "https://m.media-amazon.com/images/I/51VWVX52b2L._AC_UY1100_.jpg", description: "Product 7 Description", price: "₹3959" },

  ]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const navigateToCategory = () => {
    navigate('/Category'); // Navigating back to the category page
  };

  return (
    <div className='more-products'>
      <div className="back-button" onClick={navigateToCategory}>
        <FaArrowLeft size={24} /> {/* Displaying the left arrow icon */}
      </div>
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

export default Boys;