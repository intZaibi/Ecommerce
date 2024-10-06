'use client';

import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isMountedOnce, setIsMountedOnce] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExist = prevItems.some((item) => item.ProductID === product.ProductID);
      if (!itemExist) {
        toast.success("Product added to cart!")
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        toast.error("Item already exist")
        return [...prevItems]
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

  useEffect(() => {
    if (isMountedOnce) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    setIsMountedOnce(true)
  }, []);
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeProduct, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
