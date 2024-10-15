import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {

  console.log("reached to checkout api...")

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
                currency: 'USD',
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
          success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        });
        
      return NextResponse.json({ url: session.url }, { status: 200 });

    } catch (err) {
      console.error('Error creating Stripe session', err);
      return NextResponse.json({ error: err }, { status: 500 });
    }
}
