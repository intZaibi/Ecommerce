import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const { username, password } = await req.json();

  if(username === 'admin' && password === 'admin'){
    const token = jwt.sign(
      { admin: "admin"},
      process.env.SESSION_SECRET,
      { expiresIn: '10min' }
    );
    
    cookies().set({
      name: 'admin',
      value: token,
      httpOnly: false,
      maxAge: 60*10,
      sameSite: 'strict',
      path: '/'
    });
    return NextResponse.json({success: "Successful"}, {status: 200})
  } else {
    return NextResponse.json({error: "Invalid credentials"}, {status: 400})
  }

}

export async function GET(req) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    console.log(decoded)
    if (decoded.admin === "admin") {
      return NextResponse.json({ success: "Valid token" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
