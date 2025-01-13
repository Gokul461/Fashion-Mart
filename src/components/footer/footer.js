import React from 'react';
import './footer.css';
import footer_logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram_icon.png';
import whats from '../../assets/images/whatsapp_icon.png';
import pinterest from '../../assets/images/pintester_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='foot_logo' />
        <p>FASHION-MART</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-media">
        <div className="footer-item-container">
          <img src={instagram} alt='Instagram icon' />
        </div>
        <div className="footer-item-container">
          <img src={pinterest} alt='Pinterest icon' />
        </div>
        <div className="footer-item-container">
          <img src={whats} alt='WhatsApp icon' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>&copy; 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
