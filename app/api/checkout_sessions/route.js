import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {

    const { cartItems, user } = await req.json();
    try {
      
      const session = await stripe.checkout.sessions.create({
          line_items: cartItems.map((item, index) => {
            return {
              price_data: {
                product_data: {
                  name: item.ProductName,
                  images: [item.ImageURLs[0]],
                },
                currency: 'PKR',
                unit_amount: item.Price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity: item.quantity || 1,
            }
          }),
          mode: 'payment',
          submit_type: 'pay',
          billing_address_collection: 'auto',
          customer_email: user.email,
          metadata: {
            userID: user.uid
          },
          success_url: `http://localhost:3000/products`,
          cancel_url: `http://localhost:3000/products`,
        });
        
      return NextResponse.json({ url: session.url }, { status: 200 });

    } catch (err) {
      console.error('Error creating Stripe session', err);
      return NextResponse.json({ message: 'failed' }, { status: 500 });
    }
}
