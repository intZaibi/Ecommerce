import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {email} = await req.json();
  
  try {
    await db.query(`select * from allproducts`);
    db.query('INSERT INTO users (email) VALUES (?)', [email])
    return NextResponse.json({ message: `Email: ${email} is added!` }, {status: 200})
  } catch (error) {
    return NextResponse.json({ error: error }, {status: 400})
  }
}