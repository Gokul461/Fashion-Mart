import React, { useContext } from "react";
import { ShopContext } from "../../contextprovider/shopContextProvider";
import { useAuth } from "../../contextprovider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Wishlist.css";

const Wishlist = () => {
  const { favorites, toggleFavorite, addToCart } =
    useContext(ShopContext);
  const { userEmail } = useAuth();
  const navigate = useNavigate();

  // ---------------- REMOVE FROM WISHLIST ----------------
  const handleRemoveFromWishlist = (product) => {
    if (!userEmail) {
      toast.error("Please log in to manage wishlist", {
        position: "bottom-right",
        theme: "dark",
      });
      navigate("/login");
      return;
    }

    toggleFavorite(product);
    toast.error("Removed from wishlist", {
      position: "bottom-right",
      theme: "dark",
    });
  };

  // ---------------- ADD TO CART ----------------
  const handleAddToCart = (product) => {
    if (!userEmail) {
      toast.error("Please log in to add items to cart", {
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

  return (
    <div className="wishlist-background">
      <Container className="my-5">
        <h2 className="wishlist-title text-center mb-4">
          My Wishlist
        </h2>

        {favorites.length === 0 ? (
          <p className="text-center fs-5 mt-5">
            💔 Your wishlist is empty…
          </p>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {favorites.map((product) => (
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
                    <Card.Title className="wishlist-card-title">
                      {product.name}
                    </Card.Title>

                    <Card.Text className="wishlist-card-price">
                      ₹{product.new_price}
                    </Card.Text>

                    <div className="mt-auto d-flex justify-content-between gap-2">
                      <button
                        className="button-remove"
                        onClick={() =>
                          handleRemoveFromWishlist(product)
                        }
                      >
                        <i className="bi bi-heart-fill"></i>{" "}
                        Remove
                      </button>

                      <button
                        className="button-add"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                      >
                        <i className="bi bi-cart-plus"></i>{" "}
                        Add
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
