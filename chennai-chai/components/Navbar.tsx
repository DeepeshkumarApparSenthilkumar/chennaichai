'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { isNowOpen } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [badgeBounce, setBadgeBounce] = useState(false);
  const { count, openCart } = useCartStore();
  const nowOpen = isNowOpen();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (count() > 0) {
      setBadgeBounce(true);
      setTimeout(() => setBadgeBounce(false), 400);
    }
  }, [count()]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/story', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A0A00]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14 Q10 8 16 8 Q22 8 24 14 L22 24 Q20 26 16 26 Q12 26 10 24 Z" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
            <path d="M24 16 Q28 14 28 18 Q28 22 24 20" stroke="#FF6F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M12 8 Q13 4 14 5" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 7 Q17 3 18 4" stroke="#FF6F00" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-display text-xl font-bold text-[#FDF6EC] tracking-wide group-hover:text-[#FF6F00] transition-colors">
            Chennai Chai
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#FDF6EC]/80 hover:text-[#FF6F00] font-medium transition-colors text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative p-2 text-[#FDF6EC] hover:text-[#FF6F00] transition-colors"
            aria-label={`Cart, ${count()} items`}
          >
            <ShoppingCart size={22} />
            {count() > 0 && (
              <span
                className={`absolute -top-1 -right-1 bg-[#FF6F00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold ${badgeBounce ? 'animate-bounce-badge' : ''}`}
              >
                {count()}
              </span>
            )}
          </button>

          <Link
            href="/order"
            className="hidden md:block bg-[#FF6F00] hover:bg-[#e65c00] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105"
          >
            Order Now
          </Link>

          <button
            className="md:hidden text-[#FDF6EC] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#1A0A00] transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col p-8 gap-6">
          {nowOpen && (
            <div className="flex items-center gap-2 text-sm text-[#4A7C59]">
              <span className="w-2 h-2 rounded-full bg-[#4A7C59] blink-dot" />
              Now Open
            </div>
          )}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#FDF6EC] font-display text-2xl font-semibold hover:text-[#FF6F00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setMobileOpen(false)}
            className="bg-[#FF6F00] text-white text-center font-bold py-3 rounded-full mt-4"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
