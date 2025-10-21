import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shopContext';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Wishlist.css';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/AuthProvider'; // Import useAuth hook

const Wishlist = () => {
  const { favorites, all_product, toggleFavorite, addToCart } = useContext(ShopContext);
  const { user } = useAuth(); // Get the logged-in user
  const navigate = useNavigate(); // For navigation

  const favoriteProducts = all_product.filter(product => favorites.includes(product.id));

  const handleToggleFavorite = (productId) => {
    if (!user) {
      // Navigate to login page if the user is not logged in
      toast.info('Please log in to manage your wishlist.', { position: "bottom-right", theme: "dark" });
      navigate('/login');
      return; // Exit the function early to prevent adding to favorites
    }

    // Only toggle favorite if the user is logged in
    toggleFavorite(productId);
    toast.error('Removed from wishlist!', { position: "bottom-right", theme: "dark" });
  };

  const handleAddToCart = (product) => {
    if (user) {
      addToCart(product);
      toast.success('Added to cart!', { position: "bottom-right", theme: "dark" });
    } else {
      toast.info('Please log in to add items to your cart.', { position: "bottom-right", theme: "dark" });
      navigate('/login');
    }
  };

  return (
    <div className="wishlist-background">
      <Container className="my-5">
        <h2 className="wishlist-title mb-4 text-center">My Wishlist</h2>
        {favoriteProducts.length > 0 ? (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {favoriteProducts.map(product => (
              <Col key={product.id}>
                <Card className="wishlist-card h-100 shadow-sm">
                  <Link to={`/product/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      className="wishlist-card-img"
                    />
                  </Link>

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="wishlist-card-title">{product.name}</Card.Title>
                    <Card.Text className="wishlist-card-price">₹{product.new_price}</Card.Text>

                    <div className="mt-auto d-flex justify-content-between gap-2">
                      <button
                        className="button-remove"
                        onClick={() => handleToggleFavorite(product.id)}
                      >
                        <i className="bi bi-heart-fill"></i> Remove
                      </button>

                      <button
                        className="button-add"
                        onClick={() => handleAddToCart(product)}
                      >
                        <i className="bi bi-cart-plus"></i> Add
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center fs-5 mt-5">💔 Your wishlist is empty…</p>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
