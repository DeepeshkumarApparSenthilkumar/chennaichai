import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  const db = supabaseAdmin();
  const { data, error } = await db
    .from('menu_items')
    .select('*')
    .eq('is_available', true)
    .order('category');

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const db = supabaseAdmin();
  const body = await req.json();
  const { data, error } = await db.from('menu_items').insert([body]).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

export async function PATCH(req: Request) {
  const db = supabaseAdmin();
  const body = await req.json();
  const { id, ...updates } = body;
  const { data, error } = await db.from('menu_items').update(updates).eq('id', id).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
