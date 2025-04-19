import React from 'react';
import './Coupons.css';  // Importing the CSS file

const Coupons = () => {
  return (
    <div className="coupons-container">
      <h1 className="coupons-title">🎁 Exclusive Coupons</h1>

      <div className="coupons-grid">
        {/* Coupon 1: Discount */}
        <div className="coupon discount">
          <h2 className="coupon-title">SAVE20</h2>
          <p className="coupon-description">✨ Get <span className="highlight">20% off</span> on your first order!</p>
        </div>

        {/* Coupon 2: Free Shipping */}
        <div className="coupon free-shipping">
          <h2 className="coupon-title">FREESHIP</h2>
          <p className="coupon-description">🚚 Enjoy <span className="highlight">free shipping</span> on orders above ₹999.</p>
        </div>

        {/* Coupon 3: Men’s Collection */}
        <div className="coupon mens-collection">
          <h2 className="coupon-title">GOKUL50</h2>
          <p className="coupon-description">👕 Flat <span className="highlight">₹50 off</span> on all Men’s Collection.</p>
        </div>

        {/* Coupon 4: Holiday Sale */}
        <div className="coupon holiday-sale">
          <h2 className="coupon-title">HOLIDAY25</h2>
          <p className="coupon-description">🎉 Get <span className="highlight">25% off</span> during the holiday sale!</p>
        </div>

        {/* Bank Coupon */}
        <div className="coupon bank-offer">
          <h2 className="coupon-title">BANKOFFER</h2>
          <p className="coupon-description">🏦 Get <span className="highlight">10% cashback</span> on payments via selected banks.</p>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
