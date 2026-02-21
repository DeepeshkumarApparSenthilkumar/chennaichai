'use client';
import { useState } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { MENU_ITEMS } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';
import { MenuItem } from '@/types';

const CATEGORIES = ['all', 'classic', 'special', 'seasonal', 'snacks'] as const;

function MenuCard({ item }: { item: MenuItem }) {
  const { addItem, openCart } = useCartStore();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
    openCart();
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 border border-[#5C3317]/10 flex flex-col">
      <div className="relative overflow-hidden h-52">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#FF6F00] text-white text-xs font-bold px-2.5 py-1 rounded-full capitalize">{item.category}</span>
          {!item.is_available && (
            <span className="bg-gray-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Sold Out</span>
          )}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-[#1A0A00] mb-2">{item.name}</h3>
        <p className="text-[#5C3317]/70 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#FF6F00] font-bold text-2xl">${item.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            disabled={!item.is_available}
            aria-label={`Add ${item.name} to cart`}
            className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full transition-all hover:scale-105 text-sm ${
              added
                ? 'bg-[#4A7C59] text-white'
                : item.is_available
                ? 'bg-[#FF6F00] hover:bg-[#e65c00] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {added ? <CheckCircle size={16} /> : <ShoppingCart size={16} />}
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((m) => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <div
        className="pt-32 pb-16 text-center grain-overlay"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 100%)' }}
      >
        <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Our Menu</p>
        <h1 className="font-display text-5xl sm:text-6xl font-black text-[#FDF6EC] mb-4">The Chai Board</h1>
        <p className="text-[#FDF6EC]/60 text-lg max-w-xl mx-auto px-4">Every brew crafted with care, every sip a memory of South India.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-5 py-2 rounded-full font-semibold text-sm capitalize transition-all hover:scale-105 ${
                activeCategory === cat
                  ? 'bg-[#FF6F00] text-white shadow-md'
                  : 'bg-white text-[#5C3317] border border-[#5C3317]/20 hover:border-[#FF6F00] hover:text-[#FF6F00]'
              }`}
            >
              {cat === 'all' ? 'All Items' : cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[#5C3317]/50 py-20 text-lg">No items in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
