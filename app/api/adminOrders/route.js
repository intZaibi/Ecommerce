import db from '@/app/utils/db'
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const [orders] = await db.query(`SELECT * FROM orders`);
    console.log(orders)

      return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 400 });
  }
}


export async function POST(req) {
  const { Status, id } = await req.json();

  try {
    await db.query(`UPDATE orders SET STATUS = ? WHERE id = ?`, [Status, id])
    return NextResponse.json({ message: "Order updated successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 400 });
  }
}