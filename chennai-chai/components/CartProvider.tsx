'use client';
import { ReactNode } from 'react';
import CartDrawer from './CartDrawer';

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CartDrawer />
    </>
  );
}
