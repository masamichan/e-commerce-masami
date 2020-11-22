import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HqBekFOpA49p3VzObVkfYpngyPw9iZkFuBJWhy9FPw7ftbQ2qeogF0keJjWB5lkI9ZuaPAYUHAzftIEp9I1O0IN00qAh7dgAX";

  const onToken = (token) => {
    console.log(token);
    alert("お支払いが完了しました");
  };

  return (
    <StripeCheckout
      labe="お支払い"
      name="e-commerce-payment"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`合計金額は${price}円です`}
      amount={priceForStripe}
      panelLabel="お支払い"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
