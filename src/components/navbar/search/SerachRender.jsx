import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopcontext';
import { toast } from 'react-toastify';
import './search.css';

const SearchRender = () => {
  const location = useLocation();
  const { filteredProducts = [] } = location.state || {}; // Default to an empty array if no products
  const { addToCart, favorites, toggleFavorite } = useContext(ShopContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`Item added to cart!`, { position: 'bottom-right', theme: 'dark' });
  };

  const handleFavoriteClick = (productId) => {
    const isFavorited = favorites.includes(productId);
    toggleFavorite(productId);
    if (!isFavorited) {
      toast.success('Added to Wishlist', { position: 'bottom-right', theme: 'dark' });
    } else {
      toast.error('Removed from Wishlist', { position: 'bottom-right', theme: 'dark' });
    }
  };

  return (
    <div className="row">
      <h2 className="mt-5 ms-5 text-dark fw-bold" style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)' }}>
        Search Results
      </h2>
      {filteredProducts?.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center mt-4 mb-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="ajio_card">
              <div className="ajio_card__image-wrapper">
                <Link to={`/product/${product.id}`} aria-label={`View details of ${product.name}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="ajio_card__image"
                  />
                </Link>

                <div
                  className="heart-icon"
                  onClick={() => handleFavoriteClick(product.id)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 10,
                    cursor: 'pointer',
                  }}
                >
                  <i
                    className={`bi bi-heart${favorites.includes(product.id) ? '-fill' : ''}`}
                    style={{
                      fontSize: '1.5rem',
                      color: favorites.includes(product.id) ? 'red' : '#fff',
                    }}
                    aria-label={favorites.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    aria-pressed={favorites.includes(product.id)}
                  ></i>
                </div>
              </div>

              <div className="ajio_card__details">
                <div className="ajio_card__name">{product.name}</div>
                <div className="ajio_card__price-wrapper">
                  <span className="ajio_card__new-price">₹{product.new_price}</span>
                  {product.old_price && (
                    <span className="ajio_card__old-price">₹{product.old_price}</span>
                  )}
                </div>
                <p className="ajio_card__category">Category: {product.category}</p>
                <p className="ajio_card__description">{product.description}</p>
                <button
                  className="ajio_card__cta but"
                  onClick={() => handleAddToCart(product)}
                  aria-label="Add to Cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchRender;
