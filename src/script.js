"use strict";
import RevolutCheckout from "@revolut/checkout";

const getOrderCardField = async function (price = 0) {
  // Post request send the Price, so backend
  // can create the order with the price variable
  const res = await fetch("/createorder", {
    method: "POST",
    maxBodyLength: Infinity,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderPrice: price,
    }),
  });

  // res will get value when promise is fullfilled
  // console.log(res);
  const orderResponse = await res.json(); // {token: '...', order_id: '...'}
  console.log(orderResponse);

  //Show order token and order_id in webpage
  document.getElementById(
    "order-info"
  ).innerHTML = `<b>Order has been created:</b><br>
                 - Token: ${orderResponse.token}<br>
                 - Order id: ${orderResponse.order_id}<br> 
                `;

  //get the revolut checkout instance
  const instance = await RevolutCheckout(orderResponse.token, "sandbox");

  // creates card field and mounts it to the "cart-field" div
  const cardField = instance.createCardField({
    target: document.getElementById("cart-field"),
    // Handle events related to the payment
    onSuccess() {
      document.getElementById("payment-status").innerText = "Payment Succesful";
      document.getElementById("payment-status").style.color = "green";
      window.alert("Thank you for your purchase!");
    },
    onError(error) {
      document.getElementById(
        "payment-status"
      ).innerText = `Payment failed: ${error}`;

      document.getElementById("payment-status").style.color = "red";

      window.alert(`Oeps somethin happend :(. ${error}`);
    },
    theme: "light",
    styles: {
      border: "1px solid #ae9f9",
    },
  });

  //Ask for card details and show payment button
  document.getElementById("ask-card-details").style.visibility = "visible";
  document.getElementById("cart-field").style.border = "1px solid #ae9f9f";
  document.getElementById("button-pay").style.visibility = "visible";
  //console.log(cardField);

  //Add event listener to the pay button
  document.getElementById("button-pay").addEventListener("click", function () {
    cardField.submit({
      //both fields are required
      "email": "financetofire@hotmail.com",
      "name": "Jordie Simons",
    });
  });
};

// Reference to price input element in the webpage
const orderPriceElement = document.getElementById("order-price");

// Eventlistener to create order
document
  .getElementById("button-create-order")
  .addEventListener("click", () => getOrderCardField(orderPriceElement.value));
