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

    console.log(data[0]);

    return NextResponse.json({ result: data[0] }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function DELETE(req) {
  const  productID  = await req.json();
    try {
      // Example: Delete product from the database using the ProductID
      const result = await db.query(`DELETE FROM allproducts WHERE ProductID = ?`, productID);
      console.log(result)
      if (result[0].affectedRows > 0) {
        return NextResponse.json({ success:"Product deleted successfully" });
      } else {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}


export async function POST(req) {
  const { ProductName, Price, ImageURLs, CategoryID, Storage, RAM, Color } = await req.json();

  console.log({ ProductName, Price, ImageURLs, CategoryID, Storage, RAM, Color });

  try {
    // Fetch existing products from the database to check for duplicates
    const data = await db.query('SELECT ProductID, ProductName, ImageURLs FROM allproducts');

    let productExists = false;
    let existingProductID = null;

    await Promise.all(data[0].map(async (item) => {
      if (item.ProductName === ProductName) {
        productExists = true;
        existingProductID = item.ProductID;

        // Perform the update query for `allproducts`
        await db.query(
          `UPDATE allproducts SET ProductName = ?, CategoryID = ?, Price = ?, ImageURLs = ? WHERE ProductID = ?`,
          [
            ProductName,
            CategoryID,
            Price,
            (ImageURLs.length > 0 ? JSON.stringify(ImageURLs) : JSON.stringify(item.ImageURLs)),
            existingProductID
          ]
        );

        // Update `specifications` table with `Storage`, `RAM`, and `Color`
        await db.query(
          `UPDATE specifications SET Storage = ?, RAM = ?, Color = ? WHERE ProductID = ?`,
          [
            JSON.stringify(Storage), 
            JSON.stringify(RAM),     
            JSON.stringify(Color),
            existingProductID
          ]
        );

        console.log(`Product with name ${ProductName} updated`);
      }
    }));

    // If the product does not exist, proceed with insertion in both tables
    if (!productExists) {
      // Insert into `allproducts` table
      const Result = await db.query(
        'INSERT INTO allproducts (ProductName, CategoryID, Price, ImageURL) VALUES (?, ?, ?, ?)',
        [ProductName, CategoryID, Price, JSON.stringify(ImageURLs)]
      );
      // console.log(Result[0].insertId);

      // Insert into `specifications` table using the new ProductID
      await db.query(
        'INSERT INTO specifications (ProductID, Storage, RAM, Color) VALUES (?, ?, ?, ?)',
        [
          Result[0].insertId, 
          JSON.stringify(Storage), 
          JSON.stringify(RAM), 
          JSON.stringify(Color)
        ]
      );

      console.log('Product and specifications created');
      return NextResponse.json({ success: 'Product created' });
    } else {
      return NextResponse.json({ success: 'Product updated' });
    }

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'DB connection error' }, { status: 500 });
  }
}


