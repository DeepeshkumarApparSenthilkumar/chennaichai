'use client';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { PICKUP_TIMES } from '@/lib/data';
import { CheckCircle, CreditCard, Package } from 'lucide-react';

export default function OrderPage() {
  const { items, total, clearCart } = useCartStore();
  const [form, setForm] = useState({ name: '', email: '', phone: '', pickupTime: '', notes: '', payMethod: 'pickup' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
          total_amount: total(),
          pickup_time: form.pickupTime,
          notes: form.notes,
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to place order');
      setSubmitted(true);
      clearCart();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#4A7C59]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#4A7C59]" />
          </div>
          <h1 className="font-display text-4xl font-bold text-[#1A0A00] mb-3">Order Confirmed!</h1>
          <p className="text-[#5C3317]/70 mb-6">
            Thanks {form.name}! Your chai is being brewed. We&apos;ll send a confirmation to <strong>{form.email}</strong>.
          </p>
          <p className="text-[#FF6F00] font-semibold mb-8">Pickup at {form.pickupTime}</p>
          <a href="/" className="inline-block bg-[#FF6F00] text-white font-bold px-8 py-3 rounded-full hover:bg-[#e65c00] transition-all hover:scale-105">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <div
        className="pt-32 pb-16 px-4 text-center grain-overlay"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 100%)' }}
      >
        <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Checkout</p>
        <h1 className="font-display text-5xl font-black text-[#FDF6EC]">Complete Your Order</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <Package size={60} className="text-[#5C3317]/30 mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-[#1A0A00] mb-3">Your cart is empty</h2>
            <p className="text-[#5C3317]/60 mb-6">Head to the menu and add some chai first.</p>
            <a href="/menu" className="inline-block bg-[#FF6F00] text-white font-bold px-8 py-3 rounded-full hover:bg-[#e65c00] transition-all">
              Browse Menu
            </a>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-[#1A0A00]">Your Details</h2>

              {[
                { label: 'Full Name', key: 'name', type: 'text', required: true, placeholder: 'John Doe' },
                { label: 'Email Address', key: 'email', type: 'email', required: true, placeholder: 'john@hawk.iit.edu' },
                { label: 'Phone Number', key: 'phone', type: 'tel', required: false, placeholder: '+1 (312) 000-0000' },
              ].map(({ label, key, type, required, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor={key}>
                    {label} {required && <span className="text-[#FF6F00]">*</span>}
                  </label>
                  <input
                    id={key}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00] placeholder-[#5C3317]/30"
                    aria-required={required}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor="pickupTime">
                  Pickup Time <span className="text-[#FF6F00]">*</span>
                </label>
                <select
                  id="pickupTime"
                  required
                  value={form.pickupTime}
                  onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                  className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00]"
                  aria-required="true"
                >
                  <option value="">Select a time slot</option>
                  {PICKUP_TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor="notes">
                  Special Requests
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Allergies, extra spicy, less sugar..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00] placeholder-[#5C3317]/30 resize-none"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1A0A00] mb-3">Payment Method</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'pickup', label: 'Pay at Pickup', icon: <Package size={18} /> },
                    { value: 'card', label: 'Pay with Card', icon: <CreditCard size={18} /> },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setForm({ ...form, payMethod: value })}
                      className={`flex items-center gap-2 p-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                        form.payMethod === value
                          ? 'border-[#FF6F00] bg-[#FF6F00]/10 text-[#FF6F00]'
                          : 'border-[#5C3317]/20 text-[#5C3317] hover:border-[#FF6F00]/50'
                      }`}
                      aria-pressed={form.payMethod === value}
                    >
                      {icon} {label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF6F00] hover:bg-[#e65c00] text-white font-bold py-4 rounded-full text-lg transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Placing Order...' : `Place Order — $${total().toFixed(2)}`}
              </button>
              {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            </form>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A0A00] mb-6">Order Summary</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-[#5C3317]/10 overflow-hidden">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-4 border-b border-[#5C3317]/10 last:border-0">
                    <img src={item.image_url} alt={item.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-[#1A0A00] text-sm">{item.name}</p>
                      <p className="text-[#5C3317]/60 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-[#FF6F00] text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="p-4 bg-[#FDF6EC] flex justify-between items-center">
                  <span className="font-bold text-[#1A0A00]">Total</span>
                  <span className="font-display text-2xl font-black text-[#FF6F00]">${total().toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#4A7C59]/10 rounded-xl border border-[#4A7C59]/20">
                <p className="text-[#4A7C59] text-sm font-semibold">Student Center Booth</p>
                <p className="text-[#4A7C59]/70 text-xs mt-1">IIT Chicago, 3300 S Federal St — Mon-Fri 8AM–6PM</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
