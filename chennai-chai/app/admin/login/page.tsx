'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email === 'admin@chennaichai.com' && password === 'chai2026') {
      localStorage.setItem('cc-admin', '1');
      router.push('/admin');
    } else {
      setError('Invalid credentials. Use admin@chennaichai.com / chai2026');
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 grain-overlay"
      style={{ background: 'linear-gradient(135deg, #1A0A00 0%, #2d1200 100%)' }}
    >
      <div className="bg-[#FDF6EC] rounded-3xl p-10 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="mx-auto mb-4">
            <path d="M8 14 Q10 8 16 8 Q22 8 24 14 L22 24 Q20 26 16 26 Q12 26 10 24 Z" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
            <path d="M24 16 Q28 14 28 18 Q28 22 24 20" stroke="#FF6F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <h1 className="font-display text-3xl font-bold text-[#1A0A00]">Admin Login</h1>
          <p className="text-[#5C3317]/60 text-sm mt-1">Chennai Chai Dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@chennaichai.com"
              className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00] placeholder-[#5C3317]/30" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A0A00] mb-2" htmlFor="password">Password</label>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-[#5C3317]/20 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6F00] transition-colors text-[#1A0A00]" />
          </div>
          <button type="submit"
            className="w-full bg-[#FF6F00] hover:bg-[#e65c00] text-white font-bold py-3 rounded-full transition-all hover:scale-[1.02] mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
