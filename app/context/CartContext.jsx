'use client';

import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
  
      if (!itemExists) {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.ProductID === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeProduct = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.filter(item => item.ProductID !== productId? true : false)
    }
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.ProductID === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const isItemExistInCart = (productId) => {
    console.log(cartItems)
    // return cartItems.find(item => item.ProductID === productId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeProduct, incrementQuantity, decrementQuantity, isItemExistInCart }}>
      {children}
    </CartContext.Provider>
  );
};
