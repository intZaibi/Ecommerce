import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullname, email, phone, objective, description } = await req.json();
  const query = 'INSERT INTO contactform (Name, Email, Phone, Objective, Message) VALUES (?, ?, ?, ?, ?)';
  try {
      await db.query(query, [fullname, email, phone, objective, description]);
      return NextResponse.json({status: 200}, { message: 'Form data saved successfully' });

    } catch (error) {
      return NextResponse.json({status: 200}, { message: 'Error saving form data', error });
    }
}
