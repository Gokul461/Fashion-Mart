import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import all_products from "../../assets/images/all_product";
import "./productdetails.css";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ShopContext } from "../Context/shopContextProvider";
import { useAuth } from "../../components/Context/AuthProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart, toggleFavorite, favorites } =
    useContext(ShopContext);
  const { userEmail } = useAuth();

  const product = all_products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <p>Product not found!</p>;
  }

  // ✅ Correct wishlist check
  const isFavorited = favorites.some(
    (item) => item.id === product.id
  );

  // ---------------- ADD TO CART ----------------
  const handleAddToCart = () => {
    if (!userEmail) {
      toast.error("Please log in to add items to the cart", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate("/login");
      return;
    }

    addToCart(product);
    toast.success("Added to cart!", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  // ---------------- WISHLIST ----------------
  const handleFavoriteClick = () => {
    if (!userEmail) {
      toast.error("Please log in to add item to wishlist", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate("/login");
      return;
    }

    toggleFavorite(product);

    if (isFavorited) {
      toast.error("Removed from Wishlist", {
        position: "bottom-right",
        theme: "dark",
      });
    } else {
      toast.success("Added to Wishlist", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  // ---------------- STAR RENDER ----------------
  const renderStars = (ratings) => {
    const fullStars = Math.floor(ratings);
    const halfStars = ratings % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <i
            key={`full-${i}`}
            className="bi bi-star-fill"
            style={{ color: "#FFD700" }}
          ></i>
        ))}
        {Array.from({ length: halfStars }).map((_, i) => (
          <i
            key={`half-${i}`}
            className="bi bi-star-half"
            style={{ color: "#FFD700" }}
          ></i>
        ))}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <i
            key={`empty-${i}`}
            className="bi bi-star"
            style={{ color: "#D3D3D3" }}
          ></i>
        ))}
      </>
    );
  };

  const relatedProducts = all_products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          {/* ❤️ Wishlist Heart */}
          <div className="heart-icon" onClick={handleFavoriteClick}>
            <i
              className={`bi ${
                isFavorited ? "bi-heart-fill" : "bi-heart"
              }`}
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
            {renderStars(product.ratings)}
            <span> ({product.rating_count} reviews)</span>
          </div>

          <div className="pricing">
            <p className="old-price">₹{product.old_price}</p>
            <p className="new-price">₹{product.new_price}</p>
          </div>

          <div className="product-sizes">
            <strong>Size:</strong>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart">
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="wishlist-btn"
              onClick={handleFavoriteClick}
            >
              <i
                className={`bi ${
                  isFavorited ? "bi-heart-fill" : "bi-heart"
                }`}
                style={{
                  marginRight: "8px",
                  fontSize: "1.2rem",
                  color: isFavorited ? "red" : "#fff",
                }}
              ></i>
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* -------- RELATED PRODUCTS -------- */}
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-product-cards">
          {relatedProducts.slice(0, 5).map((item) => (
            <div
              className="related-product-card"
              key={item.id}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>₹{item.new_price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
