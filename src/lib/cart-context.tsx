"use client";

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";
import type { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
  weight: number;
  preparation: string;
  unitPrice: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  estimatedTotal: number;
  miniCartOpen: boolean;
  setMiniCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const miniCartTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => [...prev, item]);
    if (miniCartTimer.current) clearTimeout(miniCartTimer.current);
    setMiniCartOpen(true);
    miniCartTimer.current = setTimeout(() => setMiniCartOpen(false), 5000);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback((index: number, newQty: number) => {
    if (newQty < 1) return;
    setItems((prev) => prev.map((item, i) => {
      if (i !== index) return item;
      const pricePerUnit = item.unitPrice / item.quantity;
      return { ...item, quantity: newQty, unitPrice: pricePerUnit * newQty };
    }));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.length;

  const estimatedTotal = items.reduce((sum, item) => sum + item.unitPrice, 0);

  return (
    <CartContext value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, estimatedTotal, miniCartOpen, setMiniCartOpen }}>
      {children}
    </CartContext>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
