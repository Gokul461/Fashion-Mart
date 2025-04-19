import React from 'react';
import './Gifts.css';  // Import the CSS for styling

const Giftcards = () => {
  return (
    <div className="giftcards-container">
      <h1 className="giftcards-title">🎁 Gift Cards</h1>
      <div className="giftcards-content">
        <p className="giftcards-description">
          ✨ Looking for a perfect gift? Explore our exclusive gift cards, available in different denominations. Perfect for any occasion!
        </p>
        
        <div className="giftcards-options">
          <div className="giftcard-option">
            <h3 className="giftcard-value">₹500</h3>
            <button className="giftcard-btn">Buy Now</button>
          </div>
          <div className="giftcard-option">
            <h3 className="giftcard-value">₹1000</h3>
            <button className="giftcard-btn">Buy Now</button>
          </div>
          <div className="giftcard-option">
            <h3 className="giftcard-value">₹2000</h3>
            <button className="giftcard-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftcards;
