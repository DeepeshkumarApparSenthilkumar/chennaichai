'use client';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count } = useCartStore();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#FDF6EC] z-50 shadow-2xl cart-drawer flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-[#5C3317]/20 bg-[#1A0A00]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#FF6F00]" />
            <h2 className="font-display text-lg font-bold text-[#FDF6EC]">Your Order</h2>
            {count() > 0 && (
              <span className="bg-[#FF6F00] text-white text-xs rounded-full px-2 py-0.5">{count()}</span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="text-[#FDF6EC]/70 hover:text-[#FF6F00] transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <ShoppingBag size={48} className="text-[#5C3317]/30 mb-3" />
              <p className="text-[#5C3317]/60 font-display text-lg">Your cart is empty</p>
              <p className="text-sm text-[#5C3317]/40 mt-1">Add some chai to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1A0A00] text-sm truncate">{item.name}</p>
                  <p className="text-[#FF6F00] font-bold text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full border border-[#5C3317]/30 flex items-center justify-center hover:bg-[#5C3317]/10 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-[#5C3317]/30 flex items-center justify-center hover:bg-[#5C3317]/10 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-red-400 hover:text-red-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#5C3317]/20 p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#5C3317] font-medium">Subtotal</span>
              <span className="font-display text-xl font-bold text-[#1A0A00]">${total().toFixed(2)}</span>
            </div>
            <Link
              href="/order"
              onClick={closeCart}
              className="block w-full bg-[#FF6F00] hover:bg-[#e65c00] text-white text-center font-bold py-3 rounded-full transition-all hover:scale-[1.02]"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
