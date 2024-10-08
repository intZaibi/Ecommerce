import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import db from '@/app/utils/db'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,  // Stripe requires raw body for signature verification
  },
};

export async function POST(req, res) {

  const body = await req.text()
  const sig = headers().get("Stripe-Signature");

  let event;
  
  try {
    // Verify the webhook signature using the raw body and secret
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ send: `Webhook Error: ${err.message}` }, { status: 200 });
  }

  if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const { customer_email, amount_total } = session;

      
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
      
      const products = lineItems.data.map((item) =>  {
        return {
          description: item.description, 
          quantity: item.quantity
        }
      })
      // console.log("Session Data: ", session )

      // console.log('LineItems: ', lineItems.data[0].price.metadata, "\nProducts Datatype: ", typeof products, "\nProducts: ", products);

      saveOrderToDatabase({ customer_email, products, amount_total });
  } else {
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
};


const saveOrderToDatabase = async (orderData) => {
  const { customer_email, products, amount_total } = orderData;

  // const query = `
  //   INSERT INTO orders (customer_email, product_data, amount_total)
  //   VALUES (?, ?, ?)
  // `;

  // const values = [
  //   customer_email,
  //   products,
  //   amount_total,
  // ];
  
  // console.log(values)
  await db.query(`
    INSERT INTO orders (customer_email, product_data, amount_total)
    VALUES (?, ?, ?)
  `, [
    customer_email,
    JSON.stringify(products),
    amount_total,
  ]);
};
