'use client';
import { create } from 'zustand';
import { CartItem, MenuItem } from '@/types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      set({ items: get().items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      set({ items: [...get().items, { ...item, quantity: 1 }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
  updateQty: (id, qty) => {
    if (qty <= 0) { get().removeItem(id); return; }
    set({ items: get().items.map((i) => i.id === id ? { ...i, quantity: qty } : i) });
  },
  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  total: () => get().items.reduce((s, i) => s + i.price * i.quantity, 0),
  count: () => get().items.reduce((s, i) => s + i.quantity, 0),
}));
