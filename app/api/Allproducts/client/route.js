import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const query = `
      SELECT 
        *
      FROM allproducts
      JOIN specifications ON allproducts.ProductID = specifications.ProductID
    `;

    const data = await db.query(query);

    return NextResponse.json({ result: data[0] }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(req) {
  const { descriptions } = await req.json();

    if (!descriptions || descriptions.length === 0) {
      return NextResponse.json({ message: 'No product descriptions provided' }, { status: 400 });
    }

    try {
      const placeholders = descriptions.map(() => '?').join(',');

      const query = `
        SELECT allproducts.*, specifications.* 
        FROM allproducts 
        JOIN specifications ON allproducts.ProductID = specifications.ProductID
        WHERE allproducts.ProductName IN (${placeholders})
      `;
      
      const [rows] = await db.execute(query, descriptions);

      return NextResponse.json({ rows }, { status: 200 });

    } catch (error) {
      console.error("Error fetching product details:", error);
      return NextResponse.json({ message: 'Error fetching product details' }, { status: 400 });
    }
}


