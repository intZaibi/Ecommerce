import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
    try {
      const data = await req.json();
      console.log(data);

      // Create customer object
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
          line_items: [
            {
              price_data: {
                product_data: {
                  name: data.name,
                },
                currency: 'PKR',
                unit_amount: data.price * 100,
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `http://localhost:3000/success?token=customer.id`,
          cancel_url: `http://localhost:3000/cancel?token=customer.id`,
        });
        
      return NextResponse.json({ url: session.url }, { status: 200 });

    } catch (err) {
      console.error('Error creating Stripe session', err);
      return NextResponse.json({ message: 'failed' }, { status: 500 });
    }
}
