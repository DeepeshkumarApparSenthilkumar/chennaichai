import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
  const db = supabaseAdmin();
  const { email } = await req.json();

  if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });

  const { data, error } = await db
    .from('newsletter')
    .upsert([{ email }], { onConflict: 'email' })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
