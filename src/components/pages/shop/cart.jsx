import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shopcontext';
import './cart.css';
import { toast } from "react-toastify";
import Emptycart from '../../../assets/images/emptycart.avif';  // Ensure the correct path
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cart, setCart } = useContext(ShopContext);
  const navigate = useNavigate();
  // Function to handle quantity change
  const updateQuantity = (itemId, delta) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + delta);  // Ensure quantity doesn't go below 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart); // Update the cart state
  };


  const handleBuyNow = () => {
    toast.success("Order placed successfully!");
      setCart([]); // Clear the cart
      navigate("/ordersuccess"); // Redirect to order success page
    };
    
  // Function to handle item removal
  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId); // Remove item with the matching id
    setCart(updatedCart); // Update the cart state
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="empty">
        <img src={Emptycart} alt="Empty Cart" className="empty-cart-image" />
        <p className="empty-cart bg-white">Your cart is empty.</p>
        <button className="btn" onClick={() => navigate('/')}>Shop Now</button>
      </div>
    );
  }
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.new_price); 
    return total + (price * (item.quantity || 1));
  }, 0);

  return (
    <div className="cart-container mb-10 h-100">
      <h2 className='my-5 ms-3'>Your Cart</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">₹{item.new_price}</p>

              {/* Quantity Controls */}
              <div className="cart-item-quantity">
                <button className="m-2"onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity || 1}</span> {/* Fallback to 1 if quantity is undefined */}
                <button className="m-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
            <div className="remove-item">
              <button onClick={() => removeItem(item.id)} className="remove-btn">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        {/* Total Price Calculation */}
        <p>
          <strong>Total:</strong> ₹{totalPrice.toFixed(2)} {/* Format to 2 decimal places */}
        </p>
        <button className="checkout-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
