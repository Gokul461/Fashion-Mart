import React from 'react';
import './hero.css';
import hero_img from '../../assets/images/pic.png';
import Arrow from '../../assets/images/arrow.png';
const Hero = ({ scrollToSection }) => {
  // Scroll handler
  const scrollToShopSection = () => {
    const section = document.getElementById('collection-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='hero'>
      {/* Left side */}
      <div className='hero-left'>
        <h1 className='hero-title'>Elevate Your Style</h1>
        <h2 className='hero-subtitle'>Trendy. Elegant. Yours.</h2>
        <p className='hero-description'>
          Discover curated collections designed for every occasion. Modern, comfortable, and crafted to make you stand out.
        </p>
        <div className="hero-cta-group">
          <button className='hero-primary-btn' onClick={scrollToSection}>
            Shop now
            <img src={Arrow} className="arrow-icon" alt="arrow_img" />
          </button>
          <button className='hero-secondary-btn' onClick={scrollToShopSection}>
            Explore More
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className='hero-right'>
        <img src={hero_img} alt="hero-img" className='hero-img floating'/>
      </div>
    </section>
  );
};

export default Hero;
