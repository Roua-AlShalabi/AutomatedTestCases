import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); // [{id, name, price, qty}]

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalCount = useMemo(() => items.reduce((s, p) => s + p.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, p) => s + p.qty * (p.price || 0), 0), [items]);

  const value = { items, addToCart, totalCount, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};