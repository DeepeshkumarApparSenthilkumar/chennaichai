import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  const db = supabaseAdmin();
  const { data, error } = await db
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const db = supabaseAdmin();
  const body = await req.json();

  const { customer_name, customer_email, customer_phone, items, total_amount, pickup_time, notes } = body;

  if (!customer_name || !customer_email || !items?.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await db
    .from('orders')
    .insert([{ customer_name, customer_email, customer_phone, items, total_amount, pickup_time, notes, status: 'pending' }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

export async function PATCH(req: Request) {
  const db = supabaseAdmin();
  const { id, status } = await req.json();

  const validStatuses = ['pending', 'confirmed', 'ready', 'delivered'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const { data, error } = await db
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
