import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const increment = () => {
    setCartCount(cartCount+1);
  }

  const decrement = () => {
    setCartCount(cartCount-1);    
  }

  return (
  <CartContext.Provider value={ {cartCount, increment, decrement} }>
    {children}
  </CartContext.Provider>  
  );
};