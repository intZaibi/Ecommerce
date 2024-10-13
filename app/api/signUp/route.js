import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function POST(req) {
  const {email} = await req.json();
  
  try {
    db.query('INSERT INTO user (email) VALUES (?)', [email])
    return NextResponse.json({status: 200}, { message: 'Email added!' })
  } catch (error) {
    return NextResponse.json({status: 400}, { message: 'Something went wrong!' })
  }
}