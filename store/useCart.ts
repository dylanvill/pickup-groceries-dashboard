import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import CartItem from '../models/CartItem';

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(persist(
  (set, get) => ({
    items: [],

    addToCart: (item: CartItem) => {
      set((state) => {
        const existingItem = state.items.find(cartItem => cartItem.product.id === item.product.id);
        
        if (existingItem) {
          return {
            items: state.items.map(cartItem =>
              cartItem.product.id === item.product.id
                ? { 
                    ...cartItem, 
                    quantity: cartItem.quantity + item.quantity,
                    total: (cartItem.quantity + item.quantity) * cartItem.product.price
                  }
                : cartItem
            )
          };
        } else {
          return {
            items: [...state.items, { 
              product: item.product, 
              quantity: item.quantity, 
              total: item.product.price * item.quantity 
            }]
          };
        }
      });
    },

    removeFromCart: (productId: number) => {
      set((state) => ({
        items: state.items.filter(item => item.product.id !== productId)
      }));
    },

    updateQuantity: (productId: number, quantity: number) => {
      if (quantity <= 0) {
        get().removeFromCart(productId);
        return;
      }
      
      set((state) => ({
        items: state.items.map(item =>
          item.product.id === productId
            ? { 
                ...item, 
                quantity,
                total: quantity * item.product.price
              }
            : item
        )
      }));
    },

    clearCart: () => {
      set({ items: [] });
    },

    getTotalItems: () => {
      return get().items.reduce((total, item) => total + item.quantity, 0);
    },

    getTotalPrice: () => {
      return get().items.reduce((total, item) => total + item.total, 0);
    },
  }),
  {
    name: 'cart-storage',
  }
));