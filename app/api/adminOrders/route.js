import db from '@/app/utils/db'
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const [orders] = await db.query(`SELECT * FROM orders`);

      return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 400 });
  }
}