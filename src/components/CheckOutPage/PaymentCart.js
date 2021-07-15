import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router';



const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#005A8D",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#005A8D"
      }
    },
    invalid: {
      iconColor: "#CF0000",
      color: "#CF0000"
    }
  }
};

export const PaymentCart = ({ orderDetails }) => {

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message)
      setSuccess(null)
    } else {
      setSuccess('Payment Successfully done')
      setError(null)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6 className="text-center py-4 title">Enter Card Number Here</h6>
        <CardElement options={CARD_OPTIONS} />
        <button className="button mt-4 d-block ms-auto " type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className="pt-4 text-primary text-center">{success}</p>
        <p className="pt-4 text-danger text-center">{error}</p>
    </form >
  );
};