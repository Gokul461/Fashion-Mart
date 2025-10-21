import React, { createContext, useState } from 'react';
import all_product from '../../assets/images/all_product';

// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]); // Favorites stored as objects

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

  // Add product to favorites
  const addToFavorites = (product) => {
    const existingProduct = favorites.find((item) => item.id === product.id);
    if (!existingProduct) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  // Remove product from favorites
  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  // Toggle favorite (wishlist) status
  const toggleFavorite = (product) => {
    const existingProduct = favorites.find((item) => item.id === product.id);
    if (existingProduct) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const contextValue = {
    all_product,
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    setCart,
    favorites,         // Provide favorites list
    addToFavorites,    // Add product to favorites
    removeFromFavorites, // Remove product from favorites
    toggleFavorite,    // Toggle favorite status
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
