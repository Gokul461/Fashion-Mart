import React, { useContext } from 'react';
import { ShopContext } from '../../context/shopcontext';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Wishlist.css'; // Custom styling

const Wishlist = () => {
  const { favorites, all_product, toggleFavorite, addToCart } = useContext(ShopContext);

  const favoriteProducts = all_product.filter(product => favorites.includes(product.id));

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

                  <div className="mt-auto d-flex justify-content-between">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <i className="bi bi-heart-fill"></i> Remove
                    </Button>

                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      <i className="bi bi-cart-plus"></i> Add
                    </Button>
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
