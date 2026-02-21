export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'special' | 'seasonal' | 'snacks';
  image_url: string;
  is_available: boolean;
  is_featured: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  items: CartItem[];
  total_amount: number;
  status: 'pending' | 'confirmed' | 'ready' | 'delivered';
  pickup_time: string;
  notes?: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
