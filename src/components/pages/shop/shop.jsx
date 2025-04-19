import React, { useRef } from 'react';
import Hero from '../../hero/hero';
import Popular from '../../popular/popular';
import Newcollection from '../../newcollections/newcollection';
import Slider from '../../slider/slider';
import Womanslider from '../../slider/womanslider/womanslider';
import Menslider from '../../slider/Men slider/mslider';
import Swiper from '../../swiper/swiper';
import Womanswiper from '../../swiper/womanswiper';
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
