'use client';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';

import CheckoutForm from './_components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

export default function App() {

  const searchParams = useSearchParams();

  const options = {
    mode: 'payment',
    amount: Number(searchParams.get('amount')) * 100,
    currency: 'eur',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount')) * 100} />
    </Elements>
  );
};
