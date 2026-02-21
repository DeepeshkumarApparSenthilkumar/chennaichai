'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MENU_ITEMS } from '@/lib/data';
import { MenuItem, Order } from '@/types';
import { LogOut, Package, Users, DollarSign, TrendingUp, Edit2, ToggleLeft, ToggleRight } from 'lucide-react';

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  confirmed: 'bg-blue-100 text-blue-700',
  ready: 'bg-[#4A7C59]/20 text-[#4A7C59]',
  delivered: 'bg-gray-100 text-gray-500',
};

const NEXT_STATUS: Record<string, string> = {
  pending: 'confirmed',
  confirmed: 'ready',
  ready: 'delivered',
  delivered: 'delivered',
};

export default function AdminDashboard() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [menu, setMenu] = useState<MenuItem[]>(MENU_ITEMS);
  const [tab, setTab] = useState<'orders' | 'menu'>('orders');
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('cc-admin')) {
        router.push('/admin/login');
      } else {
        setAuthed(true);
        fetchOrders();
      }
    }
  }, [router]);

  async function fetchOrders() {
    setLoadingOrders(true);
    try {
      const res = await fetch('/api/orders');
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
      }
    } catch {}
    finally { setLoadingOrders(false); }
  }

  function logout() {
    localStorage.removeItem('cc-admin');
    router.push('/admin/login');
  }

  async function advanceStatus(id: string, currentStatus: string) {
    const newStatus = NEXT_STATUS[currentStatus];
    const res = await fetch('/api/orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus }),
    });
    if (res.ok) {
      setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: newStatus as Order['status'] } : o));
    }
  }

  function toggleAvailability(id: string) {
    setMenu((prev) => prev.map((m) => m.id === id ? { ...m, is_available: !m.is_available } : m));
  }

  if (!authed) return null;

  const todayOrders = orders.length;
  const todayRevenue = orders.reduce((s, o) => s + Number(o.total_amount), 0);
  const popularItem = 'Masala Chai';

  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      <div className="bg-[#1A0A00] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M8 14 Q10 8 16 8 Q22 8 24 14 L22 24 Q20 26 16 26 Q12 26 10 24 Z" stroke="#FF6F00" strokeWidth="1.5" fill="none"/>
            <path d="M24 16 Q28 14 28 18 Q28 22 24 20" stroke="#FF6F00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <span className="font-display text-lg font-bold text-[#FDF6EC]">Admin Dashboard</span>
        </div>
        <button onClick={logout}
          className="flex items-center gap-2 text-[#FDF6EC]/70 hover:text-[#FF6F00] transition-colors text-sm"
          aria-label="Logout">
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Package size={20} className="text-[#FF6F00]" />, label: 'Orders Today', value: todayOrders },
            { icon: <DollarSign size={20} className="text-[#FF6F00]" />, label: 'Revenue Today', value: `$${todayRevenue.toFixed(2)}` },
            { icon: <TrendingUp size={20} className="text-[#FF6F00]" />, label: 'Most Popular', value: popularItem },
            { icon: <Users size={20} className="text-[#FF6F00]" />, label: 'Menu Items', value: menu.filter((m) => m.is_available).length + ' active' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-[#5C3317]/10">
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className="text-xs text-[#5C3317]/60 font-semibold uppercase tracking-wide">{stat.label}</span>
              </div>
              <p className="font-display text-xl font-bold text-[#1A0A00]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          {(['orders', 'menu'] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full font-semibold text-sm capitalize transition-all ${
                tab === t ? 'bg-[#FF6F00] text-white' : 'bg-white text-[#5C3317] border border-[#5C3317]/20 hover:border-[#FF6F00]'
              }`}>
              {t === 'orders' ? 'Orders' : 'Menu Management'}
            </button>
          ))}
        </div>

        {tab === 'orders' && (
          <div className="bg-white rounded-2xl shadow-sm border border-[#5C3317]/10 overflow-hidden">
            {loadingOrders ? (
              <div className="text-center py-16 text-[#5C3317]/50">Loading orders...</div>
            ) : orders.length === 0 ? (
              <div className="text-center py-16 text-[#5C3317]/50">No orders yet. They&apos;ll appear here once customers place them.</div>
            ) : (
              <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#1A0A00] text-[#FDF6EC]">
                  <tr>
                    {['Order ID', 'Customer', 'Items', 'Total', 'Pickup', 'Status', 'Action'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b border-[#5C3317]/10 hover:bg-[#FDF6EC]/50 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-[#5C3317]/60">{order.id.slice(0, 8)}...</td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-[#1A0A00]">{order.customer_name}</p>
                        <p className="text-xs text-[#5C3317]/50">{order.customer_email}</p>
                      </td>
                      <td className="px-4 py-3">
                        {Array.isArray(order.items) && order.items.map((i, idx) => (
                          <p key={idx} className="text-xs">{i.name} ×{i.quantity}</p>
                        ))}
                      </td>
                      <td className="px-4 py-3 font-bold text-[#FF6F00]">${Number(order.total_amount).toFixed(2)}</td>
                      <td className="px-4 py-3 text-xs">{order.pickup_time}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold capitalize ${STATUS_COLORS[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {order.status !== 'delivered' && (
                          <button
                            onClick={() => advanceStatus(order.id, order.status)}
                            className="text-xs bg-[#FF6F00]/10 text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white font-semibold px-3 py-1.5 rounded-full transition-all"
                          >
                            → {NEXT_STATUS[order.status]}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
        )}

        {tab === 'menu' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menu.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-[#5C3317]/10 flex gap-3">
                <img src={item.image_url} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-[#1A0A00] text-sm truncate">{item.name}</p>
                      <p className="text-[#FF6F00] font-bold text-sm">${item.price.toFixed(2)}</p>
                      <span className="text-xs bg-[#FF6F00]/10 text-[#FF6F00] px-2 py-0.5 rounded-full capitalize">{item.category}</span>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button
                        onClick={() => toggleAvailability(item.id)}
                        className="p-1.5 rounded-lg hover:bg-[#FDF6EC] transition-colors"
                        aria-label={`Toggle ${item.name} availability`}
                        title={item.is_available ? 'Mark unavailable' : 'Mark available'}
                      >
                        {item.is_available
                          ? <ToggleRight size={20} className="text-[#4A7C59]" />
                          : <ToggleLeft size={20} className="text-gray-400" />}
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-[#FDF6EC] transition-colors text-[#5C3317]/40 hover:text-[#FF6F00]"
                        aria-label={`Edit ${item.name}`}>
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
