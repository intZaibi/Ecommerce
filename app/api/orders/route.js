import db from '@/app/utils/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();

    const res = await db.query(`SELECT * FROM orders WHERE customer_email = ?`, [email]);

    return NextResponse.json({ data: res[0] }, { status: 200 });
  } catch (error) {
    console.error('Error executing query:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
