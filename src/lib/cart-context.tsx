"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
  weight: number;
  preparation: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  itemCount: number;
  estimatedTotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.length;

  const estimatedTotal = items.reduce((sum, item) => {
    if (item.product.pricePerKg > 0) {
      return sum + item.product.pricePerKg * item.weight;
    }
    const numericPrice = parseFloat(item.product.price.replace(/[^0-9.]/g, ""));
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <CartContext value={{ items, addItem, removeItem, clearCart, itemCount, estimatedTotal }}>
      {children}
    </CartContext>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
