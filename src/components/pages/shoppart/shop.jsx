import React, { useRef } from 'react';
import Hero from '../../Heropart/hero';
import Popular from '../../popularpart/popular';
import Newcollection from '../../newcollectionspart/newcollection';
import Slider from '../../sliderpart/slider';
import Womanslider from '../../sliderpart/womanslider/womanslider';
import Menslider from '../../sliderpart/Men slider/mslider';
import Swiper from '../../swiperpart/swiper';
import Womanswiper from '../../swiperpart/womanswiper';
import Bodyimg from '../../displayflex/displayflexbox';

const Shop = () => {
  const sliderRef = useRef(null); 

  const scrollToSlider = () => {
    sliderRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-white'>
      <Hero scrollToSection={scrollToSlider} />
      <div ref={sliderRef}>
        <Slider />
      </div>
      <Swiper />
      <Menslider />
      <Popular />
      <Womanswiper />
      <Womanslider />
      <Newcollection />
      <Bodyimg />
    </div>
  );
};

export default Shop;
