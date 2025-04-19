import React, { createContext, useState } from 'react';
import all_product from '../../assets/images/all_product';

// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]); // <-- New: Favorites state

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      updateQuantity(existingProduct.id, 1);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity in the cart
  const updateQuantity = (productId, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Toggle favorite (wishlist) status
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    setCart,
    favorites,         // <-- Provide favorites list
    toggleFavorite     // <-- Provide toggle function
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
