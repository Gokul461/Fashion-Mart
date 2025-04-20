import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './item.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/shopContext'; // Import the ShopContext
import { toast } from 'react-toastify'; // Import toast
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const Item = ({ id, name, image, new_price, old_price }) => {
  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext); // Access addToCart & toggleFavorite
 
  const isFavorited = favorites.includes(id);
const { userEmail } = useAuth(); 
const Navigate = useNavigate(); 
  const handleFavoriteClick = () => {
    toggleFavorite(id);
    if (!userEmail) {
      toast.error('Please log in to add item to wishlist', { position: 'bottom-right', theme: 'dark' });
      Navigate('/login'); 
    }else{
      if (!isFavorited) {
        toast.success('Added to Wishlist', { position: 'bottom-right',theme: 'dark' }); 
      } else {
        toast.error('Removed from Wishlist', { position: 'bottom-right', theme: 'dark' });
      }
    }
    };

  const handleAddToCart = () => {
    if (!userEmail) {
      toast.error('Please log in to add items to the cart', { position: 'bottom-right', theme: 'dark' });
      Navigate('/login'); 
    }else{
    addToCart({ id, name, image, new_price, old_price });
    toast.success(`Added to cart!`, { position: 'bottom-right',theme: 'dark' });
  }};

  return (
    <div className='ajio_card'>
      <div className="ajio_card__image-wrapper">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className='ajio_card__image' />
        </Link>
        <div
          className="heart-icon"
          onClick={handleFavoriteClick}
          style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10, cursor: 'pointer' }}
        >
          <i
            className={`bi bi-heart${isFavorited ? '-fill' : ''}`}
            style={{ fontSize: '1.6rem', color: isFavorited ? 'red' : '#fff' }}
          ></i>
        </div>
      </div>

      <div className="ajio_card__details">
        <div className="ajio_card__name">{name}</div>
        <div className="ajio_card__price-wrapper">
          <span className="ajio_card__new-price">₹{new_price}</span>
          {old_price && <span className="ajio_card__old-price">₹{old_price}</span>}
        </div>
        <button className="ajio_card__cta addbtn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
