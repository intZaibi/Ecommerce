import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {email} = await req.json();
  
  try {
    const data = await db.query(`select * from allproducts`);
    console.log(data)
    const res = db.query('INSERT INTO user (email) VALUES (?)', [email])
    console.log(res)
    return NextResponse.json({ message: `Email: ${email} is added!\n db: ${data}` }, {status: 200})
  } catch (error) {
    return NextResponse.json({ error: error }, {status: 400})
  }
}