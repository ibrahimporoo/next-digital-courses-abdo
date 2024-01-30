import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-08-16",
});

export async function POST(req: any) {
  const { data } = await req.json();
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "eur",
    });
    return new NextResponse(paymentIntent.client_secret, { status: 200 });

  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}