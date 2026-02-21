'use client';
import { useState } from 'react';
import { Instagram, MessageCircle, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  { q: 'How do I place an order?', a: 'Head to our Menu page, add items to your cart, then proceed to checkout. Select your pickup time and we\'ll have your chai ready!' },
  { q: 'Where can I pick up my order?', a: 'Our booth is at the Student Center, IIT Chicago (3300 S Federal St). Look for the orange Chennai Chai signage!' },
  { q: 'Do you have dairy-free options?', a: 'Yes! Ask for oat milk or almond milk substitutes when placing your order. Just add it to the special requests field.' },
  { q: 'What are your operating hours?', a: 'Monday–Friday: 8AM–6PM CST. Saturday–Sunday: 10AM–4PM CST. We follow IIT Chicago\'s academic calendar.' },
  { q: 'Do you cater events?', a: 'We love catering campus events! Reach out via the contact form below with your event details and we\'ll get back to you.' },
  { q: 'Are your ingredients allergen-free?', a: 'Our chai contains milk and may contain traces of nuts. For specific allergen info, please contact us directly before ordering.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#5C3317]/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left hover:text-[#FF6F00] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1A0A00] pr-4">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#FF6F00] flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-[#5C3317]/70 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error || 'Failed to send message');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <div
        className="pt-32 pb-16 px-4 text-center grain-overlay"
        style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 100%)' }}
      >
        <p className="text-[#FF6F00] font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h1 className="font-display text-5xl font-black text-[#FDF6EC] mb-4">Say Hello</h1>
        <p className="text-[#FDF6EC]/60 text-lg max-w-xl mx-auto">Have a question, feedback, or just want to chat about chai? We&apos;d love to hear from you.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1A0A00] mb-8">Contact Us</h2>

            {submitted ? (
              <div className="bg-[#4A7C59]/10 border border-[#4A7C59]/30 rounded-2xl p-8 text-center">
                <p className="text-[#4A7C59] font-bold text-xl mb-2">Message Sent!</p>
                <p className="text-[#4A7C59]/70">We&apos;ll get back to you within 24 hours. ☕</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@hawk.iit.edu' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor={key}>{label}</label>
                    <input
                      id={key}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00] placeholder-[#5C3317]/30"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00] placeholder-[#5C3317]/30 resize-none"
                  />
                </div>
                <button type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF6F00] hover:bg-[#e65c00] text-white font-bold py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
              </form>
            )}

            <div className="mt-10 pt-10 border-t border-[#5C3317]/10">
              <p className="text-sm font-semibold text-[#1A0A00] mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-[#5C3317]/20 px-4 py-3 rounded-xl hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all text-sm font-semibold"
                  aria-label="Instagram">
                  <Instagram size={18} /> @chennai.chai.iit
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-[#5C3317]/20 px-4 py-3 rounded-xl hover:border-[#FF6F00] hover:text-[#FF6F00] transition-all text-sm font-semibold"
                  aria-label="WhatsApp">
                  <MessageCircle size={18} /> WhatsApp Group
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl border border-[#5C3317]/10">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#FF6F00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A0A00] text-sm">Our Booth</p>
                  <p className="text-[#5C3317]/70 text-sm">Student Center, Illinois Institute of Technology</p>
                  <p className="text-[#5C3317]/70 text-sm">3300 S Federal St, Chicago, IL 60616</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <Clock size={20} className="text-[#FF6F00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A0A00] text-sm">Hours</p>
                  <p className="text-[#5C3317]/70 text-sm">Mon–Fri: 8AM–6PM | Sat–Sun: 10AM–4PM CST</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-[#1A0A00] mb-8">FAQ</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-[#5C3317]/10 px-6">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
