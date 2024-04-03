
import React from 'react';
import Slider from '../Shopfile/Slider';

const Fashion = () => {
  const bannerImages = [
    'https://img.freepik.com/free-photo/excited-shopper-holding-packages-paper-bags-smiling-amused-standing-blue-background_1258-162772.jpg?t=st=1712060758~exp=1712064358~hmac=bceedcbdb7b96ff92d16dfd0ab055419faeabec922b02283b6b555ca7c1d7dc8&w=740',
    'https://img.freepik.com/free-photo/cheerful-lady-standing-with-shopping-bags-smiling-looking-happy-pink-background_1258-122868.jpg?t=st=1712053915~exp=1712057515~hmac=35ebfb34028f0847f79ba6684b965f0d8621d71a6ada10dfad56b5ff7b55ceac&w=740',
    'https://img.freepik.com/free-photo/funky-cool-asian-senior-woman-fashionable-clothes-dancing-while-going-shopping-sales-holdi_1258-162040.jpg?t=st=1712053519~exp=1712057119~hmac=f32b3c60911e5a001369ea0435f6bbf02461de590ade06c104360baff9017eea&w=740'
  ];

  return (
    <div>
      <h1 className=' '>Welcome to Fashion Page</h1>
      <p>This is a page to showcase fashion items.</p>
      <Slider images={bannerImages} />
    </div>
  );
};

export default Fashion;
