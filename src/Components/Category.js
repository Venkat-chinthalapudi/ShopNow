import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import img4 from '../Img/man.png';
import img3 from '../Img/girl k.png';   
import img2 from '../Img/boy s .png';
import img1  from '../Img/girl.png';
import '../styles/category.css';
import Footer from './Shopfile/Footer';
// import Boys from './Category file/Boys';




const Category = ({ addToCart }) => {
  const [products] = useState([

    { id: 1, name: "Product 1", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/n/k/6/xxl-casual-full-sleeve-cotton-shirt-for-men-solstice-original-imagwrz6gw6ugg27.jpeg?q=70&crop=false", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-dress/u/t/2/7-8-years-m-c-midi-fuchsiaheart-miss-chief-original-imagmhwzwfxvsvmr.jpeg?q=70&crop=false", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/k/w/z/l-6103-sheetal-associates-original-imagmneh9asfefuz.jpeg?q=70&crop=false", description: "Product 3 Description", price: "₹3999" },
    { id: 4, name: "Product 4", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/d/w/y/l-amnshaq-aqua-renuovo-original-imagwb5zkk2au8us.jpeg?q=70&crop=false", description: "Product 4 Description", price: "₹2899" },
    { id: 5, name: "Product 5", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/o/m/h/xxl-a1-otabu-original-imagq2qj4wq7p3yz.jpeg?q=70&crop=false", description: "Product 5 Description", price: "₹1289" },
    { id: 6, name: "Product 6", image: "https://rukminim2.flixcart.com/image/832/832/ky3b0y80/kids-dress/7/3/o/9-10-years-gf0092-teal-fashion-dream-original-imagaeh3zcg8gpxm.jpeg?q=70&crop=false", description: "Product 6 Description", price: "₹699" },
    { id: 7, name: "Product 7", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-apparel-combo/x/b/r/2-3-years-sp-6-year-grey-ultrina-original-imagqfucnktutw7c.jpeg?q=70&crop=false", description: "Product 7 Description", price: "₹1800  " },
    { id: 8, name: "Product 8", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/c/9/free-new-hsn53-harshiv-enterprise-unstitched-original-imagyajywg8uqtc5.jpeg?q=70&crop=false", description: "Product 8 Description", price: "₹999" },
    { id: 9, name: "Product 9", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgXPXjF6ustWG-nUgP_CKZCRmBW1RZf_8j1SR15IVEjCo99LQ6aQhrWXx8mEuOynxmUslcu5xJp97nTBbNFF4HoWc9sfemZtFYLGbl9EDwlb7T0weKr293kQ", description: "Product 8 Description", price: "₹999" },
    { id: 10, name: "Product 10", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-apparel-combo/u/6/n/3-4-years-fc8515-fastcolors-original-imagmszg5yqcyqgs.jpeg?q=70&crop=false", description: "Product 8 Description", price: "₹999" },
    { id: 1, name: "Product 1", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJNALcW-VlG3PEHNO8lNwYxyyv9jHWS4pApOYAkXwZE43ZJ6UJWyr8570urvf9qmQJ1-zE8_VtrVgxSFk-zI2PgS318HYNg1C5b3KYWyOUD2_M7okuDJmdPhs", description: "Product 1 Description", price: "₹1999" },
    { id: 2, name: "Product 2", image: "https://rukminim2.flixcart.com/image/832/832/l572ufk0/kids-apparel-combo/t/v/i/12-18-months-elegant-design-dress-for-girls-kidz-clothes-original-imagfwne6yb8ju7r.jpeg?q=70&crop=false", description: "Product 2 Description", price: "₹2999" },
    { id: 3, name: "Product 3", image: "https://rukminim2.flixcart.com/image/612/612/l4iscy80/t-shirt/q/l/7/xl-hood-229-checkedshirt-olive-lewel-original-imagfec3vhznxkzd.jpeg?q=70", description: "Product 3 Description", price: "₹3999" },
    { id: 4, name: "Product 4", image: "https://rukminim2.flixcart.com/image/832/832/l4yi7bk0/shirt/e/r/w/xl-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imagfqvt67zfhk7f.jpeg?q=70&crop=false", description: "Product 4 Description", price: "₹2899" },
    { id: 5, name: "Product 5", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/g/x/a/m-premium-fabric-sport-short-yazole-original-imagzzz8adwtjvzt.jpeg?q=70&crop=false", description: "Product 5 Description", price: "₹1289" },
    { id: 6, name: "Product 6", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/bedsheet/v/p/n/fit-pink-white-dot-1-fit-pink-white-dot-fitted-elastic-home-original-imagpy5d94tvunpw.jpeg?q=70&crop=false", description: "Product 6 Description", price: "₹699" },
    { id: 7, name: "Product 7", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-apparel-combo/x/b/r/2-3-years-sp-6-year-grey-ultrina-original-imagqfucnktutw7c.jpeg?q=70&crop=false", description: "Product 7 Description", price: "₹1899" },
    { id: 8, name: "Product 8", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/b/p/4-5-years-kids-r-t-w-saree-dream-clouds-unstitched-original-imagz27ngmubduyt.jpeg?q=70&crop=false", price: "₹9.99" },
    { id: 9, name: "Product 9", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSgXPXjF6ustWG-nUgP_CKZCRmBW1RZf_8j1SR15IVEjCo99LQ6aQhrWXx8mEuOynxmUslcu5xJp97nTBbNFF4HoWc9sfemZtFYLGbl9EDwlb7T0weKr293kQ", description: "Product 8 Description", price: "₹999" },
    { id: 10, name: "Product 10", image: "https://rukminim2.flixcart.com/image/832/832/kvr01ow0/shirt/b/t/e/44-14625144-roadster-original-imag8kpa487sfqhg.jpeg?q=70&crop=false", description: "Product 8 Description", price: "₹999" },
  ]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <div className="category">
      <div className='products'>
        <h2 className='image-text'>Choose Category</h2>
      </div>
      <div className="slider">       
        <div className="image-container">
        <Link to="/Girls">
          <img src={img1} alt="Image 1" className="circle-image" />
         </Link>
          <p>GIRLS</p>
        </div>
        <div className="image-container">
        <Link to="/Kids">
          <img src={img2} alt="Image 2" className="circle-image" />
         </Link>
          <p>KIDS</p>
        </div>
        <div className="image-container">
          <Link to="/Celebrations">
          <img src={img3} alt="Image 3" className="circle-image" />
        </Link>
          <p>CELEBRATIONS</p>
        </div>
        <div className="image-container">
        <Link to="/Boys">
          <img src={img4} alt="Image 4" className="circle-image" />
        </Link>
          <p>BOYS</p>
        </div>
      </div>
      <div className="headding">
           <h1 style={{ marginBottom: "-10%" }}>Look Your Styles</h1>
      </div>
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
      <div className='footer'>
         <Footer/>
      </div>
    </div>
  );
};

export default Category;
