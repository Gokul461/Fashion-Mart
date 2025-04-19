import React from 'react';
import './hero.css';
import Summersale from '../../assets/images/summersale banner.jpg';

const Hero = ({ scrollToSection }) => {
  return (
    <div className="hero">
      <img 
        src={Summersale} 
        className="hero__image" 
        alt="Summer Sale Banner featuring discounts on latest collections"
      />
      <button className="hero__btn" onClick={scrollToSection}>Shop Now</button>
    </div>
  );
};

export default Hero;
