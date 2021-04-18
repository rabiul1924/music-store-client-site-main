import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51IecwdLid0Svp9cO7prIh8sj4exfbPfyxaUX6348vIUv2gAO7uJrt85Efy7oNo6OPDoaGlR7HaeuHLhEa1q1yiHK0088DqhEoX');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
        <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>

    </Elements>
    );
};

export default ProcessPayment;