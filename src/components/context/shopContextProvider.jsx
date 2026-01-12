import React, { createContext, useState } from "react";
import all_product from "../../assets/images/all_product";

// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]); // stores PRODUCT OBJECTS
const clearUserData = () => {
  setCart([]);
  setFavorites([]);
};

  // ---------------- CART LOGIC ----------------

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  };

  // ---------------- WISHLIST LOGIC ----------------

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id
      );

      if (exists) {
        // remove
        return prev.filter(
          (item) => item.id !== product.id
        );
      } else {
        // add
        return [...prev, product];
      }
    });
  };

  // ---------------- CONTEXT VALUE ----------------

  const contextValue = {
    all_product,
    cart,
    setCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    favorites,
    toggleFavorite,
    clearUserData,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
