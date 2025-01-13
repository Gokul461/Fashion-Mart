import React from 'react';
import './hero.css';
import Logo from '../../assets/images/logo.png';
import herogif from '../../assets/images/M-1.0-UHP-02082024-MainBanner-Z1-P1- Without Sponsored-new - Copy.gif';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-image'>
        <img  className= "hider" src={Logo} alt="for hiding"></img>
        <img src={herogif} alt="Animated Banner" />
      </div>
    </div>
  );
}

export default Hero;
