import React from 'react';
import './footer.css'
// import footer_logo from '../../assets/images/Nlogo.png';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        {/* Logo Section */}
        {/* <div className="row mb-4">
          <div className="footer-logo d-flex align-items-center justify-content-center my-5">
            <img src={footer_logo} alt="Fashion Mart Logo" />
            <p className="ms-3 mb-0 fw-bold text-white">FASHION-MART</p>
          </div>
        </div> */}

        {/* Links Sections */}
        <div className="row">
          {/* Categories Section */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">ONLINE SHOPPING</h6>
            <ul className="list-unstyled mt-3">
              {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Gift Cards'].map((item, index) => (
                <li key={index}>
                  <a href="/" className="text-decoration-none text-secondary" aria-label={item}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">USEFUL LINKS</h6>
            <ul className="list-unstyled mt-3">
              {['Blog', 'Careers', 'Site Map', 'Corporate Information', 'Whitehat', 'Cleartrip'].map((link, index) => (
                <li key={index}>
                  <a href="/" className="text-decoration-none text-secondary" aria-label={link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Policies Section */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">CUSTOMER POLICIES</h6>
            <ul className="list-unstyled mt-3">
              {[
                'Contact Us',
                'FAQ',
                'T&C',
                'Terms Of Use',
                'Track Orders',
                'Shipping',
                'Cancellation',
                'Returns',
                'Privacy policy',
                'Grievance Redressal',
              ].map((policy, index) => (
                <li key={index}>
                  <a href="/" className="text-decoration-none text-secondary" aria-label={policy}>
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Experience and Social Media Section */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-bold">EXPERIENCE MY APP</h6>
            <div className=" mb-3 mt-3">
              <input 
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
                aria-label="Enter your email to subscribe" 
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>

            <h6 className="fw-bold mt-4">KEEP IN TOUCH</h6>
            <div className="social-icons mt-2">
              <i className="bi bi-facebook icon" style={{ color: '#4267B2', fontSize: '1.5rem' }}></i>
              <i className="bi bi-twitter icon" style={{ color: '#1DA1F2', fontSize: '1.5rem' }}></i>
              <i className="bi bi-instagram icon" style={{ color: '#C13584', fontSize: '1.5rem' }}></i>
              <i className="bi bi-youtube icon" style={{ color: '#FF0000', fontSize: '1.5rem' }}></i>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="row mt-5">
          <div className="col-12">
            <h6 className="fw-bold">
              POPULAR SEARCHES
              <hr />
            </h6>
            <p className="text-secondary popular-searches">
              Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags |
              Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
              Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings |
              Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
              Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              Adidas Shoes | Woodland Shoes | Jewellery | Designer Sarees
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-12 ">
            <p className="mb-0 text-white">
              In case of any concern,{' '}
              <a 
  href="https://www.linkedin.com/in/gokulnath-s-b57313264" 
  className="text-decoration-none text-primary fw-bolder"
>
  Contact Us
</a>

            </p>
            <p className="mb-0 mt-4 text-center text-secondary">© 2025 www.fashionmart.com. A Gokul's design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
