import React from 'react';
import Slider from '../Shopfile/Slider';

const Fashion1 = () => {
  const bannerImages = [
    'https://img.freepik.com/freehttps://img.freepik.com/free-photo/front-view-young-male-mask-holding-sale-writing-yellow-photo-health-covid-coronavirus-pandemic-sale-colors_140725-109700.jpg?t=st=1712063092~exp=1712066692~hmac=b01fabdd5168420ddfa20daffa900fdc1a1d9877f06204d9041cb4b2c38e42ba&w=740',
    'https://img.freepik.com/free-photo/front-view-young-male-holding-writing-yellow-background_140725-103844.jpg?t=st=1712063152~exp=1712066752~hmac=2b0fd7f8780734b784f996cb4c4774c7a2afd9650d3f8662a8988b75b6b143fe&w=740',
    'https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-after-shopping-yellow-background-model-gift-new-year-present-xmas-color_140725-139760.jpg?t=st=1712063200~exp=1712066800~hmac=46f06886e65afe1e761113718d3a9774fb126180676fb0ebd62bf9c0650bfbbc&w=740'
  ];

  return (
    <div>
      <h1 className=' '>Welcome to Fashion Page1</h1>
      <p>This is a page to showcase fashion items1.</p>
      <Slider images={bannerImages} />
    </div>
  );
};

export default Fashion1;
