import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './itemnew.css';  // Make sure this has your card styling
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { ShopContext } from '../Context/shopcontext';
import { useAuth } from '../../components/Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ id, name, image, new_price, old_price }) => {
  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext); 

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
    <div className="product-card shadow-sm">
      <div className="product-card__image-wrapper position-relative">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="product-card__image" />
        </Link>
        <div 
          className="product-card__heart-icon position-absolute top-0 end-0 p-2"
          onClick={handleFavoriteClick}
          style={{ cursor: 'pointer' }}
        >
          <i 
            className={`bi bi-heart${isFavorited ? '-fill' : ''}`} 
            style={{
              fontSize: '1.6rem',
              color: isFavorited ? 'crimson' : 'rgba(255, 255, 255, 0.9)',
            }}
          ></i>
        </div>
      </div>
      <div className="product-card__details p-2">
        <Link to={`/product/${id}`} className="text-black text-decoration-none">
          <div className="product-card__name fw-semibold">{name}</div>
        </Link>
        
        <div className="product-card__price-wrapper d-flex align-items-center gap-2 mt-1">
          <span className="product-card__new-price fw-bold text-success">₹{new_price}</span>
          {old_price && (
            <span className="product-card__old-price text-muted text-decoration-line-through">₹{old_price}</span>
          )}
        </div>

        <button className="product-card__btn btn w-100 mt-3" onClick={handleAddToCart}>
          <i className="bi bi-cart-plus me-1"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
