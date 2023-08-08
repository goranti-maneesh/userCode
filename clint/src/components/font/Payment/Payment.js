import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHED_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const makePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    console.log(CardElement, cardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      fetch("http://localhost:3001/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: 1000,
          orderDetails: {
            items: [
              {
                id: 1,
                quantity: 2,
              },
              {
                id: 2,
                quantity: 1,
              },
            ],
          },
        }),
      });
    }
  };

  return (
    <div>
      <CardElement />
      <button type="button" onClick={makePayment}>
        Pay bill
      </button>
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payment;
