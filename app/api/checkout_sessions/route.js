import { metadata } from '@/app/layout';
import { auth } from '@/app/utils/firebase';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
    try {
      const { cartItems } = await req.json();
      
      const customer = await stripe.customers.create({
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
        email: 'customer@example.com',
      });

      const session = await stripe.checkout.sessions.create({
          line_items: cartItems.map((item, index) => {
            return {
              price_data: {
                product_data: {
                  name: item.ProductName,
                  images: [item.ImageURLs[0]],
                  metadata : {
                    productId : item.ProductID
                  }
                },
                currency: 'PKR',
                unit_amount: item.Price * 100,
              },
              quantity: item.quantity || 1,
            }
          }),
          mode: 'payment',
          submit_type: 'pay',
          billing_address_collection: 'auto',
          // customer_email: user.email,
          success_url: `http://localhost:3000/success?token=customer.id`,
          cancel_url: `http://localhost:3000/cancel?token=customer.id`,
        });
        
      return NextResponse.json({ url: session.url }, { status: 200 });

    } catch (err) {
      console.error('Error creating Stripe session', err);
      return NextResponse.json({ message: 'failed' }, { status: 500 });
    }
}
