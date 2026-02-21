'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Leaf, Award, Users } from 'lucide-react';
import { MENU_ITEMS, TESTIMONIALS, isNowOpen } from '@/lib/data';
import { useCartStore } from '@/store/cartStore';

function SteamSVG() {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex gap-2 pb-2 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <svg key={i} width="20" height="60" viewBox="0 0 20 60" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`steam-${i + 1} opacity-70`}>
          <path d="M10 55 Q15 45 8 35 Q2 25 12 15 Q18 8 10 2" stroke="#FDF6EC" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      ))}
    </div>
  );
}

function HeroSection() {
  const nowOpen = isNowOpen();
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 40%, #3d1a00 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#FF6F00]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#5C3317]/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {nowOpen && (
          <div className="inline-flex items-center gap-2 bg-[#4A7C59]/20 border border-[#4A7C59]/40 text-[#4A7C59] text-sm px-4 py-1.5 rounded-full mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-[#4A7C59] blink-dot" />
            Now Serving at IIT Chicago
          </div>
        )}

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FDF6EC] leading-[1.05] mb-6">
          <span className="block">Brewed in</span>
          <span className="block text-[#FF6F00]">Chennai.</span>
          <span className="block">Poured in Chicago.</span>
        </h1>

        <p className="text-[#FDF6EC]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Authentic South Indian chai culture — crafted with love by IIT Chicago students. Every cup tells a story of home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/order"
            className="bg-[#FF6F00] hover:bg-[#e65c00] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,111,0,0.4)]"
          >
            Order Now
          </Link>
          <Link
            href="/menu"
            className="border-2 border-[#FDF6EC]/40 hover:border-[#FF6F00] text-[#FDF6EC] font-bold px-8 py-4 rounded-full text-lg transition-all hover:text-[#FF6F00]"
          >
            View Menu
          </Link>
        </div>

        <div className="mt-20 relative inline-block">
          <SteamSVG />
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <ellipse cx="60" cy="125" rx="45" ry="8" fill="#FF6F00" opacity="0.2"/>
            <rect x="15" y="65" width="90" height="55" rx="8" fill="#5C3317" stroke="#FF6F00" strokeWidth="1.5"/>
            <path d="M105 80 Q118 75 118 88 Q118 100 105 95" stroke="#FF6F00" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <ellipse cx="60" cy="65" rx="45" ry="8" fill="#FF6F00" opacity="0.3"/>
            <ellipse cx="60" cy="65" rx="38" ry="6" fill="#3d1a00"/>
            <text x="60" y="100" textAnchor="middle" fill="#FF6F00" fontSize="11" fontFamily="serif" fontStyle="italic">சாய்</text>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1 text-[#FDF6EC]/40 text-xs">
          <div className="w-px h-8 bg-[#FDF6EC]/20 animate-pulse" />
          scroll
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const features = [
    { icon: <Award size={28} className="text-[#FF6F00]" />, title: 'Authentic Recipes', desc: 'Passed down through generations — straight from Chennai tea stalls to your hands.' },
    { icon: <Leaf size={28} className="text-[#FF6F00]" />, title: 'Premium Ingredients', desc: 'Hand-selected loose-leaf teas, fresh ginger, whole spices — no shortcuts.' },
    { icon: <Users size={28} className="text-[#FF6F00]" />, title: 'Student-Made', desc: 'Built and brewed by IIT Chicago students with heart, hustle, and a love for chai.' },
  ];
  return (
    <section className="py-24 bg-[#FDF6EC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Why Chennai Chai</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A0A00]">Not just a cup.<br/>An experience.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#5C3317]/10 group">
              <div className="w-14 h-14 bg-[#FF6F00]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6F00]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-[#1A0A00] mb-3">{f.title}</h3>
              <p className="text-[#5C3317]/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  const featured = MENU_ITEMS.filter((m) => m.is_featured).slice(0, 4);
  const { addItem, openCart } = useCartStore();
  return (
    <section className="py-24 bg-[#1A0A00] relative grain-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Featured</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FDF6EC]">The Signature Sips</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <div key={item.id} className="bg-[#2d1200] rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="relative overflow-hidden h-48">
                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A00]/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#FF6F00] text-white text-xs font-bold px-2 py-0.5 rounded-full capitalize">{item.category}</span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-[#FDF6EC] mb-1">{item.name}</h3>
                <p className="text-[#FDF6EC]/50 text-xs mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#FF6F00] font-bold text-lg">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => { addItem(item); openCart(); }}
                    className="bg-[#FF6F00] hover:bg-[#e65c00] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-all hover:scale-105"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/menu" className="inline-block border-2 border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-bold px-8 py-3 rounded-full transition-all">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(timer);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section className="py-24 bg-[#5C3317] relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 text-[#FF6F00]/5 font-display text-[20rem] font-black leading-none select-none">&quot;</div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-8">What People Say</p>
        <div className="min-h-[160px] flex flex-col items-center justify-center">
          <p className="font-display text-2xl sm:text-3xl text-[#FDF6EC] italic leading-relaxed mb-8">&quot;{t.content}&quot;</p>
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="text-[#FF6F00] fill-[#FF6F00]" />
            ))}
          </div>
          <p className="font-bold text-[#FDF6EC]">{t.name}</p>
          <p className="text-[#FDF6EC]/60 text-sm">{t.role}</p>
        </div>
        <div className="flex justify-center gap-3 mt-8 items-center">
          <button onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="p-2 rounded-full border border-[#FDF6EC]/30 text-[#FDF6EC] hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all"
            aria-label="Previous testimonial">
            <ChevronLeft size={18} />
          </button>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? 'bg-[#FF6F00] w-6' : 'bg-[#FDF6EC]/30 w-2'}`}
              aria-label={`Testimonial ${i + 1}`} />
          ))}
          <button onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
            className="p-2 rounded-full border border-[#FDF6EC]/30 text-[#FDF6EC] hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all"
            aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const imgs = [
    'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&q=80',
    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
  ];
  return (
    <section className="py-24 bg-[#FDF6EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="font-display text-4xl font-bold text-[#1A0A00]">From Our Stall to Your Feed</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative w-full h-full">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#FF6F00]/0 group-hover:bg-[#FF6F00]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm">♥</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationBanner() {
  return (
    <section
      className="py-16 relative grain-overlay"
      style={{ background: 'linear-gradient(135deg, #FF6F00 0%, #e65c00 100%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div>
            <p className="text-white/80 text-sm uppercase tracking-widest mb-2 font-semibold">Find Us On Campus</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Come Get Your Chai</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-white/80 flex-shrink-0" />
              <div>
                <p className="font-bold">Student Center Booth</p>
                <p className="text-white/80 text-sm">IIT Chicago, 3300 S Federal St</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-white/80 flex-shrink-0" />
              <div>
                <p className="font-bold">Mon – Fri: 8AM – 6PM</p>
                <p className="text-white/80 text-sm">Sat – Sun: 10AM – 4PM CST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="py-24 bg-[#1A0A00]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Stay in the Loop</p>
        <h2 className="font-display text-4xl font-bold text-[#FDF6EC] mb-4">Get Notified</h2>
        <p className="text-[#FDF6EC]/60 mb-8">New flavors, pop-ups, and special events — straight to your inbox.</p>
        {submitted ? (
          <p className="text-[#4A7C59] font-bold text-lg">You&apos;re on the list! See you soon. ☕</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-[#2d1200] border border-[#5C3317]/50 text-[#FDF6EC] placeholder-[#FDF6EC]/30 px-5 py-3 rounded-full focus:outline-none focus:border-[#FF6F00] transition-colors"
              aria-label="Email address"
            />
            <button type="submit"
              disabled={loading}
              className="bg-[#FF6F00] hover:bg-[#e65c00] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? '...' : 'Notify Me'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <FeaturedMenu />
      <TestimonialCarousel />
      <GalleryStrip />
      <LocationBanner />
      <NewsletterSection />
    </>
  );
}
