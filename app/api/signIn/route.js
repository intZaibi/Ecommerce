import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const user = await req.json()

  const token = jwt.sign(
    { userId: user.uid},
    "enc",
    { expiresIn: '15s' }
  );

  cookies().set({
    name: 'token',
    value: token,
    httpOnly: false,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60*10, // 15 seconds
    sameSite: 'strict',
    path: '/'
  });

  return NextResponse.json({success: "Cookie set"})
}


export async function GET() {
  cookies().delete('token');

  return NextResponse.json({success: "Cookie deleted"})
}
