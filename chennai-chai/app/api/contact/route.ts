import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  const db = supabaseAdmin();
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const { data, error } = await db
    .from('contact_messages')
    .insert([{ name, email, message }])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}

export async function GET() {
  const db = supabaseAdmin();
  const { data, error } = await db
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
