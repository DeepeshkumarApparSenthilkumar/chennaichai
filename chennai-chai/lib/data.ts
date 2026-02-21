import { MenuItem, Testimonial } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Classic Madras Chai', description: 'The original — strong, milky, perfectly sweetened South Indian chai brewed with loose-leaf tea.', price: 3.00, category: 'classic', image_url: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&q=80', is_available: true, is_featured: true },
  { id: '2', name: 'Masala Chai', description: 'A warming blend of ginger, cardamom, cinnamon, and cloves — spiced to perfection.', price: 3.50, category: 'classic', image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80', is_available: true, is_featured: true },
  { id: '3', name: 'Ginger Lemon Chai', description: 'Zesty fresh ginger meets bright lemon in a light, refreshing chai brew.', price: 4.00, category: 'special', image_url: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&q=80', is_available: true, is_featured: false },
  { id: '4', name: 'Rose Cardamom Chai', description: 'Delicate rose petals and aromatic cardamom — floral, fragrant, and utterly beautiful.', price: 4.50, category: 'special', image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80', is_available: true, is_featured: true },
  { id: '5', name: 'Saffron Chai', description: 'Precious saffron strands steeped with warm spices — the most luxurious cup we offer.', price: 5.00, category: 'seasonal', image_url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', is_available: true, is_featured: false },
  { id: '6', name: 'Cold Brew Chai', description: 'Slow-steeped overnight chai concentrate, served over ice with oat milk.', price: 4.50, category: 'special', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', is_available: true, is_featured: true },
  { id: '7', name: 'Bun Butter', description: 'Soft, pillowy bun slathered with salted butter — a classic Chennai bakery staple.', price: 2.00, category: 'snacks', image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80', is_available: true, is_featured: false },
  { id: '8', name: 'Murukku', description: 'Crispy spiral rice flour snack seasoned with sesame and cumin — perfectly crunchy.', price: 1.50, category: 'snacks', image_url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', is_available: true, is_featured: false },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Priya Nair', role: 'CS Graduate, IIT Chicago', content: 'This chai literally tastes like home. Every sip is a hug from Chennai.', rating: 5 },
  { id: '2', name: 'Marcus Johnson', role: 'Engineering Student', content: 'I never knew chai could be this good. The Masala Chai is absolutely incredible!', rating: 5 },
  { id: '3', name: 'Aisha Rahman', role: 'MBA Student', content: 'Finally — authentic chai on campus! The Rose Cardamom is my daily ritual now.', rating: 5 },
  { id: '4', name: 'Dr. Raj Venkat', role: 'Faculty, CS Dept.', content: 'Students have built something truly special. The quality is outstanding.', rating: 5 },
  { id: '5', name: 'Sofia Reyes', role: 'Design Student', content: 'The Cold Brew Chai is a game changer. So refreshing and complex in flavor!', rating: 4 },
];

export const PICKUP_TIMES = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM',
];

export function isNowOpen(): boolean {
  const now = new Date();
  const cst = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
  const h = cst.getHours();
  return h >= 8 && h < 18;
}
