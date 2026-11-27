
"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  size?: string;
};

export type CartItem = CartProduct & {
  cartKey: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addToCart: (product: CartProduct, quantity?: number) => void;
  updateQuantity: (cartKey: string, quantity: number) => void;
  removeFromCart: (cartKey: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: CartProduct, quantity = 1) {
    const cartKey = `${product.id}-${product.size ?? "default"}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.cartKey === cartKey
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          cartKey,
          quantity,
        },
      ];
    });
  }

  function updateQuantity(cartKey: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(cartKey);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(cartKey: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider."
    );
  }

  return context;
}
