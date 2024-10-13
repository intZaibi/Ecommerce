import db from '@/app/utils/db'
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, address } = await req.json();
  try {
    const [existingData] = await db.query(`SELECT address, name FROM users WHERE email = ?`, [email]);

    if (address) {
      const jsonAddress = JSON.stringify(address);

      if (existingData) {
        await db.query(`UPDATE users SET address = ?, name = ? WHERE email = ?`, [jsonAddress, name, email]);
      } else {
        await db.query(`INSERT INTO users (address, name, email) VALUES (?, ?, ?)`, [jsonAddress, name, email]);
      }
    } else {
      if (existingData) {
        await db.query(`UPDATE users SET name = ? WHERE email = ?`, [name, email]);
      } else {
        await db.query(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email]);
      }
    }

    return NextResponse.json({ message: "Done successfully!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 400 });
  }
}


export async function GET(req) {
  const url = new URL(req.url);
  const email = url.searchParams.get('email');

  try {
    const [existingData] = await db.query(`SELECT name, address FROM users WHERE email = ?`, [email]);

    if (!existingData) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    return NextResponse.json({ existingData }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 400 });
  }
}