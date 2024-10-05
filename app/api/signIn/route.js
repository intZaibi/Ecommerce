import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const user = await req.json()

  const token = jwt.sign(
    { userId: user.uid},
    process.env.SESSION_SECRET,
  );

  cookies().set({
    name: 'token',
    value: token,
    httpOnly: false,
    maxAge: 60*10,
    sameSite: 'strict',
    path: '/'
  });

  return NextResponse.json({success: "Cookie set"})
}


export async function GET() {
  cookies().delete('token');

  return NextResponse.json({success: "Cookie deleted"})
}
