'use client';

import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // New state to track if the component is mounted

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.some((item) => item.ProductID === product.ProductID);
      if (!itemExist) {
        toast.success("Product added to cart!");
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        toast.error("Item already exists");
        return [...prevItems];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductID === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const updateQuantity = (ProductID, value) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductID === ProductID ? { ...item, quantity: value } : item
      )
    );
  };

  const removeProduct = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.ProductID !== productId);
    });
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductID === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Only update cart items from localStorage after the component has mounted (client-side)
  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update localStorage when cartItems change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  // Prevent the initial render mismatch by returning null while the component is hydrating
  if (!isMounted) {
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeProduct,
        incrementQuantity,
        decrementQuantity,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
