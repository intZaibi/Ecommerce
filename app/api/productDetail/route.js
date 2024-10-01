import db from '@/app/utils/db'
import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const currentProductID = url.searchParams.get('productid');
  
  console.log('Current ProductID:', currentProductID);
  
  // const data = await req.json()
  try {
    const query = `
      SELECT *
      FROM allproducts
      JOIN specifications 
        ON allproducts.ProductID = specifications.ProductID
      WHERE allproducts.ProductID = '${currentProductID}'
    `;


    const data = await db.query(query);

    console.log(data[0][0]);

    return NextResponse.json({result: data}, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}