import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import all_products from "../../assets/images/all_product";
import "./productdetails.css";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ShopContext } from "../../components/Context/shopContext";
import { useAuth } from "../../components/Context/AuthProvider";
import { useNavigate } from "react-router-dom"; 
const ProductDetails = () => {

  const { id } = useParams();
  const product = all_products
    ? all_products.find((item) => item.id === parseInt(id))
    : null;

  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext);

  const isFavorited = favorites.includes(parseInt(id));


  const handleAddToCart = () => {
    if (!userEmail) {
      toast.error('Please log in to add items to the cart', { position: 'bottom-right', theme: 'dark' });
      Navigate('/login'); 
    }else{
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      new_price: product.new_price,
      old_price: product.old_price,
    });
    toast.success(`Added to cart!`, {
      position: "bottom-right",
      theme: "dark",
    });
  }
  };

const { userEmail } = useAuth(); 
const Navigate = useNavigate(); 
  const handleFavoriteClick = () => {
  if (!userEmail) {
    toast.error('Please log in to add item to wishlist', { position: 'bottom-right', theme: 'dark' });
    Navigate('/login');
  } else {
    const productId = parseInt(id); 
    toggleFavorite(productId);

    const isNowFavorited = favorites.includes(productId);

    if (!isNowFavorited) {
      toast.success('Added to Wishlist', { position: 'bottom-right', theme: 'dark' });
    } else {
      toast.error('Removed from Wishlist', { position: 'bottom-right', theme: 'dark' });
    }
  }
};

  if (!product) {
    return <p>Product not found!</p>;
  }

  const relatedProducts = all_products
    ? all_products.filter(
        (item) => item.category === product.category && item.id !== product.id
      )
    : [];

  const renderStars = (ratings) => {
    const fullStars = Math.floor(ratings);
    const halfStars = ratings % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <i
            key={`full-${index}`}
            className="bi bi-star-fill star-full"
            style={{ color: "#FFD700" }}
          ></i>
        ))}
        {Array.from({ length: halfStars }, (_, index) => (
          <i
            key={`half-${index}`}
            className="bi bi-star-half star-half"
            style={{ color: "#FFD700" }}
          ></i>
        ))}
        {Array.from({ length: emptyStars }, (_, index) => (
          <i
            key={`empty-${index}`}
            className="bi bi-star star-empty"
            style={{ color: "#D3D3D3" }}
          ></i>
        ))}
      </>
    );
  };

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image-container">
          <img
            src={product.image || "fallback_image.png"}
            alt={product.name}
            className="product-image"
          />
          <div
            className="heart-icon"
            onClick={handleFavoriteClick}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <i
              className={`bi bi-heart${isFavorited ? "-fill" : ""}`}
              style={{
                fontSize: "1.8rem",
                color: isFavorited ? "red" : "#fff",
              }}
            ></i>
          </div>
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>

          <div className="product-rating">
            <span className="rating-stars">{renderStars(product.ratings)}</span>
            <span className="rating-count">
              ({product.rating_count} reviews)
            </span>
          </div>

          <div className="pricing">
            <p className="old-price">{product.old_price}</p>
            <p className="new-price">{product.new_price}</p>
          </div>

          <div className="product-sizes">
            <p>
              <strong>Size:</strong>
            </p>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="wishlist-btn" onClick={handleFavoriteClick}>
              <i
                className={`bi ${isFavorited ? "bi-heart-fill" : "bi-heart"}`}
                style={{
                  color: isFavorited ? "red" : "#fff",
                  marginRight: "8px",
                  fontSize: "1.20rem",
                }}
              ></i>
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-product-cards">
          {relatedProducts.slice(0, 5).map((item) => (
            <div className="related-product-card" key={item.id}>
              <img
                src={item.image || "fallback_image.png"}
                alt={item.name}
                className="related-product-image"
              />
              <p>{item.name}</p>
              <p>{item.new_price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
